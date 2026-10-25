# SEO next steps and re-check plan

Role line used everywhere: **Senior MLOps Engineer and AI Educator**.
Bio sentence for every profile: *Senior MLOps Engineer and AI Educator. I take data and AI systems from prototype to production, and have taught Data Science, ML and AI to 100,000+ learners. More at anishmahapatra.com*
Link text: use "Anish Mahapatra" or the bare domain. Always link `https://anishmahapatra.com/`.

## Done (verified 2026-10-25)
- **www to apex:** Cloudflare Redirect Rule live. `https://www.anishmahapatra.com/about/?x=1` returns 301 to `https://anishmahapatra.com/about/?x=1` (path and query kept). `http://www` goes through `https://www` first (two hops); harmless.
- **Search Console:** Domain property verified (`google-site-verification` TXT record present on the apex). Sitemap `https://anishmahapatra.com/sitemap-index.xml` submitted (not checkable without login).
- **Site:** `/` and `/about/` in the sitemap, Person/WebSite/ProfilePage JSON-LD, canonical, OG/Twitter tags, `robots.txt` with the Sitemap line, 404 is `noindex`. Lighthouse (mobile, live): SEO 100, Accessibility 100, Best Practices 96 (only failure: the Cloudflare analytics beacon blocked by an ad blocker in the test browser).

## Still to do (your clicks)
1. Search Console, URL Inspection: Request Indexing for `https://anishmahapatra.com/` and `https://anishmahapatra.com/about/`, if not already done.
2. The link-back gaps in the table below.

## Link-backs
| Where | Status | Action |
|---|---|---|
| GitHub | Done. Bio has role line and domain; Website field `https://anishmahapatra.com/`; profile README links the site with the role line | none |
| Medium | Done. Short bio and About body carry the bio sentence; About links `anishmahapatra.com` | none |
| Substack | Partly. Publication description has name, role and domain, but as plain text, not a link. Author bio still reads "Want to get to know me? Google me. Anish Mahapatra." | Replace the author bio with the bio sentence; add the site as a link on the About page |
| YouTube (personal, @AnishMahapatra01) | Done. Description and Links point to `https://anishmahapatra.com/` | none |
| LinkedIn | Unverified. Public (logged-out) page shows "Anish Mahapatra - Toast", no headline or website visible. An old article links `www.anishmahapatra.com/post/what-is-the-future-of-work`, which now 404s | Check Contact info, Website (type: Personal) and Featured while logged in; fix or drop the dead `/post/...` link |
| YouTube (AI For Dummies) | Not done: owned by a different Google account | Add the site link from that account |
| Pluralsight, KnowledgeHut, Posit | Dropped | none |

## Re-check plan (judge at 8 to 12 weeks, Google re-ranks slowly)
Same four queries and method as `baseline.md`: Edge, `pws=0&hl=en&gl=us&num=20`, record order in a table.
- Week 2: new title shows in `site:anishmahapatra.com`; `/about/` is indexed. If not, re-request indexing.
- Week 4: confirm every link-back above is live. Check the bare-name query.
- Week 8: if still off page 1, the cause is authority. Add more followed links with the name as link text (guest posts, author bios, talk pages).
- Week 12: top 5 but not #1 is acceptable if the #1 result is the other Anish's LinkedIn. Longer-form posts on the domain are the only content fallback; thin hub pages will not help.
