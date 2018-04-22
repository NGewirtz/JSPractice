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
          //bubblesArr[i].classList.add("")
          //bubblesArr[i + 1].classList.add("")
          bubblesArr[i].innerHTML = bubblesArr[i + 1].innerHTML;
          bubblesArr[i + 1].innerHTML = temp;
        }

    }
  }, 2000);
});
