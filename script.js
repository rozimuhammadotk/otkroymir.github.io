// ============================================================
// Логика формы и переключения языка.
// Для изменения текста туров редактируйте tours.js,
// для изменения интерфейсных текстов — ui-strings.js.
// Этот файл обычно трогать не нужно.
// ============================================================

// Вебхук бота — вставьте сюда ссылку, когда бот будет готов
// (получите её командой /getformurl в боте на TBC)
const WEBHOOK_URL = "";

let currentLang = "ru";

document.addEventListener("DOMContentLoaded", () => {
  setupLangSwitch();
  applyLanguage(currentLang);
  setupForm();
});

/* ---------------- Язык ---------------- */

function setupLangSwitch() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
}

function applyLanguage(lang) {
  if (typeof UI_STRINGS === "undefined" || !UI_STRINGS[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  const strings = UI_STRINGS[lang];

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (strings[key] !== undefined) el.innerHTML = strings[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (strings[key] !== undefined) el.setAttribute("placeholder", strings[key]);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  renderTours(lang);
}

/* ---------------- Туры ---------------- */

function renderTours(lang) {
  lang = lang || currentLang;
  const list = document.getElementById("tours-list");
  const strings = (typeof UI_STRINGS !== "undefined" && UI_STRINGS[lang]) || {};

  const previousChecked = list.querySelector('input[name="tour"]:checked');
  const checkedIndex = previousChecked ? previousChecked.id.replace("tour-", "") : null;

  list.innerHTML = "";

  if (typeof TOURS === "undefined" || !Array.isArray(TOURS) || TOURS.length === 0) {
    list.innerHTML = `<p class="tours-loading">${escapeHtml(strings.toursLoading || "…")}</p>`;
    return;
  }

  TOURS.forEach((tour, index) => {
    const id = `tour-${index}`;
    const title = (tour.title && tour.title[lang]) || "";
    const description = (tour.description && tour.description[lang]) || "";
    const price = (tour.price && tour.price[lang]) || "";

    const card = document.createElement("label");
    card.className = "tour-card";
    card.setAttribute("for", id);

    const priceHtml = price
      ? `<span class="tour-price">${escapeHtml(price)}</span>`
      : "";

    card.innerHTML = `
      <input type="radio" name="tour" id="${id}" value="${escapeHtml(title)}" required>
      <span class="tour-body">
        <span class="tour-title">${escapeHtml(title)}</span>
        <span class="tour-desc">${escapeHtml(description)}</span>
        ${priceHtml}
      </span>
      <span class="tour-mark" aria-hidden="true"></span>
    `;
    list.appendChild(card);
  });

  if (checkedIndex !== null) {
    const toRecheck = document.getElementById(`tour-${checkedIndex}`);
    if (toRecheck) toRecheck.checked = true;
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = String(str);
  return div.innerHTML;
}

/* ---------------- Форма ---------------- */

function setupForm() {
  const form = document.getElementById("tour-form");
  const statusEl = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-btn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearErrors();

    const strings = (typeof UI_STRINGS !== "undefined" && UI_STRINGS[currentLang]) || {};
    const tourInput = form.querySelector('input[name="tour"]:checked');
    const nameInput = document.getElementById("full-name");
    const phoneInput = document.getElementById("phone");

    let hasError = false;

    if (!tourInput) {
      showError("tour-error");
      hasError = true;
    }
    if (!nameInput.value.trim() || nameInput.value.trim().split(/\s+/).length < 2) {
      showError("name-error");
      hasError = true;
    }
    if (!isValidPhone(phoneInput.value)) {
      showError("phone-error");
      hasError = true;
    }

    if (hasError) return;

    const payload = {
      tour: tourInput.value,
      name: nameInput.value.trim(),
      phone: normalizePhone(phoneInput.value),
      language: currentLang,
      submittedAt: new Date().toISOString()
    };

    if (!WEBHOOK_URL) {
      statusEl.textContent = strings.statusNotConnected || "";
      statusEl.className = "form-status status-error";
      return;
    }

    submitBtn.disabled = true;
    statusEl.textContent = strings.statusPending || "";
    statusEl.className = "form-status status-pending";

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Bad response");

      statusEl.textContent = strings.statusSuccess || "";
      statusEl.className = "form-status status-success";
      form.reset();
    } catch (err) {
      statusEl.textContent = strings.statusError || "";
      statusEl.className = "form-status status-error";
    } finally {
      submitBtn.disabled = false;
    }
  });
}

function isValidPhone(value) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 9 && digits.length <= 13;
}

function normalizePhone(value) {
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith("998")) return `+${digits}`;
  if (digits.length === 9) return `+998${digits}`;
  return `+${digits}`;
}

function showError(id) {
  const el = document.getElementById(id);
  if (el) el.hidden = false;
}

function clearErrors() {
  document.querySelectorAll(".field-error").forEach((el) => (el.hidden = true));
}
