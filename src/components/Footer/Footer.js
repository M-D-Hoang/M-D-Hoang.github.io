import styles from './Footer.module.css';
import linkedin from '../../assets/images/linkedin.svg';
import github from '../../assets/images/github.svg';
import mail from '../../assets/images/envelope-mail.svg';


export function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.mainFooter}>
                <div className={styles.linkContainer}>
                    <a href="https://www.linkedin.com/in/md-hoang/" target='_blank' rel="noreferrer">
                        <img src={linkedin} alt="linkedin"/>
                    </a>
                    <a href="https://github.com/M-D-Hoang" target='_blank' rel="noreferrer ">
                        <img src={github} alt="github"/>
                    </a>
                    <a href='mailto:2003minhduchoang@gmail.com' target='_blank' rel="noreferrer" >
                        <img src={mail} alt="mail"/>
                    </a>
                </div>
            </div>
            <p className={styles.copyright}> Minh Duc Hoang &copy;2024. </p>
        </div>
    );
}