Flowva Onboarding
Flowva Onboarding is a modern, responsive web application built with React, TypeScript, and Tailwind CSS. It provides a user-friendly multi-step onboarding flow for setting up a digital tool library, including user details, location, tool selection, and goals. The project uses Create React App for a robust development setup and incorporates accessibility best practices.
Features

Welcome Step: Introduces users to Flowva with a clear call-to-action.
About You Form: Collects user role and work type with validation.
Location Form: Allows users to select their country for personalized suggestions.
Tool Stack Selection: Interactive grid for choosing workflow tools.
Goals Form: Captures user goals with checkbox selection.
Progress Bar: Visualizes onboarding progress across steps.
Completion Popup: Confirms setup completion with a dashboard redirect prompt.
Responsive Design: Optimized for desktop and mobile using Tailwind CSS.
Type Safety: Uses TypeScript for strict typing.
Modular Components: Organized for reusability and maintainability.

Prerequisites

Node.js (version 16 or higher)
npm (version 7 or higher)
A modern web browser (e.g., Chrome, Firefox)

Installation

Clone the Repository (or create the project structure manually):
git clone https://github.com/Iamayomi/flowva-form.git
cd flowva-onboarding

Set Up Project Files: Ensure all files are in place (see Project Structure below).

Install Dependencies:
npm install

Install Tailwind CSS:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

Usage

Development:
npm start

Open http://localhost:3000 to view the app.

Building for Production:
npm run build

The optimized build will be in the build/ directory.

Project Structure
flowva-onboarding/
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── public/
│ └── index.html
├── src/
│ ├── index.tsx
│ ├── App.tsx
│ ├── App.css
│ ├── index.css
│ ├── types/
│ │ └── index.ts
│ ├── components/
│ │ ├── ProgressBar.tsx
│ │ ├── WelcomeStep.tsx
│ │ ├── AboutYouStep.tsx
│ │ ├── LocationStep.tsx
│ │ ├── ToolStackStep.tsx
│ │ ├── GoalsStep.tsx
│ │ └── CompletionPopup.tsx
└── README.md

Key Dependencies

React: JavaScript library for building user interfaces.
TypeScript: Adds static types to JavaScript for improved developer experience.
Tailwind CSS: Utility-first CSS framework for styling.
Create React App: Boilerplate for setting up a React project with TypeScript and ESLint.
eslint-plugin-jsx-a11y: Ensures accessibility compliance in JSX.

Contributing
Contributions are welcome! To contribute:

Fork the repository (if applicable).

Create a new branch for your feature or bug fix:
git checkout -b feature/your-feature-name

Make changes and commit them with descriptive messages:
git commit -m "Add your feature description"

Push your branch:
git push origin feature/your-feature-name

Submit a pull request with a clear description of your changes.

Please ensure your code follows the project's coding standards, including TypeScript usage, Tailwind CSS conventions, and accessibility best practices.
License
This project is licensed under the MIT License. See the LICENSE file for details (if applicable, or add one if needed).
Contact
For questions or support, please contact the project maintainer at [ayomidesherif2019@gmail.com] or open an issue in the repository.
Built with ❤️ using React, TypeScript, and Tailwind CSS.
