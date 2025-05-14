//https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript
type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    return await promise1 + await promise2;
};
