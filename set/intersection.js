const nums1 = [1,2,2,1]
const nums2 = [2,2]

// out [2]
var intersection = function (nums1, nums2) {
  return [...new Set(nums1)].filter(n => nums2.includes(n))
}


const result = intersection(nums1, nums2)
console.log('result', result)