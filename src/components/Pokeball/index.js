import React from 'react';

import src from './images/pokeball.png';

const Pokeball = ({
  style
}) => (
  <img src={src}
    width={30}
    height={30}
    style={style}
    />
);

export default Pokeball;
