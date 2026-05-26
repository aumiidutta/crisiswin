# Contribution Guidelines

## Quick start

- Fork the repository
- Clone your fork:
```bash
git clone https://github.com/your-username/crisiswin.git
cd crisiswin
```
- Create a new branch and name in the following manner
`feat/country_name`
- Switch to your created branch
```bash
git branch <feat/country_name>
```


## Add Helplines

1. Locate the file for contributing
Navigate to `data.js`

2. Add country details in the COUNTRY_DETAILS object using this template and replacing the values.
```js
"country_name":{ //Keep the name of country in lowercase
    name: "country_name",
    capital: "capital_name",
    countryCode: "ABC",
    iso2: "ABC",
    isd: "+00",
    currency: "EEE",
    languages: ["Language1", "Language2", .....]
},
```
For example:
```js
"egypt":{
    name: "Egypt",
    capital: "Cairo",
    countryCode: "EG",
    iso2: "EG",
    isd: "+20",
    currency: "EGP",
    languages: ["Arabic"]
},
```

3. Add helpline details in the HELPLINES object using this template and replacing the values.
**State-wise** (when numbers differ by region):
```js
"country_name": {
    "State Name": {
        "helpline_name": "helpline number",
    }
},
```
For example:
```js
"india": {
  "Goa": {
    "Police": "100",
    "Fire": "101",
    "Ambulance": "108"
  }
},
```

**National** (when one number covers the whole country):
```js
"country_name": {
    "helpline_name": "helpline number",
},
```
For example:
```js
"kenya": {
    "Emergency": "999",
    "Police": "999",
    "Fire": "999",
    "Ambulance": "999",
    "Gender Based Violence": "1195"
},
```

4. Test locally
- Run the site on local port
- Check every component is working -> home, countries, helpline page, about, team, search


## Submit PR
- Add the changes and commit them with a message
```bash
git add .
git commit -m "message"
git push origin feat/country_name
```
- Create a PR using the template:
Title: Added <country> helplines
Description: what changes you have made in points


## Point to note

- Verify all helpline numbers before submitting.
- Use the country's official language romanisation for state names.
- Keep numbers as strings (some have letters like `1800-CALLNEMA`).
- One PR per country / region where possible.
- Add your github username at the beginning to `TEAM_CONFIG.contributors` in `data.js`
For example:
```js
"your_github_username", "previous_contributor", ...., "oldest_contributor"
```


## Common mistakes to avoid:
- Make sure to add extra lines to keep the data readable for the next contributor
- Make sure the JSON is valid – take care of comma error
- Keep the countries in **alphabetical order [A-Z]**.
- If the country name is more than one word, then add underscore between the words
- Make sure you have added the countries under their respective continent

Thanks for contributing to CrisisWin! Spread the word- [LinkedIn](https://www.linkedin.com/feed/?shareActive=true&text=Just%20contributed%20to%20CrisisWin(https%3A%2F%2Fgithub.com%2Faumiidutta%2Fcrisiswin)%2C%20it%20is%20an%20open%20source%20helpline%20directory%20for%20all%20the%20countries%0A%23crisiswin%20%23opensource%20%23hacktoberfest%20%23community)