
import styles from './TaskItem.module.css';
import Trash from '../../assets/trash.svg';
import { Check } from 'phosphor-react';

interface TaskItemProps {
    id: number;
    name: string;
    isDone: boolean;
    delete: (id:number) => void;
}
export default function TaskItem(props: TaskItemProps) {
    return (
        <div className={styles.taskItem} key={props.id}>
            <div className={props.isDone ? styles.checkboxDone : styles.checkboxDefault}>
                {props.isDone ? <Check size={15} className={styles.checkDoneIcon} /> : ''}
            </div>
            <div className={props.isDone ? styles.titleDone : styles.title}>
                {props.name}
            </div>
            <div><img src={Trash} className={styles.trashIcon} onClick={() => props.delete(props.id)} /></div>
        </div>
    )
}