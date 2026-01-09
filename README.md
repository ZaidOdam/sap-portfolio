# Portfolio Website

A professional, single-page personal portfolio website designed with an SAP SuccessFactors-inspired aesthetic. Built using React, Vite, and Tailwind CSS, this project showcases professional experience, skills, and achievements in a clean, responsive interface.

## 🚀 Features

*   **SAP-Like Design**: Utilizes a custom color palette (`sap-blue`, `sap-gold`, `sap-bg-grey`) and typography (Arial/Helvetica) to mimic the professional look of SAP systems.
*   **Responsive Layout**: Fully responsive design ensuring a seamless experience across desktop, tablet, and mobile devices.
*   **Interactive Animations**: Smooth transitions and entry animations powered by **Framer Motion**.
*   **Comprehensive Sections**:
    *   **Hero**: engaging introduction with a profile image and resume download option.
    *   **Experience**: A "journey-style" visualization of professional work history.
    *   **Skills**: Categorized display of technical and functional skills with logos.
    *   **Certifications**: Showcase of professional certifications.
    *   **Achievements**: Highlighted notable accomplishments.
    *   **Education**: Academic background details.
    *   **Contact**: A clean, elegant contact form with direct contact information (Email, Phone, LinkedIn).

## 🛠 Tech Stack

*   **Frontend Framework**: [React 19](https://react.dev/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom configuration)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```bash
src/
├── assets/          # Static assets (images, logos)
├── components/      # Reusable React components
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Certifications.jsx
│   ├── Achievements.jsx
│   ├── Education.jsx
│   └── Contact.jsx
├── App.jsx          # Main application component layout
├── index.css        # Global styles and Tailwind directives
└── main.jsx         # Entry point
```

## 📦 Installation & Setup

1.  **Clone the repository** (if applicable) or navigate to the project directory.

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

4.  **Build for production**:
    ```bash
    npm run build
    ```

5.  **Preview production build**:
    ```bash
    npm run preview
    ```

## 🎨 Customizing Styles

The project uses a custom Tailwind configuration in `tailwind.config.js` to define the SAP-inspired color scheme:

-   `sap-blue`: #0a6ed1
-   `sap-dark-blue`: #001d35
-   `sap-gold`: #f0ab00
-   `sap-bg-grey`: #f5f6f7
-   `sap-text`: #32363a

Font family is globally set to 'Arial', 'Helvetica', 'sans-serif'.
