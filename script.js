/**
 * script.js — CrisisWin Main Application Logic
 *
 * This file handles:
 *  1. Client-side SPA routing  (hash-based: /, /asia, /asia/india)
 *  2. Search bar with autocomplete
 *  3. Home page continent grid rendering
 *  4. Continent page country grid rendering
 *  5. Country page (details + helplines)
 *  6. About page
 *  7. Team page (GitHub API integration)
 *  8. Active nav link highlighting
 */


/* ============================================================
   WAIT FOR DOM TO BE READY
   ============================================================ */

  document.addEventListener('DOMContentLoaded', () => {

  /* ──────────────────────────────────────────────────────────
     1. MOBILE NAV TOGGLE
     ────────────────────────────────────────────────────────── */
  const navToggle = document.getElementById('nav-toggle');
  const siteNav   = document.getElementById('site-nav');

  navToggle?.addEventListener('click', () => {
    siteNav.classList.toggle('open');
  });

  // Close nav when a nav link is clicked (mobile)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => siteNav.classList.remove('open'));
  });

  // Intercept all internal link clicks — navigate without reloading
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    // Only intercept internal relative links (starting with /)
    if (href && href.startsWith('/') && !href.startsWith('//')) {
      e.preventDefault();
      history.pushState({}, '', href);
      router();
    }
  });






  /* ──────────────────────────────────────────────────────────
     2. ROUTER
     Hash-based routing: window.location.hash drives the page
     Supported routes:
       /                            → Home (continents)
       /about                       → About
       /team                        → Team
       /{continent}                 → Continent (country list)
       /{continent}/{country}       → Country (details + helplines)
     ────────────────────────────────────────────────────────── */



    function router() {
        const path = window.location.pathname || '/';
        const parts = path.split('/').filter(Boolean);

    // Hide all sections first
    hideAllPages();

    if (parts.length === 0 || path === '/') {
      renderHomePage();
    } else if (parts[0] === 'about') {
      renderAboutPage();
    } else if (parts[0] === 'team') {
      renderTeamPage();
    } else if (parts.length === 1) {
      // continent page
      renderContinentPage(parts[0]);
    } else if (parts.length === 2) {
      // country page
      renderCountryPage(parts[0], parts[1]);
    } else {
      renderHomePage();
    }

    // Update active nav link
    updateActiveNav(parts[0] || '');
    // Close mobile nav
    siteNav?.classList.remove('open');
  }

  // Listen to hash changes
  window.addEventListener('popstate', router);
  // Run on first load
  router();


  /* ──────────────────────────────────────────────────────────
     3. PAGE VISIBILITY HELPERS
     ────────────────────────────────────────────────────────── */

  function hideAllPages() {
    document.querySelectorAll('.page-section').forEach(el => {
      el.classList.add('page-hidden');
    });
    hideBreadcrumb();
  }

  function showPage(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('page-hidden');
  }

  function hideBreadcrumb() {
    const bc = document.getElementById('breadcrumb');
    if (bc) bc.style.display = 'none';
  }

  function showBreadcrumb(parts) {
    // parts: array of { label, href } objects; last one is current (no link)
    const bc = document.getElementById('breadcrumb');
    if (!bc) return;
    bc.style.display = 'flex';
    bc.innerHTML = '';

    parts.forEach((part, i) => {
      if (i < parts.length - 1) {
        // Clickable ancestor
        const a = document.createElement('a');
        a.href = part.href;
        a.textContent = part.label;
        bc.appendChild(a);
        const sep = document.createElement('span');
        sep.className = 'sep';
        sep.textContent = '>>';
        bc.appendChild(sep);
      } else {
        // Current page (not clickable)
        const span = document.createElement('span');
        span.className = 'current';
        span.textContent = part.label;
        bc.appendChild(span);
      }
    });
  }

  function updateActiveNav(firstPart) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
    });
    if (firstPart === '' || firstPart === undefined) {
      document.querySelector('.nav-link[data-page="home"]')?.classList.add('active');
    } else if (firstPart === 'about') {
      document.querySelector('.nav-link[data-page="about"]')?.classList.add('active');
    } else if (firstPart === 'team') {
      document.querySelector('.nav-link[data-page="team"]')?.classList.add('active');
    }
  }


  /* ──────────────────────────────────────────────────────────
     4. HOME PAGE — CONTINENT GRID
     ─────────────────────────────────────────────────────────── */

  function renderHomePage() {
    showPage('home-page');

    const grid = document.getElementById('continent-grid');
    if (!grid || grid.dataset.rendered) return;  // only render once

    // Continent config: key matches CONTINENTS data keys & image filenames
    // Images should be placed in the assets/ folder as .png (or .jpeg — update extension below if needed)
    const CONTINENT_LIST = [
      { key: 'africa',        label: 'Africa',        imgFile: 'africa.jpeg' },
      { key: 'asia',          label: 'Asia',           imgFile: 'asia.jpeg' },
      { key: 'europe',        label: 'Europe',         imgFile: 'europe.jpeg' },
      { key: 'northamerica', label: 'North America',  imgFile: 'northamerica.jpeg' },
      { key: 'southamerica', label: 'South America',  imgFile: 'southamerica.jpeg' },
      { key: 'oceania',     label: 'Oceania',      imgFile: 'oceania.jpeg' },
      { key: 'antarctica',    label: 'Antarctica',     imgFile: 'antarctica.jpeg' }
    ];

    grid.innerHTML = '';

    CONTINENT_LIST.forEach((c, i) => {
      const card = document.createElement('a');
      card.className = `continent-card fade-in fade-in-delay-${i % 3 + 1}`;
      card.href = `/${c.key}`;
      if (c.key === 'antarctica') card.classList.add('antarctica');

      // Create an <img> tag pointing to the JPEG in the assets folder
      embedImage(`assets/${c.imgFile}`, card, c.label);

      // Label
      const label = document.createElement('span');
      label.className = 'continent-label';
      label.textContent = c.label;
      card.appendChild(label);

      // Tooltip (shown on hover via CSS)
      const tooltip = document.createElement('span');
      tooltip.className = 'tooltip';
      tooltip.textContent = c.label;
      card.appendChild(tooltip);

      grid.appendChild(card);
    });

    grid.dataset.rendered = 'true';
  }

  /**
   * Creates an <img> element for a continent image (PNG/JPEG)
   * and prepends it inside the card before the label/tooltip.
   * src format: "assets/africa.png"
   */
  function embedImage(src, container, altLabel) {
    const wrapper = document.createElement('div');
    wrapper.className = 'continent-shape';

    const img = document.createElement('img');
    img.src = src;                  // e.g. "assets/africa.png"
    img.alt = altLabel;             // e.g. "Africa" — for accessibility
    img.style.cssText = 'width:100%; height:100%; object-fit:contain;';

    // Fallback: if image fails to load, show a globe emoji
    img.onerror = () => {
      wrapper.innerHTML = '';
      wrapper.style.cssText = 'font-size:3rem; display:flex; align-items:center; justify-content:center;';
      wrapper.textContent = '🌍';
    };

    wrapper.appendChild(img);

    // Prepend before label/tooltip
    container.insertBefore(wrapper, container.firstChild);
  }


  /* ──────────────────────────────────────────────────────────
     5. CONTINENT PAGE — COUNTRY LIST
     ────────────────────────────────────────────────────────── */

  function renderContinentPage(continentKey) {
    // Get continent data
    const continent = CONTINENTS[continentKey];
    if (!continent) { renderHomePage(); return; }

    showPage('continent-page');
    showBreadcrumb([
      { label: 'Home', href: '/' },
      { label: continent.name }
    ]);

    const grid = document.getElementById('country-grid');
    grid.innerHTML = '';

    // Sort countries A–Z
    const sorted = [...continent.countries].sort((a, b) => a.localeCompare(b));

    sorted.forEach((country, i) => {
      const slug = slugify(country);
      const card = document.createElement('a');
      card.className = `country-card fade-in fade-in-delay-${i % 3 + 1}`;
      card.href = `/${continentKey}/${slug}`;   
      card.textContent = country;
      grid.appendChild(card);
    });
  }


  /* ──────────────────────────────────────────────────────────
     6. COUNTRY PAGE — DETAILS + HELPLINES
     ────────────────────────────────────────────────────────── */

  function renderCountryPage(continentKey, countrySlug) {
    const continent = CONTINENTS[continentKey];
    if (!continent) { renderHomePage(); return; }

    // Find the country name from slug
    const countryName = continent.countries.find(c => slugify(c) === countrySlug);
    if (!countryName) { renderContinentPage(continentKey); return; }

    showPage('country-page');
    showBreadcrumb([
      { label: 'Home', href: '/' },
      { label: continent.name, href: `/${continentKey}` },
      { label: countryName }
    ]);

    // ── Country details ──────────────────────────────────────
    const infoEl  = document.getElementById('country-info');
    // Normalize lookup key: use the URL slug (hyphenated) converted to
    // underscore style because data objects use a mix of spaces and
    // underscores (e.g. "north_korea"). Fall back to lowercased name.
    const dataKey = countrySlug.replace(/-/g, '_');
    const details = COUNTRY_DETAILS[dataKey] || COUNTRY_DETAILS[countryName.toLowerCase()];

    if (details) {
      // Flag image via flagcdn.com (uses ISO2 code)
      const flagSrc = `https://flagcdn.com/48x36/${details.iso2.toLowerCase()}.png`;
      infoEl.innerHTML = `
        <div class="info-item">
          <span class="info-label">Capital</span>
          <span class="info-value">${details.capital}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Country Code</span>
          <span class="info-value">${details.countryCode}</span>
        </div>
        <div class="info-item" style="align-items:flex-start;">
          <span class="info-label">Flag</span>
          <img id="country-flag" src="${flagSrc}" alt="Flag of ${details.name}" onerror="this.style.display='none'"/>
        </div>
        <div class="info-item">
          <span class="info-label">Official Languages</span>
          <span class="info-value">${details.languages.join(', ')}</span>
        </div>
        <div class="info-item">
          <span class="info-label">ISD Code</span>
          <span class="info-value">${details.isd}</span>
        </div>
        <div class="info-item">
          <span class="info-label">Currency</span>
          <span class="info-value">${details.currency}</span>
        </div>
      `;
    } else {
      infoEl.innerHTML = `<div class="info-item" style="grid-column:1/-1;">
        <span class="info-value">${countryName}</span>
      </div>`;
    }

    // ── Helplines ────────────────────────────────────────────
    renderHelplines(countrySlug, countryName);
  }

  /**
   * Renders the helplines section for a country.
   * Handles two data formats:
   *   - State-wise: { "State": { "Service": "number" } }
   *   - National:   { "Service": "number" }
   */
  function renderHelplines(countrySlug, countryName) {
    const grid = document.getElementById('helplines-grid');
    // Prefer the slug-derived key (hyphens -> underscores), fall back to lowercased name
    const dataKey = countrySlug.replace(/-/g, '_');
    const data = HELPLINES[dataKey] || HELPLINES[countryName.toLowerCase()];

    if (!data) {
      grid.innerHTML = `
        <div class="no-data" style="grid-column:1/-1;">
          <strong>Helplines have not been added yet</strong>
          <a href="https://github.com/aumiidutta/crisiswin" target="_blank">Contribute data for ${countryName}! →</a>
        </div>`;
      return;
    }

    grid.innerHTML = '';

    // Detect format: if any value is an object, it's state-wise
    const isStateWise = Object.values(data).some(v => typeof v === 'object');

    if (isStateWise) {
      // State-wise format
      Object.entries(data).forEach(([stateName, helplines]) => {
        grid.appendChild(buildStateCard(stateName, helplines));
      });
    } else {
      // National (flat) format — single card titled with country name
      grid.appendChild(buildStateCard(countryName + ' (National)', data));
    }
  }

  /** Builds a single state/region helpline card element */
  function buildStateCard(title, helplines) {
    const card = document.createElement('div');
    card.className = 'state-card fade-in';

    const header = document.createElement('div');
    header.className = 'state-header';
    header.textContent = title;
    card.appendChild(header);

    const body = document.createElement('div');
    body.className = 'state-body';

    Object.entries(helplines).forEach(([name, number]) => {
      const row = document.createElement('div');
      row.className = 'helpline-row';

      const nameEl = document.createElement('span');
      nameEl.className = 'helpline-name';
      nameEl.textContent = name;

      // Make the number a clickable tel: link
      const numEl = document.createElement('a');
      numEl.className = 'helpline-number';
      numEl.href = `tel:${String(number).replace(/\s/g, '')}`;
      numEl.textContent = number;

      row.appendChild(nameEl);
      row.appendChild(numEl);
      body.appendChild(row);
    });

    card.appendChild(body);
    return card;
  }


  /* ──────────────────────────────────────────────────────────
     7. ABOUT PAGE
     ────────────────────────────────────────────────────────── */

  function renderAboutPage() {
    showPage('about-page');
    // Static content defined in HTML; nothing dynamic needed here
  }


  /* ──────────────────────────────────────────────────────────
     8. TEAM PAGE — GitHub API
     ────────────────────────────────────────────────────────── */

  // Track whether team page data has been fetched to avoid repeat API calls
  let teamFetched = false;

  async function renderTeamPage() {
    showPage('team-page');
    if (teamFetched) return;

    const { maintainer, contributors } = TEAM_CONFIG;

    // ── Maintainer card ──────────────────────────────────────
    const mCard = document.getElementById('maintainer-card');
    mCard.innerHTML = '<p class="loading-text">Loading maintainer info…</p>';

    try {
      const mData = await fetchGitHubUser(maintainer.username);
      mCard.innerHTML = `
        <img class="avatar-lg" src="${mData.avatar_url}" alt="${mData.login}" 
             onerror="this.src='https://github.com/identicons/${mData.login}.png'"/>
        <span class="maintainer-name">${mData.name || mData.login}</span>
        <span class="maintainer-username">@${mData.login}</span>
        ${maintainer.portfolioLink
          ? `<a class="portfolio-link" href="${maintainer.portfolioLink}" target="_blank" rel="noopener">🌐 Portfolio</a>`
          : ''}
        <a class="portfolio-link" href="https://github.com/${mData.login}" target="_blank" rel="noopener" style="background:var(--navy-mid);">GitHub ↗</a>
      `;
    } catch {
      mCard.innerHTML = `
        <span class="maintainer-name">${maintainer.username || 'Maintainer'}</span>
        <span class="maintainer-username">GitHub profile not loaded</span>
        ${maintainer.portfolioLink
          ? `<a class="portfolio-link" href="${maintainer.portfolioLink}" target="_blank">🌐 Portfolio</a>`
          : ''}
      `;
    }

    // ── Contributors grid ────────────────────────────────────
    const cGrid = document.getElementById('contributors-grid');

    if (!contributors || contributors.length === 0) {
      cGrid.innerHTML = `<p class="loading-text">No one has contributed yet. 
        <a href="https://github.com/aumiidutta/crisiswin" target="_blank">Be the first! →</a></p>`;
    } else {
      cGrid.innerHTML = '<p class="loading-text">Loading contributors…</p>';
      const cards = await Promise.all(contributors.map(buildContributorCard));
      cGrid.innerHTML = '';
      cards.forEach(card => cGrid.appendChild(card));
    }

    teamFetched = true;
  }

  /** Fetches GitHub user JSON */
  async function fetchGitHubUser(username) {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error('GitHub user not found');
    return res.json();
  }

  /** Builds a contributor card element */
  async function buildContributorCard(username) {
    const card = document.createElement('a');
    card.className = 'contributor-card';
    card.href = `https://github.com/${username}`;
    card.target = '_blank';
    card.rel = 'noopener';

    const img = document.createElement('img');
    img.className = 'avatar-sm';
    img.src = `https://github.com/${username}.png?size=70`;
    img.alt = username;
    img.onerror = () => { img.src = `https://github.com/identicons/${username}.png`; };

    const nameEl = document.createElement('span');
    nameEl.className = 'contributor-username';
    nameEl.textContent = username;

    card.appendChild(img);
    card.appendChild(nameEl);
    return card;
  }


  /* ──────────────────────────────────────────────────────────
     9. SEARCH BAR WITH AUTOCOMPLETE
     Searches across all continent + country + state names
     ────────────────────────────────────────────────────────── */

  // Build a flat search index once
  const SEARCH_INDEX = buildSearchIndex();

  function buildSearchIndex() {
    const index = [];

    // Add continents
    Object.entries(CONTINENTS).forEach(([key, cont]) => {
      index.push({
        label: cont.name,
        type: 'Continent',
        href: `/${key}`
      });

      // Add countries
      cont.countries.forEach(country => {
        index.push({
          label: country,
          type: 'Country',
          href: `/${key}/${slugify(country)}`
        });
      });
    });

    // Add states from helplines (those with state-wise data)
    Object.entries(HELPLINES).forEach(([countrySlug, data]) => {
      const isStateWise = Object.values(data).some(v => typeof v === 'object');
      if (isStateWise) {
        // Find which continent this country belongs to
        let continentKey = '';
        Object.entries(CONTINENTS).forEach(([ck, cont]) => {
          if (cont.countries.some(c => slugify(c) === countrySlug || c.toLowerCase() === countrySlug)) {
            continentKey = ck;
          }
        });

        Object.keys(data).forEach(stateName => {
          // State search → takes you to country page (scroll to state card is a future enhancement)
          index.push({
            label: stateName,
            type: 'State',
            href: continentKey ? `/${continentKey}/${countrySlug}` : `/`
          });
        });
      }
    });

    return index;
  }

  const searchInput    = document.getElementById('search-input');
  const searchDropdown = document.getElementById('search-dropdown');
  const searchBtn      = document.getElementById('search-btn');

  searchInput?.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query.length < 2) {
      closeDropdown();
      return;
    }

    const results = SEARCH_INDEX.filter(item =>
      item.label.toLowerCase().includes(query)
    ).slice(0, 10);   // show max 10 results

    renderDropdown(results);
  });

  searchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDropdown();
    if (e.key === 'Enter') {
      // Navigate to first result
      const first = searchDropdown.querySelector('.search-item');
      if (first) first.click();
    }
  });

  searchBtn?.addEventListener('click', () => {
    const query = searchInput?.value.trim().toLowerCase();
    if (!query || query.length < 2) return;
    const first = searchDropdown.querySelector('.search-item');
    if (first) first.click();
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!document.getElementById('search-wrapper')?.contains(e.target)) {
      closeDropdown();
    }
  });

  function renderDropdown(results) {
    searchDropdown.innerHTML = '';
    if (results.length === 0) {
      searchDropdown.innerHTML = '<div class="search-item" style="color:var(--text-muted);">No results found</div>';
    } else {
      results.forEach(item => {
        const el = document.createElement('div');
        el.className = 'search-item';
        el.innerHTML = `<span>${item.label}</span><span class="tag">${item.type}</span>`;
        el.addEventListener('click', () => {
          // Use History API to navigate without page reload
          history.pushState({}, '', item.href);
          router();
          searchInput.value = '';
          closeDropdown();
        });
        searchDropdown.appendChild(el);
      });
    }
    searchDropdown.classList.add('open');
  }

  function closeDropdown() {
    searchDropdown.classList.remove('open');
    searchDropdown.innerHTML = '';
  }


  /* ──────────────────────────────────────────────────────────
     10. UTILITY — SLUG CONVERSION
     "United States" → "united-states"
     ────────────────────────────────────────────────────────── */

  function slugify(str) {
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

});