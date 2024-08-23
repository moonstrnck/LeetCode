/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
  const dists = new Map();
  const result = [];
  
  
  points.forEach((point) => {
    const x = point[0];
    const y = point[1];
    
    const dist = Math.sqrt(x ** 2 + y ** 2);
    dists.set(point, dist);
  });
  
  const arr = Array.from(dists).sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < k; i++) {
    result.push(arr[i][0]);
  }
  
  return result;
};
