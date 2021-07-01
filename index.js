const lightbox = GLightbox({
  href: 'https://www.youtube.com/watch?v=Ga6RYejo6Hk',
  type: 'video',
  source: 'youtube', //vimeo, youtube or local
  width: 900,
})

var mobileWindow
function openMobileWindow() {
  mobileWindow = window.open(
    'https://unruffled-beaver-253aed.netlify.app',
    '_blank',
    'toolbar=0,location=0,menubar=0,scrollbars=0,height=677,width=400,left=100,top=50'
  )
}
