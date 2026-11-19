# HABITORA Website

A static HTML, CSS and JavaScript storefront for Habit Tracker Pro.

## Files
- `index.html`: main landing page
- `about.html`, `contact.html`: basic information pages
- `privacy.html`, `terms.html`, `refund.html`: draft legal pages that must be completed and reviewed
- `thank-you.html`: informational post-checkout page (does not verify payment)
- `css/style.css`: responsive styling
- `js/config.js`: checkout, email and social placeholders
- `js/main.js`: navigation and placeholder handling
- `assets/images/`: local SVG preview artwork

## Before publishing
1. Open `js/config.js`.
2. Replace `YOUR_SUPERPROFILE_CHECKOUT_URL` with the actual published SuperProfile product checkout URL.
3. Replace `YOUR_SUPPORT_EMAIL` and social URLs.
4. Complete all bracketed legal placeholders in privacy, terms and refund pages. Have the policies reviewed for your business and target markets.
5. Confirm the final Excel product, product features, supported Excel versions and delivery files are accurate.
6. Test the purchase flow using the checkout provider's test or low-value process, if available.

## Local preview
Open `index.html` in a browser. For best results, run a local static server (for example, VS Code Live Server).

## Free hosting with Cloudflare Pages
1. Create a GitHub repository and upload the contents of this folder (not the outer folder itself).
2. In Cloudflare Dashboard, open Workers & Pages > Create > Pages > Connect to Git.
3. Select the repository.
4. Framework preset: None.
5. Build command: leave blank.
6. Build output directory: `/` (or the repository root, depending on the setup screen).
7. Deploy.
8. Add your custom domain in the Pages project's Custom domains section and follow the DNS instructions.

You can also use GitHub Pages for a static site. Hosting provider free-plan limits and terms may change.

## Important limitations
- This is a static storefront. It does not include customer accounts, order database, admin dashboard, custom checkout API, or server-side payment verification.
- The purchase button opens the SuperProfile checkout URL configured in `js/config.js`.
- Product delivery and payment confirmation must be configured inside SuperProfile.
- The thank-you page must not be treated as proof of payment.
- Do not place a private product download link in public website code.
- Legal pages are starter drafts, not legal advice.
