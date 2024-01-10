import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About",
  description: "About page description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Baekhak</h2>
        <h1 className={styles.title}>
          I am a web alchemist, crafting digital experiences.
        </h1>
        <p className={styles.desc}>
          Specializing in web development, I am a digital architect dedicated to
          sculpting immersive online spaces. With a mastery of front-end and
          back-end technologies, I meticulously craft websites that not only
          captivate visually but also function seamlessly, ensuring a dynamic
          and user-centric experience.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>3</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>2</h1>
            <p>Type of Framwork</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
