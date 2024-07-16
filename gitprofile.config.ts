// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'devonixx', // Your GitHub org/user name. (This is the only required config)
    // No specific credentials needed here, since GitHub pages are publicly accessible
  },
  base: '/', // Assuming your repository is at https://github.com/devonixx/devonixx.github.io

  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [], // You can manually specify projects if needed
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        // Example external project
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Devonixx',
    description: 'Welcome to my portfolio!',
    imageURL: '', // Optional image URL for SEO
  },
  social: {
    linkedin: '', // Your LinkedIn username or profile ID
    twitter: '', // Your Twitter username
    mastodon: '', // Your Mastodon username
    medium: '', // Your Medium username
    dev: '', // Your Dev.to username
    website: 'https://www.devonixx.site', // Your personal website URL
    email: 'devonixx@example.com', // Your email address
  },
  resume: {
    fileUrl: '/path/to/your/resume.pdf', // URL to your resume PDF file
  },
  skills: [
    'JavaScript', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML', 'CSS', 'Sass',
    'Git', 'GitHub', 'Bootstrap', 'Tailwind CSS', 'TypeScript', 'GraphQL', 'RESTful APIs',
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'Month Year',
      to: 'Month Year', // Use 'Present' if currently working there
      companyLink: 'https://example.com', // URL to company's website
    },
  ],
  certifications: [
    {
      name: 'Certification Name',
      body: 'Certification description or issuing body',
      year: 'Year of certification',
      link: 'https://example.com', // URL to certification details
    },
  ],
  educations: [
    {
      institution: 'Institution Name',
      degree: 'Degree',
      from: 'Start Year',
      to: 'End Year', // Use 'Present' if currently studying
    },
  ],
  publications: [
    {
      title: 'Publication Title',
      journalName: 'Journal Name',
      authors: 'Author(s)',
      link: 'https://example.com', // URL to publication
      description:
        'Description of the publication.',
    },
  ],
  blog: {
    source: '', // Leave empty to hide blog section
    username: '', // Your username on the blogging platform (e.g., Dev.to)
    limit: 2, // Number of articles to display
  },
  googleAnalytics: {
    id: '', // Your Google Analytics tracking ID
  },
  hotjar: {
    id: '', // Your Hotjar ID
    snippetVersion: 6, // Hotjar snippet version
  },
  themeConfig: {
    defaultTheme: 'black', // Set default theme to 'black'

    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,

    themes: [
      'black', // Include only 'black' theme for minimalism
    ],

    customTheme: {
      primary: '#000000', // Black primary color
      secondary: '#ffffff', // White secondary color
      accent: '#fc055b', // Accent color
      neutral: '#2A2730', // Neutral background color
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  footer: `Made with <a 
      class="text-primary" href="https://github.com/devonixx"
      target="_blank"
      rel="noreferrer"
    >GitHub Profile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
