import React from "react";

function Badges() {
  return (
    <p>
      <a href="https://www.npmjs.com/package/vyaguta-icons" rel="nofollow">
        <img src="https://img.shields.io/npm/v/vyaguta-icons.svg" alt="npm" />
      </a>
      &emsp;
      <a href="https://travis-ci.com/vyaguta-icons/vyaguta-icons" rel="nofollow">
        <img
          src="https://travis-ci.com/vyaguta-icons/vyaguta-icons.svg?branch=master"
          alt="travis ci"
        />
      </a>
    </p>
  );
}

export default Badges;
