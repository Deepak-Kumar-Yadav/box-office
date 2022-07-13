import React from 'react';
import { Link } from 'react-router-dom';

const routes = [
  { key: 1, to: '/', text: 'Home' },
  { key: 2, to: '/Starred', text: 'Starred' },
];

export default function Navs() {
  return (
    <div>
      <ul>
        {routes.map(link => (
          <li key={link.key}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
