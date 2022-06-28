// generate carousels
const fetchfunction = async (req, res) => {
  fetch('http://localhost:3500/plants', {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    generateCarousels(data)
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}

const generateCarousels = async (res) => {
  let popularUl = document.querySelector('#popular')
  let philodendronUl = document.querySelector('#philodendron')
  let anoectochilusUl = document.querySelector('#ano')

  const popular = (res) => {
    res.forEach((plant) => {
      popularUl.insertAdjacentHTML('afterbegin',
      `<li class="splide__slide">
        <div class="item-image-container"style="background-image: url(${plant.picture});"></div>
        <div class="item-text-container flex">
            <p class="specie">${plant.specie}</p>
            <p class="genus">${plant.genus}</p>
            <p class="price">${plant.price}</p>
        </div>
      </li>`
    )
  });
  }
  
  const philodendron = (res) => {
    res.forEach((plant) => {
      if (plant.genus === "Philodendron") {
        philodendronUl.insertAdjacentHTML('afterbegin',
        `<li class="splide__slide">
          <div class="item-image-container"style="background-image: url(${plant.picture});"></div>
          <div class="item-text-container flex">
              <p class="specie">${plant.specie}</p>
              <p class="genus">${plant.genus}</p>
              <p class="price">${plant.price}</p>
          </div>
        </li>`
      )
      }
    })
  }

  const anoectochilus = (res) => {
    res.forEach((plant) => {
      if (plant.genus === "Anoectochilus") {
        anoectochilusUl.insertAdjacentHTML('afterbegin',
        `<li class="splide__slide">
          <div class="item-image-container"style="background-image: url(${plant.picture});"></div>
          <div class="item-text-container flex">
              <p class="specie">${plant.specie}</p>
              <p class="genus">${plant.genus}</p>
              <p class="price">${plant.price}</p>
          </div>
        </li>`
      )
      }
    })
  }
  popular(res)
  philodendron(res)
  anoectochilus(res)



  //splide carousel
  var elms = document.getElementsByClassName( 'splide' );

  const initCarousels = () => {
    var w = document.documentElement.clientWidth || window.innerWidth;

  if (w <= 480) {
      for ( var i = 0; i < elms.length; i++ ) {
          new Splide( elms[ i ], {
            type   : 'loop',
            classes: {
              page: 'splide__pagination__page carousel__pagination'
            }
          }).mount();
        }
  } else {
      for ( var i = 0; i < elms.length; i++ ) {
          new Splide( elms[ i ], {
            type   : 'loop',
            perPage: 3,
            focus  : 'center',
            classes: {
              page: 'splide__pagination__page carousel__pagination'
            }
          }).mount();
        }
  }
  }
  initCarousels()
}

fetchfunction() 





