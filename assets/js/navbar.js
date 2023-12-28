document.addEventListener('DOMContentLoaded', function () {
  loadNavbar()
})

const loadNavbar = () => {
  const navbarDOM = document.querySelector('.navbar')

  navbarDOM.innerHTML = `
     <div class="container-fluid">
      <a class="navbar-brand" href="index.html#"><img src="images/V-white.png" alt="logo image" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html#services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html#testimonials">Recent Work & Templates</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html#faq">FAQ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="index.html#contact">Contact</a>
          </li>
          ${
            /*<li class="nav-item">
            <a class="nav-link" href="/blog.html">Blog</a>
          </li>*/ ''
          }
        </ul>
        <a href="tel:+16172864865">
          <button type="button" class="rounded-pill btn-rounded">
            617.286.4865<span><i class="fas fa-phone-alt"></i></span>
          </button>
        </a>
      </div>
    </div>
  `
}
