import React from 'react';
import { TitleWrapper } from '../Title.styled';

export default function Title({ title, subTitle }) {
  return (
    <TitleWrapper>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </TitleWrapper>
  );
}
