/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = function(init) {
    let presentCount = init;

    return {
        increment: function() {
           return ++presentCount;
        },
        decrement: function() {
            return --presentCount;
        },
        reset: function() {
            return presentCount = init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */