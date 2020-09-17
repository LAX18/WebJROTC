// Ribbon Rack Builder
// v.2.0.1
//
//
// (C) 2019 Nicholas Pease
// Nokomis Warrior Battalion
// S6 Web Security and Maintainence

var ribbon_name = ['Medal of Heroism', 'Superior Cadet', 'Distinguished Cadet', 'Academic Excellence', 'Academic Achievement', 'Perfect Attendance', 'Student Goverment', 'LET Service', 'Student of the QTR', 'JLAB', 'Honor Roll', 'National Honor Society', 'SAI Instructor Leadership', 'Personal Apperance', 'Proficiency', 'Drill Team', 'Orienteering', 'Color Guard', 'Rifle Team', 'Adventure Training', 'BN Commendation', 'Good Conduct', 'JCLC', 'MMA Leadership Challenge', 'Community Service', 'Fundraising', 'CDT/NCO of the Month', 'Varsity Athletics', 'JROTC Physical Fitness', 'JROTC Athletics', 'Winter Survival', 'Company Commendation', 'Parade', 'Recruiting', 'Summit Project', 'Zimmerman Challenge', 'Summer Help', 'Service Learning', 'Excellent Staff Performance'];
var ribbon_filename = ['medal_of_heroism', 'superior_cadet', 'N-1-1', 'N-1-2', 'N-1-3', 'N-1-4', 'N-1-5', 'N-1-6', 'N-1-7', 'N-1-8', 'N-1-9', 'N-1-10', 'N-3-1', 'N-3-2', 'N-3-3', 'N-3-4', 'N-3-5', 'N-3-6', 'N-3-7', 'N-3-8', 'N-3-9', 'N-3-10', 'N-3-11', 'N-3-12', 'N-3-13', 'N-3-14', "N-3-15", "N-2-1", "N-2-2", "N-2-3", "N-2-4", "N-2-5", "N-4-1", "N-4-2", "N-4-3", "N-4-4", "N-4-5", "N-4-6", "N-4-7"];
var ribbon_activated = [];
var number_of_ribbons = ribbon_name.length;

function onLoad() {
    for (i = 0; i < number_of_ribbons; i++) {
        var element = document.getElementById("ribbon_selector");
        var newelement = document.createElement("span")
        newelement.setAttribute("class", "ribbon-selector-span")
        if (i <= 1) {
            newelement.innerHTML = "<div id='ribbons-selector'> <div class='ribbon-card " + ribbon_name[i] + " mdl-card mdl-shadow--2dp'> <div class='mdl-card__title'> <h2 class='mdl-card__title-text'>" + ribbon_name[i] + "<br>&nbsp</h2> </div> <div class='mdl-card__media'> <img src='assets/ribbons/" + ribbon_filename[i] + ".gif' width='154px' height='42px' border='0' alt='' style='padding:10px;'> </div> <div class='mdl-card__supporting-text'> <img src='assets/add.png' onclick='addRibbon(" + i + ");' class='clickable'><img src='assets/subtract.png' onclick='subtractRibbon(" + i + ");' class='clickable'> </div> </div> </div>"
        } else {
            newelement.innerHTML = "<div id='ribbons-selector'> <div class='ribbon-card mdl-card mdl-shadow--2dp'> <div class='mdl-card__title'> <h2 class='mdl-card__title-text'>" + ribbon_name[i] + "<br>" + ribbon_filename[i] + "</h2> </div> <div class='mdl-card__media'> <img src='assets/ribbons/" + ribbon_filename[i] + ".gif' width='154px' height='42px' border='0' alt='' style='padding:10px;'> </div> <div class='mdl-card__supporting-text'> <img src='assets/add.png' onclick='addRibbon(" + i + ");' class='clickable'><img src='assets/subtract.png' onclick='subtractRibbon(" + i + ");' class='clickable'> </div> </div> </div>"
        }
        element.appendChild(newelement)
    }
}

function addRibbon(number) {
    ribbon_activated[number] = true;
    updatePage();
}

function subtractRibbon(number) {
    ribbon_activated[number] = false;
    updatePage();
}

function updatePage() {
    document.getElementById("ribbons-display").innerHTML = ""
    let ribbons = 0
    for (i = 0; i < number_of_ribbons; i++) {
        if (ribbon_activated[i] === true) {
            ribbons++
            var singles = ribbons % 3
            var rows = (ribbons - singles) / 3
            var img = document.createElement("img");
            img.setAttribute("src", "assets/ribbons/" + ribbon_filename[i] + ".gif");
            img.setAttribute("width", "33%");
            img.setAttribute("class", "ribbons")
                //var ribbbonselector = document.getElementById()
            if (ribbons <= 3) {
                console.log(rows)
                img.setAttribute("id", ribbons)
            }
            if (singles === 1 && rows !== 0) {
                document.getElementById("1").setAttribute("style", "display: block;margin: auto;")
                document.getElementById("3").removeAttribute("style");
            } else if (singles === 2 && rows !== 0) {
                document.getElementById("1").removeAttribute("style");
                document.getElementById("1").setAttribute("width", "34%");
                document.getElementById("2").setAttribute("width", "34%");
                //		document.getElementById("1").setAttribute("height", "");
                //		document.getElementById("2").setAttribute("height", "");
            } else if (rows > 0) {
                document.getElementById("1").setAttribute("width", "33%");
                document.getElementById("2").setAttribute("width", "33%");
                //		document.getElementById("1").removeAttribute("height");
                //		document.getElementById("2").removeAttribute("height");
            }
            document.getElementById("ribbons-display").appendChild(img);
        }
    }
}