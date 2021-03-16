var canvas = new fabric.Canvas("myCanvas");

width = 30;
height = 30;

player_x = 10;
player_y = 10;

var player_object = "";
var block_image = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        image_object = Img;

        image_object.scaleToWidth(width);
        image_object.scaleToHeight(height);
        image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(image_object);

    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
    {
        console.log("p and shift pressed together");
        width = width + 10;
        height = height + 10;
        document.getElementById("current_width").innerHTML = width;
        document.getElementById("current_height").innerHTML = height;
    }
    if(e.shiftKey && keyPressed == '77')
    {
        console.log("m and shift pressed together");
        width = width - 10;
        height = height - 10;
        document.getElementById("current_width").innerHTML = width;
        document.getElementById("current_height").innerHTML = height;
    }
    if(keyPressed == '38')
    {
        up();
        console.log("up")
    }
    if(keyPressed == '40')
    {
        down();
        console.log("down")
    }
    if(keyPressed == '37')
    {
        left();
        console.log("left")
    }
    if(keyPressed == '39')
    {
        right();
        console.log("right")
    }
    
    if(keyPressed == '70')
    {
        new_image('hulk_face.png');
        console.log("f");
    }
    if(keyPressed == '66')
    {
        new_image('hulk_left_hand.png');
        console.log("b");
    }
    if(keyPressed == '76')
    {
        new_image('hulk_legs.png');
        console.log("l");
    }
    if(keyPressed == '82')
    {
        new_image('hulk_right_hand.png');
        console.log("r");
    }
    if(keyPressed == '72')
    {
        new_image('ironman_left_hand.png');
        console.log("h");
    }
    if(keyPressed == '69')
    {
        new_image('ironman_legs.png');
        console.log("e");
    }
    if(keyPressed == '90')
    {
        new_image('ironman_right_hand.png');
        console.log("z");
    }
    if(keyPressed == '83')
    {
        new_image('spiderman_body.png');
        console.log("s");
    }
    if(keyPressed == '85')
    {
        new_image('spiderman_face.png');
        console.log("u");
    }
    if(keyPressed == '73')
    {
        new_image('spiderman_left_hand.png');
        console.log("i");
    }
    if(keyPressed == '71')
    {
        new_image('spiderman_legs.png');
        console.log("g");
    }
    if(keyPressed == '75')
    {
        new_image('spiderman_right_hand.png');
        console.log("k");
    }
    if(keyPressed == '87')
    {
        new_image('thor_face.png');
        console.log("w");
    }
    if(keyPressed == '77')
    {
        new_image('thor_left_hand.png');
        console.log("m");
    }
    if(keyPressed == '81')
    {
        new_image('thor_right_hand.png');
        console.log("q");
    }
}

function up()
{
    if(player_y >=0)
    {
        player_y = player_y - height;
        console.log("block image height = " + height);
        console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y <= 500)
    {
        player_y = player_y + height;
        console.log("block image height = " + height);
        console.log("When down arrow key is pressed, X =  " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x > 0)
    {
        player_x = player_x - width;
        console.log("block image height = " + width);
        console.log("When left arrow key is pressed, X =  " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x <= 850)
    {
        player_x = player_x + width;
        console.log("block image height = " + width);
        console.log("When right arrow key is pressed, X =  " + player_x + " , Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}
