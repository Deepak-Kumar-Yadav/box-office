import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiGet from '../misc/config';

export default function Show() {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(result =>
      setShow(result)
    );
  }, [id]);

  console.log(show);

  return <div>This is Show page</div>;
}
