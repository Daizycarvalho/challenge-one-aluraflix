import React from 'react';
import Banner from '../../components/Banner';
import EditModal from '../../components/EditModal';
import VideosContainer from '../../components/VideosContainer';
import { useVideosContext } from '../../context/Videos';

const HomePage = () => {
  const { selectedVideo } = useVideosContext();

  return (
    <>
      <Banner />
      <VideosContainer />
      {selectedVideo && <EditModal selectedCard={selectedVideo} />}
    </>
  );
};

export default HomePage;
