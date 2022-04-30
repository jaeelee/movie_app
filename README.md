# Movie App

## react-router
1. 설치 : ```npm insall react-router-dom``` 
OR 
```npm i react-router-dom@5.3.0```
2. import 하기
```
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
```

## gs-pages
- 결과물을 github pages에 업로드 할 수 있게 해주는 패키지
### 1. 설치 
```npi i gh-pages```
### 2. package.json에 추가
```json

  "scripts": {
    ...
    "deploy": "gh-pages -d build",
    "predeploy": "npm run build" //deploy하기 전 실행되는 명령어
  },
...
  "hompage": "https://jaeelee.github.io/React_exercie"
...

```
### 3. 빈 화면이 나오는 경우
 React router 6버전(react-router-dom 6 이상 버전)인 경우 gh-pages 배포 후, 빈화면이 나온다면 Route 컴포넌트의 path경로 앞에 ```process.env.PUBLIC_URL```을 추가하면 된다
```javascript
Route path={`${process.env.PUBLIC_URL}/`} element={< Home />}
```

혹은 Router컴퍼넌트 basename 속성으로 추가
```javascript
<Rouber basename={process.env.PUBLIC_URL}>
```

## API Key 숨기기
API Key는 본잉늬 고유한 key이므로 노출시키지 않고 올리는 것이 보안상 좋다.
React CRA 기반으로 작업을 한다면 dotenv를 사용해 API key를 숨길 수 있다.

### 1. 최상위 디렉토리에 .env파일 만들기
```
```