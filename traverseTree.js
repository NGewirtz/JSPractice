function traverseTree(t) {
  let vals = [];
  let que = t ? [t] : [];
  while (que.length > 0) {
    let currNode = que[0];
    vals.push(currNode.value);
    if (currNode.left) {
      que.push(currNode.left);
    }
    if (currNode.right) {
      que.push(currNode.right);
    }
    que.shift();
  }
  return vals;
}
