import styles from "../styles/Home.module.css";

export default function AssumptionMapping() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Assumption Mapping</h1>
        <p className={styles.bodyText} style={{ fontWeight: "bold" }}>
          Assumptions: things we believe to be true, with little to no proof of
          them being true.
        </p>

        <p className={styles.bodyText}>
          Before spending time and money to create a minimum viable product (and
          roadmap), we should organise and validate these assumptions before
          prioritising what we will work on. The assumptions map will then help
          guide what questions we ask participants during research. Assumption
          mapping is a method to get actionable takeaways so that teams can
          successfully move their ideas forward. Do assumptions mapping workshop
          to build an assumptions map, then use this to create research
          questions.
        </p>
      </main>
    </div>
  );
}
