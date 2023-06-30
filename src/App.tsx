
import styles from './App.module.css';
import Header from './components/Header/Header';

function App() {

  return (
    <>

      <Header />

      <main className={styles.main}>

        <div className={styles.bar}>

          <div>
            <span>Tarefas criadas</span>
            <span>0</span>
          </div>

          <div>
            <span>Concluídas</span>
            <span>0</span>
          </div>

        </div>

        <div className={styles.taskList}>

        </div>

      </main>

    </>
  )
}

export default App
