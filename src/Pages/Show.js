import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

  return <div>This is Show page</div>;
}
