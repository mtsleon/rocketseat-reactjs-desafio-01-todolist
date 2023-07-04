
import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';

export default function NewTask() {

    return (
        <div className={styles.newtask}>
            <input type="text" placeholder='Adicione uma nova tarefa'/>
            <button>Criar <PlusCircle size={16} /></button>
        </div>
    )
}