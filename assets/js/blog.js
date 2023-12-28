const client = contentful.createClient({
  space: 'c63j2dw9getp',
  accessToken: 'ZdUtemIJAHvZ2RPuboPvlCQ-_EsofsSZBtHSOHVa8kM',
})

// variables
const blogDOM = document.querySelector('.blog-content')
const sideBarDOM = document.querySelector('.sidebar-links')
const sidebarLink = document.querySelectorAll('.sidebar-links')
let loadMoreBtn = document.querySelector('#load-more')
let currentItem = 6

class Blog {
  async getBlog() {
    try {
      let contentful = await client.getEntries({ content_type: 'vmdBlog' })
      
      let result = await fetch('/assets/js/blog.json')
      let data = await result.json()

      let blogPosts = contentful.items
      blogPosts = blogPosts.map((post) => {
        const { title, date, description, author, body, featured, pathName } =
          post.fields
        const { id } = post.sys
        const image = post.fields.image.fields.file.url
        return {
          title,
          date,
          description,
          author,
          body,
          id,
          image,
          featured,
          pathName,
        }
      })
      console.log(blogPosts)
      return blogPosts
    } catch (error) {
      console.log(
        `❗-->There was an error retrieving the data!<--❗ 
        \n 👇The error returned is listed below.👇 
        \n ${error}`
      )
    }
  }
}

class UI {
  displayBlog(blogPosts) {
    let result = ''
    blogPosts.forEach((post) => {
      result += `
        <div class="col-lg-3 col-md-5 card shadow m-1 blog-card">
          <div class="card-body">
            <img
              src="${post.image}"
              alt="${post.title} image" class="card-img img-fluid">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">
              ${post.description}
            </p>
            <button class="btn btn-primary mb-3 read-more" data-id="${post.id}">Read More</button>
            <div class="card-footer d-flex">
              <p class="card-date"><i class="fas fa-clock"></i>${post.date}</p>
              <p class="card-author"><i class="fas fa-user"></i>${post.author}</p>
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
  }

  displayFeatured(blogPosts) {
    let featured = []
    let result = ''
    blogPosts.forEach((post) => {
      if (post.featured === true) {
        featured.push(post)
      }
    })

    featured.forEach((post) => {
      result += `
        <!-- sample sidebar post starts here! -->
        <a href="#" class="sidebar-links__card">
          <div class="card shadow">
            <div class="card-body">
              <img
                src="${post.image}"
                alt="${post.title} image" class="img-fluid">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.description}</p>
              <a href="#" class="btn btn-primary mb-3">Read More</a>
            </div>
          </div>
        </a>
        <!-- sample sidebar post ends here! -->
        `
    })
    sideBarDOM.innerHTML = result
  }

  loadMore() {
    loadMoreBtn.onclick = () => {
      let cards = [...document.querySelectorAll('.blog .blog-content .card')]
      for (let i = currentItem; i < currentItem + 3; i++) {
        cards[i].style.display = 'inline-block'
      }
      currentItem += 3

      if (currentItem >= cards.length) {
        loadMoreBtn.style.display = 'none'
      }
    }
  }

  addState(post) {
    let stateObj = { id: '100' }

    window.history.pushState(stateObj, post.title, post.id + '.html')
  }

  displayPost(post, blogPosts) {
    function router(event) {
      event.preventDefault()
      history.pushState({}, 'newUrl', event.target.href)
      let route = routes.find((route) => route.path == window.location.pathname)
      blogDOM.innerHTML = route.data
    }

    let result = ''
    blogPosts.forEach((post) => {
      result += `
        <div class="col-lg-3 col-md-5 card shadow m-1 blog-card">
          <div class="card-body">
            <img
              src="${post.image}"
              alt="${post.title} image" class="card-img img-fluid">
            <h5 class="card-title">${post.title}</h5>
            <p class="card-text">
              ${post.description}
            </p>
            <button class="btn btn-primary mb-3 read-more" data-id="${post.id}">Read More</button>
            <div class="card-footer d-flex">
              <p class="card-date"><i class="fas fa-clock"></i>${post.date}</p>
              <p class="card-author"><i class="fas fa-user"></i>${post.author}</p>
            </div>
          </div>
        </div>
  `
    })
    const routes = [
      {
        path: '/blog',
        data:
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
            ` + result,
      },
      {
        path: `/${post.pathName}`,
        data: `
            <a href="blog.html" class="btn btn-primary mb-3" id="backBtn"><i class="fas fa-arrow-left"></i> back to blog</a>
              <div class="row blog__post-title">  
              <h2>${post.title}</h2>             
              </div>
              <div class="row blog__post-image">                     
                <img src="${post.image}" alt="${
          post.title
        } image" class="img-fluid">        
              </div>
              <div class="row">
                <div class="col-md-8 text-start">
                  <div class="row blog__post-byline">
                    <p><i class="fas fa-user"></i>Published by ${
                      post.author
                    } on <i class="fa-regular fa-clock"></i>${post.date}</p>
                  </div>
                </div>
              </div>
              <hr class="mt-3"/>
              <div class="row">
                <article class="text-start mb-5 blog__post-body"><span>${marked.parse(
                  post.body
                )}</span></article>
              </div>
           <a href="blog.html" class="btn btn-primary mb-3" id="backBtn"><i class="fas fa-arrow-left"></i> back to blog</a>
            `,
      },
    ]
    window.addEventListener('popstate', router)
    loadMoreBtn.style.display = 'none'
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const blog = new Blog()
  const ui = new UI()
  let blogPosts = []

  // get blog posts
  blog
    .getBlog()
    .then((posts) => {
      ui.displayBlog(posts)
      ui.displayFeatured(posts)
      ui.loadMore()
      blogPosts = posts
    })
    .then(() => {
      const buttons = document.querySelectorAll('.read-more')
      buttons.forEach((button) => {
        button.addEventListener('click', function () {
          const id = button.getAttribute('data-id')
          const post = blogPosts.find((post) => post.id === id)
          ui.displayPost(post, blogPosts)
        })
      })
    })
})
