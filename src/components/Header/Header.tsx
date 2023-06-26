
import NewTask from '../NewTask/NewTask';
import Logo from '../../assets/Logo.png';

import styles from './Header.module.css';

export default function Header() {

    return (
        <header className={styles.header}>
            <img className={styles.logo} src={Logo} alt="Logo todo list" />
            
            <NewTask />
        </header>
    )
}