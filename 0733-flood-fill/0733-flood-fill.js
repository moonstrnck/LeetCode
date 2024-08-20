/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

const dfs = function(image, i, j, color, startColor) {  
    if (i < 0 || i >= image.length || j < 0 || j >= image[i].length || image[i][j] !== startColor) {
        return;
    }

    image[i][j] = color;

    dfs(image, i, j-1, color, startColor);
    dfs(image, i, j+1, color, startColor);
    dfs(image, i-1, j, color, startColor);
    dfs(image, i+1, j, color, startColor);
}

const floodFill = function(image, sr, sc, color) {
    const startColor = image[sr][sc];
    
    if (startColor === color) return image;
    
    dfs(image, sr, sc, color, startColor);
    
    return image;
};