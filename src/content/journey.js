// Professional journey: work + education + speaking/community.
// Edit freely.

export const experience = [
  {
    role: 'Lead Developer',
    org: 'Monadical',
    period: '2022 \u2014 2026',
    location: 'Remote',
    summary:
      'Led a team of five across client projects in different industries. Beyond the core backend work, I integrated LLM APIs and embeddings into product features, built internal AI tooling, and shipped agent workflows. Most of the wins were speed-related: things that used to take hours cut down to minutes, and workflows that no longer needed a human in the loop for every step.',
  },
  {
    role: 'Senior Backend Developer',
    org: 'ShipHero',
    period: '2019 \u2014 2022',
    location: 'Remote',
    summary:
      'Built solutions that fetched millions of records performantly, designed a maintainable automation-rules system, migrated the codebase from Python 2 to 3, and supported the frontend team on GraphQL.',
  },
  {
    role: 'Full Stack Developer',
    org: 'Monadical',
    period: '2017 \u2014 2019',
    location: 'Remote',
    summary:
      'Worked on a blockchain-based poker platform with Django and React/Redux, improved banking concurrency with a data-oriented rewrite, and built an archiving strategy to keep tables clean.',
  },
  {
    role: 'Lead Web Developer',
    org: 'RADY Consultores',
    period: '2015 \u2014 2017',
    location: 'Cali, Colombia',
    summary:
      'Coordinated the dev team, estimated timelines, and introduced the practices I cared about: unit testing, continuous integration, and a more deliberate approach to code quality.',
  },
  {
    role: 'Lead Web Developer',
    org: 'Cedesoft Lab, Universidad del Valle',
    period: '2015 \u2014 2016',
    location: 'Cali, Colombia',
    summary:
      'My first job, while I was still finishing my degree. I was coordinating a group of about ten people on Django projects for the university and trying to get everyone building things the same way.',
  },
]

export const education = {
  degree: 'B.S. Software Engineering',
  org: 'Universidad del Valle',
  period: '2011 \u2014 2016',
  logo: '/images/univalle.gif',
  logoAlt: 'Universidad del Valle logo',
  note: 'Graduated top of my Computer Science class (GPA 4.22/5, six academic distinctions). My thesis, a multitenant Django tool for adopting XP practices, earned a meritorious mention.',
}

// Speaking + community organizing.
export const community = {
  intro:
    'I helped build the Python community in Colombia, organizing events and speaking at them.',

  organizing: [
    'Co-organizer, PyCon Colombia (2019, 2020) \u2014 led the talks and workshops track',
    'Organizer, PyDay Cali 2018 \u2014 the first PyDay in Colombia, 250+ attendees',
    'Organizer, Django Girls Cali 2018 \u2014 a first coding workshop for 40+ women',
    'Co-organizer, Python Cali meetup (2017 \u2014 2020)',
  ],

  talks: [
    {
      title: 'Debugging \u2014 A Senior\u2019s Skill',
      event: 'PyCon Colombia 2020',
      href: 'https://www.youtube.com/watch?v=x8cXLG6zB-Q',
    },
    {
      title: 'Interview with Andrew Godwin',
      event: 'PyCon Colombia 2020',
      href: 'https://www.youtube.com/watch?v=0ZNMZdFk_WY',
    },
    {
      title: 'Interview with Russell Keith-Magee',
      event: 'PyCon Colombia 2019',
      href: 'https://www.youtube.com/watch?v=wSa28y7Z5Iw',
    },
    {
      title: 'Multitenant Architectures in Python',
      event: 'PyCon Colombia 2018',
      href: 'https://2018.pycon.co/talks/multitenant-architectures-in-python/',
    },
  ],
}
