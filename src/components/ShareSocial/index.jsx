import SocialLinks from "../SocialLinks";
import globalLinks from "../../moduleJS/constLinks";

import {
  faFacebook,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const ShareSocialList = () => {
  return (
    <div>
      <SocialLinks links={globalLinks} />
    </div>
  );
};

export default ShareSocialList;
