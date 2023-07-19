
import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';

export default function NewTask() {

    function handleAddTask(event: any) {
        event.preventDefault();
        const task = (event.target.task.value);
        console.log(task);
    }

    return (
        <div className={styles.newtask}>
            <form action="" onSubmit={handleAddTask}>
                <input type="text" placeholder='Adicione uma nova tarefa' name="task"/>
                <button type="submit">Criar <PlusCircle size={16} /></button>
            </form>
        </div>
    )
}