import Ornament from "../../ui/Ornament/Ornament";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>

      <div className={styles.topText}>
        <span>Text Left</span>
        <span>Text Right</span>
      </div>
      <Ornament name="crest-header" className={styles.crest} />

      <hr className="borderMedium" />
      <div className={styles.nav}>
        <div>
          <h1>Raeann Hoelker</h1>
        </div>

        <hr className="borderThin" />

        <nav className={styles.navLinks}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">My Work</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <hr className="borderThick" />
        <Ornament name="medallion" className={styles.medallion} />
      </div>
    </header>
  );
}
