Eutil = require(' ethereumjs-util ');
EcommerceStore =artifacts.require("./contracts/EcommerceStore.sol");
module.exports = function(callback) {
    current_time = Math.round(new Date() / 1000);
    amt_1 = 1000000000000000000;
    EcommerceStore.deployed().then(function(i){i.addProductToStore('iPhone. 5','the Cell Phones & Accessories','QmYiZccvTSMFDSiwKM8DuWN7xHz68WTbdeggLPAURFx59p','QmUeb1zvHCDUCn6n97JtSCuiz3j6AGaqt5dwTr4vbPhcyR', current_time, current_time + 200, 2 * amt_1, 0).then(function(f){console.log(f)})});
    EcommerceStore.deployed().then(function(i){i.addProductToStore('iphone 5s','Cell Phones & Accessories','QmXGHH9NQrLD6E7mcismWuCdpg2u92kVeJW8dc7jUobFFc','QmT4W2wws1scaNPVugdva7DrEd39t4EYJnPMxfsM1exkDZ', current_time, current_time + 400, 3 * amt_1, 1).then(function(f){console.log(f)})});
    EcommerceStore.deployed().then(function(i){i.addProductToStore('iphone 6', 'Cell Phones & Accessories','QmVkLUFGRUzdRfVdoviuwPTKcQutgoaqJJYdNnHyrKjKx9','QmPM7g2SzrY9LcdsHeC8aCggU6SnNrCgTJensPgQinbE3U', current_time, current_time + 14, amt_1, 0).then(function(f) {console.log(f)})});
    EcommerceStore.deployed().then(function(i){i.addProductToStore('iphone 6s','Cell Phones & Accessories','QmVSRLERQub9v8rQvrpbPsVkEsNYEWHpkgtmgi1Yty4YvB','QmPBCoLYWc4CsdZiVXEomsBWA7sj9rQQfciVEdYLFJYtHC', current_time, current_time + 86400, 4 * amt_1, 1).then(function(f){console.log(f)})});
    EcommerceStore.deployed().then(function(i){i.addProductToStore('iphone 7','Cell Phones & Accessories','QmZ92fzVDZYSdAmvCyxeusNwCbhUJ25BEThue5bSCtYgQQ','QmUziyCLYEo5Mb6TXxSd2M8RXnieJkzNhsR9KtE4dETvaM', current_time, current_time + 86400, 5 * amt_1,1).then(function(f){console.Log(f)})});
    EcommerceStore.deployed().then(function(i){i.addProductToStore('Jeans','Clothing, Shoes & Accessories','QmUpLPAaWGNPKWxUzns2dx8WJBx4bXG18PyvRWd8QTbroz','QmX4onrTM3ju3QZCybPJQ6cxEsSfC5YDUp8Xjx41RcnBvD', current_time, current_time + 86400 + 86400 + 86400, 5 * amt_1, 1).then(function(f){console.Log(f)})});
    EcommerceStore.deployed().then(function(i){i.productIndex.call().then(function(f){console.log(f)})});
}