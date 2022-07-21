import React from 'react';
import ShowCard from './ShowCard';
import imgNotFound from '../../images/not-found.png';
import { FlexGrid } from '../styled';
import { useShows } from '../../misc/Custom-hooks';

export default function ShowGrid({ data }) {
  const [starredShows, dispatchStarred] = useShows();

  return (
    <FlexGrid>
      {data.map(item => {
        const isStarred = starredShows.includes(item.show.id);

        const onStarClick = () => {
          if (isStarred) {
            dispatchStarred({ type: 'REMOVE', showId: item.show.id });
          } else {
            dispatchStarred({ type: 'ADD', showId: item.show.id });
          }
        };

        return (
          <ShowCard
            key={item.show.id}
            id={item.show.id}
            name={item.show.name}
            image={item.show.image ? item.show.image.medium : imgNotFound}
            summary={item.show.summary}
            onStarClick={onStarClick}
            isStarred={isStarred}
          />
        );
      })}
    </FlexGrid>
  );
}
