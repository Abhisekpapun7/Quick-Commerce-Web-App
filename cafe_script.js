const cafeItems = [
    "☕",  // Coffee
    "🍵",  // Tea
    "🥐",  // Croissant
    "🍩",  // Donut
    "🍰",  // Cake
    "🥤"   // Cold Drink
];

let index = 0;
const cafeLogo = document.getElementById("cafe-logo");

function changeLogo() {
    cafeLogo.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><text x="0" y="40" font-size="40">${cafeItems[index]}</text></svg>`;
    index = (index + 1) % cafeItems.length;
}

setInterval(changeLogo, 1500);
changeLogo(); // Initial load

// script for the cafe section
const categories = {
    bestseller: [
        { name: "Burger", price: "₹89", actprc: "₹149", img: "cafe_sec_assets/burger.jpg", quan: "1 Pieces" },
        { name: "Pizza", price: "₹119", actprc: "₹199",img: "cafe_sec_assets/pizza.jpg", quan: "4 Pieces" },
        { name: "Pasta", price: "₹49", actprc: "₹99",img: "cafe_sec_assets/pasta.jpg", quan: "1 Pieces" },
        { name: "Fries", price: "₹69", actprc: "₹129",img: "cafe_sec_assets/fries.jpg", quan: "150g" },
        { name: "Samosa", price: "₹29", actprc: "₹49",img: "cafe_sec_assets/samosa.jpg", quan: "2 Pieces" },
        { name: "Stemed Momoes", price: "₹79", actprc: "₹249",img: "cafe_sec_assets/momos.jpg", quan: "10 Pieces" },
        { name: "Butter Popcorn", price: "₹59", actprc: "₹99",img: "cafe_sec_assets/popcorn.jpg", quan: "200g" },
        { name: "Garlic Combo", price: "₹259", actprc: "₹459",img: "cafe_sec_assets/combo1.jpg", quan: "1 Each" }
    ],
    breakfast: [
        { name: "Pancakes", price: "₹6", actprc: "₹149",img: "pancakes.jpg", quan: "1 Pieces" },
        { name: "Omelette", price: "₹4", actprc: "₹149",img: "omelette.jpg", quan: "1 Pieces" },
        { name: "Toast", price: "₹3", actprc: "₹149",img: "toast.jpg", quan: "1 Pieces" },
        { name: "Smoothie", price: "₹5", actprc: "₹149",img: "smoothie.jpg", quan: "1 Pieces" }
    ],
    "chai-coffee": [
        { name: "Espresso", price: "₹3", actprc: "₹149",img: "espresso.jpg", quan: "1 Pieces" },
        { name: "Cappuccino", price: "₹4", actprc: "₹149",img: "cappuccino.jpg", quan: "1 Pieces" },
        { name: "Chai", price: "₹2", actprc: "₹149",img: "chai.jpg", quan: "1 Pieces" },
        { name: "Latte", price: "₹4", actprc: "₹149",img: "latte.jpg", quan: "1 Pieces" }
    ],
    desserts: [
        { name: "Ice Cream", price: "₹5", actprc: "₹149",img: "icecream.jpg", quan: "1 Pieces" },
        { name: "Brownie", price: "₹4", actprc: "₹149",img: "brownie.jpg", quan: "1 Pieces" },
        { name: "Cake", price: "₹6", actprc: "₹149",img: "cake.jpg", quan: "1 Pieces" },
        { name: "Donut", price: "₹3", actprc: "₹149",img: "donut.jpg", quan: "1 Pieces" }
    ],
    snacks: [
        { name: "Popcorn", price: "₹2", actprc: "₹149",img: "popcorn.jpg", quan: "1 Pieces" },
        { name: "Nachos", price: "₹3", actprc: "₹149",img: "nachos.jpg", quan: "1 Pieces" },
        { name: "Chips", price: "₹1", actprc: "₹149",img: "chips.jpg", quan: "1 Pieces" },
        { name: "Pretzel", price: "₹2", actprc: "₹149",img: "pretzel.jpg", quan: "1 Pieces" }
    ]
};

function displayCategory(category) {
    const cardsContainer = document.getElementById("cards-container");
    cardsContainer.innerHTML = "";
    
    categories[category].forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div class="img-div">
            <img class="offer-img" src="cafe_sec_assets/offer_banner50.png">
            <img class="dish-img" src="${item.img}" alt="${item.name}">
            </div>
            <h4>${item.name}</h4>
            <p class="quantity">${item.quan}</p>
            <div class="price-actprc">
            <p class="price">${item.price}</p>
            <p class="actprc"> ${item.actprc}</p>
            </div>
            <button class="add-to-cart">Add to Cart</button>
        `;
        cardsContainer.appendChild(card);
    });
}

document.querySelectorAll(".category-btn").forEach(button => {
    button.addEventListener("click", function() {
        displayCategory(this.dataset.category);
    });
});

// Display bestseller cards by default on page load
window.onload = function() {
    displayCategory("bestseller");
};