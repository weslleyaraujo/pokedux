import React from 'react';
import { Link } from 'react-router';
import { ListItem, Avatar, Menu, MenuItem, rightIconMenu } from 'material-ui';

// <Link to={`/pokemon/${id}`}>{name}</Link>

const PokedexItem = ({
  image,
  name,
  id,
}) => (
  <ListItem
    rightIconButton={rightIconMenu}
    leftAvatar={<Avatar src={`${image}${id}.png`}/>}
    primaryText={name} />
);

export default PokedexItem;
