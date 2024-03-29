//Commented out all the codes below due to the change of the plan to use YouTube Api instead of using database for videos

// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import Card from '../components/Card';

// const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
// `;

// const Search = () => {
//   const [videos, setVideos] = useState([]);
//   const query = useLocation().search;

//   useEffect(() => {
//     const fetchVideo = async () => {
//       const res = await axios.get(`/videos/search${query}`);
//       setVideos(res.data);
//     };
//     fetchVideo();
//   }, [query]);

//   return (
//     <Container>
//       {videos.map((video) => (
//         <Card key={video._id} video={video} />
//       ))}
//     </Container>
//   );
// };

// export default Search;
