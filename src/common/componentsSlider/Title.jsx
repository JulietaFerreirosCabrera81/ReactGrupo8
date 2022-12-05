import styles from './styles/Title.module.css';

export const Title = ({ text }) => {
  return (
    <h1 className={styles ["titulo"]}>
      {text }      
    </h1>
  );
};

