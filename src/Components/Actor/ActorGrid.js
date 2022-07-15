import React from 'react';
import ActorCard from './ActorCard';
import imgNotFound from '../../images/not-found.png';
import { FlexGrid } from '../styled';

export default function ActorGrid({ data }) {
  return (
    <FlexGrid>
      {data.map(item => (
        <ActorCard
          key={item.person.id}
          name={item.person.name}
          country={item.person.country ? item.person.country.name : null}
          birthday={item.person.birthday}
          deathday={item.person.deathday}
          gender={item.person.gender}
          image={item.person.image ? item.person.image.medium : imgNotFound}
        />
      ))}
    </FlexGrid>
  );
}
