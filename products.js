document.addEventListener("DOMContentLoaded", function() {
	//Function to update product details based on the product id
	function updateProductDetails(productId) {
		//Update product details based on the product id
		const productImage = document.getElementById("product-image");
		const productName = document.getElementById("product-name");
		const productPrice = document.getElementById("product-price");
		const productDescription = document.getElementById("product-description");
		
		//Update the poduct details based on the product id
		switch (productId){
			case "joplin":
				productImage.src = "joplin.png";
				productName.textContent = "Joplin Metallic Square Toe Sandal";
				productPrice.textContent = "₱5,180";
				productDescription.textContent = "Go for glam in a metallic sandal fronted by a shapely square toe, boosted on a pavé heel and topped with feathers and crystals.";
				break;
				
			case "kia":
				productImage.src = "kia.png";
				productName.textContent = "Kia Strappy Sandal";
				productPrice.textContent = "₱3,675";
				productDescription.textContent = "Delicate straps frame this alluring sky-high sandal that's party-ready with a flirty buckle closure at the ankle.";
				break;	
				
			case "octavia":
				productImage.src = "octavia.png";
				productName.textContent = "Octavia Bow Platform";
				productPrice.textContent = "₱4,300";
				productDescription.textContent = "A top bow with hidden crystal-embellishments bring dazzling sparkle to an eye-catching platform pump elevated by a flared heel.";
				break;	
			
			case "paige faux":
				productImage.src = "paige faux.png";
				productName.textContent = "Paige Faux Leather Pump";
				productPrice.textContent = "₱3,000";
				productDescription.textContent = "Supple faux leather adds a polished and sophisticated style to this pointed toe pump that sits on a sensible heel.";
				break;	
				
			case "finn ankle":
				productImage.src = "finn ankle.png";
				productName.textContent = "Finn Ankle Strap Sandal";
				productPrice.textContent = "₱2,740";
				productDescription.textContent = "A sophisticated ankle strap sandal is balanced on a walkable block heel for modern-chic flair.";
				break;	
				
			case "lutana kitten":
				productImage.src = "lutana kitten.png";
				productName.textContent = "Lutana Kitten Heel Pump";
				productPrice.textContent = "₱3,370";
				productDescription.textContent = "A dainty bow and cutout design accents a sleek pump finished with a kitten heel for a beautiful look that never goes out of style.";
				break;
				
			case "plush":
				productImage.src = "plush.png";
				productName.textContent = "Plush Princess Open Toe Heels";
				productPrice.textContent = "₱2,700";
				productDescription.textContent = "Crafted with luxurious plush materials, these heels offer sophistication for any occasion. The open toe style adds a touch of sophistication, elevate your style effortlessly.";
				break;
				
			case "addie":
				productImage.src = "addie.png";
				productName.textContent = "Addie Strappy Sandal";
				productPrice.textContent = "₱5,800";
				productDescription.textContent = "Multiple straps add allure to a party-ready sandal lofted by an architectural heel for sleek styling.";
				break;
				
			case "clove pump":
				productImage.src = "clove pump.png";
				productName.textContent = "Clove Pump Heels";
				productPrice.textContent = "₱2,840";
				productDescription.textContent = "A timeless fusion of style and comfort with a classic pump design and a touch of modern flair.";
				break;
				
			case "shirin":
				productImage.src = "shirin.png";
				productName.textContent = "Shirin Ankle Strap Heels";
				productPrice.textContent = "₱3,565";
				productDescription.textContent = "The round-toe silhouette adds classic sophistication, while the adjustable ankle strap ensures a secure fit. The stable block heel provides both comfort and support, making this shoe perfect for all-day wear.";
				break;
				
			case "cora":
				productImage.src = "cora.png";
				productName.textContent = "Cora Platform Heels";
				productPrice.textContent = "3,500";
				productDescription.textContent = "Made with durable polyurethane materials from upper to outsole that offers both stability and chic appeal. The pin buckle fastening ensures a secure fit, while the squared toe adds a touch of modernity.";
				break;
				
			case "gia":
				productImage.src = "gia.png";
				productName.textContent = "Gia Pointed Mule Heels";
				productPrice.textContent = "₱4,450";
				productDescription.textContent = "Crafted with a neoprene upper and polyurethane insole that ensures durability and style. The slip-on style offers convenience, complete with a pointed toe for a touch of sophistication.";
				break;
				
			case "cassedyna":
				productImage.src = "cassedyna.png";
				productName.textContent = "Cassedyna Pump Heels";
				productPrice.textContent = "₱5,395";
				productDescription.textContent = "Slip into style with the easy slip-on design, featuring molded foam and padded insoles. Complete with pointed toecaps for a chic finish.";
				break;
				
			case "bianka":
				productImage.src = "bianka.png";
				productName.textContent = "Bianka Slingback Pump";
				productPrice.textContent = "₱4,655";
				productDescription.textContent = "An adjustable slingback strap secures your stride in the airy elegance of a pointy-toe pump with a refined, minimalist design.";
				break;
				
			case "josie":
				productImage.src = "josie.png";
				productName.textContent = "Josie Embellished Sandal";
				productPrice.textContent = "₱3,500";
				productDescription.textContent = "An embellished buckle adds charming flair to this double-strap sandal elevated by a flared heel and balanced by a grippy sole.";
				break;
				
			case "eloise":
				productImage.src = "eloise.png";
				productName.textContent = "Eloise Block Heel Sandal";
				productPrice.textContent = "₱2,999";
				productDescription.textContent = "Elevate any outfit with this faux-leather sandal fashioned with a secure ankle strap, anatomically-contoured footbed and a sky-high heel.";
				break;
				
			case "eliza":
				productImage.src = "eliza.png";
				productName.textContent = "Eliza Half d'Orsay Pump";
				productPrice.textContent = "₱4,700";
				productDescription.textContent = "Glittering straps frame the half d'Orsay silhouette of this stiletto heel shaped by a pointed toe.";
				break;
				
			case "knightly":
				productImage.src = "knightly.png";
				productName.textContent = "Knightly Pointed Toe Slingback Pump";
				productPrice.textContent = "₱3,680";
				productDescription.textContent = "A buckled slingback and pointed toe lend glamour to this versatile pump.";
				break;
				
			case "twist knot":
				productImage.src = "twist knot.png";
				productName.textContent = "Twist Knot 75 Block Heel Sandal";
				productPrice.textContent = "₱13,000";
				productDescription.textContent = "A twisted knot centers the front of this chic sandal crafted from leather and lifted by a block heel.";
				break;
				
			case "crystol":
				productImage.src = "crystol.png";
				productName.textContent = "Crystol Pump";
				productPrice.textContent = "₱3,600";
				productDescription.textContent = "Rich velvet adds an alluring finish to a pointed toe pump topped with an oversized bow.";
				break;
				
			case "jensen":
				productImage.src = "jensen.png";
				productName.textContent = "Jensen Platform Sandal";
				productPrice.textContent = "₱3,550";
				productDescription.textContent = "A chunky heel and platform flesh out the voluminous silhouette of this dramatic slide sandal featuring a hidden elastic inset for a boost of comfort.";
				break;
				
			case "adorn":
				productImage.src = "adorn.png";
				productName.textContent = "Adorn Sandal";
				productPrice.textContent = "₱5,820";
				productDescription.textContent =  "Bow-embellished straps and an architectural heel make a bold statement on a lofty sandal that's ready to complete any look with finesse.";
				break;
				
			case "cienna":
				productImage.src = "cienna.png";
				productName.textContent = "Cienna Bit Sandal";
				productPrice.textContent = "₱6,110";
				productDescription.textContent = "A strappy sandal modernized by a square toe is topped with a gleaming bit, offering a refined appearance.";
				break;
				
			case "nixey":
				productImage.src = "nixey.png";
				productName.textContent = "Nixey Croc Embossed Slingback Pump";
				productPrice.textContent = "₱5,525";
				productDescription.textContent = "A pointed toe and slingback strap make this pump a perfectly poised option for any occasion.";
				break;
				
			default:
				//Handle unknown product IDs
				break;
		}
		const addToCartButton = document.getElementById("add-to-cart-button");
		addToCartButton.addEventListener("click", addToCart);
		
	}
	
	// Function to handle adding a product to the cart
  function addToCart() {
    // Get the product details from the page
    const productId = getQueryParam("product");
    const productName = document.getElementById("product-name").textContent;
    const productPriceString = document.getElementById("product-price").textContent;
    const quantity = document.getElementById('quantity-input').value;
    const productImageSrc = document.getElementById("product-image").src;
	const productDescription = document.getElementById("product-description").textContent;

    // Parse the product price as a float
    const productPrice = parseFloat(productPriceString.replace("₱", ""));

    // Create a new cart item object
    const cartItem = {
      id: productId,
      name: productName,
      price: productPrice,
      quantity: parseInt(quantity),
      imageSrc: productImageSrc,
    };

    // Check if the cart array already exists in local storage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === productId
    );

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, increment the quantity
      cart[existingProductIndex].quantity++;
    } else {
      // If the product is not in the cart, add it
      cart.push(cartItem);
    }

    // Update the local storage with the modified cart
    localStorage.setItem("cart", JSON.stringify(cart));

    // Optionally, you can redirect the user to the cart page or show a confirmation message
    alert("Product added to cart!");
  }

  // Function to handle product clicks
  function handleProductClick(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag

    // Get the product ID from the data attribute of the clicked element
    const productId = event.target.dataset.productId;

    // Update the URL with the selected product ID
    history.pushState({}, null, `product details.html?product=${productId}`);

    // Update the product details on the page
    updateProductDetails(productId);
  }

  // Attach click event listeners to each product item
  const productItems = document.querySelectorAll(".col-4 img");
  productItems.forEach((item) => {
    item.addEventListener("click", handleProductClick);
  });

  // Call the function to update product details based on the current URL
  const currentProductId = new URLSearchParams(window.location.search).get(
    "product"
  );
  if (currentProductId) {
    updateProductDetails(currentProductId);
  }
});

// Function to get query parameters from the URL
function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}
