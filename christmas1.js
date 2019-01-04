const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = 1525;
canvas.height = 732;


const background = new Image();
background.src = 'https://cdnb.artstation.com/p/assets/images/images/008/033/537/large/nastya-friday-platformer-background-2.jpg?1510051661'

const grinchImage = new Image();
grinchImage.src = 'http://www.pngnames.com/files/3/Grinch-Png-File.png';

const santaImage = new Image();
santaImage.src = 'http://pngimg.com/uploads/santa_claus/santa_claus_PNG9980.png'

const evilSnowmanImage = new Image();
evilSnowmanImage.src = 'https://vignette.wikia.nocookie.net/uncle-grandpa/images/0/08/Evil_snowman_3.png/revision/latest?cb=20140325153956'

function random(dig) {
  return Math.floor(Math.random() * dig) + 1;
};

function distance(x1, y1, x2, y2) {
	return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
}

const leftKey = 37;
    const upKey = 38;
    const rightKey = 39;
    const downKey = 40;
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === 39){
        		santa.xDelta += 10;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	santa.xDelta += 0;
            }, false);
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === 37){
        		santa.xDelta -= 10;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	santa.xDelta += 0;
            }, false);
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === 40){
        		santa.yDelta += 10;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	santa.yDelta += 0;
            }, false);
    document.addEventListener('keydown', function(event){
        	if(event.keyCode === 38){
        		santa.yDelta -= 10;
        	}
        	if(santa.x + santa.width === canvas.width){
        		santa.xDelta += 0;
        	}
            }, false);
    document.addEventListener('keyup', function(event){
        	santa.yDelta += 0;
            }, false);

const grinch = function(count, canvasWidth, canvasHeight) {
      const arr = [];
    for(let i = 0; i < count; i++){
    
          arr[arr.length] = {

            x: random(canvasHeight- 180),
            y: random(canvasWidth- 200),
            xDelta: 4, 
            yDelta: 4,
            width: 100,
            height: 120,
            draw: function() {
              context.drawImage(grinchImage, this.x, this.y, this.width, this.height)
              
            },
            update: function() {
            
            this.x += this.xDelta;
            this.y += this.yDelta;
            if (this.x + this.width >= canvas.width) {
					this.xDelta = this.xDelta * -1;
				};
				if (this.x<=0) {
					this.xDelta = this.xDelta * -1;
				};
				if (this.y + this.height >= canvas.height) {
					this.yDelta = this.yDelta * -1;
				};
				if (this.y<=0) {
					this.yDelta = this.yDelta * -1;
				};
   
      		}
        };
       
     }  

     return arr;
};

const evilSnowman = function(count, canvasWidth, canvasHeight) {
      const array = [];
    for(let i = 0; i < count; i++){
    
          array[array.length] = {

            x: random(canvasHeight- 180),
            y: random(canvasWidth- 200),
            xDelta: 4, 
            yDelta: 4,
            width: 100,
            height: 120,
            draw: function() {
              context.drawImage(evilSnowmanImage, this.x, this.y, this.width, this.height)
              
            },
            update: function() {
            
            this.x += this.xDelta;
            this.y += this.yDelta;
            	if (this.x + this.width >= canvas.width) {
					this.xDelta = this.xDelta * -1;
				};
				if (this.x<=0) {
					this.xDelta = this.xDelta * -1;
				};
				if (this.y + this.height >= canvas.height) {
					this.yDelta = this.yDelta * -1;
				};
				if (this.y<=0) {
					this.yDelta = this.yDelta * -1;
				};
   
      		}
        };
       
     }  

     return array;
};

const grinchFinished = grinch(random(7), canvas.width, canvas.height);
const evilSnowmanFinished = evilSnowman(random(5), canvas.width, canvas.height);

const santa = {
		x: 0,
		y: 0,
		xDelta: 0,
		yDelta: 0,
		width: 130,
		height: 180,
		image: santaImage,
		draw: function() {
		context.drawImage(this.image, this.x, this.y, this.width, this.height);
		},
		update: function() {
		this.x = this.xDelta + 1;
		this.y = this.yDelta + 1;
		 for (let i = 0; i < grinchFinished.length; i++) {
              	
              	const d = distance(santa.x + santa.width / 2, santa.y + santa.height / 2,
              		grinchFinished[i].x + grinchFinished[i].width /2, grinchFinished[i].y + grinchFinished[i].height / 2)
              	if (d < santa.width / 2 + grinchFinished[i].width / 2) {
              		santa.dead = true;
              		alert("You Lost");
              	}
                }
         if (this.x + this.width >= canvas.width) {
					this.xDelta = 0;
				};
				
				if (this.y + this.height >= canvas.height) {
					this.yDelta = 0;
				};
				
   

        for (let i = 0; i < evilSnowmanFinished.length; i++) {
              	
              	const d = distance(santa.x + santa.width / 2, santa.y + santa.height / 2,
              		evilSnowmanFinished[i].x + evilSnowmanFinished[i].width /2, evilSnowmanFinished[i].y + evilSnowmanFinished[i].height / 2)
              	if (d < santa.width / 2 + evilSnowmanFinished[i].width / 2) {
              		santa.dead = true;
              		alert("You Lost");
              	}
				}
	}
};

const draw2 = function(array2){  

 for(let i = 0; i < array2.length; i = i+1){     
          grinch(array2[i].draw())       
            
        }         
  }; 

   const update2 =function(array3){
        for(let i = 0; i < array3.length; i++){
          grinch(array3[i].update());
          
            
        }          
      };
const draw3 = function(array4){  

 for(let i = 0; i < array4.length; i = i+1){     
          evilSnowman(array4[i].draw())       
            
        }         
  }; 

   const update3 =function(array5){
        for(let i = 0; i < array5.length; i++){
          evilSnowman(array5[i].update());
          
            
        }          
      };

  function animate() { 
  	context.drawImage(background, 0, 0, canvas.width, canvas.height);  
  	
  	draw2(grinchFinished);  
    update2(grinchFinished);
    draw3(evilSnowmanFinished);  
    update3(evilSnowmanFinished);
    santa.draw();
    santa.update();                      
    requestAnimationFrame(animate);       
  };         
          
  animate();
