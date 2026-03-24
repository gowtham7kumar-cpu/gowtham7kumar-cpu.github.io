(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
  <div class="container">
    
    <section class="hero">
      <h1>Evoke Films 🎬</h1>
      <p>Where stories come alive</p>
    </section>

    <section class="about">
      <h2>About Us</h2>
      <p>
        We are a creative production house focused on storytelling,
        filmmaking, and digital content.
      </p>
    </section>

    <section class="services">
      <h2>Our Services</h2>
      <ul>
        <li>🎥 Film Production</li>
        <li>📸 Photography</li>
        <li>🎬 Editing</li>
      </ul>
    </section>

    <section class="contact">
      <h2>Contact</h2>
      <p>Email: evokefilms@email.com</p>
    </section>

  </div>
`;