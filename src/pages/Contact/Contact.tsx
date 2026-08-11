import Navbar from "../../components/Navbar/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">

      <Navbar />

      <section className="contact-content">

        <h1>Contact</h1>

        <p className="contact-intro">
          For exhibitions, publications, collaborations, commissions,
          or other inquiries, feel free to get in touch.
        </p>

        <div className="contact-links">

          <a href="mailto:mayinyard@yahoo.com">
            Email
          </a>

          <a
            href="https://www.instagram.com/_mayinyard/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

           <a
            href="https://t.me/mayinyard_writes"
            target="_blank"
            rel="noreferrer"
          >
            Telegram Channel
          </a>

        </div>

      </section>

    </main>
  );
}

export default Contact;