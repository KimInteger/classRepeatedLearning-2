/*
 * 이 스크립트 파일은 브라우저에서 DOM모델의 로드가 끝나면
 * renderApp을 실행 => App을 실행 => formComponent를 실행 => getUserInfo를 실행합니다.
 * 즉 getUserInfo부터 반대로 return이 들어가며 최후에 renderApp이 실행될 것입니다.
 * 
 */


/**
 * * 해당 함수는 객체를 반환하는 역할을 합니다.
 * * 변수에 할당하면 객체가 생성됩니다.
 * @param {string} name 
 * @param {number} age 
 * @param {string} job 
 * @returns 
 */


const getUserInfo = (name, age, job) => {
  return {
    name : name,
    age : age,
    job : job,
  };
};


/**
 * * 해당 함수는 문자열을 반환합니다.
 * * 문자열에 사용할 인자는 매개변수를 사용합니다.
 * * input의 value를 위해서 getUserInfo함수를 호출합니다.
 * 
 * @param {string} action 
 * @param {string} method 
 * @param {string} name 
 * @param {number} age 
 * @param {string} job 
 * @returns 
 */
const formComponent = (action,method,name,age,job) => {
  const userInfo = getUserInfo(name,age,job);
  return `
  <form action = "${action}" method = "${method}">
    <label for = "name"> 이름 : </label>
    <input type="text" id="name" name="name" value="${userInfo.name}" required>
    <label for = "age"> 나이 : </label>
    <input type="number" id="age" name="age" value="${userInfo.age}" required>
    <label for = "job"> 설명 : </label>
    <input type="text" id="job" name="job" value="${userInfo.job}" required>
    <button type="submit">제출</button>
  </form>
  `;
};

/**
 * * 해당 함수는 문자열을 반환합니다.
 * * formComponent를 호출하여 form섹션을 추가합니다.
 * * 매개변수를 동일하게 사용하여 콜백에서 이어지도록 합니다.
 * 
 * @param {string} formAction 
 * @param {string} formMethod 
 * @param {string} name 
 * @param {number} age 
 * @param {string} job 
 * @returns 
 */
const App = (formAction, formMethod,name,age,job) => `
  <h1>함수의 리턴은</h1>
  <h2>사람의 머리를 맑게 해준다.</h2>
  ${formComponent(formAction, formMethod,name,age,job)}
`;

/**
 * * 해당 함수는 document내의 root를 찾아서 innerHTML에 할당하는 역할을 합니다.
 * * 즉, 실제 브라우저상에 보이는 화면을 생성한다고 할 수 있습니다.
 * * 폼섹션을 불러오기 위하여 App함수를 호출합니다.
 * 
 * @param {string} formAction 
 * @param {string} formMethod 
 * @param {string} name 
 * @param {number} age 
 * @param {string} job 
 */
const renderApp = (formAction, formMethod, name, age, job) => {
  const appDiv = document.getElementById('root');
  appDiv.innerHTML = App(formAction, formMethod, name, age, job);
};

/**
 * * document의 DOM모델 내용의 로드가 끝나면 실행되는 EventListener입니다.
 * * renderApp을 호출합니다.
 */
document.addEventListener("DOMContentLoaded", ()=>{
  renderApp("/submit","post","김정수",29,"딴따라");
});