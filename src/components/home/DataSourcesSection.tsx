import { Database, Mail, FileText, Image, Video, MessageSquare } from 'lucide-react';

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
    <section className="py-16 lg:py-20 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-3 tracking-wide uppercase text-sm">Integrations</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Data Sources
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect to your existing systems and data sources seamlessly.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                {category.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-base mb-3 tracking-tight">
                {category.title}
              </h3>

              {/* Items */}
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>

              {/* Note */}
              {category.note && (
                <p className="mt-4 pt-4 border-t border-border/50 text-xs text-muted-foreground/80 italic">
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
