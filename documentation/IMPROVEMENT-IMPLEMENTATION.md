# EduVerse improvement implementation

This upgrade focuses on turning the existing content library into a guided learning product.

## Implemented

- New `/start` onboarding flow with subject, level, topic and daily-time selection.
- Recommended first lesson, estimated study days and first-three-chapter preview.
- Homepage-first call to action for guided learning.
- “Continue Learning” card using the most recently visited lesson.
- Curriculum search, learning-level filters and collapsible category sections.
- Visible chapter prerequisites and category progress.
- Central data-derived counts across homepage and collection pages.
- Corrected duplicate metadata-brand suffixes.
- Per-route canonical URLs and richer descriptions.
- Organization, website, course and science-answer structured data.
- Automatic Open Graph and X/Twitter preview image generation.
- Dedicated URL for every science question.
- Science-answer links to related full curriculum lessons.
- Sitemap coverage for `/start` and all science-answer pages.
- Analytics-ready events for path creation, lesson starts, practice, quizzes, completion and returning learners.

## Analytics events

The browser dispatches `eduverse:analytics` custom events and pushes the same payload into `window.dataLayer` when Google Tag Manager is installed.

- `placement_plan_created`
- `start_path_clicked`
- `lesson_started`
- `practice_completed`
- `quiz_completed`
- `lesson_completed`
- `continue_learning_clicked`

## Required Vercel configuration

Set this production environment variable:

```text
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Do not leave it set to localhost in production. Redeploy after changing it so canonical URLs, sitemap entries, robots metadata and social previews use the final domain.

## External launch checklist

1. Connect the permanent custom domain in Vercel.
2. Add the domain property to Google Search Console.
3. Submit `/sitemap.xml` in Search Console.
4. Confirm `/robots.txt` and several canonical tags after deployment.
5. Connect Google Tag Manager, GA4 or another analytics provider to the emitted events.
6. Run PageSpeed Insights against the homepage, `/start`, both subject pages and several long lessons.
7. Test keyboard navigation and screen-reader labels on the start flow, curriculum filters, quizzes and science Q&A accordions.

## Validation commands

```bash
npm ci
npm run typecheck
npm run lint
npm test
npm run build
```
