// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code
// EDIT THE CORRESPONDENT .ts FILE INSTEAD

import testOpenInterest from './base/test.openInterest.js';
import testSharedMethods from './base/test.sharedMethods.js';
async function testFetchOpenInterestHistory(exchange, skippedProperties, symbol) {
    const method = 'fetchOpenInterestHistory';
    const openInterestHistory = await exchange.fetchOpenInterestHistory(symbol);
    testSharedMethods.assertNonEmtpyArray(exchange, skippedProperties, method, openInterestHistory, symbol);
    for (let i = 0; i < openInterestHistory.length; i++) {
        testOpenInterest(exchange, skippedProperties, method, openInterestHistory[i]);
    }
    return true;
}
export default testFetchOpenInterestHistory;
