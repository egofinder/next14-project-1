import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>egofinder</div>
      <div className={styles.text}>
        egofinder web development © All rights reserved.
      </div>
    </div>
  );
};
export default Footer;
