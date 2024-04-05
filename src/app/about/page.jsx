import Image from "next/image";
import styles from "./about.module.css";

const About = () => {
  return (
  <div>
    <div className={styles.imgContainer}>
      <Image src="https://tosk.com/wp-content/uploads/2022/09/img-home.jpg" alt="" fill />
    </div>
  </div>

  
  );
};
  
  export default About;