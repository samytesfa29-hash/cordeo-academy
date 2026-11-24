# Cor Deo Christian Academy

A complete, responsive redesign built with plain HTML, CSS, and JavaScript. No installation, build process, paid hosting, or API keys required.

The latest presentation adds an editorial homepage with layered photographs, an accessible five-scene photo tour, clickable school-life photographs, larger reading text, and reduced-motion-aware transitions. These additions are in `assets/experience.css` and `assets/experience.js`; upload those files along with the rest of `assets`.

## Preview

Open `index.html` in a browser. All pages and interactions work locally. Alternatively, run `python -m http.server 8080` in this folder and visit http://localhost:8080.

## Publish on GitHub Pages

1. Create a repository on GitHub (for example, `cordeo-academy`).
2. Extract the ZIP and upload the **contents** of this folder to the repository root. `index.html` should be at the root, not inside another folder.
3. Open **Settings → Pages**. For the easiest upload, choose **Deploy from a branch**, select **main**, and choose **/(root)**. Save.
4. GitHub will display the website address after deployment. Project URLs work because all internal paths are relative.

Alternatively, commit the included `.github/workflows/deploy.yml` file, set Pages source to **GitHub Actions**, and push to `main`.

The ZIP includes hidden `.github` and `.nojekyll` files; browser uploads may omit hidden files. Branch-based publishing works without the workflow. Do not add the real school's domain until its owner authorizes the change. No custom domain is configured in this package.

## Pages and features

- Home, Our Approach, Learning, Admissions, School Life, Contact, FAQ, Privacy, Accessibility, and 404.
- Local school photography and fonts; no third-party runtime dependencies.
- Accessible mobile navigation, keyboard-operated weekly schedule, expandable FAQs.
- Calendar filters using Portland's current date; homepage shows the next three published events.
- Family tuition estimator with explicit assumptions and official-document links.
- Contact form prepares an email for the visitor to review and send. **It does not submit messages or book appointments.** The visitor can open their email app or copy the draft. No backend is required.
- Responsive layouts, visible keyboard focus, reduced-motion support, unique page titles and descriptions.

## Edit the site

Edit the HTML files directly. Shared styles are in `assets/styles.css`; behavior is in `assets/site.js`. Update the repeated header/footer on each page when changing shared navigation or contact details. Change colors in the CSS `:root` variables. Replace local images while preserving filenames, or update their HTML paths and alt text.

## Before publishing for the school

- School information was reviewed on November 23, 2026. Have school staff approve the copy, tuition, calendar, privacy wording, and redesigned crest. Verify photo-use permission; photos are from the current school website and are not stock assets licensed for unrelated use.
- Published pages advertise K–10 while the enrollment packet has some K–8-specific fields and pricing. The redesign asks families to confirm upper-grade offerings with the office. No 9th–10th grade tuition was invented.
- Tuition follows the currently published About page: $6,200 K–6 and $6,325 grades 7–8. Confirm these against the school office. The estimator assumes the highest tuition is full-price; sibling discount assignment must be confirmed.
- Official enrollment forms, giving, and calendar PDFs link to the current school domain. Those links must be maintained or replaced with school-approved local copies if the old host changes.
- Contact inquiries require the visitor to send the email. To add direct form submission, connect a school-approved backend and update privacy wording.
- If using a custom domain, add the approved domain in GitHub Pages settings and configure DNS separately.
- For reliable social previews, change each `og:image` value to the full public URL of `assets/social-card.jpg` after you know the deployment address. Add your canonical URLs and sitemap at that point.

## Content sources

- https://www.cordeoacademy.org/
- https://www.cordeoacademy.org/about
- https://www.cordeoacademy.org/enrollment
- https://www.cordeoacademy.org/contact
- https://www.cordeoacademy.org/donate
- Official 2026–27 enrollment packet and calendar linked from the school website.

## Rights

Original redesign code may be used and adapted for this project. School names, photography, and underlying school content remain with their respective owners. Fonts are DM Sans and DM Serif Display, distributed under the SIL Open Font License; see `assets/fonts/OFL-DM-Sans.txt` and `assets/fonts/OFL-DM-Serif-Display.txt`.
