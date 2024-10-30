/* Add and remove cart items from web page */
const products = [`apple`, `banana`, `orange`];

let productList = ``;

let cart = [];

let cartList = ``;

function displayProducts(list) {
	for (let i = 0; i < products.length; i++) {
		list = list + `
		<li>
		${products[i]}
		<form action="/" method="POST">
            <button type="submit" name="product" value="${products[i]}">Add To Cart</button>
        </form>
		</li>\n`;
	}
	return list;
}

function displayCart(list) {
	for (let i = 0; i < cart.length; i++) {
		list = list + `
		<li>
		${cart[i]}
		<form action="/" method="POST">
            <button type="submit" name="cart" value="${cart[i]}">Remove</button>
        </form>
		</li>\n`;
	}
	return list;
}

export default {
	async fetch(request, env, ctx) {
		if (request.method === 'POST') {
			let body = await request.text();
			let value = body.split('=')[1];
			let key = body.split('=')[0];
			//console.log(key);
			if (key === 'product') {
				cart.push(value);
			}
			if (key === 'cart' ) {
				let del = cart.indexOf(value);
				cart.splice(del, 1);
			}
			console.log(cart);
		}
		return new Response(`
					<h1>My Store</h1>
					<h2>Products</h2>
					<ul>${displayProducts(productList)}</ul>
					<h2>Cart</h2>
					<ul>${displayCart(cartList)}</ul>
					`, {
			headers: {
				"content-type": "text/html"
			}
		});
	}
}


/* Display products from cart on web page after adding
const products = [`apple`, `banana`, `orange`];

let productList = ``;

let cart = [];

let cartList = ``;

function displayProducts(list) {
	for (let i = 0; i < products.length; i++) {
		list = list + `
		<li>
		${products[i]}
		<form action="/" method="POST">
            <button type="submit" name="product" value="${products[i]}">Add To Cart</button>
        </form>
		</li>\n`;
	}
	return list;
}

function displayCart(list) {
	for (let i = 0; i < cart.length; i++) {
		list = list + `
		<li>
		${cart[i]}
		<form action="/" method="POST">
            <button type="submit" name="cart" value="${cart[i]}">Remove</button>
        </form>
		</li>\n`;
	}
	return list;
}

export default {
	async fetch(request, env, ctx) {
		if (request.method === 'POST') {
			let body = await request.text();
			body = body.split('=')[1];
			cart.push(body);
			console.log(cart);
		}
		return new Response(`
					<h1>My Store</h1>
					<h2>Products</h2>
					<ul>${displayProducts(productList)}</ul>
					<h2>Cart</h2>
					<ul>${displayCart(cartList)}</ul>
					`, {
			headers: {
				"content-type": "text/html"
			}
		});
	}
}


/*To Fix
const products = [`apple`, `banana`, `orange`];

let productList = ``;

let cart = [];

let cartList = ``;

function displayProducts(list) {
	for(let i = 0;i < products.length;i++) {
		list = list + `
		<li>
		${products[i]}
		<form action="/add" method="POST">
			<button type="submit" name="product" value="${products[i]}">Add To Cart</button>
		</form>
		</li>\n`;
	}
	return list;
}

function displayCart(list) {
	for(let i = 0;i < cart.length;i++) {
		list = list + `
		<li>
		${cart[i]}
		<form action="/remove" method="POST">
			<button type="submit" name="product" value="${cart[i]}">Remove</button>
		</form>
		</li>\n`;
	}
	return list;
}

const html = `
<h1>My Store</h1>
<h2>Products</h2>
<ul>${displayProducts(productList)}</ul>
<h2>Cart</h2>
<ul>${displayCart(cartList)}</ul>
`;

export default {
	async fetch(request, env, ctx) {
		if (request.url === '/') {
			return new Response(html, {
				headers: {
					"content-type": "text/html"
				}
			});
		}

		if (request.method === 'POST' && request.url === '/add') {
			let body = await request.text();
			body = body.split('=')[1];
			cart.push(body);
			console.log(cart);
			return new Response(body, {
				status: 302,
				headers: {
					"Location": "/"
				}
			});
		}
	}
}
*/

/* Add products to cart array
const products = [`apple`, `banana`, `orange`];

let productList = ``;

let cart = [];

function displayProducts(list) {
	for(let i = 0;i < products.length;i++) {
		list = list + `
		<li>
		${products[i]}
		<form action="/add" method="POST">
			<button type="submit" name="product" value="${products[i]}">Add To Cart</button>
		</form>
		</li>\n`;
	}
	return list;
}

const html = `
<h1>My Store</h1>
<h2>Products</h2>
<ul>${displayProducts(productList)}</ul>
<h2>Cart</h2>
`;

export default {
	async fetch(request, env, ctx) {

		if (request.method === 'POST') {
			let body = await request.text();
			body = body.split('=')[1];
			cart.push(body);
			console.log(cart);
		}
		return new Response(html, {
			headers: {
				"content-type": "text/html"
			}
		});
	}
}

/* Display to console products that will be added to cart 
const products = [`apple`, `banana`, `orange`];

let productList = ``;

function displayProducts(list) {
	for(let i = 0;i < products.length;i++) {
		list = list + `
		<li>
		${products[i]}
		<form action="/" method="POST">
			<button type="submit" name="product" value="${products[i]}">Add To Cart</button>
		</form>
		</li>\n`;
	}
	return list;
}

const html = `
<h1>My Store</h1>
<h2>Products</h2>
<ul>${displayProducts(productList)}</ul>
<h2>Cart</h2>
`;

export default {
	async fetch(request, env, ctx) {

		if (request.method === 'POST') {
			const body = await request.text();
			console.log(body);
		}
		return new Response(html, {
			headers: {
				"content-type": "text/html"
			}
		});
	}
}

/*Display products
const products = [`apple`, `banana`, `orange`];

let productList = ``;

function displayProducts(list) {
	for(let i = 0;i < products.length;i++) {
		list = list + `<li>${products[i]}</li>\n`;
	}
	return list;
}

const html = `
<h1>My Store</h1>
<h2>Products</h2>
<ul>${displayProducts(productList)}</ul>
`;

export default {
	async fetch(request, env, ctx) {
		return new Response(html, {
			headers: {
				"content-type": "text/html"
			}
		});
	}
}

/* Boilerplate HTML 2
const html = `<h1>Hello World!</h1>`;

export default {
	async fetch(request, env, ctx) {
		return new Response(html, {
			headers: {
				"content-type": "text/html"
			}
		});
	}
}

/* Boilerplate HTMl
export default {
	async fetch(request, env, ctx) {
		//Response(a, b);
		return new Response(`<h1>Hello World!</h1>`, {
			headers: {
				"content-type": "text/html"
			}
		});
	},
};

/*Boilerplate
/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

/*
export default {
	async fetch(request, env, ctx) {
		return new Response('Hello World!');
	},
};
*/
