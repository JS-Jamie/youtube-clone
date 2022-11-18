import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;
const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
display: flex;
flex-direction: column;
gap 10px;`;

const Comment = () => {
  return <Container>Comment</Container>;
};

export default Comment;
