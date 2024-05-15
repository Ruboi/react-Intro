import SocialLinks from "../SocialLinks";
import constLinks from "../../moduleJS/constLinks";

import {
  faFacebook,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const ShareSocialList = () => {


  return (
    <div>
      <SocialLinks links={constLinks} />
    </div>
  );
};

export default ShareSocialList;
