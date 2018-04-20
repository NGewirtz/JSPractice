document.addEventListener("DOMContentLoaded", function() {
  console.log("linked");
  const bubblesArr = [
    document.getElementById("four"),
    document.getElementById("seven"),
    document.getElementById("eight"),
    document.getElementById("six"),
    document.getElementById("one"),
    document.getElementById("five"),
    document.getElementById("two"),
    document.getElementById("three"),
  ];

  setInterval(function() {
    for (let i = 0; i < bubblesArr.length - 1; i++){

        if (bubblesArr[i].innerHTML > bubblesArr[i + 1].innerHTML) {
          let temp = bubblesArr[i].innerHTML;
          bubbles[i].classList.add("")
          bubbles[i + 1].classList.add("")
          bubblesArr[i].innerHTML = bubblesArr[i + 1].innerHTML;
          bubblesArr[i + 1].innerHTML = temp;
        }

    }
  }, 2000);
});

  // for (let i = 0; i < 5; i++) {
  //   var btn = document.createElement('button');
  //   btn.appendChild(document.createTextNode('Button ' + i));
  //   btn.addEventListener('click', function(){
  //     console.log(i);
  //   });
  //   document.body.appendChild(btn);
  // }
//   {
//     var i = 0;
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', function(){
//       console.log(i);
//     });
//     document.body.appendChild(btn);
//   }
//   {
//     var i = 1;
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', function(){
//       console.log(i);
//     });
//     document.body.appendChild(btn);
//   }
