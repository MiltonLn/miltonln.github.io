export const data = {
  name: 'Milton Lenis',
  role: 'Full Stack Developer',
  profile: `I'm a software craftsman with a big amount of passion about coding, 
            open source, programming communities, soccer and videogames`,
  email: 'miltonln04@gmail.com',
  phone: '+57 316 616 0159',
  picture: 'assets/images/milton.jpg',
  blog: 'http://lalogiadepython.com',
  socialMedia: [
    {
      name: 'Github',
      icon: 'fa-github-alt',
      link: 'https://github.com/MiltonLn'
    },
    {
      name: 'Twitter',
      icon: 'fa-twitter',
      link: 'https://twitter.com/MiltonLn'
    },
    {
      name: 'LinkedIn',
      icon: 'fa-linkedin',
      link: 'https://www.linkedin.com/in/miltonln/'
    },
    {
      name: 'Instagram',
      icon: 'fa-instagram',
      link: 'https://www.instagram.com/miltonln04/'
    }
  ],
  experience: [
    {
      workPlace: {
        name: 'Monadical',
        webPage: 'https://monadical.com/',
        ubication: 'Medellín, Colombia (Remote)'
      },
      role: 'Full Stack Developer',
      period: '2017 - Present',
      description: `Work with Django and React / Redux on a cool e-sport poker 
                    platform for online-gambling using blockchain tech`,
      achievements: [
        'Implemented features and bugfixing to help the platform stability',
        `Worked on a marketing tool with web scraping to support company's social 
         media workflows`
      ]
    },
    {
      workPlace: {
        name: 'RADY Consultores',
        webPage: 'http://rady.com.co/',
        ubication: 'Cali, Colombia'
      },
      role: 'Lead Web Developer',
      period: '2015 - 2017',
      description: `Functions: To coordinate the development team, to 
              estimate development times, to propose solutions 
              from a software architectures point of view, to inspect 
              code quality, to implement development best practices, 
              to develop applications in Django, to train staff in the 
              company’s technologies, etc.`,
        achievements: [
          'Django unit testing process implementation',
          'Continuous integration process implementation',
          'Best development practices research and implementation'
        ]
    },
    {
      workPlace: {
        name: 'Cedesoft Lab, Univalle',
        webPage: 'cedesoft.univalle.edu.co',
        ubication: 'Cali, Colombia'
      },
      role: 'Lead Web Developer',
      period: '2015 - 2016',
      description: `Worked mostly with Django on interesting projects such 
              as SIND and Colombian Observatory for Educational 
              Innovation with use of ICT (Take a look at Projects section)`,
        achievements: [
          "Management of a ten-member team on the project's success",
          `Complete upgrade of the development process implementing 
           Django's workflow best practices`
        ]
    },
  ],
  education: {
    university: 'Universidad del Valle',
    universityLogo: 'assets/images/univalle.gif',
    degree: 'B.S. Software Engineer',
    period: '2011-2016',
    description: `Degree on a mixture between computational science and 
                  software engineering`,
    achievements: [
      `Awarded as the best graduate student of Computer Science because of my 
       Grade Point Average of 4.22/5 and six semestral academic distinctions`,
      `My research degree project was awarded with a meritorious mention; 
       I built a web tool following a Multitenant Architecture with Django 
       to support the adoption of agile practices from the XP Methodology.`
    ]
  },
  projects: {
    categories: ['backend', 'frontend', 'API'],
    projectsList: [
      {
        title: 'OddSlingers',
        categories: 'frontend backend API',
        picture: 'assets/images/projects/oddslingers.png',
        techStack: ['Django', 'ReactJS / Redux', 'Blockchain'],
        link: {
          label: 'View Page',
          url: 'https://oddslingers.com/'
        }
      },
      {
        title: 'Puppetmaster',
        categories: 'backend',
        picture: 'assets/images/projects/puppetmaster.png',
        techStack: ['Django Admin', 'Puppeteer', 'Social Media', 'Web Scraping'],
        link: {
          label: '🔒 Private Project',
          url: false
        }
      },
      {
        title: 'InstaCobro',
        categories: 'frontend backend API',
        picture: 'assets/images/projects/instacobro.png',
        techStack: ['Django', 'GraphQL', 'React / Redux', 'React Router'],
        link: {
          label: '🔒 Private Project',
          url: false
        }
      },
      {
        title: 'SIND (Sistema de Información Nacional del Deporte)',
        categories: 'backend frontend',
        picture: 'assets/images/projects/SIND.png',
        techStack: ['Django', 'Multitenant', 'PostgreSQL'],
        link: {
          label: 'View Page',
          url: 'http://sind.gov.co'
        }
      },
      {
        title: 'TuNotaria',
        categories: 'backend frontend API',
        picture: 'assets/images/projects/tunotaria.png',
        techStack: ['Django', 'Django Rest Framework', 'Multitenant'],
        link: {
          label: '🔒 Private Project',
          url: false
        }
      },
      {
        title: 'Colombian Observatory for Educational Innovation with use of ICT',
        categories: 'backend frontend',
        picture: 'assets/images/projects/Observatory.png',
        techStack: ['Django', 'Data Preprocessing', 'Statistics & Indicators',
                    'Table Partitioning PostgreSQL'],
        link: {
          label: '🔒 Private Project',
          url: false
        }
      },
      {
        title: 'MyRightHand',
        categories: 'backend frontend API',
        picture: 'assets/images/projects/MyRightHand.png',
        techStack: ['Stripe Payment Gateway', 'Google Maps',' django-allauth',
                    'i18n and translations', 'on-site and email notification',
                    'API REST (djangorest-framework)'],
        link: {
          label: '🔒 Private Project',
          url: false
        }
      },
      {
        title: 'La Logia de Python (Blog)',
        categories: 'backend frontend',
        picture: 'assets/images/projects/lalogia.png',
        techStack: ['Django', 'Wagtail CMS', 'Puput'],
        link: {
          label: 'View Page',
          url: 'www.lalogiadepython.com'
        }
      },
      {
        title: 'Milton Lenis WebPage',
        categories: 'frontend',
        picture: 'assets/images/projects/webpage.png',
        techStack: ['ReactJS'],
        link: {
          label: 'View Page',
          url: 'www.miltonlenis.com'
        }
      },
      {
        title: 'eXPert',
        categories: 'backend frontend',
        picture: 'assets/images/projects/expert.png',
        techStack: ['Django', 'PostgreSQL', 'Multitenant'],
        link: {
          label: '🔒 Private Project',
          url: false
        }
      },
      {
        title: 'GEDI',
        categories: 'backend frontend',
        picture: 'assets/images/projects/gedi.png',
        techStack: ['Django', 'PostgreSQL'],
        link: {
          label: '🔒 Private Project',
          url: false
        }
      },
    ]
  },
  skills: {
    main: [
      {
        title: 'Python & Django',
        icon: 'python',
        learnedAt: 2015,
        description: `The Python ecosystem represents a big part in my 
                      professional career, almost any of the projects I've 
                      been involved in uses it, like Django, which is my 
                      killer tool to work in the backend`
      },
      {
        title: 'React / Redux',
        icon: 'react',
        learnedAt: 2017,
        description: `I love how things are done in the frontend using 
                      React and how the state is shaped with Redux, they're 
                      great tools with a bright future to work on`
      }
    ],
    others: {
      'Basics': [
        {
          name: 'HTML5',
          description: `HTML5 is one of the core tools for a web developer to 
                        know and I've been involved with this since the start 
                        of my career`
        },
        {
          name: 'CSS3',
          description: `CSS is essential if you want your sites to really look 
                        good in all the devices, that's why I really care about 
                        it`
        },
        {
          name: 'Bootstrap 3 & 4',
          description: `One of the tools I've been using the most to facilitate 
                        the sites structuring and make easy the responsive design`
        },
        {
          name: 'TypeScript',
          description: `Whilst I was learning Angular 2 I used TypeScript, I 
                        haven't the biggest experience with it, but it's worth 
                        to mention`
        },
        {
          name: 'Javascript (ES6)',
          description: `One of my favorites parts of JS is ES6 which really 
                        makes the code looks good in the frontend, I use it 
                        always in my recent work`
        }
      ],
      'APIs': [
        {
          name: 'Django Rest Framework',
          description: `This was my first approach to the API Rest world, I've 
                        built some cool APIs using it and it's best practices, 
                        I love how robust is it, especially in the serializers`
        },
        {
          name: 'GraphQL (Graphene and Apollo Client)',
          description: `This is the newest tech I'm the most excited about, I've
                        used it in some projects and I'm in love with it, I've 
                        done APIs in the backend using graphene-django and 
                        connected to the frontend (React) using Apollo Client`
        }
      ],
      'CMS': [
        {
          name: 'Wagtail',
          description: `In order to build content management systems, Wagtail is 
                        the tool I feel the most comfortable with`
        }
      ],
      'Testing': [
        {
          name: 'unittest',
          description: `Testing your code is one of the best things you can do, 
                        that's why I use the main tool for testing in Django to 
                        handle my unit tests`
        },
        {
          name: 'PyTest',
          description: `This is a great pythonic tool to handle the unit tests, 
                        I've been using this mostly experimentally`
        },
        {
          name: 'Jest',
          description: `This is the tool I've used to handle the frontend tests`
        },
      ],
      'Databases': [
        {
          name: 'PostgreSQL',
          description: `My main database engine, I've been using this to build 
                        different type of projects, especially Multitenant 
                        applications using its schemas`
        },
        {
          name: 'SQLite',
          description: `This is my lightweight option when I need to handle 
                        file based databases`
        },
      ],
      'Web Scraping': [
        {
          name: 'BeautifulSoup4',
          description: `This was my first approach to the web scraping world, 
                        I've used it mostly experimentally`
        },
        {
          name: 'Puppeteer',
          description: `Using Puppeteer feels like magic, I've used it in some 
                        real projects to handle Chrome in a headless way`
        },
      ],
      'GIT': [
        {
          name: 'Github',
          description: `I use Github to handle private projects, but also, is 
                        the main place in which I do all my Open Source work`
        },
        {
          name: 'Bitbucket',
          description: `Another great option to handle GIT CVS, I've been using 
                        it to handle private projects`
        },
      ],
      'Continuous Integration': [
        {
          name: 'CircleCI',
          description: `Continuous Integration is a tech which really eases the 
                        development workflows, I use CircleCI to handle private 
                        projects`
        },
        {
          name: 'TravisCI',
          description: `And TravisCI is the one I use to handle Open Source 
                        projects`
        },
        {
          name: 'Code Coverage (Coveralls)',
          description: `Also is important to keep track of your tests and their 
                        reach on your code, Coveralls make the work for me`
        },
      ],
      'Documentation': [
        {
          name: 'Sphinx',
          description: `Documentation is pretty important, especially in Open 
                        Source, Sphinx is the engine I've used to build my docs`
        },
        {
          name: 'Read the Docs',
          description: `I really love this company! they handle the docs for my 
                        Open Source projects`
        },
        {
          name: 'Markdown',
          description: `I use this to build a lot of docs and also to 
                        write in Slack's and Zulip's chat`
        },
        {
          name: 'reStructuredText',
          description: `The Python friendly doc language, I've ussed it mostly 
                        in Open Source documentation`
        },
      ],
      'Misc': [
        {
          name: 'Multitenant Architectures & SaaS',
          description: `One of the aspects in which I have the most experience, 
                        I've built several Multitenant applications and also 
                        gave talks about it`
        },
      ],
      'OS': [
        {
          name: 'Linux (Ubuntu)',
          description: `Ubuntu was my first love when I first dump windows, I 
                        use it on a daily basis to work on my desktop computer`
        },
        {
          name: 'OSx',
          description: `I really love Apple! their OSx system is really nice and
                        I use it mostly on my laptop`
        },
      ]
    },
    personal: [
      {
        name: 'Leadership',
        description: `I have several experience leading teams and also, I really 
                      enjoy to coordinate and teach other developers on my teams`
      },
      {
        name: 'Communication',
        description: `In a software team, communication is the key to success, 
                      I'm always trying to share my ideas among the people as 
                      clear as possible`
      },
      {
        name: 'Responsibility',
        description: `You can always expect from me to deliver what you asked 
                      for, in the time you asked for, and, if I can't, I'll 
                      always discuss it with you`
      },
      {
        name: 'Proactivity',
        description: `Don't have all the details clear for your project? Don't 
                      worry, I will always suggest you things to handle the 
                      implementation of your ideas`
      },
      {
        name: 'Motivation',
        description: `Coding is one of the things I love the most, so I really 
                      love the things I do and it is clearly reflected on my 
                      results`
      },
      {
        name: 'Willingness to Learn',
        description: `The tech world changes on a daily basis, that's why I'm 
                      always learning not just the new technologies I find 
                      interesting but their best practices`
      },
    ]
  },
  talks: [
    {
      title: 'Multitenant Architectures in Python',
      event: 'PyCon Colombia 2018',
      year: '2018',
      link: 'https://www.pycon.co/talks/multitenant-architectures-in-python/',
      picture: 'assets/images/talks/multitenant.jpg',
      description: `This talk was for the most important Python event in my country,
                    I talked a little about what multitenant architectures are, 
                    what types exist, how to implement one with 
                    Django and Postgresql, my experiences implementing this type 
                    of architecture and practical advice on this subject in general.`
    },
    {
      title: 'How to translate a site using Django',
      event: 'Python Cali Meetup',
      year: '2018',
      link: 'https://www.meetup.com/es-ES/Python-Cali/events/248228222/',
      picture: 'assets/images/talks/translate.jpg',
      description: `This talk was a comprehensive guide on how to translate a 
                    Django site using its built-in i18n system`
    },
    {
      title: 'Unittesting step by step',
      event: 'Python Cali Meetup',
      year: '2017',
      link: 'https://www.meetup.com/es-ES/Python-Cali/events/242279852/',
      picture: 'assets/images/talks/unittesting.jpg',
      description: `Talk about unittesting in Python and its importance with a 
                    live example`
    },
    {
      title: 'Introduction to the Pythonista Style',
      event: 'Python Cali Meetup',
      year: '2017',
      link: 'https://www.meetup.com/es-ES/Python-Cali/events/240121439/',
      picture: 'assets/images/talks/pythonista.jpg',
      description: `Talk about Pythonic Idioms, why they are so important and 
                    good practices to produce more readable code`
    }
  ],
  openSource: [
    {
      title: 'Django Menu Generator',
      link: 'https://github.com/LaLogiaDePython/django-menu-generator',
      picture: 'assets/images/projects/djangomenugenerator.png',
      description: `This is a handy tool to generate menus in any Django project 
                    which I built with a friend and we maintain nowadays`
    },
    {
      title: 'Puput',
      link: 'https://github.com/APSL/puput',
      picture: 'assets/images/projects/puput.png',
      description: `After some contributions to the project, as adding support 
                    to Wagtail 2.0 and Django 2.0, I've become one of the 
                    maintainers of the project`,
    },
  ]
}