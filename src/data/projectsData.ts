export interface ProjectData {
  id: string
  title: string
  subtitle: string
  tags: string[]
  year: string
  images: {
    hero: string
    datasetPreview: string
    notebookPreparation: string
    powerBiDashboard: string
  }
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
  eda: { title: string; desc: string; type: 'left' | 'right'; image: string }[]
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
    images: {
      hero: '/images/projects/project 1/retail-hero.png',
      datasetPreview: '/images/projects/project 1/dataset.png',
      notebookPreparation: '/images/projects/project 1/clean.png',
      powerBiDashboard: '/images/projects/project 1/retail-dashboard.png'
    },
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
      { title: 'Sales by Department', desc: 'Analyzing transactional volume distribution across various store sections to identify underperforming sectors.', type: 'left', image: '/images/projects/project 1/rayons.png' },
      { title: 'Top-Selling Products', desc: 'Visualizing product frequencies to separate recurring essentials from low-velocity items.', type: 'right', image: '/images/projects/project 1/top_produits.png' },
      { title: 'Orders by Hour of Day', desc: 'Mapping historical transactions against time slots to model logistically critical peak demands.', type: 'left', image: '/images/projects/project 1/heures.png' },
      { title: 'Reorder Rate Analysis', desc: 'Evaluating the behavioral distribution of returning customers against first-time buyers.', type: 'right', image: '/images/projects/project 1/Jours.png' }
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
    links: { github: '#', dashboard: '#', report: '#' }
  },
  {
    id: 'nlp-book-recommendation',
    title: 'Intelligent Book Recommendation System using NLP',
    subtitle: 'Text Analytics, Topic Modeling & Recommendation Engine',
    tags: ['Python', 'NLTK', 'Pandas', 'Scikit-Learn', 'TF-IDF', 'LSA', 'Cosine Similarity'],
    year: '2026',
    images: {
      hero: '/images/projects/nlp-hero.png',
      datasetPreview: '/images/projects/nlp-dataset.png',
      notebookPreparation: '/images/projects/nlp-notebook.png',
      powerBiDashboard: '/images/projects/nlp-dashboard.png'
    },
    overview: {
      description: "Books contain thousands of words, making it difficult to compare them manually based on their actual content. This project demonstrates how Natural Language Processing (NLP) can transform raw literary text into structured information capable of identifying themes and recommending similar books automatically. Using a collection of 52 English literature books from Project Gutenberg, I built an end-to-end text analytics pipeline that preprocesses raw text, extracts semantic information, identifies hidden topics, and recommends the most similar books based on their textual content.",
      summary: {
        source: 'Project Gutenberg',
        records: '52 English Books',
        features: 'Vast Text Corpora',
        domain: 'Natural Language Processing'
      }
    },
    businessContext: "Recommendation systems are widely used across digital platforms such as online bookstores, streaming services, and e-commerce websites. Rather than relying on user ratings or purchase history, this project focuses on content-based recommendation, where books are recommended according to the similarity of their textual content. The objective was to build an automated recommendation engine capable of suggesting the five most similar books from a selected title without any manual labeling.",
    datasetCaption: "Raw unstructured text (.txt) showing original literary excerpts from Project Gutenberg.",
    preparation: {
      steps: [
        "Stripped punctuation, special characters, and formatting anomalies.",
        "Removed standard English stop words using the NLTK library.",
        "Normalized grammatical variations via Lemmatization/Stemming techniques.",
        "Cleaned structural textual noise and isolated core meaningful tokens.",
        "Compiled a optimized and tokenized text corpus for matrix conversion."
      ]
    },
    methodology: [
      { step: 'Import', desc: 'Ingestion of 52 raw literature texts from Gutenberg.' },
      { step: 'Cleaning', desc: 'Tokenization, filtering noise, and stop words isolation via NLTK.' },
      { step: 'EDA', desc: 'Word frequency checking, dictionary generation, and distribution analysis.' },
      { step: 'Feature Eng.', desc: 'Constructing Bag of Words and high-dimensional TF-IDF matrices.' },
      { step: 'Machine Learning', desc: 'Topic Modeling via LSA (TruncatedSVD) and Cosine Similarity mapping.' }
    ],
    eda: [
      { title: 'Word Frequency Distributions', desc: 'Tracking vocabulary densities across the corpus to highlight major keywords before term weighting.', type: 'left', image: '/images/projects/nlp-eda1.png' },
      { title: 'Thematic Document Distributions', desc: 'Evaluating document weights across latent axes to check thematic coherence.', type: 'right', image: '/images/projects/nlp-eda2.png' },
      { title: 'TF-IDF Matrix Sparsity', desc: 'Analyzing the spatial distribution of unique tokens across the 52 distinct vectors.', type: 'left', image: '/images/projects/nlp-eda3.png' },
      { title: 'Cosine Similarity Thresholds', desc: 'Profiling the statistical distribution of proximity scores across different literary genres.', type: 'right', image: '/images/projects/nlp-eda4.png' }
    ],
    insights: [
      { title: 'Hidden themes discovered automatically', desc: 'Without manual labeling, the unsupervised LSA pipeline successfully mapped three major literary themes.' },
      { title: 'Unstructured text becomes tabular data', desc: 'Thousands of words were successfully mapped into numerical vectors, unlocking traditional machine learning workflows.' },
      { title: 'Semantic structures reveal proximity', desc: 'Books sharing consistent vocabulary architectures clustered naturally, producing high-fidelity recommendations.' },
      { title: 'NLP expands traditional BI limits', desc: 'This case study establishes the exact operational framework required to extract insights from text fields.' }
    ],
    kpis: [
      { label: 'Analyzed Books', value: '52 Titles' },
      { label: 'Vocabulary Size', value: 'Extensive' },
      { label: 'Extracted Topics', value: '03 Clusters' },
      { label: 'Recommendations', value: 'Top 5 Match' }
    ],
    challenges: "Working with unstructured textual data introduced intense dimensional scaling. Handling a massive document-term matrix containing thousands of unique words required advanced matrix operations. Applying dimensionality reduction through Latent Semantic Analysis (LSA) allowed the extraction of meaningful latent topics while ensuring computational efficiency and avoiding over-fitting.",
    learned: [
      "Unstructured Text Preprocessing, Filtering & Pipeline Tokenization",
      "Feature Extraction utilizing Bag of Words and TF-IDF Models",
      "Dimensionality Reduction & Unsupervised Learning via TruncatedSVD (LSA)",
      "Mathematical Vector Space Comparison using Cosine Similarity",
      "Designing Automated Decision-Support Content Engines"
    ],
    links: { github: '#', dashboard: '#', report: '#' }
  }
]