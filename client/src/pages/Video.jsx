import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { format } from 'timeago.js';
import { fetchSuccess } from '../redux/videoSlice';
import YouTube from 'react-youtube';

const Container = styled.div`
  display: flex;
  width: 40vw;
  gap: 24px;
`;
const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`
  flex: 5;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;

  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.span`
  font-weight: 500;
`;
const ChannelCouter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft}
  font-size: 12px;
`;
const Description = styled.p`
  font-size: 14px;
`;
const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const Video = () => {
  const { currentVideo } = useSelector((state) => state.video);
  const dispatch = useDispatch();
  const path = useLocation().pathname.split('/')[2];

  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=1&order=date&regionCode=CA&id=${path}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        );

        dispatch(fetchSuccess(videoRes?.data?.items[0]));
      } catch (error) {}
    };
    fetchData();
  }, [path, dispatch]);

  return (
    <Container>
      <Content>
        <VideoWrapper>
          <YouTube videoId={currentVideo?.id} opts={opts} />
        </VideoWrapper>
        <Title>{currentVideo?.snippet?.title}</Title>
        <Details>
          <Info>
            {currentVideo?.snippet?.description?.length} views ·{' '}
            {format(currentVideo?.snippet?.publishedAt)}
          </Info>
          <Buttons>
            <Button>
              {' '}
              <ThumbUpIcon />
            </Button>
            <Button>
              {' '}
              <ThumbDownIcon />
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>

        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={currentVideo?.snippet?.thumbnails?.default?.url} />
            <ChannelDetail>
              <ChannelName>{currentVideo?.snippet?.channelTitle}</ChannelName>
              <ChannelCouter>
                {currentVideo?.snippet?.title?.length} subscribers
              </ChannelCouter>
              <Description>{currentVideo?.snippet?.description}</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
      </Content>
    </Container>
  );
};

export default Video;
