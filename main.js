canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
greencar_width=90;
greencar_height=150;
greencar_x=15;
greencar_y=320;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;

    greencar_imgtag=new Image();
    greencar_imgtag.onload=uploadGreencar;
    greencar_imgtag.src=greencar_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadGreencar(){
    ctx.drawImage(greencar_imgtag,greencar_x,greencar_y,greencar_width,greencar_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode
    console.log(keypressed);
    if(keypressed=='38'){
        up();
    }
    if(keypressed=='40'){
        down();
    }
    if(keypressed=='37'){
        left();
    }
    if(keypressed=='39'){
        right();
    }
}
function up(){
    if(greencar_y>=0){
        greencar_y=greencar_y-10
        uploadBackground();
        uploadGreencar();
    }
}
function down(){
    if(greencar_y<=500){
        greencar_y=greencar_y+10
        uploadBackground();
        uploadGreencar();
    }
}
function left(){
    if(greencar_x>=0){
        greencar_x=greencar_x-10
        uploadBackground();
        uploadGreencar();
    }
}
function right(){
    if(greencar_x<=700){
        greencar_x=greencar_x+10
        uploadBackground();
        uploadGreencar();
    }
}