import Link from "next/link";
import styles from "./home.module.css";
import Image from "next/image";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Create Next.js Website Study</h1>
        <p className={styles.desc}>
          Navigate through the site to discover my journey, skills, and
          expertise. Gain insights into the technologies utilized, methodologies
          employed, and the problem-solving approach taken in the site. Stay
          tuned for updates on the latest projects, blog posts, and my ongoing
          exploration of emerging technologies.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <Link href="/contact" className={styles.contactButton}>
            Contact
          </Link>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
