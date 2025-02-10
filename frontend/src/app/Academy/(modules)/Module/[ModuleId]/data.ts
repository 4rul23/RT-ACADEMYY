export const cssModuleData = {
    id: "css-basics",
    title: "Mastering CSS: From Basics to Advanced",
    description:
      "Unlock the full potential of CSS with this comprehensive guide. Learn everything from basic syntax to advanced techniques like animations, flexbox, and responsive design.",
    sections: [
      {
        id: "welcome-to-css",
        title: "Welcome to CSS",
        type: "reading",
        content: {
          markdown: `# Welcome to CSS! 🎨

  ## Introduction to CSS

  Cascading Style Sheets (CSS) is the magic wand of web design. It transforms plain HTML into visually stunning, interactive web pages. With CSS, you can control colors, layouts, animations, and even create responsive designs that adapt to any screen size.

  ## Why Use CSS?

  - **Separation of Concerns:** Keep your HTML clean and focus on structure while CSS handles the design.
  - **Maintainability:** Update styles across your entire site by editing just one file.
  - **Responsive Design:** Create layouts that look great on desktops, tablets, and phones.
  - **Enhanced User Experience:** Add animations, transitions, and interactive elements to engage users.

  ## Basic CSS Syntax

  A CSS rule consists of a **selector** and a **declaration block**:

  \`\`\`css
  selector {
    property: value;
  }
  \`\`\`

  ### Breakdown:
  - **Selector:** The HTML element you want to style (e.g., \`p\`, \`h1\`, \`.class-name\`, \`#id-name\`).
  - **Property:** The attribute to change (e.g., \`color\`, \`font-size\`, \`margin\`).
  - **Value:** The new value for the attribute (e.g., \`blue\`, \`16px\`, \`20px\`).

  ## Example

  Let's style all paragraph elements with blue text and a larger font size:

  \`\`\`css
  p {
    color: blue;
    font-size: 18px;
  }
  \`\`\`

  This rule applies blue color and a larger font size to all text contained in \<p\> tags.

  ## Advanced Topics Overview

  Once you're comfortable with the basics, dive into these advanced topics:
  - **Box Model:** Understand how padding, border, and margin work together.
  - **Flexbox & Grid:** Master modern layout techniques.
  - **Animations & Transitions:** Bring your designs to life.
  - **Media Queries:** Create responsive designs for all devices.

  Ready to unleash your creativity? Let's get started! 🚀
  `
        }
      },
      {
        id: "css-syntax-selectors",
        title: "CSS Syntax & Selectors",
        type: "reading",
        content: {
          markdown: `# CSS Syntax & Selectors 🎯

  ## Selectors

  CSS selectors are the key to targeting specific HTML elements. Here are some common types:

  - **Element Selector:** Targets by tag name (e.g., \`div\`, \`span\`).
  - **Class Selector:** Targets by class attribute (e.g., \`.container\`).
  - **ID Selector:** Targets by id attribute (e.g., \`#header\`).
  - **Attribute Selector:** Targets elements with a specific attribute.
  - **Pseudo-classes & Pseudo-elements:** Targets element states or parts (e.g., \`:hover\`, \`::before\`).

  ## Syntax Recap

  The CSS declaration block remains the same:

  \`\`\`css
  selector {
    property: value;
  }
  \`\`\`

  ## Practical Example

  Let's style a button with a hover effect:

  \`\`\`css
  .button {
    background-color: #007BFF;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .button:hover {
    background-color: #0056b3;
  }
  \`\`\`

  This creates a button that changes color when hovered over, providing visual feedback to users.

  ## Tips for Efficient CSS

  - **Combine Selectors:** Group common styles to reduce redundancy.
  - **Maintain Specificity:** Avoid overly specific selectors to make your CSS easier to maintain.
  - **Use Comments:** Document your code for clarity and future reference.

  Keep practicing these selectors to become a CSS pro! 💪
  `
        }
      },
      {
        id: "box-model",
        title: "CSS Box Model",
        type: "video",
        content: {
          videoUrl: "https://www.youtube.com/embed/rIO5326FgPE",
          markdown: `# Understanding the CSS Box Model 📦

  In CSS, every element is considered a box. The box model describes the design and layout of these elements:

  - **Content:** The actual material (text, image, etc.).
  - **Padding:** Creates space around the content (inside the border).
  - **Border:** Wraps the padding and content.
  - **Margin:** Creates space outside the border, separating the element from others.

  Understanding the box model is crucial for layout design and troubleshooting spacing issues.

  ## Visual Representation

  \`\`\`
  +---------------------------+
  |         Margin            |
  |  +---------------------+  |
  |  |      Border         |  |
  |  |  +--------------+   |  |
  |  |  |   Padding    |   |  |
  |  |  |  +--------+  |   |  |
  |  |  |  | Content|  |   |  |
  |  |  |  +--------+  |   |  |
  |  |  +--------------+   |  |
  |  +---------------------+  |
  +---------------------------+
  \`\`\`

  ## Example

  Let's create a box with padding, border, and margin:

  \`\`\`css
  .box {
    width: 200px;
    height: 200px;
    padding: 20px;
    border: 5px solid #333;
    margin: 30px;
    background-color: #f4f4f4;
  }
  \`\`\`

  This creates a box with a visible border, padding inside the border, and margin outside the border.

  ## Interactive Exercise

  Try adjusting the padding, border, and margin values in the example above to see how they affect the box's appearance. Experiment with different values to get a feel for how the box model works.

  Ready to put your knowledge to the test? Let's move on to the next section! 🚀
  `
        }
      },
      {
        id: "box-model-practice",
        title: "Box Model Exercise",
        type: "exercise",
        content: {
          instructions: `## Exercise: Build a Responsive Card Component 🎨

  Apply your knowledge of the box model to create an attractive and responsive card component.

  **Requirements:**
  - Width of 300px.
  - Padding of 20px.
  - A light gray border (1px solid).
  - Rounded corners with an 8px radius.
  - Include a title and paragraph inside the card.
  - Add a hover effect that scales the card slightly and adds a shadow.

  **Bonus:**
  - Make the card responsive so it adjusts to smaller screens.
  - Add a transition effect for smooth hover animations.`,
          starterCode: `.card {
    /* Start here: add your styles */
  }

  .card h2 {
    /* Optional: style the title */
  }

  .card p {
    /* Optional: style the description */
  }`,
          solution: `.card {
    width: 300px;
    padding: 20px;
    margin: 20px auto;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }

  .card h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  .card p {
    line-height: 1.6;
    color: #666;
  }

  @media (max-width: 600px) {
    .card {
      width: 100%;
      margin: 10px 0;
    }
  }`
        }
      }
    ]
  };
