import Image from "next/image";
import styles from "./ProjectSection.module.css";
import Button from "../../ui/Button/Button";
import Ornament from "../../ui/Ornament/Ornament";

export default function ProjectSection() {
  return (
    <div>
      <hr className="borderMedium" />
      <div className={styles.flexContainer}>
        <div className={styles.sideColumn}>
          <div className={styles.imageWrap}>
            <div
              className={`${styles.maskImage} ${styles.reading}`}
              role="img"
              aria-label="Reading illustration"
            />
          </div>
          <Ornament
            name="decorative-divider"
            className={styles.imageOrnament}
          />
          <h3>Holiday Website</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          </p>
          <Button variant="dark" className={styles.button}>
            Visit Website
          </Button>
        </div>

        <div className={styles.centerColumn}>
          <Ornament name="small-corner" className={styles.cornerTL} />
          <Ornament name="small-corner" className={styles.cornerTR} />
          <Ornament name="small-corner" className={styles.cornerBL} />
          <Ornament name="small-corner" className={styles.cornerBR} />

          <h3>Project List</h3>
          <p>Lorem ipsum dolor sit amet…</p>
          <Button variant="light" className={styles.button}>
            Visit GitHub
          </Button>
        </div>

        <div className={styles.sideColumn}>
          <div className={styles.imageWrap}>
            <div
              className={`${styles.maskImage} ${styles.writing}`}
              role="img"
              aria-label="Writing illustration"
            />
          </div>
          <Ornament
            name="decorative-divider"
            className={styles.imageOrnament}
          />
          <h3>Design Work</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
          </p>
          <Button variant="dark" className={styles.button}>
            Visit Design Portfolio
          </Button>
        </div>
      </div>
      <hr className="borderMedium" />
    </div>
  );
}
