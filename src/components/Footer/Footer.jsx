import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
    return (
      <div className={styles.main}>
        <div className={styles.grid}>
          <div>
            <Image src="/EDUCYDLEPNG.png" width={100} height={100}  alt="" fit />
          </div>
          <div>
            <h1>Footer</h1>
            <br></br>
            <p>Footer content</p>
          </div>
          <div>
            <h2>Footer Links</h2>
            <br></br>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </div>
          <div>
            <h3>Footer Contact</h3>
            <br></br>
            <p>Address: 1234 Street Name, City Name</p>
            <p>Phone: 123-456-7890</p>
            <p>Email:</p>
          </div>
          <div>
            <h4>Footer Social</h4>
            <br></br>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;