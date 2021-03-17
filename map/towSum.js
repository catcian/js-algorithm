/* 
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 */

const towSum = function (nums, target) {

  const map = new Map()
  for(let i=0; i<nums.length; i++){
    const n = nums[i]
    const n2 = target - n
    if (map.has(n2)) {
      return [map.get(n2), i]
    } else {
      map.set(n, i)
    }
  }
}

const nums = [2,7,11,15], target = 13

const res = towSum(nums, target)
