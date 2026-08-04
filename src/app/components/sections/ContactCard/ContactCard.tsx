import styles from "./ContactCard.module.css";
import Ornament from "../../ui/Ornament/Ornament";

export default function ContactCard() {
  return (
    <section id="contact">
      <hr className="borderMedium" />

      <div className={styles.card}>
        <Ornament name="large-corner" className={styles.tl} />
        <Ornament name="large-corner" className={styles.tr} />
        <Ornament name="large-corner" className={styles.bl} />
        <Ornament name="large-corner" className={styles.br} />

        <div className={styles.content}>
          <h3 className={styles.title}>{`Send Me a Message`}</h3>
        </div>

        <div className={styles.columns}>
          <div className={styles.textCol}>
            <h4 className={styles.colTitle}>Text Column</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis.
            </p>
          </div>
          <div className={styles.divider} aria-hidden="true" />
          <div className={styles.textCol}>
            <h4 className={styles.colTitle}>Text Column</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. 
            </p>
          </div>
        </div>
      </div>

      <hr className="borderMedium" />
    </section>
  );
}
