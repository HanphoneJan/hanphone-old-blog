let atlaspic = [
  {
    href: 'https://www.hanphone.top/material/blog/atlasshow/countrynight.jpg',
    src: 'https://www.hanphone.top/material/blog/atlasshow/countrynight.jpg',
    title: '乡村夜晚',
    num: 1145
  },
  {
    href: '../static/images/compress-moonyinxing.jpg',
    src: '../static/images/compress-moonyinxing.jpg',
    title: '月亮与银杏大道',
    num: 14
  },
  {
    href: '../static/images/schoolroad.jpg',
    src: '../static/images/schoolroad.jpg',
    title: '校园小路',
    num: 1919
  },
  {
    href: 'https://www.hanphone.top/material/blog/atlasshow/starlight.jpg',
    src: 'https://www.hanphone.top/material/blog/atlasshow/starlight.jpg',
    title: '星空灯',
    num: 810
  },
  {
    href: '../static/images/compress-chengdunight.jpg',
    src: '../static/images/compress-chengdunight.jpg',
    title: '成都的夜晚',
    num: 810
  },

  {
    href: 'https://www.hanphone.top/material/blog/atlasshow/giftpic.jpg',
    src: 'https://www.hanphone.top/material/blog/atlasshow/giftpic.jpg',
    title: '纪念画',
    num: 810
  },

  {
    href: 'https://www.hanphone.top/material/blog/atlasshow/snowlove.jpg',
    src: 'https://www.hanphone.top/material/blog/atlasshow/snowlove.jpg',
    title: '雪地爱心',
    num: 810
  },
  {
    href: 'https://www.hanphone.top/material/blog/atlasshow/adultceremony.jpg',
    src: 'https://www.hanphone.top/material/blog/atlasshow/adultceremony.jpg',
    title: '我的成人礼',
    num: 810
  },
  {
    href: 'https://www.hanphone.top/material/blog/atlasshow/girlpic.jpg',
    src: 'https://www.hanphone.top/material/blog/atlasshow/girlpic.jpg',
    title: '女孩',
    num: 810
  },
  {
    href: 'https://www.hanphone.top/material/blog/atlasshow/bluefactory.jpg',
    src: 'https://www.hanphone.top/material/blog/atlasshow/bluefactory.jpg',
    title: '蓝色工厂',
    num: 810
  },
  {
    href: '../static/images/compress-autumn.jpg',
    src: '../static/images/compress-autumn.jpg',
    title: '秋日',
    num: 810
  },
  {
    href: 'https://www.hanphone.top/material/blog/atlasshow/mouse.jpg',
    src: 'https://www.hanphone.top/material/blog/atlasshow/mouse.jpg',
    title: '奋起的小鼠',
    num: 810
  }
]
const picul = document.querySelector('.content ul')
// 1. 根据数据的个数，创建 对应的小li
for (let i = 0; i < atlaspic.length; i++) {
  // 2. 创建新的小li
  const picli = document.createElement('li')
  // 把内容给li
  picli.innerHTML = `
      <a href=${atlaspic[i].href}>
          <img src=${atlaspic[i].src} alt="" class="atlaspic">
          <h4>
              ${atlaspic[i].title}
          </h4>
              <p><span>点赞</span> &#10084; <span>${atlaspic[i].num}</span></p>
      </a>
  `
  // 3. ul追加小li
  picul.appendChild(picli)
}