# Cor Deo Christian Academy

A responsive, build-free website for Cor Deo Christian Academy. It uses plain HTML, CSS, and JavaScript with local fonts, real school photography, and no runtime dependencies, trackers, API keys, or paid hosting requirement.

## View the design

- Extract the ZIP and open `index.html` to review the complete website.
- Open `OPEN-HOMEPAGE-PREVIEW.html` for a self-contained homepage preview. Its fonts, styles, photos, and interactions are embedded, so it works before extracting other assets. Links to other pages open the live site, which may be an earlier version until you upload the update.
- For a local web server, run `python -m http.server 8080` in this folder and visit http://localhost:8080.

## Publish with GitHub Pages

1. Create or open your GitHub repository.
2. Upload the HTML files and the complete `assets` folder to the repository root. Preserve the `fonts` and `documents` subfolders. Do not upload the ZIP as the website.
3. In Settings > Pages, select Deploy from a branch, main, and /(root). Save.
4. Wait for publishing, then refresh the live page. Use Ctrl+Shift+R if your browser shows older files.

The optional `.github/workflows/deploy.yml` supports Actions-based publishing. If using it, set the Pages source to GitHub Actions. Branch-based publishing does not require uploading that workflow.

`OPEN-HOMEPAGE-PREVIEW.html` and the Markdown notes are optional for hosting. The normal homepage is `index.html`; it loads assets normally and stays much smaller than the standalone preview.

## Pages

Home; Our Approach; Learning; Admissions; School Life; Contact; FAQ; Our Faith; Support Cor Deo; Privacy; Accessibility; and 404. The standalone homepage preview is an additional convenience file.

## Features

- Cinematic homepage with changeable school photographs and tuition information near the top.
- Nine-photo story with native accessible dialog controls, keyboard arrows, and focus restoration.
- Photographic grade cards, larger typography, and reduced-motion-aware transitions.
- Interactive weekly schedule and grade-specific home-day guidance.
- Upcoming-first calendar, past-date archive, and upcoming no-school filter using Portland's date.
- Published tuition and a family estimate with its discount assumptions explained.
- Verified school office contacts and a link to the complete school statement of faith.
- Local copies of the official enrollment packet and school calendar.
- PayPal giving through the school's published link and a link to its existing Facebook video.

## Contact behavior

The contact form prepares an email for the visitor to review and send. It does not submit messages to a backend or book tours. Visitors can open an email app or copy the draft. During preview, the contact page also links to the school's existing online form. No email or donation was sent during testing.

## Content decisions

The school's current materials publish 2026-27 enrollment information. The banner is year-neutral; 2027-28 enrollment, availability, and rates have not been invented. Published base tuition is $6,200 for K-6 and $6,325 for grades 7-8. Grades 9-10 offerings and rates should be discussed with the principal.

Home-day estimates follow the official enrollment packet. They describe student work time, not uninterrupted parent teaching time. The sample home-day sequence is clearly illustrative. Photos of school life are not presented as photographs of home days.

Staff names and roles come from the enrollment packet. No teacher biographies, testimonials, staff portraits, accreditation, or post-10th-grade destinations have been fabricated. Those can be added when the school supplies approved material. Parents are directed to the principal for transition planning.

The principal should confirm current school information and approve the content, photo use, and contact workflow before the official launch.

## Edit and maintain

- HTML files contain editable page content.
- `assets/styles.css` contains the base layout.
- `assets/experience.css` and `assets/polish.css` contain the visual design layers; the final theme is in `polish.css`.
- `assets/site.js`, `assets/experience.js`, and `assets/polish.js` contain the interactions.
- Update repeated navigation, footer, and school details across pages when changing them.
- Replace the documents under `assets/documents` when the school publishes new approved versions.
- Update calendar dates and tuition assumptions when the school year changes.

## Move to the approved school domain

Run `python scripts/update-domain.py https://www.cordeoacademy.org/` from this folder to update full public URLs in the HTML, including social-image metadata, preview navigation, and the 404 base URL. The current public base URL is recorded in `site-config.json`.

This helper does not configure DNS, GitHub Pages custom-domain settings, email, or form delivery. School email addresses and payment-provider links remain unchanged. The preview footer notice and old-host contact-form link are hidden automatically on the official school domain.

Before changing the school's live domain, arrange its form handling and redirects from old URL paths with the site owner.

## Validation

See REVIEW.md for native browser, layout, interaction, and resource checks. PRESENTATION.md contains a short walkthrough for showing the principal.

## Sources

- https://www.cordeoacademy.org/
- https://www.cordeoacademy.org/about
- https://www.cordeoacademy.org/enrollment
- https://www.cordeoacademy.org/contact
- https://www.cordeoacademy.org/donate
- Official 2026-27 enrollment packet and calendar linked by the school.

School identity, photography, and underlying content remain with their respective owners. Original redesign code can be adapted for this project. DM Sans and DM Serif Display are distributed under the SIL Open Font License; their license files are in `assets/fonts`.
