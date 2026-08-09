# Experiment 2 Report: Cascading Style Sheets (CSS) Implementation

**Course Outcome Mapped:** CO2 (Create and build web pages and applications)

---

## Objectives & Learning Outcomes

### 1. Three Types of CSS
* **Inline CSS:** Applied directly to an HTML element using the `style` attribute. Useful for quick, single-element overrides (e.g., `<p style="color: red;">`).
* **Internal CSS:** Defined inside the `<style>` tag within the document `<head>`. Useful for single-page rules.
* **External CSS:** Written in a separate `.css` file and linked using `<link rel="stylesheet" href="...">`. Provides reusability across multiple HTML pages.

---

### 2. CSS Selector Types
* **Element Selector:** Targets HTML tags directly (e.g., `body`, `h1`).
* **Class Selector (`.`):** Targets elements with a specific class attribute (e.g., `.flex-card`). Can be reused across multiple elements.
* **ID Selector (`#`):** Targets a unique element with a specific ID (e.g., `#main-heading`). Must be unique per page.
* **Pseudo-class Selector (`:`):** Styles elements based on state (e.g., `:hover`).

---

### 3. Selector Specificity & Inheritance
* **Inheritance:** Certain properties applied to parent tags (like `font-family` or `color` on `body`) automatically cascade down to child tags unless explicitly overridden.
* **Specificity Hierarchy:** Controls which rule applies when conflicts arise:
  $$\text{Inline Styles (1000)} > \text{ID Selectors (0100)} > \text{Class Selectors (0010)} > \text{Element Selectors (0001)}$$

---

### 4. CSS Box Model Management
Every rendered HTML element is treated as a rectangular box comprising four layers:
1. **Content:** The actual text, image, or media.
2. **Padding:** Clear area immediately around content (inside the border).
3. **Border:** Line surrounding padding and content.
4. **Margin:** Clear space outside the border separating elements from neighbors.
* **Box Sizing:** Using `box-sizing: border-box;` ensures padding and borders are calculated inside the declared width/height.

---

### 5. Modern Layouts: Flexbox vs. Grid
* **Flexbox (1D Layout):** Best suited for layout in a single direction (row or column), such as navigation bars or wrapping card lists.
* **Grid (2D Layout):** Best suited for complex two-dimensional layouts requiring structured rows and columns simultaneously.

---

### 6. Responsive Design Principles
* Implemented fluid percentage/relative units (`rem`, `fr`, `%`) alongside `minmax()` grid columns.
* Utilized **CSS Media Queries** (`@media (max-width: 600px)`) to adjust layout behavior, font sizes, and container flex directions dynamically for mobile viewports.

---

### 7. CSS Animations and Transitions
* **Transitions:** Smoothly morphs element state changes over a specified duration when triggered by user interaction (e.g., `transition: transform 0.3s ease` on `:hover`).
* **Keyframe Animations:** Defines multi-stage keyframe states (`@keyframes`) for continuous or complex custom animations independent of user interactions.