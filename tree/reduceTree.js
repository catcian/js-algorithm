const input = [
  {province: '广东', city: '深圳', area: '宝安'},
  {province: '广东', city: '深圳', area: '南山'},
  {province: '广东', city: '汕头', area: '潮阳'},
  {province: '广东', city: '广州', area: '天河'},
  {province: '浙江', city: '杭州', area: '西湖'},
]

const output = [
  {
    value: '广东',
    children: [
      {
        value: '深圳',
        children: [
          {value: '宝安'},
          {value: '南山'},
        ]
      },
      {
        value: '汕头',
        children: [
          {value: '潮阳'},
        ]
      }
    ]
  },
  {
    value: '浙江',
    children: [
      {
        value: '杭州',
        children: '西湖'
      }
    ]
  }
]

const result = input.reduce((prev, curr) => {
  const isExistProvice = prev.findIndex(i => i?.value === curr.province)
  // 相同省份
  if (isExistProvice > -1) {
    const isExistCity = prev[isExistProvice]['children'].findIndex(i => i?.value == curr.city)
    // 相同省份相同城市
    if (isExistCity > -1) {
      const existCity = prev[isExistProvice]['children'][isExistCity]
      if (typeof existCity['children'] === 'string') {
        prev[isExistProvice]['children'][isExistCity]['children'] = [{vlaue: existCity['children']}]
        prev[isExistProvice]['children'][isExistCity]['children'].push({value: curr.area})
      } else {
        prev[isExistProvice]['children'][isExistCity]['children'].push({value: curr.area})
      }
      return prev
    }

    prev[isExistProvice]['children'].push({
      value: curr.city,
      children: curr.area
    })
    return prev
  } 

  prev.push({
    value: curr.province,
    children: [{
      value: curr.city,
      children: curr.area
    }]
  })
  return prev
}, [])

console.log(JSON.stringify(result, null ,2))