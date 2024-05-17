function findRestaurant(list1: string[], list2: string[]): string[] {
  const common = list1.filter((item) => list2.includes(item));

  const index1 = common.map(
    (item) => list1.indexOf(item) + list2.indexOf(item),
  );

  const min = Math.min(...index1);
  return common.filter((_, i) => index1[i] === min);
}

console.log(
  findRestaurant(["happy", "wkwk", "sad", "good"], ["sad", "happy", "good"]),
);

// https://leetcode.com/problems/minimum-index-sum-of-two-lists/
