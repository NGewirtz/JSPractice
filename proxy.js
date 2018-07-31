let handler = {
  get: function(target, name) {
    return target[name] ? target[name] : 0;
  }
};

let p = new Proxy({}, handler);
let x = {};
p['a'] += 1;
x['a'] += 1;
console.log(p['a'], x['a']);
