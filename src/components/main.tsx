import React from 'react';
import Typography from '@material-ui/core/Typography';

const Main: React.FC = () => (
  <>
    <Typography variant="h2" component="h5" gutterBottom>
      헤더: 내 이름, 학교, 이메일 같은거. 내 깃헙 레포 링크도 걸면 좋을 듯
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      메인: education: 학력.. Experience: 드라이어드 간거? 시스템 프로그래밍은
      컴파일러, 시프, OS에서 한거 대충 꾸며서? 언어: C, C++ 웹은 robotfriends
      한거랑, 프로젝트 한거.. 언어: JS, TS, React, Node.js, Express? PS는
      파이썬으로.. 백준 링크? 관심있는거: 웹 프론트엔드, 머신 러닝..?
    </Typography>
    <Typography>푸터: 연락처 다시 한번?</Typography>
  </>
);

export default Main;
