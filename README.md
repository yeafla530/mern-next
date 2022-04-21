# MERN & MSA 과제 - Client

## 📎목차

* [💻개요](#개요)
  + [왜 MSA?](#왜-msa)
  + [왜 MERN?](#왜-mern)
* [📁프로젝트 시작](#프로젝트-시작)
  + [yarn 설치](#yarn-설치)
  + [dependencies 설치](#dependencies-설치)
  + [package 설치](#package-설치)
  + [로컬 테스트](#로컬-테스트)
* [📐시스템 아키텍쳐](#시스템-아키텍쳐)
* [⚙기술 설명](#기술-설명)
* [✉느낀점](#느낀점)
  + [1주차](#1주차)
* [📍오픈소스](#오픈소스)



## 💻개요

`딥브레인 AI 아카데미 교육` 과정을 들으며, MSA & MERN Stack으로 만든 프로젝트 입니다.

`MSA란`, Micro Service Architacture로  단일 프로그램을 각 컴포넌트 별로 나누어 작은 서비스의 조합으로 구축하는 방법입니다.

`MERN Stack`은 MongoDB, Express, React, Node의 약자로 스택을 구성하는 4가지 주요 테크놀로지입니다.

Client는 `React.js` 기반으로 생성하였습니다

과제의 최종 목표는 MSA & MERN Stack을 사용해 `공공데이터에서 csv데이터들을 가져와 게시판을 만드는 것`입니다.

`1주차`에는 `React hook` 방식으로 화면 구현을 목표로 작업을 완료했습니다.  공공 데이터는 `복지서비스 정보`를 사용하려 합니다

### 왜 MSA?

MSA방식은 단일 프로그램을 각 컴포넌트별로 나누어 작은 서비스의 조합으로 구축하는 방법입니다. 각 컴포넌트가 독립되어있어 확장이 용이하고 독립된 배포가 가능하다는 장점이 있습니다.

### 왜 MERN?

MERN Stack은 Javascript한가지 언어로 프론트부터 백단까지 구성할 수 있다는 장점이 있습니다. 또한 딥브레인에서 주기술인 Machine Learning을 사용하려면 데이터를 유연하게 처리할 수 있는 MongoDB를 사용하는 것이 좋지 않았을까 생각했습니다.  



## 📁프로젝트 시작

### yarn 설치

```bash
$ npm install -g yarn
```

### dependencies 설치

```bash
$ yarn
```

### package 설치

```bash
$ yarn add [package name]
```

### 로컬 테스트

```bash
$ cd client
$ npm run dev
# or
$ yarn dev
# 로컬 경로 | http://localhost:3000 
```



## 📐시스템 아키텍쳐

![MERN stack visualized](https://webimages.mongodb.com/_com_assets/cms/kobuybqq12c9ya16f-mernstack_visualized.png?auto=format%2Ccompress)

<small><i><a href='https://www.mongodb.com/languages/mern-stack-tutorial'>이미지 출처 | 몽고DB 홈페이지 - mern-stack-tutorial</a></i></small>

React로 클라이언트를 작업하여 프리젠테이션 계층을 구현하고 Express와 Node로 애플리케이션 계층을 구성하고 MongoDB로 데이터베이스 계층을 생성합니다.



## ⚙기술 설명

|  개발언어  | 개발환경 | API & 라이브러리 |
| :--------: | :------: | :--------------: |
| JavaScript | Next.js  |      react       |
|            |          |      axios       |
|            |          |                  |

`Next.js` : 리액트 라이브러리의 프레임워크

`react` : 뷰 라이브러리

`axios` : 비동기 호출 라이브러리



## ✨이슈

### 1주차

* router에 대한 이해가 부족했고, 복습 후 `automatic routing`기능이 있는걸 다시금 깨달을 수 있었다. `폴더명과 라우트명을 일치`시켜야한다는걸 기억해야한다

* 진입점은 `__app.js`이고,  `__app.js`의 `Component`는 router가 이동할 때 (폴더명: user, router: /user) 해당 `폴더의 index.js`를 가리킨다는걸 학습할 수 있었다. 

  router가 `/user/login`인 경우엔 `user > login.js`를 가리키는 것

* `import style component`를 사용하여 `JSON형태의 데이터`를 이중 map으로 처리하였다 





## ✉느낀점

### 1주차

```
프론트엔드를 주로 해왔었는데 이렇게 MERN스택을 사용하여 파이프라인을 설계하면서 프로젝트의 전체적인 흐름을 알 수 있어서 좋았습니다. 
5주간 배워가는게 많을 것 같아 기대가 됩니다. 아직 모르는게 많아서 수업을 따라갈 수 있도록 열심히 공부해야될 것 같습니다.
```



## 📍오픈소스

* [공공데이터-한국사회보장정보원_복지서비스정보](https://www.data.go.kr/data/15083323/fileData.do)

