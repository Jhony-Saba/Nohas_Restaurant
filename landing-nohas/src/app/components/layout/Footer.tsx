"use client";
import "./Footer.module.css";
import { siteConfig } from "@/config/siteConfig";
import {useEffect,useState} from "react" 
export function Footer() {
   const [year,setYear]=useState<string>("");
useEffect(() => {
  const handleDate = async () => {
    setYear(new Date().getFullYear().toString());
  };

  handleDate();
}, []);
  return (
    <footer className="footer">
      <div className="footerContainer">

        {/* Brand */}
        <div className="brand">
          <h2>{siteConfig.brand.name}</h2>
          <p>{siteConfig.brand.slogan}</p>
          <span>{siteConfig.brand.description[0]}</span>
        </div>

        {/* Contact */}
        <div className="contact">
          <h3>{siteConfig.contact.phone.name}</h3>

          <a href={`tel:${siteConfig.contact.phone.number}`}>
            <span>📞</span> Call Us
          </a>

          <a
            href={`https://wa.me/961${siteConfig.contact.whatsApp.number}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>💬</span> {siteConfig.contact.whatsApp.name}
          </a>
        </div>

        {/* Location */}
        <div className="location">
          <h3>Our Location</h3>

          <p>{siteConfig.location.fullAddress}</p>

          <iframe
            src={siteConfig.location.VillagegoogleMaps}
            loading="lazy"
            title="Noha's Kitchen location in Bziza, Koura"
          />

          <a
            href={siteConfig.location.VillagegoogleMaps}
            target="_blank"
            
            
            className="directions"
          >
            {siteConfig.button.Location}
          </a>
        </div>

      </div>


{/* Social Media */}
<div className="socialMedia">
  <h3>Follow Us</h3>

  <p>{siteConfig.brand.description[1]}</p>

  <div className="socialLinks">
    <a
      href={siteConfig.socialMedia.instagram.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Noha's Kitchen on Instagram"
    >
      {siteConfig.socialMedia.instagram.name}
    </a>

    <a
      href={siteConfig.socialMedia.facebook.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Noha's Kitchen on Facebook"
    >
    {siteConfig.socialMedia.facebook.name}
    </a>

    <a
      href={siteConfig.socialMedia.tiktok.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Noha's Kitchen on TikTok"
    >
     {siteConfig.socialMedia.tiktok.name}
    </a>
  </div>
</div>

      {/* Bottom footer */}
      <div className="footerBottom">
        <p>
          © {year} Noha&apos;s Kitchen. All rights reserved.
        </p>
        <p>Made with ❤️ and homemade love.</p>
      </div>
    </footer>
  );
}
