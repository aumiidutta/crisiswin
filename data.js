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

    NorthAmerica: {
        name: "North America",
        countries: [
            "Antigua and Barbuda","Bahamas","Barbados","Belize","Canada","Costa Rica","Cuba","Dominica","Dominican Republic","El Salvador","Grenada","Guatemala","Haiti","Honduras","Jamaica","Mexico","Nicaragua","Panama","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Trinidad and Tobago","United States"
        ]
    },

    SouthAmerica: {
        name: "South America",
        countries: [
            "Argentina","Bolivia","Brazil","Chile","Colombia","Ecuador","Guyana","Paraguay","Peru","Suriname","Uruguay","Venezuela"
        ]
    },

    Australia: {
        name: "Australia",
        countries: [
            "Australia","Fiji","Kiribati","Marshall Islands","Micronesia","Nauru","New Zealand","Palau","Papua New Guinea","Samoa","Solomon Islands","Tonga","Tuvalu","Vanuatu"
        ]
    },

    Antarctica: {
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


    // Australia
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
    "egypt":{
        "Unfied_emergency": "112",
        "Police": "122",
        "Ambulance": "123",
        "Fire": "180",
        "Tourist Police": "126"
    },

    "kenya": {
        "Emergency": "999",
        "Police": "999",
        "Fire": "999",
        "Ambulance": "999",
        "Gender Based Violence": "1195"
    },

    "nigeria": {
        "Emergency": "112",
        "Police": "112",
        "Fire": "112",
        "Ambulance": "112",
        "Mental Health": "+234 800 123 4567"
    },

    "south_africa": {
        "Emergency": "112",
        "Police": "10111",
        "Ambulance": "10177",
        "Gender Based Violence": "0800 428 428"
    },

    "togo": {
        "Police": "117",
        "Ambulance & Fire": "118",
        "Fire": "8200"
    },


    /* Asia */
    "bangladesh": {
        "Police / Fire / Ambulance": "999",
        "Women & Child Abuse Prevention": "109"
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
        "Traffic": "122"
    },

    "india": {
        "Emergency": "112",
        "Police": "100",
        "Fire": "101",
        "Ambulance": "102 / 108",
        "Women": "1091 / 181",
        "Child Helpline": "1098",
        "Cyber Crime": "1930"
    },

    "indonesia": {
        "General Emergency": "112",
        "Police": "110",
        "Ambulance": "118",
        "Fire": "113"
    },

    "japan": {
        "Police": "110",
        "Ambulance & Fire": "119",
        "Marine Emergency": "118",
        "Japan Helpline": "0570-000-911"
    },

    "laos": {
        "Police": "1191",
        "Fire": "1190",
        "Ambulance": "1195",
        "Tourist Police": "1192"
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
        "Fire": "101"
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

    "pakistan": {
        "Police": "15",
        "Fire": "16",
        "Ambulance": "115"
    },

    "philippines": {
        "Police": "117",
        "Fire": "160",
        "Ambulance": "161"
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

    "vietnam": {
        "Police": "113",
        "Fire": "114",
        "Ambulance": "115"
    },


    /* Australia */
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

    "fiji": {
        "Emergency": "911",
        "Police": "917",
        "Fire": "910",
        "Disaster Management": "915",
        "Search & Rescue": "915",
        "Crime Stoppers": "919"
    },

    "new_zealand": {
        "Emergency": "111",
        "Healthline": "0800 611 116",
        "Lifeline": "0800 543 354"
    },

    "papua_new_guinea": {
        "Police": "112",
        "Ambulance": "111",
        "Fire": "110"
    },


    /* Europe */
    "belgium": {
        "Emergency": "112",
        "Police": "101",
        "Fire": "1722",
        "Medical": "1733"
    },

    "croatia": {
        "Emergency": "112",
        "Police": "192",
        "Fire": "193",
        "Medical": "194",
        "Maritime Search & Rescue": "195"
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
        "Fire": "199"
    },

    "italy": {
        "Police": "112",
        "Fire": "115",
        "Medical": "118",
        "Coast Guard": "1530",
        "Forest Fires": "1515"
    },

    "spain": {
        "Police": "112",
        "Ambulance & Fire": "112",
        "Marine Emergency": "112"
    },

    "united_kingdom": {
        "Emergency": "999",
        "Non-Emergency": "101",
        "Medical Advice": "111"
    },


    /* North America */
    "barbados": {
        "Police": "211",
        "Fire": "311",
        "Ambulance": "511"
    },

    "canada": {
        "Emergency": "911",
        "Suicide Crisis": "9-8-8",
        "Poison Control": "1-844-764-7669",
        "Non-Emergency Social Services": "211",
        "Non-Emergency Health Advice": "811"
    },

    "guatemala": {
        "Emergency": "110",
        "Police": "110",
        "Fire & Ambulance": "122/123",
        "Women's Helpline": "1572",
        "Tourist Assistance": "1500"
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