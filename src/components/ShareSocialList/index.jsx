import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faGoogle,
  faGithub,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import styles from  './ShareSocialList.module.css';

function SocialLinks() {
    const links = [
      { href: "https://www.fb.com", text: "Facebook", color: "red", size: "2x"},
      { href: "https://www.google.com", text: "Google", color: "blue", size: "2x"},
      { href: "https://www.github.com", text: "GitHub", color: "black", size: "2x"},
    ];
  
    return (
        <ul className={styles.listLinks}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} title={link.text} style={{color: link.color}} >
              <FontAwesomeIcon icon={faGithub} size={link.size} />
                {link.text}
              </a>
            </li>
          ))}
        </ul>
    );
  }
  
  export default SocialLinks;