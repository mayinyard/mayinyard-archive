import Navbar from "../../components/Navbar/Navbar";
import "./About.css";
import aboutPhoto from "../../assets/about.jpg";

function About() {
  return (
    <main className="about-page">

      <Navbar />

      <section className="about-content">

        <h1>About</h1>

        <div className="about-intro">

          <div className="about-text">

            <p>
              I am a photographer based in Kaluga, Russia, working primarily
              with documentary and street photography.
            </p>

            <p>
              My work is drawn to the quiet and overlooked elements of
              everyday life — abandoned vehicles, empty spaces, animals,
              objects and traces of people that often pass unnoticed.
            </p>

            <p>
              I am interested in the stories that remain hidden behind
              ordinary things, and in the space between what is documented
              and what is imagined by the viewer.
            </p>

            <div className="about-meta">
              <span>Kaluga, Russia</span>
              <span>Street & Documentary Photography</span>
            </div>

          </div>

          <div className="about-photo">
            <img
              src={aboutPhoto}
              alt="Portrait"
            />
          </div>

        </div>

      </section>

    </main>
  );
}

export default About;