import Link from "next/link";
import styles from "@/styles/utils/Cta.module.scss";
export default function Cta({ children, className }) {
  return (
    <Link href={"/"} className={styles.Cta + " " + className}>
      {children}
    </Link>
  );
}
