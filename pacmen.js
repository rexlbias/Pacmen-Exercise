// This array holds all the pacmen
    const pacMen = []; 

// This function returns an object with random values
    function setToRandom(scale) {
        return {
            x: Math.random() * scale,
            y: Math.random() * scale,
        };
    }

    // Factory to make a PacMan at a random position with random velocity
    function makePac() {
        
        let velocity = setToRandom(10); 
        let position = setToRandom(200);

        // Add image to div id = game
        let game = document.getElementById("game");
        let newimg = document.createElement("img");
        newimg.style.position = "absolute";
        newimg.src = "PacMan1.png";
        newimg.width = 100;
        
        newimg.style.top = position.y;
        newimg.style.left = position.x;

        
        game.appendChild(newimg);
        // return details in an object
        return {
            position,
            velocity,
            newimg,
        };
    }

    function update() {
        //loop over pacmen array and move each one and move image in DOM
        pacMen.forEach((item) => {
          checkCollisions(item);
          item.position.x += item.velocity.x;
          item.position.y += item.velocity.y;
      
          item.newimg.style.left = item.position.x;
          item.newimg.style.top = item.position.y;
        });
        setTimeout(update, 20);
      }

    function checkCollisions(item) {
        const posX = item.position.x;
        const posY = item.position.y;
        
        if (posX <= 0 || posX >= window.innerWidth - item.newimg.width) {
            item.velocity.x *= -1;
        }

        if (posY <= 0 || posY >= window.innerHeight - item.newimg.height) {
            item.velocity.y *= -1;
        }
    }

    function makeOne() {
        pacMen.push(makePac()); // add a new PacMan
    }
