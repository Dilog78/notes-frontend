import styles from './styles.module.css'
import AuthPage from "../AuthPage";
import {useState} from "react";

const Section = () => {
    const [isAuth, setAuth] = useState(false);

    console.log(isAuth)

    return (
        <section className={styles.section}>
            {isAuth ? <div>HOME</div> : <AuthPage setAuth={setAuth}/>}
        </section>
    )
}

export default Section;