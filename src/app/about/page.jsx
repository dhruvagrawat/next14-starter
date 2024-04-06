import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
  <div className={styles.mainimg}>
    <div className={styles.imgContainer}>
      <Image className={styles.image} src="https://tosk.com/wp-content/uploads/2022/09/img-home.jpg" alt="" fill />
    </div>
    <div className={styles.text}>
      <h1 className={styles.heading}>About Us</h1>
      <p className={styles.subheading}>We are ae </p>
    </div>
  </div>

  
  );
};
  
  export default About;