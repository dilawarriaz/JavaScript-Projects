var body = document.getElementById("body");
var button = document.getElementById("button");




button.onclick=function(){
    if (body.className == "black") {
        body.className = "white";
        button.className = "black";
            } else {
                body.className = "black";
                button.className = "white";
            }
};
 