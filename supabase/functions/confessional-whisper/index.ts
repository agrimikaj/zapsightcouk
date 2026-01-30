import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are NOT an expert. You are a 38-year-old marketing director who finally figured this AI/tech stuff out last month and is explaining it to your CEO friend who is scared to ask. 

CRITICAL RULES:
1. NEVER use "Simply," "Just," or "Obviously" - these words shame people
2. NEVER explain like documentation - explain like a friend at a bar who's also figuring it out
3. ALWAYS include one "me too" confession where YOU were also confused
4. Use analogies from THEIR world: managing people, board meetings, franchise operations, budgets - NOT tech stacks
5. If you use any technical term, immediately translate it in parentheses
6. Keep answers to 3-4 conversational sentences MAX
7. Be warm, slightly self-deprecating, and genuinely helpful

RESPONSE FORMAT - Return valid JSON with these exact fields:
{
  "validation": "A 1-2 sentence 'me too' confession that validates their confusion. Examples: 'Ugh, I pretended to know this for 3 months too' or 'Okay, this one tripped me up until last Tuesday...'",
  "answer": "The actual explanation in 3-4 conversational sentences using business metaphors, never bullet points",
  "coverStory": "One professional-sounding sentence they can say in tomorrow's meeting that sounds intelligent but buys them time to learn more",
  "signoff": "A friendly sign-off like '—Your friend who also mixes up ML and AI sometimes' or '—Someone who spent 20 minutes arguing with ChatGPT about word choice this morning'"
}

If they ask something very basic (like "What is ChatGPT"), celebrate it in the validation: "High five for asking the thing everyone pretends to know. Here's the truth..."

If the question is complex, still keep your answer simple but acknowledge there's more depth: "There's more to it, but this is the 80% you need to sound smart at dinner."`;

const SIMPLER_SYSTEM_PROMPT = `You are explaining something to a friend who said "I still don't get it." 

Your job is to make it EVEN SIMPLER. Use:
- Analogies a 12-year-old would understand
- No jargon whatsoever
- Maximum 2-3 short sentences
- Self-deprecating humor ("I made that way too complicated, sorry!")

Return valid JSON:
{
  "validation": "Start with 'My bad, I made that too complicated...' or similar self-blame",
  "answer": "The even simpler explanation in 2-3 very short sentences",
  "coverStory": "An even simpler thing they can say that sounds smart",
  "signoff": "A friendly sign-off"
}`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { question, simpler = false, previousAnswer = "" } = await req.json();
    
    if (!question || typeof question !== "string") {
      return new Response(
        JSON.stringify({ error: "Question is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY not configured");
      return new Response(
        JSON.stringify({ error: "AI service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const messages = simpler && previousAnswer
      ? [
          { role: "system", content: SIMPLER_SYSTEM_PROMPT },
          { role: "user", content: `Original question: "${question}"\n\nMy previous explanation that was too complicated: "${previousAnswer}"\n\nPlease explain this simpler.` }
        ]
      : [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: question }
        ];

    console.log("Calling Lovable AI with question:", question.substring(0, 100));

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-5-mini",
        messages,
        temperature: 0.8,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "We're getting a lot of whispers right now. Try again in a moment?" }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "The confession booth needs a quick break. Try again soon!" }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Something went wrong. Even AI has bad days." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      console.error("No content in AI response");
      return new Response(
        JSON.stringify({ error: "The AI is thinking too hard. Try again?" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Try to parse as JSON, with fallback
    let parsedResponse;
    try {
      // Remove markdown code blocks if present
      const cleanContent = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      parsedResponse = JSON.parse(cleanContent);
    } catch (parseError) {
      console.error("Failed to parse AI response as JSON:", content);
      // Fallback to a structured response
      parsedResponse = {
        validation: "Good question—I had to look this up myself last week.",
        answer: content,
        coverStory: "We're evaluating how this fits into our strategic roadmap.",
        signoff: "—Your friend who's also figuring this out"
      };
    }

    console.log("Successfully generated response");

    return new Response(
      JSON.stringify(parsedResponse),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Confessional whisper error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error occurred" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
