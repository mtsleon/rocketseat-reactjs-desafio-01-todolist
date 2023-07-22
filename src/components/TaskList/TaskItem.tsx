
import styles from './TaskItem.module.css';
import Trash from '../../assets/trash.svg';
import { Check } from 'phosphor-react';

interface TaskItemProps {
    id: number;
    name: string;
    state: 'default' | 'done';
    onDeleteTask: (taskItemId: number) => void;
    onChangeState: (taskItemId: number) => void;
}

export default function TaskItem({ id, name, state, onDeleteTask, onChangeState }: TaskItemProps) {
    return (
        <div className={styles.taskItem} key={id}>
            <button
                className={state === 'done' ? styles.checkboxDone : styles.checkboxDefault}
                onClick={() => { onChangeState(id) }}>
                {state === 'done' ? <Check size={15} className={styles.checkDoneIcon} /> : ''}
            </button>
            <a href="#"
                className={state === 'done' ? styles.titleDone : styles.title}
                onClick={() => { onChangeState(id) }}>
                {name}
            </a>
            <div><img src={Trash} className={styles.trashIcon} onClick={() => onDeleteTask(id)} /></div>
        </div>
    )
}