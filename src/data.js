const NAME = "Milton Lenis"
const ROLE = "Senior Backend Developer"
const EMAIL = "miltonln04@gmail.com"
const BLOG_LINK = "https://www.thepythonic.com"
const CURRENTLY_BASED = "Cali, Colombia"

export const DATA = {
  "name": NAME,
  "role": ROLE,
  "profile": "I have a big amount of passion about coding, open source, programming communities, soccer and videogames",
  "bio": `My name is Milton Lenis and I'm a **${ROLE}** from **Colombia**, currently based in **${CURRENTLY_BASED}**

  I'm a life-long learner, always excited to work on the most cutting edge technologies, ready to help and passionated about the things I do on a daily basis.

  I've always loved to create things with code since I was a Software Engineering student at Universidad del Valle where I discovered my passion
  for web development and python during the last years of my degree, in fact, I started my first job as a developer there.

  I've been working in web development on the Python ecosystem since 2015, I've faced several kind of projects, like **e-commerce, social media,
  fintech, Data Visualisation, and Multitenant (SaaS) platforms**.

  I also like to contribute to Open Source projects whenever I can, that's my way to thank the developers who create the cool tools
  I use on a daily basis.

  Another thing I enjoy a lot is to be part of programming communities where I've organized events like **local meetups, Django Girls Workshops,
  PyDays** and our national **PyCon**. Sometimes I also **give some talks**.

  When I'm not doing something related to programming I'm usually playing videogames or playing soccer with my friends. I also enjoy a wonderful
  life with my wife and our little dog Chili.

  Welcome to my page and please don't hesitate on checking every section you want to dig deeper about me, if you have any question feel free to
  contact me.`,
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
        "name": "ShipHero",
        "webPage": "https://shiphero.com/",
        "ubication": "New York, U.S.A (Remote)"
      },
      "role": "Senior Backend Developer",
      "period": "2019 - Present",
      "description": "Work with Python/Flask, SQLAlchemy, GraphQL, etc. on a Warehouse Management System",
      "achievements": [
        "Migrated the codebase from Python 2 to 3",
        "Bug-fixing to improve the reliability of the platform",
        "Proposed and implemented features and small projects inside the company",
        "Supported Frontend devs with GraphQL Queries and Mutations"
      ]
    },
    {
      "workPlace": {
        "name": "Monadical",
        "webPage": "https://monadical.com/",
        "ubication": "Medellín, Colombia (Remote)"
      },
      "role": "Full Stack Developer",
      "period": "2017 - 2019",
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
            "title": "ShipHero Platform",
            "categories": "backend API",
            "picture": "assets/images/projects/shiphero.png",
            "techStack": [
                "Python / Flask",
                "GraphQL",
                "SQLAlchemy",
                "Microservices",
            ],
            "link": {
                "label": "🔒 Private Project",
                "url": false
            }
        },
        {
            "title": "Curaduría",
            "categories": "backend frontend",
            "picture": "assets/images/projects/curaduria.png",
            "techStack": [
                "Django",
                "ReactJS",
                "PostgreSQL",
            ],
            "link": {
                "label": "🔒 Private Project",
                "url": false
            }
        },
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
        "title": "Python Ecosystem",
        "icon": "python",
        "learnedAt": 2015,
        "description": "The Python ecosystem represents a big part in my professional career, almost any of the projects I've been involved in uses it, like Django, which is my favorite tool to work in the backend"
      },
    ],
    "tech": {
      "Frameworks": [
          "Flask",
          "Django",
      ],
      "APIs": [
          "Django Rest Framework",
          "GraphQL (Graphene, Django & Flask)",
          "Flask REST"
      ],
      "Async Web": [
          "WebSockets",
          "Django Channels"
      ],
      "Databases": [
          "PostgreSQL",
          "MySQL",
          "SQLite"
      ],
      "ORMs": [
          "SQLAlchemy",
          "Django ORM",
      ],
      "CMS": [
          "Wagtail"
      ],
      "Testing": [
          "unittest",
          "PyTest",
          "Mocking",
          "Monkey Patching"
      ],
      "Scripting": [
          "Bash",
          "Python CLI",
          "Click"
      ],
      "DevOps": [
          "AWS",
          "Docker",
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
          "Multitenant Architectures & SaaS",
          "Microservices",
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
      "title": "Debugging - A Senior's Skill 📹",
      "event": "PyCon Colombia 2020",
      "year": "2020",
      "link": "https://www.youtube.com/watch?v=x8cXLG6zB-Q",
      "picture": "https://www.youtube.com/embed/x8cXLG6zB-Q",
      "language": "English",
      "excerpt": "Talk about the importance of becoming good at debugging code, and a brief intro to ipdb",
      "description": `Debugging is maybe one of the most important skills to become a good problem solver, however, this
      skill is pretty underrated in our industry, my intention with this talk was to give people a call to action to become
      better debuggers.
      `
    },
    {
      "title": "Interview - Andrew Godwin 📹",
      "event": "PyCon Colombia 2020",
      "year": "2020",
      "link": "https://www.youtube.com/watch?v=0ZNMZdFk_WY",
      "picture": "https://www.youtube.com/embed/0ZNMZdFk_WY",
      "language": "English",
      "excerpt": "Interview with Andrew Godwin, one of the Keynote Speakers for PyCon Colombia 2020",
      "description": `Andrew is one of the core developers of Django Project and the creator of Django Channels, a
       project that I've personally used a lot to build projects using websockets and async.
      `
    },
    {
      "title": "Interview - Russel Keith-Magee 📹",
      "event": "PyCon Colombia 2019",
      "year": "2019",
      "link": "https://www.youtube.com/watch?v=wSa28y7Z5Iw",
      "picture": "https://www.youtube.com/embed/wSa28y7Z5Iw",
      "language": "English",
      "excerpt": "Interview with Russel Keith-Magee, one of the Keynote Speakers for PyCon Colombia 2019",
      "description": `As part of the organizing team for this event, I had the wonderful opportunity to interview
       Russel Keith-Magee, one of the most important contributors for Django and Python in general.
      `
    },
    {
      "title": "Multitenant Architectures in Python",
      "event": "PyCon Colombia 2018",
      "year": "2018",
      "link": "https://2018.pycon.co/talks/multitenant-architectures-in-python/",
      "picture": "assets/images/talks/multitenant.jpg",
      "language": "Spanish",
      "excerpt": "Talk about what multitenant architectures are, what types exist, how to implement one with Django and Postgresql, my experiences implementing this type of architecture and practical advice on this subject in general.",
      "description": `PyCon Colombia is the biggest and most important Python event in Colombia, since I knew about it, it became like a dream
      to talk in an event of such magnitude, when CFPs for PyCon Colombia 2018 were open, I didn't hesitate to sent my proposal, I decided to
      go with the subject I handled better at the moment: Multitenant Architectures.
      <br/>
      <br/>
      Fortunately my proposal was accepted and I had the chance of presenting my talk at the event. I talked
      about what multitenant architectures are, what types exist, how to implement one with Django and Postgresql,
      my experiences implementing this type of architecture and practical advice on this subject in general.`
    },
    {
      "title": "How to translate a site using Django",
      "event": "Python Cali Meetup",
      "year": "2018",
      "link": "https://www.meetup.com/es-ES/Python-Cali/events/248228222/",
      "picture": "assets/images/talks/translate.jpg",
      "language": "Spanish",
      "excerpt": "Comprehensive guide on how to translate a Django site using its built-in i18n system",
      "description": `Django has a powerful built-in translation system and I have implemented it in a few
      projects, this is so cool that I wanted to spread the word about how easy is to support multiple languages
      in your site using Django, so I crafted this talk and gave it at Python Cali Meetup group. In this talk,
      I described how to setup i18n from scratch, showed how it works on a dummy project, and finally showed a real
      example of its cappabilities.
      <br/>
      <br/>
      I also wrote [this spanish blog post](https://www.lalogiadepython.com/2018/03/01/como-traducir-un-sitio-web-con-django/) about the topic.`
    },
    {
      "title": "Unittesting step by step",
      "event": "Python Cali Meetup",
      "year": "2017",
      "link": "https://www.meetup.com/es-ES/Python-Cali/events/242279852/",
      "picture": "assets/images/talks/unittesting.jpg",
      "language": "Spanish",
      "excerpt": "Talk about unittesting in Python and its importance with a live example",
      "description": `I love the TDD approach, writing unit tests is part of my day-to-day job,
      so, I wanted to help the people who maybe don't understand the value of testing to own this philosophy,
      that's why I crafted this talk centered mostly on python unittest library.
      <br/>
      <br/>
      In this talk I explained the value and importance of testing, showed of to write good tests and
      finished with a live coding session writing tests for a dummy project with numbers`
    },
    {
      "title": "Introduction to the Pythonista Style",
      "event": "Python Cali Meetup",
      "year": "2017",
      "language": "Spanish",
      "link": "https://www.meetup.com/es-ES/Python-Cali/events/240121439/",
      "picture": "assets/images/talks/pythonista.jpg",
      "excerpt": "Talk about Pythonic Idioms, why they are so important and good practices to produce more readable code",
      "description": `This was my very first talk, I wanted so bad to join my local Python community, I reached to them
      and proposed this talk to start my public speaking career.
      <br/>
      <br/>
      Since I love a lot the clean and readable code, I decided to go with a talk about it. Python lets us write beautiful code
      using some popular ways to do certain stuff in a clean way called 'Pythonic Idioms', this is more of a community term than
      a language feature, but, if you follow the 'Pythonic Idioms' your code will be a lot better and less bug prone.
      <br/>
      <br/>
      In this talk I covered all of the Pythonic Idioms I know and contrasted wrong ways of writing Python code vs the Pythonic way`
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
    <li><i class="fa fa-check" aria-hidden="true"></i> Back-end development with Python/Django/Flask</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Async web development with Django Channels</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> API crafting and maintenance with Django Rest Framework and GraphQL</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Content oriented sites building with Wagtail</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> UI development</li>
    <li><i class="fa fa-check" aria-hidden="true"></i> Testing and CI processes implementation</li>
  </ul>

  Drop me a line at [${EMAIL}](mailto:${EMAIL})
  `,
  "blog": {
      "name": "The Pythonic",
      "link": BLOG_LINK,
      "logo": "assets/images/logo-logia.png",
      "description": `I have a blog called **"The Pythonic"** in which I try to
      write about the things I learn, the things I figure out about the tools I use
      or about some random thoughts I usually have, you can expect mostly Python content from it written
      sometimes in English, sometimes in Spanish.
      <br/>
      <br/>
      You can take a look at it [here](${BLOG_LINK})`
  },
  "events": [
    {
      "title": "PyCon Colombia 2020",
      "role": "Co-Organizer",
      "timePeriod": "2020",
      "logo": 'assets/images/events/pycon-colombia-2020/logo.png',
      "pictures": [
        'assets/images/events/pycon-colombia-2020/random.jpg',
        'assets/images/events/pycon-colombia-2020/andrew.jpg',
      ],
      "excerpt": "The biggest and most important Python Conference in Colombia",
      "description": `Continuing with the work developed in my first participation as Co-Organizer for **PyCon Colombia 2019**
      I was back again as part of the team. I was still part of the speakers team trying to bring more quality to the event's talks
      and workshops`
    },
    {
      "title": "PyDay Pereira 2019",
      "role": "Co-Organizer",
      "timePeriod": "2019",
      "logo": 'assets/images/events/pyday-pereira-2019/logo.svg',
      "pictures": [
        'assets/images/events/pyday-pereira-2019/me.jpg',
        'assets/images/events/pyday-pereira-2019/random.jpg',
        'assets/images/events/pyday-pereira-2019/people.jpg',
      ],
      "excerpt": "A-whole-day conference dedicated to Python and its ecosystem, second one ever in Colombia",
      "description": `Since **PyDay Cali 2018** was a success we decided to take the format to a new city, together with
       our friends from Pereira, we created PyDay Pereira 2019 and it was a success!
      `
    },
    {
      "title": "PyCon Colombia 2019",
      "role": "Co-Organizer",
      "timePeriod": "2019",
      "logo": 'assets/images/events/pycon-colombia-2019/logo.png',
      "pictures": [
        'assets/images/events/pycon-colombia-2019/team.jpg',
        'assets/images/events/pycon-colombia-2019/auditorium.jpg',
        'assets/images/events/pycon-colombia-2019/people.jpg',
      ],
      "excerpt": "The biggest and most important Python Conference in Colombia",
      "description": `After my compromise with the Django Girls Cali 2018 workshop, [John Roa](https://twitter.com/jhonjairoroa87) Chief Organizer of PyCon Colombia
      recognized my willingness to help the community and invited me to become an Organizer for PyCon Colombia.
      <br/>
      <br/>
      My main goal, was to improve the quality of the talks and workshops in the event, we worked a lot on the conference the whole 2018. I suggested a lot of
      changes in the proposals reviewing process, I introduced an anonymous reviewing process to avoid bias, implemented a lot of reviewing criteria to align the team
      and also helped another branches of the conference.
      <br/>
      <br/>
      At February 2019 we had a great PyCon Colombia, most of the attendees were pretty satisfied with the quality of the talks and the event in general.`
    },
    {
      "title": "PyDay Cali 2018",
      "role": "Organizer",
      "timePeriod": "2018",
      "logo": 'assets/images/events/pyday-cali-2018/pyday-cali-logo.png',
      "pictures": [
        'assets/images/events/pyday-cali-2018/foto-grupal.jpeg',
        'assets/images/events/pyday-cali-2018/team.jpeg',
        'assets/images/events/pyday-cali-2018/random-pic.jpeg',
      ],
      "excerpt": "A-whole-day conference dedicated to Python and its ecosystem, first one ever in Colombia",
      "description": `The Python Cali community has been one of the most active Python Communities in Colombia, running monthly meetups regularly. But we wanted
      more, we wanted to create a bigger event, something more ambitious. So we started to brainstorm and then we decided that we wanted to create a PyDay
      like other countries have done.
      <br/>
      <br/>
      It was quite a challenge since this would be the first PyDay ever in Colombia, but we didn't step back on it, we paired with the [CaliDev](https://www.calidev.co/)
      community who has experience running similar events.
      <br/>
      <br/>
      We created the team, defined roles, and started working a lot. In the end, the event was a big success, we had more than 250 attendees, 7 Speakers, food and
      a great moment with the community.
      <br/>
      <br/>
      Together the amazing designer [Isabella Quintana](https://twitter.com/isaquinva), We recorded all the talks, you can take a look at them
      [here](https://www.youtube.com/playlist?list=PL8KY_kDWhekfNPN9MRWEpKEp2IgO4_rzn)`
    },
    {
      "title": "Django Girls Cali 2018",
      "role": "Organizer",
      "timePeriod": "2018",
      "logo": 'assets/images/events/django-girls-cali-2018/logo.png',
      "pictures": [
        'assets/images/events/django-girls-cali-2018/foto-grupal.jpg',
        'assets/images/events/django-girls-cali-2018/workshop.jpg',
        'assets/images/events/django-girls-cali-2018/me.jpg',
      ],
      "excerpt": "Django workshop for women who want to have a first approach to tech and coding",
      "description": `When I attended my first PyCon Colombia in 2018 I met [Johanna Sanchez](https://twitter.com/EllaQuimica), the
      Chief Organizer for Django Girls Colombia, I talked to her with my college [Isabel Ruiz](https://twitter.com/iris9112) about the
      possibility of running a Django Girls workshop in Cali, she was excited about it and then we scheduled a meeting to talk about it.
      <br/>
      <br/>
      After that we created a team with the Python Cali Community and worked with the team to organize all the aspects of the event. It required
      a lot of work and effort, but in the end we had more than 40 attendees very happy to have their first opportunity to learn how to code.
      <br/>
      <br/>
      Here are the [photos of the event](https://argentinaenpython.com/galeria/django-girls-cali/) which I took btw`
    },
    {
      "title": "Python Cali Meetup",
      "role": "Co-Organizer",
      "timePeriod": "2017 - Current",
      "logo": 'assets/images/events/python-cali/logo.png',
      "pictures": [
        'assets/images/events/python-cali/group.jpg',
        'assets/images/events/python-cali/people.jpeg',
        'assets/images/events/python-cali/speaking.jpg',
      ],
      "excerpt": "Local Python group for my city Cali, Colombia",
      "description": `Python Cali was my first approach to the community, I first started by giving a talk
      **Introduction to the Pythonista Style** in 2017, since then I started to attend every meetup in the
      community, give ideas and gather speakers for the meetups until the organizers invited me to be part
      of the team a few months later.
      <br/>
      <br/>
      I'm still a Co-Organizer for Python Cali, we try to do monthly meetups in which we talk about subjects
      related to Python, its frameworks and tools, its applications, among others.`
    },
  ]
}