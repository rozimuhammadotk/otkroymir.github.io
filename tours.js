// ============================================================
// СПИСОК ТУРОВ (на трёх языках)
// Этот файл можно редактировать без знания программирования.
// ============================================================
//
// У каждого тура есть три поля: title (название), description (описание),
// price (цена). Внутри каждого поля — три перевода: ru, en, uz.
//
// Чтобы ИЗМЕНИТЬ текст — впишите новый текст между кавычками " "
//   у нужного языка (ru — русский, en — английский, uz — узбекский).
// Чтобы ДОБАВИТЬ тур — скопируйте один блок { ... } целиком
//   (вместе со скобками), вставьте после запятой и поменяйте текст.
// Чтобы УДАЛИТЬ тур — удалите весь блок { ... } вместе с запятой после него.
//
// НЕ ТРОГАТЬ: фигурные скобки { }, квадратные скобки [ ], запятые ,
//   и слова ru: / en: / uz: перед кавычками.
// МОЖНО МЕНЯТЬ: любой текст внутри кавычек " "
//
// Поле "price" необязательное. Если цену указывать не нужно —
// оставьте пустые кавычки: ""

const TOURS = [
  {
    title: {
      ru: "Бурчмулла",
      en: "Burchmulla",
      uz: "Burchmullo"
    },
    description: {
      ru: "Бурчмулла – горный поселок в Ташкентской области Узбекистана, на берегу Чарвакского водохранилища. Известен дикой природой, водопадами, каньонами и легендарной песней (Бричмулла). Популярное место для трекинга и созерцания живописных видов.",
      en: "Burchmulla is a mountain village in Tashkent Region, Uzbekistan, located on the shores of Charvak Reservoir. It is famous for its wild nature, waterfalls, canyons, and the legendary song (Brichmulla). A popular destination for trekking and enjoying scenic landscapes.",
      uz: "Burchmullo – Toshkent viloyatidagi tog'li qishloq, Charvoq suv ombori qirg'og'ida joylashgan. O'zining yovvoyi tabiati, sharsharalari, kanyonlari va mashhur (Brichmulla) qo'shig'i bilan tanilgan. Sayyohlar uchun piyoda sayohat va go'zal manzaralar bilan mashhur joy."
    },
    price: {
      ru: "299 000 сум",
      en: "299 000 som",
      uz: "299 000 som"
    }
  },
  {
    title: {
      ru: "Вариант 2",
      en: "Option 2",
      uz: "2-variant"
    },
    description: {
      ru: "Краткое описание маршрута: города, длительность, что входит в тур.",
      en: "Short route description: cities, duration, what's included.",
      uz: "Marshrutning qisqacha tavsifi: shaharlar, davomiyligi, tur tarkibi."
    },
    price: {
      ru: "",
      en: "",
      uz: ""
    }
  },
  {
    title: {
      ru: "Вариант 3",
      en: "Option 3",
      uz: "3-variant"
    },
    description: {
      ru: "Краткое описание маршрута: города, длительность, что входит в тур.",
      en: "Short route description: cities, duration, what's included.",
      uz: "Marshrutning qisqacha tavsifi: shaharlar, davomiyligi, tur tarkibi."
    },
    price: {
      ru: "",
      en: "",
      uz: ""
    }
  }
];
