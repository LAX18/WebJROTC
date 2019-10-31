// onLoad Script to fetch and sort
function externalOnLoad() {
firebase.database().ref("news")
  .orderByChild('timestamp')
  .on('value', function(snapshot) {
  this.data = [];

  snapshot.forEach(function(child) {
    console.log(child)
    var data = child.val
    var a = document.createElement("div")
    a.innerHTML = "<div id='news-item'><span id='news-title'><h3>"+child.key+"</h3></span><span id='news-time'>"+data.timestamp+"</span><br><span id='news-content'>"+data.content+"</span></div>"
    document.getElementById("news-holder").appendChild(a);
  }.bind(this));

});
}

// Firebase Scripts
// global read data and place on page function
function setData(ref, element, read1) {
    var array = readData(ref, function(array) {
        document.getElementById(element).innerHTML = array[read1]
    });
}

function readData(ref, callback) {
    var nextformation = firebase.database().ref(ref);
    nextformation.on("value", function(data) {
        var array = data.val();
        callback(array)
    });
}