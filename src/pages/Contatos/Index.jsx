import styles from "./Contatos.module.css"
import Icons from "../Icons/Icons";

function Contatos () {
    return (
      <>
         
           <section className={styles.contact}>
           <h1>Contatos</h1>
           <h3>Entre em contato</h3>
           <p>Para que possamos conversar mais sobre.</p>
           <Icons/>
           </section>
       </> 
      
    );
}
 export default Contatos;