import Ornament from "../Ornament/Ornament";
import styles from "./Frame.module.css";

type Props = {
  corner: "large-corner" | "small-corner";
  className?: string;
  children: React.ReactNode;
};

export default function Frame({ corner, className, children }: Props) {
  return (
    <div className={`${styles.frame} ${className ?? ""}`}>
      <Ornament name={corner} className={styles.tl} />
      <Ornament name={corner} className={styles.tr} />
      <Ornament name={corner} className={styles.bl} />
      <Ornament name={corner} className={styles.br} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}