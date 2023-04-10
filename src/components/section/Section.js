import styles from './styles.module.css'

const Section = () => {

    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Notes</h1>
            <form className={styles.form}>
                <p>Or log in using an email and password, after registering:</p>
                <div>
                    <label>Email:</label>
                    <input placeholder='your@email.com' type='email'/>
                </div>
                <div>
                    <label>Password:</label>
                    <input placeholder='password' type='password'/>
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