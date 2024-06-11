const getUserInfo = (name, age, job) => {
  return {
    name : name,
    age : age,
    job : job,
  };
};

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

const App = (formAction, formMethod,name,age,job) => `
  <h1>함수의 리턴은</h1>
  <h2>사람의 머리를 맑게 해준다.</h2>
  ${formComponent(formAction, formMethod,name,age,job)}
`;

const renderApp = (formAction, formMethod, name, age, job) => {
  const appDiv = document.getElementById('root');
  appDiv.innerHTML = App(formAction, formMethod, name, age, job);
};

document.addEventListener("DOMContentLoaded", ()=>{
  renderApp("/submit","post","김정수",29,"딴따라");
});