window.FOOD_CATEGORIES = [
  {key:'breakfast', title:'Subah ka Nashta', icon:'🌅', items:[
    ['Poha','🍚'],['Idli Sambhar','🥟'],['Khaman Dhokla','🟨'],['Khakhra','🫓'],
    ['Masala Poori + Moong Sabzi','🍛'],['Upma','🍲'],['Garam Doodh','🥛'],['Chai','☕'],['Jalebi','🥨']
  ]},
  {key:'soup', title:'सूप (Soup)', icon:'🍲', items:[
    ['टमाटर सुप','🍅'],['मनचाउ सुप','🍲'],['वेजीटेबल सुप','🥦'],['स्वीटकोर्न सुप','🌽'],['होट एण्ड सोर सुप','🔥']
  ]},
  {key:'sabji', title:'Main Course — Sabzi', icon:'🍛', items:[
    ['वेजीटेबल खजाना','🥗'],['पालक बेबीकॉर्न','🌽'],['पालक स्वीट कॉर्न','🌽'],['मटर मलाई मैथी','🍲'],
    ['चना मसाला','🧆'],['केर किश मिश','🍒'],['मटर आलू','🥔'],['आलू मैथी','🥬'],['स्टफ आलू','🥔'],
    ['कश्मीरी आलू','🥔'],['दम आलू','🥔'],['आलू पोदीना','🌱'],['आलू गोभी','🥦'],['जीरा आलू','🥔'],
    ['अचारी आलू','🥔'],['मिक्स वेज','🥦'],['स्टफ टिण्डा','🍈'],['भिण्डी मसाला','🥒'],['स्टफ टमाटर','🍅'],
    ['बैंगन का भरता','🍆'],['मलाई प्याज','🧅'],['काजू लिलवा','🌰'],
    {
      sub: 'पनीर स्पेशल',
      items: [
        ['पनीर साईड आईटम','🧀'],['मटर पनीर','🧀'],['पनीर बटर मसाला','🧀'],['शाही पनीर','🧀'],
        ['पनीर शिमला','🧀'],['पनीर अंगारा','🔥'],['पनीर पसन्दा','🧀'],['पनीर कोरमा','🧀'],
        ['पनीर सिंगापुरी','🇸🇬'],['कड़ाई पनीर','🥘'],['पालक पनीर','🥬'],['पनीर स्वीटकॉर्न','🌽'],
        ['पनीर बेबीकॉर्न','🌽'],['पनीर खूरम','🧀'],['पनीर टकाटक','🧀'],['पनीर दालफाई','🥣'],
        ['पनीर फरियादी','🧀'],['पनीर सेलन','🧀']
      ]
    }
  ]},
  {key:'roti', title:'Main Course — Roti', icon:'🫓', items:[
    {
      sub: 'पूड़ी स्पेशल',
      items: [
        ['सादी पूड़ी','🥟'],['पालक पूड़ी','🥬'],['मेथी पूड़ी','🌱'],['मसाला पूड़ी','🌶️'],['डिस्को पूड़ी','🫓']
      ]
    },
    {
      sub: 'रोटी स्पेशल',
      items: [
        ['सिगडी रोटी','🔥'],['तवा रोटी','🫓'],['duppad रोटी','🫓'],['बाजरे की रोटी','🫓'],['मक्की की रोटी','🌽']
      ]
    }
  ]},
  {key:'pulav', title:'Main Course — Pulav', icon:'🍚', items:[
    ['Veg Pulav','🍚'],['Jeera Rice','🍚'],['Papad','🫓'],['Namkeen','🥜'],
    ['Kachori','🥮'],['Aachar','🥒'],['Salad','🥗'],['Dahi Bade','🍡']
  ]},
  {key:'punjabi', title:'Main Course — Punjabi (Dhaba) Corner', icon:'🧆', items:[
    ['Chhole Bhature','🧆'],['Kulcha','🫓']
  ]},
  {key:'south', title:'Main Course — South Indian Corner', icon:'🥞', items:[
    ['Dosa','🥞'],['Idli','⚪'],['Medu Vada','🍩']
  ]},
  {key:'rajasthani', title:'Main Course — Rajasthani Corner', icon:'🏜️', items:[
    ['Makka Roti','🌽'],['Sarson Saag','🥬'],['Ker Sangri Sabzi','🌿'],['Sev Tamatar Sabzi','🍅'],
    ['Bajra Roti','🫓'],['Bajra Khichdi','🍚'],['Dal Dhokli','🍲'],['Dal Baati Churma','🍘']
  ]},
  {key:'liveSabji', title:'Main Course — Live Sabjiya Ka Menu', icon:'🥘', items:[
    ['Bhindi','🌶️'],['Mix Tawa Sabji','🍛'],['Gobhi','🥦'],['Mogri','🌿'],
    ['Jeera Aalu','🥔'],['Sev Tamatar','🍅'],['Dal Tadka','🥣']
  ]},
  {key:'live', title:'Extra Counter Live— Chinese, Italian & Chaat', icon:'🍜', items:[
    ['Chowmein','🍜'],['Manchurian','🍢'],['Pasta Red Sauce','🍝'],['Pasta White Sauce','🍝'],
    ['Pizza','🍕'],['Garlic Bread','🥖'],['Crispy Corn','🌽'],['Pani Puri','🥟'],['Bhel Puri','🥗']
  ]},
  {key:'mithai', title:'Mithai & Desserts', icon:'🍮', items:[
    ['Gulab Jamun','🍡'],['Rasgulla','⚪'],['Rabdi','🥣'],
    {
      sub: 'काजू और बादाम की मिठाइयाँ',
      items: [
        ['काजू कतली','💎'],['बादाम कतली','🌰'],['ड्राईफ्रूट कतली','🥜'],['काजू अंजीर रोल','🌀'],
        ['बादाम बॉल','🟤'],['काजू सीताफल','🟢'],['काजू कलश','🏺'],['काजू समोसा','🥟'],
        ['काजू अखरोट का हलवा','🥣'],['काजू मेर पाक','🟨']
      ]
    },
    {
      sub: 'मावा और स्पेशल स्वीट्स',
      items: [
        ['केसर कलाकंद','🟨'],['मिल्क केक','🍰'],['अलवर पाक','🟨'],['डायमंड केक','💎'],
        ['संगम बर्फी','🟥'],['पंचमेवा चक्की','🟩'],['गोंद पाक','🟤'],['दिलखुश','🟡'],
        ['मक्खन वड़ा','🍩'],['स्टफ छेना जामुन','🍓'],['रबड़ी घेवर','🥯'],['कटोरी घेवर','🥯'],
        ['मोती महल','🟥'],['मोती पाक','🟨'],['दिलबहार बर्फी','🟩'],['मलाई बर्फी','⬜'],
        ['दाल बादाम चक्की','🟨'],['तवा मिठाई','🥘'],['गरम इमरती','🌀'],['कढ़ाई दूध','🥛'],
        ['दूध फेनी','🥛'],['मक्खन पाकीजा','⬜'],['मक्खन तरबूज','🍉'],['मक्खन संतरा','🍊'],
        ['मक्खन इमरती','🌀'],['संतरा सैंडविच','🥪'],['छेना रोल','🌀'],['मलाई चाप','⬜']
      ]
    },
    {
      sub: 'पेस्ट्री स्पेशल',
      items: [
        ['पाइनेप्पल पेस्टी','🍰'],['चोकलेट पेस्टी','🍰'],['ब्लेक फारेस्ट पेस्टी','🍰'],
        ['स्टोबेरी पेस्टी','🍰'],['ट्रायफस पेस्टी','🍰']
      ]
    },
    {
      sub: 'हलवा स्पेशल',
      items: [
        ['गाजर हलवा','🥕'],['मैंगो हलवा','🥭'],['मूंग दाल हलवा','🍮'],['बादाम का हलवा','🥣'],
        ['बादाम पिस्ता हलवा','🥣'],['अंजीर हलवा','🟤'],['लौकी हलवा','🥒'],['तिरंगा हलवा','🇮🇳']
      ]
    },
    {
      sub: 'कॉल्ड स्वीट',
      items: [
        ['रसमलाई','🥣'],['इन्द्राणी','🍨'],['हिरामणी','🍨'],['चाईनीज रसगुल्ला','⚪'],
        ['मक्खन पाकीजा','⬜'],['मक्खन तरबूज','🍉'],['मक्खन संतरा','🍊'],['मक्खन इमरती','🌀'],
        ['संतरा सैण्डवीच','🥪'],['छैणा रोल','🌀'],['मलाई चाप','⬜'],['फ्रूट क्रीम','🍨'],
        ['पायन एप्पल क्रीम','🍨'],['मैंगो क्रीम','🍨'],['राजभोग','🟡'],['केसर बाटी','🟡'],
        ['स्पंजी रसगुल्ला','⚪'],['मैंगो रबड़ी','🥣'],['फ्रूट रबड़ी','🥣'],['सिताफल बासुंदी','🥣'],
        ['पान गिलोरी','🍃'],['अंगूरी पेठा','🟢']
      ]
    },
    {
      sub: 'लड्डू और पारंपरिक मिठाइयाँ',
      items: [
        ['बेसन लड्डू','🟡'],['मोतीचूर लड्डू','🟠'],['दूध के लड्डू','⚪'],['करण शाही लड्डू','🟨'],
        ['सोहन पपड़ी','🟨'],['चंद्रकला','🌙']
      ]
    }
  ]},
  {key:'drinks', title:'Drinks & Mocktails', icon:'🍹', items:[
    ['Coffee','☕'],['Raab','🥣'],['Keri Paani','🥭'],['Chaach','🥛'],
    ['Mojito — Mint','🌿'],['Mojito — Blueberry','🫐'],['Mojito — Orange','🍊'],['Mojito — Lemon','🍋'],
    {
      sub: 'ताजा ज्यूस',
      items: [
        ['पायनापल ज्यूस','🍹'],['मोंसबी ज्यूस','🍹'],['संतरा ज्यूस','🍹'],['तरबूज ज्यूस','🍉'],
        ['गाजर ज्यूस','🥕'],['मैंगो ज्यूस','🥭'],['अनार ज्यूस','🍹'],['मिक्स ज्यूस','🍹'],
        ['मिक्स फ्रूट ज्यूस','🍹'],['गन्ना ज्यूस','🍹']
      ]
    },
    {
      sub: 'स्पेशल शेक्स',
      items: [
        ['मिरण्डा शेक','🍊'],['लिची शेक','🍹'],['स्ट्रॉबेरी शेक','🍓'],['काजु अंजीर शेक','🟤'],
        ['पान शेक','🍃'],['मैंगो शेक','🥭'],['सिताफल शेक','🟢'],['चिकु शेक','🟤'],
        ['मिल्क रोज','🌹']
      ]
    }
  ]},
  {key:'mahilaSangeet', title:'Mahila Sangeet Special', icon:'💃', onlyFor:'sangeet', items:[
    ['Chhole Bhature','🧆'],['Pav Bhaji','🍛'],['Idli Sambhar','🥟'],['Papad','🫓'],['Dahi Bade','🍡'],
    ['Dahi Paratha','🫓'],['Salad','🥗'],['Mithaiya','🍬'],['Aam Ras','🥭'],['Moong Dal Halwa','🍮'],
    ['Gajar Halwa','🥕'],['Chai Coffee','☕']
  ]},
  {key:'funcSpecial', title:'Traditional Food', icon:'🍲', items:[
    ['Dal Baati Masala','🍘'],['Kadhi Chawal','🍛'],['Ladoo','🟠'],['Chaach','🥛']
  ]},
  {key:'paan', title:'Paan & Mukhwas Counter', icon:'🌿', items:[
    ['Meetha Paan','🍃'],['Saunf Mukhwas','🌾'],['Chocolate Mukhwas','🍫']
  ]},
  {key:'fruits', title:'Fresh Fruits Counter', icon:'🍉', items:[
    ['Fresh Fruits','🍉']
  ]}
];

window.FOOD_TRANSLATIONS = {
  // English to Hindi:
  "Poha": "पोहा",
  "Idli Sambhar": "इडली सांभर",
  "Khaman Dhokla": "खमन ढोकला",
  "Khakhra": "खाखरा",
  "Masala Poori + Moong Sabzi": "मसाला पूरी + मूंग सब्जी",
  "Upma": "उपमा",
  "Garam Doodh": "गरम दूध",
  "Chai": "चाय",
  "Jalebi": "जलेबी",
  "Veg Pulav": "वेज पुलाव",
  "Jeera Rice": "जीरा राइस",
  "Papad": "पापड़",
  "Namkeen": "नमकीन",
  "Kachori": "कचौड़ी",
  "Aachar": "अचार",
  "Salad": "सलाद",
  "Dahi Bade": "दही बड़े",
  "Chhole Bhature": "छोले भटूरे",
  "Kulcha": "कुलचा",
  "Dosa": "डोसा",
  "Idli": "इडली",
  "Medu Vada": "मेदू वड़ा",
  "Makka Roti": "मक्का रोटी",
  "Sarson Saag": "सरसों का साग",
  "Ker Sangri Sabzi": "केर सांगरी सब्जी",
  "Sev Tamatar Sabzi": "सेव टमाटर सब्जी",
  "Bajra Roti": "बाजरा रोटी",
  "Bajra Khichdi": "बाजरा खिचड़ी",
  "Dal Dhokli": "दाल ढोकली",
  "Dal Baati Churma": "दाल बाटी चूरमा",
  "Bhindi": "भिंडी",
  "Mix Tawa Sabji": "मिक्स तवा सब्जी",
  "Gobhi": "गोभी",
  "Mogri": "मोगरी",
  "Jeera Aalu": "जीरा आलू",
  "Sev Tamatar": "सेव टमाटर",
  "Dal Tadka": "दाल तड़का",
  "Chowmein": "चाऊमीन",
  "Manchurian": "मंचूरियन",
  "Pasta Red Sauce": "पास्ता रेड सॉस",
  "Pasta White Sauce": "पास्ता व्हाइट सॉस",
  "Pizza": "पिज्जा",
  "Garlic Bread": "गार्लिक ब्रेड",
  "Crispy Corn": "क्रिस्पी कॉर्न",
  "Pani Puri": "पानी पूरी",
  "Bhel Puri": "भेल पूरी",
  "Gulab Jamun": "गुलाब जामुन",
  "Rasgulla": "रसगुल्ला",
  "Rabdi": "रबड़ी",
  "Coffee": "कॉफी",
  "Raab": "राब",
  "Keri Paani": "केरी पानी",
  "Chaach": "छाछ",
  "Mojito — Mint": "मोइतो — मिंट",
  "Mojito — Blueberry": "मोइतो — ब्लूबेरी",
  "Mojito — Orange": "मोइतो — ऑरेंज",
  "Mojito — Lemon": "मोइतो — लेमन",
  "Pav Bhaji": "पाव भाजी",
  "Aam Ras": "आम रस",
  "Chai Coffee": "चाय कॉफी",
  "Dal Baati Masala": "दाल बाटी मसाला",
  "Kadhi Chawal": "कढ़ी चावल",
  "Ladoo": "लड्डू",
  "Meetha Paan": "मीठा पान",
  "Saunf Mukhwas": "सौंफ मुखवास",
  "Chocolate Mukhwas": "चॉकलेट मुखवास",
  "Fresh Fruits": "ताजे फल",
  "Fruit Chaat": "फ्रूट चाट",
  
  // Hindi to English:
  "टमाटर सुप": "Tomato Soup",
  "मनचाउ सुप": "Manchow Soup",
  "वेजीटेबल सुप": "Vegetable Soup",
  "स्वीटकोर्न सुप": "Sweet Corn Soup",
  "होट एण्ड सोर सुप": "Hot & Sour Soup",
  "वेजीटेबल खजाना": "Vegetable Khazana",
  "पालक बेबीकॉर्न": "Palak Babycorn",
  "पालक स्वीट कॉर्न": "Palak Sweet Corn",
  "मटर मलाई मैथी": "Matar Malai Methi",
  "चना मसाला": "Chana Masala",
  "केर किश मिश": "Ker Kishmish",
  "मटर आलू": "Matar Aloo",
  "आलू मैथी": "Aloo Methi",
  "स्टफ आलू": "Stuffed Aloo",
  "कश्मीरी आलू": "Kashmiri Aloo",
  "दम आलू": "Dum Aloo",
  "आलू पोदीना": "Aloo Pudina",
  "आलू गोभी": "Aloo Gobhi",
  "जीरा आलू": "Jeera Aloo",
  "अचारी आलू": "Achari Aloo",
  "मिक्स वेज": "Mix Veg",
  "स्टफ टिण्डा": "Stuffed Tinda",
  "भिण्डी मसाला": "Bhindi Masala",
  "स्टफ टमाटर": "Stuffed Tomato",
  "बैंगन का भरता": "Baingan Bharta",
  "मलाई प्याज": "Malai Pyaz",
  "काजू लिलवा": "Kaju Lilva",
  "पनीर साईड आईटम": "Paneer Side Item",
  "मटर पनीर": "Matar Paneer",
  "पनीर बटर मसाला": "Paneer Butter Masala",
  "शाही पनीर": "Shahi Paneer",
  "पनीर शिमला": "Paneer Shimla",
  "पनीर अंगारा": "Paneer Angara",
  "पनीर पसन्दा": "Paneer Pasanda",
  "पनीर कोरमा": "Paneer Korma",
  "पनीर सिंगापुरी": "Paneer Singapuri",
  "कड़ाई पनीर": "Kadai Paneer",
  "पालक पनीर": "Palak Paneer",
  "पनीर स्वीटकॉर्न": "Paneer Sweet Corn",
  "पनीर बेबीकॉर्न": "Paneer Babycorn",
  "पनीर खूरम": "Paneer Khurma",
  "पनीर टकाatak": "Paneer Takatak",
  "पनीर दालफाई": "Paneer Dal Fry",
  "पनीर फरियादी": "Paneer Fariyadi",
  "पनीर सेलन": "Paneer Salan",
  "सादी पूड़ी": "Plain Poori",
  "पालक पूड़ी": "Palak Poori",
  "मेथी पूड़ी": "Methi Poori",
  "मसाला पूड़ी": "Masala Poori",
  "डिस्को पूड़ी": "Disco Poori",
  "सिगडी रोटी": "Sigdi Roti",
  "तवा रोटी": "Tawa Roti",
  "duppad रोटी": "Duppad Roti",
  "बाजरे की रोटी": "Bajra Roti",
  "मक्की की रोटी": "Makki Roti",
  "काजू कतली": "Kaju Katli",
  "बादाम कतली": "Badam Katli",
  "ड्राईफ्रूट कतली": "Dryfruit Katli",
  "काजू अंजीर रोल": "Kaju Anjeer Roll",
  "बादाम बॉल": "Badam Ball",
  "काजू सीताफल": "Kaju Sitafal",
  "काजू कलश": "Kaju Kalash",
  "काजू समोसा": "Kaju Samosa",
  "काजू अखरोट का हलवा": "Kaju Akhrot Halwa",
  "काजू मेर पाक": "Kaju Mysore Pak",
  "केसर कलाकंद": "Kesar Kalakand",
  "मिल्क केक": "Milk Cake",
  "अलवर पाक": "Alwar Pak",
  "डायमंड केक": "Diamond Cake",
  "संगम बर्फी": "Sangam Barfi",
  "पंचमेवा चक्की": "Panchmewa Chakki",
  "गोंद पाक": "Gond Pak",
  "दिलखुश": "Dilkhush",
  "मक्खन वड़ा": "Makhan Vada",
  "स्टफ छेना जामुन": "Stuffed Chena Jamun",
  "रबड़ी घेवर": "Rabdi Ghever",
  "कटोरी घेवर": "Katori Ghever",
  "मोती महल": "Moti Mahal",
  "मोती पाक": "Moti Pak",
  "दिलबहार बर्फी": "Dilbahar Barfi",
  "मलाई बर्फी": "Malai Barfi",
  "दाल बादाम चक्की": "Dal Badam Chakki",
  "तवा मिठाई": "Tawa Mithai",
  "गरम इमरती": "Garam Imarti",
  "कढ़ाई दूध": "Kadai Doodh",
  "दूध फेनी": "Doodh Feni",
  "मक्खन पाकीजा": "Makhan Pakeeza",
  "मक्खन तरबूज": "Makhan Tarbooj",
  "मक्खन संतरा": "Makhan Santra",
  "मक्खन इमरती": "Makhan Imarti",
  "संतरा सैंडविच": "Santra Sandwich",
  "छेना रोल": "Chena Roll",
  "मलाई चाप": "Malai Chaap",
  "पाइनेप्पल पेस्टी": "Pineapple Pastry",
  "चोकलेट पेस्टी": "Chocolate Pastry",
  "ब्लेक फारेस्ट पेस्टी": "Black Forest Pastry",
  "स्टोबेरी पेस्टी": "Strawberry Pastry",
  "ट्रायफस पेस्टी": "Truffle Pastry",
  "गाजर हलवा": "Gajar Halwa",
  "मैंगो हलवा": "Mango Halwa",
  "मूंग दाल हलवा": "Moong Dal Halwa",
  "बादाम का हलवा": "Badam Halwa",
  "बादाम पिस्ता हलवा": "Badam Pista Halwa",
  "अंजीर हलवा": "Anjeer Halwa",
  "लौकी हलवा": "Lauki Halwa",
  "तिरंगा हलवा": "Tiranga Halwa",
  "रसमलाई": "Rasmalai",
  "इन्द्राणी": "Indrani",
  "हिरामणी": "Hiramani",
  "चाईनीज रसगुल्ला": "Chinese Rasgulla",
  "संतरा सैण्डवीच": "Santra Sandwich",
  "छैणा रोल": "Chena Roll",
  "फ्रूट क्रीम": "Fruit Cream",
  "पायन एप्पल क्रीम": "Pineapple Cream",
  "मैंगो क्रीम": "Mango Cream",
  "राजभोग": "Rajbhog",
  "केसर बाटी": "Kesar Bati",
  "स्पंजी रसगुल्ला": "Spongy Rasgulla",
  "मैंगो रबड़ी": "Mango Rabdi",
  "फ्रूट रबड़ी": "Fruit Rabdi",
  "सिताफल बासुंदी": "Sitafal Basundi",
  "पान गिलोरी": "Paan Gilori",
  "अंगूरी पेठा": "Angoori Petha",
  "बेसन लड्डू": "Besan Ladoo",
  "मोतीचूर लड्डू": "Motichoor Ladoo",
  "दूध के लड्डू": "Doodh Ladoo",
  "करण शाही लड्डू": "Karan Shahi Ladoo",
  "सोहन पपड़ी": "Sohan Papdi",
  "चंद्रकला": "Chandrakala",
  "पायनापल ज्यूस": "Pineapple Juice",
  "मोंसबी ज्यूस": "Mosambi Juice",
  "संतरा ज्यूस": "Orange Juice",
  "तरबूज ज्यूस": "Watermelon Juice",
  "गाजर ज्यूस": "Carrot Juice",
  "मैंगो ज्यूस": "Mango Juice",
  "अनार ज्यूस": "Pomegranate Juice",
  "मिक्स ज्यूस": "Mix Juice",
  "मिक्स फ्रूट ज्यूस": "Mix Fruit Juice",
  "गन्ना ज्यूस": "Sugarcane Juice",
  "मिरण्डा शेक": "Mirinda Shake",
  "लिची शेक": "Litchi Shake",
  "स्ट्रॉबेरी शेक": "Strawberry Shake",
  "काजु अंजीर शेक": "Kaju Anjeer Shake",
  "पान शेक": "Paan Shake",
  "मैंगो शेक": "Mango Shake",
  "सिताफल शेक": "Sitafal Shake",
  "Compartment Mukhwas": "कम्पार्टमेंट मुखवास",
  "chikoo शेक": "Chikoo Shake"
};

window.getCategoryBanner = function(key) {
  const mapping = {
    breakfast: 'assets/header_nashta.jpg',
    soup: 'assets/header_soup.jpg',
    sabji: 'assets/header_main course-sabji.png',
    roti: 'assets/header_roti.jpg',
    pulav: 'assets/header_rice.jpg',
    punjabi: 'assets/header_punjabi.jpg',
    south: 'assets/header_south_indian.jpg',
    rajasthani: 'assets/header_rajasthani.jpg',
    liveSabji: 'assets/header_live sabji.jpg',
    live: 'assets/header_extra counter live.jpg',
    mithai: 'assets/header_mithai.jpg',
    drinks: 'assets/header_cocktail.jpg',
    mahilaSangeet: 'assets/header_nashta.jpg',
    funcSpecial: 'assets/header_function special.jpg',
    paan: 'assets/header_mukhwas.jpg',
    fruits: 'assets/header_fruits.jpg'
  };
  return mapping[key] || 'assets/royal_buffet_setup.png';
};
