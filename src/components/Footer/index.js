import React from 'react';

function Footer() {
  return (
    <footer>

         <address className="footer-div contact">
            <a href="https://github.com/BrianCKWang/" target="_blank" rel="noreferrer">
              <i className="fab fa-github social-icon"></i>
            </a>
            <a href="https://www.linkedin.com/in/chun-kai-brian-wang-292b6b48/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin social-icon"></i>
            </a>
            <a href="mailto:brian.ck.wang@gmail.com" target="_blank" rel="noreferrer">
              <i className="fas fa-envelope social-icon"></i>
            </a>
        </address>

    </footer>
  );
}

export default Footer;