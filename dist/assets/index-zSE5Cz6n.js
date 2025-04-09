(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjkwIiBmaWxsPSIjRkZFNjZEIiAvPgogIDx0ZXh0IHg9IjEwMCIgeT0iMTIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDgiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjIyODMxIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5EQTwvdGV4dD4KPC9zdmc+Cg==",l="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZWxsaXBzZSBjeD0iMTUwIiBjeT0iMTUwIiByeD0iMTQwIiByeT0iMTAwIiBmaWxsPSIjRkZFNjZEIiAvPgogIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjE1MCIgcj0iMTEwIiBmaWxsPSIjRkZENzAwIiAvPgogIDx0ZXh0IHg9IjE1MCIgeT0iMTcwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNjAiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMjIyODMxIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5ESUg8L3RleHQ+Cjwvc3ZnPgo=";document.querySelector("#app").innerHTML=`
  <main>
    <section class="hero">
      <img src="${c}" alt="Dih Aura Logo" class="logo">
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
      <img src="${l}" alt="Dih Aura Coin" class="coin-image">
      <p class="wallet-text">It's not the size of your wallet that matters, it's how you use it. <span class="eggplant">🍆</span> <span class="water-drops">💦</span></p>
      <button class="btn" id="buyButtonBottom">BUY DIH AURA NOW</button>
    </section>

    <footer>
      <p>© 2023 Dih Aura. The biggest memecoin on Solana. All rights reserved.</p>
    </footer>
  </main>
`;const o=()=>{alert("You're about to experience BIG energy! (This would connect to a DEX in a real implementation)"),document.querySelectorAll(".eggplant").forEach(i=>{i.style.fontSize="3rem",setTimeout(()=>{i.style.fontSize="2rem"},500)})};document.getElementById("buyButton").addEventListener("click",o);document.getElementById("buyButtonBottom").addEventListener("click",o);const u=document.querySelectorAll(".btn");u.forEach(s=>{s.addEventListener("mouseover",()=>{s.innerHTML=s.innerHTML+" <span class='eggplant'>🍆</span>"}),s.addEventListener("mouseout",()=>{s.innerHTML=s.innerHTML.replace(" <span class='eggplant'>🍆</span>","")})});
