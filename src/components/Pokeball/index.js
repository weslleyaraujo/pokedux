import React, { PropTypes } from 'react';

import src from './images/pokeball.png';

const Pokeball = ({
  style,
}) => (
  <img src={src}
    width={30}
    height={30}
    style={style}
    alt="pokeball"
  />
);

Pokeball.propTypes = {
  style: PropTypes.object,
};

export default Pokeball;
