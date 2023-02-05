<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# 웹툰 커뮤니티 서비스 "이거 봤어?" API

<img src="https://img.shields.io/badge/TypeScript-3178c6?style=flat&logo=TypeScript&logoColor=ffffff"/> <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=ffffff"/> <img src="https://img.shields.io/badge/NestJS-646464?style=flat&logo=NestJS&logoColor=db3636"/> <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=MongoDB&logoColor=ffffff"/>

 <br/>

## 프로젝트 소개

> 백엔드 코드들은 이혁재님 [webtoon-api](https://github.com/HyeokjaeLee/korea-webtoon-api)를 인용하였고, 제가 추가적으로 개발하고 싶은 기능들을 추가해서 제 서버에 배포한 개인 프로젝트 입니다.

<br>

웹툰 플랫폼의 웹툰 정보들을 제공합니다.

<br>

## 시작 가이드

- [Node.js 18.13.3](https://nodejs.org/ca/blog/release/v14.19.3/)
- [Npm 8.17.0](https://www.npmjs.com/package/npm/v/9.2.0)
  <br>

프로젝트 clone

```bash
$ git clone https://github.com/chunwookJoo/Korea_Webtoon_API.git
$ cd Korea_Webtoon_API
```

nvm 설정

```bash
$ nvm install  // 반약 본인의 nvm에 해당 버전이 없다면 실행
$ nvm use
```

.env 설정
<br>

> .env파일을 생성 후 본인의 DB와 PORT설정을 합니다.
> <br>

npm 설지

```bash
$ npm install
$ npm run start:dev
```

<br>

## 기술 스택

- TypeScript
- NestJS
- MongoDB

<br>

## 프로젝트 기능 설명

### ⭐️ 각 플랫폼별 (네이버, 카카오, 카카오페이지) 웹툰 리스트 제공

- 요일, 신작, 완결 별로 웹툰 리스트 제공합니다.
- 좋아하는 웹툰을 마이 웹툰에 저장합니다.

### ⭐️ Oauth 로그인 (카카오, 네이버), JWT토큰 발급 후 DB 저장

- Oauth인증 후 닉네임, 연령대, 성별만으로 회원가입합니다.

### ⭐️ 웹툰 검색 (작품, 작가)

- 작품, 작가 이름으로 검색을 합니다.

### ⭐️ 각 플랫폼별 독자 후기 정보 제공

- 플랫폼별로 독자의 후기 리스트를 제공합니다.
- 댓글을 작성 할 수 있습니다.

### ⭐️ 독자 후기 작성, 삭제

- 재밌게 본 웹툰의 후기를 작성합니다.
- 본인이 쓴 글을 삭제할 수 있습니다. (개발중)

 <br>

## [프론트 배포 깃헙 주소](https://github.com/chunwookJoo/Korea_Webtoon_Forum)
