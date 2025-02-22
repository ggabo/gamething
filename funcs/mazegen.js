
//generate a maze using a recursive backtracking algorithm

function convertToMaze(maze) {
    return maze.map((row) => row.map((cell) => cell === 1 ? '#' : '.'));
}

export const randomMaze = function(width, height) {
    let map = Array.from({ length: height }, () => 
        Array.from({ length: width }, () => Math.random() > 0.4 ? '.' : '#')
      );
      return map;
}

export const generateMaze = function(width, height) {
    let maze = Array.from({ length: height }, () => Array.from({ length: width }, () => 0));
    const stack = [{ x: 0, y: 0 }];
    const dirs = [{ x: 0, y: -1 }, { x: 0, y: 1 }, { x: -1, y: 0 }, { x: 1, y: 0 }];
    while (stack.length > 0) {
        const { x, y } = stack.pop();
        if (x < 0 || x >= width || y < 0 || y >= height) {
            continue;
        }
        if (maze[y][x] === 1) {
            continue;
        }
        maze[y][x] = 1;
        const randomDir = dirs[Math.floor(Math.random() * dirs.length)];
        stack.push({ x: x + randomDir.x, y: y + randomDir.y });
    }
    return convertToMaze(maze);
}