
import styles from './TaskList.module.css';
import EmptyMessage from '../EmptyMessage/EmptyMessage';
import TaskItem from './TaskItem';
import { Task } from '../Main/Main';

export default function TaskList(tasks: Task[]) {


    return (
        <div className={styles.taskList}>
            {
                (tasks.length !== 0) ?
                    tasks.map(task => {
                        return (
                            <TaskItem
                                key={task.id}
                                id={task.id}
                                name={task.name}
                                isDone={task.isDone}
                            />
                        )
                    })
                    : <EmptyMessage />
            }
        </div>
    )
}