/* ═══════════════════════════════════════════════════════
   ⚙️ НАСТРОЙКИ САЙТА — МЕНЯЙТЕ ТОЛЬКО ЭТОТ ФАЙЛ
═══════════════════════════════════════════════════════ */

// 1) WEBHOOK: получите ссылку в боте командой /get_url и вставьте сюда
const WEBHOOK_URL = "https://api.telebotcreator.com/new-webhook?data=gAAAAABqdXja_9Mn4J7fYDYopA4McIZ59EoKpuZBLg7gD7Qjm634oHB_jLGJ_fst0pumpChMC6BXL_irFEH-yg82JhIIdYLhbDdIyFQlMi61BcoS-v3yyKCngYYotDto_dW623O5bO2eZ-J1IZM_k14Eh4DAb3T-hggAIb361ksTNxQwcokHcqd0wXHKnt7zr0kUJ_PqESSq";

// 2) GOOGLE-ТАБЛИЦА = АДМИН-ПАНЕЛЬ БЕЗ КОДА:
//    вставьте опубликованную CSV-ссылку — и дальше туры правятся прямо в таблице
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSjD1uAUa-xKcHHNF99agtT1gT8U4w0joxcgfhBVv7dKRUkOYKYN2Aujcw58ew8DhOK3TEYzIUgVI3W/pub?output=csv";
// 2) ТУРЫ. price — число в сумах. description — короткий текст (3 строки).
//    details — ПОДРОБНЫЙ текст для кнопки «Обзор»; \n = перенос строки.
//    *_en / *_uz — переводы (необязательно). gallery — до 6 фото.
const TOURS = [
   {
    id: "koksu",
    title: "Ko'ksu: 3 дня кемпинга",
    title_en: "Koksu: 3-day camping tour",
    title_uz: "Ko'ksu yorig'iga 3 kunlik camping tur",
    description: "3 дня в ущелье Ко'ксу: трансфер, питание, гид и всё снаряжение включены.",
    description_en: "3 days in the Koksu gorge: transfer, meals, guide and all gear included.",
    description_uz: "Ko'ksu yorig'ida 3 kun: transfer, ovqatlanish, gid va barcha jihozlar kiritilgan.",
    details: "🗺 Что входит в стоимость тура?\n🚌 Удобный трансфер (Ташкент — точка старта — Ташкент)\n🍽️ 3 раза в день вкусное и горячее питание\n🧑‍️ Услуги опытного гида\n⛺ Всё необходимое снаряжение для кемпинга (палатка, спальный мешок, коврик)\n🎟️ Экосбор и вход в заповедник\n\n✨ Что вас ждёт в путешествии?\n🍲 Вкусная еда: горячие и аппетитные блюда, приготовленные на свежем воздухе у костра.\n🎲 Отличный отдых: весёлая и дружная компания, разнообразные уютные игры и беседы у вечернего костра.\n📸 Великолепная природа: неповторимые, волшебные виды ущелья Ко'ксу и чистый горный воздух!\n\n📍 <b>Ташкентская область, Бостанлыкский район.</b>",
    details_en: "🗺 What's included in the tour price?\n🚌 Comfortable transfer (Tashkent — starting point — Tashkent)\n🍽️ Delicious hot meals 3 times a day\n🧑‍️ Experienced guide service\n All necessary camping gear (tent, sleeping bag, mat)\n🎟️ Eco-tourism and reserve entry fees\n\n✨ What awaits you on the trip?\n🍲 Delicious food: hot, tasty dishes cooked outdoors around the campfire.\n🎲 Great recreation: a fun, friendly group, cozy games and conversations around the evening fire.\n📸 Stunning nature: the unique, magical landscapes of the Koksu gorge and fresh mountain air!",
    details_uz: "🗺 Tur narxiga nimalar kiradi?\n🚌 Qulay transfer (Toshkent — boshlanish nuqtasi — Toshkent)\n🍽️ 3 kun davomida 3 mahal mazali va issiq ovqatlar\n🧑‍️ Tajribali gid xizmati\n⛺ Camping uchun barcha kerakli anjomlar (palatka, spalniy meshok, karemat)\n🎟️ Ekotizm va qo'riqxona kirish to'lovlari\n\n✨ Sayohatda sizni nimalar kutmoqda?\n🍲 Mazali taomlar: ochiq havoda, gulxan atrofida pishirilgan issiq va lazzatli ovqatlar.\n🎲 Ajoyib hordiq: quvnoq va ahil jamoa, kechki gulxan atrofida turli xil samimiy o'yinlar hamda suhbatlar.\n📸 Muazzam tabiat: Ko'ksu yorig'ining takrorlanmas, sehrli manzaralari va toza tog' havosi!",
    price: 1200000,
    photo: "https://uznews.uz/storage/uploads/68/10/8b/file_68108b9e8c279_avif.avif",
    gallery: [
      "https://eurasia.travel/wp-content/uploads/wpforo/attachments/11/1229-photo2026-03-2709-37-06.jpg",
      "https://d3fphkxyf5o5bm.cloudfront.net/image-resize/format=webp,w=1920/QwRY54Li1HMwD7oNfod9Vp09whWbMlytwrrSjiSUQV",
      "https://uznews.uz/storage/uploads/68/10/8b/file_68108ba360e16_avif.avif",
      "https://uznews.uz/storage/uploads/68/10/8b/file_68108b9daa1da_avif.avif",
      "https://uznews.uz/storage/uploads/68/10/8b/file_68108ba130c32_avif.avif"
    ]
  },
    {
    id: "kulasya",
    title: "Кулосья: тур одного дня",
    title_en: "Kulasya Waterfall: one-day tour",
    title_uz: "Kulasya sharsharasiga bir kunlik tur",
    description: "Однодневный тур к водопаду Кулосьи: отдых у водопада, лёгкий трекинг и обед на свежем воздухе.",
    description_en: "A one-day trip to the Kulasya waterfall: rest by the falls, light trekking and a tasty outdoor lunch.",
    description_uz: "Kulasya sharsharasiga bir kunlik tur: sharshara yonida hordiq, yengil treking va ochiq havoda mazali tushlik.",
    details: "🌊 Водопад Кулосьи незабываемый тур одного дня!\nХотите в жаркие дни отдохнуть в прохладной горной тени рядом с шумящим водопадом? Тогда это приключение именно для вас! 🏔✨\n🗓 Дата: 22 августа (1-дневный тур)\n💰 Цена: 199 000 сум (с человека)\n\n💵 Что входит в стоимость тура?\n🚌 Удобный трансфер (Ташкент — Кулосья — Ташкент)\n👨‍🌾 Услуги опытного гида (сопровождение и безопасность)\n🍱 Вкусный обед (на свежем воздухе)\n🎟 Экосбор и вход в заповедник\n\n✨ Что вас ждёт в путешествии?\n💧 Чудесный водопад Куласы: красивый водопад среди горных каньонов и прохладный бриз.\n📸 Отличная фотосессия: яркие и запоминающиеся снимки на лоне природы.\n🚶‍♂️ Лёгкий трекинг: приятная прогулка по чистому и прохладному горному воздуху.\n👥 Весёлая компания: новые друзья и тёплая атмосфера!\n\n🎒 Рекомендуем взять с собой:\n🥾 Удобные кроссовки для горных прогулок\n🧢 Головной убор от солнца и очки\n💧 Личную бутылку воды\n🆔 Документ, удостоверяющий личность (паспорт / ID)\n\n⚠️ Количество мест ограничено! Забронируйте место для себя и друзей прямо сейчас!\n\n<b>📍 Бурчмулла, Бостанлыкский район, Ташкентская область.</b>",
    details_en: "🌊 Kulasya Waterfall: an unforgettable one-day tour!\nWant to escape the hot days and relax in the cool, pure mountain air beside a roaring waterfall? Then this adventure is made for you! 🏔✨\n🗓 Date: August 22 (1-day tour)\n💰 Price: 199,000 UZS (per person)\n\n💵 What's included in the tour price?\n🚌 Comfortable transfer (Tashkent — Kulasya — Tashkent)\n👨‍🌾 Experienced guide service (companionship and safety)\n🍱 Tasty lunch (outdoors)\n🎟 Eco-tourism and reserve entry fees\n\n✨ What awaits you on the trip?\n💧 The magical Kulasya waterfall: a beautiful waterfall among mountain canyons and a cool breeze.\n📸 Great photo session: a chance to take bright, memorable pictures in the heart of nature.\n🚶‍♂️ Light trekking: a pleasant walk through fresh, cool mountain air.\n👥 Fun company: new friends and a warm atmosphere!\n\n🎒 Recommended to bring with you:\n🥾 Comfortable sneakers for mountain walking\n🧢 Sun-protective hat and sunglasses\n💧 Personal water bottle\n🆔 ID document (passport / ID)\n\n⚠️ The number of seats is limited! Book a spot for you and your friends right now!\n\n<b>📍 Burchmulla, Bostanlyk district, Tashkent region.</b>",
    details_uz: "🌊 Kulasya sharsharasiga bir kunlik tur!\nIssiq kunlarda tog'ning salqin va musaffo bag'rida, shovillab turgan sharshara yonida hordiq chiqarishni xohlaysizmi? Unda ushbu sarguzasht aynan siz uchun! 🏔✨\n🗓 Sana: 22-avgust (1 kunlik tur)\n💰 Narxi: 199 000 so'm (bir kishi uchun)\n\n💵 Tur narxiga nimalar kiradi?\n🚌 Qulay Transfer (Toshkent – Kulasya – Toshkent)\n👨‍🌾 Tajribali Gid xizmati (yo'ldosh va xavfsizlik)\n🍱 Mazali Tushlik (ochiq havoda)\n🎟 Ekotizim va qo'riqxona kirish to'lovlari\n\n✨ Sayohatda sizni nimalar kutmoqda?\n💧 Mo'jizakor Kulasya sharsharasi: tog' kanyonlari orasida joylashgan go'zal sharshara va salqin shabboda.\n📸 Ajoyib fotosessiya: tabiat bag'rida esda qolarli va yorqin rasmlarga tushish imkoniyati.\n🚶‍♂️ Yengil treking: salqin va toza tog' havosi bo'ylab maroqli yurish.\n👥 Quvnoq jamoa: yangi do'stlar va samimiy muhit!\n\n🎒 O'zingiz bilan olishingiz tavsiya etiladi:\n🥾 Tog'da yurish uchun qulay krossovka\n🧢 Quyoshdan himoya qiluvchi bosh kiyim va ko'zoynak\n💧 Shaxsiy suv idishi\n🆔 Shaxsni tasdiqlovchi hujjat (Pasport / ID)\n\n⚠️ Joylar soni chegaralangan! Hoziroq o'zingiz va do'stlaringiz uchun joy band qiling!\n\n<b>📍 Burchmulla, Bo‘stonliq tumani, Toshkent viloyati.</b>",
    price: 199000,
    photo: "https://centralasia-adventures.com/image/new/67f58d6fc2-436.jpg",
    gallery: [
      "https://woyager.uz/wp-content/uploads//%D0%9A%D1%83%D0%BB%D0%BE%D1%81%D1%8C%D1%8F-%D0%BD%D0%B8%D0%B6%D0%BD%D0%B8%D0%B5-2021-%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C/dsc08271.webp",
      "https://woyager.uz/wp-content/uploads//%D0%9A%D1%83%D0%BB%D0%BE%D1%81%D1%8C%D1%8F-%D0%BD%D0%B8%D0%B6%D0%BD%D0%B8%D0%B5-2021-%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C/dsc08252.webp",
      "https://woyager.uz/wp-content/uploads//%D0%9A%D1%83%D0%BB%D0%BE%D1%81%D1%8C%D1%8F-%D0%BD%D0%B8%D0%B6%D0%BD%D0%B8%D0%B5-2021-%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C/dsc08305.webp",
      "https://woyager.uz/wp-content/uploads//%D0%9A%D1%83%D0%BB%D0%BE%D1%81%D1%8C%D1%8F-%D0%BD%D0%B8%D0%B6%D0%BD%D0%B8%D0%B5-2021-%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C/dsc08236.webp",
      "https://woyager.uz/wp-content/uploads//%D0%9A%D1%83%D0%BB%D0%BE%D1%81%D1%8C%D1%8F-%D0%BD%D0%B8%D0%B6%D0%BD%D0%B8%D0%B5-2021-%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C/dsc08286-960x540.webp"
    ]
  },
    {
    id: "charvak",
    title: "Чарвак: кино-кемпинг, 2 дня",
    title_en: "Charvak: cinema camping, 2-day tour",
    title_uz: "Chorvoqda kino-kemping: 2 kunlik tur",
    description: "2 дня и 1 ночь на Чарваке: катер, кино под открытым небом, кемпинг и ужин у воды.",
    description_en: "2 days / 1 night at Charvak: speedboat ride, open-air cinema, camping and dinners by the water.",
    description_uz: "Chorvoqda 2 kun / 1 kecha: katerda uchish, ochiq osmon ostida kino, kemping va suv bo'yida kechki ovqat.",
    details: "🎬 Кинотур в Чарваке — незабываемый кино-кемпинг! 🌊⛺️\nХотите провести последние дни лета у голубого Чарвакского водохранилища — с кино под открытым небом и захватывающими приключениями? Тогда этот тур именно для вас!\n🗓 Дата: 30–31 августа (2 дня / 1 ночь)\n💰 Цена: 350 000 сум (с человека)\n📍 Локация: Чарвак\n\n💵 Что входит в стоимость тура?\n🚤 Полёт на катере: незабываемая быстрая поездка и драйв по чистым голубым водам Чарвака!\n🎬 Вечерний кинопоказ: романтический просмотр фильма у воды, под открытым небом и звёздами.\n🍽 Ужин в течение 2 дней: специально приготовленные вкусные вечерние блюда.\n⛺️ Кемпинг: ночной лагерь, ночёвка в палатке и душевный отдых у костра.\n\n✨ Что вас ждёт в путешествии?\n🌅 Великолепные виды Чарвака: закат и чистый горно-водный воздух.\n📸 Отличная фотосессия: эстетичные кадры на катере и на территории кемпинга.\n🔥 Атмосферный вечер у костра: музыка, весёлая компания и новые друзья.\n\n🎒 Путешественникам рекомендуется взять с собой:\n🧥 Тёплую одежду — ночью бывает прохладно\n🩳 Купальники и полотенце\n🧢 Одежду и очки для защиты от солнца\n💡 Личные средства гигиены и пауэрбанк\n\n📍 <b>Ташкентская область, Бостанлыкский район.</b>",
    details_en: "🎬 Cinema tour in Charvak — an unforgettable movie-camping! 🌊️\nWant to spend the last days of summer by the blue Charvak reservoir with open-air cinema and exciting adventures? Then this tour is made for you!\n🗓 Date: August 30–31 (2 days / 1 night)\n💰 Price: 350,000 UZS (per person)\n📍 Location: Charvak\n\n💵 What's included in the tour price?\n🚤 Speedboat ride: an unforgettable fast ride and pure drive on the clean blue waters of Charvak!\n🎬 Evening cinema show: a romantic movie by the water, under the open sky and stars.\n🍽 Dinners for 2 days: specially prepared delicious evening dishes.\n⛺️ Camping: night camp, sleeping in tents and cozy rest around the campfire.\n\n✨ What awaits you on the trip?\n🌅 Stunning views of Charvak: sunsets and fresh mountain-water air.\n📸 Great photo session: aesthetic shots on the speedboat and around the campsite.\n🔥 Atmospheric night around the campfire: music, a fun group and new friends.\n\n🎒 Travelers are recommended to bring:\n🧥 Warmer clothes — it gets cool at night\n🩳 Swimwear and a towel\n🧢 Sun-protective clothing / sunglasses\n💡 Personal hygiene items and a power bank\n\n📍 <b>Tashkent region, Bostanlyk district.</b>",
    details_uz: "🎬 CINEMA TOUR IN CHARVAK — CHORVOQDA UNUTILMAS KINO-KEMPING! 🌊⛺️\nYozning so'nggi kunlarini moviy Chorvoq suv ombori bo'yida, ochiq osmon ostidagi kino va hayajonli sarguzashtlar bilan o'tkazishni xohlaysizmi? Unda ushbu tur aynan siz uchun!\n🗓 Sana: 30–31-avgust (2 kun / 1 kecha)\n💰 Narxi: 350 000 so'm (bir kishi uchun)\n📍 Lokalizatsiya: Chorvoq\n\n💵 Tur narxiga nimalar kiradi?\n🚤 Katerda uchish: Chorvoqning toza va moviy suvida tezkor katerda unutilmas uchish hamda drayv!\n🎬 Kechki kino-namoyish: suv bo'yida, ochiq osmon va yulduzlar ostida romantik kino tomoshasi.\n🍽 2 kunlik kechki ovqat: maxsus tayyorlangan mazali kechki taomlar.\n⛺️ Camping: tungi lager, palatkada tunash va gulxan atrofida samimiy hordiq.\n\n✨ Sayohatda sizni nimalar kutmoqda?\n🌅 Chorvoqning muazzam manzaralari: quyosh botishi va toza tog'-suv havosi.\n📸 Ajoyib fotosessiya: katerda va kemping hududida estetik suratlar.\n🔥 Gulxan atrofidagi atmosferali kecha: musiqa, quvnoq davra va yangi do'stlar.\n\n🎒 Sayohatchilar o'zlari bilan olishi tavsiya etiladi:\n🧥 Kechasi salqin bo'lgani uchun issiqroq kiyim\n🩳 Cho'milish kiyimlari va sochiq\n🧢 Quyoshdan asrovchi kiyim / ko'zoynak\n💡 Shaxsiy gigiyena vositalari va quvvatlantirgich (powerbank)\n\n📍 <b>Toshkent viloyati, Bo‘stonliq tumani.</b>",
    price: 350000,
    photo: "https://centralasia-adventures.com/image/new/charvak.html-n.jpg",
    gallery: [
      "https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/12c1764b-25aa-4733-afcc-5decf37a4cc9/-/format/webp/-/resize/1300x/",
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/485700784.jpg?k=280d73084efb7d9d4fdfcff4e2dd833091e4d5325d0e222ef3b9050c87ba0cf3&o=",
      "https://www.afisha.uz/uploads/media/2013/07/0048832.jpg",
      "https://www.gazeta.uz/media/img/2015/01/nhjl1514226082945947_l.jpg",
      "https://centralasia-adventures.com/image/data/info/uzbekistan/charvak/03.jpg"
    ]
  },
];

/* ═══════════════════════════════════════════════════════
   🚀 ЛОГИКА САЙТА — НИЖЕ НИЧЕГО НЕ МЕНЯЙТЕ
═══════════════════════════════════════════════════════ */

const I18N = {
  ru: {
    heroTitle: "Откройте мир вместе с нами",
    heroSub: "Авторские маршруты, продуманные до мелочей. Путешествия, после которых мир уже не будет прежним.",
    btnStart: "В путь!", toursTitle: "Наши туры",
    btnReview: "Подробнее", btnHide: "Скрыть", btnBook: "Хочу туда!",
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
    btnStart: "Let's go!", toursTitle: "Our tours",
    btnReview: "Details", btnHide: "Hide", btnBook: "I want to go!",
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
    btnStart: "Yo'lga!", toursTitle: "Bizning turlar",
    btnReview: "Tafsilotlar", btnHide: "Yashirish", btnBook: "Tanlash",
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
}, { threshold: .05, rootMargin: "0px 0px -8% 0px" });
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

  /* запоминаем состояние карточек ДО перерисовки */
  const wasExpanded = new Set(), scrolls = {};
  const hadCards = list.querySelectorAll(".tour-card").length > 0;
  list.querySelectorAll(".tour-card").forEach(c => {
    if (c.classList.contains("expanded")) wasExpanded.add(c.dataset.id);
    const g = c.querySelector(".tour-gallery");
    if (g) scrolls[c.dataset.id] = g.scrollLeft;
  });

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
        <div class="tour-details">${(nl(tourField(tour, "details")) || nl(tourField(tour, "description"))).replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/&lt;b&gt;/g,'<b>').replace(/&lt;\/b&gt;/g,'</b>')}</div>
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
    const id = card.dataset.id;

    if (hadCards) {
      /* ✅ СМЕНА ЯЗЫКА: все карточки — мгновенно, без анимации */
      card.classList.add("in", "done");
    } else {
      /* первая загрузка: красивое каскадное появление */
      card.style.transitionDelay = Math.min(i, 5) * 80 + "ms";
    }

    /* открытые карточки остаются открытыми */
    if (wasExpanded.has(id)) {
      card.classList.add("expanded");
      const btn = card.querySelector(".btn-review");
      if (btn) btn.textContent = t("btnHide");
    }

    /* лента фото остаётся на том же кадре */
    const g = card.querySelector(".tour-gallery");
    if (g) {
      if (scrolls[id]) g.scrollLeft = scrolls[id];
      initGalleryAutoScroll(g);
    }
  });

  /* анимация появления — только при первой загрузке */
  if (!hadCards) observeReveals();
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

    /* ✅ запоминаем, где вы стоите на странице */
    const y = window.scrollY;
    const holdScroll = () => window.scrollTo({ top: y, left: 0, behavior: "instant" });

    document.body.classList.add("no-anim");   /* гасим все анимации на время смены языка */
    applyLang();

    /* ✅ возвращаем на то же место (трижды — до, во время и после перерасчёта макета) */
    holdScroll();
    requestAnimationFrame(holdScroll);
    setTimeout(holdScroll, 80);
    setTimeout(() => document.body.classList.remove("no-anim"), 400);
  });
});
syncLangButtons();

/* ═══════════ 📊 GOOGLE-ТАБЛИЦА = АДМИН-ПАНЕЛЬ БЕЗ КОДА ═══════════ */
function parseCSV(text){
  const rows = []; let row = [], cell = "", inQ = false;
  for (let i = 0; i < text.length; i++){
    const ch = text[i];
    if (inQ){
      if (ch === '"'){ if (text[i+1] === '"'){ cell += '"'; i++; } else inQ = false; }
      else cell += ch;
    } else if (ch === '"') inQ = true;
    else if (ch === ","){ row.push(cell); cell = ""; }
    else if (ch === "\n"){ row.push(cell); rows.push(row); row = []; cell = ""; }
    else if (ch !== "\r") cell += ch;
  }
  if (cell !== "" || row.length){ row.push(cell); rows.push(row); }
  return rows;
}

async function loadToursFromSheet(){
  if (!SHEET_URL || SHEET_URL.includes("ВСТАВЬТЕ")) return;
  try{
    const res = await fetch(SHEET_URL);
    if (!res.ok) throw new Error("HTTP " + res.status);
    const rows = parseCSV(await res.text());
    if (rows.length < 2) return;
    const head = rows[0].map(h => h.trim());
    const loaded = [];
    rows.slice(1).forEach((r, n) => {
      const get = (k) => { const i = head.indexOf(k); return i >= 0 && r[i] ? String(r[i]).trim() : ""; };
      const title = get("title");
      if (!title) return;
      const gallery = get("gallery").split(/\n/).flatMap(s => s.split("|")).map(s => s.trim()).filter(Boolean);
      const photo = get("photo") || gallery[0] || "";
      loaded.push({
        id: get("id") || ("tour_" + (n + 1)),
        title,
        title_en: get("title_en"), title_uz: get("title_uz"),
        description: get("description"), description_en: get("description_en"), description_uz: get("description_uz"),
        details: get("details"), details_en: get("details_en"), details_uz: get("details_uz"),
        price: Number(get("price").replace(/[^\d]/g, "")) || 0,
        photo,
        gallery: gallery.length ? gallery : (photo ? [photo] : [])
      });
    });
    if (loaded.length){ TOURS.length = 0; loaded.forEach(t => TOURS.push(t)); }
  }catch(e){
    console.warn("Таблица недоступна — показываем встроенные туры.", e);
  }
}

loadToursFromSheet().finally(() => {
  applyLang();
  observeReveals();
  requestAnimationFrame(autoScrollLoop);
});

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
