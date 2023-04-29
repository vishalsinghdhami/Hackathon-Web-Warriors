import Link from "next/link";
import styles from "@/styles/utils/Cta.module.scss";
export default function Cta({ children, className, onClick }) {
  return (
    <Link href={"/"} onClick={onClick} className={styles.Cta + " " + className}>
      {children}
    </Link>
  );
}
