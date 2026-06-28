export interface ProjectData {
  id: string
  title: string
  subtitle: string
  tags: string[]
  year: string
  overview: {
    description: string
    summary: { source: string; records: string; features: string; domain: string }
  }
  businessContext: string
  datasetCaption: string
  preparation: {
    steps: string[]
  }
  methodology: { step: string; desc: string }[]
  eda: { title: string; desc: string; type: 'left' | 'right' }[]
  insights: { title: string; desc: string }[]
  kpis: { label: string; value: string }[]
  challenges: string
  learned: string[]
  links: { github: string; dashboard: string; report: string }
}

export const dataProjects: ProjectData[] = [
  {
    id: 'retail-analytics',
    title: 'Retail Customer Purchasing Behavior Analysis',
    subtitle: 'Exploratory Data Analysis & Business Intelligence Dashboard',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Power BI', 'Jupyter Notebook'],
    year: '2026',
    overview: {
      description: "Understanding customer purchasing behavior is essential for improving operational efficiency and delivering better shopping experiences. In this project, I analyzed more than 3 million grocery orders from an online retail platform to uncover purchasing patterns, customer habits, and product performance. The project follows a complete data analytics workflow—from raw data preparation to business insight generation and dashboard creation—demonstrating how data can support strategic decision-making.",
      summary: {
        source: 'Instacart (Epitech)',
        records: '3M+ orders',
        features: '~12 features',
        domain: 'Retail Analytics'
      }
    },
    businessContext: "Online grocery retailers generate millions of transactions every day. Hidden within these transactions are valuable insights that can improve inventory management, optimize marketing campaigns, and increase customer retention. The objective was to decipher product frequencies, department demands, transactional peak hours, and customer loyalty matrixes to build a robust framework for platform decision-makers.",
    datasetCaption: "Raw multi-table transactional dataset before cleaning and relational parsing.",
    preparation: {
      steps: [
        "Removed duplicate transaction entries across historical logs.",
        "Merged 5 relational tables using common surrogate keys.",
        "Replaced technical IDs with human-readable nomenclature.",
        "Dropped unnecessary columns to optimize memory overhead.",
        "Prepared a clean, aggregated analytical dataset."
      ]
    },
    methodology: [
      { step: 'Import', desc: 'Ingestion of 5 core relational tables.' },
      { step: 'Cleaning', desc: 'Handling missing values, types alignment, and merges.' },
      { step: 'EDA', desc: 'Statistical distributions, temporal analyses, and profiling.' },
      { step: 'Visualization', desc: 'Advanced charting with Matplotlib and Seaborn.' },
      { step: 'Dashboard', desc: 'Exporting refined metrics to Power BI Desktop.' }
    ],
    eda: [
      { title: 'Sales by Department', desc: 'Analyzing transactional volume distribution across various store sections to identify underperforming sectors.', type: 'left' },
      { title: 'Top-Selling Products', desc: 'Visualizing product frequencies to separate recurring essentials from low-velocity items.', type: 'right' },
      { title: 'Orders by Hour of Day', desc: 'Mapping historical transactions against time slots to model logistically critical peak demands.', type: 'left' },
      { title: 'Reorder Rate Analysis', desc: 'Evaluating the behavioral distribution of returning customers against first-time buyers.', type: 'right' }
    ],
    insights: [
      { title: 'Fresh products dominate demand', desc: 'Fruits, vegetables, and dairy capture the highest volume, reinforcing customer daily routines.' },
      { title: 'Purchasing begins with habit', desc: 'Most baskets start with previously ordered items as the very first item added to cart.' },
      { title: 'Predictable daily operational peaks', desc: 'Order peaks manifest strictly between 10 AM and 4 PM, allowing workflow optimization.' },
      { title: 'Loyalty drives recurring platform revenue', desc: 'The high reorder indicator confirms customer retention is the strongest core financial asset.' }
    ],
    kpis: [
      { label: 'Total Customers', value: '200K+' },
      { label: 'Total Orders', value: '3M+' },
      { label: 'Total Products', value: '50K+' },
      { label: 'Avg Reorder Rate', value: '59%' }
    ],
    challenges: "Processing millions of transactional records required optimization before ingestion into Power BI. Combining 5 relational tables without generating huge cartesian products meant aggregating data directly in Python to drastically reduce memory usage. Converting dry statistical outputs into interactive, executive-ready dashboard components also required extensive iterations.",
    learned: [
      "Advanced Relational Data Manipulation & Feature Engineering",
      "Exploratory Data Analysis (EDA) on High-Volume Datasets",
      "Executive Storytelling & Analytical Insight Structuring",
      "Dashboard UX Design & Cross-Filtering Architecture",
      "Translating Technical Evidence into Business Actions"
    ],
    links: {
      github: '#',
      dashboard: '#',
      report: '#'
    }
  }
]