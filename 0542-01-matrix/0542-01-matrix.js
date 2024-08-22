/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function(matrix) {
   const queue = [];
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                queue.push([i, j]);
            } else {
                matrix[i][j] = Infinity;
            }
        }
    }
    
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (queue.length) {
        const [i, j] = queue.shift();
        for (const [di, dj] of dirs) {
            const ni = i + di, nj = j + dj;
            if (ni >= 0 && ni < matrix.length && nj >= 0 && nj < matrix[0].length && matrix[ni][nj] > matrix[i][j] + 1) {
                matrix[ni][nj] = matrix[i][j] + 1;
                queue.push([ni, nj]);
            }
        }
    }
    
    return matrix;
}
