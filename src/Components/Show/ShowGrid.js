import React from 'react';
import ShowCard from './ShowCard';
import imgNotFound from '../../images/not-found.png';
import { FlexGrid } from '../styled';

export default function ShowGrid({ data }) {
  return (
    <FlexGrid>
      {data.map(item => (
        <ShowCard
          key={item.show.id}
          id={item.show.id}
          name={item.show.name}
          image={item.show.image ? item.show.image.medium : imgNotFound}
          summary={item.show.summary}
        />
      ))}
    </FlexGrid>
  );
}
