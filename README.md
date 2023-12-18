# Calog

> 일정 관리와 함께 하루를 기록하는 웹 사이트  
> (2023.12.15 ~ 아직 구현중)

![preview](assets/calog-mainpage.png)
![preview](assets/calog-preview.png)

## Features

## Goals

1. 재사용이 **쉬운** 컴포넌트 설계 ([components/ui](components/ui/) 폴더)
2. Server-side Rendering (SSR) 및 Static Site Generation 적합한 곳에 사용하기
3. 인증 구현

## Technologies Used

|               |         사용 기술          |
| :-----------: | :------------------------: |
|     코어      | React, Next.js, TypeScript |
|   상태 관리   | Recoil, React Query (예정) |
|   스타일링    |    CSS Module, Emotion     |
|    포맷팅     |      ESLint, Prettier      |
| 패키지 매니저 |         Yarn Berry         |

## Components/Hooks

**Components (UI 관련)**

- `Callout` : 컨텐츠 강조 카드
- `HoverBlurCard` : hover시 이미지 블러 효과와 텍스트 나타나는 카드
- `MediaObjectCard` : 이미지와 텍스트를 함께 배치하는 카드
- `ToggleVisibleButton` : 컨텐츠의 visibility를 컨트롤하는 버튼

**Custom Hooks**

- `useEscKey` : esc 키 이벤트 발생 시 콜백 함수 실행시키는 커스텀 훅
- `useToggleVisibility` : content visible 상태 관련 변수 및 함수를 관리하는 커스텀 훅

## TODO

> 현재 더미데이터 사용하여 상태 관리 중

- [x] Recoil을 사용한 상태 관리
- [ ] API 통신
- [x] 캘린더 스타일링
- [ ] linear gradient 스타일링
- [ ] 인증
