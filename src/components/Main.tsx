import React from 'react';
import Typography from '@material-ui/core/Typography';

const Main: React.FC = () => (
  <>
    <Typography variant="h5" component="h2" gutterBottom>
      {`프로젝트-
      웹: robotfriends, 프로젝트, 깃헙 io 페이지, web-practice - 언어: ES6+, React, TypeScript, Express? / 더 연습해서 Redux까지 넣기.
      시스템 프로그래밍: 컴구 시프 OS 컴파 중에서 몇개 고르기. - 언어: C, C++
      ps: 백준 - 언어: 파이썬
      기타 - 수강 스나이퍼 등
      `}
      {`관심있는 것-
      웹 FE, 머신 러닝, 클린 코드
      `}
    </Typography>
    <Typography>푸터: 연락처 다시 한번?</Typography>
  </>
);

export default Main;
