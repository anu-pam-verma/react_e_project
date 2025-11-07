
function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        Have questions or need help? Fill out the form below and our team will get in touch with you soon.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p><strong>Email:</strong> support@styleease.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> Delhi, India</p>
      </div>
    </div>
  );
}

export default Contact;
