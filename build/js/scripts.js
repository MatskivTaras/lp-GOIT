"use strict";

var anchor = document.querySelector('a[href="#send-request-form"]');
anchor.addEventListener('click', function (event) {
  event.preventDefault();
  var anchorToID = anchor.getAttribute('href').substr(1);
  document.getElementById(anchorToID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});