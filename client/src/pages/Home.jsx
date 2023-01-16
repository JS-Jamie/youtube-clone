import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=date&regionCode=us&safeSearch=strict&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
      );
      setVideos(res?.data?.items);
    };
    fetchVideos();
  }, [type]);

  return (
    <Container>
      {videos.map((video) => (
        <Card key={video._id} video={video} />
      ))}
    </Container>
  );
};

export default Home;
