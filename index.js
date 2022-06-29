let doms = {
    carousel: document.querySelector('.carousel'),
    indicator: document.querySelectorAll('.indicator span')
}
let timer,
    time = 0;
function moveTo(index) {
    // 横向移动走马灯容器X轴位置，以达到切换图片显示效果
    doms.carousel.style.transform = `translateX(-${index}00%)`
    // 为上一张图片的指示器移除指示器选中效果
    let active = document.querySelector('.indicator span.active');
    active.classList.remove('active');
    // 重新设置被选择的图片的指示器
    doms.indicator[index].classList.add('active')
}
// 为每个指示器绑定点击事件
doms.indicator.forEach((item, i) => {
    item.onclick = function () {
        moveTo(i);
    }
})
// 定义自动播放函数
function autoPlay() {
    timer = setInterval(() => {
        time++;
        if (time <= 2) {
            moveTo(time)
        } else {
            time = 0
            moveTo(time)
        }
    }, 3000)
}
autoPlay();
// 监听鼠标移入移出事件
doms.carousel.onmouseover = function () {
    clearInterval(timer)
}
doms.carousel.onmouseout = function () {
    autoPlay()
}