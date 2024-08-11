const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id'); 

fetch(`https://fakestoreapi.com/products/${productId}`)
   .then(response => response.json())
   .then(product => {
      const productDetailsElement = document.getElementById('product-details');

      productDetailsElement.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <h1>${product.title}</h1>
          <p>${product.description}</p>
          <p class="price">$${product.price}</p>
          <p class="category">${product.category}</p>
      `;
  })
  .catch(error => console.error('Error fetching product details:', error));
