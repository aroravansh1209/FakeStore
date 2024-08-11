const productsContainer = document.getElementById('products');


fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(products => {
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');

            const anchor = document.createElement('a');
            anchor.href = `product.html?id=${product.id}`;
            anchor.target = '_blank'; 

            const shortenDescription = product.description.split(' ').slice(0, 5).join(' ') + '...';
            anchor.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h2>${product.title}</h2>
                <p>${shortenDescription}</p>
                <p class="price">$${product.price}</p>
                <p class="category">${product.category}</p>
            `;

            productElement.appendChild(anchor);

            productsContainer.appendChild(productElement);

        });
    })
    .catch(error => console.error('Error fetching products:', error));
