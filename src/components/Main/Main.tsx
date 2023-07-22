import { useInsertionEffect, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import styles from './Main.module.css';

import Logo from '../../assets/Logo.png';
import headerStyles from '../Header/Header.module.css'
import newTaskStyles from '../NewTask/NewTask.module.css';
import TaskItem from '../TaskList/TaskItem';
import EmptyMessage from '../EmptyMessage/EmptyMessage';

export default function Main() {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            state: 'default'
        },
        {
            id: 2,
            name: "String urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            state: 'default'
        },
        {
            id: 3,
            name: "Boolean urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            state: 'default'
        },
    ]);
    const [textNewTask, setTextNewTask] = useState('');
    const [error, setError] = useState({
        hasError: false,
        message: ''
    });

    function handleAddTask(event: any) {
        event.preventDefault();
        const taskName = event.target.task.value;
        if (taskName === '') {
            setError({
                hasError: true,
                message: 'Oops :( Você ainda não escreveu o nome da tarefa.'
            });
            event.target.task.focus();
            return;
        }

        setTasks([...tasks, { id: getTotalCreated() + 1, name: taskName, state: 'default' }]);
        setTextNewTask('');


    }

    function handleNewTaskChange(event: any) {
        setTextNewTask(event.target.value);

        if (event.target.value) {
            setError({
                hasError: false,
                message: ''
            })
        }
    }

    function handleDeleteTask(id: number) {
        const deleted = tasks.filter((item: any) => item.id != id);
        setTasks(deleted);

        setError({
            hasError: false,
            message: ''
        })
    }

    function getTotalCreated() {
        return tasks.length;
    }    

    function handleChangeState(id: number) {
        const updatedTask = tasks.filter(task => {
            if (task.id === id) {
                task.state = (task.state === 'done') ? 'default' : 'done';
            }
            return task;
        });

        setTasks(updatedTask);
    }

    function getTotalDones() {
        let dones:any[] = tasks.filter(task => task.state === 'done');
        return dones.length;
    }

    return (
        <>
            <header className={headerStyles.header}>
                <img className={headerStyles.logo} src={Logo} alt="Logo todo list" />
                <div className={newTaskStyles.newtask}>
                    <form onSubmit={handleAddTask}>
                        <input
                            type="text"
                            placeholder={(error.hasError) ? error.message : 'Adicione uma nova tarefa'}
                            name="task"
                            value={textNewTask}
                            onChange={handleNewTaskChange}
                            className={
                                (error.hasError) ? newTaskStyles.inputError : ''
                            }
                        />
                        <button type="submit">Criar <PlusCircle size={16} /></button>
                    </form>

                </div>
            </header>

            <main className={styles.main}>

                <div className={styles.indicatorsBar}>
                    <div className={styles.indicator}>
                        <label>Tarefas criadas</label>
                        <span>{getTotalCreated()}</span>
                    </div>
                    <div className={styles.indicator}>
                        <label>Concluídas</label>
                        <span>{getTotalDones()} de {getTotalCreated()}</span>
                    </div>
                </div>

                <div className={styles.taskList}>
                    {
                        (getTotalCreated() !== 0) ?
                            tasks.map(task => {
                                return (
                                    <TaskItem
                                        key={task.id}
                                        id={task.id}
                                        name={task.name}
                                        state={task.state === 'default' ? 'default' : 'done'}
                                        onDeleteTask={() => handleDeleteTask(task.id)}
                                        onChangeState={() => handleChangeState(task.id)}
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