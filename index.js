var mobileWindow
function openMobileWindow() {
  mobileWindow = window.open(
    'https://unruffled-beaver-253aed.netlify.app',
    '_blank',
    'toolbar=0,location=0,menubar=0,scrollbars=0,height=677,width=400,left=100,top=50'
  )
}


let jsImg = document.getElementById('js-img-btn')
jsImg.addEventListener('click', function (){
  rotateImg()
})

let rotation = Math.random() * (360 - 0) + 0;
function rotateImg() {
  rotation += 90
  if(rotation === 360){
    rotation = 0
  }
  document.getElementById('js-img').style.transform = 'rotate(' + rotation + 'deg)'
}
