import React from 'react';

function NavLink({ label, onClick }) {
  return (
    <li
      style={{
        display: 'inline-block',
        margin: '0 10px',
        cursor: 'pointer',
        textDecoration: 'none',
      }}
      onClick={onClick}
    >
      {label}
    </li>
  );
}

export default NavLink;
