fetch('https://api.github.com/users/Alinkarlu')
.then(response => response.json())
.then(data => console.log(data.login));