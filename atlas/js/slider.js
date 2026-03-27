
// 1. 初始数据
const sliderPic = [
  { url: '../../static/images/compress-chengdunight.jpg', title: 'chengdunight' },
  { url: '../../static/images/compress-moonyinxing.jpg', title: 'moonyinxing' },
  { url: '../../static/images/compress-whitecat.png', title: 'whitecat' },
  { url: '../../static/images/autumn.jpg', title: 'autumn' },
]
// 获取元素
const sliderImg = document.querySelector('.slider-wrapper img')
const sliderPara = document.querySelector('.slider-footer p')
const sliderFooter = document.querySelector('.slider-footer')
// 1. 右按钮业务
// 1.1 获取右侧按钮 
const sliderNext = document.querySelector('.next')
let i = 0  // 信号量 控制播放图片张数
// 1.2 注册点击事件

sliderNext.addEventListener('click', function () {
  // console.log(11)
  i++
  // 1.6判断条件  如果大于8 就复原为 0
  // if (i >= 8) {
  //   i = 0
  // }
  i = i >= sliderPic.length ? 0 : i
  // 1.3 得到对应的对象
  // console.log(data[i])
  // 调用函数
  togglePhoto()
})

// 2. 左侧按钮业务
// 2.1 获取左侧按钮 
const sliderPreview = document.querySelector('.prev')
// 1.2 注册点击事件
sliderPreview.addEventListener('click', function () {
  i--
  // 判断条件  如果小于0  则爬到最后一张图片索引号是 7
  // if (i < 0) {
  //   i = 7
  // }
  i = i < 0 ? sliderPic.length - 1 : i
  // 1.3 得到对应的对象
  // console.log(data[i])
  // 调用函数
  togglePhoto()
})

// 声明一个渲染的函数作为复用
function togglePhoto() {
  // 1.4 渲染对应的数据
  sliderImg.src = sliderPic[i].url
  // 1.5 更换小圆点    先移除原来的类名， 当前li再添加 这个 类名
  document.querySelector('.slider-indicator .activeslider').classList.remove('activeslider')
  document.querySelector(`.slider-indicator li:nth-child(${i + 1})`).classList.add('activeslider')
}



// 3. 自动播放模块
let timerslider = setInterval(function () {
  // 利用js自动调用点击事件  click()  一定加小括号调用函数
  sliderNext.click()
}, 1000)


// 4. 鼠标经过大盒子，停止定时器
const slider = document.querySelector('.slider')
// 注册事件
slider.addEventListener('mouseenter', function () {
  // 停止定时器
  clearInterval(timerslider)
})

// 5. 鼠标离开大盒子，开启定时器
// 注册事件
slider.addEventListener('mouseleave', function () {
  // 停止定时器
  if (timerslider) clearInterval(timerslider)
  // 开启定时器
  timerslider = setInterval(function () {
    // 利用js自动调用点击事件  click()  一定加小括号调用函数
    sliderNext.click()
  }, 8000)
})
