function externalOnLoad() {
  verify();
  timeChange();
  updatePage();
  readData("company", function(data) {
        document.getElementById("alphacurrentpoints").innerHTML = data.alphapoints
        document.getElementById("bravocurrentpoints").innerHTML = data.bravopoints
  });
  window.setInterval(verify(),1000);
}

// Verify if the user has access
function verify() {
  firebase.auth().onAuthStateChanged(function(user) {
     if (user) {
        readData("users", function(array) {
               if (array[firebase.auth().currentUser.email.replace("@","|").replace(".",",")]) {
               document.getElementById("page-content").style.display = "block"
               document.getElementById("unauthorized").style.display = "none"
               } else {
               document.getElementById("unauthorized").style.display = "block"
               document.getElementById("page-content").style.display = "none"
        }});
        } else {
        document.getElementById("unauthorized").style.display = "block"
        document.getElementById("page-content").style.display = "none"
        }
  })
}