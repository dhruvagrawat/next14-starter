import styles  from './home.module.css';
import Image from "next/image";

const Home = () => {
  return (

  <div className={styles.mainpage}>
    <div className={styles.hero}>
      <h1 className={styles.heading}>helllo this is the amintitle </h1>
      <br></br>
      <p classname={styles.subheading}>hello trhis is a test page description hehre</p>
      <br></br>
      <div className={styles.buttongrid}>
        <button className={styles.button}>lEARN MORE</button>
        <button className={styles.button} src="https://www.google.com">CONTATC US</button>
      </div>
    </div>
    <div classname={styles.imageleft}>
      <Image src="/ezgif-4-b04a1f6dc0.png" width={600} height={600}></Image>
    </div>
    
  </div>
  
  );
};

export default Home;