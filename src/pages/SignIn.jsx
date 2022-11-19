import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1``;

const SubTitle = styled.h2``;

const Input = styled.input``;

const Button = styled.button``;

const More = styled.div``;

const Links = styled.span``;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to Jamie Jeesoo Shin</SubTitle>
        <Input placeholder='username' />
        <Input type='password' placeholder='password' />
        <Button>Sign In</Button>
        <Title>Or</Title>
        <Input placeholder='username' />
        <Input placeholder='email' />
        <Input type='password' placeholder='password' />
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
