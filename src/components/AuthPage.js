import styles from "./section/styles.module.css";
import {useState} from "react";

const AuthPage = ({setAuth}) => {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    const [user, setUser] = useState({});

    const handleLogin = (e) => {
        setLogin({...login, [e.target.type]: e.target.value})
    }

    console.log(user)

    const auth = async (login, event) => {
        event.preventDefault();
        await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify(login),
            headers: {'Content-Type': 'application/json'},
            mode: 'cors',
        })
            .then(res => res.json())
            .then(result => {
                if (result?.token) {
                    setAuth(true);
                    setUser(result);
                } else {
                    setAuth(false);
                    setUser({});
                }
            })
            .catch(err => console.log(err))

    }


    return <>
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
                <button type='submit' onClick={(event) => auth(login, event)}>Log in</button>
                <button type='submit'>Registration</button>
            </div>
        </form>
    </>
}

export default AuthPage;