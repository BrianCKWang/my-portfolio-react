import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Header(props) {
  const {
    pages = [],
    currentPage,
    setCurrentPage
  } = props;

  return (
    <header>
      <h1>Brian CK Wang</h1>
      <nav>

          {pages.map((page) => (
            <a
              href="#About"
              className={`mx-1 ${currentPage.name === page.name && 'navActive'}`}
              key={page.name}
            >
              <span onClick={() => { setCurrentPage(page); }}>
                {capitalizeFirstLetter(page.name)}
              </span>
            </a>
          ))}
      </nav>
    </header>
  );
}

export default Header;