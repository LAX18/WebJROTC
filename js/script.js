// Get List of SignUps
function signUpList() {
    database = firebase.database().ref("signup");
    database.once('value', function(snapshot) {
        snapshot.forEach(function(child) {
            firebase.database().ref("signup/" + child["key"]).on('value', function(data) {
                var data1 = data.val();
                var a = document.createElement("tr");
                a.innerHTML = "<td class='mdl-data-table__cell--non-numeric no-under' id='sign-name'><a href='"+data1["link"]+"'>"+child["key"]+"</a></td><td class='mdl-data-table__cell--non-numeric' id='sign-date'>"+data1["date"]+"</td><td class='mdl-data-table__cell--non-numeric no-under' id='sign-info'><a href='"+data1["infolink"]+"'>Info</a></td>"
                document.getElementById("table-body").appendChild(a)
                componentHandler.upgradeAllRegistered();
            });
        });
    });
}

function externalOnLoad() {
    var isMobile = window.orientation > -1;
    if (isMobile) {
        location.href = "https://lax18.github.io/WebJROTC/index.html"
    }
    console.log("[index.html] LOADED")
    var data = readData("nextevent", function(data) {
        if (data.event === "FOR") {
            document.getElementById("event_type").innerHTML = "Formation"
            document.getElementById("event_uniform").innerHTML = data.uniform
            document.getElementById("event_time").innerHTML = data.time
            document.getElementById("event_date").innerHTML = data.date
            document.getElementById("event_place").innerHTML = data.location
        } else if (data.event === "UNI") {
            document.getElementById("event_type").innerHTML = "Uniform Day"
            document.getElementById("event_uniform").innerHTML = data.uniform
            document.getElementById("event_time").innerHTML = "N/A"
            document.getElementById("event_date").innerHTML = data.date
            document.getElementById("event_place").innerHTML = "N/A"
        }
    })
   checkLogin();
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
