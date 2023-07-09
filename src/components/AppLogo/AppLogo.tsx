import styles from "./AppLogo.module.css";
import { useNavigate } from "react-router-dom";

function AppLogo() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className={styles.logo} onClick={() => navigate("/")}>
        Chess <br />
        Livestreams
      </h1>
    </>
  );
}

export default AppLogo;
