function clicked() {
  console.log("Button Clicked");
  /* This can also be used
    // let key = document.myForm.name1.value;
    // let value = document.myForm.name2.value;
    // localStorage.setItem(key, value);

    // localStorage.removeItem("color");

    // console.log(localStorage.getItem("user"));

    // localStorage.clear();
*/

  var cookieValue = escape(document.myForm.name.value);
  console.log(cookieValue);
  // document.cookie = "name=" + cookieValue;
  document.cookie = document.getElementById("name") + cookieValue;

  // retrieving cookie

  var allcookies = unescape(document.cookie);
  console.log(allcookies);

  // Deleting cookie

  var now = new Date();
  now.setMonth(now.getMonth() + 1); // cookie will get deleted after one month
  document.cookie = "name=" + cookieValue;
  document.cookie = "expires=" + now.toUTCString() + ";";
  var allcookies = unescape(document.cookie);
  console.log(allcookies);
}

// function clicked() {
//   var name = document.myForm.name.value;
//   console.log(name);
// }
