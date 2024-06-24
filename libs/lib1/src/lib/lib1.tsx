import styles from './lib1.module.css';

export function Lib1() {
  return (
    <div className={styles['container']}>
      <h2>Welcome to Lib1!</h2>
    </div>
  );
}

export default Lib1;
