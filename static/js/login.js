document.querySelector('#loginForm').onsubmit = () => {
  let username = document.forms["loginForm"]["username"].value || "";
  let password = document.forms["loginForm"]["password"].value || "";


  if (username != "" && password != "") {
    let request = new XMLHttpRequest();
    request.onload = () => {
      console.log(request.responseText);
      if (request.responseText == "success") {
        console.log("success");
        window.open("http://localhost:8888/Web%20tech%20works/ajax/welcome.php");
      }
      else {
        console.log("error");
        document.querySelector("#regErr").removeAttribute("hidden");
      }
    }

    request.open("POST", "./../login.php", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("username=" + username + "&password=" + password);
  }

  return false;
}
