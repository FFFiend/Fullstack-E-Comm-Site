
    fetch('https://fakestoreapi.com/products/7')

    .then(response=>response.json())
    .then(product => {
            const container = document.getElementById('product-container');
            const name = document.createElement('h1');
            name.textContent = product.title;
            container.appendChild(name);

            const price = document.createElement('p');
            price.textContent = 'The price is $' + product.price;
            container.appendChild(price);

            const image = document.createElement('img');
            image.src = product.image;
            image.width = 250;
            image.height = 250;
            image.style = "border: 20px black";
            container.appendChild(image);

            const category = document.createElement('p');
            category.textContent = product.category;
            container.appendChild(category);

            const a2c = document.createElement('button');
            a2c.textContent = "Add to Cart";
            container.appendChild(a2c);


        });

