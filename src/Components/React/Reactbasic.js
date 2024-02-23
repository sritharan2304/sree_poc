import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setShowAll(false);
  };

  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <div>
      <Button
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={<MoreVertIcon />}
      >
        Open Menu
      </Button>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.slice(0, showAll ? options.length : 5).map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
        {!showAll && (
          <MenuItem onClick={handleShowAll}>
            Show All
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}
