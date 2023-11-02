import styles from './Sobre.module.css';
import avatar from './images/avatar.jpg';
import html from './images/icon-html.svg';
import css from './images/icon-css.svg';
import js from './images/icon-js.svg';
import react from './images/icon-react.svg';


function Sobre () {
    return (
     <section className={styles.sobre}>

        <div className={styles.bio}>
          <img src={avatar} alt={avatar} className={styles.avatar}/>
             <div className={styles.textos}>
                <h2>Sobre</h2> <br/>
                <p>Sou <span>Wagner Fonseca</span><br/>
                 <strong>Dev Full Stack</strong></p> 
                <p>Estudante de programação</p>
             </div>
        </div>
     <div className={styles.techs}>
           <h3>Techs</h3>
          <div className={styles.icones}>
          <img src={html} alt="ícone do html" />
           <img src={css} alt="ícone do css" />
           <img src={js} alt="ícone do js" />
           <img src={react} alt="ícone do react" />
          </div>
         </div>
        </section>
    )
}
 export default Sobre;