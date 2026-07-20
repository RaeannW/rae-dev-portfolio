import styles from "./Hero.module.css";
import Ornament from "../../ui/Ornament/Ornament";
import Button from "../../ui/Button/Button";

export default function Hero() {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.column}>
        <h1>Hi, Im Raeann</h1>
        <h2>Software Engineer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
          faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
          pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
          tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
          hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
          per conubia nostra inceptos himenaeos.
        </p>
        <div className={styles.connect}>
          <hr className="borderThin" />
          <ul className={styles.contactList}>
            <li>
              <span className={styles.icon} />
              Location: Greater St. Louis, MO
            </li>
            <li>
              <span className={styles.icon} />
              Email: raeann@example.com
            </li>
            <li>
              <span className={styles.icon} />
              GitHub: github.com/raeann
            </li>
            <li>
              <span className={styles.icon} />
              LinkedIn: (123) 456-7890
            </li>
          </ul>
          <hr className="borderThin" />
        </div>
        <div className={styles.buttonContainer}>
        <Button variant="dark" className={styles.button}>
          Get in Touch
        </Button>
        <Button variant="dark" className={styles.button}>
          Download Resume
        </Button>
        </div>
      </div>
      <div className={styles.column}>
        <Ornament name="image-frame" className={styles.imageFrame} />
      </div>
    </div>
  );
}
