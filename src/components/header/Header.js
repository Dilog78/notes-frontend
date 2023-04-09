import styles from './styles.module.css'

const Header = () => {
    const checkBoxStyle = styles.slider + ' ' + styles.round;

    return (
        <header className={styles.header}>
            <a className={styles.link} href='/'>Notes</a>
            <label className={styles.switch}>
                <input type="checkbox" defaultChecked={true}/>
                    <span className={checkBoxStyle}></span>
            </label>
            <div className={styles.buttonContainer}>
                <button className={styles.butLangUkr} type='button'/>
                <button className={styles.butLangEng} type='button'/>
            </div>
        </header>
    )
}

export default Header;