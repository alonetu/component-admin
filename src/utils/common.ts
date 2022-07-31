import lottie from 'lottie-web'

// 播放json动画
export const jsonAnimation = (dom: string = '', jsonFile: any) => {
  lottie.loadAnimation({
    container: document.querySelector(dom) as Element,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: jsonFile
  })
}
