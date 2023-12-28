document.addEventListener('DOMContentLoaded', function () {
  loadBlog()
})

const blogDOM = document.querySelector('.blog-content')

const key = ' AIzaSyDfr6LtoYYgtc8jsvAGQs1_uN28PjQDifE '
const blogID = '6229581612541954185'

const loadBlog = () => {
  let result = ''



  let url = `https://www.googleapis.com/blogger/v3/blogs/${blogID}/posts?key=${key}`
  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      // display blog post fuinction goes here
      let blogPosts = data.items
      console.log(blogPosts)
      blogPosts.forEach((post) => {
        result += `
        <div class="col-lg-3 col-md-5 card shadow m-1 blog-card">
          <div class="card-body">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">
              ${post.content}
            </p>
            <button class="btn btn-primary mb-3 read-more" data-id="${post.id}">Read More</button>
            <div class="card-footer d-flex">
              <p class="card-date"><i class="fas fa-clock"></i>${post.published}</p>
              <p class="card-author"><i class="fas fa-user"></i>${post.author.displayName}</p>
            </div>
          </div>
        </div>
  `
      })
        blogDOM.innerHTML =
          `
        <div class="row page-intro">
          <div class="col-md-5">
            <img src="/images/Online campaign_Monochromatic.png" alt="" class="img-fluid">
          </div>
          <div class="col-md-6 text-bottom pt-5 mt-5">
            <h1 class="text-left">You Need a Website</h1>
            <p class="text-left">
              Your online presence is the most important part of your business. Having a website that is mobile responsive and
              easy to use is critical. Here we feature tips and tricks to help you build an online presence that is informative, 
              keeps your customers engaged and your business growing. 
            </p>
          </div>
        </div>
      
    ` + result


    })
}
