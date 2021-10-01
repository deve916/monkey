function Crocodile() {
    var crocodile = createSprite(1000,Math.round(random(450,550)), 10, 10);
    crocodile.addImage(i_croc);
    crocodile.velocityX = -3;
    crocodile.lifetime = 300;
    crocodile.scale = 0.3;
    crocodileS.add(crocodile);
  }

  function Tiger() {
    var tiger = createSprite(1000,Math.round(random(450,550)), 10, 10);
   tiger.addImage(i_tiger);
   tiger.velocityX = -3;
   tiger.lifetime = 300;
   tiger.scale = 0.3;
  tigerS.add(tiger);
  }
 