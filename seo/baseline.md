# Baseline: "Anish Mahapatra" search rank

Date: 2026-10-25
Method: real Google (google.com, `pws=0&hl=en&gl=us&num=20`) driven through the Edge DevTools MCP, in the user's Edge profile. Not fully logged-out, so personalisation is reduced (`pws=0`) but not guaranteed zero. Organic `h3` results only, in page order (ads, panels and "people also ask" excluded).

## 1. `"Anish Mahapatra"` (quoted)
Site **not on the first page (not in the 9 organic results returned).**

| # | Result |
|---|---|
| 1 | linkedin.com/in/anish-mahapatra: a DIFFERENT Anish Mahapatra (CompE @ Purdue) |
| 2 | anishmahapatra.medium.com (yours) |
| 3 | nj.milesplit.com athlete: different person |
| 4 | github.com/anishmahapatra (yours) |
| 5 | facebook.com/anishmahapatra01 |
| 6 | medium.com/@anishmahapatra/about (yours) |
| 7 | anishmahapatra.substack.com (yours) |
| 8 | cricheroes.com cricketer: different person |
| 9 | instagram.com post |

## 2. `"Anish Mahapatra" ML Ops`
| # | Result |
|---|---|
| 1 | in.linkedin.com/in/anishmahapatra (yours) |
| **2** | **anishmahapatra.com** (title shown: "Anish Mahapatra \| Senior AI/ML Engineer, Production Systems") |
| 3 | github.com/anishmahapatra |
| 4 | tal.club/meet/anish-mahapatra |
| 5 | Medium |
| 6-9 | Analytics Vidhya DataHour (x2), two LinkedIn posts |

## 3. `"Anish Mahapatra" Toast`
| # | Result |
|---|---|
| **1** | **anishmahapatra.com** |
| 2 | in.linkedin.com/in/anishmahapatra |
| 3 | LinkedIn directory: "10+ Anish Mahapatra profiles" |
| 4-5 | unrelated |

## 4. `"Anish Mahapatra" Pluralsight`
| # | Result |
|---|---|
| **1** | **anishmahapatra.com** |
| 2 | Scribd PDF, unrelated |

## 5. `site:anishmahapatra.com`
Indexed. 1 result, the home page only.

## Findings
- The site is indexed and already #1-2 once a second keyword is added (Toast, Pluralsight, ML Ops). It loses on the bare name.
- Other people share the exact name: a Purdue computer engineer (LinkedIn #1 for the bare name), an NJ athlete, a cricketer. The bare-name query is contested by LinkedIn and other platforms with strong authority.
- **Stale snippet:** Google shows the title "Anish Mahapatra | Senior AI/ML Engineer, Production Systems". The live `<title>` is now "Anish Mahapatra | Senior AI Systems Engineer". Google has not recrawled since the redesign.
- Only one URL exists on the site, so there is nothing else to rank.

## Live-site facts (curl, 2026-10-25)
- `/` returns 200. One H1, "Anish Mahapatra". Canonical and meta description present.
- `robots.txt` allows `*` and declares `sitemap-index.xml`. Cloudflare-managed rules block AI-training bots (including Google-Extended); that does not affect Google Search.
- `sitemap-index.xml` and `sitemap-0.xml` exist and list only `/`. `/sitemap.xml` returns 404 (harmless).
- Person JSON-LD exists. `sameAs` has LinkedIn, GitHub, Medium, X. Missing: Substack, YouTube.
- No About page.

## Profile URLs verified from the user's open Edge tabs
- Substack: https://anishmahapatra.substack.com/ (canonical, title "Anish's Newsletter")
- YouTube: https://www.youtube.com/@AIForDummiesAnish (owner link on a watched video)
- Pluralsight author profile URL: NOT yet found. Do not add until confirmed.
