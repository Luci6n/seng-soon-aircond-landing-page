const businessAddress =
  "24, Jalan Sungai Kapar Indah 3, Taman Sungai Kapar Indah, 42200 Klang, Selangor, Malaysia";

const hours = {
  0: null,
  1: { open: "09:00", close: "18:00" },
  2: { open: "09:00", close: "18:00" },
  3: { open: "09:00", close: "18:00" },
  4: { open: "09:00", close: "18:00" },
  5: { open: "09:00", close: "18:00" },
  6: { open: "09:00", close: "17:00" }
};

const translations = {
  en: {
    htmlLang: "en-MY",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    closedToday: "Closed today",
    closedNow: "Closed now",
    openUntil: "Open now until",
    opensAt: "Closed now, opens",
    todayHours: "Today's hours",
    nextOpen: "Next open",
    stock: "WhatsApp before visiting for stock and service availability",
    copied: "Address copied",
    whatsappMessage: "Hi Seng Soon, I need help with my aircond.",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    heroCopy:
      "Professional aircond sales, installation, servicing, washing, and repair for homes, offices, and shops. We also sell aircond spare parts and buy/sell second-hand air conditioners in good condition, subject to stock availability.",
    text: {
      "skip": "Skip to main content",
      "brand.location": "Klang / Kapar / Bukit Raja / Setia Alam",
      "nav.services": "Services",
      "nav.hours": "Hours",
      "nav.location": "Location",
      "nav.answers": "Answers",
      "nav.whatsapp": "WhatsApp",
      "language.label": "Language",
      "hero.eyebrow": "Aircond shop near Klang, Kapar, Bukit Raja and Setia Alam",
      "hero.whatsapp": "WhatsApp now",
      "hero.findShop": "Find the shop",
      "status.whatsapp": "WhatsApp",
      "status.address": "Address",
      "intro.eyebrow": "Local aircond service",
      "intro.title": "Honest service, affordable prices, friendly support, quality workmanship.",
      "intro.body":
        "Seng Soon Aircond helps homeowners, offices, and shop owners around Klang, Kapar, Bukit Raja and Setia Alam keep their air conditioners running cool, clean, and efficient. Customers can ask about new units, installation, regular service, chemical or normal washing, troubleshooting, repair, spare parts, and second-hand units in good condition.",
      "intro.note1": "Professional aircond sales, installation, servicing, washing, and repair for homes, offices, and shops.",
      "intro.note2":
        "We also sell aircond spare parts and buy/sell second-hand air conditioners in good condition, subject to stock availability.",
      "services.eyebrow": "What we do",
      "services.title": "Aircond sales, installation, servicing, washing and repair in Klang, Kapar, Bukit Raja and Setia Alam.",
      "services.sales.title": "Aircond Sales",
      "services.sales.body": "New air conditioners for homes, offices and shops, with practical advice based on room size and usage.",
      "services.install.title": "Installation",
      "services.install.body": "Professional aircond installation with careful workmanship, tidy setup and helpful operating guidance.",
      "services.service.title": "Servicing",
      "services.service.body": "Routine servicing to improve cooling performance, reduce water leaks and keep air flow comfortable.",
      "services.wash.title": "Washing",
      "services.wash.body": "Normal and deep cleaning support for dusty, smelly or weak-cooling aircond units.",
      "services.repair.title": "Repair",
      "services.repair.body": "Inspection and repair for leaking, noisy, not-cold, power, drainage and general aircond problems.",
      "services.parts.title": "Spare Parts",
      "services.parts.body": "Aircond spare parts are available for suitable models and repair needs, subject to stock availability.",
      "services.used.title": "Second-Hand Airconds",
      "services.used.body": "Buy or sell used air conditioners in good condition. Availability depends on current stock and inspection.",
      "services.places.title": "Homes, Offices & Shops",
      "services.places.body": "Support for residential rooms, office spaces, shop lots and other small business cooling needs.",
      "brands.eyebrow": "Brands customers ask about",
      "brands.title": "Ask about Daikin, Panasonic, Midea and Acson airconds.",
      "brands.note": "Brand and model support depends on unit condition, spare parts and stock availability.",
      "brands.more": "And more",
      "trust.eyebrow": "Why customers call us",
      "trust.title": "Straightforward help from a local Klang / Kapar aircond shop serving Bukit Raja and Setia Alam too.",
      "trust.honest.title": "Honest service",
      "trust.honest.body": "Clear advice before repair or replacement.",
      "trust.price.title": "Affordable prices",
      "trust.price.body": "Practical options for your budget and unit condition.",
      "trust.support.title": "Friendly support",
      "trust.support.body": "English, Malay and Chinese service descriptions.",
      "trust.quality.title": "Quality workmanship",
      "trust.quality.body": "Careful installation, servicing, cleaning and repair.",
      "hours.eyebrow": "Opening hours",
      "hours.title": "Visit the shop or WhatsApp before coming.",
      "hours.closed": "Closed",
      "hours.noteTitle": "Need aircond help today?",
      "hours.note":
        "WhatsApp the shop with your aircond brand, unit type, problem, and location. For second-hand airconds and spare parts, availability is subject to current stock.",
      "hours.message": "Message the shop",
      "days.monday": "Monday",
      "days.tuesday": "Tuesday",
      "days.wednesday": "Wednesday",
      "days.thursday": "Thursday",
      "days.friday": "Friday",
      "days.saturday": "Saturday",
      "days.sunday": "Sunday",
      "location.eyebrow": "Location",
      "location.title": "Find Seng Soon Aircond in Taman Sungai Kapar Indah.",
      "location.maps": "Open in Google Maps",
      "location.copy": "Copy address",
      "answers.eyebrow": "Quick answers",
      "answers.title": "Useful answers before you WhatsApp.",
      "answers.q1": "What services does Seng Soon Aircond provide?",
      "answers.a1": "Aircond sales, installation, servicing, washing, repair, spare parts, and second-hand air conditioners, subject to stock availability.",
      "answers.q2": "Can you help homes, offices and shops?",
      "answers.a2": "Yes. The shop supports homes, offices, shop lots and small business cooling needs around Klang, Kapar, Bukit Raja, Setia Alam and nearby Selangor areas.",
      "answers.q3": "Do you sell aircond spare parts?",
      "answers.a3": "Yes. Aircond spare parts are available for suitable repair needs, depending on model compatibility and current stock.",
      "answers.q4": "Do you buy or sell second-hand air conditioners?",
      "answers.a4": "Yes. Seng Soon buys and sells second-hand air conditioners in good condition, subject to inspection and stock availability.",
      "answers.q5": "How do I ask for a service price?",
      "answers.a5": "WhatsApp +60 12-283 5522 with the aircond brand, horsepower if known, your location, and the problem or service needed.",
      "answers.q6": "Which aircond brands can I ask about?",
      "answers.a6": "You can ask about Daikin, Panasonic, Midea and Acson air conditioners. Support depends on unit condition, spare parts and stock availability.",
      "facts.eyebrow": "Business facts",
      "facts.title": "Seng Soon Aircond at a glance.",
      "facts.name.label": "Business name",
      "facts.category.label": "Service category",
      "facts.category.value": "Aircond sales, installation, servicing, washing, repair, spare parts, second-hand air conditioners",
      "facts.area.label": "Service area",
      "facts.area.value": "Klang, Kapar, Bukit Raja and Setia Alam, including Taman Sungai Kapar Indah",
      "facts.contact.label": "Contact",
      "footer.copy": "Aircond sales, installation, service, washing and repair in Klang, Kapar, Bukit Raja and Setia Alam.",
      "footer.addressLabel": "Address",
      "footer.contactLabel": "Contact",
      "footer.hoursLabel": "Opening hours",
      "footer.hours": "Monday-Friday 09:00-18:00, Saturday 09:00-17:00, Sunday closed."
    }
  },
  ms: {
    htmlLang: "ms-MY",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    closedToday: "Tutup hari ini",
    closedNow: "Tutup sekarang",
    openUntil: "Sedang buka hingga",
    opensAt: "Tutup sekarang, buka",
    todayHours: "Waktu hari ini",
    nextOpen: "Buka seterusnya",
    stock: "WhatsApp dahulu untuk semak stok dan ketersediaan servis",
    copied: "Alamat disalin",
    whatsappMessage: "Hi Seng Soon, saya perlukan bantuan untuk aircond saya.",
    dayNames: ["Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"],
    heroCopy:
      "Jualan, pemasangan, servis, cuci dan baiki aircond untuk rumah, pejabat dan kedai. Kami juga menjual alat ganti aircond serta membeli/menjual aircond terpakai yang masih elok, tertakluk kepada stok.",
    text: {
      "skip": "Langkau ke kandungan utama",
      "brand.location": "Klang / Kapar / Bukit Raja / Setia Alam",
      "nav.services": "Servis",
      "nav.hours": "Waktu",
      "nav.location": "Lokasi",
      "nav.answers": "Jawapan",
      "nav.whatsapp": "WhatsApp",
      "language.label": "Bahasa",
      "hero.eyebrow": "Kedai aircond berhampiran Klang, Kapar, Bukit Raja dan Setia Alam",
      "hero.whatsapp": "WhatsApp sekarang",
      "hero.findShop": "Cari kedai",
      "status.whatsapp": "WhatsApp",
      "status.address": "Alamat",
      "intro.eyebrow": "Servis aircond tempatan",
      "intro.title": "Servis jujur, harga berpatutan, layanan mesra dan kerja berkualiti.",
      "intro.body":
        "Seng Soon Aircond membantu pemilik rumah, pejabat dan kedai sekitar Klang, Kapar, Bukit Raja dan Setia Alam memastikan aircond kekal sejuk, bersih dan berfungsi dengan baik. Pelanggan boleh bertanya tentang unit baru, pemasangan, servis berkala, cucian biasa atau kimia, pemeriksaan masalah, pembaikan, alat ganti dan unit terpakai yang masih elok.",
      "intro.note1": "Menyediakan jualan, pemasangan, servis, cuci dan baiki aircond untuk rumah, pejabat dan kedai.",
      "intro.note2": "Turut menjual alat ganti serta membeli/menjual aircond terpakai yang masih elok, tertakluk kepada stok.",
      "services.eyebrow": "Apa yang kami buat",
      "services.title": "Jualan, pemasangan, servis, cuci dan baiki aircond di Klang, Kapar, Bukit Raja dan Setia Alam.",
      "services.sales.title": "Jualan Aircond",
      "services.sales.body": "Aircond baru untuk rumah, pejabat dan kedai, dengan nasihat praktikal mengikut saiz bilik dan penggunaan.",
      "services.install.title": "Pemasangan",
      "services.install.body": "Pemasangan aircond profesional dengan kerja kemas, susunan bersih dan panduan penggunaan yang membantu.",
      "services.service.title": "Servis",
      "services.service.body": "Servis berkala untuk meningkatkan kesejukan, mengurangkan masalah bocor air dan memastikan aliran udara selesa.",
      "services.wash.title": "Cuci",
      "services.wash.body": "Cucian biasa dan cucian mendalam untuk aircond yang berhabuk, berbau atau kurang sejuk.",
      "services.repair.title": "Baiki",
      "services.repair.body": "Pemeriksaan dan pembaikan untuk masalah bocor, bising, tidak sejuk, kuasa, saliran dan masalah aircond biasa.",
      "services.parts.title": "Alat Ganti",
      "services.parts.body": "Alat ganti aircond tersedia untuk model dan keperluan pembaikan yang sesuai, tertakluk kepada stok.",
      "services.used.title": "Aircond Terpakai",
      "services.used.body": "Beli atau jual aircond terpakai yang masih elok. Ketersediaan bergantung pada stok semasa dan pemeriksaan.",
      "services.places.title": "Rumah, Pejabat & Kedai",
      "services.places.body": "Sokongan untuk bilik rumah, ruang pejabat, lot kedai dan keperluan penyejukan perniagaan kecil.",
      "brands.eyebrow": "Jenama yang pelanggan tanya",
      "brands.title": "Boleh tanya tentang aircond Daikin, Panasonic, Midea dan Acson.",
      "brands.note": "Sokongan jenama dan model bergantung kepada keadaan unit, alat ganti dan stok semasa.",
      "brands.more": "Dan lain-lain",
      "trust.eyebrow": "Kenapa pelanggan hubungi kami",
      "trust.title": "Bantuan aircond yang mudah dari kedai tempatan Klang / Kapar, termasuk Bukit Raja dan Setia Alam.",
      "trust.honest.title": "Servis jujur",
      "trust.honest.body": "Nasihat jelas sebelum baiki atau tukar unit.",
      "trust.price.title": "Harga berpatutan",
      "trust.price.body": "Pilihan praktikal mengikut bajet dan keadaan unit.",
      "trust.support.title": "Layanan mesra",
      "trust.support.body": "Penerangan servis dalam Bahasa Melayu, Inggeris dan Cina.",
      "trust.quality.title": "Kerja berkualiti",
      "trust.quality.body": "Pemasangan, servis, cuci dan pembaikan dibuat dengan teliti.",
      "hours.eyebrow": "Waktu operasi",
      "hours.title": "Datang ke kedai atau WhatsApp dahulu sebelum datang.",
      "hours.closed": "Tutup",
      "hours.noteTitle": "Perlukan bantuan aircond hari ini?",
      "hours.note":
        "WhatsApp kedai dengan jenama aircond, jenis unit, masalah dan lokasi anda. Untuk aircond terpakai dan alat ganti, ketersediaan bergantung kepada stok semasa.",
      "hours.message": "Mesej kedai",
      "days.monday": "Isnin",
      "days.tuesday": "Selasa",
      "days.wednesday": "Rabu",
      "days.thursday": "Khamis",
      "days.friday": "Jumaat",
      "days.saturday": "Sabtu",
      "days.sunday": "Ahad",
      "location.eyebrow": "Lokasi",
      "location.title": "Cari Seng Soon Aircond di Taman Sungai Kapar Indah.",
      "location.maps": "Buka di Google Maps",
      "location.copy": "Salin alamat",
      "answers.eyebrow": "Jawapan ringkas",
      "answers.title": "Jawapan berguna sebelum anda WhatsApp.",
      "answers.q1": "Apakah servis yang disediakan oleh Seng Soon Aircond?",
      "answers.a1": "Jualan, pemasangan, servis, cuci, baiki, alat ganti dan aircond terpakai, tertakluk kepada stok.",
      "answers.q2": "Boleh bantu rumah, pejabat dan kedai?",
      "answers.a2": "Ya. Kedai ini menyokong rumah, pejabat, lot kedai dan keperluan penyejukan perniagaan kecil sekitar Klang, Kapar, Bukit Raja, Setia Alam dan kawasan berhampiran di Selangor.",
      "answers.q3": "Ada jual alat ganti aircond?",
      "answers.a3": "Ya. Alat ganti aircond tersedia untuk pembaikan yang sesuai, bergantung kepada kesesuaian model dan stok semasa.",
      "answers.q4": "Ada beli atau jual aircond terpakai?",
      "answers.a4": "Ya. Seng Soon membeli dan menjual aircond terpakai yang masih elok, tertakluk kepada pemeriksaan dan stok.",
      "answers.q5": "Bagaimana mahu tanya harga servis?",
      "answers.a5": "WhatsApp +60 12-283 5522 dengan jenama aircond, horsepower jika tahu, lokasi anda dan masalah atau servis yang diperlukan.",
      "answers.q6": "Jenama aircond apa yang boleh saya tanya?",
      "answers.a6": "Anda boleh tanya tentang aircond Daikin, Panasonic, Midea dan Acson. Sokongan bergantung kepada keadaan unit, alat ganti dan stok semasa.",
      "facts.eyebrow": "Maklumat perniagaan",
      "facts.title": "Seng Soon Aircond secara ringkas.",
      "facts.name.label": "Nama perniagaan",
      "facts.category.label": "Kategori servis",
      "facts.category.value": "Jualan, pemasangan, servis, cuci, baiki, alat ganti dan aircond terpakai",
      "facts.area.label": "Kawasan servis",
      "facts.area.value": "Klang, Kapar, Bukit Raja dan Setia Alam, termasuk Taman Sungai Kapar Indah",
      "facts.contact.label": "Hubungi",
      "footer.copy": "Jualan, pemasangan, servis, cuci dan baiki aircond di Klang, Kapar, Bukit Raja dan Setia Alam.",
      "footer.addressLabel": "Alamat",
      "footer.contactLabel": "Hubungi",
      "footer.hoursLabel": "Waktu operasi",
      "footer.hours": "Isnin-Jumaat 09:00-18:00, Sabtu 09:00-17:00, Ahad tutup."
    }
  },
  zh: {
    htmlLang: "zh-Hans-MY",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    closedToday: "今日休息",
    closedNow: "现在休息",
    openUntil: "营业中，至",
    opensAt: "现在休息，",
    todayHours: "今日营业",
    nextOpen: "下次营业",
    stock: "到店前可先 WhatsApp 查询库存与服务安排",
    copied: "地址已复制",
    whatsappMessage: "你好 Seng Soon，我想询问冷气服务。",
    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    heroCopy:
      "为住家、办公室和店铺提供专业冷气销售、安装、维修、清洗和保养服务。我们也销售冷气零件，并收购/出售状况良好的二手冷气，视库存而定。",
    text: {
      "skip": "跳到主要内容",
      "brand.location": "巴生 / Kapar / Bukit Raja / Setia Alam",
      "nav.services": "服务",
      "nav.hours": "营业时间",
      "nav.location": "地址",
      "nav.answers": "常见问题",
      "nav.whatsapp": "WhatsApp",
      "language.label": "语言",
      "hero.eyebrow": "巴生、Kapar、Bukit Raja 与 Setia Alam 附近的冷气店",
      "hero.whatsapp": "立即 WhatsApp",
      "hero.findShop": "寻找店铺",
      "status.whatsapp": "WhatsApp",
      "status.address": "地址",
      "intro.eyebrow": "本地冷气服务",
      "intro.title": "诚信服务、价格公道、亲切沟通、品质保证。",
      "intro.body":
        "Seng Soon Aircond 帮助巴生、Kapar、Bukit Raja 与 Setia Alam 一带的住家、办公室和店铺保持冷气凉爽、干净并正常运作。客户可询问新机、安装、定期保养、普通或深层清洗、故障检查、维修、零件以及状况良好的二手冷气。",
      "intro.note1": "提供住家、办公室和店铺的冷气销售、安装、维修、清洗及保养服务。",
      "intro.note2": "也售卖冷气零件，并收购/出售状况良好的二手冷气，视库存而定。",
      "services.eyebrow": "服务项目",
      "services.title": "巴生、Kapar、Bukit Raja 与 Setia Alam 冷气销售、安装、保养、清洗与维修。",
      "services.sales.title": "冷气销售",
      "services.sales.body": "提供适合住家、办公室和店铺的新冷气，并根据空间大小和使用需求给予实用建议。",
      "services.install.title": "安装",
      "services.install.body": "专业冷气安装，施工细心、收尾整洁，并提供基本使用说明。",
      "services.service.title": "保养",
      "services.service.body": "定期保养可改善制冷效果、减少漏水问题，并保持出风舒适。",
      "services.wash.title": "清洗",
      "services.wash.body": "为积尘、有异味或不够冷的冷气提供普通清洗和深层清洗支持。",
      "services.repair.title": "维修",
      "services.repair.body": "检查和维修漏水、噪音、不冷、电源、排水及一般冷气故障。",
      "services.parts.title": "冷气零件",
      "services.parts.body": "根据型号和维修需求提供合适的冷气零件，视库存而定。",
      "services.used.title": "二手冷气",
      "services.used.body": "收购或出售状况良好的二手冷气。供应视当前库存和检查结果而定。",
      "services.places.title": "住家、办公室与店铺",
      "services.places.body": "支持住家房间、办公室空间、店铺和小型生意场所的冷气需求。",
      "brands.eyebrow": "客户常询问的品牌",
      "brands.title": "可询问 Daikin、Panasonic、Midea 和 Acson 冷气。",
      "brands.note": "品牌和型号支持取决于冷气状况、零件和库存供应。",
      "brands.more": "更多品牌",
      "trust.eyebrow": "客户选择我们的原因",
      "trust.title": "来自巴生 / Kapar 本地冷气店的直接帮助，也服务 Bukit Raja 与 Setia Alam。",
      "trust.honest.title": "诚信服务",
      "trust.honest.body": "维修或更换前提供清楚建议。",
      "trust.price.title": "价格公道",
      "trust.price.body": "根据预算和冷气状况提供实际选择。",
      "trust.support.title": "亲切沟通",
      "trust.support.body": "可提供英文、马来文和中文服务说明。",
      "trust.quality.title": "品质保证",
      "trust.quality.body": "安装、保养、清洗和维修都细心处理。",
      "hours.eyebrow": "营业时间",
      "hours.title": "欢迎到店，也可先 WhatsApp 询问。",
      "hours.closed": "休息",
      "hours.noteTitle": "今天需要冷气服务？",
      "hours.note": "WhatsApp 店铺时可提供冷气品牌、机型、问题和地点。二手冷气与零件供应视当前库存而定。",
      "hours.message": "联系店铺",
      "days.monday": "星期一",
      "days.tuesday": "星期二",
      "days.wednesday": "星期三",
      "days.thursday": "星期四",
      "days.friday": "星期五",
      "days.saturday": "星期六",
      "days.sunday": "星期日",
      "location.eyebrow": "位置",
      "location.title": "Seng Soon Aircond 位于 Taman Sungai Kapar Indah。",
      "location.maps": "打开 Google Maps",
      "location.copy": "复制地址",
      "answers.eyebrow": "快速解答",
      "answers.title": "WhatsApp 前可先了解这些信息。",
      "answers.q1": "Seng Soon Aircond 提供哪些服务？",
      "answers.a1": "冷气销售、安装、保养、清洗、维修、零件及二手冷气服务，视库存而定。",
      "answers.q2": "可以服务住家、办公室和店铺吗？",
      "answers.a2": "可以。店铺支持巴生、Kapar、Bukit Raja、Setia Alam 和雪兰莪附近地区的住家、办公室、店铺和小型生意冷气需求。",
      "answers.q3": "有卖冷气零件吗？",
      "answers.a3": "有。会根据维修需要、型号适配和当前库存提供合适零件。",
      "answers.q4": "有收购或出售二手冷气吗？",
      "answers.a4": "有。Seng Soon 收购和出售状况良好的二手冷气，需经过检查并视库存而定。",
      "answers.q5": "怎样询问服务价钱？",
      "answers.a5": "WhatsApp +60 12-283 5522，并提供冷气品牌、马力如知道、地点，以及需要处理的问题或服务。",
      "answers.q6": "可以询问哪些冷气品牌？",
      "answers.a6": "可以询问 Daikin、Panasonic、Midea 和 Acson 冷气。是否能处理取决于冷气状况、零件和库存供应。",
      "facts.eyebrow": "商家资料",
      "facts.title": "Seng Soon Aircond 简介。",
      "facts.name.label": "商家名称",
      "facts.category.label": "服务类别",
      "facts.category.value": "冷气销售、安装、保养、清洗、维修、零件及二手冷气",
      "facts.area.label": "服务地区",
      "facts.area.value": "巴生、Kapar、Bukit Raja 与 Setia Alam，包括 Taman Sungai Kapar Indah",
      "facts.contact.label": "联系",
      "footer.copy": "巴生、Kapar、Bukit Raja 与 Setia Alam 冷气销售、安装、保养、清洗与维修服务。",
      "footer.addressLabel": "地址",
      "footer.contactLabel": "联系",
      "footer.hoursLabel": "营业时间",
      "footer.hours": "星期一至星期五 09:00-18:00，星期六 09:00-17:00，星期日休息。"
    }
  }
};

let currentLanguage = getInitialLanguage();

const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const languagePicker = document.querySelector("[data-language-picker]");
const menuLabel = navToggle?.querySelector(".visually-hidden");
const statusText = document.querySelector("[data-open-status]");
const statusDot = document.querySelector("[data-status-dot]");
const nextHours = document.querySelector("[data-next-hours]");
const toast = document.querySelector("[data-toast]");

function normalizeLanguage(languageTag) {
  const language = String(languageTag || "").toLowerCase();

  if (language.startsWith("zh")) return "zh";
  if (language.startsWith("ms")) return "ms";
  if (language.startsWith("en")) return "en";

  return null;
}

function getSavedLanguage() {
  try {
    const saved = localStorage.getItem("seng-soon-language");
    return translations[saved] ? saved : null;
  } catch {
    return null;
  }
}

function getInitialLanguage() {
  const saved = getSavedLanguage();
  if (saved) return saved;

  const deviceLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const language of deviceLanguages) {
    const supported = normalizeLanguage(language);
    if (supported) return supported;
  }

  return "en";
}

function saveLanguage(language) {
  try {
    localStorage.setItem("seng-soon-language", language);
  } catch {
    // Some browsers block localStorage in private mode. Device detection still works.
  }
}

function setLanguage(language, shouldSave = false) {
  const selected = translations[language] ? language : "en";
  const copy = translations[selected];

  currentLanguage = selected;
  document.documentElement.lang = copy.htmlLang;
  document.body.dataset.currentLang = selected;
  document.body.removeAttribute("data-lang");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translated = copy.text[element.dataset.i18n];
    if (translated) element.textContent = translated;
  });

  document.querySelectorAll("[data-copy]").forEach((element) => {
    const languageCode = element.dataset.copy;
    element.textContent = translations[languageCode]?.heroCopy || translations.en.heroCopy;
    element.setAttribute("lang", translations[languageCode]?.htmlLang || translations.en.htmlLang);
    element.classList.toggle("hidden", languageCode !== selected);
  });

  if (languagePicker) {
    languagePicker.value = selected;
    languagePicker.setAttribute("aria-label", copy.text["language.label"]);
  }

  const messageLink = document.querySelector(".hours-note .button-primary");
  if (messageLink) {
    messageLink.href = `https://wa.me/60122835522?text=${encodeURIComponent(copy.whatsappMessage)}`;
  }

  if (menuLabel) {
    menuLabel.textContent = navMenu?.classList.contains("open") ? copy.closeMenu : copy.openMenu;
  }

  if (shouldSave) saveLanguage(selected);
  updateOpenStatus();
}

function minutesFromTime(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function malaysiaNow() {
  const parts = new Intl.DateTimeFormat("en-MY", {
    timeZone: "Asia/Kuala_Lumpur",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(new Date());

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  const dayMap = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

  return {
    day: dayMap[values.weekday],
    minutes: (Number(values.hour) % 24) * 60 + Number(values.minute)
  };
}

function nextOpenFrom(dayIndex) {
  for (let offset = 1; offset <= 7; offset += 1) {
    const day = (dayIndex + offset) % 7;
    if (hours[day]) return { day, time: hours[day].open };
  }

  return { day: 1, time: "09:00" };
}

function updateOpenStatus() {
  if (!statusText || !statusDot || !nextHours) return;

  const copy = translations[currentLanguage];
  const now = malaysiaNow();
  const today = hours[now.day];

  statusDot.classList.remove("open", "closed");

  if (!today) {
    const next = nextOpenFrom(now.day);
    statusDot.classList.add("closed");
    statusText.textContent = copy.closedToday;
    nextHours.textContent = `${copy.nextOpen}: ${copy.dayNames[next.day]} ${next.time}`;
    return;
  }

  const open = minutesFromTime(today.open);
  const close = minutesFromTime(today.close);

  if (now.minutes >= open && now.minutes < close) {
    statusDot.classList.add("open");
    statusText.textContent = `${copy.openUntil} ${today.close}`;
    nextHours.textContent = copy.stock;
    return;
  }

  statusDot.classList.add("closed");

  if (now.minutes < open) {
    statusText.textContent = `${copy.opensAt} ${today.open}`;
    nextHours.textContent = `${copy.todayHours}: ${today.open}-${today.close}`;
    return;
  }

  const next = nextOpenFrom(now.day);
  statusText.textContent = copy.closedNow;
  nextHours.textContent = `${copy.nextOpen}: ${copy.dayNames[next.day]} ${next.time}`;
}

function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 2400);
}

function setupRevealAnimations() {
  const items = document.querySelectorAll(".reveal-item");
  if (
    !items.length ||
    !("IntersectionObserver" in window) ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    items.forEach((item) => item.classList.add("reveal-visible"));
    return;
  }

  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.98) item.classList.add("reveal-visible");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.06, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((item) => {
    if (!item.classList.contains("reveal-visible")) observer.observe(item);
  });
}

function setupFaqAnimation() {
  document.querySelectorAll(".faq-list details").forEach((details) => {
    const summary = details.querySelector("summary");
    if (!summary) return;

    summary.addEventListener("click", (event) => {
      event.preventDefault();
      if (details.dataset.animating === "true") return;

      details.dataset.animating = "true";
      const startHeight = details.offsetHeight;

      if (details.open) {
        details.style.height = `${startHeight}px`;
        requestAnimationFrame(() => {
          details.style.height = `${summary.offsetHeight}px`;
        });

        const finishClosing = (transitionEvent) => {
          if (transitionEvent.target !== details || transitionEvent.propertyName !== "height") return;
          details.open = false;
          details.style.height = "";
          delete details.dataset.animating;
          details.removeEventListener("transitionend", finishClosing);
        };

        details.addEventListener("transitionend", finishClosing);
        return;
      }

      details.open = true;
      details.style.height = `${summary.offsetHeight}px`;
      requestAnimationFrame(() => {
        details.style.height = `${details.scrollHeight}px`;
      });

      const finishOpening = (transitionEvent) => {
        if (transitionEvent.target !== details || transitionEvent.propertyName !== "height") return;
        details.style.height = "";
        delete details.dataset.animating;
        details.removeEventListener("transitionend", finishOpening);
      };

      details.addEventListener("transitionend", finishOpening);
    });
  });
}

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu?.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  if (menuLabel) {
    menuLabel.textContent = isOpen ? translations[currentLanguage].closeMenu : translations[currentLanguage].openMenu;
  }
});

navMenu?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    navMenu.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
    if (menuLabel) menuLabel.textContent = translations[currentLanguage].openMenu;
  }
});

languagePicker?.addEventListener("change", () => {
  setLanguage(languagePicker.value, true);
  navMenu?.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");
  if (menuLabel) menuLabel.textContent = translations[currentLanguage].openMenu;
});

document.querySelector("[data-copy-address]")?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(businessAddress);
    showToast(translations[currentLanguage].copied);
  } catch {
    showToast(businessAddress);
  }
});

setLanguage(currentLanguage);
setupRevealAnimations();
setupFaqAnimation();
window.setInterval(updateOpenStatus, 60000);
