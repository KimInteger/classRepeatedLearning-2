const getUserInfo = () => {
  return {
    name : "김정수",
    age : 29,
    job : "백수",
  };
};

const formComponent = (action,method) => {
  const userInfo = getUserInfo();
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

const App = (formAction, formMethod) => `
  <h1>함수의 리턴은</h1>
  <h2>사람의 머리를 맑게 해준다.</h2>
  ${formComponent(formAction, formMethod)}
`;

const renderApp = (formAction, formMethod) => {
  const appDiv = document.getElementById('root');
  appDiv.innerHTML = App(formAction, formMethod);
};

document.addEventListener("DOMContentLoaded", ()=>{
  renderApp("/submit","post");
});