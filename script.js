// let buttonEl = document.querySelector('.btn'),
//     divEl = document.querySelector('.mydiv'),
//     colors = ['red', 'green', 'blue']
//     i = 0;

// buttonEl.onclick = function(){
//     divEl.style.background = colors[i];
//     i++;
//     if(i == 3){
//         i = 0
//     };
// }

var buttonEl = document.querySelector(".btn");
var divEl = document.querySelector(".mydiv");
var colors = ["red", "blue", "yellow"];
var i = 0;
buttonEl.onclick = function () {
  divEl.style.backgroundColor = colors[i];
  i++;
  if (i == 3) {
    i = 0;
  }
  //   for (var i = 0; i <= 3; i++) {
  //     divEl.style.backgroundColor = colors[i];
  //     if(i == 3){i=0}
  //   }
};
