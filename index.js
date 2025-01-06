document.addEventListener('DOMContentLoaded', () => {
    const signInBtnLink = document.querySelector('.signInBtn-link');
    const signUpBtnLink = document.querySelector('.signUpBtn-link');
    const wrapper = document.querySelector('.wrapper');
    const users = JSON.parse(localStorage.getItem('users')) || {};
  
    signUpBtnLink.addEventListener('click', (event) => {
      event.preventDefault();
      wrapper.classList.add('active');
    });
  
    signInBtnLink.addEventListener('click', (event) => {
      event.preventDefault();
      wrapper.classList.remove('active');
    });
  
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
  
    signupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = signupForm.signupUsername.value.trim();
      const password = signupForm.signupPassword.value;
      const confirmPassword = signupForm.confirmPassword.value;
  
      if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
      } else if (users[username]) {
        alert('Username already exists. Please choose a different username.');
      } else {
        users[username] = password;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Sign up successful! You can now log in.');
        wrapper.classList.remove('active');
      }
    });
  
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const username = loginForm.username.value.trim();
      const password = loginForm.password.value;
  
      if (users[username] && users[username] === password) {
        alert('Login successful!');
        window.location.href = './file/rolepage.html';
      } else {
        alert('Invalid username or password. Please try again.');
      }
    });
  });
  