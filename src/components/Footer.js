import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.newsletter}>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.subscribe}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.contact}>
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <div className={styles.currency}>
            <h3>CURRENCY</h3>
            <div className={styles.usd}>
              <span>🇺🇸</span> USD
            </div>
            <p className={styles.smallText}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <div className={styles.column}>
          <h3>mettā muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliance Docs</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Refunds</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3>FOLLOW US</h3>
          <div className={styles.socialIcons}>
            <span>📸</span> <span>🔗</span>
          </div>
          <div className={styles.paymentMethods}>
            <h3>mettā muse ACCEPTS</h3>
            <div className={styles.cards}>
              <span>💳 GPay</span>
              <span>💳 Apple Pay</span>
              <span>💳 PayPal</span>
              <span>💳 Amex</span>
              <span>💳 Visa</span>
              <span>💳 Mastercard</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
