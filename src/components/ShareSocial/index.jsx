import styles from  './ShareSocial.module.css';
import ShareSocialList from '../ShareSocialList'

  
  function ShareSocial() {
    return (
      <div className={styles.container}>
        <h1>Share Social</h1>
        <ShareSocialList />
      </div>
    );
  }
  
  export default ShareSocial;