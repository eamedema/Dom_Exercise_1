"use strict";

function main(){

  let shrink = document.getElementById('shrink-me');
  shrink.classList.remove('big');

  let grow = document.getElementById('grow-me');
  grow.classList.add('big');

  let listItems = document.querySelectorAll('li');

  for (var i = 0; i < listItems.length; i++) {
    console.log(listItems[i].innerText);
  }

  let linkFix = document.getElementsByClassName('link');
  linkFix.innerText = 'somewhere';

  let hideMe = document.getElementById(`hide-me`);
  hideMe.style.display = `none`;

  let showMe = document.getElementById(`show-me`);
  showMe.style.display = "block";
}
