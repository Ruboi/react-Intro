import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './ShareSocialList.module.css';

function SocialLinks({ links }) {
  return (
    <ul className={styles.listLinks}>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} title={link.text} style={{ color: link.color }}>
            <FontAwesomeIcon icon={link.icon} size={link.size} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;