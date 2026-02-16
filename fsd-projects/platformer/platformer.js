$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
      toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(0,150,1200,10, "white");
    createPlatform(1200,150,10,300, "white");
    createPlatform(200,550,1200,10, "White");
    createPlatform(200,250,10,300, "White");
    createPlatform(300,450,900,10, "White");
    createPlatform(200,350,800,10, "White");
    createPlatform(200,250,350,10, "White");
    createPlatform(700,250,500,10, "White");
    createPlatform(0,700,1400,10, "White");
    



    // TODO 3 - Create Collectables
    createCollectable("diamond",100,100);
    createCollectable("diamond",300,100);
    createCollectable("diamond",500,100);
    createCollectable("diamond",700,100);
    createCollectable("diamond",900,100);
    createCollectable("diamond",1100,100);
    createCollectable("diamond",1300,100);
    createCollectable("grace",1300,200);
    createCollectable("grace",1300,300);
    createCollectable("grace",1300,400);
    createCollectable("grace",1300,500);
    createCollectable("grace",1000,500);
    createCollectable("grace",700,500);
    createCollectable("grace",400,500);
    createCollectable("steve",1000,400);
    createCollectable("steve",800,400);
    createCollectable("steve",600,400);
    createCollectable("steve",400,400);
    createCollectable("max",800,300);
    createCollectable("max",600,300);
    createCollectable("max",400,300);
    createCollectable("kennedi",1100,200);
    createCollectable("database",1350,650)
    



    
    // TODO 4 - Create Cannons
    //createCannon('right', 200,1500);
    createCannon('top',200,1500);
    createCannon('top',400,1500);
    createCannon('top',600,1500);
    createCannon('top',800,1500);
    createCannon('top',1000,1500);
    createCannon('top',1200,1500);
    //createCannon('right',415,8000);
    createCannon('right', 750, 400);
    createCannon('left',0,2500,20,10,);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
