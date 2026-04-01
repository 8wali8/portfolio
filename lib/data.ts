import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ujjawalprasad111@gmail.com',

    emailSubject: "Let's connect about quant engineering and real-time systems opportunities",
    emailBody: 'Hi Ujjawal, I am reaching out because...',

    oldPortfolio: 'https://github.com/8wali8/portfolio-website',
    upworkProfile: 'https://github.com/8wali8',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/8wali8' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/ujjawal-prasad/' },
    { name: 'website', url: 'https://ujjawalprasad.com' },
    { name: 'old portfolio', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Spring Boot',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
        {
            name: 'Java',
            icon: '/logo/js.png',
        },
    ],
    database: [
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
    ],
    tools: [
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'StreamSense - Distributed Streaming Analytics Platform',
        slug: 'stream-sense',
        year: 2025,
        description: `
      Personal capstone engineering project focusing on real-time Twitch analytics with a microservices architecture.<br/><br/>
      Achievements:<br/>
      <ul>
        <li>📊 Built an end-to-end distributed pipeline for event ingestion and real-time analysis using Kafka.</li>
        <li>⚙️ Implemented resilient Spring Boot microservices (Eureka, Zuul, Hystrix, GraphQL) handling 10k+ events/s at P95 < 200ms.</li>
        <li>☁️ Deployed Docker + Kubernetes with Prometheus/Grafana/Zipkin observability and fault injection testing.</li>
      </ul>
      `,
        role: `
      Full-stack system design, development, and production deployment.<br/><br/>
      - Built React + TypeScript dashboard, backend APIs, and Python ML microservices for sponsor detection and sentiment analysis.<br/>
      - Led integration of observability stack and end-to-end load testing to validate reliability and performance.<br/>
      - Delivered production-grade architecture for scalable distributed streaming analytics.
      `,
        techStack: [
            'Kafka',
            'Spring Boot',
            'Java',
            'React',
            'TypeScript',
            'Python',
            'Kubernetes',
            'Docker',
            'Prometheus',
            'Grafana',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: `${GENERAL_INFO.website}/projects/stream-sense`,
    },
    {
        title: 'Bitcoin Mining Optimization Platform',
        slug: 'bitcoin-mining-optimization',
        year: 2025,
        description: `
      End-to-end trading and infrastructure opimization platform for Bitcoin mining operations.<br/><br/>
      Highlights:<br/>
      <ul>
        <li>⛏️ Implemented real-time miner scheduling and hash rate forecasting to maximize revenue per kWh.</li>
        <li>📈 Developed congestion-resistant execution logic for arbitrage flow between exchanges and mining pools.</li>
        <li>🔒 Built secure wallet/infrastructure controls with audited RBAC and automated failover management.</li>
      </ul>
      `,
        role: `
      Full-stack engineering lead for productization and observability.<br/><br/>
      - Designed and built the system backend using Node.js, Express, and PostgreSQL for sub-second decisioning.<br/>
      - Added a React + Chart.js dashboard for live profit, energy, and utilization metrics.<br/>
      - Integrated Prometheus + Grafana monitoring and cost-per-TH/s analytics to support operational scaling.
      `,
        techStack: [
            'Node.js',
            'Express.js',
            'PostgreSQL',
            'React',
            'TypeScript',
            'Docker',
            'GraphQL',
            'Kubernetes',
        ],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        liveUrl: `${GENERAL_INFO.website}/projects/bitcoin-mining-optimization`,
    },
    {
        title: 'Jumpseat - High-throughput Dynamic Pricing Engine',
        slug: 'jumpseat',
        year: 2024,
        description: `
      Production-grade, real-time pricing and inventory pipeline for travel B2B SaaS, built during full-time internship at Jumpseat.<br/><br/>
      Highlights:<br/>
      <ul>
        <li>🚀 Delivered a high-throughput Python web crawler and API pipeline ingesting 1.2M fare updates/day.</li>
        <li>🔁 Implemented stream processing and delta detection to reduce pricing staleness by 75%.</li>
        <li>🛠️ Built a SaaS orchestration dashboard with React + TypeScript for operations and marketplace bidding.</li>
      </ul>
      `,
        role: `
      Software engineering intern focused on data pipeline scalability and performance.<br/><br/>
      - Built resilient data extraction workflows and storage interfaces with Redis, Postgres, and Kafka.<br/>
      - Implemented metrics-driven SLA validation with Grafana dashboards and Slack alerts.<br/>
      - Coordinated cross-functional deployment with daily CI/CD and load-based auto-scaling.
      `,
        techStack: [
            'Python',
            'Kafka',
            'Redis',
            'PostgreSQL',
            'React',
            'TypeScript',
            'Docker',
            'AWS',
        ],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        liveUrl: `${GENERAL_INFO.website}/projects/jumpseat`,
    },
    {
        title: 'Medical Mutts Website',
        slug: 'medical-mutts',
        year: 2024,
        description: `
      Full-stack MERN application for coordinating veterinary care and scheduling with real-time updates.<br/><br/>
      Highlights:<br/>
      <ul>
        <li>👥 Real-time WebSocket updates for ongoing task status and collaboration.</li>
        <li>🔒 Built secure authentication with role-based access and GDPR-compliant data flows.</li>
        <li>📈 Scaled user load to 1,000+ monthly active users with 98% reduction in auth errors.</li>
      </ul>
      `,
        role: `
      Lead engineer and deployment owner.<br/><br/>
      - Architected and deployed full MERN stack application with dynamic React forms and real-time sync.<br/>
      - Implemented robust data collection workflows and charting dashboards for operational alerts.<br/>
      - Drove end-user testing and iterative UX improvements to reduce reporting delays by 50%.
      `,
        techStack: [
            'MongoDB',
            'Express.js',
            'React',
            'Node.js',
            'WebSockets',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
        ],
        liveUrl: `${GENERAL_INFO.website}/projects/medical-mutts`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Incoming Software Engineering Intern',
        company: 'Netflix',
        duration: 'Incoming May 2026',
        logo: '/logo/netflix.png',
    },
    {
        title: 'Software Engineering Intern',
        company: 'CosmicBrain AI',
        duration: 'May 2025 - August 2025',
        logo: '/logo/cosmicbrain.png',
    },
    {
        title: 'Software Engineering Intern',
        company: 'Jumpseat',
        duration: 'October 2024 - May 2025',
        logo: '/logo/jumpseat.png',
    },
    {
        title: 'Software Engineering Intern',
        company: 'NASA',
        duration: 'June 2024 - August 2024',
        logo: '/logo/nasa.png',
    },
];
