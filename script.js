var boy = document.getElementById('boy');
idleImageNumber = 1;
idleAnumationNumber = 0;
function idleAnimation() {

    idleImageNumber = idleImageNumber + 1;

    if (idleImageNumber == 11) {
        idleImageNumber = 1;
    }

    boy.src = "resources/idle ("+idleImageNumber+").png";
}

function idleAnimationStart(){
    idleAnumationNumber = setInterval(idleAnimation,200);
}

runImageNumber =1;
runAnimationNumber = 0;

function runAnimation() {
    
    runImageNumber = runImageNumber + 1;

    if (runImageNumber == 11) {
        runImageNumber = 1;
    }

    boy.src = "resources/run ("+runImageNumber+").png";
}

function runAnimationStart() {
    runAnimationNumber = setInterval(runAnimation,100);
    clearInterval(idleAnumationNumber);
}

jumpAnimationNumber = 0;
jumpImageNumber = 1;
boyMargineTop = 397;

function jumpAnimation(){

    jumpImageNumber = jumpImageNumber + 1;

    if (jumpImageNumber <= 6 ) {
        boyMargineTop = boyMargineTop - 55;
        boy.style.marginTop = boyMargineTop + "px";
    }

    if (jumpImageNumber >= 7) {
        boyMargineTop = boyMargineTop + 55;
        boy.style.marginTop = boyMargineTop + "px";
    }

    if (jumpImageNumber == 11) {
        jumpImageNumber = 1;
        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber = 0;
        runImageNumber = 0;
        runAnimationStart();
    }

    boy.src = "resources/jump ("+jumpImageNumber+").png";
}

function jumpAnimationStart(){
    clearInterval(idleAnumationNumber);
    runImageNumber = 0;
    clearInterval(runAnimationNumber);
    jumpAnimationNumber = setInterval(jumpAnimation,100)

}

function keyCheck(event){
    // alert(event.which);
    // enter = 13
    // space = 32

    var keyCode=event.which;

    if (keyCode == 13){
        if(runAnimationNumber == 0){
            runAnimationStart();
        }
    
    if(moveBackgroundAnimationId == 0) {
        moveBackgroundAnimationId = setInterval(moveBackground,100);
    }
    
    if (boxAnimationId == 0){
        boxAnimationId = setInterval(boxAnimation,100);
    }

  }
    if (keyCode == 32){
        if(jumpAnimationNumber == 0) {
            jumpAnimationStart();
        }

    }

    if(moveBackgroundAnimationId == 0) {
        moveBackgroundAnimationId = setInterval(moveBackground,100);
    }
    
    if (boxAnimationId == 0){
        boxAnimationId = setInterval(boxAnimation,100);
    }

}

var backgroundPositionX = 0;
var moveBackgroundAnimationId = 0;
var score = 0;

function moveBackground(){

    backgroundPositionX = backgroundPositionX - 20;

    document.getElementById("background").style.backgroundPositionX = backgroundPositionX + "px" ;

    score = score + 1;
    document.getElementById("score").innerHTML = score;
}

boxMarginLeft = 1700;

function createBoxes() {

    for (var i=0; i<=10; i++) {

    

    var box = document.createElement("div");
    box.className = "box";
    document.getElementById("background").appendChild(box);
    box.style.marginLeft = boxMarginLeft + "px";
    box.id = "box" + i;

    // boxMarginLeft = boxMarginLeft + 1000;

    if (i < 5 ) {
        boxMarginLeft = boxMarginLeft + 2000;
    }

    if (i >= 5) {
        boxMarginLeft = boxMarginLeft + 1000;
    }

    }
}

var boxAnimationId = 0;

function boxAnimation(){
    for (var i=0; i<10; i++){
        var box = document.getElementById("box"+i);
        var currentMarginLeft = getComputedStyle(box).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) -35;
        box.style.marginLeft = newMarginLeft+ "px";

        if (newMarginLeft >= -110 & newMarginLeft <= 100) {
            if (boyMargineTop > 300) {
                    clearInterval(boxAnimationId);
        
        
                    clearInterval(runAnimationNumber);
                    runAnimationNumber = -1;
        
                    clearInterval(jumpAnimationNumber);
                    jumpAnimationNumber = -1;
        
                    clearInterval(moveBackgroundAnimationId);
                    moveBackgroundAnimationId = -1;

                    boyDeatdAnimationNmumber = setInterval(boyDeatdAnimation,100);
            }
        }
    }
}

deadImageNumber = 1;
boyDeatdAnimationNmumber = 0;

function boyDeatdAnimation () {

    deadImageNumber = deadImageNumber + 1;

    if (deadImageNumber == 11){
        deadImageNumber = 10;
    }

    boy.src = "resources/Dead ("+ deadImageNumber +").png ";
}

