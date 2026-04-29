/* ── Project Data ── */
const projects = [
  {
    name: "imgduck",
    nameEn: "Image Duck",
    desc: "在瀏覽器本地壓縮圖片，支援多種格式，不上傳任何資料",
    descEn: "Browser-based image compression — all processing stays on your device",
    tag: "tool",
    image: "assets/imgduck.webp",
    demo: "https://adalf0722.github.io/imgduck/",
    repo: "https://github.com/adalf0722/imgduck"
  },
  {
    name: "XML Diff Tool",
    nameEn: "XML Diff Tool",
    desc: "快速比較兩份 XML 文件的差異，一眼看出哪裡不同",
    descEn: "Instantly compare two XML files and highlight every difference",
    tag: "tool",
    image: "assets/xml_diff_tool.webp",
    demo: "https://adalf0722.github.io/xml_diff_tool/",
    repo: "https://github.com/adalf0722/xml_diff_tool"
  },
  {
    name: "Prompt Planet",
    nameEn: "Prompt Planet",
    desc: "蒐集與分享實用 AI Prompt，快速找到可直接使用的工作流程",
    descEn: "A curated library of practical AI prompts — find and share ready-to-use workflows",
    tag: "tool",
    image: "assets/prompt_planet.webp",
    demo: "https://prompts.shaq-adalf.workers.dev/"
  },
  {
    name: "PDF 轉 Word",
    nameEn: "PDF to Word",
    desc: "免費線上工具，將 PDF 一鍵轉換成可編輯的 Word 文件",
    descEn: "Free online converter — turn any PDF into an editable .docx in one click",
    tag: "tool",
    image: "assets/pdf2word.webp",
    demo: "https://pdf2word-oe9v.onrender.com/"
  }
  // 新增專案：在這裡加一筆物件即可
  // { name: "", nameEn: "", desc: "", descEn: "", tag: "tool"|"toy", emoji: "✨", image: "assets/xxx.webp", demo: "...", repo: "..." }
];

/* ── Render Projects ── */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';

  projects.forEach((p) => {
    const card = document.createElement('article');
    card.className = 'project-card';

    // Image or placeholder
    let imageHtml = '';
    if (p.image) {
      imageHtml = `<img class="card-image" src="${p.image}" alt="${p.nameEn}" loading="lazy" />`;
    } else {
      imageHtml = `<div class="card-image-placeholder">${p.emoji || '✨'}</div>`;
    }

    // Back-face links
    const hasDemo = !!p.demo;
    const hasRepo = !!p.repo;
    const demoBtn = hasDemo
      ? `<a href="${p.demo}" target="_blank" rel="noopener" class="back-btn primary">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          開啟工具
         </a>`
      : '';
    const repoBtn = hasRepo
      ? `<a href="${p.repo}" target="_blank" rel="noopener" class="back-btn" aria-label="GitHub">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          GitHub
         </a>`
      : '';
    const backLinksHtml = (hasDemo || hasRepo)
      ? `<div class="back-links">${demoBtn}${repoBtn}</div>`
      : '';

    const tagLabel = p.tag === 'tool' ? '🔧 工具 Tool' : '🎮 玩具 Toy';

    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-front">
          ${imageHtml}
          <div class="card-body">
            <span class="card-tag">${tagLabel}</span>
            <h3 class="card-name">${p.name}</h3>
            <p class="card-name-en">${p.nameEn}</p>
            <p class="card-desc">${p.desc}</p>
            <p class="card-desc-en">${p.descEn}</p>
          </div>
        </div>
        <div class="flip-back">
          <div class="back-tag">${tagLabel}</div>
          <div class="back-name">${p.name}</div>
          <div class="back-desc">${p.descEn}</div>
          ${backLinksHtml}
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Trigger card entrance animation via IntersectionObserver
  const cards = grid.querySelectorAll('.project-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  cards.forEach(c => observer.observe(c));
}

/* ── Floating Icons (Hero Parallax) ── */
function initFloatingIcons() {
  const container = document.querySelector('.floating-icons');
  const icons = ['☕', '✂', '⚙', '★', '📌', '✦', '🌱', '💡', '🎨', '🔖'];
  const items = [];

  icons.forEach((icon, i) => {
    const el = document.createElement('span');
    el.className = 'float-icon';
    el.textContent = icon;
    const x = 5 + Math.random() * 90;
    const y = 5 + Math.random() * 90;
    const size = 0.9 + Math.random() * 1.2;
    el.style.cssText = `left:${x}%;top:${y}%;font-size:${size}rem;`;
    container.appendChild(el);
    items.push({ el, x, y, speed: 0.01 + Math.random() * 0.03 });
  });

  let mx = 0, my = 0;
  window.addEventListener('mousemove', (e) => {
    mx = (e.clientX / window.innerWidth - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function tick() {
    items.forEach(({ el, speed }) => {
      const dx = mx * speed * 60;
      const dy = my * speed * 60;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    });
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ── Particle System ── */
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  const isMobile = window.matchMedia('(max-width: 640px)').matches;
  const maxParticles = isMobile ? 20 : 60;
  const SYMBOLS = ['✦', '○', '·', '✿', '◦', '⋆'];
  const COLORS = ['#F4A261', '#E9C46A', '#FFD1C1', '#D4EDDA'];

  let particles = [];
  let mouse = { x: -999, y: -999 };

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    if (particles.length < maxParticles) spawnParticle(e.clientX, e.clientY);
  });

  function spawnParticle(x, y) {
    particles.push({
      x, y,
      vx: (Math.random() - 0.5) * 1.5,
      vy: -0.5 - Math.random() * 1.5,
      alpha: 0.9,
      size: 10 + Math.random() * 10,
      symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => p.alpha > 0.02);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.02; // gentle gravity
      p.alpha -= 0.012;
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.font = `${p.size}px sans-serif`;
      ctx.fillText(p.symbol, p.x, p.y);
    });
    ctx.globalAlpha = 1;
    requestAnimationFrame(loop);
  }
  loop();
}

/* ── Magnetic Cards ── */
function initMagneticCards() {
  if (window.matchMedia('(max-width: 640px)').matches) return;

  const grid = document.getElementById('projects-grid');

  grid.addEventListener('mousemove', (e) => {
    const cards = grid.querySelectorAll('.project-card');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const maxDist = 180;

      if (dist < maxDist && !card.matches(':hover')) {
        const force = (1 - dist / maxDist) * 6;
        const tilt = parseFloat(getComputedStyle(card).getPropertyValue('--tilt') || '0');
        const offsetY = parseFloat(card.style.getPropertyValue('--offset-y') || '0');
        card.style.transform = `translateY(${offsetY}px) rotate(${tilt}deg) translate(${(dx / dist) * force}px, ${(dy / dist) * force}px) scale(1.03)`;
        card.style.boxShadow = `6px 12px 32px rgba(61,43,31,0.22)`;
      } else if (!card.matches(':hover')) {
        resetCard(card);
      }
    });
  });

  grid.addEventListener('mouseleave', () => {
    grid.querySelectorAll('.project-card').forEach(resetCard);
  });

  function resetCard(card) {
    card.style.transform = '';
    card.style.boxShadow = '';
  }
}

/* ── Hero Name Char Split ── */
function initHeroNameBounce() {
  const nameEl = document.querySelector('.hero-name');
  if (!nameEl) return;

  // Collect nodes: text before <span> and the <span> itself
  const rawText = nameEl.childNodes[0].textContent; // "吳小兵 "
  const accentSpan = nameEl.querySelector('span');   // "· Adalf Wu"
  const accentText = accentSpan.textContent;

  nameEl.innerHTML = '';

  const wrapChars = (text, isAccent) => {
    [...text].forEach(ch => {
      const span = document.createElement('span');
      span.className = 'char' + (isAccent ? ' accent-char' : '');
      span.textContent = ch;
      span.addEventListener('mouseenter', () => {
        span.classList.remove('pop');
        void span.offsetWidth; // reflow to restart animation
        span.classList.add('pop');
      });
      nameEl.appendChild(span);
    });
  };

  wrapChars(rawText, false);
  wrapChars(accentText, true);
}

/* ── Init ── */
renderProjects();
initFloatingIcons();
initParticles();
initMagneticCards();
initHeroNameBounce();
