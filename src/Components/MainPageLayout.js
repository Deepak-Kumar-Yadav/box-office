import React from 'react';
import Navs from './Navs';
import Title from './Title';

export default function MainPageLayout({ children }) {
  return (
    <>
      <Title
        title="Box Office"
        subTitle="Are you looking for a movie and an actor"
      />
      <Navs />
      {children}
    </>
  );
}
