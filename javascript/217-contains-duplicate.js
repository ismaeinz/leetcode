// بيقولك معاك مصفوفة والمطلوب تبحث فيها لو فيها أرقام مكررة ترجع ب ترو ولو مش مكررة ترجع ب فولس

const nums = [2, 1, 3, 1];
// أول حل تعمل ترتيب للعناصر وبعدين تعمل عليهم لوب وأي عنصريين متتالين متشابهين ترجع بترو
// sort
const containsDuplicate_Sort = (nums) => {
  let sortArr = nums.sort();
  for (let i = 0; i <= sortArr.length - 1; i++) {
    if (sortArr[i] === sortArr[i + 1]) {
      return true;
    }
  }
  return false;
};
containsDuplicate_Sort(nums);
// الحل الثاني تستخدم الست بكسر السين
var containsDuplicate = function (nums) {
  const newSet = new Set(nums);
  return newSet.size !== nums.length;
};
