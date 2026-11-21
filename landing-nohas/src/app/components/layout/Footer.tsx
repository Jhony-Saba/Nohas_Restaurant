"use client";
import "./Footer.module.css";
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
          <h2>Noha&apos;s Kitchen</h2>
          <p>HOMEMADE WITH LOVE</p>
          <span>Fresh homemade dishes, prepared with love.</span>
        </div>

        {/* Contact */}
        <div className="contact">
          <h3>Contact Us</h3>

          <a href="tel:+961XXXXXXXX">
            <span>📞</span> Call Us
          </a>

          <a
            href="https://wa.me/961XXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>💬</span> WhatsApp Orders
          </a>
        </div>

        {/* Location */}
        <div className="location">
          <h3>Our Location</h3>

          <p>Bziza, Koura, North Lebanon</p>

          <iframe
            src="https://maps.google.com/maps?q=Bziza%2C%20Koura%2C%20Lebanon&t=&z=13&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            title="Noha's Kitchen location in Bziza, Koura"
          />

          <a
            href="https://www.google.com/maps/search/?api=1&query=Bziza%2C+Koura%2C+Lebanon"
            target="_blank"
            rel="noopener noreferrer"
            className="directions"
          >
            Get Directions →
          </a>
        </div>

      </div>


{/* Social Media */}
<div className="socialMedia">
  <h3>Follow Us</h3>

  <p>Discover our homemade dishes and latest offers.</p>

  <div className="socialLinks">
    <a
      href="https://www.instagram.com/noha.skitchen"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Noha's Kitchen on Instagram"
    >
      Instagram
    </a>

    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Noha's Kitchen on Facebook"
    >
      Facebook
    </a>

    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Noha's Kitchen on TikTok"
    >
      TikTok
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
