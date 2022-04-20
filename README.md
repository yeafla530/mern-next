# MERN & MSA 과제 - Client

## 📎목차

- [MERN & MSA 과제 - Client](#mern---msa------client)
  * [📎목차](#----)
  * [💻개요](#----)
    + [왜 MSA?](#--msa-)
    + [왜 MERN?](#--mern-)
  * [📁프로젝트 시작](#---------)
    + [yarn 설치](#yarn---)
    + [dependencies 설치](#dependencies---)
    + [package 설치](#package---)
    + [로컬 테스트](#------)
  * [📐시스템 아키텍쳐](#----------)
  * [✉느낀점](#----)
    + [1주차](#1--)
  * [📍오픈소스](#------)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>



## 💻개요

`딥브레인 AI 아카데미 교육` 과정을 들으며, MSA & MERN Stack으로 만든 프로젝트 입니다.

`MSA란`, Micro Service Architacture로  단일 프로그램을 각 컴포넌트 별로 나누어 작은 서비스의 조합으로 구축하는 방법입니다.

`MERN Stack`은 MongoDB, Express, React, Node의 약자로 스택을 구성하는 4가지 주요 테크놀로지입니다.

Client는 `Next.js`를 이용해 생성하였습니다

과제의 최종 목표는 MSA & MERN Stack을 사용해 `공공데이터에서 csv데이터들을 가져와 게시판을 만드는 것`입니다.

`1주차`에는 React hook 방식으로 화면 구현을 목표로 작업을 완료했습니다.  공공 데이터는 복지서비스 정보를 사용하려 합니다

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

이미지 출처 | 몽고DB 홈페이지 - mern-stack-tutorial (https://www.mongodb.com/languages/mern-stack-tutorial)



## ✉느낀점

### 1주차

```
프론트엔드를 주로 해왔었는데 이렇게 MERN스택을 사용하여 파이프라인을 설계하면서 프로젝트의 전체적인 흐름을 알 수 있어서 좋았습니다. 
5주간 배워가는게 많을 것 같아 기대가 됩니다. 아직 모르는게 많아서 수업을 따라갈 수 있도록 열심히 공부해야될 것 같습니다.
```



## 📍오픈소스

* [공공데이터-한국사회보장정보원_복지서비스정보](https://www.data.go.kr/data/15083323/fileData.do)

