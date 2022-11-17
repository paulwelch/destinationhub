import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <TopNav />
      <div className={styles.div}>
        {/* <main className={styles.main}> */}
        {children}
        {/* </main> */}
      </div>
      <BottomNav />
    </>
  );
};

export default Layout;
