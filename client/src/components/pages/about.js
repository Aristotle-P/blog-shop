import React from 'react';

import portrait from '../../assets/about-portrait.jpg';

const about = () => {
  return (
    <div>
      <section>
        <img
          className="about-portrait"
          src={portrait}
          alt="portrait of website author"
        />
        <h3>Hi, I'm Eve</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </section>
    </div>
  );
};

export default about;
