import React from 'react';
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Image from './image';

const StyledBackground = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(2),
}));

const StyledImageDiv = styled('div')(({ theme }) => ({
  maxWidth: '300px',
  marginBottom: theme.spacing(2),
}));

const Main: React.FC = () => (
  <StyledBackground>
    <Container maxWidth="md">
      <Typography variant="h2" component="h1" gutterBottom>
        헤더: 내 이름, 학교, 이메일 같은거. 내 깃헙 레포 링크도 걸면 좋을 듯
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        메인: education: 학력.. Experience: 드라이어드 간거? 시스템 프로그래밍은
        컴파일러, 시프, OS에서 한거 대충 꾸며서? 언어: C, C++ 웹은 robotfriends
        한거랑, 프로젝트 한거.. 언어: JS, TS, React, Node.js, Express? PS는
        파이썬으로.. 백준 링크? 관심있는거: 웹 프론트엔드, 머신 러닝..?
        <StyledImageDiv>
          <Image />
        </StyledImageDiv>
      </Typography>
      <Typography>푸터: 연락처 다시 한번?</Typography>
    </Container>
  </StyledBackground>
);

export default Main;
