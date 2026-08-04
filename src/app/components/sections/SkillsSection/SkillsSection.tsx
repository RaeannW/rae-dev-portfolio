import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
  return (
    <div className={styles.flexContainer}>

      <div className={styles.sectionTitle}>
        <h3><span className={styles.sectionIcon}>◆</span> Skills Section <span className={styles.sectionIcon}>◆</span></h3>
      </div>

      <div className={styles.flexSections}>

      <div className={styles.sectionContent}>
        <h4>Section</h4>
        <ul>
          <li>Skill 1</li>
          <li>Skill 1</li>
          <li>Skill 1</li>
        </ul>
      </div>

      <div className={styles.sectionContent}>
        <h4>Section</h4>
        <ul>
          <li>Skill 1</li>
          <li>Skill 1</li>
          <li>Skill 1</li>
        </ul>
      </div>

      <div className={styles.sectionContent}>
        <h4>Section</h4>
        <ul>
          <li>Skill 1</li>
          <li>Skill 1</li>
          <li>Skill 1</li>
        </ul>
      </div>
      </div>

    </div>
  );
}
