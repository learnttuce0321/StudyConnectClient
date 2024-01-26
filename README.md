# 스터디를 위한 기본기능 제공 서비스 : 스터디커넥트(StudyConnect)
---
## 목차
<details>
  <summary>목차</summary>

  1. StudyConnect 소개
  2. 팀원 소개
  3. 개발 기간
  4. 기술 스택
  5. 서비스 화면면
  6. 폴더 구조
  7. 핵심 코드
</details>

## 1.📱 StudyConnect소개
<div align="center">
  <img width="1280" alt="image" src="https://github.com/learnttuce0321/studyUserClient/assets/138414160/82e4033a-d006-4611-9b1d-97a09965569b">
</div>

스터디를 원활하게 진행하기 위해서는 인원, 출석, 과제, 벌금 등 관리해야 할 것들이 많습니다. <br />
notion 등과 같은 외부 프로그램을 사용하기 위해서는, 템플릿이 직접만들거나 구입하여 사용해야 합니다.<br />
좀더 간단하고 쉽게, 무료로 스터디를 관리할 수 있도록 만들어진 서비스입니다.<br />

스터디를 만들수 있습니다.<br />
스터디 내에서는 인원 추가, 검색 및 메모가 가능합니다.<br />
이외에도 일정 및 출석 관리, 과제 및 과제 제출 관리, 벌금 관리, 카카오톡 메세지 전송을 할 수 있습니다.<br />

<br />

## 2.🤼 팀원 소개
<table>
  <tbody>
    <tr>
      <th scope="col" colspan="3">프론트엔드 및 백엔드</th>
    </tr>
    <tr>
      <td align="center"><a href="https://github.com/learnttuce0321"><img src="https://github.com/learnttuce0321.png" width="100px;" alt=""/><br /><b>주상후</b></a><br /></td>
    </tr>
  </tbody>
</table>

<br />

### 주요 기능

<details>
  <summary>메인 페이지</summary>
  
  - 스터디 추가•삭제 기능
    
</details>

<details>
  <summary>스터디 페이지</summary>
  
  - 회원 정보(출석률, 과제제출률), 일정 요약 페이지
    
</details>

<details>
  <summary>회원 페이지</summary>
  
  - 스터디 회원 추가 
  - 검색 기능 
  - 회원 메모 기능

</details>

<details>
  <summary>일정, 출석 페이지</summary>
  
  - 스터디 일정 추가 기능
  - 스터디 일정 삭제 기능
  - 스터디 일정 수정 기능
  - 일정별 회원 출석 체크 기능
    
</details>

<details>
  <summary>과제, 제출 페이지</summary>
  
  - 스터디 과제 추가 기능
  - 스터디 과제 삭제 기능
  - 스터디 과제 수정 기능
  - 과제별 회원 제출 체크 기능
    
</details>

<details>
  <summary>메시지 페이지</summary>
  
  - 스터디 회원에게 메세지 작성 기능(카카오톡 전송)
    
</details>

<details>
  <summary>벌금 페이지</summary>
  
  - 벌금 추가 기능
  - 벌금 삭제 기능
  - 벌금 수정 기능
  - 벌금 제출 체크 기능
    
</details>

<br />

## 3.📆 개발 기간
> **2023.10.10 ~ 2023.10.31 (총 22일)**

<br />

## 4.⚙️ 기술 스택
### 기술 스택
<table>
  <tr>
    <td align="center">Front-End</td>
    <td>
      <a href="https://github.com/learnttuce0321" target="_blank"><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/></a>&nbsp
<a href="https://github.com/learnttuce0321" target="_blank"><img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/></a>&nbsp
<a href="https://github.com/learnttuce0321" target="_blank"><img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"/></a>&nbsp
<a href="https://github.com/learnttuce0321" target="_blank"><img src="https://img.shields.io/badge/Styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/></a>&nbsp
    </td>
  </tr>
  <tr>
    <td align="center">Back-End</td>
    <td>
<a href="https://github.com/learnttuce0321" target="_blank"><img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white"/></a>&nbsp
<a href="https://github.com/learnttuce0321" target="_blank"><img src="https://img.shields.io/badge/TypeOrm-262626?style=for-the-badge&logo=typeorm&logoColor=white"/"></a>&nbsp
<a href="https://github.com/learnttuce0321" target="_blank"><img src="https://img.shields.io/badge/Mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"/></a>&nbsp
<a href="https://github.com/learnttuce0321" target="_blank"><img src="https://img.shields.io/badge/Amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white"/></a>&nbsp
<a href="https://github.com/learnttuce0321" target="_blank"><img src="https://img.shields.io/badge/Amazonrds-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white"/></a>&nbsp
    </td>
  </tr>
  <tr>
     <td align="center">디자인</td>
     <td>
       <span><img src="https://img.shields.io/badge/Figma-d90f42?style=for-the-badge&logo=Figma&logoColor=white"/></span>&nbsp
     </td>
  </tr>
  <tr>
   <td align="center">IDE</td>
   <td>
      <span><img src="https://img.shields.io/badge/VSCode-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white"/></span>&nbsp
  </tr>
</table>

<br />

## 5.🔧 서비스 화면

<details>

<summary>메인페이지</summary>

<img width="1280" alt="image" src="https://github.com/learnttuce0321/studyUserClient/assets/138414160/5b555ffc-ca76-4e8d-8d09-deeffe3dcf37">

</details>

<details>

<summary>스터디 페이지</summary>

<img width="1280" alt="image" src="https://github.com/learnttuce0321/studyUserClient/assets/138414160/610e645f-77f9-4960-bc86-2e374f30727e">

</details>

<details>

<summary>회원 페이지</summary>

<img width="1280" alt="image" src="https://github.com/learnttuce0321/studyUserClient/assets/138414160/82e4033a-d006-4611-9b1d-97a09965569b">

</details>

<details>

<summary>메시지 페이지</summary>

<img width="1280" alt="image" src="https://github.com/learnttuce0321/studyUserClient/assets/138414160/f1096120-4684-49a2-bc79-9b6a4632ef93">

</details>

<details>

<summary>일정, 출석 페이지</summary>

<img width="1280" alt="image" src="https://github.com/learnttuce0321/studyUserClient/assets/138414160/8294752d-181a-4645-a381-b1a3c03926fa">
<img width="1280" alt="image" src="https://github.com/learnttuce0321/studyUserClient/assets/138414160/abe997b9-ccd2-4ffc-87bb-45b5d21413c6">

</details>

<details>

<summary>과제 페이지</summary>

<img width="1280" alt="image" src="https://github.com/learnttuce0321/studyUserClient/assets/138414160/56e4cc92-a07b-4a11-9a62-34e320e5ee10">
<img width="1280" alt="image" src="https://github.com/learnttuce0321/studyUserClient/assets/138414160/8b54d945-710e-44d4-983a-df9defcf965d">

</details>

<details>

<summary>벌금 페이지</summary>

<img width="1280" alt="image" src="https://github.com/learnttuce0321/studyUserClient/assets/138414160/9ac547d0-5a27-4fea-a711-dd88ae8462bf">

</details>

<details>

<summary>각 페이지 데이터 추가, 삭제, 수정, 검색 모달</summary>

<img width="1280" alt="image" src="https://github.com/learnttuce0321/studyUserClient/assets/138414160/47877119-7201-47ab-98c0-ec78b5d08850">
<img width="1280" alt="image" src="https://github.com/learnttuce0321/studyUserClient/assets/138414160/b6bf1e5b-18cc-43c1-a215-725320e0ad70">
<img width="1280" alt="image" src="https://github.com/learnttuce0321/studyUserClient/assets/138414160/fc4b701a-35a2-4c1b-85d6-9350eb598e64">
<img width="1280" alt="image" src="https://github.com/learnttuce0321/studyUserClient/assets/138414160/973c0799-caa2-42f8-a145-51237483483c">

</details>

<br />

## 6.📜 폴더 구조
### Front-End
```
client/src
├─Component
│  ├─Assignment
│  │  ├─AssignmentTable
│  │  ├─Content
│  │  └─SubmitTable
│  ├─Fine
│  │  └─FineTable
│  ├─Main
│  │  ├─Statistics
│  │  ├─UsersSummary
│  │  └─UsersSummaryTable
│  ├─Message
│  │  └─MessageTable
│  ├─Modal
│  │  ├─ActiveModalButtonWrapper
│  │  ├─AssignmentModal
│  │  ├─FineModal
│  │  ├─MessageModal
│  │  ├─ModalInputItem
│  │  ├─ModalWrapper
│  │  ├─ScheduleModal
│  │  ├─StudyModal
│  │  └─UserModal
│  ├─Navigation
│  │  ├─MainNavigation
│  │  └─SubNavigation
│  ├─RouteComponent
│  │  └─Router
│  ├─Schedule
│  │  ├─AttendanceTable
│  │  ├─Content
│  │  └─ScheduleTable
│  ├─Table
│  ├─User
│  │  ├─Summary
│  │  ├─UserAssignmentTable
│  │  ├─UserAttendanceTable
│  │  └─UsersTable
│  └─Wrapper
├─store
│  └─hooks
└─utils
```

### Back-End
```
server/src
├─config
├─controll
├─model
├─router
├─server
└─swagger
```

<br />

## 7.⭐️ 핵심 코드

### Front-End
#### 리렌더링 최적화
불필요한 리렌더링을 막기 위해 memo훅을 사용하였으며, 비교함수를 custom하여 사용

```
const isEqual = (prev: Readonly<{ submit: Submit }>, next: Readonly<{ submit: Submit }>): boolean => {
    return prev.submit.isSubmitted === next.submit.isSubmitted
}

export default memo(function SubmitTableItem({ submit }: { submit: Submit }) {
  ...
}, isEqual)
```

### Back-End
#### MVC 모델 적용
비지니스 로직과 UI로직을 분리하여 유지보수를 쉽게 할 수 있음

<div align="center">
  <img width="179" alt="image" src="https://github.com/learnttuce0321/StudyConnectClient/assets/138414160/a8fd88f4-003c-46e0-809d-425da5a1876d">
  <img width="183" alt="image" src="https://github.com/learnttuce0321/StudyConnectClient/assets/138414160/4a03c0f8-7ee5-41a8-83e9-ed43a78eff61">
</div>



