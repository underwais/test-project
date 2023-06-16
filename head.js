let head = [8, 3, 5, 1, 2];
let middleNode = function (head) {
  let Array = [];

  let middle = Math.round((head.length - 1) / 2);

  for (let i = 0; i < Math.round((head.length - 2)); i++) {
    Array.push(head[middle]);
    middle++;
  }

  return Array;
  // return head[middle];
};
alert(middleNode(head));
