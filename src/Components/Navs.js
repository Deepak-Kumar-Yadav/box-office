import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavList, LinkStyled } from './Nav.styled';

const routes = [
  { key: 1, to: '/', text: 'Home' },
  { key: 2, to: '/Starred', text: 'Starred' },
];

export default function Navs() {
  const location = useLocation();

  return (
    <div>
      <NavList>
        {routes.map(link => (
          <li key={link.key}>
            <LinkStyled
              className={link.to === location.pathname ? 'active' : ''}
              to={link.to}
            >
              {link.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
}
