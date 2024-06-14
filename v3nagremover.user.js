// ==UserScript==
// @name        V3NagRemover
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/*
// @grant       none
// @version     1.0
// @author      hn1f
// @description 6/14/2024, 7:47:40 AM
// ==/UserScript==

// V3 "Not Geniune" nag remover

console.log("Quick V3 nag remover loaded");

let a = document.getElementsByClassName("spitfire-body-container v3")[0].children;

for(let i = 0; i<a.length; i++) {
    // This can change randomly, maybe find a way to get around this later
    if(a[i].innerText == "This product is not genuine.") {
        a[i].setAttribute = function() {};
        a[i].style = null;
    }
}
