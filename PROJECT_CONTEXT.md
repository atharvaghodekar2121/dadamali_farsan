# Project Context: दादा माळी फरसाण

## Project Overview
Create a premium bilingual website (Marathi primary, English secondary) for a legacy family business established in 1967. The website must feel premium, traditional, and highlight the family legacy while allowing direct WhatsApp inquiries.

## Business Information
- **Business Name**: दादा माळी फरसाण (Dada Mali Farsan)
- **Tagline**: १९६७ पासून अस्सल चव आणि विश्वासाची परंपरा
- **Subheading**: सुप्रसिद्ध गावाकडील फरसाण
- **Established**: 1967

## Brand History
1. **1st Gen**: दादा माळी गादे (Dada Mali Gade)
2. **2nd Gen**: मारुतीराव गादे (Marutirav Gade)
3. **3rd Gen**: शंकरराव गादे (आबा) आणि सोमनाथ गादे (Shankarrao Gade & Somnath Gade)
4. **4th Gen**: चाणक्य गादे आणि सिद्धांत गादे (Chanakya Gade & Siddhant Gade)

## Special Reputation
शहरटाकळी, भावी लिंबगाव, देवगाव आणि परिसरातील साप्ताहिक बाजारांमध्ये अनेक दशकांपासून विश्वासार्ह नाव.

## Contact Details
- **Address**: Bus Stand, Shahar Takli, Taluka Shevgaon, District Ahilyanagar, Maharashtra, India - 414502
- **Phones**: 9822262526, 9921458426
- **WhatsApp**: 9822262526
- **Instagram**: https://www.instagram.com/dada_mali_farsan
- **Google Maps**: https://share.google/gzGJdWaWjw8w8PL6A
- **Hours**: दररोज सकाळी ८:०० ते रात्री ८:००

## Design Requirements
- **DO NOT** create a startup or corporate website.
- **MUST FEEL**: Traditional, Heritage-focused, Premium, Family-owned, Trustworthy, Warm, Authentic.
- **Primary Color**: Saffron Orange (`#FF6B00`)
- **Secondary Color**: Deep Maroon (`#800020`)
- **Accent Color**: Gold (`#D4A843`)
- **Background**: White and Light Cream (`#FFF8F0`)

## Typography Rules
- **Marathi Primary**: Noto Sans Devanagari / Tiro Devanagari Marathi
- **English Secondary**: Inter

## Component Architecture
All text content is directly in the components, but dynamic lists (Products, Timeline, Gallery) must use data from `src/data/*.json`. This ensures easy updates in the future.

## Instructions for Future AI Models/Developers
1. Maintain the CSS variable system in `src/styles/variables.css`.
2. Do not introduce Tailwind or other CSS frameworks. Keep it vanilla for maximum control.
3. If new products are added, simply update `src/data/products.json`.
4. The WhatsApp link format must remain: `https://wa.me/919822262526?text=...`
5. Always test on mobile breakpoints (320px, 375px, 425px) as mobile experience is prioritized.
