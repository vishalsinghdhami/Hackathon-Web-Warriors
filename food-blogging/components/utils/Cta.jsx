import styles from "@/styles/utils/Cta.module.scss";
export default function Cta({ children, className, onClick }) {
  return (
    <button onClick={onClick} className={styles.Cta + " " + className}>
      {children}
    </button>
  );
}
