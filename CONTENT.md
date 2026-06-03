# Editing this site

All the words and data live in `src/content/`. You don't need to touch the
components to update the site — just edit these files and redeploy.

| File | What it controls |
| --- | --- |
| `profile.js` | Your name, headline, hero intro, current focus, "tools I reach for", contact copy |
| `projects.js` | The selected projects list |
| `journey.js` | Work history, education, speaking & community |
| `interests.js` | The personal interests section |
| `links.js` | Email, CV link, and social links |

## How to update common things

- **Photo:** replace `public/images/milton.jpg` (keep the same filename), then redeploy.
- **CV:** replace `public/cv.pdf` (keep the same filename), then redeploy.
- **Add a project:** copy one object in `projects.js`. Set `link: null` for private work.
- **New job:** add an object to the top of the `experience` array in `journey.js`.

## Voice guide — so it reads like you, not a template

The drafts in `src/content/` are a **starting point**. Rewrite them in your own
words before you ship. A few rules that keep it human:

1. **First person, plain language.** "I build backends" beats "Experienced
   backend engineer with a passion for..."
2. **Concrete over adjective.** Say what you did and what changed: "led 5 devs
   building multi-table tournaments", not "passionate team player".
3. **Short sentences.** When in doubt, cut the second half.
4. **No buzzwords.** Avoid "passionate", "synergy", "results-driven", "leverage".
5. **It's okay to be specific and a little personal.** The interests section and
   the hero are where people decide if they like you. Don't sand them down.

## Anything marked `EDIT:` in the content files

Those are placeholders only you can fill in accurately (e.g. what you're focused
on right now, what you want to do next). Confirm or rewrite them.

## Run it locally

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```

Pushing to the default branch deploys automatically via GitHub Actions.
