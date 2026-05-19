import styles from "../Cardstatus/Cardstatus.module.css";

function Cardstatus({ counter, title, icon }) {
  return (
    <div className={`${styles.cardstatus} d-flex align-items-center`}>

      <div
        className={`${styles.icon} d-flex align-items-center justify-content-center w-100`}
      >
        <i className={icon}></i>
      </div>

      <div
        className={`${styles.info} w-100 d-flex flex-column align-items-center gap-2`}
      >
        <span className={styles.counter}>{counter}</span>

        <span className={styles.title}>{title}</span>
      </div>

    </div>
  );
}

export default Cardstatus;