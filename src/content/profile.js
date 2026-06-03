// Hero + current focus + contact copy.
// Edit this file to update the content on the site.

export const profile = {
  name: 'Milton Lenis',
  role: 'Senior software engineer',
  location: 'Cali, Colombia',

  intro: [
    'I build and lead backend-heavy products. I\u2019ve been doing it in Python for about ten years, and over the last couple of years AI has become a real part of how I work.',
    'I like the unglamorous parts: making systems scale, keeping codebases readable, figuring out where AI actually helps and where it doesn\u2019t.',
  ],

  photo: '/images/milton.jpg',
  photoAlt: 'Milton Lenis',
}

// This is a "now" section. It\u2019s meant to be edited often.
// Two habits keep it from going stale:
//   1. Update `status` whenever your situation changes (or set it to null to hide the badge).
//   2. Bump `updated` to the current month every time you touch the copy below.
export const currentFocus = {
  status: 'Open to work',
  updated: 'June 2026',

  now: [
    'I\u2019m wrapping up about four years with Monadical, leading the team behind projects in different industries: gaming, fintech, and others.',
    'Right now I\u2019m between roles and looking for my next one, ideally senior or lead engineering work.',
  ],

  next: 'I like the hard backend problems, but just as much the people side: mentoring, pairing, thinking through architecture together. Lately I\u2019m drawn to roles where AI is actually part of the engineering practice.',

  // "Tools I reach for", grouped so it reads at a glance. Add/rename groups freely.
  tools: [
    { group: 'AI', items: ['Cursor', 'Claude / OpenAI APIs', 'LangChain', 'Embeddings & RAG'] },
    { group: 'Core', items: ['Python Ecosystem', 'Django', 'Flask'] },
    { group: 'Data', items: ['PostgreSQL', 'Redis', 'SQLAlchemy'] },
    { group: 'APIs & realtime', items: ['GraphQL', 'WebSockets / Channels'] },
    { group: 'Frontend', items: ['React'] },
    { group: 'Infra', items: ['Docker', 'AWS'] },
  ],
}

export const contact = {
  lead: 'I\u2019m open to talking about senior or lead engineering roles, interesting backend problems, or just trading notes.',
  followUp: 'The fastest way to reach me is email. I read everything.',
}
