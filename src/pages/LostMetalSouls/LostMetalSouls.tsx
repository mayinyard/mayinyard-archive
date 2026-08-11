import "./LostMetalSouls.css";

import Navbar from "../../components/Navbar/Navbar";
import ProjectInfo from "./ProjectInfo";
import ProjectViewer from "../../components/ProjectViewer/ProjectViewer";

import { LMS } from "../../data/projects/lost_metal_souls";

function LostMetalSouls() {
  return (
    <main className="project-page">

      <Navbar />

      <section className="project-intro">
        <ProjectInfo />
      </section>

      <section className="project-gallery">
        <ProjectViewer photos={LMS} />
      </section>

    </main>
  );
}

export default LostMetalSouls;