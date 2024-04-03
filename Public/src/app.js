const doLogin = function(e) {
    e.preventDefault();
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;
  
    login({
      userEmail: userEmail,
      userPassword: userPassword
    }).then(function(res) {
      console.log(res);
      if (res.status === 200) {
        window.location.href = '../html/main.html';
      } else {
        alert('Invalid username or password');
      }
    }).catch(function(error) {
      console.error(error);
      alert('Something went wrong. Please try again later.');
    });
  };
  
  const doRegister = function(e) {
    e.preventDefault();
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userPassword = document.getElementById('userPassword').value;
  
    register({
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword
    }).then(function(res) {
        console.log(res);
      if (res.status === 200) {
        alert('Registration successful');
        window.location.href = '../index.html';
      } else {
        alert('Something went wrong');
      }
    }).catch(function(error) {
        console.error(error);
        alert('Something went wrong. Please try again later.');
      });
  };