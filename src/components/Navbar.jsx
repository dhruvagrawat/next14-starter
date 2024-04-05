import Links from "/home/anto/code/projects/next14-starter/src/components/navbar/links/Links.jsx"
import styles from "/home/anto/code/projects/next14-starter/src/components/Navbar.module.css"

const Navbar = () => {
    return (

    <div className={styles.container}>
        <div src="/favicon.ico">hello</div>
        <div className= {styles.logo}>Logo</div>
        <div>
            <Links/>
        </div>
    </div>
    
    )
  }
  
  export default Navbar