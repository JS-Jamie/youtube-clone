import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from './Card';

const Container = styled.div`
  flex: 2;
`;

const Recommendation = ({ tags }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`/videos/tags?tags=${tags}`);
      setVideos(res.data);
    };
    fetchVideos();
  }, [tags]);

  return (
    <Container>
      {videos.map((video) => (
        <Card type='sm' key={video.id} video={video} />
      ))}
    </Container>
  );
};

export default Recommendation;
