const NAME = "Milton Lenis"
const ROLE = "Full Stack Developer"
const EMAIL = "miltonln04@gmail.com"
const BLOG_LINK = "https://www.lalogiadepython.com"

export const DATA = {
  "name": NAME,
  "role": ROLE,
  "profile": "I have a big amount of passion about coding, open source, programming communities, soccer and videogames",
  "bio": `¡Hello everybody!

    My name is Milton Lenis and I'm a Full Stack Developer from Colombia. Also, I'm currently based in **Cali, Colombia**

    I'm a life-long learner, always excited to work on the most cutting edge technologies, ready to help and passionated about the things I do on a daily basis."`,
  "email": EMAIL,
  "picture": "assets/images/milton.jpg",
  "socialMedia": [
    {
      "name": "Github",
      "icon": "fab fa-github-alt",
      "link": "https://github.com/MiltonLn"
    },
    {
      "name": "Twitter",
      "icon": "fab fa-twitter",
      "link": "https://twitter.com/MiltonLn"
    },
    {
      "name": "LinkedIn",
      "icon": "fab fa-linkedin",
      "link": "https://www.linkedin.com/in/miltonln/"
    },
    {
      "name": "Instagram",
      "icon": "fab fa-instagram",
      "link": "https://www.instagram.com/miltonln04/"
    },
    {
      "name": "Blog",
      "icon": "far fa-file-alt",
      "link": "https://www.lalogiadepython.com"
    }
  ],
  "experience": [
    {
      "workPlace": {
        "name": "Monadical",
        "webPage": "https://monadical.com/",
        "ubication": "Medellín, Colombia (Remote)"
      },
      "role": "Full Stack Developer",
      "period": "2017 - Present",
      "description": "Work with Django and React / Redux on a cool e-sport poker platform for online-gambling using blockchain tech",
      "achievements": [
        "Worked on a marketing tool with web scraping to support company's social media workflows",
        "Improved banking concurrency with a data-orientedarchitecture",
        "Implemented an archiving strategy to keep the site tables clean"
      ]
    },
    {
      "workPlace": {
        "name": "RADY Consultores",
        "webPage": "https://rady.com.co/",
        "ubication": "Cali, Colombia"
      },
      "role": "Lead Web Developer",
      "period": "2015 - 2017",
      "description": "Functions: To coordinate the development team, to estimate development times, to propose solutions from a software architectures point of view, to inspect code quality, to implement development best practices, to develop applications in Django, to train staff in the company’s technologies, etc.",
      "achievements": [
        "Django unit testing process implementation",
        "Continuous integration process implementation",
        "Best development practices research and implementation"
      ]
    },
    {
      "workPlace": {
        "name": "Cedesoft Lab, Univalle",
        "webPage": "http://cedesoft.univalle.edu.co",
        "ubication": "Cali, Colombia"
      },
      "role": "Lead Web Developer",
      "period": "2015 - 2016",
      "description": "Worked mostly with Django on interesting projects such as SIND and Colombian Observatory for Educational Innovation with use of ICT (Take a look at Projects section)",
      "achievements": [
        "Management of a ten-member team on the project's success",
        "Complete upgrade of the development process implementing Django's workflow best practices"
      ]
    }
  ],
  "education": {
    "university": "Universidad del Valle",
    "universityLogo": "assets/images/univalle.gif",
    "degree": "B.S. Software Engineer",
    "period": "2011-2016",
    "description": "Degree on a mixture between computational science and software engineering",
    "achievements": [
      "Awarded as the best graduate student of Computer Science because of my Grade Point Average of 4.22/5 and six semestral academic distinctions",
      "My research degree project was awarded with a meritorious mention; I built a web tool following a Multitenant Architecture with Django to support the adoption of agile practices from the XP Methodology."
    ]
  },
  "projects": {
    "categories": [
      "backend",
      "frontend",
      "API"
    ],
    "projectsList": [
      {
        "title": "OddSlingers",
        "categories": "frontend backend API",
        "picture": "assets/images/projects/oddslingers.png",
        "techStack": [
          "Django",
          "ReactJS / Redux",
          "Blockchain"
        ],
        "link": {
          "label": "View Page",
          "url": "https://oddslingers.com/"
        }
      },
      {
        "title": "Puppetmaster",
        "categories": "backend",
        "picture": "assets/images/projects/puppetmaster.png",
        "techStack": [
          "Django Admin",
          "Puppeteer",
          "Social Media",
          "Web Scraping"
        ],
        "link": {
          "label": "🔒 Private Project",
          "url": false
        }
      },
      {
        "title": "InstaCobro",
        "categories": "frontend backend API",
        "picture": "assets/images/projects/instacobro.png",
        "techStack": [
          "Django",
          "GraphQL",
          "React / Redux",
          "React Router"
        ],
        "link": {
          "label": "🔒 Private Project",
          "url": false
        }
      },
      {
        "title": "SIND (Sistema de Información Nacional del Deporte)",
        "categories": "backend frontend",
        "picture": "assets/images/projects/SIND.png",
        "techStack": [
          "Django",
          "Multitenant",
          "PostgreSQL"
        ],
        "link": {
          "label": "View Page",
          "url": "http://sind.gov.co"
        }
      },
      {
        "title": "TuNotaria",
        "categories": "backend frontend API",
        "picture": "assets/images/projects/tunotaria.png",
        "techStack": [
          "Django",
          "Django Rest Framework",
          "Multitenant"
        ],
        "link": {
          "label": "🔒 Private Project",
          "url": false
        }
      },
      {
        "title": "Colombian Observatory for Educational Innovation with use of ICT",
        "categories": "backend frontend",
        "picture": "assets/images/projects/Observatory.png",
        "techStack": [
          "Django",
          "Data Preprocessing",
          "Statistics & Indicators",
          "Table Partitioning PostgreSQL"
        ],
        "link": {
          "label": "🔒 Private Project",
          "url": false
        }
      },
      {
        "title": "MyRightHand",
        "categories": "backend frontend API",
        "picture": "assets/images/projects/MyRightHand.png",
        "techStack": [
          "Stripe Payment Gateway",
          "Google Maps",
          "django-allauth",
          "i18n and translations",
          "on-site and email notification",
          "API REST (djangorest-framework)"
        ],
        "link": {
          "label": "🔒 Private Project",
          "url": false
        }
      },
      {
        "title": "La Logia de Python (Blog)",
        "categories": "backend frontend",
        "picture": "assets/images/projects/lalogia.png",
        "techStack": [
          "Django",
          "Wagtail CMS",
          "Puput"
        ],
        "link": {
          "label": "View Page",
          "url": "https://www.lalogiadepython.com"
        }
      },
      {
        "title": "Milton Lenis WebPage",
        "categories": "frontend",
        "picture": "assets/images/projects/webpage.png",
        "techStack": [
          "ReactJS"
        ],
        "link": {
          "label": "View Page",
          "url": "https://www.miltonlenis.com"
        }
      },
      {
        "title": "eXPert",
        "categories": "backend frontend",
        "picture": "assets/images/projects/expert.png",
        "techStack": [
          "Django",
          "PostgreSQL",
          "Multitenant"
        ],
        "link": {
          "label": "🔒 Private Project",
          "url": false
        }
      },
      {
        "title": "GEDI",
        "categories": "backend frontend",
        "picture": "assets/images/projects/gedi.png",
        "techStack": [
          "Django",
          "PostgreSQL"
        ],
        "link": {
          "label": "🔒 Private Project",
          "url": false
        }
      }
    ]
  },
  "skills": {
    "main": [
      {
        "title": "Python & Django",
        "icon": "python",
        "learnedAt": 2015,
        "description": "The Python ecosystem represents a big part in my professional career, almost any of the projects I've been involved in uses it, like Django, which is my killer tool to work in the backend"
      },
      {
        "title": "ReactJS",
        "icon": "react",
        "learnedAt": 2017,
        "description": "ReactJS is the main tool I use to handle my frontend tasks, I'm currently using it with Redux"
      }
    ],
    "tech": {
      "Basics": [
          "HTML5",
          "CSS3",
          "Bootstrap",
          "Javascript (ES6)"
      ],
      "Scripting": [
          "Bash",
          "Python CLI"
      ],
      "APIs": [
          "Django Rest Framework",
          "GraphQL (Graphene and Apollo Client)"
      ],
      "Async Web": [
          "WebSockets",
          "Django Channels"
      ],
      "CMS": [
          "Wagtail"
      ],
      "Testing": [
          "unittest",
          "PyTest",
          "Jest"
      ],
      "Databases": [
          "PostgreSQL",
          "SQLite"
      ],
      "Web Scraping": [
          "BeautifulSoup4",
          "Puppeteer"
      ],
      "GIT": [
          "Github",
          "Bitbucket"
      ],
      "Continuous Integration": [
          "CircleCI",
          "TravisCI",
          "Code Coverage (Coveralls)"
      ],
      "Documentation": [
          "Sphinx",
          "Read the Docs",
          "Markdown",
          "reStructuredText"
      ],
      "Misc": [
          "Multitenant Architectures & SaaS"
      ],
      "OS": [
          "Linux (Ubuntu)",
          "OSx"
      ]
    },
    "soft": [
      {
        "name": "Leadership",
        "description": "I have several experience leading teams and also, I really enjoy to coordinate and teach other developers on my teams"
      },
      {
        "name": "Communication",
        "description": "In a software team, communication is the key to success, I'm always trying to share my ideas among the people as clear as possible"
      },
      {
        "name": "Responsibility",
        "description": "You can always expect from me to deliver what you asked for, in the time you asked for, and, if I can't, I'll always discuss it with you"
      },
      {
        "name": "Proactivity",
        "description": "Don't have all the details clear for your project? Don't worry, I will always suggest you things to handle the implementation of your ideas"
      },
      {
        "name": "Motivation",
        "description": "Coding is one of the things I love the most, so I really love the things I do and it is clearly reflected on my results"
      },
      {
        "name": "Willingness to Learn",
        "description": "The tech world changes on a daily basis, that's why I'm always learning not just the new technologies I find interesting but their best practices"
      }
    ]
  },
  "talks": [
    {
      "title": "Multitenant Architectures in Python",
      "event": "PyCon Colombia 2018",
      "year": "2018",
      "link": "https://2018.pycon.co/talks/multitenant-architectures-in-python/",
      "picture": "assets/images/talks/multitenant.jpg",
      "excerpt": "Talk about what multitenant architectures are, what types exist, how to implement one with Django and Postgresql, my experiences implementing this type of architecture and practical advice on this subject in general."
    },
    {
      "title": "How to translate a site using Django",
      "event": "Python Cali Meetup",
      "year": "2018",
      "link": "https://www.meetup.com/es-ES/Python-Cali/events/248228222/",
      "picture": "assets/images/talks/translate.jpg",
      "excerpt": "Comprehensive guide on how to translate a Django site using its built-in i18n system"
    },
    {
      "title": "Unittesting step by step",
      "event": "Python Cali Meetup",
      "year": "2017",
      "link": "https://www.meetup.com/es-ES/Python-Cali/events/242279852/",
      "picture": "assets/images/talks/unittesting.jpg",
      "excerpt": "Talk about unittesting in Python and its importance with a live example"
    },
    {
      "title": "Introduction to the Pythonista Style",
      "event": "Python Cali Meetup",
      "year": "2017",
      "link": "https://www.meetup.com/es-ES/Python-Cali/events/240121439/",
      "picture": "assets/images/talks/pythonista.jpg",
      "excerpt": "Talk about Pythonic Idioms, why they are so important and good practices to produce more readable code"
    }
  ],
  "openSource": [
    {
      "title": "Django Menu Generator",
      "link": "https://github.com/LaLogiaDePython/django-menu-generator",
      "stars": 12,
      "excerpt": "A straightforward menu generator for Django",
      "description": `When I was working on a scaffolder for Django some years ago,
      I needed to generate HTML menus for the apps I was generating, I didn't
      find anything but a very out-to-date project called django-menuware,
      I opened a few PRs to update the Django support to newer versions and
      adding support for Font Awesome icons but the author didn't want to add
      newer features. So, I asked him if I could fork the project and release it
      under a new name, he agreed.
      <br/>
      <br/>
      So, me together with [Juan Diego García](https://twitter.com/juandgoc) started
      this repo as a fork from django-menuware but we actually changed the whole codebase
      added a lot of cool documentation in Read The Docs, new features, tests, CI integration with Travis,
      and a lot more.
      <br/>
      <br/>
      **This was my first official approach to Open Source as a maintainer** and **it helped me
      to understand all the phases of an OSS project**, we currently maintain it and
      if you want to generate Django Menus using Python Dictionaries from a file, this
      project is a very good option.`
    },
    {
      "title": "Puput",
      "link": "https://github.com/APSL/puput",
      "picture": "assets/images/projects/puput.png",
      "stars": 324,
      "excerpt": "A Django blog app implemented in Wagtail",
      "description": `Some years ago, I wanted to create [my personal blog](${BLOG_LINK}) to use it as a
      learning tool, my idea was to write an article about each thing I was learning, that way I could
      remember it any time I need, and probably somebody could find the information useful.
      <br/>
      <br/>
      My idea also was to stick to the Django ecosystem, which I love a lot, that's how I found the
      [Wagtail CMS](https://wagtail.io/) a django-developers-friendly CMS, after that, with some research
      I could find Puput, a Wagtail-based blog engine, so I started to develop my blog with it.
      <br/>
      <br/>
      Puput had some limitations by the time like no support for Django 2.0 or newer versions of Wagtail,
      so **I opened some PRs giving support to those versions**, and **cleaned a lot of the code and docs**
      with the time, [Marc Tudurí](https://twitter.com/marctuduri) the original author of the project and a very nice guy
      invited me to **become part of the maintainers team**, and with some time, **he granted me the role of main maintainer**
      since I was actively contributing to the project and he wasn't using it too much, I try to maintain the
      project nowadays`
    },
    {
      "title": "redux-time",
      "link": "https://github.com/Monadical-SAS/redux-time",
      "picture": "assets/images/projects/redux-time.png",
      "stars": 71,
      "excerpt": "∞ Novel Redux animation library that lets you declaratively render changing state over time",
      "description": `redux-time is an internal tool the guys at [Monadical](https://monadical.com/) developed
      to sync and handle all of their animations in their cool poker site [OddsLingers](https://oddslingers.com/table/24ec19fe/1:2-NLHE-Tavern-2/).
      <br/>
      <br/>
      When I first joined the company with my friend [Juan Diego García](https://twitter.com/juandgoc), our first assigned task was
      to pair and contribute to this project and **add a Timeline Component to graphically see the animations progress and time, like pipelines**
      other than that, **I cleaned some docs**, **fixed some examples** and **did some bugfixing into the project**.`
    },
    {
      "title": "wagtailmarkdownblock",
      "link": "https://github.com/FlipperPA/wagtailmarkdownblock",
      "stars": 10,
      "excerpt": "Wagtail Markdown Block provides Markdown editing and display blocks in Wagtail",
      "description": `When I was developing [my blog](https://www.lalogiadepython.com/) using [Puput](https://github.com/APSL/puput)
      I wanted to use Markdown as the markup language for my content, since Wagtail didn't provided built-in support for Markdown
      I found this project but it lacked a lot of features and it was pretty immature.
      <br/>
      <br/>
      Then, **I contributed adding a SimpleMDE live editor to the project** which changed a lot this tool, also
      **I cleaned a lot of the code** and **improved the \`python-markdown\` implementation**.
      <br/>
      <br/>
      Nowadays I'm still using this tool in my blog to write my posts`
    }
  ],
  "contactContent": `
  If you want to discuss about Programming, Open Source, Programming communities, Soccer or Videogames I'm the one you are looking for, also, please contact me if you have an offer for me

  **I can help with the following:**

  <ul class="list-unstyled service-list">
    <li><i class="fa fa-check" aria-hidden="true"></i> Front-end development with ReactJS</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Back-end development with Python/Django</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Async web development with Django Channels</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> API crafting and maintenance with Django Rest Framework and GraphQL</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Content oriented sites building with Wagtail</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> UI development</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Testing and CI processes implementation</li>
  </ul>

  Drop me a line at [${EMAIL}](mailto:${EMAIL})
  `,
  "blog": {
      "name": "La Logia de Python",
      "link": BLOG_LINK,
      "logo": "assets/images/logo-logia.png",
      "description": `I have a blog called **"La Logia de Python"** in which I try to
      write about the things I learn, the things I figure out about the tools I use
      or about some random thoughts I usually have, you can expect mostly Python content from it
      <br/>
      <br/>
      You can take a look at it [here](${BLOG_LINK})`
  }
}