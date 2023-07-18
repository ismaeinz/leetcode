// https://leetcode.com/problems/two-sum/
// 1. Two Sum Easy
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// مطلوب نطلع من المصفوفة رقمين مجموعهم يساوي الـ تارجت
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// أتاكد إن كل سوليوشن له رقم واحد بمعني إن فيه رقمين في المصفوفة مجموعهم يساوي التارجت
// ما ينفعش تستعمل نفس الرقم مرتين
// You can return the answer in any order.
// لا يهم الترتيب
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
//الحل الأول إن أنت تعمل فور لوب بيضيف كل الارقام للرقم الأول ولما يلاقي حاصل الجمع يساوي التارجت يرجع الاندكس
const nums = [2, 7, 11, 15];
let target = 9;

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
// الحل الثاني هتطرح ال 2 من ال 9 هيديك سبعه فهتدور علي السبعه

function twoSum(nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    const match = target - nums[i];
    if (match in obj) return [i, obj[match]];
    obj[nums[i]] = i;
  }
}
// الحل : https://www.youtube.com/watch?v=H7g3zHTk1G0
