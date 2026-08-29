# Experiment 1 Report: HTML5 Semantic Web Page Creation

**Course Outcome:** CO2 (Create and build web pages and applications)

---

## Objectives Addressed

1. **Create a well-structured HTML5 web page using appropriate semantic elements.**
   * Structured the document using modern root elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`.

2. **Differentiate between HTML4 and HTML5 structural elements.**

| Feature / Element | HTML4 Approach | HTML5 Semantic Approach |
| :--- | :--- | :--- |
| **Page Header** | `<div id="header">` | `<header>` |
| **Navigation** | `<div id="nav">` | `<nav>` |
| **Main Content** | `<div id="content">` | `<main>` |
| **Articles/Posts** | `<div class="post">` | `<article>` |
| **Sidebar** | `<div id="sidebar">` | `<aside>` |
| **Footer** | `<div id="footer">` | `<footer>` |
| **Doctype** | Long DTD declaration | Simple `<!DOCTYPE html>` |

3. **Apply various HTML5 form input types and attributes.**
   * Integrated modern input types: `email`, `number`, `date`, `color`, `range`, and `datalist`.
   * Utilized native validation attributes such as `required`, `placeholder`, `min`, and `max`.

4. **Implement multimedia elements in web pages.**
   * Embedded native media playback using `<audio>` and `<video>` tags with fallbacks and subtitling capabilities via `<track>`.

5. **Understand the Document Object Model (DOM) structure.**
   * **DOM Tree Concept:** The browser parses the HTML into a hierarchical tree structure of nodes (e.g., `window` → `document` → `html` → `body` → `main`).
   * **Element Interaction:** Scripting accesses these nodes via DOM APIs (e.g., `document.getElementById('myCanvas')` used in the canvas section).

6. **Create accessible and SEO-friendly web pages using semantic HTML.**
   * **SEO Benefits:** Search engine crawlers understand semantic roles (`<article>`, `<header>`) far better than generic `<div>` containers.
   * **Accessibility (a11y):** Screen readers use semantic landmark tags and explicit `<label for="...">` associations to navigate pages efficiently for visually impaired users.