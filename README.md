# दादा माळी फरसाण (Dada Mali Farsan)

Premium bilingual website (Marathi/English) for a legacy traditional Maharashtrian sweets and farsan business established in 1967.

## Phase 1 - Local Development

To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Development Workflow

1. All development must happen on the `development` branch.
2. Ensure everything works perfectly on `localhost` (mobile + desktop).
3. Wait for user review and approval before proceeding.
4. Only push to `main` branch when ready for production deployment (Cloudflare Pages).

## Architecture

- **React + Vite**: Fast, modern frontend.
- **Vanilla CSS**: Custom styling with CSS variables (no Tailwind/Bootstrap) to ensure maximum design control and premium feel.
- **Data-driven Components**: Products, Gallery, and Timeline are rendered from JSON files in `src/data/`.

## Deployment

The `main` branch is connected to Cloudflare Pages.
Build Command: `npm run build`
Build Output Directory: `dist`
