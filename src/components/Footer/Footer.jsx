import s from './Footer.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaTwitterSquare,
  FaLinkedinIn
} from 'react-icons/fa';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>Made with ❤️ by Raviraj Bhosale</h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/trinityhunter"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
            <a
              href="https://twitter.com/Trinityhunter18"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="twitter"
            >
              <FaTwitterSquare />
            </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/raviraj-bhosale-754999246/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
