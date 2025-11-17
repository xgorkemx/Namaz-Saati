// ==========================================
// Turkish Cities Database
// ==========================================
const turkishCities = [
    { name: 'İstanbul', lat: 41.0082, lon: 28.9784 },
    { name: 'Ankara', lat: 39.9334, lon: 32.8597 },
    { name: 'İzmir', lat: 38.4192, lon: 27.1287 },
    { name: 'Bursa', lat: 40.1826, lon: 29.0665 },
    { name: 'Antalya', lat: 36.8969, lon: 30.7133 },
    { name: 'Adana', lat: 37.0000, lon: 35.3213 },
    { name: 'Gaziantep', lat: 37.0662, lon: 37.3833 },
    { name: 'Konya', lat: 37.8667, lon: 32.4833 },
    { name: 'Şanlıurfa', lat: 37.1591, lon: 38.7969 },
    { name: 'Kocaeli', lat: 40.8533, lon: 29.8815 },
    { name: 'Mersin', lat: 36.8121, lon: 34.6415 },
    { name: 'Diyarbakır', lat: 37.9144, lon: 40.2306 },
    { name: 'Hatay', lat: 36.4018, lon: 36.3498 },
    { name: 'Manisa', lat: 38.6191, lon: 27.4289 },
    { name: 'Kayseri', lat: 38.7205, lon: 35.4826 },
    { name: 'Samsun', lat: 41.2867, lon: 36.33 },
    { name: 'Balıkesir', lat: 39.6484, lon: 27.8826 },
    { name: 'Kahramanmaraş', lat: 37.5858, lon: 36.9371 },
    { name: 'Van', lat: 38.4891, lon: 43.4089 },
    { name: 'Aydın', lat: 37.8444, lon: 27.8458 },
    { name: 'Denizli', lat: 37.7765, lon: 29.0864 },
    { name: 'Sakarya', lat: 40.7569, lon: 30.3783 },
    { name: 'Tekirdağ', lat: 40.9833, lon: 27.5167 },
    { name: 'Muğla', lat: 37.2153, lon: 28.3636 },
    { name: 'Eskişehir', lat: 39.7767, lon: 30.5206 },
    { name: 'Mardin', lat: 37.3212, lon: 40.7245 },
    { name: 'Malatya', lat: 38.3552, lon: 38.3095 },
    { name: 'Erzurum', lat: 39.9043, lon: 41.2678 },
    { name: 'Trabzon', lat: 41.0015, lon: 39.7178 },
    { name: 'Elazığ', lat: 38.6810, lon: 39.2264 },
    { name: 'Sivas', lat: 39.7477, lon: 37.0179 },
    { name: 'Batman', lat: 37.8812, lon: 41.1351 },
    { name: 'Şırnak', lat: 37.5163, lon: 42.4611 },
    { name: 'Çorum', lat: 40.5506, lon: 34.9556 },
    { name: 'Adıyaman', lat: 37.7636, lon: 38.2765 },
    { name: 'Osmaniye', lat: 37.0742, lon: 36.2478 },
    { name: 'Kırıkkale', lat: 39.8468, lon: 33.5153 },
    { name: 'Kırklareli', lat: 41.7333, lon: 27.2167 },
    { name: 'Edirne', lat: 41.6771, lon: 26.5557 },
    { name: 'Zonguldak', lat: 41.4564, lon: 31.7987 },
    { name: 'Çanakkale', lat: 40.1553, lon: 26.4142 },
    { name: 'Uşak', lat: 38.6823, lon: 29.4082 },
    { name: 'Kütahya', lat: 39.4167, lon: 29.9833 },
    { name: 'Afyonkarahisar', lat: 38.7507, lon: 30.5567 },
    { name: 'Isparta', lat: 37.7648, lon: 30.5566 },
    { name: 'Burdur', lat: 37.7269, lon: 30.2903 },
    { name: 'Karaman', lat: 37.1759, lon: 33.2287 },
    { name: 'Aksaray', lat: 38.3687, lon: 34.0370 },
    { name: 'Niğde', lat: 37.9667, lon: 34.6833 },
    { name: 'Nevşehir', lat: 38.6939, lon: 34.6857 },
    { name: 'Kırşehir', lat: 39.1425, lon: 34.1709 },
    { name: 'Yozgat', lat: 39.8181, lon: 34.8147 },
    { name: 'Amasya', lat: 40.6499, lon: 35.8353 },
    { name: 'Tokat', lat: 40.3167, lon: 36.5500 },
    { name: 'Ordu', lat: 40.9839, lon: 37.8764 },
    { name: 'Giresun', lat: 40.9128, lon: 38.3895 },
    { name: 'Gümüşhane', lat: 40.4386, lon: 39.5086 },
    { name: 'Rize', lat: 41.0201, lon: 40.5234 },
    { name: 'Artvin', lat: 41.1828, lon: 41.8183 },
    { name: 'Ağrı', lat: 39.7191, lon: 43.0503 },
    { name: 'Kars', lat: 40.6013, lon: 43.0975 },
    { name: 'Iğdır', lat: 39.8880, lon: 44.0048 },
    { name: 'Ardahan', lat: 41.1105, lon: 42.7022 },
    { name: 'Muş', lat: 38.7432, lon: 41.5064 },
    { name: 'Bitlis', lat: 38.4001, lon: 42.1089 },
    { name: 'Hakkari', lat: 37.5744, lon: 43.7408 },
    { name: 'Siirt', lat: 37.9333, lon: 41.9500 },
    { name: 'Tunceli', lat: 39.1079, lon: 39.5401 },
    { name: 'Bingöl', lat: 38.8854, lon: 40.4983 },
    { name: 'Erzincan', lat: 39.7500, lon: 39.5000 },
    { name: 'Bayburt', lat: 40.2552, lon: 40.2249 },
    { name: 'Sinop', lat: 42.0231, lon: 35.1531 },
    { name: 'Çankırı', lat: 40.6013, lon: 33.6134 },
    { name: 'Kastamonu', lat: 41.3887, lon: 33.7827 },
    { name: 'Bartın', lat: 41.5811, lon: 32.4610 },
    { name: 'Karabük', lat: 41.2061, lon: 32.6204 },
    { name: 'Bolu', lat: 40.5760, lon: 31.5788 },
    { name: 'Düzce', lat: 40.8438, lon: 31.1565 },
    { name: 'Yalova', lat: 40.6500, lon: 29.2667 },
    { name: 'Bilecik', lat: 40.0567, lon: 30.0665 }
];

// ==========================================
// Application State
// ==========================================
const AppState = {
    currentLocation: null,
    prayerTimes: null,
    countdownInterval: null,
    settings: {
        calculationMethod: 13, // Turkey Diyanet
        theme: 'auto',
        notificationsEnabled: false
    }
};

// ==========================================
// Prayer Names Mapping
// ==========================================
const prayerNamesMap = {
    'Imsak': 'İmsak',
    'Fajr': 'Sabah',
    'Sunrise': 'Güneş',
    'Dhuhr': 'Öğle',
    'Asr': 'İkindi',
    'Sunset': 'Günbatımı',
    'Maghrib': 'Akşam',
    'Isha': 'Yatsı',
    'Midnight': 'Gece Yarısı'
};

// ==========================================
// Initialize Application
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupEventListeners();
    loadSettings();
    applyTheme();
});

function initializeApp() {
    const savedLocation = localStorage.getItem('selectedLocation');

    if (savedLocation) {
        AppState.currentLocation = JSON.parse(savedLocation);
        updateLocationDisplay();
        fetchPrayerTimes();
    } else {
        // Try to get user's location automatically
        tryGeolocation();
    }
}

// ==========================================
// Event Listeners
// ==========================================
function setupEventListeners() {
    // Location modal
    const changeLocationBtn = document.getElementById('changeLocationBtn');
    const locationModal = document.getElementById('locationModal');
    const closeModal = document.getElementById('closeModal');
    const useLocationBtn = document.getElementById('useLocationBtn');
    const citySearch = document.getElementById('citySearch');

    changeLocationBtn?.addEventListener('click', () => openModal(locationModal));
    closeModal?.addEventListener('click', () => closeModalHandler(locationModal));
    useLocationBtn?.addEventListener('click', tryGeolocation);
    citySearch?.addEventListener('input', filterCities);

    // Settings modal
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsModal = document.getElementById('settingsModal');
    const closeSettingsModal = document.getElementById('closeSettingsModal');
    const calculationMethod = document.getElementById('calculationMethod');
    const themeSelect = document.getElementById('themeSelect');
    const notificationsEnabled = document.getElementById('notificationsEnabled');

    settingsBtn?.addEventListener('click', () => openModal(settingsModal));
    closeSettingsModal?.addEventListener('click', () => closeModalHandler(settingsModal));
    calculationMethod?.addEventListener('change', updateCalculationMethod);
    themeSelect?.addEventListener('change', updateTheme);
    notificationsEnabled?.addEventListener('change', updateNotifications);

    // Close modals on background click
    locationModal?.addEventListener('click', (e) => {
        if (e.target === locationModal) closeModalHandler(locationModal);
    });
    settingsModal?.addEventListener('click', (e) => {
        if (e.target === settingsModal) closeModalHandler(settingsModal);
    });

    // Load cities on modal open
    populateCitiesList();
}

// ==========================================
// Modal Functions
// ==========================================
function openModal(modal) {
    modal?.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModalHandler(modal) {
    modal?.classList.remove('active');
    document.body.style.overflow = '';
}

// ==========================================
// Location Functions
// ==========================================
function tryGeolocation() {
    if ('geolocation' in navigator) {
        const locationModal = document.getElementById('locationModal');
        const useLocationBtn = document.getElementById('useLocationBtn');

        useLocationBtn.textContent = 'Konum alınıyor...';
        useLocationBtn.disabled = true;

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const location = {
                    name: 'Mevcut Konumum',
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                };

                setLocation(location);
                closeModalHandler(locationModal);

                useLocationBtn.textContent = 'Konumumu Kullan';
                useLocationBtn.disabled = false;
            },
            (error) => {
                console.error('Geolocation error:', error);
                alert('Konum alınamadı. Lütfen manuel olarak şehir seçin.');
                useLocationBtn.textContent = 'Konumumu Kullan';
                useLocationBtn.disabled = false;
            }
        );
    } else {
        alert('Tarayıcınız konum servislerini desteklemiyor.');
    }
}

function setLocation(location) {
    AppState.currentLocation = location;
    localStorage.setItem('selectedLocation', JSON.stringify(location));
    updateLocationDisplay();
    fetchPrayerTimes();
}

function updateLocationDisplay() {
    const locationName = document.getElementById('locationName');
    if (locationName && AppState.currentLocation) {
        locationName.textContent = AppState.currentLocation.name;
    }
}

function populateCitiesList() {
    const citiesList = document.getElementById('citiesList');
    if (!citiesList) return;

    citiesList.innerHTML = '';

    turkishCities.forEach(city => {
        const cityItem = document.createElement('div');
        cityItem.className = 'city-item';
        cityItem.textContent = city.name;

        if (AppState.currentLocation && AppState.currentLocation.name === city.name) {
            cityItem.classList.add('selected');
        }

        cityItem.addEventListener('click', () => {
            setLocation(city);
            const locationModal = document.getElementById('locationModal');
            closeModalHandler(locationModal);
        });

        citiesList.appendChild(cityItem);
    });
}

function filterCities() {
    const searchTerm = document.getElementById('citySearch')?.value.toLowerCase() || '';
    const cityItems = document.querySelectorAll('.city-item');

    cityItems.forEach(item => {
        const cityName = item.textContent.toLowerCase();
        if (cityName.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// ==========================================
// Prayer Times Functions
// ==========================================
async function fetchPrayerTimes() {
    if (!AppState.currentLocation) return;

    try {
        const { lat, lon } = AppState.currentLocation;
        const method = AppState.settings.calculationMethod;
        const date = new Date();
        const timestamp = Math.floor(date.getTime() / 1000);

        const response = await fetch(
            `https://api.aladhan.com/v1/timings/${timestamp}?latitude=${lat}&longitude=${lon}&method=${method}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch prayer times');
        }

        const data = await response.json();

        if (data.code === 200 && data.data) {
            AppState.prayerTimes = data.data.timings;
            updatePrayerTimesDisplay();
            updateDateDisplay(data.data.date);
            startCountdown();
            calculateQiblaDirection();
        }
    } catch (error) {
        console.error('Error fetching prayer times:', error);
        alert('Namaz vakitleri alınamadı. Lütfen daha sonra tekrar deneyin.');
    }
}

function updatePrayerTimesDisplay() {
    if (!AppState.prayerTimes) return;

    // Update individual prayer times
    document.getElementById('imsakTime').textContent = AppState.prayerTimes.Imsak || '--:--';
    document.getElementById('sunriseTime').textContent = AppState.prayerTimes.Sunrise || '--:--';
    document.getElementById('dhuhrTime').textContent = AppState.prayerTimes.Dhuhr || '--:--';
    document.getElementById('asrTime').textContent = AppState.prayerTimes.Asr || '--:--';
    document.getElementById('maghribTime').textContent = AppState.prayerTimes.Maghrib || '--:--';
    document.getElementById('ishaTime').textContent = AppState.prayerTimes.Isha || '--:--';

    // Highlight current/next prayer
    highlightCurrentPrayer();
}

function updateDateDisplay(dateInfo) {
    if (!dateInfo) return;

    const hijriDate = document.getElementById('hijriDate');
    const gregorianDate = document.getElementById('gregorianDate');

    if (hijriDate && dateInfo.hijri) {
        const hijri = dateInfo.hijri;
        hijriDate.textContent = `${hijri.day} ${hijri.month.ar} ${hijri.year}`;
    }

    if (gregorianDate && dateInfo.readable) {
        gregorianDate.textContent = dateInfo.readable;
    }
}

function highlightCurrentPrayer() {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const prayers = [
        { name: 'Imsak', element: document.querySelector('[data-prayer="Imsak"]') },
        { name: 'Fajr', element: document.querySelector('[data-prayer="Fajr"]') },
        { name: 'Dhuhr', element: document.querySelector('[data-prayer="Dhuhr"]') },
        { name: 'Asr', element: document.querySelector('[data-prayer="Asr"]') },
        { name: 'Maghrib', element: document.querySelector('[data-prayer="Maghrib"]') },
        { name: 'Isha', element: document.querySelector('[data-prayer="Isha"]') }
    ];

    // Remove all active classes
    prayers.forEach(prayer => prayer.element?.classList.remove('active'));

    // Find and highlight current prayer
    for (let i = 0; i < prayers.length; i++) {
        const prayerTime = AppState.prayerTimes[prayers[i].name];
        if (prayerTime) {
            const [hours, minutes] = prayerTime.split(':').map(Number);
            const prayerMinutes = hours * 60 + minutes;

            const nextPrayerTime = i < prayers.length - 1
                ? AppState.prayerTimes[prayers[i + 1].name]
                : null;

            if (nextPrayerTime) {
                const [nextHours, nextMinutes] = nextPrayerTime.split(':').map(Number);
                const nextPrayerMinutes = nextHours * 60 + nextMinutes;

                if (currentTime >= prayerMinutes && currentTime < nextPrayerMinutes) {
                    prayers[i].element?.classList.add('active');
                    break;
                }
            }
        }
    }
}

// ==========================================
// Countdown Timer
// ==========================================
function startCountdown() {
    if (AppState.countdownInterval) {
        clearInterval(AppState.countdownInterval);
    }

    updateCountdown();
    AppState.countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    if (!AppState.prayerTimes) return;

    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const prayerOrder = ['Imsak', 'Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    let nextPrayer = null;
    let nextPrayerTime = null;

    for (const prayer of prayerOrder) {
        const time = AppState.prayerTimes[prayer];
        if (time) {
            const [hours, minutes] = time.split(':').map(Number);
            const prayerMinutes = hours * 60 + minutes;

            if (prayerMinutes > currentMinutes) {
                nextPrayer = prayer;
                nextPrayerTime = time;
                break;
            }
        }
    }

    // If no prayer found today, use tomorrow's Imsak
    if (!nextPrayer) {
        nextPrayer = 'Imsak';
        nextPrayerTime = AppState.prayerTimes.Imsak;
    }

    // Update next prayer name and time
    document.getElementById('nextPrayerName').textContent = prayerNamesMap[nextPrayer] || nextPrayer;
    document.getElementById('nextPrayerTime').textContent = nextPrayerTime || '--:--';

    // Calculate countdown
    if (nextPrayerTime) {
        const [hours, minutes] = nextPrayerTime.split(':').map(Number);
        let targetTime = new Date();
        targetTime.setHours(hours, minutes, 0, 0);

        // If target time is in the past, add one day
        if (targetTime <= now) {
            targetTime.setDate(targetTime.getDate() + 1);
        }

        const diff = targetTime - now;
        const hoursLeft = Math.floor(diff / (1000 * 60 * 60));
        const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('hoursValue').textContent = String(hoursLeft).padStart(2, '0');
        document.getElementById('minutesValue').textContent = String(minutesLeft).padStart(2, '0');
        document.getElementById('secondsValue').textContent = String(secondsLeft).padStart(2, '0');
    }
}

// ==========================================
// Qibla Direction
// ==========================================
function calculateQiblaDirection() {
    if (!AppState.currentLocation) return;

    const { lat, lon } = AppState.currentLocation;

    // Kaaba coordinates
    const kaabaLat = 21.4225;
    const kaabaLon = 39.8262;

    // Calculate qibla direction
    const phiK = kaabaLat * Math.PI / 180.0;
    const lambdaK = kaabaLon * Math.PI / 180.0;
    const phi = lat * Math.PI / 180.0;
    const lambda = lon * Math.PI / 180.0;

    const qibla = 180.0 / Math.PI * Math.atan2(
        Math.sin(lambdaK - lambda),
        Math.cos(phi) * Math.tan(phiK) - Math.sin(phi) * Math.cos(lambdaK - lambda)
    );

    const qiblaDegree = ((qibla + 360) % 360).toFixed(1);

    document.getElementById('qiblaDegree').textContent = `${qiblaDegree}° Kuzeydoğu`;

    const qiblaArrow = document.getElementById('qiblaArrow');
    if (qiblaArrow) {
        qiblaArrow.style.transform = `rotate(${qiblaDegree}deg)`;
    }
}

// ==========================================
// Settings Functions
// ==========================================
function loadSettings() {
    const savedSettings = localStorage.getItem('settings');

    if (savedSettings) {
        AppState.settings = { ...AppState.settings, ...JSON.parse(savedSettings) };
    }

    // Update UI
    const calculationMethod = document.getElementById('calculationMethod');
    const themeSelect = document.getElementById('themeSelect');
    const notificationsEnabled = document.getElementById('notificationsEnabled');

    if (calculationMethod) calculationMethod.value = AppState.settings.calculationMethod;
    if (themeSelect) themeSelect.value = AppState.settings.theme;
    if (notificationsEnabled) notificationsEnabled.checked = AppState.settings.notificationsEnabled;
}

function saveSettings() {
    localStorage.setItem('settings', JSON.stringify(AppState.settings));
}

function updateCalculationMethod(e) {
    AppState.settings.calculationMethod = parseInt(e.target.value);
    saveSettings();
    fetchPrayerTimes();
}

function updateTheme(e) {
    AppState.settings.theme = e.target.value;
    saveSettings();
    applyTheme();
}

function updateNotifications(e) {
    AppState.settings.notificationsEnabled = e.target.checked;
    saveSettings();

    if (e.target.checked && 'Notification' in window) {
        Notification.requestPermission();
    }
}

function applyTheme() {
    const theme = AppState.settings.theme;

    if (theme === 'auto') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
        document.documentElement.setAttribute('data-theme', theme);
    }
}

// Listen for system theme changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (AppState.settings.theme === 'auto') {
            applyTheme();
        }
    });
}

// ==========================================
// Notification Functions
// ==========================================
function checkPrayerNotification() {
    if (!AppState.settings.notificationsEnabled) return;
    if (!('Notification' in window)) return;
    if (Notification.permission !== 'granted') return;

    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const prayerOrder = ['Imsak', 'Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

    for (const prayer of prayerOrder) {
        const prayerTime = AppState.prayerTimes[prayer];
        if (prayerTime === currentTime) {
            new Notification('Ezan Vakti', {
                body: `${prayerNamesMap[prayer]} vakti geldi`,
                icon: '/icon.png'
            });
            break;
        }
    }
}

// Check for prayer notifications every minute
setInterval(checkPrayerNotification, 60000);
