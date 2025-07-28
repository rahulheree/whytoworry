# whytoworry Website

## Overview
This is the official website for **whytoworry**, a platform that empowers startups and brands to de-risk innovation and accelerate market entry with data-driven strategies. The site features a responsive design, an AI-powered Idea Validator, and a contact form for consultations.

## Features
- Responsive design with Tailwind CSS for mobile, tablet, and desktop.
- AI Idea Validator using the Gemini API for instant business idea analysis.
- Interactive UI with scroll-triggered animations, glassmorphism, and gradient effects.
- SEO optimized with Open Graph and Twitter Card metadata.
- Contact form integrated with Formspree.
- Accessible with ARIA attributes and reduced motion support.

## Technologies
- HTML5: Semantic structure.
- CSS (Tailwind CSS): Utility-first styling.
- JavaScript: Interactivity and API integration.
- Lucide Icons: Lightweight icons.
- Google Fonts (Inter): Modern typography.
- Formspree: Form submissions.
- Gemini API: AI-powered idea validation.

## File Structure

whytoworry/├── index.html                # Main HTML file├── css/│   ├── styles.css           # Custom CSS (animations, effects)│   └── tailwind.css         # Tailwind configuration (optional)├── js/│   ├── main.js              # General interactivity (header, animations)│   └── validator.js         # AI Idea Validator logic├── assets/│   ├── favicon.svg          # Favicon│   └── og-image.png         # Open Graph image (placeholder)├── README.md                # Project documentation└── LICENSE                  # MIT License

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/whytoworry.git


Navigate to the Directory:cd whytoworry


Serve the Project:
Open index.html in a browser, or
Use a local server (e.g., npx serve or VS Code Live Server).


Dependencies:
Uses CDN-hosted libraries (Tailwind CSS, Lucide Icons, Google Fonts).
Ensure internet access for CDNs and API calls.


API Configuration:
The AI Idea Validator uses the Gemini API. Replace the API key in js/validator.js with your own:const apiKey = "YOUR_GEMINI_API_KEY";





Usage

Navigation: Use the sticky header to jump to sections.
AI Idea Validator: Enter a business idea and click "Validate My Idea" to get an AI analysis.
Contact Form: Submit consultation requests via the Formspree-integrated form.
Social Links: Follow on Instagram via the footer.

Deployment

Static Hosting: Deploy to GitHub Pages, Netlify, or Vercel.
GitHub Pages:
Push to GitHub.
Enable GitHub Pages in repository settings (main branch, / (root)).


Custom Domain: Update meta tags in index.html with your domain.

Contributing

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a pull request.

License
MIT License. See LICENSE for details.
Contact
Use the website’s contact form or follow us on Instagram.```
