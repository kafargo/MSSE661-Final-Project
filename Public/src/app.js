const doLogin = async (e) => {
  e.preventDefault();
  const userEmail = document.getElementById("userEmail").value;
  const userPassword = document.getElementById("userPassword").value;

  const res = await login({ userEmail, userPassword });
  console.log(res);
  if (res.auth) {
    const { auth, access_token, refresh_token } = res;

    setStorage("isAuth", auth);
    setStorage("access_token", access_token);
    setStorage("refresh_token", refresh_token);
    window.location.href = "../html/main.html";
  } else {
    alert("Invalid Credentials");
  }
};

const doRegister = async  (e) => {
  e.preventDefault();
  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  const userPassword = document.getElementById("userPassword").value;

  const res = await register({ userName, userEmail, userPassword });
  console.log(res);
  if (res._id) {
    alert("Registration successful");
    window.location.href = "../index.html";
  } else {
    alert("Something went wrong. Please try again later.");
  }

};

const doUpdate = async  (e) => {
  e.preventDefault();
  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  const newEmail = document.getElementById("newEmail").value;
  const userPassword = document.getElementById("userPassword").value;
  const newPassword = document.getElementById("newPassword").value;

  const res = await update({ userName, userEmail, newEmail, userPassword, newPassword });
  console.log(res);
  if (res._id) {
    alert("Account Updated successfully");
    window.location.href = "./main.html";
  } else {
    alert("Something went wrong. Please try again later.");
  }

};

const doLogout = (e) => {
  e.preventDefault();
  logout();
  window.location.href = "../index.html";
};
