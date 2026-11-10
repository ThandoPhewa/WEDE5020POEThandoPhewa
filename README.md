# Lulu's Sugarcraft Studio - Part 3

## Project overview
This website presents Lulu's Sugarcraft Studio, a small creative food business offering customised cakes, cupcakes and sweet treats. The website has five pages: Home, About Us, Products, Enquiry and Contact.

## How to run the website
1. Keep the folders and files in the same structure shown below.
2. Open the folder in Visual Studio Code.
3. Use the Live Server extension to preview `index.html` in a browser.
4. Keep an internet connection available for the Leaflet map tiles and Leaflet library.

## Folder structure
```text
Lulus-Sugarcraft-Studio/
├── index.html
├── about.html
├── products.html
├── enquiry.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── README.md
├── CSS/
│   └── styles.css
├── js/
│   ├── index.js
│   ├── about.js
│   ├── products.js
│   ├── enquiry.js
│   ├── contact.js
│   └── map.js
└── images/
    ├── logo.jpeg
    ├── cakes.jpeg
    ├── cupcakes.jpeg
    └── treats.jpeg
```

## Part 3 functionality added
- Expanded the CSS stylesheet with additional styling for page sections, navigation, buttons, forms, product images, hover effects and responsive layouts.
- Updated the Contact page and its form so visitors can provide their contact details, select a message type and write a message. The form validates the information and prepares an email to the business.
- Updated the Enquiry page and its form so visitors can provide their details, select the product they are interested in and describe their custom order. The form validates the information and displays a response explaining that availability and pricing will be confirmed.
- Added a Frequently Asked Questions (FAQ) section with an interactive accordion on the About Us page.
- Added a product search field, category filter and alphabetical sorting on the Products page.
- Added a lightbox so a visitor can click a product image to view it larger.
- Added an interactive Leaflet map showing the general KwaZulu-Natal service area. It is not an exact business address.
- Added CSS transitions, image hover effects and a lightbox zoom animation.
- Added JavaScript form validation to the Enquiry and Contact forms.
- Added an asynchronous Netlify Forms submission for the Enquiry form. After a successful submission, the page displays a message explaining that the studio will confirm availability and pricing.
- The Contact form validates the fields and prepares an email to `info@lulussugarcraftstudio.co.za` using the visitor's default email application. The visitor must press Send in that email application.
- Added mobile responsive styling, accessible labels, keyboard focus styles and reduced-motion support.

## SEO work
- Added a unique page title and meta description to each page.
- Added relevant keywords naturally in page content and metadata.
- Used a clear heading structure with one main H1 per page.
- Added descriptive alternative text to images and lazy loading to product photos.
- Used descriptive page names and internal links between pages.
- Added a `robots.txt` file and `sitemap.xml` file.
- Designed the layout to work on mobile screens.

### Important SEO setup before publishing
1. Replace `https://YOUR-DOMAIN.netlify.app` in the canonical links, `robots.txt` and `sitemap.xml` with the real published website address.
2. Use descriptive image file names and compress the real image files before uploading.
3. Add the published sitemap to Google Search Console after deployment.
4. Share the website through the business's real social media accounts and ask relevant local business directories or partners for genuine links. Do not buy spam backlinks.
5. The service area is currently described as selected areas of KwaZulu-Natal. Add a precise business address only if the business has a public customer-facing address.

## Form setup and limitations
The Enquiry form uses Netlify Forms. It is intended to work after the site is deployed on Netlify. In the Netlify dashboard, check that form detection is enabled, deploy the site, submit a test enquiry, and configure email notifications for the business email address. Test the form again on the published website. The Contact form uses a `mailto:` link, so the visitor's email application must be configured. The website does not process payments or automatically calculate prices; the studio confirms the quote and availability after reviewing each request.

## Security and performance
- The website does not collect payment card details or passwords.
- Keep software and dependencies updated and use HTTPS through the hosting provider.
- Do not place private keys, passwords or API secrets in JavaScript files.
- Use image compression and appropriately sized images to reduce loading time.
- The enquiry form includes a Netlify honeypot field as a basic spam reduction measure. Hosting-side spam controls and regular testing are still recommended.

## Free deployment using Netlify
1. Create or sign in to a Netlify account.
2. Push this project to a GitHub repository.
3. In Netlify, choose **Add new site** and import the GitHub repository.
4. This is a plain HTML/CSS/JavaScript website, so leave the build command empty and set the publish directory to the project root (`.`).
5. Deploy the site and copy the public URL.
6. Replace the placeholder domain in canonical links, `robots.txt` and `sitemap.xml` with the real Netlify URL, commit and push the changes, then redeploy.
7. In Netlify, enable form detection if prompted and configure form email notifications. Submit a test enquiry to confirm the form works.
8. Test all five pages, navigation links, images, map, product search, lightbox and both forms on desktop and mobile.

## GitHub workflow
After editing, use descriptive commit messages, for example:
- `Add SEO metadata and sitemap for Part 3`
- `Add JavaScript product search and lightbox`
- `Add validated enquiry and contact forms`
- `Add Leaflet service area map`

Then push the commits to the remote GitHub repository and submit the repository URL and deployed website URL to the learning management system.

## Changelog
### Part 3
- Added more CSS styling to improve the appearance and consistency of the website, including page sections, navigation, buttons, forms, images, hover effects and responsive layouts.
- Updated the Contact page and changed its form to collect basic contact details, the type of message and a full message. Added validation and email preparation.
- Updated the Enquiry page and changed its form to collect customer details and custom-order requirements. Added JavaScript validation and a response about confirming price and availability.
- Added a Frequently Asked Questions section with an interactive accordion.
- Added page-specific SEO titles, descriptions and keywords.
- Added robots.txt and sitemap.xml.
- Added responsive layout and accessibility improvements.
- Added FAQ accordion, product search, category filtering and sorting.
- Added product image lightbox and CSS animations.
- Added Leaflet interactive regional map.
- Added JavaScript validation and asynchronous Netlify submission for enquiries.
- Added contact form validation and email preparation using mailto.

## References
- Mozilla (n.d.) *CSS transitions*. MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions (Accessed: 10 November 2026).
- Mozilla (n.d.) *Document Object Model (DOM)*. MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model (Accessed: 10 November 2026).
- Mozilla (n.d.) *Your first form*. MDN Web Docs. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form (Accessed: 10 November 2026).
- GitHub (n.d.) *About repositories*. GitHub Docs. Available at: https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories (Accessed: 10 November 2026).
- Leaflet (n.d.) *Leaflet: an open-source JavaScript library for mobile-friendly maps*. Available at: https://leafletjs.com/ (Accessed: 10 November 2026).
- Netlify (n.d.) *Forms setup*. Available at: https://docs.netlify.com/forms/setup/ (Accessed: 10 November 2026).
- OpenStreetMap contributors (n.d.) *OpenStreetMap*. Available at: https://www.openstreetmap.org/ (Accessed: 10 November 2026).
- Google Search Central (n.d.) *SEO Starter Guide*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 10 November 2026).
- MDN Web Docs (n.d.) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation (Accessed: 10 November 2026).

Hosting on GitHub pages:
https://www.youtube.com/watch?v=BT4WzyT2g8k

How to Do A LightBox:
https://www.youtube.com/watch?v=TSRtBISvsh4

How to do a contact form with validation
https://www.youtube.com/watch?v=In0nB0ABaUk
https://www.youtube.com/watch?v=zqzLwph7BKo

General animations:
https://www.youtube.com/watch?v=0TnO1GzKWPc

https://www.youtube.com/watch?v=0TnO1GzKWPc