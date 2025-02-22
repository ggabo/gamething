class Game {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.map = this.generateDungeon();
      this.player = { x: 2, y: 2 };
      this.canvas = document.getElementById('gameCanvas');
      this.ctx = this.canvas.getContext('2d');
      this.tileSize = 20;
      this.init();
    }
  
    generateDungeon() {
      let map = Array.from({ length: this.height }, () => 
        Array.from({ length: this.width }, () => Math.random() > 0.4 ? '.' : '#')
      );
      return map;
    }
  
    draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (let y = 0; y < this.height; y++) {
        for (let x = 0; x < this.width; x++) {
          this.ctx.fillStyle = this.map[y][x] === '#' ? 'black' : 'white';
          this.ctx.fillRect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
        }
      }
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect(this.player.x * this.tileSize, this.player.y * this.tileSize, this.tileSize, this.tileSize);
    }
  
    movePlayer(dx, dy) {
      let newX = this.player.x + dx;
      let newY = this.player.y + dy;
      if (newX < 0 || newX >= this.width || newY < 0 || newY >= this.height) {
        return;
      }
      
      if (this.map[newY][newX] === '.') {
        this.player.x = newX;
        this.player.y = newY;
      }
      this.draw();
    }
  
    init() {
      document.addEventListener('keydown', (e) => {
       
        switch (e.key) {
          case 'ArrowUp': this.movePlayer(0, -1); break;
          case 'w': this.movePlayer(0, -1); break;
          case 'ArrowDown': this.movePlayer(0, 1); break;
          case 's': this.movePlayer(0, 1); break;
          case 'ArrowLeft': this.movePlayer(-1, 0); break;
          case 'a': this.movePlayer(-1, 0); break;
          case 'ArrowRight': this.movePlayer(1, 0); break;
          case 'd': this.movePlayer(1, 0); break;
        }
      });
      this.draw();
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const game = new Game(20, 10);
  });
  