import React from 'react';
import Typography from '@material-ui/core/Typography';

const Main: React.FC = () => (
  <>
    <Typography variant="h2" component="h5" gutterBottom>
      헤더: 내 이름, 학교, 이메일 같은거. 내 깃헙 레포 링크도 걸면 좋을 듯
    </Typography>
    <Typography variant="h5" component="h2" gutterBottom>
      {`언어: C, C++ 웹은 robotfriends
      한거랑, 프로젝트 한거.. JS, TS, React, Node.js, Express? PS는 파이썬으로.. 시스템 프로그래밍은
      컴파일러, 시프, OS에서 한거 대충 꾸며서? `}
      {`관심있는거: 웹 프론트엔드, 머신 러닝..? 프로젝트들은 시스템 프로그래밍:
      컴파, 시프, 컴구, OS 웹: web-practice 페이지, robofriends, 그 projects들
      python: 수강 스나이퍼, 백준
      `}
      {`관심있는
      것: 머신 러닝, 클린 코드
      `}
    </Typography>
    <Typography>푸터: 연락처 다시 한번?</Typography>
  </>
);

export default Main;
