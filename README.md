# 🌸 My Skincare Quiz

A modern, interactive React-based skincare quiz application that helps users discover personalized skincare products based on their hair type and preferences.

## ✨ Features

- **Interactive Quiz**: Multi-step questionnaire about hair type, washing frequency, and preferences
- **Progress Tracking**: Visual progress indicator with circular progress bar
- **Personalized Results**: Product recommendations based on quiz answers
- **Product Slider**: Interactive product carousel with wishlist functionality
- **Local Storage**: Wishlist persistence across sessions
- **Modern UI**: Clean, minimalist design with smooth animations

## 🛠 Technologies Used

- **React 19.1.1** - Frontend framework
- **React Router DOM 7.9.1** - Client-side routing
- **Vite 7.1.6** - Build tool and development server
- **Styled Components 6.1.19** - CSS-in-JS styling
- **ESLint** - Code linting and formatting

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-skincare-quiz.git
   cd my-skincare-quiz
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📱 Usage

### Quiz Flow

1. **Start Page**: Users see an attractive landing page with background image and call-to-action
2. **Quiz Questions**: 5 questions covering:
   - Hair type/texture (Straight, Curly, Wavy, Fine)
   - Washing frequency (Daily to bi-weekly)
   - Desired benefits (Anti-breakage, Hydration, etc.)
   - Hair concerns (Breakage, Frizz, Scalp dryness, etc.)
   - Natural hair color
3. **Results Page**: Personalized product recommendations with interactive slider

## 🧩 Components Overview

### StartPage.jsx
- Landing page with hero background
- Call-to-action button to start quiz
- Clean, minimalist design

### QuizPage.jsx
- Dynamic question rendering based on URL parameters
- Progress tracking with circular SVG progress bar
- Option selection with visual feedback
- Navigation controls (Back/Next)

### ResultsPage.jsx
- Hero section with background image and overlay
- Product recommendations section
- Integration with ProductSlider component

### ProductSlider.jsx
- Interactive product carousel
- Wishlist functionality with localStorage persistence
- Pagination with dots indicator
- Responsive design for mobile devices

## 🎨 Styling

The application uses a combination of CSS modules and global styles:

- **Color Palette**: Soft blues (#C3EDFF, #79a5b3) with neutral grays
- **Typography**: Poppins font family for modern, clean look
- **Responsive Design**: Mobile-first approach with breakpoints at 900px and 600px
- **Animations**: Smooth transitions and hover effects
- **Layout**: Flexbox-based layouts for optimal responsiveness


## 🌐 Deployment

The project is configured for deployment on Vercel with the included `vercel.json` configuration:

```json
{
    "rewrites": [
        {
            "source": "/(.*)",
            "destination": "/"
        }
    ]
}
```




