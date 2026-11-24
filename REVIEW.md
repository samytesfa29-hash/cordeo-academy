# Review of the GitHub Pages preview

Preview: https://samytesfa29-hash.github.io/cordeo-academy/

## Checked on the live preview

- Styles and visible school photographs loaded.
- Weekly schedule changed by mouse and keyboard arrow keys.
- Mobile menu opened and closed with Escape.
- FAQ answers expanded.
- Calendar filters returned nine no-school events and eleven remaining events on the review date, November 23, 2026 (Portland time).
- Tuition estimate: two K–6 students and one 7–8 student returned $16,865 under the displayed assumptions; zero students returned $0 and guidance.
- Contact form prepared a campus-tour draft with synthetic test data. No email was sent.
- Phone-width layout checks covered 320px and 375px. The 320px homepage headline clipped; corrected in this package. Other checked main pages had no measured horizontal page overflow at 320px.
- No JavaScript errors were reported during the checked interactions.

## Changes in this package

- Smaller headline on the narrowest phones.
- Mobile menu contains keyboard focus, prevents background scrolling, and makes background content inactive while open.
- Navigation remains available if JavaScript is unavailable.
- Email preparation is disabled until its handler is ready, preventing accidental ordinary form submission. Whitespace-only name/message entries are rejected.
- Contact page also links to the school's existing online form. The bottom learning link now leads to the school-week explanation.
- Local images reduced in size; sharing images now have a complete public URL.
- The 404 page resolves its resources against the known GitHub Pages location.

## Release status

The presentation update adds `experience.css` and `experience.js`. Twelve DOM interaction checks passed for opening the photo tour, advancing and wrapping scenes, keyboard navigation, closing and restoring scrolling, opening gallery-selected scenes, preserving gallery structure, and initializing on other pages. Native dialog methods were simulated in those tests; native focus behavior, animation, and the new layout still require browser verification after uploading. Local HTML, resources, anchors, and ARIA checks now cover 322 references across 10 pages. A local HTTP preview returned 200, but opening it in the preview panel was unavailable.

The revised local files passed link, anchor, duplicate-ID, heading, image-alt, and ARIA-target checks (10 pages; 297 local references), plus JavaScript syntax validation. The changed files still need uploading to GitHub; the live-site checks above describe the version observed before this package was uploaded. New menu behavior and the headline correction require a final live recheck after upload. Browser screenshot capture timed out, so this is not a completed visual sign-off.

## School decisions before the official launch

Confirm current tuition, upper-grade offerings, and dates with the principal. Decide whether to keep the clearly labeled email composer, use the existing school form, or connect a new direct-submission service. Domain transfer and direct form integration have not been performed.

When moving from the GitHub preview to another domain, update the full sharing-image URL and the 404 base URL in the HTML files. The README explains publishing and maintenance.
