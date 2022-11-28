import styles from "./about.module.css";

const about = () => {
  return (
    <div className={styles.root}>
      <h3 className={styles.firstText}>
        Hi, My Name Is <h1 className={styles.secondText}>Roni Berlin.</h1>{" "}
        <h2 className={styles.thirdText}>I'm DevOps Engineer.</h2>
      </h3>
    </div>
  );
};

export default about;
