var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){

    var request = new XMLHttpRequest();
    request.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');

    request.onload = function(){
        var reqData = JSON.parse(request.responseText);
        renderHTML(reqData);
    }
    request.send();
    pageCounter++;
    if(pageCounter>3){
        btn.classList.add("hide-me");
    }
})

function renderHTML(data) {
    var HTMLstring = "";
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        HTMLstring += "<p>" + data[i].name + " is a " + data[i].species + " that likes ";
        for(var ii = 0; ii < data[i].foods.likes.length; ii++){
            if(ii == 0){
                HTMLstring += data[i].foods.likes[ii];
            }else{
                HTMLstring += " and " + data[i].foods.likes[ii];
            }
        }

        HTMLstring += " but dislikes ";

        for(var ii = 0; ii < data[i].foods.dislikes.length; ii++){
            if(ii == 0){
                HTMLstring += data[i].foods.dislikes[ii];
            }else{
                HTMLstring += " and " + data[i].foods.dislikes[ii];
            }
        }

        HTMLstring += ".</p>";
    }

    animalContainer.insertAdjacentHTML('beforeend', HTMLstring);
}