"use client";

import { useEffect, useState } from "react";
import { MenuData } from "./MenuData";
import styles from "./page.module.css";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(MenuData[0]?.slug ?? "");

  useEffect(() => {
    const updateActiveCategory = () => {
      const activeOffset = 190;
      let currentCategory = MenuData[0]?.slug ?? "";

      for (const category of MenuData) {
        const section = document.getElementById(category.slug);
        if (section && section.getBoundingClientRect().top <= activeOffset) {
          currentCategory = category.slug;
        }
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
        currentCategory = MenuData[MenuData.length - 1]?.slug ?? currentCategory;
      }

      setActiveCategory(currentCategory);
    };

    updateActiveCategory();
    window.addEventListener("scroll", updateActiveCategory, { passive: true });
    window.addEventListener("resize", updateActiveCategory);

    return () => {
      window.removeEventListener("scroll", updateActiveCategory);
      window.removeEventListener("resize", updateActiveCategory);
    };
  }, []);

  return (
    <main className={styles.menuPage}>
      <header className={styles.hero}>
        <p className={styles.eyebrow}>Made with care, shared with love</p>
        <h1>Our Menu</h1>
        <p className={styles.heroDescription}>
          Discover the comforting flavors of homemade Lebanese cooking.
        </p>
      </header>

      <nav className={styles.categoryNav} aria-label="Menu categories">
        <div className={styles.categoryNavInner}>
          {MenuData.map((category) => (
            <a
              key={category.id}
              className={`${styles.categoryLink} ${
                activeCategory === category.slug ? styles.categoryLinkActive : ""
              }`}
              href={`#${category.slug}`}
              aria-current={activeCategory === category.slug ? "location" : undefined}
            >
              {category.name}
            </a>
          ))}
        </div>
      </nav>

      <div className={styles.menuContent}>
        {MenuData.map((category) => (
          <section
            className={styles.categorySection}
            key={category.id}
            id={category.slug}
            aria-labelledby={`${category.slug}-heading`}
          >
            <div className={styles.sectionHeading}>
              <p className={styles.sectionEyebrow}>From our kitchen</p>
              <h2 id={`${category.slug}-heading`}>{category.name}</h2>
              <p className={styles.categoryDescription}>{category.description}</p>
            </div>

            <div className={styles.menuGrid}>
              {category.products.map((product) => (
                <article className={styles.menuCard} key={product.id}>
                  <div className={styles.productHeading}>
                    <h3>{product.name}</h3>
                    <span className={styles.productUnit}>/{product.unit}</span>
                  </div>
                  <p className={styles.productDescription}>{product.description}</p>
                  <div className={styles.productDetails}>
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
