// Import icons.
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function ToDoIntro() {
  return (
    <div className="text-center">
      <h1 className="mt-3">To-Do NextJs</h1>
      <p>
        To-Do NextJs es una aplicación web diseñada con el objetivo de crear una
        lista de tareas sencilla que permita realizar operaciones CRUD y
        almacenar los datos localmente en el navegador. Para su desarrollo se
        utilizaron tecnologías como Next.js, y Bootstrap 5.
      </p>
      <hr></hr>
      <div className="d-flex justify-content-around align-items-center mb-4">
        <a href="https://github.com/MatiOrtegga">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/matias-ortega-5647b018a/">
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a href="/">
          <FontAwesomeIcon icon={faBriefcase} className="icon" />
        </a>
      </div>
      <div className="d-flex justify-content-around align-items-center icon-name">
        <p>GitHub</p>
        <p>Linkedin</p>
        <p>Portfolio</p>
      </div>
    </div>
  );
}

export default ToDoIntro;
