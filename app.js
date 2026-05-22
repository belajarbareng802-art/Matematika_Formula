/* =============================================
   MatForma — app.js
   Matematika Formula | Freza Tirta Surya
   SMK Merdeka Bandung, RPL 2025/2026
   ============================================= */

"use strict";

// ==================== DATA ====================
const RUMUS_DATA = [
  {
    id: 1,
    category: "Aljabar",
    name: "Persamaan Linear",
    formula: "ax + b = 0  →  x = −b/a",
    keterangan: "Persamaan linear satu variabel adalah persamaan yang mengandung satu variabel dengan pangkat tertinggi 1.",
    contoh: "Cari x dari 2x + 6 = 0\n→ x = −6/2 = −3",
    variabel: ["a = koefisien x", "b = konstanta", "x = variabel yang dicari"]
  },
  {
    id: 2,
    category: "Aljabar",
    name: "Persamaan Kuadrat (ABC)",
    formula: "x = (−b ± √(b²−4ac)) / 2a",
    keterangan: "Rumus ABC digunakan untuk menyelesaikan persamaan kuadrat ax² + bx + c = 0.",
    contoh: "Selesaikan x² + 5x + 6 = 0 (a=1, b=5, c=6)\nD = 25 − 24 = 1\nx₁ = (−5+1)/2 = −2\nx₂ = (−5−1)/2 = −3",
    variabel: ["a, b, c = koefisien persamaan", "D = diskriminan b²−4ac"]
  },
  {
    id: 3,
    category: "Geometri",
    name: "Teorema Pitagoras",
    formula: "c² = a² + b²",
    keterangan: "Pada segitiga siku-siku, kuadrat sisi miring (hipotenusa) sama dengan jumlah kuadrat kedua sisi lainnya.",
    contoh: "Segitiga dengan a=3, b=4\nc = √(9+16) = √25 = 5",
    variabel: ["c = sisi miring (hipotenusa)", "a, b = sisi tegak lurus"]
  },
  {
    id: 4,
    category: "Geometri",
    name: "Luas Lingkaran",
    formula: "L = π × r²",
    keterangan: "Luas daerah yang dibatasi oleh lingkaran dengan jari-jari r.",
    contoh: "Jari-jari r = 7 cm\nL = 3.14 × 7² = 3.14 × 49 = 153.86 cm²",
    variabel: ["L = luas lingkaran", "π ≈ 3.14159", "r = jari-jari"]
  },
  {
    id: 5,
    category: "Geometri",
    name: "Luas Segitiga",
    formula: "L = ½ × a × t",
    keterangan: "Luas segitiga dihitung dari alas dan tingginya.",
    contoh: "Alas = 10 cm, Tinggi = 6 cm\nL = ½ × 10 × 6 = 30 cm²",
    variabel: ["L = luas segitiga", "a = panjang alas", "t = tinggi segitiga"]
  },
  {
    id: 6,
    category: "Geometri",
    name: "Volume Tabung",
    formula: "V = π × r² × t",
    keterangan: "Volume ruang yang ditempati oleh tabung (silinder).",
    contoh: "r = 5 cm, t = 10 cm\nV = 3.14 × 25 × 10 = 785 cm³",
    variabel: ["V = volume tabung", "r = jari-jari alas", "t = tinggi tabung"]
  },
  {
    id: 7,
    category: "Statistika",
    name: "Rata-Rata (Mean)",
    formula: "x̄ = (Σxᵢ) / n",
    keterangan: "Rata-rata adalah jumlah semua data dibagi banyaknya data.",
    contoh: "Data: 4, 6, 8, 10, 12\nΣx = 40,  n = 5\nMean = 40/5 = 8",
    variabel: ["x̄ = rata-rata", "Σxᵢ = jumlah semua nilai", "n = banyak data"]
  },
  {
    id: 8,
    category: "Statistika",
    name: "Simpangan Baku",
    formula: "s = √( Σ(xᵢ − x̄)² / n )",
    keterangan: "Simpangan baku mengukur seberapa tersebar data dari rata-ratanya.",
    contoh: "Data: 2, 4, 6\nMean = 4\ns = √((4+0+4)/3) = √(8/3) ≈ 1.63",
    variabel: ["s = simpangan baku", "xᵢ = setiap nilai", "x̄ = mean", "n = banyak data"]
  },
  {
    id: 9,
    category: "Trigonometri",
    name: "Sin, Cos, Tan",
    formula: "sin θ = lawan/miring\ncos θ = samping/miring\ntan θ = lawan/samping",
    keterangan: "Perbandingan trigonometri mendeskripsikan hubungan sudut dan sisi pada segitiga siku-siku.",
    contoh: "Segitiga siku-siku: sisi lawan=3, samping=4, miring=5\nsin θ = 3/5 = 0.6\ncos θ = 4/5 = 0.8\ntan θ = 3/4 = 0.75",
    variabel: ["θ = sudut yang ditinjau", "lawan = sisi di depan θ", "samping = sisi di samping θ", "miring = hipotenusa"]
  },
  {
    id: 10,
    category: "Trigonometri",
    name: "Identitas Pitagoras",
    formula: "sin²θ + cos²θ = 1",
    keterangan: "Identitas trigonometri dasar yang selalu berlaku untuk semua sudut.",
    contoh: "sin 30° = 0.5\ncos 30° = √3/2 ≈ 0.866\n(0.5)² + (0.866)² = 0.25 + 0.75 = 1 ✓",
    variabel: ["sin θ = sinus sudut θ", "cos θ = kosinus sudut θ"]
  },
  {
    id: 11,
    category: "Aritmetika",
    name: "Deret Aritmetika",
    formula: "Sn = n/2 × (a + Un)  atau  n/2 × (2a + (n−1)d)",
    keterangan: "Jumlah n suku pertama deret aritmetika.",
    contoh: "a=2, d=3, n=5\nUn = 2+(5−1)×3 = 14\nSn = 5/2 × (2+14) = 40",
    variabel: ["Sn = jumlah n suku", "a = suku pertama", "d = beda", "n = banyak suku", "Un = suku ke-n"]
  },
  {
    id: 12,
    category: "Aritmetika",
    name: "Deret Geometri",
    formula: "Sn = a × (rⁿ − 1) / (r − 1)",
    keterangan: "Jumlah n suku pertama deret geometri (r ≠ 1).",
    contoh: "a=2, r=3, n=4\nSn = 2×(81−1)/(3−1) = 2×80/2 = 80",
    variabel: ["Sn = jumlah n suku", "a = suku pertama", "r = rasio", "n = banyak suku"]
  }
];

const CATEGORIES = [...new Set(RUMUS_DATA.map(r => r.category))];
const CAT_ICONS  = { Aljabar: "x²", Geometri: "△", Statistika: "Σ", Trigonometri: "θ", Aritmetika: "∞" };

const KUIS_SOAL = [
  { q: "c² = a² + b²  adalah rumus dari…", opts: ["Luas segitiga","Pitagoras","Deret aritmetika","Sin cos tan"], ans: 1 },
  { q: "Rumus luas lingkaran adalah…", opts: ["πr","2πr","πr²","2πr²"], ans: 2 },
  { q: "Nilai rata-rata dari 10, 20, 30 adalah…", opts: ["15","20","25","30"], ans: 1 },
  { q: "Diskriminan persamaan kuadrat adalah…", opts: ["b²+4ac","b²−4ac","−b/a","2a/b"], ans: 1 },
  { q: "sin²θ + cos²θ = …", opts: ["0","2","1","π"], ans: 2 },
  { q: "Volume tabung: V = …", opts: ["πr²","πr²t","2πrt","πrt"], ans: 1 },
  { q: "Pada segitiga siku-siku, tan θ = …", opts: ["lawan/miring","samping/miring","lawan/samping","miring/lawan"], ans: 2 },
  { q: "Suku ke-n deret aritmetika: Uₙ = …", opts: ["a+nd","a+(n+1)d","a+(n−1)d","na+d"], ans: 2 },
  { q: "Luas segitiga = ½ × a × …", opts: ["r","s","t","d"], ans: 2 },
  { q: "Jumlah 5 suku pertama deret 1,2,4,8,16 adalah…", opts: ["30","31","32","63"], ans: 1 }
];

// ==================== STATE ====================
let state = {
  user: null,          // { name, email }
  learned: new Set(),  // set of rumus ids
  currentCategory: null,
  currentRumus: null,
  currentPage: "login",

  // Kuis
  kuisPool: [],
  kuisIndex: 0,
  kuisScore: 0,
  kuisAnswers: [],
  kuisTimer: null,
  kuisTimerSec: 30,
};

// ==================== INIT ====================
document.addEventListener("DOMContentLoaded", () => {
  // Restore session
  const saved = sessionStorage.getItem("mf_user");
  if (saved) {
    state.user = JSON.parse(saved);
    const prog = sessionStorage.getItem("mf_progress");
    if (prog) state.learned = new Set(JSON.parse(prog));
    enterDashboard();
  } else {
    showPage("login");
  }
  updateLuasForm();
});

// ==================== PAGE NAV ====================
function showPage(name) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  const page = document.getElementById("page-" + name);
  if (page) page.classList.add("active");
  state.currentPage = name;

  // Update bottom nav highlights
  document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
  const navMap = { dashboard: 0, kuis: 1, kalkulator: 2 };
  if (navMap[name] !== undefined) {
    document.querySelectorAll(`#page-${name} .nav-item`)[navMap[name]]?.classList.add("active");
  }
}

// ==================== AUTH ====================
function switchTab(tab) {
  document.getElementById("form-login").classList.toggle("hidden", tab !== "login");
  document.getElementById("form-register").classList.toggle("hidden", tab !== "register");
  document.getElementById("tab-login-btn").classList.toggle("active", tab === "login");
  document.getElementById("tab-register-btn").classList.toggle("active", tab === "register");
}

function doLogin() {
  const email = document.getElementById("login-email").value.trim();
  const pass   = document.getElementById("login-pass").value;
  if (!email || !pass) return showToast("Isi semua kolom dulu!", "error");

  // Simple demo auth
  const stored = localStorage.getItem("mf_acc_" + email);
  if (!stored) return showToast("Akun tidak ditemukan. Daftar dulu!", "error");
  const acc = JSON.parse(stored);
  if (acc.pass !== pass) return showToast("Password salah!", "error");

  state.user = { name: acc.name, email };
  sessionStorage.setItem("mf_user", JSON.stringify(state.user));
  enterDashboard();
  showToast("Selamat datang, " + acc.name + "!", "success");
}

function doRegister() {
  const name  = document.getElementById("reg-name").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const pass  = document.getElementById("reg-pass").value;
  if (!name || !email || !pass) return showToast("Isi semua kolom!", "error");
  if (pass.length < 6) return showToast("Password minimal 6 karakter!", "error");

  localStorage.setItem("mf_acc_" + email, JSON.stringify({ name, pass }));
  showToast("Akun dibuat! Silakan masuk.", "success");
  switchTab("login");
  document.getElementById("login-email").value = email;
}

function doLogout() {
  sessionStorage.clear();
  state.user = null;
  state.learned.clear();
  showPage("login");
}

function enterDashboard() {
  if (!state.user) return;
  document.getElementById("nav-username").textContent = state.user.name;
  document.getElementById("hero-name").textContent   = state.user.name.split(" ")[0];
  renderCategories();
  updateProgress();
  showPage("dashboard");
}

// ==================== DASHBOARD ====================
function renderCategories(filter = "") {
  const grid = document.getElementById("category-grid");
  grid.innerHTML = "";

  let categories = CATEGORIES;
  let filtered;

  if (filter) {
    // Search mode — show matching rumus
    filtered = RUMUS_DATA.filter(r =>
      r.name.toLowerCase().includes(filter) ||
      r.category.toLowerCase().includes(filter) ||
      r.formula.toLowerCase().includes(filter)
    );
    if (filtered.length === 0) {
      grid.innerHTML = `<div class="search-empty" style="grid-column:1/-1">Tidak ada rumus ditemukan untuk "<b>${filter}</b>"</div>`;
      return;
    }
    grid.style.gridTemplateColumns = "1fr";
    filtered.forEach(r => {
      const el = document.createElement("div");
      el.className = "rumus-item";
      el.innerHTML = `
        <div class="rumus-item-left">
          <div class="rumus-item-name">${r.name}</div>
          <div class="rumus-item-preview">${r.formula.split("\n")[0]}</div>
        </div>
        <div>
          ${state.learned.has(r.id) ? '<span class="rumus-done-badge">✓ Selesai</span>' : ""}
          <span class="rumus-item-arrow">›</span>
        </div>
      `;
      el.onclick = () => openDetail(r, "dashboard");
      grid.appendChild(el);
    });
    return;
  }

  grid.style.gridTemplateColumns = "";
  categories.forEach(cat => {
    const count = RUMUS_DATA.filter(r => r.category === cat).length;
    const el = document.createElement("div");
    el.className = "cat-card";
    el.innerHTML = `
      <div class="cat-icon">${CAT_ICONS[cat] || "∑"}</div>
      <div class="cat-name">${cat}</div>
      <div class="cat-count">${count} rumus</div>
    `;
    el.onclick = () => openCategory(cat);
    grid.appendChild(el);
  });
}

function doSearch(val) {
  renderCategories(val.toLowerCase().trim());
}

function updateProgress() {
  const total = RUMUS_DATA.length;
  const done  = state.learned.size;
  const pct   = Math.round((done / total) * 100);
  document.getElementById("prog-count").textContent = `${done} / ${total}`;
  document.getElementById("prog-bar").style.width   = pct + "%";
  document.getElementById("prog-tip").textContent =
    done === 0 ? "Mulai belajar untuk melacak progressmu!" :
    done === total ? "🎉 Semua rumus sudah dipelajari!" :
    `Tetap semangat! Tinggal ${total - done} rumus lagi.`;
}

// ==================== KATEGORI + RUMUS LIST ====================
function openCategory(cat) {
  state.currentCategory = cat;
  document.getElementById("rumus-page-title").textContent = cat;

  const list = RUMUS_DATA.filter(r => r.category === cat);
  const container = document.getElementById("rumus-list-container");
  container.innerHTML = `<h3 class="section-title" style="margin-bottom:16px">Rumus ${cat}</h3>`;

  list.forEach(r => {
    const el = document.createElement("div");
    el.className = "rumus-item";
    el.innerHTML = `
      <div class="rumus-item-left">
        <div class="rumus-item-name">${r.name}</div>
        <div class="rumus-item-preview">${r.formula.split("\n")[0]}</div>
      </div>
      <div>
        ${state.learned.has(r.id) ? '<span class="rumus-done-badge">✓ Selesai</span>' : ""}
        <span class="rumus-item-arrow">›</span>
      </div>
    `;
    el.onclick = () => openDetail(r, "rumus");
    container.appendChild(el);
  });

  showPage("rumus");
}

// ==================== DETAIL RUMUS ====================
function openDetail(rumus, backPage) {
  state.currentRumus = rumus;
  document.getElementById("detail-page-title").textContent = rumus.name;

  const backBtn = document.getElementById("detail-back-btn");
  backBtn.onclick = () => showPage(backPage);

  const isDone = state.learned.has(rumus.id);
  const container = document.getElementById("detail-container");

  const varList = (rumus.variabel || []).map(v => `<li style="margin-bottom:4px;font-size:13px;color:var(--muted)">${v}</li>`).join("");

  container.innerHTML = `
    <div class="detail-header">
      <h2>${rumus.name}</h2>
      <p style="color:var(--muted);font-size:13px">${rumus.category}</p>
      <div class="detail-formula">${rumus.formula.replace(/\n/g, "<br>")}</div>
    </div>

    <div class="detail-section">
      <h4>Keterangan</h4>
      <p>${rumus.keterangan}</p>
    </div>

    ${varList ? `<div class="detail-section"><h4>Variabel</h4><ul style="padding-left:16px;list-style:disc">${varList}</ul></div>` : ""}

    <div class="detail-section">
      <h4>Contoh Soal</h4>
      <div class="example-box">${rumus.contoh.replace(/\n/g, "<br>")}</div>
    </div>

    <button class="mark-btn ${isDone ? "done" : ""}" id="mark-btn" onclick="toggleLearned(${rumus.id})">
      ${isDone ? "✓ Sudah Dipelajari" : "Tandai Sudah Dipelajari"}
    </button>
  `;

  showPage("detail");
}

function toggleLearned(id) {
  if (state.learned.has(id)) {
    state.learned.delete(id);
  } else {
    state.learned.add(id);
    showToast("Rumus ditandai selesai! 🎉", "success");
  }
  sessionStorage.setItem("mf_progress", JSON.stringify([...state.learned]));
  updateProgress();

  // Refresh button
  const btn = document.getElementById("mark-btn");
  const isDone = state.learned.has(id);
  btn.textContent = isDone ? "✓ Sudah Dipelajari" : "Tandai Sudah Dipelajari";
  btn.classList.toggle("done", isDone);
}

// ==================== KUIS ====================
function startKuis() {
  // Shuffle & pick 5 soal
  const shuffled = [...KUIS_SOAL].sort(() => Math.random() - 0.5);
  state.kuisPool    = shuffled.slice(0, 5);
  state.kuisIndex   = 0;
  state.kuisScore   = 0;
  state.kuisAnswers = [];

  document.getElementById("kuis-start-screen").classList.add("hidden");
  document.getElementById("kuis-result-screen").classList.add("hidden");
  document.getElementById("kuis-play-screen").classList.remove("hidden");

  renderSoal();
}

function renderSoal() {
  const soal = state.kuisPool[state.kuisIndex];
  document.getElementById("kuis-progress").textContent = `Soal ${state.kuisIndex + 1} / ${state.kuisPool.length}`;
  document.getElementById("kuis-question").textContent = soal.q;

  const optsEl = document.getElementById("kuis-options");
  optsEl.innerHTML = "";
  soal.opts.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "kuis-opt";
    btn.textContent = `${String.fromCharCode(65 + i)}. ${opt}`;
    btn.onclick = () => answerKuis(i);
    optsEl.appendChild(btn);
  });

  startTimer();
}

function answerKuis(chosen) {
  clearInterval(state.kuisTimer);
  const soal = state.kuisPool[state.kuisIndex];
  const correct = soal.ans;
  const isCorrect = chosen === correct;

  if (isCorrect) state.kuisScore++;
  state.kuisAnswers.push({ q: soal.q, chosen, correct, isCorrect });

  // Mark buttons
  const btns = document.querySelectorAll(".kuis-opt");
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add("correct");
    if (i === chosen && !isCorrect) b.classList.add("wrong");
  });

  setTimeout(() => {
    state.kuisIndex++;
    if (state.kuisIndex < state.kuisPool.length) {
      renderSoal();
    } else {
      showKuisResult();
    }
  }, 1000);
}

function startTimer() {
  clearInterval(state.kuisTimer);
  state.kuisTimerSec = 30;
  const el = document.getElementById("kuis-timer");
  el.classList.remove("urgent");

  state.kuisTimer = setInterval(() => {
    state.kuisTimerSec--;
    el.textContent = `⏱ ${state.kuisTimerSec}s`;
    if (state.kuisTimerSec <= 10) el.classList.add("urgent");
    if (state.kuisTimerSec <= 0) {
      clearInterval(state.kuisTimer);
      // Auto-answer wrong
      const soal = state.kuisPool[state.kuisIndex];
      state.kuisAnswers.push({ q: soal.q, chosen: -1, correct: soal.ans, isCorrect: false });
      state.kuisIndex++;
      if (state.kuisIndex < state.kuisPool.length) {
        renderSoal();
      } else {
        showKuisResult();
      }
    }
  }, 1000);
}

function showKuisResult() {
  clearInterval(state.kuisTimer);
  document.getElementById("kuis-play-screen").classList.add("hidden");
  document.getElementById("kuis-result-screen").classList.remove("hidden");

  const score = state.kuisScore;
  const total = state.kuisPool.length;
  document.getElementById("result-score").textContent = `${score}/${total}`;
  document.getElementById("result-label").textContent =
    score === total ? "Sempurna! Kamu luar biasa! 🌟" :
    score >= 4 ? "Bagus sekali! Terus semangat! 🎉" :
    score >= 3 ? "Cukup baik! Pelajari lagi yuk!" :
    "Jangan menyerah, coba lagi!";

  const breakdown = document.getElementById("result-breakdown");
  breakdown.innerHTML = state.kuisAnswers.map((a, i) => `
    <div class="result-item">
      <span>Soal ${i + 1}: ${a.q.substring(0, 30)}...</span>
      <span class="${a.isCorrect ? "correct-mark" : "wrong-mark"}">${a.isCorrect ? "✓" : "✗"}</span>
    </div>
  `).join("");
}

function restartKuis() {
  document.getElementById("kuis-result-screen").classList.add("hidden");
  document.getElementById("kuis-start-screen").classList.remove("hidden");
}

// ==================== KALKULATOR ====================
function switchCalc(id, btn) {
  document.querySelectorAll(".calc-section").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".calc-tab").forEach(b => b.classList.remove("active"));
  document.getElementById("calc-" + id).classList.add("active");
  btn.classList.add("active");
}

function hitungPitagoras() {
  const a = parseFloat(document.getElementById("pit-a").value);
  const b = parseFloat(document.getElementById("pit-b").value);
  const el = document.getElementById("pit-result");
  if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
    el.textContent = "Masukkan nilai a dan b yang valid!";
    el.className = "calc-result error";
    return;
  }
  const c = Math.sqrt(a * a + b * b);
  el.textContent = `c = √(${a}² + ${b}²) = √${a*a + b*b} = ${c.toFixed(4)}`;
  el.className = "calc-result";
}

function updateLuasForm() {
  const shape = document.getElementById("luas-shape")?.value;
  const el = document.getElementById("luas-inputs");
  if (!el) return;

  const forms = {
    persegi:       `<div class="input-group"><label>Sisi (s)</label><input type="number" id="luas-s" placeholder="Masukkan sisi" /></div>`,
    persegipanjang:`<div class="input-group"><label>Panjang (p)</label><input type="number" id="luas-p" placeholder="Masukkan panjang" /></div>
                    <div class="input-group"><label>Lebar (l)</label><input type="number" id="luas-l" placeholder="Masukkan lebar" /></div>`,
    segitiga:      `<div class="input-group"><label>Alas (a)</label><input type="number" id="luas-a" placeholder="Masukkan alas" /></div>
                    <div class="input-group"><label>Tinggi (t)</label><input type="number" id="luas-t" placeholder="Masukkan tinggi" /></div>`,
    lingkaran:     `<div class="input-group"><label>Jari-jari (r)</label><input type="number" id="luas-r" placeholder="Masukkan jari-jari" /></div>`,
  };
  el.innerHTML = forms[shape] || "";
  document.getElementById("luas-result").textContent = "";
  document.getElementById("luas-result").className = "calc-result";
}

function hitungLuas() {
  const shape = document.getElementById("luas-shape").value;
  const el = document.getElementById("luas-result");
  let result = "";

  try {
    if (shape === "persegi") {
      const s = parseFloat(document.getElementById("luas-s").value);
      if (isNaN(s) || s <= 0) throw new Error();
      result = `L = s² = ${s}² = ${(s*s).toFixed(2)} satuan²`;
    } else if (shape === "persegipanjang") {
      const p = parseFloat(document.getElementById("luas-p").value);
      const l = parseFloat(document.getElementById("luas-l").value);
      if (isNaN(p) || isNaN(l) || p <= 0 || l <= 0) throw new Error();
      result = `L = p × l = ${p} × ${l} = ${(p*l).toFixed(2)} satuan²`;
    } else if (shape === "segitiga") {
      const a = parseFloat(document.getElementById("luas-a").value);
      const t = parseFloat(document.getElementById("luas-t").value);
      if (isNaN(a) || isNaN(t) || a <= 0 || t <= 0) throw new Error();
      result = `L = ½ × a × t = ½ × ${a} × ${t} = ${(0.5*a*t).toFixed(2)} satuan²`;
    } else if (shape === "lingkaran") {
      const r = parseFloat(document.getElementById("luas-r").value);
      if (isNaN(r) || r <= 0) throw new Error();
      result = `L = πr² = 3.14159 × ${r}² = ${(Math.PI * r * r).toFixed(4)} satuan²`;
    }
    el.textContent = result;
    el.className = "calc-result";
  } catch {
    el.textContent = "Masukkan nilai yang valid!";
    el.className = "calc-result error";
  }
}

function hitungKuadrat() {
  const a = parseFloat(document.getElementById("kd-a").value);
  const b = parseFloat(document.getElementById("kd-b").value);
  const c = parseFloat(document.getElementById("kd-c").value);
  const el = document.getElementById("kd-result");

  if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
    el.textContent = "Nilai a tidak boleh 0 dan semua kolom harus diisi!";
    el.className = "calc-result error";
    return;
  }

  const D = b * b - 4 * a * c;
  if (D < 0) {
    el.innerHTML = `D = ${D.toFixed(2)} &lt; 0 → Tidak ada akar real`;
    el.className = "calc-result error";
    return;
  }

  const x1 = (-b + Math.sqrt(D)) / (2 * a);
  const x2 = (-b - Math.sqrt(D)) / (2 * a);

  el.innerHTML = D === 0
    ? `D = 0 → x = ${x1.toFixed(4)} (akar kembar)`
    : `D = ${D.toFixed(2)}<br>x₁ = ${x1.toFixed(4)}<br>x₂ = ${x2.toFixed(4)}`;
  el.className = "calc-result";
}

// ==================== TOAST ====================
let toastTimeout;
function showToast(msg, type = "") {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.className = `toast show ${type}`;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.className = "toast";
  }, 2800);
}
