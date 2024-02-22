const result = (friends) => {
  const outputArray = [];
  for (let friend of friends) {
    if (friend.length % 2 == 0) {
      outputArray.push(friend);
    } else {
      ("No even length of any array elements");
    }
  }
  return outputArray;
};
console.log(result(["Shawon", "Srabon", "Siyam", "Sumi", "Sopon"]));
