import React, { useContext, useEffect, useState } from 'react';
import { Typography } from '@material-ui/core';
import Detail from '../components/Detail';
import { SearchContext } from '../context/search';

const detailTester = () => {
  const search = useContext(SearchContext);
  const [dataExists, setDataExists] = useState(true);

  useEffect(() => {
    if (
      search.singleData === undefined ||
      Object.keys(search.singleData).length === 0
    ) {
      try {
        search.setSingle(JSON.parse(localStorage.getItem('GetTopAnime')));
        setDataExists(true);
      } catch (error) {
        console.log(error);
        setDataExists(false);
      }
    }
  }, [search]);

  return (
    <div>
      {(dataExists && <Detail info={search.singleData} />) || (
        <Typography>No data exists for this Anime</Typography>
      )}
    </div>
  );
};

export default detailTester;