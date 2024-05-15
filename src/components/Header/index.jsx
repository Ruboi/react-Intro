import userIcon from "./user.png";
import logo from "./logo.png";
import styles from  './Header.module.css'
import ShareSocialList from "../ShareSocial";

function Header(props) {
  const { isLogin } = props;

  //   if (isLogin) {
  //     return <img src={userIcon} alt="user" />;
  //   }
  //   return <button>login</button>

  //   return (
  //     <header>
  //       {isLogin ? <img src={userIcon} alt="user" /> : <button>login</button>}
  //     </header>
  //   );

  //   return <header>{isLogin && <img src={userIcon} alt="user" />}</header>;


  console.log('styles', styles)

  const buttons = (
    <div className='buttons'>
      <button>Login</button>
      <button>Registration</button>
    </div>
  );

  return (
    <header className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo" />
      <ShareSocialList />
      {isLogin ? (
        <img className={styles['user-icon']} src={userIcon} alt="user" />
      ) : (
        buttons
      )}
    </header>
  );
}

export default Header;
