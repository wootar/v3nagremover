// ==UserScript==
// @name        V3NagRemover
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/*
// @grant       none
// @version     1.0
// @author      hn1f
// @description V3 nag remover
// ==/UserScript==

console.log("Quick V3 nag remover loaded");

let a = document.getElementsByClassName("spitfire-body-container v3")[0].children;

for(let i = 0; i<a.length; i++) {
    // This can change randomly, maybe find a way to get around this later
    if(a[i].innerText == "This product is not genuine." || a[i].innerText == "For testing purposes only.") {
        a[i].setAttribute = function() {};
        a[i].style = null;
    }
}
