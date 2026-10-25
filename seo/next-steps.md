# SEO next steps (your clicks) and re-check plan

Role line used everywhere: **Senior MLOps Engineer and AI Educator**.
Bio sentence for every profile: *Senior MLOps Engineer and AI Educator. I take data and AI systems from prototype to production, and have taught Data Science, ML and AI to 100,000+ learners. More at anishmahapatra.com*
Link text: use "Anish Mahapatra" or the bare domain. Always link `https://anishmahapatra.com/`.

## Search Console (after the branch is merged and deployed)
1. Add a **Domain property** `anishmahapatra.com`. Verify with the DNS TXT record in Cloudflare.
2. Sitemaps: submit `https://anishmahapatra.com/sitemap-index.xml`.
3. URL Inspection on `https://anishmahapatra.com/`, then Request Indexing. This replaces the stale title.
4. Do the same for `https://anishmahapatra.com/about/`.

## Link-backs (biggest lever)
| Where | Field | Text |
|---|---|---|
| LinkedIn | Contact info, Website (type: Personal). Also Featured | `https://anishmahapatra.com` |
| GitHub | Profile Website field, and a line in the `anishmahapatra/anishmahapatra` README | `More at [anishmahapatra.com](https://anishmahapatra.com)` |
| Medium | Bio, and an article footer line | bio sentence above |
| Substack | About / profile website | bio sentence above |
| YouTube (AI For Dummies) | About, Links, Website | `https://anishmahapatra.com` |
| Pluralsight author bio | Bio | bio sentence above (profile URL still unknown; add to `sameAs` once confirmed) |
| Posit / Analytics Vidhya / KnowledgeHut author bios | Bio | bio sentence above |

## Re-check plan (judge at 8 to 12 weeks, Google re-ranks slowly)
Same four queries and method as `baseline.md`: Edge, `pws=0&hl=en&gl=us&num=20`, record order in a table.
- Week 2: new title shows in `site:anishmahapatra.com`; `/about/` is indexed. If not, re-request indexing.
- Week 4: confirm every link-back above is live. Check the bare-name query.
- Week 8: if still off page 1, the cause is authority. Add more followed links with the name as link text (guest posts, author bios, talk pages).
- Week 12: top 5 but not #1 is acceptable if the #1 result is the other Anish's LinkedIn. Longer-form posts on the domain are the only content fallback; thin hub pages will not help.
