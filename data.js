// ─────────────────────────────────────────────
// CONTINENT → COUNTRIES MAPPING
// ─────────────────────────────────────────────
const CONTINENTS = {
    africa: {
        name: "Africa",
        countries: [
            "Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi","Cabo Verde","Cameroon","Central African Republic","Chad","Comoros","Congo","Djibouti","Egypt","Equatorial Guinea","Eritrea","Eswatini","Ethiopia","Gabon","Gambia","Ghana","Guinea","Guinea-Bissau","Ivory Coast","Kenya","Lesotho","Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Mauritius","Morocco","Mozambique","Namibia","Niger","Nigeria","Rwanda","São Tomé and Príncipe","Senegal","Seychelles","Sierra Leone","Somalia","South Africa","South Sudan","Sudan","Tanzania","Togo","Tunisia","Uganda","Zambia","Zimbabwe"
        ]
    },

    asia: {
        name: "Asia",
        countries: [
            "Afghanistan","Armenia","Azerbaijan","Bahrain","Bangladesh","Bhutan","Brunei","Cambodia","China","Cyprus","Georgia","India","Indonesia","Iran","Iraq","Israel","Japan","Jordan","Kazakhstan","Kuwait","Kyrgyzstan","Laos","Lebanon","Malaysia","Maldives","Mongolia","Myanmar","Nepal","North Korea","Oman","Pakistan","Palestine","Philippines","Qatar","Russia","Saudi Arabia","Singapore","South Korea","Sri Lanka","Syria","Taiwan","Tajikistan","Thailand","Timor-Leste","Turkey","Turkmenistan","United Arab Emirates","Uzbekistan", "Vietnam","Yemen"
        ]
    },

    europe: {
        name: "Europe",
        countries: [
            "Albania","Andorra","Austria","Belarus","Belgium","Bosnia and Herzegovina","Bulgaria","Croatia","Cyprus","Czech Republic","Denmark","Estonia","Finland","France","Germany","Greece","Hungary","Iceland","Ireland","Italy","Kosovo", "Latvia","Liechtenstein","Lithuania","Luxembourg","Malta","Moldova","Monaco","Montenegro","Netherlands","North Macedonia","Norway","Poland","Portugal","Romania","Russia","San Marino","Serbia","Slovakia","Slovenia","Spain", "Sweden","Switzerland","Ukraine","United Kingdom","Vatican City"
        ]
    },

    northamerica: {
        name: "North America",
        countries: [
            "Antigua and Barbuda","Bahamas","Barbados","Belize","Canada","Costa Rica","Cuba","Dominica","Dominican Republic","El Salvador","Grenada","Guatemala","Haiti","Honduras","Jamaica","Mexico","Nicaragua","Panama","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Trinidad and Tobago","United States"
        ]
    },

    southamerica: {
        name: "South America",
        countries: [
            "Argentina","Bolivia","Brazil","Chile","Colombia","Ecuador","Guyana","Paraguay","Peru","Suriname","Uruguay","Venezuela"
        ]
    },

    oceania: {
        name: "Oceania",
        countries: [
            "Australia","Fiji","Kiribati","Marshall Islands","Micronesia","Nauru","New Zealand","Palau","Papua New Guinea","Samoa","Solomon Islands","Tonga","Tuvalu","Vanuatu"
        ]
    },

    antarctica: {
        name: "Antarctica",
        countries: ["Antarctica"]
    }
};



// ─────────────────────────────────────────────
// COUNTRY DETAILS
// iso2: ISO 3166-1 alpha-2 code (UPPERCASE) — drives flag image via flagcdn.com
// The countries should be in alphabetic order A-Z within each continent group for easier navigation and maintenance. This is important to maintain while contributing as the order will be checked before PR merge.
// ─────────────────────────────────────────────
const COUNTRY_DETAILS = {
    // Africa
    "egypt":{
        name: "Egypt",
        capital: "Cairo",
        countryCode: "EG",
        iso2: "EG",
        isd: "+20",
        currency: "EGP",
        languages: ["Arabic"]
    },

    "kenya": {
        name: "Kenya",
        capital: "Nairobi",
        countryCode: "KE",
        iso2: "KE",
        isd: "+254",
        currency: "Kenyan Shilling (KES)",
        languages: ["English", "Swahili"]
    },

    "nigeria": {
        name: "Nigeria",
        capital: "Abuja",
        countryCode: "NG",
        iso2: "NG",
        isd: "+234",
        currency: "Nigerian Naira (NGN)",
        languages: ["English", "Hausa", "Yoruba","Igbo"]
    },

    "south africa": {
        name: "South Africa",
        capital: "Pretoria",
        countryCode: "ZA",
        iso2: "ZA",
        isd: "+27",
        currency: "South African Rand (ZAR)",
        languages: ["Zulu", "Xhosa", "Afrikaans", "English", "Sepedi", "Setswana", 
            "Sesotho", "Xitsonga", "siSwati", "Tshivenda", "Ndebele"]
    },

    "togo": {
        name: "Togo",
        capital: "Lome",
        countryCode: "TG",
        iso2: "TG",
        isd: "+228",
        currency: "West African CFA Franc (XOF)",
        languages: ["French"]
    },


    // Asia
    "bangladesh": {
        name: "Bangladesh",
        capital: "Dhaka",
        countryCode: "BD",
        iso2: "BD",
        isd: "+880",
        currency: "Bangladeshi Taka (BDT)",
        languages: ["Bengali"]
    },

    "bhutan": {
        name: "Bhutan",
        capital: "Thimphu",
        countryCode: "BT",
        iso2: "BT",
        isd: "+975",
        currency: "Bhutanese Ngultrum (BTN)",
        languages: ["Dzongkha"]
    },

    "brunei": {
        name: "Brunei",
        capital: "Bandar Seri Begawan",
        countryCode: "BN",
        iso2: "BN",
        isd: "+673",
        currency: "Brunei Dollar (BND)",
        languages: ["Malay"]
    },

    "cambodia": {
        name: "Cambodia",
        capital: "Phnom Penh",
        countryCode: "KH",
        iso2: "KH",
        isd: "+855",
        currency: "Cambodian Riel (KHR)",
        languages: ["Khmer"]
    },

    "china": {
        name: "China",
        capital: "Beijing",
        countryCode: "CN",
        iso2: "CN",
        isd: "+86",
        currency: "Chinese Yuan (CNY)",
        languages: ["Mandarin Chinese"]
    },

    "india": {
        name: "India",
        capital: "New Delhi",
        countryCode: "IN",
        iso2: "IN",
        isd: "+91",
        currency: "Indian Rupee (INR)",
        languages: ["Hindi", "English", "Bengali", "Telugu", "Marathi", "Tamil", "Urdu"]
    },

    "indonesia": {
        name: "Indonesia",
        capital: "Jakarta",
        countryCode: "ID",
        iso2: "ID",
        isd: "+62",
        currency: "Indonesian Rupiah (IDR)",
        languages: ["Indonesian"]
    },

    "japan": {
        name: "Japan",
        capital: "Tokyo",
        countryCode: "JP",
        iso2: "JP",
        isd: "+81",
        currency: "Japanese Yen (JPY)",
        languages: ["Japanese"]
    },

    "laos": {
        name: "Laos",
        capital: "Vientiane",
        countryCode: "LA",
        iso2: "LA",
        isd: "+856",
        currency: "Lao Kip (LAK)",
        languages: ["Lao"]
    },

    "malaysia": {
        name: "Malaysia",
        capital: "Kuala Lumpur",
        countryCode: "MY",
        iso2: "MY",
        isd: "+60",
        currency: "Malaysian Ringgit (MYR)",
        languages: ["Malay", "English", "Chinese", "Tamil"]
    },

    "maldives": {
        name: "Maldives",
        capital: "Malé",
        countryCode: "MV",
        iso2: "MV",
        isd: "+960",
        currency: "Maldivian Rufiyaa (MVR)",
        languages: ["Dhivehi"]
    },

    "mongolia": {
        name: "Mongolia",
        capital: "Ulaanbaatar",
        countryCode: "MN",
        iso2: "MN",
        isd: "+976",
        currency: "Mongolian Tögrög (MNT)",
        languages: ["Halh Mongolian"]
    },

    "myanmar": {
        name: "Myanmar",
        capital: "Naypyidaw",
        countryCode: "MM",
        iso2: "MM",
        isd: "+95",
        currency: "Myanmar Kyat (MMK)",
        languages: ["Burmese"]
    },

    "nepal": {
        name: "Nepal",
        capital: "Kathmandu",
        countryCode: "NP",
        iso2: "NP",
        isd: "+977",
        currency: "Nepalese Rupee (NPR)",
        languages: ["Nepali"]
    },

    "pakistan": {
        name: "Pakistan",
        capital: "Islamabad",
        countryCode: "PK",
        iso2: "PK",
        isd: "+92",
        currency: "Pakistani Rupee (PKR)",
        languages: ["Urdu", "English"]
    },

    "philippines": {
        name: "Philippines",
        capital: "Manila",
        countryCode: "PH",
        iso2: "PH",
        isd: "+63",
        currency: "Philippine Peso (PHP)",
        languages: ["Filipino", "English"]
    },

    "singapore": {
        name: "Singapore",
        capital: "Singapore",
        countryCode: "SG",
        iso2: "SG",
        isd: "+65",
        currency: "Singapore Dollar (SGD)",
        languages: ["English", "Malay", "Mandarin", "Tamil"]
    },

    "south_korea": {
        name: "South Korea",
        capital: "Seoul",
        countryCode: "KR",
        iso2: "KR",
        isd: "+82",
        currency: "South Korean Won (KRW)",
        languages: ["Korean"]
    },

    "sri_lanka": {
        name: "Sri Lanka",
        capital: "Sri Jayawardenepura Kotte",
        countryCode: "LK",
        iso2: "LK",
        isd: "+94",
        currency: "Sri Lankan Rupee (LKR)",
        languages: ["Sinhala", "Tamil"]
    },

    "thailand": {
        name: "Thailand",
        capital: "Bangkok",
        countryCode: "TH",
        iso2: "TH",
        isd: "+66",
        currency: "Thai Baht (THB)",
        languages: ["Thai"]
    },

    "turkey": {
        name: "Turkey",
        capital: "Ankara",
        countryCode: "TR",
        iso2: "TR",
        isd: "+90",
        currency: "Turkish Lira (TRY)",
        languages: ["Turkish"]
    },

    "vietnam": {
        name: "Vietnam",
        capital: "Hanoi",
        countryCode: "VN",
        iso2: "VN",
        isd: "+84",
        currency: "Vietnamese Dong (VND)",
        languages: ["Vietnamese"]
    },


    // Oceania
        "australia": {
        name: "Australia",
        capital: "Canberra",
        countryCode: "AU",
        iso2: "AU",
        isd: "+61",
        currency: "Australian Dollar (AUD)",
        languages: ["English"]
    },

    "fiji": {
    name: "Fiji",
    capital: "Suva",
    countryCode: "FJ",
    iso2: "FJ",
    isd: "+679",
    currency: "Fijian Dollar (FJD)",
    languages: ["English", "Fijian", "Fiji Hindi"]
    },

    "new_zealand": {
    name: "New Zealand",
    capital: "Wellington",
    countryCode: "NZ",
    iso2: "NZ",
    isd: "+64",
    currency: "New Zealand Dollar (NZD)",
    languages: ["English", "Māori", "NZ Sign Language"]
    },

    "papua_new_guinea": {
    name: "Papua New Guinea",
    capital: "Port Moresby",
    countryCode: "PG",
    iso2: "PG",
    isd: "+675",
    currency: "Papua New Guinean Kina (PGK)",
    languages: ["Tok Pisin", "Hiri Motu", "English"]
    },


    // Europe
    "belgium": {
        name: "Belgium",
        capital: "Brussels",
        countryCode: "BE",
        iso2: "BE",
        isd: "+32",
        currency: "Euro (EUR)",
        languages: ["Dutch", "French", "German"]
    },

    "croatia": {
        name: "Croatia",
        capital: "Zagreb",
        countryCode: "HR",
        iso2: "HR",
        isd: "+385",
        currency: "Croatian Kuna (HRK)",
        languages: ["Croatian"]
    },

    "france": {
        name: "France",
        capital: "Paris",
        countryCode: "FR",
        iso2: "FR",
        isd: "+33",
        currency: "Euro (EUR)",
        languages: ["French"]
    },

    "germany": {
        name: "Germany",
        capital: "Berlin",
        countryCode: "DE",
        iso2: "DE",
        isd: "+49",
        currency: "Euro (EUR)",
        languages: ["German"]
    },

    "greece": {
        name: "Greece",
        capital: "Athens",
        countryCode: "GR",
        iso2: "GR",
        isd: "+30",
        currency: "Euro (EUR)",
        languages: ["Greek"]
    },

    "italy": {
        name: "Italy",
        capital: "Rome",
        countryCode: "IT",
        iso2: "IT",
        isd: "+39",
        currency: "Euro (EUR)",
        languages: ["Italian"]
    },

    "spain": {
        name: "Spain",
        capital: "Madrid",
        countryCode: "ES",
        iso2: "ES",
        isd: "+34",
        currency: "Euro (EUR)",
        languages: ["Spanish"]
    },

    "united_kingdom": {
        name: "United Kingdom",
        capital: "London",
        countryCode: "GB",
        iso2: "GB",
        isd: "+44",
        currency: "British Pound Sterling (GBP)",
        languages: ["English"]
    },


    // North America
    "barbados": {
        name: "Barbados",
        capital: "Bridgetown",
        countryCode: "BB",
        iso2: "BB",
        isd: "+1-246",
        currency: "Barbadian Dollar (BBD)",
        languages: ["English", "Bajan Creole"]
    },

    "canada": {
        name: "Canada",
        capital: "Ottawa",
        countryCode: "CA",
        iso2: "CA",
        isd: "+1",
        currency: "Canadian Dollar (CAD)",
        languages: ["English", "French"]
    },

    "guatemala": {
        name: "Guatemala",
        capital: "Guatemala City",
        countryCode: "GT",
        iso2: "GT",
        isd: "+502",
        currency: "Guatemalan Quetzal (GTQ)",
        languages: ["Spanish"]
    },

    "jamaica": {
    name: "Jamaica",
    capital: "Kingston",
    countryCode: "JM",
    iso2: "JM",
    isd: "+1-876",
    currency: "Jamaican Dollar (JMD)",
    languages: ["English"]
    },

    "mexico": {
    name: "Mexico",
    capital: "Mexico City",
    countryCode: "MX",
    iso2: "MX",
    isd: "+52",
    currency: "Mexican Peso (MXN)",
    languages: ["Spanish"]
    },

    "united_states": {
        name: "United States",
        capital: "Washington, D.C.",
        countryCode: "US",
        iso2: "US",
        isd: "+1",
        currency: "United States Dollar (USD)",
        languages: ["English"]
    },


    // South America
    "argentina": {
        name: "Argentina",
        capital: "Buenos Aires",
        countryCode: "AR",
        iso2: "AR",
        isd: "+54",
        currency: "Argentine Peso (ARS)",
        languages: ["Spanish"]
    },

    "brazil": {
        name: "Brazil",
        capital: "Brasília",
        countryCode: "BR",
        iso2: "BR",
        isd: "+55",
        currency: "Brazilian Real (BRL)",
        languages: ["Portuguese"]
    },

    "chile": {
        name: "Chile",
        capital: "Santiago",
        countryCode: "CL",
        iso2: "CL",
        isd: "+56",
        currency: "Chilean Peso (CLP)",
        languages: ["Spanish"]
    },

    "colombia": {
        name: "Colombia",
        capital: "Bogotá",
        countryCode: "CO",
        iso2: "CO",
        isd: "+57",
        currency: "Colombian Peso (COP)",
        languages: ["Spanish"]
    },
};



// ─────────────────────────────────────────────
// HELPLINES DATA
// Format A (state-wise): { "State Name": { "Service": "number" } }
// Format B (national):   { "Service": "number" }
// Make sure that the state names are in alphabetic order A-Z within each country for easier navigation and maintenance. This is important to maintain while contributing as the order will be checked before PR merge.
// ─────────────────────────────────────────────
const HELPLINES = {
    /* Africa */
    "algeria": {
        "Police": "1548",
        "Ambulance": "14",
        "Gendarmerie": "1055"
    },

    "angola": {
        "Police": "113",
        "Ambulance": "112/116",
        "Fire": "115"
    },

    "benin": {
        "Police": "117",
        "Ambulance": "112",
        "Fire": "118"
    },

    "botswana": {
        "Police": "999",
        "Ambulance": "997",
        "Fire": "998",
        "Mobile Emergency": "112"
    },

    "burkina_faso": {
        "Police": "17",
        "Ambulance": "112",
        "Fire": "18"
    },

    "cameroon": {
        "Police": "117",
        "Ambulance": "1220",
        "Fire": "118"
    },

    "cape_verde": {
        "Emergency": "132",
        "Ambulance": "130",
        "Fire": "131"
    },

    "chad": {
        "Police": "17",
        "Fire": "18",
        "Ambulance": "2251-4242",
        "Alternate Ambulance": "2251-1237"
    },

    "comoros": {
        "Police": "17",
        "Fire": "18",
        "Ambulance": "772-03-73"
    },

    "djibouti": {
        "Police": "117",
        "Fire": "118"
    },

    "eritrea": {
        "Emergency": "112",
        "Fire": "118"
    },

    "eswatini": {
        "Police": "999",
        "Ambulance": "977",
        "Fire": "933"
    },

    "egypt":{
        "Unfied_emergency": "112",
        "Police": "122",
        "Ambulance": "123",
        "Fire": "180",
        "Tourist Police": "126",
        "Traffic Police": "128"
    },
   
    "equatorial_guinea": {
        "Police": "114",
        "Ambulance": "115",
        "Fire": "112",
        "Traffic Police": "116"
    },

    "ethiopia": {
        "Emergency": "911",
        "Police": "991",
        "Ambulance": "907",
        "Fire": "939",
        "Traffic Police": "945"
    },

    "gabon": {
        "Police": "1730",
        "Ambulance": "1300",
        "Fire": "18"
    },

    "gambia": {
        "Police": "117",
        "Ambulance": "116",
        "Fire": "118",
        "Emergency": "112",
        "Electricity Emergency": "124",
        "Water Emergency": "125"
    },

    "ghana": {
        "Emergency": "112",
        "Police": "191",
        "Ambulance": "193",
        "Fire": "192"
    },

    "guinea": {
        "Police": "117",
        "Fire": "18",
        "Maritime Emergency": "19",
        "Gendarmerie": "118",
        "National Gendarmerie": "122"
    },

    "guinea_bissau": {
        "Emergency": "112",
        "Police": "117",
        "Ambulance": "119",
        "Fire": "118"
    },

    "ivory_coast": {
        "Police": "110",
        "Gendarmerie": "111",
        "Ambulance": "185",
        "Fire": "180"
    },

    "kenya": {
        "Emergency": "999",
        "Police": "999",
        "Fire": "999",
        "Ambulance": "999",
        "Gender Based Violence": "1195"
    },

    "liberia": {
        "Emergency": "911"
    },

    "libya": {
        "Emergency": "112",
        "Police": "1515",
        "Ambulance": "193"
    },

    "madagascar": {
        "Police": "117",
        "Ambulance": "124",
        "Fire": "118",
        "Traffic Police": "3600"
    },

    "malawi": {
        "Police": "997",
        "Ambulance": "998",
        "Fire": "999",
        "Traffic Police": "990"
    },

    "mali": {
        "Police": "17",
        "Ambulance": "15",
        "Fire": "18",
        "Emergency": "112"
    },

    "mauritania": {
        "Police": "117",
        "Ambulance": "101",
        "Fire": "118",
        "Gendarmerie": "116",
        "Traffic Police": "119"
    },

    "mauritius": {
        "Emergency": "112",
        "Police": "999",
        "Ambulance": "114",
        "Fire": "115",
        "Fire Alternate": "995"
    },

    "morocco": {
        "Police": "19",
        "Ambulance": "15",
        "Emergency": "112",
        "Royal Gendarmerie": "177",
        "Drugs & Alcohol Service": "113",
        "Racial Discrimination Hotline": "114",
        "Non Emergency Disturbances": "110"
    },

    "mozambique": {
        "Police": "119",
        "Ambulance": "117",
        "Fire": "198"
    },

    "namibia": {
        "Police": "10 111"
    },

    "niger": {
        "Police": "17",
        "Ambulance": "15",
        "Fire": "18"
    },

    "nigeria": {
        "Emergency": "112",
        "Police": "112",
        "Fire": "112",
        "Ambulance": "112",
        "Mental Health": "+234 800 123 4567"
    },

    "reunion": {
        "Emergency": "112",
        "Police": "17",
        "Ambulance": "15",
        "Fire": "18"
    },

    "rwanda": {
        "Emergency": "112",
        "Police": "112",
        "Ambulance": "912",
        "Traffic Police": "113"
    },

    "south_africa": {
        "Emergency": "112",
        "Police": "10111",
        "Ambulance": "10177",
        "Gender Based Violence": "0800 428 428"
    },

    "sudan": {
        "Police": "999"
    },

    "tanzania": {
        "Emergency": "112",
        "Police": "999",
        "Ambulance": "114",
        "Fire": "115",
        "Health Centre": "199"
    },

    "togo": {
        "Police": "117",
        "Ambulance & Fire": "118",
        "Fire": "8200"
    },

    "tunisia": {
        "Police": "197",
        "Ambulance": "190",
        "Fire": "198",
        "National Guard": "193"
    },

    "uganda": {
        "Police": "999",
        "Ambulance": "911",
        "Fire": "999"
    },

    "zambia": {
        "Police": "991",
        "Ambulance": "992",
        "Fire": "993",
        "Emergency": "112"
    },

    "zimbabwe": {
        "Police": "995",
        "Ambulance": "994",
        "Fire": "993",
        "Emergency": "112"
    },


    /* Asia */
    "afghanistan": {
        "Police": "119",
        "Ambulance": "102",
        "Fire": "103"
    },

    "armenia": {
        "Police": "102",
        "Ambulance": "103",
        "Fire": "101",
        "Emergency": "112"
    },

    "azerbaijan": {
        "Police": "102",
        "Ambulance": "103",
        "Fire": "101",
        "Emergency": "112"
    },

    "bahrain": {
        "Emergency": "999",
        "Traffic Police": "199",
        "Coast Guard": "994"
    },

    "bangladesh": {
        "Police / Fire / Ambulance": "999",
        "Women & Child Abuse Prevention": "109",
        "Anti Corruption Commission": "106",
        "Agricultural Information": "16123",
        "Health Services": "16263",
        "Legal Services": "16430",
        "National Information Service": "333"
    },

    "bhutan": {
        "Police / Fire / Ambulance": "113",
        "Fire & Rescue": "110",
        "Ambulance & Medical": "112",
        "Disaster Communication": "999"
    },

    "brunei": {
        "Ambulance": "991",
        "Police": "993",
        "Fire & Rescue": "995",
        "Search & Rescue": "998"
    },

    "cambodia": {
        "Police": "117",
        "Fire": "118",
        "Ambulance": "119",
        "Child Helpline": "1280",
        "Human Trafficking": "1288",
        "Tourist Police": "+855 (0)12 942 484"
    },

    "china": {
        "Police": "110",
        "Fire": "119",
        "Ambulance": "120",
        "Traffic": "122",
        "Coast Guard": "95110"
    },

    "georgia": {
        "Emergency": "112"
    },

    "hong_kong": {
        "Emergency": "999",
        "Mobile Emergency": "112"
    },

    "india": {
        "Unified Emergency": "112",
        "Police": "100",
        "Fire": "101",
        "Ambulance": "102 / 108",
        "Women": "1091 / 181",
        "Child Helpline": "1098",
        "Cyber Crime": "1930",
        "Disaster Management": "104",
        "Tourist Helpline": "1363",
        "Gas Leakage": "1906"
    },

    "indonesia": {
        "General Emergency": "112",
        "Police": "110",
        "Ambulance": "118 / 119",
        "Fire": "113 / 1131", 
        "Search & Rescue": "115",
        "Natural Disasters": "129",
        "Electricity Emergency": "123"
    },

    "iran": {
        "Police": "110",
        "Ambulance": "115",
        "Fire": "125",
        "Red Crescent": "112",
        "Road Traffic Information": "141"
    },

    "iraq": {
        "Emergency": "112",
        "Police": "104",
        "Ambulance": "122",
        "Fire": "115",
        "Mobile Emergency": "911"
    },

    "israel": {
        "Police": "100",
        "Ambulance": "101",
        "Fire": "102",
        "Electric Corporation": "103",
        "Home Front Command": "104",
        "Child Abuse Hotline": "105",
        "Municipal Hazards": "106",
        "Police Information": "110",
        "Emergency": "112"
    },


    "japan": {
        "Police": "110",
        "Ambulance & Fire": "119",
        "Marine Emergency": "118",
        "Japan Helpline": "0570-000-911",
        "Coast Guard": "118",
        "Emergency Information": "#7119",
        "Roadside Assistance": "#8139"
    },

    "jordan": {
        "Emergency": "911"
    },

    "kazakhstan": {
        "Police": "102",
        "Ambulance": "103",
        "Fire": "101",
        "Gas Emergency": "104",
        "Emergency": "112"
    },

    "kuwait": {
        "Emergency": "112"
    },

    "kyrgyzstan": {
        "Police": "102",
        "Ambulance": "103",
        "Fire": "101",
        "Gas Emergency": "104",
        "Emergency": "112"
    },

    "laos": {
        "Police": "1191",
        "Fire": "1190",
        "Ambulance": "1195",
        "Tourist Police": "1192"
    },

    "lebanon": {
        "Police": "112",
        "Ambulance": "140",
        "Fire": "175"
    },

    "macau": {
        "Police": "999",
        "Emergency": "112"
    },

    "malaysia": {
        "General Emergency": "999",
        "Fire": "994",
        "Marine Emergency": "+60 3 8941 3140"
    },

    "maldives": {
        "Police": "119",
        "Ambulance": "102",
        "Fire": "118",
        "Coast Guard": "191"
    },

    "mongolia": {
        "Police": "102",
        "Ambulance": "103",
        "Fire": "101",
        "Emergency": "105"
    },

    "myanmar": {
        "Police": "199",
        "Fire": "191",
        "Ambulance": "192"
    },

    "nepal": {
        "Police": "100",
        "Fire": "101",
        "Ambulance": "102",
        "Tourist Police": "1144"
    },

    "north_korea": {
        "Police": "112",
        "Ambulance": "119",
        "Fire": "119"
    },

    "oman": {
        "Emergency": "9999",
        "International Emergency": "112"
    },

    "pakistan": {
        "Police": "15",
        "Fire": "16",
        "Ambulance": "115",
        "Rescue Service": "1122"
    },

    "philippines": {
        "Police": "117",
        "Fire": "160",
        "Ambulance": "161"
    },

    "qatar": {
        "Emergency": "999"
    },

    "saudi_arabia": {
        "Police": "999",
        "Ambulance": "997",
        "Fire": "998",
        "Traffic Accidents": "993"
    },

    "singapore": {
        "Police": "999",
        "Ambulance & Fire": "995"
    },

    "south_korea": {
        "Police": "112",
        "Fire & Ambulance": "119"
    },

    "sri_lanka": {
        "Police": "119",
        "Fire & Ambulance": "110"
    },

    "syria": {
        "Police": "112",
        "Ambulance": "110",
        "Fire": "113"
    },

    "taiwan": {
        "Police": "110",
        "Ambulance": "119",
        "Fire": "119"
    },

    "tajikistan": {
        "Police": "102",
        "Ambulance": "103",
        "Fire": "101",
        "Gas Emergency": "104",
        "Emergency": "112"
    },

    "thailand": {
        "Police": "191",
        "Ambulance & Fire": "1669",
        "Marine Emergency": "1199"
    },

    "turkey": {
        "Police": "155",
        "Ambulance": "112",
        "Fire": "110",
        "Gendarmerie": "156"
    },

    "turkmenistan": {
        "Police": "102",
        "Ambulance": "103",
        "Fire": "101",
        "Gas Emergency": "104",
        "Emergency": "112"
    },

    "united_arab_emirates": {
        "Police": "999",
        "Ambulance": "998",
        "Fire": "997"
    },

    "uzbekistan": {
        "Police": "102",
        "Ambulance": "103",
        "Fire": "101",
        "Gas Emergency": "104",
        "Emergency": "112"
    },

    "vietnam": {
        "Police": "113",
        "Fire": "114",
        "Ambulance": "115"
    },

    "yemen": {
        "Police": "194",
        "Ambulance": "191",
        "Fire": "191"
    },


    /* Australia */
    "american_samoa": {
        "Emergency": "911"
    },

    "australia": {
        "General Emergency": "000",
        "Mobile Emergency": "112",
        "Text Emergency (TTY)": "106",
        "Police Non-Emergency": "131 444",
        "State Emergency Service": "132 500",
        "Health Advice (Non-Emergency)": "1800 022 222",
        "Poisons Information Centre": "13 11 26",
        "Suicide Crisis Support (Lifeline)": "13 11 14",
        "National Security": "1800 123 400",
        "Crime Stoppers": "1800 333 000"
    },

    "christmas_island": {
        "Emergency": "000"
    },

    "cocos_keeling_islands": {
        "Emergency": "000"
    },

    "cook_islands": {
        "Police": "999",
        "Ambulance": "998",
        "Fire": "996"
    },

    "federated_states_of_micronesia": {
        "Emergency": "911"
    },

    "fiji": {
        "Ambulance": "910",
        "Police": "917",
        "Fire": "911",
        "Disaster Management": "915",
        "Search & Rescue": "915",
        "Crime Stoppers": "919"
    },

    "french_polynesia": {
        "Police": "17",
        "Ambulance": "15",
        "Fire": "18",
        "Emergency": "112"
    },

    "guam": {
        "Emergency": "911"
    },

    "kiribati": {
        "Police": "192",
        "Ambulance": "994",
        "Fire": "193"
    },

    "marshall_islands": {
        "Emergency": "911"
    },

    "nauru": {
        "Police": "110",
        "Ambulance": "111",
        "Fire": "112"
    },

    "new_caledonia": {
        "Police": "17",
        "Ambulance": "15",
        "Fire": "18",
        "Emergency": "112"
    },

    "new_zealand": {
        "Emergency": "111",
        "Healthline": "0800 611 116",
        "Lifeline": "0800 543 354"
    },

    "niue": {
        "Emergency": "999"
    },

    "norfolk_island": {
        "Emergency": "000"
    },

    "northern_mariana_islands": {
        "Emergency": "911"
    },

    "palau": {
        "Emergency": "911"
    },

    "papua_new_guinea": {
        "Police": "112",
        "Ambulance": "111",
        "Fire": "110"
    },

    "samoa": {
        "Emergency": "999",
        "Police": "995",
        "Ambulance": "996",
        "Fire": "994"
    },

    "solomon_islands": {
        "Police": "999",
        "Ambulance": "911",
        "Fire": "988"
    },

    "tokelau": {
        "Emergency": "111"
    },

    "tonga": {
        "Police": "922",
        "Ambulance": "933",
        "Fire": "999"
    },

    "tuvalu": {
        "Emergency": "911"
    },

    "vanuatu": {
        "Police": "111",
        "Ambulance": "112",
        "Fire": "113"
    },

    





    /* Europe */
    "albania": {
        "Police": "129",
        "Ambulance": "127",
        "Fire": "128",
        "Emergency": "112"
    },

    "andorra": {
        "Police": "110",
        "Ambulance": "116",
        "Fire": "118",
        "Emergency": "112"
    },

    "austria": {
        "Police": "133",
        "Ambulance": "144",
        "Fire": "122",
        "Emergency": "112"
    },

    "belarus": {
        "Police": "102",
        "Ambulance": "103",
        "Fire": "101",
        "Gas Emergency": "104",
        "Emergency": "112"
    },

    "belgium": {
        "Emergency": "112",
        "Ambulance": "100",
        "Police": "101",
        "Fire": "1722",
        "Medical": "1733"
    },

    "bosnia_and_herzegovina": {
        "Police": "122",
        "Ambulance": "124",
        "Fire": "123",
        "Emergency": "112"
    },

    "bulgaria": {
        "Emergency": "112"
    },

    "croatia": {
        "Emergency": "112",
        "Police": "192",
        "Fire": "193",
        "Medical": "194",
        "Maritime Search & Rescue": "195"
    },

    "cyprus": {
        "Police": "112",
        "Ambulance": "112",
        "Fire": "112",
        "Emergency": "112"
    },

    "czech_republic": {
        "Police": "158",
        "Ambulance": "155",
        "Fire": "150",
        "Emergency": "112"
    },

    "denmark": {
        "Emergency": "112",
        "Police Non-Emergency": "114"
    },

    "estonia": {
        "Emergency": "112"
    },

    "finland": {
        "Emergency": "112"
    },

    "france": {
        "Emergency": "112",
        "Police": "17",
        "Fire": "18",
        "Medical": "15",
        "Deaf & Hard of Hearing": "114"
    },

    "germany": {
        "Emergency": "112",
        "Police": "110",
        "Suicide Prevention": "+49 800 111 0 111"
    },

    "greece": {
        "Police": "100",
        "Ambulance & Fire": "166",
        "Fire": "199",
        "Emergency": "112",
        "Tourist Police": "171"
    },

    "hungary": {
        "Police": "107",
        "Ambulance": "104",
        "Fire": "105",
        "Emergency": "112"
    },

    "iceland": {
        "Emergency": "112"
    },

    "ireland": {
        "Emergency": "112",
        "Emergency Alternate": "999"
    },

    "italy": {
        "Police": "112",
        "Fire": "115",
        "Medical": "118",
        "Coast Guard": "1530",
        "Forest Fires": "1515"
    },

    "kosovo": {
        "Police": "192",
        "Ambulance": "194",
        "Fire": "193",
        "Emergency": "112"
    },

    "latvia": {
        "Emergency": "112",
        "Police": "110",
        "Ambulance": "113",
        "Fire": "112"
    },

    "liechtenstein": {
        "Police": "117",
        "Ambulance": "144",
        "Fire": "118",
        "Emergency": "112"
    },

    "lithuania": {
        "Emergency": "112"
    },

    "luxembourg": {
        "Police": "113",
        "Emergency": "112"
    },

    "malta": {
        "Police": "112",
        "Ambulance": "196",
        "Fire": "199"
    },

    "moldova": {
        "Emergency": "112"
    },

    "monaco": {
        "Police": "17",
        "Ambulance": "15",
        "Fire": "18",
        "Emergency": "112"
    },

    "montenegro": {
        "Police": "122",
        "Ambulance": "124",
        "Fire": "123",
        "Emergency": "112"
    },

    "netherlands": {
        "Emergency": "112"
    },

    "north_macedonia": {
        "Police": "192",
        "Ambulance": "194",
        "Fire": "193",
        "Emergency": "112"
    },

    "norway": {
        "Police": "112",
        "Ambulance": "113",
        "Fire": "110"
    },

    "poland": {
        "Emergency": "112",
        "Police": "997",
        "Ambulance": "999",
        "Fire": "998"
    },

    "portugal": {
        "Emergency": "112"
    },

    "romania": {
        "Emergency": "112"
    },

    "russia": {
        "Police": "102",
        "Ambulance": "103",
        "Fire": "101",
        "Gas Emergency": "104",
        "Emergency": "112"
    },

    "san_marino": {
        "Police": "113",
        "Medical Emergency": "118",
        "Fire": "115",
        "Emergency": "112"
    },

    "serbia": {
        "Police": "192",
        "Ambulance": "194",
        "Fire": "193",
        "Emergency": "112"
    },

    "slovakia": {
        "Police": "158",
        "Ambulance": "155",
        "Fire": "150",
        "Emergency": "112"
    },

    "slovenia": {
        "Police": "113",
        "Ambulance": "112",
        "Fire": "112",
        "Emergency": "112"
    },

    "spain": {
        "Police": "112",
        "Ambulance & Fire": "112",
        "Marine Emergency": "112",
        "Civil Guard": "062"
    },
    
    "sweden": {
        "Emergency": "112",
        "Police Non-Emergency": "11414"
    },

    "switzerland": {
        "Police": "117",
        "Ambulance": "144",
        "Fire": "118",
        "Emergency": "112",
        "Poison Information": "145"
    },

    "ukraine": {
        "Police": "102",
        "Ambulance": "103",
        "Fire": "101",
        "Gas Emergency": "104",
        "Emergency": "112"
    },

    "united_kingdom": {
        "Emergency": "999",
        "Non-Emergency": "101",
        "Medical Advice": "111"
    },

    "vatican_city": {
        "Emergency": "112"
    },


    /* North America */
    "antigua_and_barbuda": {
        "Emergency": "911",
        "Police": "999",
        "Ambulance": "911",
        "Fire": "911"
    },

    "bahamas": {
        "Police": "919",
        "Ambulance": "919",
        "Fire": "919"
    },

    "barbados": {
        "Police": "211",
        "Fire": "311",
        "Ambulance": "511"
    },

    "belize": {
        "Police": "911",
        "Ambulance": "911",
        "Fire": "911"
    },

    "canada": {
        "Emergency": "911",
        "Suicide Crisis": "9-8-8",
        "Poison Control": "1-844-764-7669",
        "Non-Emergency Social Services": "211",
        "Non-Emergency Health Advice": "811"
    },

    "costa_rica": {
        "Emergency": "911"
    },

    "cuba": {
        "Police": "106",
        "Ambulance": "104",
        "Fire": "105"
    },

    "dominica": {
        "Police": "999",
        "Ambulance": "999",
        "Fire": "999"
    },

    "dominican_republic": {
        "Emergency": "911"
    },

    "el_salvador": {
        "Police": "911",
        "Ambulance": "132",
        "Fire": "913"
    },

    "grenada": {
        "Police": "911",
        "Ambulance": "434",
        "Fire": "911"
    },

    "guatemala": {
        "Emergency": "110",
        "Police": "110",
        "Fire & Ambulance": "122/123",
        "Women's Helpline": "1572",
        "Tourist Assistance": "1500"
    },

    "haiti": {
        "Police": "114",
        "Ambulance": "118",
        "Fire": "115"
    },

    "honduras": {
        "Police": "911",
        "Ambulance": "195",
        "Fire": "198"
    },

    "jamaica": {
        "Emergency": "119",
        "Fire": "110"
    },

    "mexico": {
        "Emergency": "911",
        "Suicide Prevention": "800 911 2000",
        "Women (Mexico City)": "765",
        "Women's Helpline": "800 10 84 053",
        "Tourist Assistance": "55 5286 7097"
    },

    "nicaragua": {
        "Police": "118",
        "Ambulance": "128",
        "Fire": "115"
    },

    "panama": {
        "Emergency": "911"
    },

    "saint_kitts_and_nevis": {
        "Police": "911",
        "Ambulance": "911",
        "Fire": "911"
    },

    "saint_lucia": {
        "Police": "999",
        "Ambulance": "911",
        "Fire": "911"
    },

    "saint_vincent_and_the_grenadines": {
        "Police": "999",
        "Ambulance": "999",
        "Fire": "999"
    },

    "trinidad_and_tobago": {
        "Police": "999",
        "Ambulance": "811",
        "Fire": "990"
    },

    "united_states": {
        "Emergency": "911",
        "Suicide Crisis": "988",
        "Poison Control": "1-800-222-1222"
    },


    /* South America */
    "argentina": {
        "Emergency": "911",
        "Suicide Prevention": "135",
        "Women": "144"
    },

    "bolivia": {
        "Police": "110",
        "Ambulance": "118",
        "Fire": "119"
    },

    "brazil": {
        "Emergency": "190",
        "Ambulance": "192",
        "Fire": "193",
        "Women": "180"
    },

    "chile": {
    "Emergency": "133",
    "Ambulance": "131",
    "Fire": "132"
    },

    "colombia": {
        "Emergency": "123",
        "Gender Based Violence": "155"
    },

    "ecuador": {
        "Emergency": "911"
    },

    "french_guiana": {
        "Police": "17",
        "Ambulance": "15",
        "Fire": "18",
        "Emergency": "112"
    },

    "guyana": {
        "Police": "911",
        "Ambulance": "913",
        "Fire": "912"
    },

    "paraguay": {
        "Emergency": "911",
        "Police": "911",
        "Ambulance": "141",
        "Fire": "132"
    },

    "peru": {
        "Police": "105",
        "Ambulance": "117",
        "Fire": "116",
        "Emergency": "911"
    },

    "suriname": {
        "Police": "115",
        "Ambulance": "113",
        "Fire": "110"
    },

    "uruguay": {
        "Emergency": "911",
        "Fire": "104"
    },

    "venezuela": {
        "Emergency": "911",
        "Police": "171",
        "Fire": "171",
        "Civil Protection": "0800-7248451"
    },
};



// ─────────────────────────────────────────────
// MAINTAINER / TEAM CONFIG
// ─────────────────────────────────────────────
const TEAM_CONFIG = {
    maintainer: {
        username: "aumiidutta",
        portfolioLink: "https://saumilidutta.com"
    },

    contributors: [
        // GitHub usernames of contributors — fetched automatically via GitHub API
        "slytechiefrommagentashore", "adi271001"
    ]
};