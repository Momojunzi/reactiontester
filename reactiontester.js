/**
 * Created by Mark on 7/29/2015.
 */
var clickedtime; var createdtime; var reactiontime;
function SetTopMargin (ObjectID, Value){
    document.getElementById(ObjectID).style.marginTop =  Value.toString() + "px";
}
function SetLeftMargin (ObjectID, Value){
    document.getElementById(ObjectID).style.marginLeft = Value.toString() + "px";
}
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function boxOrCirlce(){
    var borderradius;
    var x = Math.floor(Math.random()*2)-1;
    if(x==0){
        borderradius = "100px";
    }
    else{
        borderradius = "0px";
    }
    return borderradius;
}

function makebox(){
    var randomlocation = Math.random()*500;
    var randomnum = Math.random()*3000;
    var redbox = document.getElementById("box");
    setTimeout(function(){
        document.getElementById("box").style.backgroundColor=getRandomColor();
        document.getElementById("box").style.borderRadius=boxOrCirlce();
        redbox.style.display="block";
        SetTopMargin("box",randomlocation);
        SetLeftMargin("box", randomlocation);
        createdtime = Date.now();

    },randomnum);
    redbox.onclick=function(){
        clickedtime = Date.now();
        redbox.style.display="none";
        reactiontime = (clickedtime-createdtime)/1000;
        document.getElementById("time").innerHTML=reactiontime + "seconds";
        makebox();
    }
}
makebox();