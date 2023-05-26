// Fetch shop data from the API
fetch('/api/shops')
  .then(response => response.json())
  .then(data => {
    const shopList = document.getElementById('shop-list');
    data.forEach(shop => {
      const listItem = document.createElement('li');
      listItem.textContent = shop.name;
      listItem.addEventListener('click', () => {
        // Navigate to cart page with the selected shop ID
        window.location.href = `/cart.html?shopId=${shop.id}`;
      });
      shopList.appendChild(listItem);
    });
  });

// Retrieve shop ID from URL query string
const urlParams = new URLSearchParams(window.location.search);
const shopId = urlParams.get('shopId');

if (shopId) {
  // Fetch shop details based on the shop ID
  fetch(`/api/shops/${shopId}`)
    .then(response => response.json())
    .then(shop => {
      // Display shop details on the cart page
      const cartItems = document.getElementById('cart-items');
      shop.items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(listItem);
      });

      // Calculate and display the total amount
      const totalAmount = document.getElementById('total-amount');
      const totalPrice = shop.items.reduce((total, item) => total + item.price, 0);
      totalAmount.textContent = `Total: $${totalPrice}`;

      // Checkout button event listener
      const checkoutBtn = document.getElementById('checkout-btn');
      checkoutBtn.addEventListener('click', () => {
        alert('Checkout successful!'); // Placeholder action
      });
    });
}
