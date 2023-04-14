import styles from './styles.module.css'
import {useState} from "react";

const Section = () => {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    console.log(login);

    const handleLogin = (e) => {
        setLogin({...login, [e.target.type]: e.target.value})
    }


    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Notes</h1>
            <form className={styles.form}>
                <p>Or log in using an email and password, after registering:</p>
                <div>
                    <label>Email:</label>
                    <input onChange={handleLogin} placeholder='your@email.com' type='email'/>
                </div>
                <div>
                    <label>Password:</label>
                    <input onChange={handleLogin} placeholder='password' type='password'/>
                </div>
                <div className={styles.groupButton}>
                    <button type='submit'>Log in</button>
                    <button type='submit'>Registration</button>
                </div>
            </form>
        </section>
    )

}

export default Section;