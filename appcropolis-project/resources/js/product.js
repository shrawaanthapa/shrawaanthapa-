const stack = document.querySelector(".stack");
const cards = Array.from(stack.children)
  .reverse()
  .filter((child) => child.classList.contains("card"));

cards.forEach((card) => stack.appendChild(card));

function moveCard() {
  const lastCard = stack.lastElementChild;
  if (lastCard.classList.contains("card")) {
    lastCard.classList.add("swap");

    setTimeout(() => {
      lastCard.classList.remove("swap");
      stack.insertBefore(lastCard, stack.firstElementChild);
    }, 1200);
  }
}

let autoplayInterval = setInterval(moveCard, 4000);

stack.addEventListener("click", function (e) {
  const card = e.target.closest(".card");
  if (card && card === stack.lastElementChild) {
    card.classList.add("swap");

    setTimeout(() => {
      card.classList.remove("swap");
      stack.insertBefore(card, stack.firstElementChild);
    }, 1200);
  }
});


function changeImage(src) {
  document.getElementById('mainImage').src = src;
}

function addToCart() {
  const size = document.getElementById('size').value;
  const quantity = document.getElementById('quantity').value;

  if (!size) {
    alert('Please select a size.');
    return;
  }

  alert(`Added ${quantity} item(s) of size ${size} to your cart!`);
}

// Toggle Menu Function
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// Optional: close menu when link clicked (mobile UX)
document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active');
  });
});