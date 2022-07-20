/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Cast from '../Components/Show/Cast';
import Details from '../Components/Show/Details';
import Seasons from '../Components/Show/Seasons';
import ShowMainData from '../Components/Show/ShowMainData';
import apiGet from '../misc/config';

export default function Show() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let isMount = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(result => {
        if (isMount) {
          setShow(result);
          setIsLoading(false);
        }
      })
      .catch(message => {
        if (isMount) {
          setError(message);
          setIsLoading(false);
        }
      });

    return () => {
      isMount = false;
    };
  }, [id]);

  console.log(show);

  if (isLoading) {
    return <div>Still Loading</div>;
  }

  if (error) {
    return <div>Error Occured - {error}</div>;
  }

  return (
    <div>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />
      <div>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </div>
      <div>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </div>
      <div>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </div>
    </div>
  );
}
