let searchKey = "";

function getCookie(key) {
    var cArr = document.cookie.split(";");

    for(var i = 0; i < cArr.length; i++) {
        var cPair = cArr[i].split("=");
        if(key == cPair[0].trim()) {
            return cPair[1];
        }
    }
    return null;
}
if (getCookie('username')) {
  document.querySelector('#username').innerHTML = getCookie('username').toUpperCase();
}
else {
  window.location.href = "http://localhost:8888/Web%20tech%20works/ajax/templates/login.html";
}

document.querySelector('#searchKey').onkeyup = () => {
  searchKey = document.querySelector('#searchKey').value;

  if (searchKey != "") {
    let request = new XMLHttpRequest();
    request.onload = () => {
      const data = JSON.parse(request.responseText);

      if (data.status == "success") {
        document.querySelector('#nameList').innerHTML = "";
        let usernames = data.usernames;
        console.log(usernames);
        usernames.forEach(username => {
          const li = document.createElement('li');
          li.innerHTML = username;
          document.querySelector('#nameList').appendChild(li);
        });
      }
      else {
        console.log("error");
      }
    }

    request.open("GET", "./../index.php?key=search&searchKey="+searchKey, true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send();
  }
  else {
    document.querySelector('#nameList').innerHTML = "";
  }

  return false;
}
