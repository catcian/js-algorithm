/* 
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */

const lengthOfLongestSubstring = function (s) {
  let l = 0
  let res = 0
  const map = new Map()
  for (let r = 0; r < s.length; r += 1) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1
    }
    res = Math.max(res, r-l+1)
    map.set(s[r], r)
    
  }
  return res
}

const s = "abcabcbb" //3
const s2 = "abcabcba"
const res = lengthOfLongestSubstring(s)
