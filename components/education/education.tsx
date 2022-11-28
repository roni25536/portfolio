import styles from "./education.module.css";

const Education = () => {
  return (
    <div className={styles.root}>
      <h3 className={styles.firstText}>
        I Took A{" "}
        <h1 className={styles.secondText}>Software Engineer Course At</h1>{" "}
        <h2 className={styles.thirdText}>Basmach School Of IDF</h2>
      </h3>
    </div>
  );
};

export default Education;
