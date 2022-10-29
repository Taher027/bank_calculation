document.getElementById('submit_btn').addEventListener('click', function () {
   const userEmail = document.getElementById('user_email').value;
   const userPassword = document.getElementById('user_pass').value;
   if (userEmail === 'bank@gmail.com' && userPassword === 'bank@gmail') {
      window.location.href = 'bank.html'
   }
   else {
      alert('please provide authentic user email and password')
   }
})