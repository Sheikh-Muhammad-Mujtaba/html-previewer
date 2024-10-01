Here's a sample `README.md` for your Next.js project based on the HTML Previewer component:

---

# HTML Previewer with Next.js

This is an HTML Previewer built using **Next.js**. It allows users to enter custom HTML code into a text area and see the live preview of that HTML rendered directly on the same page. The app also provides the ability to paste predefined HTML into the editor for previewing.

## Features

- **Live HTML Preview:** Enter any HTML code in the text area, and the preview will be updated in real-time.
- **Predefined HTML:** Use the "Paste HTML Example" button to insert a predefined HTML snippet.
- **Responsive Design:** The app is fully responsive and adjusts its layout according to the screen size.
- **Dynamic Preview Box:** The preview box dynamically resizes according to the content added.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Frontend:** React, TypeScript
- **UI Components:** Custom components for `Textarea`, `Button`, and the preview area.
- **Styling:** Tailwind CSS for styling and layout

## Installation and Setup

Follow the steps below to get the project up and running on your local machine:

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/html-previewer.git
cd html-previewer
```

### 2. Install the dependencies:

```bash
npm install
```

or using `yarn`:

```bash
yarn install
```

### 3. Run the development server:

```bash
npm run dev
```

or using `yarn`:

```bash
yarn dev
```

Now open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

```bash
.
├── components
│   ├── ui
│   │   ├── button.tsx     # Button component
│   │   └── textarea.tsx   # Textarea component
│   └── html-previewer.tsx # Main HTMLPreviewComponent
├── pages
│   └── index.tsx          # Entry point for the Next.js app
├── public                 # Static assets
├── styles                 # Global CSS and styling
├── README.md              # Project documentation
└── package.json           # Project dependencies and scripts
```

## How to Use

1. **Enter HTML Code:**
   - Type or paste HTML code into the textarea.
   - Click "Generate Preview" to render the entered HTML.

2. **Paste Predefined HTML:**
   - Click "Paste HTML Example" to insert predefined HTML code into the editor.

3. **Preview HTML:**
   - The HTML preview will be dynamically generated and displayed below the editor.

## Example Predefined HTML

Here’s a sample of the predefined HTML used in the project:

```html
<div style="text-align: center;">
  <h1>Hello, World!</h1>
  <p>This is a predefined HTML snippet.</p>
  <button>Click Me</button>
</div>
```

## Customization

You can easily modify the predefined HTML by editing the `predefinedHtml.ts` file located in the conponent directory:

```ts
export const predefinedHtml = `
  <div style="text-align: center;">
    <h1>Hello, World!</h1>
    <p>This is a predefined HTML snippet.</p>
    <button>Click Me</button>
  </div>
`;
```

You can replace the content with your custom HTML.

