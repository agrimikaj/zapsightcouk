import { Database, Mail, FileText } from 'lucide-react';

interface DataCategory {
  title: string;
  icon: React.ReactNode;
  items: string[];
  note?: string;
}

const dataCategories: DataCategory[] = [
  {
    title: 'ERPs & CRMs',
    icon: <Database className="h-5 w-5" strokeWidth={1.5} />,
    items: [
      'Microsoft Dynamics / Oracle / SAP',
      'Salesforce / Hubspot / Zoho',
    ],
  },
  {
    title: 'Data Lakes & Warehouses',
    icon: <Database className="h-5 w-5" strokeWidth={1.5} />,
    items: [
      'MySQL / MSSQL / PostgreSQL',
      'Redshift / BigQuery',
      'Databricks / Snowflake',
    ],
  },
  {
    title: 'Emails, Messaging & Ticketing',
    icon: <Mail className="h-5 w-5" strokeWidth={1.5} />,
    items: [
      'Gmail / Outlook',
      'Slack / Teams / WhatsApp',
      'Jira / ServiceNow / FreshDesk / Zendesk',
    ],
  },
  {
    title: 'Unstructured Data',
    icon: <FileText className="h-5 w-5" strokeWidth={1.5} />,
    items: [
      'PDFs',
      'Images',
      'Videos',
    ],
    note: 'We use a combination of OCR and visual LLM to deliver high accuracy in processing unstructured data.',
  },
];

const DataSourcesSection = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Unified dark background */}
      <div className="absolute inset-0 bg-[hsl(220,20%,6%)]" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
        backgroundSize: '48px 48px'
      }} />
      
      {/* Soft ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/[0.02] rounded-full blur-[180px]" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Integrations</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight text-[hsl(0,0%,97%)]">
            Data Sources
          </h2>
          <p className="text-[hsl(220,10%,55%)] text-lg max-w-2xl mx-auto">
            Connect to your existing systems and data sources seamlessly.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataCategories.map((category) => (
            <div 
              key={category.title}
              className="group p-6 rounded-2xl bg-[hsl(220,20%,8%)] border border-[hsl(220,16%,12%)] hover:border-primary/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-base mb-3 tracking-tight text-[hsl(0,0%,94%)]">
                {category.title}
              </h3>

              {/* Items */}
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-[hsl(220,10%,55%)]">
                    {item}
                  </li>
                ))}
              </ul>

              {/* Note */}
              {category.note && (
                <p className="mt-4 pt-4 border-t border-[hsl(220,16%,12%)] text-xs text-[hsl(220,10%,45%)] italic">
                  {category.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataSourcesSection;