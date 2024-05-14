/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, millis);
    });

    return await promise;
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */