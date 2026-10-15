PRIME PROPERTIES — FRONTEND DEMONSTRATION

Run locally
-----------
Open index.html in a browser, or open the prime-properties folder in Visual Studio Code and start index.html with the Live Server extension. No build step or package installation is required.

Project files
-------------
index.html                 Home page
properties.html            Search, filters, sorting and sample listings
property-details.html      Property detail page (selected with ?id=...)
about.html                 About page
contact.html               Contact details, demo map and validated form
css/style.css              Responsive styles
js/main.js                 Shared sample data and page interactions

Demonstration content
---------------------
Property data, pricing, contact details, office address, business hours, map location, and testimonials are illustrative only. There is no backend: enquiries are validated in the browser but are not sent or stored. WhatsApp links use the configurable demo number in js/main.js and should be replaced before production.

Update the `properties` array and `WHATSAPP_NUMBER` in js/main.js to customize the listings and WhatsApp destination. Replace the demo contact information in the page footers and contact sections before publishing.

Property pages use links in this format:
property-details.html?id=lekki-duplex
