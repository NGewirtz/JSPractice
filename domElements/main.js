document.addEventListener("DOMContentLoaded", () => {
  const test = document.getElementById("test");
  const div = document.getElementById("descend-me");
  test.addEventListener("click", e => {
    domElements(div, el => {
      el.classList.add("red");
    });
  });

  function domElements(el, callback) {
    const queue = [el];
    while (queue.length > 0) {
      let current = queue[0];
      for ( let i = 0; i < current.children.length; i++) {
        queue.push(current.children[i]);
      }
      callback(current);
      queue.shift();
    }
  }
});
