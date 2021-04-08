canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=100;
car1_height=90;
car1_image="https://postimg.cc/9rqYz9HM";
car1_x=10;
car1_y=10;
car2_width=100;
car2_height=90;
car2_image="https://postimg.cc/9rqYz9HM";
car2_x=10;
car2_y=10;
background_image="mars.jpg";

 
function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;
    car1_imgTag=new Image();
    car1_imgTag.onload=uploadrover;
    car1_imgTag.src=rover_image;
    car2_imgTag=new Image();
    car2_imgTag.onload=uploadrover;
    car2_imgTag.src=rover_image;

}


function uploadcar1() {
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car_width,car1_height)

}
function uploadcar2() {
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car_width,car2_height)

}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
console.log(keyPressed);
if (keyPressed=='38') {
    car1_up();
    console.log("up arrow key");
}

if (keyPressed=='40') {
    car1_down();
    console.log("down arrow key");
}
if (keyPressed=='37') {
    car1_left();
    console.log("left arrow key");
}
if (keyPressed=='39') {
    car1_right();
    console.log("right arrow key");
}
if (keyPressed=='65') {
    car2_a();
    console.log("a arrow key");
}

if (keyPressed=='66') {
    car2_b();
    console.log("b arrow key");
}
if (keyPressed=='67') {
    car2_c();
    console.log("c arrow key");
}
if (keyPressed=='68') {
    car2_d();
    console.log("d arrow key");
}
if (car1x>700){
    console.log("car1 Won");
    document.getElementById('game_status').innerHTML="car 1 won!!"
}
}
function car1_up() {
    if (car1_y>=0){
        car1_y = car1_y-10;
        console.log("When up arrow is pressed,x=" + car1_x +"y=" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
}
}
function car1_down() {
    if (car1_y<=500){
        car1_y = car1_y+10;
        console.log("When down arrow is pressed,x=" + car1_x +"y=" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
}
}
function car1_left() {
    if (car1_x>=0){
        car1_x = car1_x-10;
        console.log("When left arrow is pressed,x=" + car1_x +"y=" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
}
}
function car1_right() {
    if (car1_x<=800){
        car1_x = car1_x+10;
        console.log("When right arrow is pressed,x=" + car1_x +"y=" + car1_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_a() {
    if (car2_y>=0){
        car2_y = car2_y-10;
        console.log("When up arrow is pressed,x=" + car2_x +"y=" + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
}
}
function car2_b() {
    if (car2_y<=500){
        car2_y = car2_y+10;
        console.log("When down arrow is pressed,x=" + car2_x +"y=" + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
}
}
function car2_c() {
    if (car2_x>=0){
        car2_x = car2_x-10;
        console.log("When left arrow is pressed,x=" + car2_x +"y=" + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
}
}
function car1_d() {
    if (car2_x<=800){
        car2_x =car2_x+10;
        console.log("When right arrow is pressed,x=" +car2_x +"y=" + car2_y);
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
