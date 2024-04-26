/**
 * this function is used to check if the user is authorized to access the page
 */

(() => {
  console.log(
    "Route Guard Loaded. Users Authorization status is: ",
    getStorage("isAuth")
  );
  if (!getStorage("isAuth") || getStorage("isAuth") === null) {
    console.log("Not Authorized. Redirecting to login page");
    logout();
    window.location.href = "../index.html";
  }
})();
