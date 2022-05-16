// MY CODE
var game = document.querySelector(".game");
var dana = document.querySelector(".dana");
// var bee = document.querySelector(".bee");
var turnips = document.querySelector(".turnips");
var danaLeft = parseInt(window.getComputedStyle(dana).getPropertyValue("left"));
var danaBottom =  parseInt(window.getComputedStyle(dana).getPropertyValue("bottom"));

var counter = document.querySelector("#score span");
var score = 0;


var danaLeft = 200;

function moveDanaLeft(){
    danaLeft -=20;
    dana.style.left = danaLeft + 'px';
}

function moveDanaRight(){
    danaLeft +=20;
    dana.style.left = danaLeft + 'px';
}

function control(e){
    if (e.key == "ArrowLeft") {
        if (danaLeft > 250){
            moveDanaLeft();
        }
    }
    if (e.key == "ArrowRight") {
        if (danaLeft < 800){
            moveDanaRight();
        }
    }
}

function generateTurnips(){
    var turnipBottom = 470;
    var turnipLeft = Math.floor(Math.random() * 800);
    var turnip = document.createElement('div');
    turnip.setAttribute("class", "turnip");
    turnips.appendChild(turnip);
    function fallDownFruit(){
        if(turnipBottom < danaBottom + 50 && turnipBottom >  danaBottom && turnipLeft > danaLeft - 30 && turnipLeft < danaLeft + 80){
            turnips.removeChild(turnip);
            clearInterval(fallInterval);
            score++;
            counter.innerHTML = score;
        }
        if(turnipBottom < danaBottom){
            alert("GAME OVER! Your score is: " + score);
            clearInterval(fallInterval);
            clearTimeout(turnipTimeOut);
            location.reload();
        }
        turnipBottom-=5;
        turnip.style.bottom = turnipBottom + 'px';
        turnip.style.left = turnipLeft + 'px';
    }
    var fallInterval = setInterval(fallDownFruit, 20);
    var turnipTimeOut = setTimeout(generateTurnips, 2000);
}

generateTurnips();

document.addEventListener("keydown", control);


//EXAMPLE

// $(document).on('mousemove', function (e) {
//     $('#dana')('left', e.pageX);
// });

/*
$(document).on('mousemove', function (e) {
    basket.css('left', e.pageX);
});

function egg_down(egg) {
    egg_current_position = parseInt(egg.css('top'));
    egg.css('top', egg_current_position + speed);
}

function check_egg_hits_floor(egg) {
    if (collision(egg, floor)) {
        show_bulls_eye(egg);
        decrement_life();
        return true;
    }
    return false;
}

function set_egg_to_initial_position(egg) {
    egg.css('top', egg_initial_position);
}

function show_bulls_eye(egg) {
    bullseye_num = egg.attr('data-bullseye');
    $('#bullseye' + bullseye_num).show();
    hide_bulls_eye(bullseye_num);
}

function hide_bulls_eye(bullseye_num) {
    setTimeout(function () {
        $('#bullseye' + bullseye_num).hide();
    }, 800);
}

function decrement_life() {
    life--;
    life_span.text(life);
}

function check_egg_hits_basket(egg) {
    if (collision(egg, basket)) {
        egg_top = parseInt(egg.css('top'));
        if (egg_top < basket_top) {
            update_score();
            return true;
        }
    }
    return false;
}

function update_score() {
    score++;
    if (score % 10 === 0 && speed <= max_speed) {
        speed++;
    }
    score_span.text(score);
    score_1.text(score);
}

function stop_the_game() {
    cancelAnimationFrame(anim_id);
    restart.slideDown();
}

restart.click(function () {
    location.reload();
});

*/