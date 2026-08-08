/* ═══════════════════════════════════════════════════════
   ⚙️ НАСТРОЙКИ САЙТА — МЕНЯЙТЕ ТОЛЬКО ЭТОТ ФАЙЛ
═══════════════════════════════════════════════════════ */

// 1) WEBHOOK: получите ссылку в боте командой /get_url и вставьте сюда
const WEBHOOK_URL = "https://api.telebotcreator.com/new-webhook?data=gAAAAABqdXja_9Mn4J7fYDYopA4McIZ59EoKpuZBLg7gD7Qjm634oHB_jLGJ_fst0pumpChMC6BXL_irFEH-yg82JhIIdYLhbDdIyFQlMi61BcoS-v3yyKCngYYotDto_dW623O5bO2eZ-J1IZM_k14Eh4DAb3T-hggAIb361ksTNxQwcokHcqd0wXHKnt7zr0kUJ_PqESSq";

// 2) ТУРЫ. price — число в сумах. description — короткий текст (3 строки).
//    details — ПОДРОБНЫЙ текст для кнопки «Обзор»; \n = перенос строки.
//    *_en / *_uz — переводы (необязательно). gallery — до 6 фото.
const TOURS = [
  {
    id: "koksu",
    title: "Koksu: 3 дня кемпинга",
    title_en: "Koksu: 3-day camping",
    title_uz: "Koksu: 3 kunlik kamping",
    description: "Три дня среди гор: трансфер, питание, гид и всё снаряжение включены.",
    description_en: "Three days in the mountains: transfer, meals, guide and all gear included.",
    description_uz: "Tog'lar orasida uch kun: transfer, ovqatlanish, gid va barcha jihozlar kiritilgan.",
    details: "Тур narxiga quyidagilar kiradi:\n✅ Трансфер (Ташкент — точка старта — Ташкент)\n✅ 3 дня / 2 ночи в кемпинге\n✅ 3-разовое питание и тёплые напитки\n✅ Услуги гида и повара\n✅ Снаряжение: палатка, спальник, коврик\n\nВас ждут: горный воздух, вечер у костра, рассвет над вершинами и фотопрогулки.",
    details_en: "Included:\n✅ Transfer (Tashkent — start point — Tashkent)\n✅ 3 days / 2 nights camping\n✅ 3 meals a day and hot drinks\n✅ Guide and cook services\n✅ Gear: tent, sleeping bag, mat\n\nWaiting for you: mountain air, campfire evenings and sunrise over the peaks.",
    details_uz: "Narxga kiradi:\n✅ Transfer (Toshkent — boshlanish nuqtasi — Toshkent)\n✅ 3 kun / 2 tun kamping\n✅ Kuniga 3 mahsul ovqatlanish\n✅ Gid va oshpaza xizmati\n✅ Jihozlar: palatka, spalnik, kovrik\n\nSizni kutmoqda: tog' havosi, oloq boshida oqshom va cho'qqilar uzra tong.",
    price: 9800000,
    photo: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25bb2?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=60"
    ]
  },
  {
    id: "baikal",
    title: "Байкал: зимняя сказка",
    title_en: "Baikal: Winter Tale",
    title_uz: "Baykal: qishki ertak",
    description: "Прозрачный лёд, пузыри воздуха подо льдом и шаманские легенды.",
    description_en: "Crystal-clear ice, frozen bubbles and shaman legends.",
    description_uz: "Shaffof muz, muz ostidagi pufakchalar va shaman afsonalari.",
    details: "Что в программе:\n✅ Джип-тур по льду Байкала\n✅ Фотостопы у пузырей и торосов\n✅ Горячий обед на берегу\n✅ Посещение шаман-скалы\n\nВозьмите с собой: тёплую куртку, перчатки и солнечные очки — лёд слепит!",
    details_en: "Program:\n✅ Jeep tour over Baikal ice\n✅ Photo stops at bubbles and hummocks\n✅ Hot lunch on the shore\n✅ Shaman Rock visit\n\nBring: a warm jacket, gloves and sunglasses — the ice is bright!",
    details_uz: "Dastur:\n✅ Baykal muzi bo'ylab jip-safar\n✅ Pufakchalar va toroslar yonida fotostop\n✅ Sohilda issiq tushlik\n✅ Shaman qoyasiga tashrif\n\nOling: issiq kurtka, qo'lqop va ko'zoynak — muz yaltiraydi!",
    price: 11500000,
    photo: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1501785888041-af377d22eeff?auto=format&fit=crop&w=800&q=60"
    ]
  },
  {
    id: "kamchatka",
    title: "Камчатка",
    title_en: "Kamchatka",
    title_uz: "Kamchatka",
    description: "Вулканы, океан и термальные источники.",
    description_en: "Volcanoes, the ocean and hot springs.",
    description_uz: "Vulqonlar, okean va issiq buloqlar.",
    details: "Главные впечатления:\n✅ Восхождение на авачинский вулкан\n✅ Тихий океан и чёрный пляж\n✅ Термальные источники\n✅ Морская прогулка к скалам Старичков\n\nУровень нагрузки: средний, специальная подготовка не нужна.",
    details_en: "Highlights:\n✅ Avachinsky volcano hike\n✅ The Pacific and the black sand beach\n✅ Hot springs\n✅ Boat trip to Starichkov Rocks\n\nEffort level: moderate, no training needed.",
    details_uz: "Asosiy taassurotlar:\n✅ Avachinskiy vulqoniga ko'tarilish\n✅ Tinch okean va qora plyaj\n✅ Issiq buloqlar\n✅ Starichkov qoyalariga dengiz sayri\n\nYuklama: o'rtacha, maxsus tayyorgarlik shart emas.",
    price: 19900000,
    photo: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800&q=60",
    gallery: [
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25bb2?auto=format&fit=crop&w=800&q=60"
    ]
  }
];

/* ═══════════════════════════════════════════════════════
   🚀 ЛОГИКА САЙТА — НИЖЕ НИЧЕГО НЕ МЕНЯЙТЕ
═══════════════════════════════════════════════════════ */

const I18N = {
  ru: {
    heroTitle: "Откройте мир вместе с нами",
    heroSub: "Авторские маршруты, продуманные до мелочей. Путешествия, после которых мир уже не будет прежним.",
    btnStart: "В путь", toursTitle: "Наши туры",
    btnReview: "Обзор", btnHide: "Скрыть", btnBook: "Хочу туда",
    formTitle: "Оформление заявки",
    formNote: "Заполните форму — все поля обязательны. Мы бережно относимся к вашему времени.",
    labelTour: "Тур", selectPlaceholder: "Выберите тур",
    labelSurname: "Фамилия", labelName: "Имя", labelPhone: "Номер телефона для связи",
    phSurname: "Иванов", phName: "Иван",
    btnSubmit: "Отправить заявку",
    modalTitle: "Подтверждение заявки",
    modalText: "После отправки заявки наш администратор свяжется с вами по указанному номеру. Подтверждаете отправку?",
    modalCancel: "Отмена", modalConfirm: "Подтверждаю",
    emptyTours: "Туры скоро появятся. Загляните позже!",
    errTour: "Пожалуйста, выберите тур из списка.",
    errSurname: "Пожалуйста, укажите фамилию (минимум 2 символа).",
    errName: "Пожалуйста, укажите имя (минимум 2 символа).",
    errPhone: "Введите действующий номер телефона (минимум 10 цифр).",
    errWebhook: "Отправка не настроена. Обратитесь к администратору сайта.",
    sending: "Отправка…",
    successMsg: "Заявка отправлена! Администратор свяжется с вами в ближайшее время.",
    errorMsg: "Не удалось отправить заявку. Возможно, сервер сейчас перегружен — пожалуйста, попробуйте отправить ещё раз через несколько минут."
  },
  en: {
    heroTitle: "Discover the world with us",
    heroSub: "Thoughtfully crafted routes. Journeys that change the way you see the world.",
    btnStart: "Let's go", toursTitle: "Our tours",
    btnReview: "Overview", btnHide: "Hide", btnBook: "I want to go",
    formTitle: "Booking request",
    formNote: "Fill in the form — all fields are required.",
    labelTour: "Tour", selectPlaceholder: "Choose a tour",
    labelSurname: "Last name", labelName: "First name", labelPhone: "Contact phone number",
    phSurname: "Smith", phName: "John",
    btnSubmit: "Send request",
    modalTitle: "Confirm request",
    modalText: "After sending, our manager will contact you at the provided phone number. Confirm sending?",
    modalCancel: "Cancel", modalConfirm: "Confirm",
    emptyTours: "Tours are coming soon. Check back later!",
    errTour: "Please choose a tour from the list.",
    errSurname: "Please enter your last name (min 2 characters).",
    errName: "Please enter your first name (min 2 characters).",
    errPhone: "Please enter a valid phone number (min 10 digits).",
    errWebhook: "Sending is not configured. Contact the site administrator.",
    sending: "Sending…",
    successMsg: "Request sent! Our manager will contact you soon.",
    errorMsg: "Failed to send the request. The server may be busy right now — please try again in a few minutes."
  },
  uz: {
    heroTitle: "Biz bilan dunyoni kashf eting",
    heroSub: "Har bir tafsilotigacha o'ylangan marshrutlar. Dunyoqarashingizni o'zgartiradigan sayohatlar.",
    btnStart: "Yo'lga", toursTitle: "Bizning turlar",
    btnReview: "Ko'rib chiqish", btnHide: "Yashirish", btnBook: "U yerga bormoqchiman",
    formTitle: "Ariza topshirish",
    formNote: "Formani to'ldiring — barcha maydonlar majburiy. Vaqtingizni qadrlaymiz.",
    labelTour: "Tur", selectPlaceholder: "Turni tanlang",
    labelSurname: "Familiya", labelName: "Ism", labelPhone: "Bog'lanish uchun telefon raqami",
    phSurname: "Karimov", phName: "Aziz",
    btnSubmit: "Arizani yuborish",
    modalTitle: "Arizani tasdiqlash",
    modalText: "Ariza yuborilgach, administratorimiz ko'rsatilgan raqam orqali siz bilan bog'lanadi. Yuborishni tasdiqlaysizmi?",
    modalCancel: "Bekor qilish", modalConfirm: "Tasdiqlayman",
    emptyTours: "Turlar tez orada paydo bo'ladi. Keyinroq qayta kiring!",
    errTour: "Iltimos, ro'yxatdan turni tanlang.",
    errSurname: "Iltimos, familiyangizni kiriting (kamida 2 ta belgi).",
    errName: "Iltimos, ismingizni kiriting (kamida 2 ta belgi).",
    errPhone: "Iltimos, to'g'ri telefon raqamini kiriting (kamida 10 ta raqam).",
    errWebhook: "Yuborish sozlanmagan. Sayt administratoriga murojaat qiling.",
    sending: "Yuborilmoqda…",
    successMsg: "Ariza yuborildi! Administratorimiz tez orada siz bilan bog'lanadi.",
    errorMsg: "Arizani yuborib bo'lmadi. Hozirda server band bo'lishi mumkin — iltimos, bir necha daqiqadan so'ng qayta urinib ko'ring."
  }
};

let lang = localStorage.getItem("om_lang") || "ru";
let pendingPayload = null;
let lastMsg = null; /* ✅ чтобы статус переводился при смене языка */
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const $ = (id) => document.getElementById(id);
const t = (key) => (I18N[lang] && I18N[lang][key]) || I18N.ru[key] || key;
const nl = (s) => (s || "").replace(/\\n/g, "\n");
const tourField = (tour, f) => {
  if (lang === "en" && tour[f + "_en"]) return tour[f + "_en"];
  if (lang === "uz" && tour[f + "_uz"]) return tour[f + "_uz"];
  return tour[f] || "";
};

function formatPrice(p) {
  const n = Number(p) || 0;
  if (lang === "en") return n.toLocaleString("en-US") + " UZS";
  if (lang === "uz") return n.toLocaleString("ru-RU") + " so'm";
  return n.toLocaleString("ru-RU") + " сум";
}

const FALLBACK_IMG = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'>" +
  "<rect width='600' height='600' fill='#dceef7'/>" +
  "<path d='M120 380 L240 200 L330 320 L420 210 L500 380 Z' fill='#17586f'/>" +
  "<path d='M90 440 q60 -30 120 0 t120 0 t120 0' stroke='#2e8bab' stroke-width='22' fill='none' stroke-linecap='round'/>" +
  "</svg>"
);
const LOGO_FALLBACK = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>" +
  "<rect width='100' height='100' fill='#bfe3f2'/>" +
  "<circle cx='50' cy='50' r='40' fill='none' stroke='#14586f' stroke-width='6'/>" +
  "<path d='M16 55 L36 30 L47 43 L58 27 L84 55 Z' fill='#14586f'/>" +
  "<path d='M18 63 q11 -5 22 0 t22 0 t20 0' stroke='#eaf6fc' stroke-width='5' fill='none' stroke-linecap='round'/>" +
  "<path d='M20 73 q11 -5 22 0 t22 0 t16 0' stroke='#2e8bab' stroke-width='6' fill='none' stroke-linecap='round'/>" +
  "</svg>"
);
const imgTag = (src, cls, alt) =>
  `<img class="${cls}" src="${src}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.src='${FALLBACK_IMG}';">`;

/* ✨ Плавное появление */
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      en.target.classList.add("in");
      setTimeout(() => { en.target.style.transitionDelay = ""; en.target.classList.add("done"); }, 1100);
      io.unobserve(en.target);
    }
  });
}, { threshold: .12 });
function observeReveals() {
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
}

/* ✅ статус-сообщение: храним ключ, переводим на лету */
function setMsg(key, type) {
  lastMsg = key ? { key, type } : null;
  const m = $("form-message");
  m.textContent = key ? t(key) : "";
  m.className = "form-message" + (type ? " " + type : "");
}

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  renderTours();
  fillSelect();
  if (lastMsg && lastMsg.key) setMsg(lastMsg.key, lastMsg.type); /* ✅ перевод статуса */
}

function renderTours() {
  const list = $("tours-list");
  if (!TOURS.length) { list.innerHTML = `<p class="tours-empty">${t("emptyTours")}</p>`; return; }
  list.innerHTML = TOURS.map(tour => `
    <article class="tour-card reveal" data-id="${tour.id}">
      <div class="tour-main">
        ${imgTag(tour.photo, "tour-photo", tourField(tour, "title"))}
        <div class="tour-text">
          <h3 class="tour-title">${tourField(tour, "title")}</h3>
          <p class="tour-desc">${nl(tourField(tour, "description"))}</p>
        </div>
      </div>
      <div class="tour-expand"><div class="tour-expand-inner">
        <div class="tour-gallery">${tour.gallery.map(g => imgTag(g, "", tourField(tour, "title"))).join("")}</div>
        <div class="tour-details">${nl(tourField(tour, "details")) || nl(tourField(tour, "description"))}</div>
      </div></div>
      <div class="tour-controls">
        <span class="tour-price">${formatPrice(tour.price)}</span>
        <div class="tour-actions">
          <button class="btn btn-secondary btn-review">${t("btnReview")}</button>
          <button class="btn btn-primary btn-book">${t("btnBook")}</button>
        </div>
      </div>
    </article>`).join("");

  document.querySelectorAll(".tour-card").forEach((card, i) => {
    card.style.transitionDelay = Math.min(i, 5) * 80 + "ms";
    initGalleryAutoScroll(card.querySelector(".tour-gallery"));
  });
  observeReveals();
}

/* 🎞 Галерея листается сама; тронули — пауза */
function initGalleryAutoScroll(gal) {
  if (!gal || gal.dataset.init) return;
  gal.dataset.init = "1";
  gal._paused = false;
  const softPause = () => { gal._paused = true; clearTimeout(gal._t); gal._t = setTimeout(() => { gal._paused = false; }, 3000); };
  gal.addEventListener("pointerenter", () => { gal._paused = true; clearTimeout(gal._t); });
  gal.addEventListener("pointerleave", () => { clearTimeout(gal._t); gal._t = setTimeout(() => { gal._paused = false; }, 1200); });
  gal.addEventListener("wheel", softPause, { passive: true });
  gal.addEventListener("touchstart", softPause, { passive: true });
  gal.addEventListener("pointerdown", softPause);
}
let lastTick = performance.now();
function autoScrollLoop(now) {
  const dt = Math.min(50, now - lastTick); lastTick = now;
  if (!reduceMotion) {
    document.querySelectorAll(".tour-card.expanded .tour-gallery").forEach(gal => {
      if (gal._paused || gal.scrollWidth <= gal.clientWidth) return;
      const max = gal.scrollWidth - gal.clientWidth;
      if (gal.scrollLeft >= max - 1) {
        gal._paused = true;
        gal.scrollTo({ left: 0, behavior: "smooth" });
        clearTimeout(gal._t); gal._t = setTimeout(() => { gal._paused = false; }, 1200);
      } else {
        gal.scrollLeft += dt * 0.03;
      }
    });
  }
  requestAnimationFrame(autoScrollLoop);
}

function fillSelect() {
  const sel = $("tour-select");
  const prev = sel.value;
  sel.innerHTML = `<option value="" disabled selected>${t("selectPlaceholder")}</option>` +
    TOURS.map(tour => `<option value="${tour.id}">${tourField(tour, "title")}</option>`).join("");
  if (prev && TOURS.some(x => x.id === prev)) sel.value = prev;
  sel.classList.toggle("placeholder", sel.value === "");
}

$("tours-list").addEventListener("click", (e) => {
  const review = e.target.closest(".btn-review");
  const book = e.target.closest(".btn-book");
  if (review) {
    const card = review.closest(".tour-card");
    review.textContent = card.classList.toggle("expanded") ? t("btnHide") : t("btnReview");
  } else if (book) {
    const sel = $("tour-select");
    sel.value = book.closest(".tour-card").dataset.id;
    sel.classList.remove("placeholder");
    $("booking").scrollIntoView({ behavior: "smooth" });
    sel.focus({ preventScroll: true });
  }
});

$("phone").addEventListener("input", (e) => { e.target.value = e.target.value.replace(/[^\d+()\-\s]/g, ""); });
$("tour-select").addEventListener("change", (e) => { e.target.classList.toggle("placeholder", e.target.value === ""); });

$("lead-form").addEventListener("submit", (e) => {
  e.preventDefault();
  setMsg("");
  const sel = $("tour-select");
  const surname = $("surname").value.trim();
  const name = $("name").value.trim();
  const phone = $("phone").value.trim();

  if (!sel.value) return setMsg("errTour", "error");
  if (surname.length < 2) return setMsg("errSurname", "error");
  if (name.length < 2) return setMsg("errName", "error");
  if (phone.replace(/\D/g, "").length < 10) return setMsg("errPhone", "error");

  pendingPayload = { tour_name: sel.options[sel.selectedIndex].text, surname, name, phone, lang: lang.toUpperCase() };
  $("confirm-modal").classList.remove("hidden");
});

$("modal-cancel").addEventListener("click", () => { $("confirm-modal").classList.add("hidden"); pendingPayload = null; });
$("confirm-modal").addEventListener("click", (e) => {
  if (e.target === $("confirm-modal")) { $("confirm-modal").classList.add("hidden"); pendingPayload = null; }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !$("confirm-modal").classList.contains("hidden")) {
    $("confirm-modal").classList.add("hidden"); pendingPayload = null;
  }
});
$("modal-confirm").addEventListener("click", async () => {
  $("confirm-modal").classList.add("hidden");
  if (!pendingPayload) return;
  const payload = pendingPayload; pendingPayload = null;
  await sendToWebhook(payload);
});

async function sendToWebhook(payload) {
  if (!WEBHOOK_URL || WEBHOOK_URL.includes("ВСТАВЬТЕ")) { setMsg("errWebhook", "error"); return; }
  const btn = $("submit-btn");
  btn.disabled = true; setMsg("sending");
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("HTTP " + res.status);
    setMsg("successMsg", "success");
    $("lead-form").reset();
    $("tour-select").classList.add("placeholder");
  } catch (err) {
    console.error(err);
    setMsg("errorMsg", "error");
  } finally {
    btn.disabled = false;
  }
}

/* 🌙 ТЕМА: плавно, запоминается */
const themeToggle = $("theme-toggle");
function applyTheme(dark) {
  document.body.classList.toggle("dark", dark);
  const meta = document.getElementById("meta-theme");
  if (meta) meta.content = dark ? "#0a1a22" : "#f5fafd";
}
const savedTheme = localStorage.getItem("om_theme");
applyTheme(savedTheme ? savedTheme === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
themeToggle.addEventListener("click", () => {
  document.body.classList.add("theme-switching");
  const dark = !document.body.classList.contains("dark");
  applyTheme(dark);
  localStorage.setItem("om_theme", dark ? "dark" : "light");
  setTimeout(() => document.body.classList.remove("theme-switching"), 650);
});

/* 🖼 Лого-фолбэк */
document.querySelectorAll("img[data-logo-fallback]").forEach(im => {
  const swap = () => { if (!im.naturalWidth) im.src = LOGO_FALLBACK; };
  if (im.complete) swap(); else im.addEventListener("error", swap);
});

$("btn-start").addEventListener("click", () => $("tours").scrollIntoView({ behavior: "smooth" }));
function syncLangButtons(){
  document.querySelectorAll(".lang-btn").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
}
document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.dataset.lang === lang) return;
    lang = btn.dataset.lang;
    localStorage.setItem("om_lang", lang);
    syncLangButtons();
    applyLang();
  });
});
syncLangButtons();

applyLang();
observeReveals();
requestAnimationFrame(autoScrollLoop);

/* ═══════════ 🔍 ЛАЙТБОКС: фото открываются крупно ═══════════ */
(function(){
  const lb = $("lightbox"), lbImg = $("lb-img"), lbCap = $("lb-caption");
  let list = [], idx = 0, base = "", touchX = null;

  function show(){
    lbImg.src = list[idx];
    lbCap.textContent = (base ? base + "  ·  " : "") + (idx + 1) + " / " + list.length;
  }
  function open(images, i, title){
    list = images; idx = i; base = title || "";
    show();
    lb.classList.remove("hidden");
    requestAnimationFrame(() => lb.classList.add("open"));
    document.body.style.overflow = "hidden";
  }
  function close(){
    lb.classList.remove("open");
    document.body.style.overflow = "";
    setTimeout(() => lb.classList.add("hidden"), 300);
  }
  function step(d){ idx = (idx + d + list.length) % list.length; show(); }

  /* клик по фото тура или по картинке в галерее */
  document.addEventListener("click", (e) => {
    const img = e.target.closest(".tour-photo, .tour-gallery img");
    if (!img) return;
    const card = img.closest(".tour-card");
    const tour = TOURS.find(x => x.id === card.dataset.id);
    if (!tour) return;
    const images = [tour.photo].concat(tour.gallery);
    let i = 0;
    if (!img.classList.contains("tour-photo")) {
      i = Array.from(card.querySelectorAll(".tour-gallery img")).indexOf(img) + 1;
    }
    open(images, i, tourField(tour, "title"));
  });

  lb.querySelector(".lb-close").addEventListener("click", close);
  lb.querySelector(".lb-prev").addEventListener("click", (e) => { e.stopPropagation(); step(-1); });
  lb.querySelector(".lb-next").addEventListener("click", (e) => { e.stopPropagation(); step(1); });
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });

  /* клавиатура на компьютере */
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  /* свайпы на телефоне */
  lb.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
    touchX = null;
  }, { passive: true });
})();;;
