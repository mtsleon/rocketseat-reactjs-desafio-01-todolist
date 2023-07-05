
import styles from './TaskList.module.css';
import EmptyMessage from '../EmptyMessage/EmptyMessage';
import TaskItem from './TaskItem';

export default function TaskList() {
    const tasks = [
        {
            id: 1,
            title: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            isDone: false,
        },
        {
            id: 2,
            title: "String urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            isDone: true,
        },
        {
            id: 3,
            title: "Boolean urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            isDone: true,
        },
    ]
    return (
        <div className={styles.taskList}>
            {
                (tasks.length !== 0) ?
                    tasks.map(task => {
                        return (
                            <TaskItem
                                key={task.id}
                                title={task.title}
                                isDone={task.isDone}
                            />
                        )
                    })
                    : <EmptyMessage />
            }
        </div>
    )
}