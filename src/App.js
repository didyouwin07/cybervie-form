import Header from './components/Header';
import FormPage from './pages/FormPage';
import styles from './styles/appStyles.module.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <FormPage />
    </div>
  );
}

export default App;
