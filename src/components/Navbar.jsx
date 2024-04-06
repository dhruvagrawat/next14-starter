import Links from "/home/anto/code/projects/next14-starter/src/components/navbar/links/Links.jsx"
import styles from "/home/anto/code/projects/next14-starter/src/components/Navbar.module.css"
import Image from "next/image";
const Navbar = () => {
    return (

    <div className={styles.mainmain}>
        <div className={styles.container}>
            <div>
                <Image src="/favicon.ico" width={40} height={40}></Image>
            </div>
            <div>
                <Links/>
            </div>
        </div>
    </div>
    
    )
  }
  
  export default Navbar