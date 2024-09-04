/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = {};
    const traced = new Set();
    const visited = new Set();

    prerequisites.forEach(([first, finish]) => {
    if (!graph[first]) {
      graph[first] = [];
    }
    graph[first].push(finish);
    });

    const dfs = (first) => {
    if (traced.has(first)) {
      return false;
    }
    if (visited.has(first)) {
      return true;
    }

    traced.add(first);
    visited.add(first);
    if (first in graph && !!graph[first].length) {
      for (let i = 0; i < graph[first].length; i++) {
        if (!dfs(graph[first][i])) {
          return false;
        }
      }
    }

    traced.delete(first);
    return true;
    };

    const keyList = Object.keys(graph);
    for (let i = 0; i < keyList.length; i++) {
      if (!dfs(keyList[i])) {
        return false;
      }
    }

    return true;
};