
import styles from './EmptyMessage.module.css';
import EmptyList from '../../assets/emptylist.png';

export default function EmptyMessage() {
    return (
        <div className={styles.emptyMessage}>
            <img src={EmptyList} alt="" />
            <div className={styles.messageBox}>
                <div className={styles.emptyListMessageTitle}>Você ainda não tem tarefas cadastradas</div>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
        </div>
    )
}