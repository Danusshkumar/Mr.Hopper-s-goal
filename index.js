    /*Vote me and don't forget to leave your feedback and scores in Tips and Thanks
    - Danusshkumar*/
    var level1Toughness = 1;
    var level2Toughness = 0.8;
    var level3Toughness = 0.8;
    var stateTime1 = 0;
    var stateTime2 = 0;
    var stateTime3 = 0;
    var gameState = 'introAnimation';
    var universalTime = 0;
    var level1Time = 0;
    var level2Time = 0;
    var level3Time = 0;
    var pinkEllipseY = 0;
    var txtJS1 = 'This game is programmed in "JavaScript';
    var txtJS2 =  'and Processing JavaScript library"';
    var triangle1X = -100;
    var triangle1Y = 183;
    var triangle2X = 401;
    var triangle2Y = 183;
    var txtFont = createFont('serif');
    var triangleFont = createFont('sans-serif');
    var animationFont = createFont('cursive');
    var presentFont = createFont('monospace');
    var triangleSize = 0;
    var animationTime = 0;
    var triangleTime = 0;
    var txtTime = 0;
    var pinkball = function() {
        background(255, 158, 250);
    noStroke();
    fill(255, 110, 250);
    ellipse(102,174-pinkEllipseY,20,20);
    ellipse(328,224-pinkEllipseY,20,20);
    ellipse(165,251-pinkEllipseY,20,20);
    ellipse(241,393-pinkEllipseY,20,20);
    ellipse(359,165-pinkEllipseY,20,20);
    ellipse(7,294-pinkEllipseY,20,20);
    ellipse(241,113-pinkEllipseY,20,20);
    pinkEllipseY+=0.15;
    };
    var otherShapes = function(){
    fill(255, 184, 234,193);
    rotate(20);
    rect(105,14,104,174,20);
    rotate(-10);
    rect(348,216,63,80,20);
    rotate(-10);
    rect(335,109,52,20,20);
    ellipse(77,334,50,50);
    };
    var txt = function(){
        txtTime+=1;
        if(txtTime>=0){
        fill(0, 0, 0);
        textFont(txtFont);
        textSize(22);
        text(txtJS1,21,50);
        text(txtJS2,53,80);
        }
    };
    var triangles = function(){
        stroke(0, 0, 0);
        noFill();
        triangle(triangle1X,triangle1Y+50,triangle1X+80,triangle1Y+50,triangle1X+40,triangle1Y);
        triangle(triangle2X,triangle2Y,triangle2X+80,triangle2Y,triangle2X+40,triangle2Y+50);
        triangle1X+=1;
        triangle2X-=1;
        if(triangle1X > 128){
            triangle1X-=1;
        }
        if(triangle2X<173){
            triangle2X+=1;
        }
    };
    var triangleText = function(){triangleTime+=1;
        if(triangleTime>250){
        fill(0, 0, 0);
        textMode(CENTER);
        textFont(triangleFont);
        triangleSize+=1;
        if(triangleSize>29){triangleSize = 29;}
        textSize(triangleSize);
        text('M',155,227);
        text('D',200,213);
        }};
    var animation = function(){
        animationTime+=1;
        if(animationTime>300){
        fill(255, 0, 196);
        textFont(animationFont);
        textSize(81);
        text('a',100,282);
        textSize(31);
        if(animationTime>320){
        text('n',142,274);}
        if(animationTime>340){
        text('i',159,274);}
        if(animationTime>360){
        text('m',167,274);}
        if(animationTime>380){
        text('a',192,274);}
        if(animationTime>400){
        text('t',207,274);}
        if(animationTime>420){
        text('i',221,274);}
        if(animationTime>440){
        text('o',228,274);}
        if(animationTime>460){
        text('n',244,274);}
        if(animationTime>480){
        text('s',261,274);}
        }
    };
    var presents = function(){
        if(triangleTime>=520){
        var f1 = createFont('monospace');
        textFont(f1);
        fill(0, 0, 0);
        text('presents...',136,335);
        }
        };
        var variables = [400,-340,650,990,-420,0,91,321,0.1,-0.1,0];
    var backgroundPatterns = function(){
        noStroke();
        fill(43, 43, 43,70);
        triangle(variables[6],73,variables[6]-111,21,variables[6]-113,276);
        variables[6]+=variables[8];
        if(variables[6]>400){
        variables[8] = -0.1;
        }
        if(variables[6]<0){
            variables[8] = 0.1;
        }
        //triangleB//
        fill(255, 255, 255,120);
        triangle(variables[7],159,variables[7]+124,100,variables[7]+125,376);
        variables[7]+=variables[9];
        if(variables[7]<0){
            variables[9] = 0.1;
            }
            if(variables[7]>400){
                variables[9] = -0.1;
                }//triangleW//
        };//backgroundPatterns//
    var programmer  = function() {
            if(variables[0]<114){fill(150, 148, 148);
        rect(variables[0],47,179,46,10);
        fill(255, 240, 240);
        textSize(20);
        var f = createFont('cursive');
        textFont(f);
        text('Programmer',variables[0]+39,75);
        variables[0]+=3.5;
        }
        fill(150, 148, 148);
        rect(variables[0],47,179,46,10);
        fill(255, 240, 240);
        textSize(20);
        var f = createFont('cursive');
        textFont(f);
        text('Programmer',variables[0]+39,75);
        variables[0]+=-3.5;
        };//programmer//
    var name = function(){
            if(variables[1]>94){
        fill(150, 148, 148);
        rect(variables[1],107,218,51,10);
        fill(255, 240, 240);
        textSize(20);
        var f = createFont('cursive');
        textFont(f);
        text('Danusshkumar(M.D)',variables[1]+17,141);
        variables[1]+=-3.5;
        }
        fill(150, 148, 148);
        rect(variables[1],107,218,51,10);
        fill(255, 240, 240);
        textSize(20);
        var f = createFont('cursive');
        textFont(f);
        text('Danusshkumar(M.D)',variables[1]+17,141);
        variables[1]+=3.5;
    };//name//
    var gives = function(){
            if(variables[2]<148){fill(150, 148, 148);
        rect(variables[2],170,113,30,10);
        fill(255, 240, 240);
        textSize(20);
        var f = createFont('cursive');
        textFont(f);
        text('presents',variables[2]+17,190);
        variables[2]+=3.5;       
            }
        fill(150, 148, 148);
        rect(variables[2],170,113,30,10);
        fill(255, 240, 240);
        textSize(20);
        var f = createFont('cursive');
        textFont(f);
        text('gives',variables[2]+30,190);
        variables[2]+=-3.5;
    };//presence//
    var start = function(){
            if(variables[3]<271){
        fill(41,255,248);
        rect(117,variables[3],173,64,10);
        fill(0,0,0);
        textSize(48);
        var f = createFont('fantasy');
        textFont(f);
        text('START',144,variables[3]+53);
        variables[3]+=4.5;
            }
        fill(41, 255, 248);
        rect(117,variables[3],173,64,10);
        fill(0,0,0);
        textSize(48);
        var f = createFont('fantasy');
        textFont(f);
        text('START',144,variables[3]+53);
        variables[3]+=-3.5;
        //startClicked Function
        if(mouseIsPressed&&(mouseX>117&&mouseX<290)&&(mouseY>271&&mouseY<335)){
        fill(0,255,0);
        rect(117,271,173,64,10);
        fill(0,0,0);
        textSize(48);
        var f = createFont('fantasy');
        textFont(f);
        text('START',144,324);
        }
    };
    var gameName = function(){
            if(variables[4]>251){
                variables[4]+=-3.5;
            }
        fill(255, 255, 255);
        text("Mr.Hopper's goal",39,variables[4]);
    variables[4]+=3.5;
    };
    var instruction = function(){
            variables[10]+=3.5;
            if(variables[10]>930){
        fill(0, 0, 0);
        textSize(30);
        textFont('serif');
        text('Click START to play the game!!!',17,379);
            }
            
        };
        var defaultBg1 = 91;
    var defaultBg2 = 321;
    var defaultBg3 = 0.1;
    var defaultBg4 = -0.1;
    var goR = 150;
    var goG = 148;
    var goB = 148;
    var goFont = createFont('cursive');
    var defaultBgPatterns = function(){
        background(102,102,102);
        noStroke();
        fill(43,43,43,70);
        triangle(defaultBg1,73,defaultBg1-111,21,defaultBg1-113,276);
        defaultBg1+=defaultBg3;
        if(defaultBg1>400){
        defaultBg3 = -0.1;
        }
        if(defaultBg1<0){
            defaultBg3 = 0.1;
        }
        //triangleB//
        fill(255, 255, 255,120);
        triangle(defaultBg2,159,defaultBg2+124,100,defaultBg2+125,376);
        defaultBg2+=defaultBg4;
        if(defaultBg2<0){
            defaultBg4 = 0.1;
            }
            if(defaultBg2>400){
                defaultBg4 = -0.1;
                }//triangleW//
        };
    var instructions = function(){
        fill(255, 255, 255);
        textSize(40);
        var instructionsFont1 = createFont('SimSun');
        textFont(instructionsFont1);
        text('INSTRUCTIONS',87,42);
        textSize(18);
        text('1.Press space button to up the hopper and',10,70);
        text('release the space  button to down the  ',26,90);
        text('hopper',27,110);
        text("2.Hopper's aim is to buy the great fort, ",10,130);
        text('but he has no money.',26,150);
        text('3.Help him to make some money.there will be',10,170);
        text('coins in the highway road.',26,190);
        text('4.It is the way to reach the great fort.',10,210);
        text('Guide him to catch 130 coins which is ',26,230);
        text('enough to buy the great fort.',26,250);
        text('5.There are three levels in this game.',10,270);
        text('You must catch 50,40,40 coins in level ',26,290);
        text('1,2,3 respectively to win the',26,310);
        textSize(54);
        text('Game...',20,359);
    };
    var go = function(){
        noStroke();
        fill(goR,goG,goB);
        if(mouseIsPressed&&(mouseX>209&&mouseX<388)&&(mouseY>317&&mouseY<380)){
            goR = 0;
            goG = 255;
            goB = 0;
        }
        rect(209,317,179,70,20);
        textFont(goFont);
        fill(255, 255, 255);
        textSize(65);
        text('Go',225,375);
        rect(310,343,54,19,5);
        triangle(351,375,351,329,385,354);
        
    };
    var speed1;
    var speed2;
    var spacing;
    var greeting1 = function(){
        fill(84, 84, 84);
        textSize(49);
        textFont(createFont('gabriola'));
        text('YOU WIN !!!',109,80);
        fill(0, 0, 0);
        textSize(28);
        text('Congratulations, you are promoted',46,135);
        text(' to the next level',133,176);
    };
    var roadBorderX11 = [];
    for(var roadBorderX21 = 10;roadBorderX21<400;roadBorderX21++){
        roadBorderX11.push(roadBorderX21);
    }
    var roadLineX11 = [];
    for(var roadLineX21 = 10;roadLineX21<400;roadLineX21++){
        roadLineX11.push(roadLineX21);
    }
    var level1Background = function(){
    noStroke();
    fill(102, 102, 102);
    rect(0,340,400,9);
    for(var roadBorderX21 = 10;roadBorderX21<roadBorderX11.length;roadBorderX21+=50){
        rect(roadBorderX11[roadBorderX21],348,7,19,20);
        roadBorderX11[roadBorderX21]-=speed1;
        if(roadBorderX11[roadBorderX21]<=-7){
            roadBorderX11[roadBorderX21] = 400;
        }
    }
    fill(0, 0, 0);
    rect(0,360,408,40);
    for(roadLineX21 = 10;roadLineX21<400;roadLineX21+=54){
        noStroke();
        fill(255, 255, 255);
        rect(roadLineX11[roadLineX21],379,33,3);
        roadLineX11[roadLineX21]-=speed1;
        if(roadLineX11[roadLineX21]<=-33){
            roadLineX11[roadLineX21]=400;
        }
    }
    };
    var Hopper1 = function(x,y){
        this.x = x;
        this.y = y;
        this.img = getImage("creatures/Hopper-Happy");
        this.coinNo1 = 0;
        };
    var hopper1 = new Hopper1(187,350);
    var coinsText1 = function(){
        var f2 = createFont('cambria');
        textFont(f2);
        fill(0, 0, 0);
        textSize(20);
        text('Coins:',5,27);
        text(hopper1.coinNo1,81,28);
        stroke(255, 246, 143);
        fill(255, 227, 15);
        ellipse(69,21,17,17);
        fill(0, 0, 0);
        var rsTxt = createFont('impact');
        textFont(rsTxt);
        textSize(13);
        text('₹1',62,26);
        };
    var Coin1 = function(x,y){
        this.x = x;
        this.y = y;
        this.coinFormula = function(){
        ellipseMode(CENTER);
        strokeWeight(2);
        stroke(255, 246, 143);
        fill(255, 227, 15);
        ellipse(this.x,this.y,17,17);
        fill(0, 0, 0);
        textSize(13);
        var rsTxt = createFont('impact');
        textFont(rsTxt);
        text('₹1',this.x-7,this.y+5);
        };
    };
    Coin1.prototype.draw = function() {
        this.coinFormula();
    };
    var coins1 = [] ;
    for(var i= 0;i<50;i++){
        coins1.push(new Coin1(400+(i*spacing),random(17,327)));
    }
    Hopper1.prototype.draw = function() {
        fill(255, 0, 0);
        this.y = constrain(this.y,0,350); 
        image(this.img,this.x,this.y,40,40); 
    };
    Hopper1.prototype.up = function(){
        this.img = getImage("creatures/Hopper-Jumping");
        this.y-=speed2;
    };
    Hopper1.prototype.down = function(){
        this.img = getImage("creatures/Hopper-Happy");
        this.y+=speed2;
    };
    Hopper1.prototype.grab = function(coinGrab){
        if(coinGrab.x>=this.x && coinGrab.x<=this.x+40 && coinGrab.y>=this.y &&coinGrab.y<=this.y+40){
            coinGrab.y=-400;
            this.coinNo1++;
        }
    };
    var roadBorderX12 = [];
    for(var roadBorderX22 = 10;roadBorderX22<400;roadBorderX22++){
        roadBorderX12.push(roadBorderX22);
    }
    var roadLineX12 = [];
    for(var roadLineX22 = 10;roadLineX22<400;roadLineX22++){
        roadLineX12.push(roadLineX22);
    }
    var level2Background = function(){
    noStroke();
    fill(102, 102, 102);
    rect(0,340,400,9);
    for(var roadBorderX22 = 10;roadBorderX22<roadBorderX12.length;roadBorderX22+=50){
        rect(roadBorderX12[roadBorderX22],348,7,19,20);
        roadBorderX12[roadBorderX22]-=speed1;
        if(roadBorderX12[roadBorderX22]<=-7){
            roadBorderX12[roadBorderX22] = 400;
        }
    }
    fill(0, 0, 0);
    rect(0,360,408,40);
    for(roadLineX22 = 10;roadLineX22<400;roadLineX22+=54){
        noStroke();
        fill(255, 255, 255);
        rect(roadLineX12[roadLineX22],379,33,3);
        roadLineX12[roadLineX22]-=speed1;
        if(roadLineX12[roadLineX22]<=-33){
            roadLineX12[roadLineX22]=400;
        }
    }
    };
    var Hopper2 = function(x,y){
        this.x = x;
        this.y = y;
        this.img = getImage("creatures/Hopper-Happy");
        this.coinNo2 = 0;
        };
    var hopper2= new Hopper2(187,350);
    var coinsText2 = function(){
        var f2 = createFont('cambria');
        textFont(f2);
        fill(0, 0, 0);
        textSize(20);
        text('Coins:',5,27);
        text(hopper2.coinNo2,81,28);
        stroke(255, 246, 143);
        fill(255, 227, 15);
        ellipse(69,21,17,17);
        fill(0, 0, 0);
        var rsTxt = createFont('impact');
        textFont(rsTxt);
        textSize(13);
        text('₹1',62,26);
        };
    var Coin2 = function(x,y){
        this.x = x;
        this.y = y;
        this.coinFormula = function(){
        ellipseMode(CENTER);
        stroke(255, 246, 143);
        strokeWeight(2);
        fill(255, 227, 15);
        ellipse(this.x,this.y,17,17);
        fill(0, 0, 0);
        textSize(13);
        var rsTxt = createFont('impact');
        textFont(rsTxt);
        text('₹1',this.x-7,this.y+5);
        };
    };
    Coin2.prototype.draw = function() {
        this.coinFormula();
    };
    var coins2 = [] ;
    for(var i= 0;i<50;i++){
        coins2.push(new Coin2(400+(i*50),random(17,327)));
    }
    Hopper2.prototype.draw = function() {
        fill(255, 0, 0);
        this.y = constrain(this.y,0,350); 
        image(this.img,this.x,this.y,40,40); 
    };
    Hopper2.prototype.up = function(){
        this.img = getImage("creatures/Hopper-Jumping");
        this.y-=speed2;
    };
    Hopper2.prototype.down = function(){
        this.img = getImage("creatures/Hopper-Happy");
        this.y+=speed2;
    };
    Hopper2.prototype.grab = function(coinGrab){
        if(coinGrab.x>=this.x && coinGrab.x<=this.x+40 && coinGrab.y>=this.y &&coinGrab.y<=this.y+40){
            coinGrab.y=-400;
            this.coinNo2++;
        }
    };
    var roadBorderX13 = [];
    for(var roadBorderX23 = 10;roadBorderX23<400;roadBorderX23++){
        roadBorderX13.push(roadBorderX23);
    }
    var roadLineX13 = [];
    for(var roadLineX23 = 10;roadLineX23<400;roadLineX23++){
        roadLineX13.push(roadLineX23);
    }
    var level3Background = function(){
    noStroke();
    fill(102, 102, 102);
    rect(0,340,400,9);
    for(var roadBorderX23 = 10;roadBorderX23<roadBorderX13.length;roadBorderX23+=50){
        rect(roadBorderX13[roadBorderX23],348,7,19,20);
        roadBorderX13[roadBorderX23]-=speed1;
        if(roadBorderX13[roadBorderX23]<=-7){
            roadBorderX13[roadBorderX23] = 400;
        }
    }
    fill(0, 0, 0);
    rect(0,360,408,40);
    for(roadLineX23 = 10;roadLineX23<400;roadLineX23+=54){
        noStroke();
        fill(255, 255, 255);
        rect(roadLineX13[roadLineX23],379,33,3);
        roadLineX13[roadLineX23]-=speed1;
        if(roadLineX13[roadLineX23]<=-33){
            roadLineX13[roadLineX23]=400;
        }
    }
    };
    var Hopper3 = function(x,y){
        this.x = x;
        this.y = y;
        this.img = getImage("creatures/Hopper-Happy");
        this.coinNo3 = 0;
        };
    var hopper3 = new Hopper3(187,350);
    var coinsText3 = function(){
        var f2 = createFont('cambria');
        textFont(f2);
        fill(0, 0, 0);
        textSize(20);
        text('Coins:',5,27);
        text(hopper3.coinNo3,81,28);
        stroke(255, 246, 143);
        fill(255, 227, 15);
        ellipse(69,21,17,17);
        fill(0, 0, 0);
        var rsTxt = createFont('impact');
        textFont(rsTxt);
        textSize(13);
        text('₹1',62,26);
        };
    var Coin3 = function(x,y){
        this.x = x;
        this.y = y;
        this.coinFormula = function(){
        ellipseMode(CENTER);
        stroke(255, 246, 143);
        strokeWeight(2);
        fill(255, 227, 15);
        ellipse(this.x,this.y,17,17);
        fill(0, 0, 0);
        textSize(13);
        var rsTxt = createFont('impact');
        textFont(rsTxt);
        text('₹1',this.x-7,this.y+5);
        };
    };
    Coin3.prototype.draw = function() {
        this.coinFormula();
    };
    var coins3 = [] ;
    for(var i= 0;i<50;i++){
        coins3.push(new Coin3(400+(i*70),random(17,327)));
    }
    Hopper3.prototype.draw = function() {
        fill(255, 0, 0);
        this.y = constrain(this.y,0,350); 
        image(this.img,this.x,this.y,40,40); 
    };
    Hopper3.prototype.up = function(){
        this.img = getImage("creatures/Hopper-Jumping");
        this.y-=speed2;
    };
    Hopper3.prototype.down = function(){
        this.img = getImage("creatures/Hopper-Happy");
        this.y+=speed2;
    };
    Hopper3.prototype.grab = function(coinGrab){
        if(coinGrab.x>=this.x && coinGrab.x<=this.x+40 && coinGrab.y>=this.y &&coinGrab.y<=this.y+40){
            coinGrab.y=-400;
            this.coinNo3++;
        }
    };
    var moonY = 130;
    var sunY = 650;
    var daynightTime = 0;
    var congratsFont = createFont('courier');
    var balloonY = 703;
    var nightAnimation = function(){
        background(9, 0, 66);
        fill(255, 255, 255);
        ellipse(288,moonY,70,70);
        moonY+=2;
    };
    var dayAnimation = function(){
    background(143, 234, 255);
    noStroke();
    fill(255, 149, 0);
    ellipse(288,sunY,80,80);
    sunY-=2;
    if(sunY<130){sunY = 130;}

    };
    var congrats = function(){
        fill(255, 255, 255);
        textFont(congratsFont);
        textSize(30);
        text('Congratulations...',43,250);
        text('A programme by ',73,294);
        text('Danusshkumar M',73,335);
    };
    var balloonAnimation = function(){    image(getImage("creatures/Hopper-Jumping"),113,balloonY+203);
        for(var rope1 =36;rope1<221;rope1+=64){
        stroke(87, 87, 87);
        line(rope1,balloonY+4,117,balloonY+264);
        }
        for(var rope2 = 201;rope2<389;rope2+=64){
        line(rope2,balloonY+79,230,balloonY+283);
        }
        for(var numBalloon1 = 36;numBalloon1<221;numBalloon1+=64){
        fill(242, 0, 255);
        ellipse(numBalloon1,balloonY,53,81);
        }
        fill(0, 0, 0);
        textSize(51);
        text('Y',20,balloonY+21);
        text('O',79,balloonY+21);
        text('U',147,balloonY+21);
        for(var numBalloon2 = 201;numBalloon2<389;numBalloon2+=64){
        fill(242, 0, 255);
        ellipse(numBalloon2,balloonY+74,53,81);
        }
        fill(0,0,0);
        textSize(51);
        text('W',177,balloonY+94);
        text('O',245,balloonY+94);
        text('N',310,balloonY+94);
    };
    var moonY = 130;
    var sunY = 650;
    var daynightTime = 0;
    var congratsFont = createFont('courier');
    var balloonY = 703;
    var ra = 9;
    var ga = 0;
    var ba = 66;
    var nightAnimation = function(){
        background(9, 0, 66);
        fill(255, 255, 255);
        ellipse(288,moonY,70,70);
        moonY+=2;
    };
    var dayAnimation = function(){
    background(143, 234, 255);
    noStroke();
    fill(255, 149, 0);
    ellipse(288,sunY,80,80);
    sunY-=2;
    if(sunY<102){sunY = 102;}

    };
    var congrats = function(){
        fill(255, 255, 255);
        textFont(congratsFont);
        textSize(30);
        text('Congratulations...',43,86);
        text('A programme by ',73,294);
        text('Danusshkumar M',73,335);
    };
    var balloonAnimation = function(){    image(getImage("creatures/Hopper-Jumping"),113,balloonY+203);
        for(var rope1 =36;rope1<221;rope1+=64){
        stroke(87, 87, 87);
        line(rope1,balloonY+4,117,balloonY+264);
        }
        for(var rope2 = 201;rope2<389;rope2+=64){
        line(rope2,balloonY+79,230,balloonY+283);
        }
        for(var numBalloon1 = 36;numBalloon1<221;numBalloon1+=64){
        noStroke();
        fill(242, 0, 255);
        ellipse(numBalloon1,balloonY,53,81);
        }
        fill(0, 0, 0);
        textSize(51);
        text('Y',20,balloonY+21);
        text('O',79,balloonY+21);
        text('U',147,balloonY+21);
        for(var numBalloon2 = 201;numBalloon2<389;numBalloon2+=64){
        noStroke();
        fill(242, 0, 255);
        ellipse(numBalloon2,balloonY+74,53,81);
        }
        fill(0,0,0);
        textSize(51);
        text('W',177,balloonY+94);
        text('O',245,balloonY+94);
        text('N',310,balloonY+94);};
    var fort = function(){
    noStroke();
    fill(140, 140, 140);
    rect(0,223,400,232);
    for(var i1= -15;i1<400;i1+=29){
        for(var i2=240;i2<392;i2+=30){
    fill(184, 34, 0);
    rect(i1,i2,28,13,1.5); 
        }
    }
    for(var i3 = -1;i3<400;i3+=29){
        for(var i4 = 225;i4<392;i4+=30){
            fill(184,34,0);
            rect(i3,i4,28,13,1.5);
        }
    }
        for(var i= 22;i<400;i+=79){
    fill(ra,ga,ba);
    rect(i,223,40,30);
    }
    stroke(140, 140, 140);
    strokeWeight(2);
    fill(54, 30, 16);
    rect(19,356,122,106,20);
    rect(257,356,122,106,20);
    noStroke();
    fill(120, 120, 120);
    rect(200,144,5,110);
    fill(224, 224, 224);
    rect(205,144,55,36);
    image((getImage("creatures/Hopper-Jumping")),216,147,30,30);
    };
    var restartX = 109; 
    var restartY = 295;
    var gFont = createFont('monospace');
    var ggFont = createFont('consolas');
    var gameoverTime = 0;
    var gameoverProgrammes = function(){
        gameoverTime+=2;
        if(gameoverTime>120){
        textFont(gFont);
        fill(255, 240, 240);
        textSize(44);
        text('Game over!',83,188);
        }
        if(gameoverTime>150){
                fill(255, 0, 0);
        textFont(ggFont);
        textSize(23);
    text('Due to some technical bugs,',45,238);
    text('buttons are not available',55,275);
    fill(143, 143, 143);
    text('press',40,317);
    text('to try again',223,319);
    fill(255);
    stroke(0);
    strokeWeight(0.7);
    rect(restartX,restartY,111,34,3);
    textSize(18);
    fill(0, 75, 224);
    text('Restart',restartX+39,restartY+23);
    noFill();
    strokeWeight(2);
    stroke(0, 75, 224);
    arc(restartX+21,restartY+21,20,20,24,194);
    pushMatrix();
    rotate(-180);
    arc(-restartX-21,-restartY-18,20,20,32,180);
    popMatrix();
    line(restartX+12,restartY+7,restartX+12,restartY+12);
    line(restartX+12,restartY+12,restartX+17,restartY+13);
    line(restartX+30,restartY+23,restartX+25,restartY+25);
    line(restartX+30,restartY+23,restartX+32,restartY+28);
        }
    };
    var drawIntro = function(){
        pinkball();
        otherShapes();
        triangles();
        animation();
        triangleText();
        txt();
        presents();
    };
    var drawInterface = function(){
        background(102, 102,102);
        backgroundPatterns();
        programmer();
        name();
        gives();
        start();
        gameName();
        instruction();
    };
    var drawInstruction = function(){
        defaultBgPatterns();
        instructions();
        go();
    };
    var drawLevel1 = function(){
        speed1 = 1;
        speed2 = 5;
        spacing = 50;
        background(189, 189, 189);
        level1Background();
        textFont(createFont('cambria'));
        fill(0);
        textSize(20);
        text('Level - 1',324,29);
        coinsText1();
        for(i = 0;i<coins1.length;i++){
            coins1[i].draw();
            hopper1.grab(coins1[i]);
            coins1[i].x-=speed1;     
        }
        if(hopper1.coinNo1/coins1.length === level1Toughness){
    greeting1();
        }
        if(keyIsPressed&&key.code===32)
        {hopper1.up();
        }
        else {hopper1.down();
        }
        hopper1.draw();
    };
    var drawLevel2 = function(){
        speed1 = 2;
        speed2 = 7;
        spacing = 50;
        background(189, 189, 189);
        level2Background();
        textFont(createFont('cambria'));
        fill(0);
        textSize(20);
        text('Level - 2',324,29);
        coinsText2();
        for(i = 0;i<coins2.length;i++){
            coins2[i].draw();
            hopper2.grab(coins2[i]);
            coins2[i].x-=speed1;     
        }
        if(hopper2.coinNo2/coins2.length >= level2Toughness){
        fill(84, 84, 84);
        textSize(49);
        textFont(createFont('gabriola'));
        text('YOU WIN !!!',109,80);
        fill(0, 0, 0);
        textSize(28);
        text('Congratulations, you are promoted',46,135);
        text(' to the next level',133,176);
        }
        if(keyIsPressed&&key.code===32)
        {hopper2.up();
        }
        else {hopper2.down();
        }
        hopper2.draw();
    };
    var drawLevel3 = function(){
        speed1 = 3;
        speed2 = 11;
        spacing = 70;
        background(189, 189, 189);
        level3Background();
        textFont(createFont('cambria'));
        fill(0);
        textSize(20);
        text('Level - 3',324,29);
        coinsText3();
        for(i = 0;i<coins3.length;i++){
            coins3[i].draw();
            hopper3.grab(coins3[i]);
            coins3[i].x-=speed1;     
        }
        if(hopper3.coinNo3/coins3.length >= level3Toughness){
                    stroke(255, 246, 143);
        fill(255, 227, 15);
        ellipse(192,187,47,47);
        fill(0, 0, 0);
        textFont(createFont('impact'));
        textSize(32);
        text('₹1',176,200);
        textSize(39);
        textFont(createFont('cambria'));
        text('130',217,199);
        textSize(32);
        text('is enough for buy',97,241);
        text(' the great fort',113,278);
    }
        if(keyIsPressed&&key.code===32)
        {hopper3.up();
        }
        else {hopper3.down();
        }
        hopper3.draw();
    };
    var drawEndAnimation = function(){
        daynightTime+=1;
        nightAnimation();
        if(daynightTime>180){
            ra = 143;
            ga = 234;
            ba = 255;
        }
        if(daynightTime>180){
            dayAnimation();
        }
            fort();
        balloonY-=0.5;
        if(daynightTime>550){
        balloonAnimation();
        }
        if(daynightTime>2200){
        congrats();
        }

    };
    var gameOver = function(){
        background(102,102,102);
        defaultBgPatterns();
        gameoverProgrammes();
    };
    draw = function() {
        universalTime++;
    if(gameState === 'level1'){
        stateTime1+=0.1;
    }
    if(gameState === 'level2'){
        stateTime2+=0.1;
    }
    if(gameState === 'level3'){
        stateTime3+=0.1;
    }
    switch(gameState){
        case'G.O':
            gameOver();
            if(mouseIsPressed&&(mouseX>111&&mouseX<295)&&(mouseY>237&&mouseY<299)){
                gameState = 'level1';
            }
            if(mouseIsPressed&&(mouseX>111&&mouseX<295)&&(mouseY>317&&mouseY<379)){
                gameState = 'interface';
            }
        break;
        case'introAnimation':
        drawIntro();
        if(universalTime>600){
            gameState = 'interface';
        }
        break;
        case'interface':
            drawInterface();
            if(mouseIsPressed && (mouseX>117&&mouseX<290)&&(mouseY>271&&mouseY<335)){
                gameState = 'instructions';
            }
        break;
        case'instructions':
            drawInstruction();
            if(mouseIsPressed&&(mouseX>209&&mouseX<388)&&(mouseY>317&&mouseY<380)){
                gameState = 'level1';
            }
        break;
        case'level1':
            drawLevel1();
            if(hopper1.coinNo1/coins1.length >= level1Toughness){
                level1Time++;
            }
            if(level1Time>350){
            gameState = 'level2';  
            }
            if(mouseIsPressed&&(mouseX>370&&mouseX<396)&&(mouseY>4&&mouseY<30)){
            }
            if((stateTime1 >= 300)&&(hopper1.coinNo1/coins1.length < level1Toughness)){
                gameState = 'G.O';
            }
        break;
        case'level2':
            drawLevel2();
            if(hopper2.coinNo2/coins2.length >=level2Toughness){
                level2Time++;
            }
            if(level2Time>350){
            gameState = 'level3';  
            }
            if(mouseIsPressed&&(mouseX>370&&mouseX<396)&&(mouseY>4&&mouseY<30)){
            }
            if((stateTime2 >=150)&&(hopper2.coinNo2/coins2.length < level2Toughness)){
                gameState = 'G.O';
            }
        break;
        case'level3':
            drawLevel3();
            if(hopper3.coinNo3/coins3.length >=level3Toughness){
                level3Time++;
            }
            if(level3Time>350){
            gameState = 'endAnimation';  
            }
            if(mouseIsPressed&&(mouseX>370&&mouseX<396)&&(mouseY>4&&mouseY<30)){
            }
            if((stateTime3 >=140)&&(hopper3.coinNo3/coins3.length < level3Toughness)){
                gameState = 'G.O';
            }
        break;
        case'endAnimation':
            drawEndAnimation();
        break;
    }
    };












