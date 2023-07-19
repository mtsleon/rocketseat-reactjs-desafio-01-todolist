import { useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './Main.module.css';

import Logo from '../../assets/Logo.png';
import headerStyles from '../Header/Header.module.css'
import newTaskStyles from '../NewTask/NewTask.module.css';
import TaskItem from '../TaskList/TaskItem';
import EmptyMessage from '../EmptyMessage/EmptyMessage';

export interface Task {
    id: number;
    name: string;
    isDone: boolean;
}
export default function Main() {

    const [tasks, setTasks]: any = useState([
        {
            id: 1,
            name: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            isDone: false,
        },
        {
            id: 2,
            name: "String urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            isDone: false,
        },
        {
            id: 3,
            name: "Boolean urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            isDone: false,
        },
    ]);
    const [textNewTask, setTextNewTask] = useState('');

    function handleAddTask(event: any) {
        event.preventDefault();
        const taskName = event.target.task.value;
        setTasks([...tasks, { id: 1, name: taskName, idDone: false }]);
        setTextNewTask('');
    }

    function handleNewTaskChange(event: any) {
        setTextNewTask(event.target.value);
    }

    return (
        <>
            <header className={headerStyles.header}>
                <img className={headerStyles.logo} src={Logo} alt="Logo todo list" />
                <div className={newTaskStyles.newtask}>
                    <form onSubmit={handleAddTask}>
                        <input
                            type="text"
                            placeholder='Adicione uma nova tarefa'
                            name="task"
                            value={textNewTask}
                            onChange={handleNewTaskChange}
                        />
                        <button type="submit">Criar <PlusCircle size={16} /></button>
                    </form>
                </div>
            </header>

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

            </main>
        </>
    )
}