/* 
输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]
 */
const intersections = function (nums1, nums2) {
  const map = new Map()
  nums1.forEach(num => {
    map.set(num, true)
  })

  const result = []
  nums2.forEach(num => {
    if (map.get(num)){
      result.push(num)
      map.delete(num)
    }
  })
  return result
}

const nums1 = [1,2,2,1], nums2 = [2, 2]

const res = intersections(nums1, nums2)
