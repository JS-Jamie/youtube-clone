import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = () => {
  return (
    <Link to='/video/test' style={{ textDecoration: 'none' }}>
      <Container>
        <Image src='https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8eW91dHViZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=900&q=60' />
        <Details>
          <ChannelImage src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZihlM2YhFSxwXjTQ_5IlGsOh3WY0yQ53kQ&usqp=CAU' />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>Jamie Jeesoo Shin</ChannelName>
            <Info>136,000 views · 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
