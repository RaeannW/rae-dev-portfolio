import styles from "./PageSheet.module.css";

export default function PageSheet({children}: {children: React.ReactNode}) {
  return (
    <div className={styles.pageSheet}>{children}</div>
  )
}
