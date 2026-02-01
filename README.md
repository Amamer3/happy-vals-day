# Valentine's Proposal Website 💌

A beautiful, interactive, and mobile-responsive website designed to pop the big question on Valentine's Day.

## ✨ Features

- **Interactive Proposal**: A playful "No" button that evades the cursor (desktop) or shrinks when clicked (mobile), ensuring a "Yes" is the only option!
- **Celebration Mode**: When "Yes" is clicked, the screen erupts in fireworks, festive GIFs, and the background music volume adjusts.
- **Background Music**: Auto-playing romantic background music (handles browser autoplay policies with a "Tap to Open" overlay).
- **Mobile Optimized**: Fully responsive design with touch-friendly interactions and optimized animations for mobile devices.
- **Custom Animations**: Smooth floating, popping, and fading animations for a polished feel.

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- Custom CSS Animations

## 🚀 Getting Started

1.  **Clone the repository**
2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
4.  Open [http://localhost:3000](http://localhost:3000) with your browser.

## 🎨 Customization

To make this your own:

- **Name**: Update the displayed name in `app/page.tsx`.
- **Images**: Replace the GIFs in the `public` and `public/fireworks` folders or update the `src` paths in `app/page.tsx`.
- **Music**: Replace `public/songs/die-with-a-smile.mp3` with your preferred song.

## 📱 Mobile Experience

The application is optimized for mobile devices with:
- Touch-friendly "No" button logic.
- Optimized particle effects for smooth performance on phones.
- Adjusted layout and font sizes for smaller screens.
- Smart viewport settings to prevent unwanted zooming.

---

Made with ❤️ for a special Valentine.
