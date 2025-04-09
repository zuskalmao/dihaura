import './style.css';
import coinSvg from './assets/coin.svg';
// Import your custom logo - update the path if needed
import customLogo from './assets/custom-logo.png';

document.querySelector('#app').innerHTML = `
  <main>
    <section class="hero">
      <img src="${customLogo}" alt="Dih Aura Logo" class="logo">
      <h1 class="title">DIH AURA</h1>
      <h2 class="subtitle">THE MEMECOIN WITH BIG ENERGY</h2>
      <p class="tagline">Some men have it. Some men want it. Everyone can feel it. The unmistakable presence of a man who walks with confidence. The swagger. The energy. The undeniable... DIH AURA.</p>
      <button class="btn" id="buyButton">FEEL THE ENERGY</button>
    </section>

    <section class="features">
      <h2 class="section-title">WHY DIH AURA? <span class="eggplant">🍆</span></h2>
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">📏</div>
          <h3 class="feature-title">SIZE MATTERS</h3>
          <p class="feature-desc">Our market cap is growing bigger and longer with each passing day. Join now before we reach our full potential.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">💦</div>
          <h3 class="feature-title">IMPRESSIVE LIQUIDITY</h3>
          <p class="feature-desc">Our liquidity pool is deep and satisfying, ensuring you can always get in and out when you need to.</p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔥</div>
          <h3 class="feature-title">UNMISTAKABLE PRESENCE</h3>
          <p class="feature-desc">You'll know when Dih Aura enters the room. Our chart patterns make other coins feel inadequate.</p>
        </div>
      </div>
    </section>

    <section class="buy-section">
      <h2 class="section-title">READY TO EXPAND YOUR PORTFOLIO?</h2>
      <img src="${coinSvg}" alt="Dih Aura Coin" class="coin-image">
      <p class="wallet-text">It's not the size of your wallet that matters, it's how you use it. <span class="eggplant">🍆</span> <span class="water-drops">💦</span></p>
      <button class="btn" id="buyButtonBottom">BUY DIH AURA NOW</button>
    </section>

    <footer>
      <p>© 2023 Dih Aura. The biggest memecoin on Solana. All rights reserved.</p>
    </footer>
  </main>
`;

// Handle button clicks
const handleButtonClick = () => {
  alert("You're about to experience BIG energy! (This would connect to a DEX in a real implementation)");
  
  // Add some playful animations on click
  const eggplants = document.querySelectorAll('.eggplant');
  eggplants.forEach(eggplant => {
    eggplant.style.fontSize = '3rem';
    setTimeout(() => {
      eggplant.style.fontSize = '2rem';
    }, 500);
  });
};

document.getElementById('buyButton').addEventListener('click', handleButtonClick);
document.getElementById('buyButtonBottom').addEventListener('click', handleButtonClick);

// Add some funny hover effects on the buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.innerHTML = button.innerHTML + " <span class='eggplant'>🍆</span>";
  });
  
  button.addEventListener('mouseout', () => {
    button.innerHTML = button.innerHTML.replace(" <span class='eggplant'>🍆</span>", "");
  });
});
