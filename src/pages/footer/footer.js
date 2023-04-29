import React from "react";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LaunchIcon from "@mui/icons-material/Launch";
import { useNavigate } from "react-router-dom";
function Footer({user}) {

  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer__top">
        {user && user._id?"":<button className="ftr-btn" onClick={()=>navigate('/login')}>Sign in for more access</button>}
      </div>
      <div className="icons">
        <a href="https://www.instagram.com/karthik___jamadagni/" target={"blank"}><InstagramIcon className="ic" /></a>
        <FacebookIcon className="ic" />
        <YouTubeIcon className="ic" />
        <TwitterIcon className="ic" />
      </div>
      <div className="footer__middle">
        <div className="middle__top">
          <h4>
            Get imdb app <LaunchIcon />
          </h4>

          <h4>
            Help
            <LaunchIcon />
          </h4>

          <h4>
            Site Index
            <LaunchIcon />
          </h4>
          <h4>
            Box Office mojo
            <LaunchIcon />
          </h4>
          <h4>
            Advertising
            <LaunchIcon />
          </h4>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 1990-2023 by MyMovies.com , Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
