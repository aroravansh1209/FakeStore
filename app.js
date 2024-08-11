const productsContainer = document.getElementById('products');


// Fetch products from the API
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            // Create product container
            const productElement = document.createElement('div');
            productElement.classList.add('product');

            // Create anchor tag
            const anchor = document.createElement('a');
            anchor.href = `product.html?id=${product.id}`;
            anchor.target = '_blank'; // Opens the link in a new tab

            // Create product content
            const shortenDescription = product.description.split(' ').slice(0, 5).join(' ') + '...';
            anchor.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${shortenDescription}</p>
                <p class="price">$${product.price}</p>
                <p class="category">${product.category}</p>
            `;

            // Append anchor to product container
            productElement.appendChild(anchor);

            // Append product container to the products container
            productsContainer.appendChild(productElement);

        });
    })
    .catch(error => console.error('Error fetching products:', error));
