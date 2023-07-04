import TaskList from '../TaskList/TaskList';
import styles from './Main.module.css';

export default function Main() {
    return (
        <main className={styles.main}>

            <div className={styles.indicatorsBar}>
                <div className={styles.indicator}>
                    <label>Tarefas criadas</label>
                    <span>0</span>
                </div>
                <div className={styles.indicator}>
                    <label>Concluídas</label>
                    <span>2 de 5</span>
                </div>
            </div>

            <TaskList />

        </main>
    )
}