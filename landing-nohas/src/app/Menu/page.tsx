"use client";

import { useEffect, useState } from "react";
import { MenuData } from "./MenuData";
import  "./page.module.css";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(MenuData[0]?.slug ?? "");
  // Function responsible for detecting which category
  // is currently visible while the user scrolls.
  useEffect(() => {
    const updateActiveCategory = () => {

       // Define the activation position (190px from the top
    // of the browser viewport).
      const activeOffset = 190;
         // Set the first category as the default active category.
        // ?. prevents errors if MenuData[0] doesn't exist.
      // ?? "" provides an empty string if slug is undefined.
      let currentCategory = MenuData[0]?.slug ?? "";

     // Loop through all categories in MenuData.
      for (const category of MenuData) {
         // Find the HTML section whose ID matches the category slug.
      // Example: id="appetizers".
        const section = document.getElementById(category.slug);
         // Check two conditions:
      // 1. The section exists in the HTML document.
      // 2. Its top position is less than or equal to 190px.
        if (section && section.getBoundingClientRect().top <= activeOffset) {
          // If both conditions are true, make this category active.
        // The loop continues, allowing the latest qualifying
        // category to replace the previous one.
          currentCategory = category.slug;
          
        }
      }
    // Check if the user has reached the bottom of the page.
    // innerHeight = visible browser height.
    // scrollY = current vertical scroll position.
    // scrollHeight = total document height.
    // -2 allows a small tolerance of 2 pixels.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
         // If the user reaches the bottom, activate the last category.
        currentCategory = MenuData[MenuData.length - 1]?.slug ?? currentCategory;
      }
       // Update React state with the currently active category.
    // React re-renders the UI if the state changes.
      setActiveCategory(currentCategory);
    };

      // Execute the function immediately when the component mounts.
  // This detects the active category without waiting for scrolling.
    updateActiveCategory();
     // Listen for browser scrolling.
  // Every time the user scrolls, execute updateActiveCategory.
  // passive: true helps the browser optimize scrolling performance.
    window.addEventListener("scroll", updateActiveCategory, { passive: true });
      // Listen for browser resizing.
  // Recalculate the active category when the viewport changes size.
    window.addEventListener("resize", updateActiveCategory);
 // Cleanup function:
  // Remove both event listeners when the component unmounts.
  // This prevents unnecessary event listeners and memory leaks.
    return () => {
          // Stop listening for scroll events.
      window.removeEventListener("scroll", updateActiveCategory);
          // Stop listening for resize events.
      window.removeEventListener("resize", updateActiveCategory);
      // Empty dependency array means this effect runs once on mount
// and its cleanup runs when the component unmounts.
    };
  }, []);

  return (
    <main className="menuPage ">
      <header className="hero">
        <p className="eyebrow">Made with care, shared with love</p>
        <h1>Our Menu</h1>
        <p className="heroDescription">
          Discover the comforting flavors of homemade Lebanese cooking.
        </p>
      </header>

      <nav className="categoryNav" aria-label="Menu categories">
        <div className="categoryNavInner">
          {MenuData.map((category) => (
            <a
            key={category.id}
className={`categoryLink ${
  activeCategory === category.slug
    ? "categoryLinkActive"
    : ""
}`}
              href={`#${category.slug}`}
              aria-current={activeCategory === category.slug ? "location" : undefined}
            >
              {category.name}
            </a>
          ))}
        </div>
      </nav>

      <div className="menuContent">
        {MenuData.map((category) => (
          <section
            className="categorySection"
            key={category.id}
            id={category.slug}
            aria-labelledby={`${category.slug}-heading`}
          >
            <div className="sectionHeading">
              <p className="sectionEyebrow">From our kitchen</p>
              <h2 id={`${category.slug}-heading`}>{category.name}</h2>
              <p className="categoryDescription">{category.description}</p>
            </div>

            <div className="menuGrid">
              {category.products.map((product) => (
                <article className="menuCard" key={product.id}>
                  <div className="productHeading">
                    <h3>{product.name}</h3>
                    <span className="productUnit">/{product.unit}</span>
                  </div>
                  <p className="productDescription">{product.description}</p>
                  <div className="productDetails">
                    <span>{product.storage}</span>
                    <span>{product.preparation.replaceAll("-", " ")}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
