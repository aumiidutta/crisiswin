# CrisisWin

## About

Global Emergency & Helpline Reference
Crisistwin is a lightweight, static, browser-based directory of critical emergency, crisis, and support helpline numbers across countries and regions. Each continent page lists countries with quick-reference data (capital, ISD code, currency, categorized helplines and flags for instant visual recognition). The goal is to provide a fast, searchable, offline‑friendly (once cached) resource that can expand through community contributions.


## Features

- 🌐 7 continents → 190+ countries → state-level helplines
- 🔍 Instant search across all countries and states
- 📱 Mobile-first, installable PWA (works offline)
- 🏳️ Country flags, ISD codes, capitals, currencies, languages
- 🤝 Community-driven — contribute data via GitHub


## Project Structures

crisiswin/ <br />
├── index.html          # SPA shell (all pages rendered here) <br />
├── style.css           # Global stylesheet <br />
├── script.js           # Routing + rendering logic <br />
├── data.js             # All data (continents, countries, helplines, team) <br />
├── manifest.json       # PWA manifest <br />
├── sw.js               # Service Worker (offline support) <br />
├── README.md           # Learn more about the project <br />
├── CONTRIBUTING.md     #Learn how to contribute <br />
├── LICENSE.md <br />
└── assets/


## How It Works

| URL Hash                               | Page              |
|----------------------------------------|-------------------|
| `#/`                                   | Home (continents) |
| `#/continent_name`                    | Asia countries    |
| `#/continent_name/country_name`        | India helplines   |
| `#/about`                              | About page        |
| `#/team`                               | Team page         |


## Contribution
- To contribute, please read the contributing.md file.
- If you want to add details for a country, please create an issue and ask to be assigned.
- Create an issue to suggest an improvement
- Please make sure the code you have written follows the rules mentioned in contributing.md


## Contributors

Thanks you for contributing to CrisisWin! 🎉
Checkout team page to see yourself


2025 © Crisistwin
