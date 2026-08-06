// ============================================================
// ТЕКСТЫ ИНТЕРФЕЙСА (кнопки, подписи, сообщения) на трёх языках.
// Меняются редко — в отличие от tours.js, который редактируется
// при каждом обновлении списка туров.
// ============================================================

const UI_STRINGS = {
  ru: {
    heroEyebrow: "Узбекистан · Шёлковый путь",
    heroTitle: "Маршрут, который запомнится<br>больше, чем фотографии",
    heroText: "Выберите тур из списка и оставьте заявку — мы перезвоним и подберём детали под вас.",
    heroCta: "Оставить заявку",
    sectionTitle: "Оставить заявку",
    sectionSubtitle: "Заполните форму — мы свяжемся с вами по указанному номеру.",
    toursLegend: "Выберите тур",
    toursLoading: "Загружаем туры…",
    tourError: "Выберите один из туров.",
    nameLabel: "Полное имя",
    namePlaceholder: "Иван Иванов",
    nameError: "Введите имя и фамилию.",
    phoneLabel: "Номер телефона",
    phonePlaceholder: "+998 90 123 45 67",
    phoneError: "Введите номер в формате +998 XX XXX XX XX.",
    submitBtn: "Отправить заявку",
    statusNotConnected: "Форма готова, но приём заявок пока не подключён к боту.",
    statusPending: "Отправляем заявку…",
    statusSuccess: "Заявка отправлена! Мы свяжемся с вами в ближайшее время.",
    statusError: "Не удалось отправить заявку. Проверьте интернет-соединение и попробуйте снова.",
    footerNote: "Заявки обрабатываются в рабочее время. Мы свяжемся с вами в течение дня."
  },
  en: {
    heroEyebrow: "Uzbekistan · Silk Road",
    heroTitle: "A journey that stays with you<br>longer than the photos",
    heroText: "Pick a tour from the list and send a request — we'll call you back to work out the details.",
    heroCta: "Send a request",
    sectionTitle: "Send a request",
    sectionSubtitle: "Fill in the form — we'll contact you at the number you provide.",
    toursLegend: "Choose a tour",
    toursLoading: "Loading tours…",
    tourError: "Please choose one of the tours.",
    nameLabel: "Full name",
    namePlaceholder: "John Smith",
    nameError: "Enter your first and last name.",
    phoneLabel: "Phone number",
    phonePlaceholder: "+998 90 123 45 67",
    phoneError: "Enter the number as +998 XX XXX XX XX.",
    submitBtn: "Send request",
    statusNotConnected: "The form is ready, but submissions aren't connected to the bot yet.",
    statusPending: "Sending your request…",
    statusSuccess: "Request sent! We'll be in touch soon.",
    statusError: "Couldn't send the request. Check your connection and try again.",
    footerNote: "Requests are handled during business hours. We'll reach out within the day."
  },
  uz: {
    heroEyebrow: "O'zbekiston · Ipak yo'li",
    heroTitle: "Suratlardan ko'ra<br>yodda qolib ketadigan sayohat",
    heroText: "Ro'yxatdan turni tanlang va ariza qoldiring — sizga qo'ng'iroq qilib, tafsilotlarni birga aniqlaymiz.",
    heroCta: "Ariza qoldirish",
    sectionTitle: "Ariza qoldirish",
    sectionSubtitle: "Formani to'ldiring — ko'rsatilgan raqam orqali siz bilan bog'lanamiz.",
    toursLegend: "Turni tanlang",
    toursLoading: "Turlar yuklanmoqda…",
    tourError: "Turlardan birini tanlang.",
    nameLabel: "To'liq ism",
    namePlaceholder: "Alisher Navoiy",
    nameError: "Ism va familiyangizni kiriting.",
    phoneLabel: "Telefon raqami",
    phonePlaceholder: "+998 90 123 45 67",
    phoneError: "Raqamni +998 XX XXX XX XX ko'rinishida kiriting.",
    submitBtn: "Ariza yuborish",
    statusNotConnected: "Forma tayyor, lekin arizalarni qabul qilish hali botga ulanmagan.",
    statusPending: "Ariza yuborilmoqda…",
    statusSuccess: "Ariza yuborildi! Tez orada siz bilan bog'lanamiz.",
    statusError: "Arizani yuborib bo'lmadi. Internet aloqasini tekshirib, qayta urinib ko'ring.",
    footerNote: "Arizalar ish vaqtida ko'rib chiqiladi. Kun davomida siz bilan bog'lanamiz."
  }
};
