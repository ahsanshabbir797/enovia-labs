import styles from "./Projects.module.css";
import { ourProjects } from "../../data.json";

const Projects = () => {
  const projects = ourProjects;

  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.heading}>Our Featured Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.liveLink}
              >
                View Live Site
              </a>
            </div>
          </div>
        ))}
      </div>
      <section className={styles.designersSection}>
        <h3 className={styles.sectionTitle}>Like the Design?</h3>
        <p className={styles.sectionText}>
          This site was carefully crafted and brought to life by our amazing
          team of talented designers and developers. From concept to code, we
          make sure everything looks perfect!
        </p>
        <p className={styles.sectionText}>
          Interested in collaborating with us? Let's create something awesome
          together!
        </p>
      </section>
    </section>
  );
};
export default Projects;
