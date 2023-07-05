
import styles from './TaskItem.module.css';
import Trash from '../../assets/trash.svg';
import { Check } from 'phosphor-react';

type TaskItemProps = {
    title: string;
    isDone: boolean;
}
export default function TaskItem(props: TaskItemProps) {
    return (
        <div className={styles.taskItem}>
            <div className={props.isDone ? styles.checkboxDone : styles.checkboxDefault}>
                {props.isDone ? <Check size={15} className={styles.checkDoneIcon} /> : ''}
            </div>
            <span className={props.isDone ? styles.titleDone : styles.title}>
                {props.title}
            </span>
            <div><img src={Trash} className={styles.trashIcon} /></div>
        </div>
    )
}