import Container from "../utils/Container";
import Link from "next/link";
import styles from "@/styles/Navbar/Navbar.module.scss";
import SearchBar from "./SearchBar";
import Cta from "../utils/Cta";
import {
  TiSocialTumbler,
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialFacebook,
} from "react-icons/ti";
import { IoLogoPinterest, IoLogoLinkedin } from "react-icons/io";

export default function Navbar() {
  const links = [
    { logo: <TiSocialTumbler />, link: "https://www.tumbler.com" },
    { logo: <TiSocialYoutube />, link: "https://www.youtube.com" },
    { logo: <TiSocialTwitter />, link: "https://www.twitter.com" },
    { logo: <IoLogoPinterest />, link: "https://www.pinterest.com" },
    { logo: <IoLogoLinkedin />, link: "https://www.linkedin.com" },
    { logo: <TiSocialFacebook />, link: "https://www.facebook.com" },
  ];

  return (
    <nav className={styles.Nav}>
      <div className={styles.Contact}>
        <Container className={styles.Container}>
          <ul className={styles.Left}>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
          <ul className={styles.right}>
            {links.map((link) => (
              <li key={link.link}>
                <Link href={link.link}>{link.logo}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
      <div className={styles.Main}>
        <Container className={styles.Container}>
          <div className={styles.Logo}>SavorShare</div>
          <ul className={styles.NavLinks}>
            <li>
              <Link href={"/recipes"}>Recipes</Link>
            </li>
            <li>
              <Link href={"/blog"}>Blog</Link>
            </li>
          </ul>
          <SearchBar />
          <Cta className={styles.login}>Login</Cta>
        </Container>
      </div>
    </nav>
  );
}
