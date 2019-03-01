/*jshint esversion: 6 */
var request = require('request');

var good_url = "https://www.google.co.in";
var bad_url = "https://www.google2.com";

function test_basic(url) {
    var options = {
        url: url,
        method: 'GET',
        headers: {
            "User-Agent": "nodejs http client"
        }
    };
    return new Promise(function (resolve, reject) {
        request(options, function (error, response, result) {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

function wrap(data) {
    return data.slice(0, 105);
}

/**
 * Use separate .then, .catch to recieve data and error
 * @param {string} url 
 */

function usage1(url){
    var req = test_basic(url);
    req.then( function(data) {
        console.log(`success: \n${wrap(data)}`);
    }).catch(function(error) {
        console.error(`failed: \n${error}`);
    });
}

/**
 * Use single then function to receive both data and error
 * @param {*} url 
 */
function usage2(url){
    var req = test_basic(url);
    req.then( function(data) {
        console.log(`success: \n${wrap(data)}`);
    },
    function(error) {
        console.error(`failed: \n${error}`);
    });
}

/**
 * Use single then function to receive both data and error, using lambda style
 * @param {*} url 
 */
function usage3(url){
    var req = test_basic(url);
    req.then( (data) => {
        console.log(`success: \n${wrap(data)}`);
    },
    (error) => {
        console.error(`failed: \n${error}`);
    });
}


function main() {
    usage1(good_url);
    usage1(bad_url);
}

main();