let testimonialSlider = [
  {
    id : 0,
    reviewTxt:"Some quick example text to build on the \
    card title and make up the bulk of the card's content.",
    author: "Martin",
    authorCountry: "USA",
  },
  {
    id : 0,
    reviewTxt:"Some quick example text to build on the \
    card title and make up the bulk of the card's content.",
    author: "Martin",
    authorCountry: "USA",
  },
  {
    id : 1,
    reviewTxt:"Some quick example text to build on the \
    card title and make up the bulk of the card's content.",
    author: "Martin",
    authorCountry: "USA",
  },
  {
    id : 2,
    reviewTxt:"Some quick example text to build on the \
    card title and make up the bulk of the card's content.",
    author: "Martin",
    authorCountry: "USA",
  },
  {
    id : 3,
    reviewTxt:"Some quick example text to build on the \
    card title and make up the bulk of the card's content.",
    author: "Martin",
    authorCountry: "USA",
  },
  {
    id : 4,
    reviewTxt:"Some quick example text to build on the \
    card title and make up the bulk of the card's content.",
    author: "Martin",
    authorCountry: "USA",
  },
  {
    id : 5,
    reviewTxt:"Some quick example text to build on the \
    card title and make up the bulk of the card's content.",
    author: "Martin",
    authorCountry: "USA",
  },
  {
    id : 6,
    reviewTxt:"Some quick example text to build on the \
    card title and make up the bulk of the card's content.",
    author: "Martin",
    authorCountry: "USA",
  },
  
]


const testimonialContainer = document.getElementById('testimonialContainer');

const generateReview = () => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = testimonialSlider.slice(startIndex, endIndex);

  testimonialContainer.innerHTML = currentItems.map((data) => {
    const { id, reviewTxt, author, authorCountry } = data;

    return `
      <div class="col-lg-4 col-md-6 mb-4 my-card aos-animate" data-aos="fade-up" data-aos-duration="1200">
        <div class="card testimonial-card">
          <i class="bi bi-quote" class="card-img-top icons feature-icon-1"></i>
          <div class="card-body">
            <p class="card-text">${reviewTxt}</p>
            <div class="d-flex flex-row justify-content-between align-items-center">
              <h6 class="clients-name">${author}, <span>${authorCountry}</span></h6>
              <ul class="d-flex star pt-2">
                <li><i class="bi bi-star-fill"></i></li>
                <li><i class="bi bi-star-fill"></i></li>
                <li><i class="bi bi-star-fill"></i></li>
                <li><i class="bi bi-star-fill"></i></li>
                <li><i class="bi bi-star"></i></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
};

generateReview();