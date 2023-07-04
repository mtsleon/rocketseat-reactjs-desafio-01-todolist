
import styles from './TaskList.module.css';
import EmptyMessage from '../EmptyMessage/EmptyMessage';
import TaskItem from './TaskItem';

export default function TaskList() {
    return (
        <div className={styles.taskList}>
            
            {/* <EmptyMessage   /> */}

            <TaskItem />
            <TaskItem />
            <TaskItem />
        </div>
    )
}