import styles from "./Icons.module.css";
import { GoMail } from 'react-icons/go'; 
import { BsInstagram, BsGithub, } from 'react-icons/bs'; 
 
 function Icons () {
    return (
        <div className={styles.icones}>

        <a href="mailto:wagner87.dev@gmail.com" target="blank" rel="noopener noreferrer">
        <GoMail className={styles.icone}/></a>

        <a href="https://www.instagram.com/wagnerluisfonseca" target="blank" rel="noopener noreferrer">
        <BsInstagram className={styles.icone}/></a>

        <a href="https://www.github.com/wagner0212" target="blank" rel="noopener noreferrer">
        <BsGithub className={styles.icone}/></a>
        
       </div>
    );
 }

 export default Icons;