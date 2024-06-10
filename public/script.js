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