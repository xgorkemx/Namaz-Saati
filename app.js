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

// ==========================================
// Tab Navigation
// ==========================================
function setupTabNavigation() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;

            // Remove active class from all tabs and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            btn.classList.add('active');
            const targetContent = document.getElementById(`${targetTab}Tab`);
            if (targetContent) {
                targetContent.classList.add('active');
            }

            // Save active tab
            localStorage.setItem('activeTab', targetTab);
        });
    });

    // Restore active tab
    const savedTab = localStorage.getItem('activeTab');
    if (savedTab) {
        const savedTabBtn = document.querySelector(`[data-tab="${savedTab}"]`);
        if (savedTabBtn) {
            savedTabBtn.click();
        }
    }
}

// ==========================================
// Audio Player
// ==========================================
function setupAudioPlayer() {
    const audio = document.getElementById('adhanAudio');
    const playBtn = document.getElementById('playAdhanBtn');
    const playIcon = playBtn?.querySelector('.play-icon');
    const pauseIcon = playBtn?.querySelector('.pause-icon');
    const progressFill = document.getElementById('progressFill');
    const progressBar = document.getElementById('progressBar');
    const currentTimeEl = document.getElementById('currentTime');
    const durationEl = document.getElementById('duration');
    const volumeSlider = document.getElementById('volumeSlider');

    if (!audio || !playBtn) return;

    // Play/Pause
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    audio.addEventListener('play', () => {
        if (playIcon && pauseIcon) {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        }
    });

    audio.addEventListener('pause', () => {
        if (playIcon && pauseIcon) {
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    });

    // Update progress
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        if (progressFill) {
            progressFill.style.width = `${progress}%`;
        }

        if (currentTimeEl) {
            currentTimeEl.textContent = formatTime(audio.currentTime);
        }
    });

    // Duration loaded
    audio.addEventListener('loadedmetadata', () => {
        if (durationEl) {
            durationEl.textContent = formatTime(audio.duration);
        }
    });

    // Seek
    progressBar?.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    });

    // Volume
    volumeSlider?.addEventListener('input', (e) => {
        audio.volume = e.target.value / 100;
    });

    // Set initial volume
    if (volumeSlider) {
        audio.volume = volumeSlider.value / 100;
    }
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${String(secs).padStart(2, '0')}`;
}

// ==========================================
// Hatim Tracker
// ==========================================
const HatimTracker = {
    completedJuz: [],

    init() {
        this.loadProgress();
        this.setupJuzGrid();
        this.setupResetButton();
        this.updateDisplay();
    },

    loadProgress() {
        const saved = localStorage.getItem('hatimProgress');
        if (saved) {
            this.completedJuz = JSON.parse(saved);
        }
    },

    saveProgress() {
        localStorage.setItem('hatimProgress', JSON.stringify(this.completedJuz));
    },

    setupJuzGrid() {
        const grid = document.getElementById('juzGrid');
        if (!grid) return;

        for (let i = 1; i <= 30; i++) {
            const juzItem = document.createElement('div');
            juzItem.className = 'juz-item';
            juzItem.textContent = i;
            juzItem.dataset.juz = i;

            if (this.completedJuz.includes(i)) {
                juzItem.classList.add('completed');
            }

            juzItem.addEventListener('click', () => this.toggleJuz(i));

            grid.appendChild(juzItem);
        }
    },

    toggleJuz(juzNumber) {
        const index = this.completedJuz.indexOf(juzNumber);
        const juzItem = document.querySelector(`[data-juz="${juzNumber}"]`);

        if (index > -1) {
            this.completedJuz.splice(index, 1);
            juzItem?.classList.remove('completed');
        } else {
            this.completedJuz.push(juzNumber);
            juzItem?.classList.add('completed');
        }

        this.saveProgress();
        this.updateDisplay();
    },

    setupResetButton() {
        const resetBtn = document.getElementById('resetHatimBtn');
        resetBtn?.addEventListener('click', () => {
            if (confirm('Hatim takibini sıfırlamak istediğinize emin misiniz?')) {
                this.completedJuz = [];
                this.saveProgress();
                this.updateDisplay();

                // Update all juz items
                document.querySelectorAll('.juz-item').forEach(item => {
                    item.classList.remove('completed');
                });
            }
        });
    },

    updateDisplay() {
        const completedCount = this.completedJuz.length;
        const progress = (completedCount / 30) * 100;

        const completedJuzEl = document.getElementById('completedJuz');
        const hatimProgressEl = document.getElementById('hatimProgress');
        const hatimProgressBar = document.getElementById('hatimProgressBar');

        if (completedJuzEl) completedJuzEl.textContent = completedCount;
        if (hatimProgressEl) hatimProgressEl.textContent = `${Math.round(progress)}%`;
        if (hatimProgressBar) hatimProgressBar.style.width = `${progress}%`;
    }
};

// ==========================================
// Quran Reader
// ==========================================
const QuranReader = {
    surahs: [
        { number: 1, name: 'Fatiha', arabicName: 'الفاتحة', verses: 7 },
        { number: 2, name: 'Bakara', arabicName: 'البقرة', verses: 286 },
        { number: 3, name: 'Âl-i İmran', arabicName: 'آل عمران', verses: 200 },
        { number: 4, name: 'Nisa', arabicName: 'النساء', verses: 176 },
        { number: 5, name: 'Maide', arabicName: 'المائدة', verses: 120 },
        { number: 6, name: 'En\'am', arabicName: 'الأنعام', verses: 165 },
        { number: 7, name: 'A\'raf', arabicName: 'الأعراف', verses: 206 },
        { number: 8, name: 'Enfal', arabicName: 'الأنفال', verses: 75 },
        { number: 9, name: 'Tevbe', arabicName: 'التوبة', verses: 129 },
        { number: 10, name: 'Yunus', arabicName: 'يونس', verses: 109 },
        { number: 11, name: 'Hud', arabicName: 'هود', verses: 123 },
        { number: 12, name: 'Yusuf', arabicName: 'يوسف', verses: 111 },
        { number: 13, name: 'Ra\'d', arabicName: 'الرعد', verses: 43 },
        { number: 14, name: 'İbrahim', arabicName: 'ابراهيم', verses: 52 },
        { number: 15, name: 'Hicr', arabicName: 'الحجر', verses: 99 },
        { number: 16, name: 'Nahl', arabicName: 'النحل', verses: 128 },
        { number: 17, name: 'İsra', arabicName: 'الإسراء', verses: 111 },
        { number: 18, name: 'Kehf', arabicName: 'الكهف', verses: 110 },
        { number: 19, name: 'Meryem', arabicName: 'مريم', verses: 98 },
        { number: 20, name: 'Taha', arabicName: 'طه', verses: 135 },
        { number: 21, name: 'Enbiya', arabicName: 'الأنبياء', verses: 112 },
        { number: 22, name: 'Hacc', arabicName: 'الحج', verses: 78 },
        { number: 23, name: 'Mü\'minun', arabicName: 'المؤمنون', verses: 118 },
        { number: 24, name: 'Nur', arabicName: 'النور', verses: 64 },
        { number: 25, name: 'Furkan', arabicName: 'الفرقان', verses: 77 },
        { number: 26, name: 'Şuara', arabicName: 'الشعراء', verses: 227 },
        { number: 27, name: 'Neml', arabicName: 'النمل', verses: 93 },
        { number: 28, name: 'Kasas', arabicName: 'القصص', verses: 88 },
        { number: 29, name: 'Ankebut', arabicName: 'العنكبوت', verses: 69 },
        { number: 30, name: 'Rum', arabicName: 'الروم', verses: 60 },
        { number: 31, name: 'Lokman', arabicName: 'لقمان', verses: 34 },
        { number: 32, name: 'Secde', arabicName: 'السجدة', verses: 30 },
        { number: 33, name: 'Ahzab', arabicName: 'الأحزاب', verses: 73 },
        { number: 34, name: 'Sebe', arabicName: 'سبإ', verses: 54 },
        { number: 35, name: 'Fatır', arabicName: 'فاطر', verses: 45 },
        { number: 36, name: 'Yasin', arabicName: 'يس', verses: 83 },
        { number: 37, name: 'Saffat', arabicName: 'الصافات', verses: 182 },
        { number: 38, name: 'Sad', arabicName: 'ص', verses: 88 },
        { number: 39, name: 'Zümer', arabicName: 'الزمر', verses: 75 },
        { number: 40, name: 'Mümin', arabicName: 'غافر', verses: 85 },
        { number: 41, name: 'Fussilet', arabicName: 'فصلت', verses: 54 },
        { number: 42, name: 'Şura', arabicName: 'الشورى', verses: 53 },
        { number: 43, name: 'Zuhruf', arabicName: 'الزخرف', verses: 89 },
        { number: 44, name: 'Duhan', arabicName: 'الدخان', verses: 59 },
        { number: 45, name: 'Casiye', arabicName: 'الجاثية', verses: 37 },
        { number: 46, name: 'Ahkaf', arabicName: 'الأحقاف', verses: 35 },
        { number: 47, name: 'Muhammed', arabicName: 'محمد', verses: 38 },
        { number: 48, name: 'Fetih', arabicName: 'الفتح', verses: 29 },
        { number: 49, name: 'Hucurat', arabicName: 'الحجرات', verses: 18 },
        { number: 50, name: 'Kaf', arabicName: 'ق', verses: 45 },
        { number: 51, name: 'Zariyat', arabicName: 'الذاريات', verses: 60 },
        { number: 52, name: 'Tur', arabicName: 'الطور', verses: 49 },
        { number: 53, name: 'Necm', arabicName: 'النجم', verses: 62 },
        { number: 54, name: 'Kamer', arabicName: 'القمر', verses: 55 },
        { number: 55, name: 'Rahman', arabicName: 'الرحمن', verses: 78 },
        { number: 56, name: 'Vakıa', arabicName: 'الواقعة', verses: 96 },
        { number: 57, name: 'Hadid', arabicName: 'الحديد', verses: 29 },
        { number: 58, name: 'Mücadele', arabicName: 'المجادلة', verses: 22 },
        { number: 59, name: 'Haşr', arabicName: 'الحشر', verses: 24 },
        { number: 60, name: 'Mümtehine', arabicName: 'الممتحنة', verses: 13 },
        { number: 61, name: 'Saff', arabicName: 'الصف', verses: 14 },
        { number: 62, name: 'Cuma', arabicName: 'الجمعة', verses: 11 },
        { number: 63, name: 'Münafikun', arabicName: 'المنافقون', verses: 11 },
        { number: 64, name: 'Teğabün', arabicName: 'التغابن', verses: 18 },
        { number: 65, name: 'Talak', arabicName: 'الطلاق', verses: 12 },
        { number: 66, name: 'Tahrim', arabicName: 'التحريم', verses: 12 },
        { number: 67, name: 'Mülk', arabicName: 'الملك', verses: 30 },
        { number: 68, name: 'Kalem', arabicName: 'القلم', verses: 52 },
        { number: 69, name: 'Hakka', arabicName: 'الحاقة', verses: 52 },
        { number: 70, name: 'Mearic', arabicName: 'المعارج', verses: 44 },
        { number: 71, name: 'Nuh', arabicName: 'نوح', verses: 28 },
        { number: 72, name: 'Cin', arabicName: 'الجن', verses: 28 },
        { number: 73, name: 'Müzzemmil', arabicName: 'المزمل', verses: 20 },
        { number: 74, name: 'Müddessir', arabicName: 'المدثر', verses: 56 },
        { number: 75, name: 'Kıyame', arabicName: 'القيامة', verses: 40 },
        { number: 76, name: 'İnsan', arabicName: 'الانسان', verses: 31 },
        { number: 77, name: 'Mürselat', arabicName: 'المرسلات', verses: 50 },
        { number: 78, name: 'Nebe', arabicName: 'النبإ', verses: 40 },
        { number: 79, name: 'Naziat', arabicName: 'النازعات', verses: 46 },
        { number: 80, name: 'Abese', arabicName: 'عبس', verses: 42 },
        { number: 81, name: 'Tekvir', arabicName: 'التكوير', verses: 29 },
        { number: 82, name: 'İnfitar', arabicName: 'الإنفطار', verses: 19 },
        { number: 83, name: 'Mutaffifin', arabicName: 'المطففين', verses: 36 },
        { number: 84, name: 'İnşikak', arabicName: 'الإنشقاق', verses: 25 },
        { number: 85, name: 'Buruc', arabicName: 'البروج', verses: 22 },
        { number: 86, name: 'Tarık', arabicName: 'الطارق', verses: 17 },
        { number: 87, name: 'A\'la', arabicName: 'الأعلى', verses: 19 },
        { number: 88, name: 'Ğaşiye', arabicName: 'الغاشية', verses: 26 },
        { number: 89, name: 'Fecr', arabicName: 'الفجر', verses: 30 },
        { number: 90, name: 'Beled', arabicName: 'البلد', verses: 20 },
        { number: 91, name: 'Şems', arabicName: 'الشمس', verses: 15 },
        { number: 92, name: 'Leyl', arabicName: 'الليل', verses: 21 },
        { number: 93, name: 'Duha', arabicName: 'الضحى', verses: 11 },
        { number: 94, name: 'İnşirah', arabicName: 'الشرح', verses: 8 },
        { number: 95, name: 'Tin', arabicName: 'التين', verses: 8 },
        { number: 96, name: 'Alak', arabicName: 'العلق', verses: 19 },
        { number: 97, name: 'Kadir', arabicName: 'القدر', verses: 5 },
        { number: 98, name: 'Beyyine', arabicName: 'البينة', verses: 8 },
        { number: 99, name: 'Zilzal', arabicName: 'الزلزلة', verses: 8 },
        { number: 100, name: 'Adiyat', arabicName: 'العاديات', verses: 11 },
        { number: 101, name: 'Karia', arabicName: 'القارعة', verses: 11 },
        { number: 102, name: 'Tekasür', arabicName: 'التكاثر', verses: 8 },
        { number: 103, name: 'Asr', arabicName: 'العصر', verses: 3 },
        { number: 104, name: 'Hümeze', arabicName: 'الهمزة', verses: 9 },
        { number: 105, name: 'Fil', arabicName: 'الفيل', verses: 5 },
        { number: 106, name: 'Kureyş', arabicName: 'قريش', verses: 4 },
        { number: 107, name: 'Maun', arabicName: 'الماعون', verses: 7 },
        { number: 108, name: 'Kevser', arabicName: 'الكوثر', verses: 3 },
        { number: 109, name: 'Kafirun', arabicName: 'الكافرون', verses: 6 },
        { number: 110, name: 'Nasr', arabicName: 'النصر', verses: 3 },
        { number: 111, name: 'Tebbet', arabicName: 'المسد', verses: 5 },
        { number: 112, name: 'İhlas', arabicName: 'الإخلاص', verses: 4 },
        { number: 113, name: 'Felak', arabicName: 'الفلق', verses: 5 },
        { number: 114, name: 'Nas', arabicName: 'الناس', verses: 6 }
    ],

    init() {
        this.populateSurahSelector();
        this.setupSurahSelector();
    },

    populateSurahSelector() {
        const select = document.getElementById('surahSelect');
        if (!select) return;

        this.surahs.forEach(surah => {
            const option = document.createElement('option');
            option.value = surah.number;
            option.textContent = `${surah.number}. ${surah.name} (${surah.arabicName})`;
            select.appendChild(option);
        });
    },

    setupSurahSelector() {
        const select = document.getElementById('surahSelect');
        select?.addEventListener('change', (e) => {
            const surahNumber = parseInt(e.target.value);
            if (surahNumber) {
                this.loadSurah(surahNumber);
            }
        });
    },

    async loadSurah(surahNumber) {
        const content = document.getElementById('quranContent');
        if (!content) return;

        content.innerHTML = '<div class="loading">Yükleniyor...</div>';

        try {
            // Using Quran.com API
            const response = await fetch(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${surahNumber}`);
            const translationResponse = await fetch(`https://api.quran.com/api/v4/quran/translations/161?chapter_number=${surahNumber}`);

            if (!response.ok || !translationResponse.ok) {
                throw new Error('Failed to fetch Quran data');
            }

            const data = await response.json();
            const translationData = await translationResponse.json();

            this.displayVerses(data.verses, translationData.translations);
        } catch (error) {
            console.error('Error loading surah:', error);
            content.innerHTML = '<div class="quran-placeholder"><p>Sure yüklenirken bir hata oluştu.</p></div>';
        }
    },

    displayVerses(verses, translations) {
        const content = document.getElementById('quranContent');
        if (!content) return;

        content.innerHTML = '';

        verses.forEach((verse, index) => {
            const translation = translations[index];
            const verseEl = document.createElement('div');
            verseEl.className = 'verse-item';

            verseEl.innerHTML = `
                <div class="verse-number">${verse.verse_key.split(':')[1]}</div>
                <div class="verse-arabic">${verse.text_uthmani}</div>
                <div class="verse-translation">${translation?.text || ''}</div>
            `;

            content.appendChild(verseEl);
        });
    }
};

// ==========================================
// Enhanced Tesbihat System
// ==========================================
const Tesbihat = {
    count: 0,
    target: 33,
    currentPrayer: 'subhanallah',
    history: [],

    prayers: {
        subhanallah: { arabic: 'سُبْحَانَ اللهِ', name: 'Subhanallah', meaning: 'Allah\'ı noksan sıfatlardan tenzih ederim' },
        alhamdulillah: { arabic: 'اَلْحَمْدُ لِلّهِ', name: 'Alhamdulillah', meaning: 'Hamd Allah\'a mahsustur' },
        allahuakbar: { arabic: 'اَللهُ أَكْبَرُ', name: 'Allahu Akbar', meaning: 'Allah en büyüktür' },
        lailaha: { arabic: 'لَا إِلَهَ إِلَّا اللهُ', name: 'Lâ ilâhe illallah', meaning: 'Allah\'tan başka ilah yoktur' },
        custom: { arabic: '', name: 'Serbest', meaning: 'Serbest zikir' }
    },

    init() {
        this.loadData();
        this.updateDisplay();
        this.setupButtons();
    },

    loadData() {
        const saved = localStorage.getItem('tesbihatData');
        if (saved) {
            const data = JSON.parse(saved);
            this.count = data.count || 0;
            this.target = data.target || 33;
            this.currentPrayer = data.currentPrayer || 'subhanallah';
            this.history = data.history || [];
        }
    },

    saveData() {
        const data = {
            count: this.count,
            target: this.target,
            currentPrayer: this.currentPrayer,
            history: this.history.slice(-50) // Keep last 50 entries
        };
        localStorage.setItem('tesbihatData', JSON.stringify(data));
    },

    setPrayer(prayer) {
        this.currentPrayer = prayer;
        this.count = 0;
        this.saveData();
        this.updateDisplay();

        // Update active button
        document.querySelectorAll('.tesbihat-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.prayer === prayer) {
                btn.classList.add('active');
            }
        });
    },

    setTarget(target) {
        this.target = target;
        this.saveData();
        this.updateDisplay();

        // Update active preset button
        document.querySelectorAll('.tesbihat-presets .preset-btn').forEach(btn => {
            btn.classList.remove('active');
            if (parseInt(btn.dataset.target) === target) {
                btn.classList.add('active');
            }
        });
    },

    updateDisplay() {
        const countEl = document.getElementById('tesbihatCount');
        const labelEl = document.getElementById('tesbihatLabel');
        const targetEl = document.getElementById('tesbihatTarget');

        if (countEl) countEl.textContent = this.count;
        if (labelEl) labelEl.textContent = this.prayers[this.currentPrayer].name;
        if (targetEl) targetEl.textContent = `Hedef: ${this.target}`;

        // Progress animation
        if (this.count === this.target) {
            this.celebrateGoal();
        }
    },

    increment() {
        this.count++;
        this.saveData();
        this.updateDisplay();

        // Haptic feedback
        if ('vibrate' in navigator) {
            navigator.vibrate(30);
        }

        // Check if goal reached
        if (this.count === this.target) {
            // Save to history
            this.history.push({
                prayer: this.currentPrayer,
                count: this.count,
                date: new Date().toISOString()
            });
            this.saveData();
        }
    },

    celebrateGoal() {
        if ('vibrate' in navigator) {
            navigator.vibrate([100, 50, 100, 50, 100]);
        }

        // Visual feedback
        const counterEl = document.getElementById('tesbihatCount');
        if (counterEl) {
            counterEl.style.transform = 'scale(1.2)';
            setTimeout(() => {
                counterEl.style.transform = 'scale(1)';
            }, 300);
        }
    },

    reset() {
        if (this.count === 0) return;

        if (confirm('Sayacı sıfırlamak istediğinize emin misiniz?')) {
            this.count = 0;
            this.saveData();
            this.updateDisplay();
        }
    },

    showHistory() {
        if (this.history.length === 0) {
            alert('Henüz tesbihat geçmişiniz yok.');
            return;
        }

        const today = new Date().toLocaleDateString('tr-TR');
        const todayHistory = this.history.filter(h => {
            const historyDate = new Date(h.date).toLocaleDateString('tr-TR');
            return historyDate === today;
        });

        const totalToday = todayHistory.reduce((sum, h) => sum + h.count, 0);
        const totalAll = this.history.reduce((sum, h) => sum + h.count, 0);

        alert(`📊 Tesbihat İstatistikleri\n\nBugün: ${totalToday} tesbihat\nToplam: ${totalAll} tesbihat\nKayıt: ${this.history.length} tamamlama`);
    },

    setupButtons() {
        // Prayer selection buttons
        document.querySelectorAll('.tesbihat-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const prayer = btn.dataset.prayer;
                this.setPrayer(prayer);
            });
        });

        // Main increment button
        const incrementBtn = document.getElementById('tesbihatIncrement');
        incrementBtn?.addEventListener('click', () => this.increment());

        // Control buttons
        const resetBtn = document.getElementById('tesbihatReset');
        const historyBtn = document.getElementById('tesbihatHistory');

        resetBtn?.addEventListener('click', () => this.reset());
        historyBtn?.addEventListener('click', () => this.showHistory());

        // Preset targets
        document.querySelectorAll('.tesbihat-presets .preset-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const target = parseInt(btn.dataset.target);
                this.setTarget(target);
            });
        });

        // Set initial active states
        this.setTarget(this.target);
        document.querySelector(`[data-prayer="${this.currentPrayer}"]`)?.classList.add('active');
    }
};

// ==========================================
// Esma-ül Hüsna (99 Names of Allah)
// ==========================================
const EsmaulHusna = {
    names: [
        { number: 1, arabic: 'الرَّحْمَنُ', transliteration: 'Ar-Rahman', meaning: 'Sınırsız merhamet sahibi' },
        { number: 2, arabic: 'الرَّحِيمُ', transliteration: 'Ar-Rahim', meaning: 'Çok merhametli' },
        { number: 3, arabic: 'الْمَلِكُ', transliteration: 'Al-Malik', meaning: 'Hükümdar, malik' },
        { number: 4, arabic: 'الْقُدُّوسُ', transliteration: 'Al-Quddus', meaning: 'Mukaddes, kusursuz' },
        { number: 5, arabic: 'السَّلاَمُ', transliteration: 'As-Salam', meaning: 'Esenlik veren' },
        { number: 6, arabic: 'الْمُؤْمِنُ', transliteration: 'Al-Mumin', meaning: 'Güven veren' },
        { number: 7, arabic: 'الْمُهَيْمِنُ', transliteration: 'Al-Muhaymin', meaning: 'Gözetleyici' },
        { number: 8, arabic: 'الْعَزِيزُ', transliteration: 'Al-Aziz', meaning: 'Mutlak güç sahibi' },
        { number: 9, arabic: 'الْجَبَّارُ', transliteration: 'Al-Jabbar', meaning: 'Kahhar, celal sahibi' },
        { number: 10, arabic: 'الْمُتَكَبِّرُ', transliteration: 'Al-Mutakabbir', meaning: 'Kibirli (yalnızca Allah için)' },
        { number: 11, arabic: 'الْخَالِقُ', transliteration: 'Al-Khaliq', meaning: 'Yaratan' },
        { number: 12, arabic: 'الْبَارِئُ', transliteration: 'Al-Bari', meaning: 'Kusursuz yaratan' },
        { number: 13, arabic: 'الْمُصَوِّرُ', transliteration: 'Al-Musawwir', meaning: 'Şekil veren' },
        { number: 14, arabic: 'الْغَفَّارُ', transliteration: 'Al-Ghaffar', meaning: 'Çok bağışlayan' },
        { number: 15, arabic: 'الْقَهَّارُ', transliteration: 'Al-Qahhar', meaning: 'Kahredici' },
        { number: 16, arabic: 'الْوَهَّابُ', transliteration: 'Al-Wahhab', meaning: 'Çok bahşeden' },
        { number: 17, arabic: 'الرَّزَّاقُ', transliteration: 'Ar-Razzaq', meaning: 'Rızık veren' },
        { number: 18, arabic: 'الْفَتَّاحُ', transliteration: 'Al-Fattah', meaning: 'Açan, fetheden' },
        { number: 19, arabic: 'اَلْعَلِيْمُ', transliteration: 'Al-Alim', meaning: 'Her şeyi bilen' },
        { number: 20, arabic: 'الْقَابِضُ', transliteration: 'Al-Qabid', meaning: 'Daraltan' },
        { number: 21, arabic: 'الْبَاسِطُ', transliteration: 'Al-Basit', meaning: 'Genişleten' },
        { number: 22, arabic: 'الْخَافِضُ', transliteration: 'Al-Khafid', meaning: 'Alçaltan' },
        { number: 23, arabic: 'الرَّافِعُ', transliteration: 'Ar-Rafi', meaning: 'Yükselten' },
        { number: 24, arabic: 'الْمُعِزُّ', transliteration: 'Al-Muizz', meaning: 'İzzet veren' },
        { number: 25, arabic: 'المُذِلُّ', transliteration: 'Al-Muzill', meaning: 'Zelil eden' },
        { number: 26, arabic: 'السَّمِيعُ', transliteration: 'As-Sami', meaning: 'Her şeyi işiten' },
        { number: 27, arabic: 'الْبَصِيرُ', transliteration: 'Al-Basir', meaning: 'Her şeyi gören' },
        { number: 28, arabic: 'الْحَكَمُ', transliteration: 'Al-Hakam', meaning: 'Hakim' },
        { number: 29, arabic: 'الْعَدْلُ', transliteration: 'Al-Adl', meaning: 'Adil' },
        { number: 30, arabic: 'اللَّطِيفُ', transliteration: 'Al-Latif', meaning: 'Latif, nazik' },
        { number: 31, arabic: 'الْخَبِيرُ', transliteration: 'Al-Khabir', meaning: 'Her şeyden haberdar' },
        { number: 32, arabic: 'الْحَلِيمُ', transliteration: 'Al-Halim', meaning: 'Halim, yumuşak' },
        { number: 33, arabic: 'الْعَظِيمُ', transliteration: 'Al-Azim', meaning: 'Azim, büyük' },
        { number: 34, arabic: 'الْغَفُورُ', transliteration: 'Al-Ghafur', meaning: 'Bağışlayan' },
        { number: 35, arabic: 'الشَّكُورُ', transliteration: 'Ash-Shakur', meaning: 'Şükreden' },
        { number: 36, arabic: 'الْعَلِيُّ', transliteration: 'Al-Aliyy', meaning: 'Yüce' },
        { number: 37, arabic: 'الْكَبِيرُ', transliteration: 'Al-Kabir', meaning: 'Büyük' },
        { number: 38, arabic: 'الْحَفِيظُ', transliteration: 'Al-Hafiz', meaning: 'Koruyan' },
        { number: 39, arabic: 'المُقيِت', transliteration: 'Al-Muqit', meaning: 'Rızık veren' },
        { number: 40, arabic: 'الْحسِيبُ', transliteration: 'Al-Hasib', meaning: 'Hesap gören' },
        { number: 41, arabic: 'الْجَلِيلُ', transliteration: 'Al-Jalil', meaning: 'Celil, şanlı' },
        { number: 42, arabic: 'الْكَرِيمُ', transliteration: 'Al-Karim', meaning: 'Cömert, kerem sahibi' },
        { number: 43, arabic: 'الرَّقِيبُ', transliteration: 'Ar-Raqib', meaning: 'Gözetleyen' },
        { number: 44, arabic: 'الْمُجِيبُ', transliteration: 'Al-Mujib', meaning: 'Duaları kabul eden' },
        { number: 45, arabic: 'الْوَاسِعُ', transliteration: 'Al-Wasi', meaning: 'Geniş, vasi' },
        { number: 46, arabic: 'الْحَكِيمُ', transliteration: 'Al-Hakim', meaning: 'Hakim, hikmet sahibi' },
        { number: 47, arabic: 'الْوَدُودُ', transliteration: 'Al-Wadud', meaning: 'Sever ve sevilen' },
        { number: 48, arabic: 'الْمَجِيدُ', transliteration: 'Al-Majid', meaning: 'Şanlı, yüce' },
        { number: 49, arabic: 'الْبَاعِثُ', transliteration: 'Al-Baith', meaning: 'Diriltici' },
        { number: 50, arabic: 'الشَّهِيدُ', transliteration: 'Ash-Shahid', meaning: 'Şahit' },
        { number: 51, arabic: 'الْحَقُّ', transliteration: 'Al-Haqq', meaning: 'Hak' },
        { number: 52, arabic: 'الْوَكِيلُ', transliteration: 'Al-Wakil', meaning: 'Vekil' },
        { number: 53, arabic: 'الْقَوِيُّ', transliteration: 'Al-Qawiyy', meaning: 'Kuvvetli' },
        { number: 54, arabic: 'الْمَتِينُ', transliteration: 'Al-Matin', meaning: 'Sağlam' },
        { number: 55, arabic: 'الْوَلِيُّ', transliteration: 'Al-Waliyy', meaning: 'Dost, veli' },
        { number: 56, arabic: 'الْحَمِيدُ', transliteration: 'Al-Hamid', meaning: 'Hamde layık' },
        { number: 57, arabic: 'الْمُحْصِي', transliteration: 'Al-Muhsi', meaning: 'Sayıp döken' },
        { number: 58, arabic: 'الْمُبْدِئُ', transliteration: 'Al-Mubdi', meaning: 'Başlatan' },
        { number: 59, arabic: 'الْمُعِيدُ', transliteration: 'Al-Muid', meaning: 'Yeniden diriltici' },
        { number: 60, arabic: 'الْمُحْيِي', transliteration: 'Al-Muhyi', meaning: 'Diriltici' },
        { number: 61, arabic: 'اَلْمُمِيتُ', transliteration: 'Al-Mumit', meaning: 'Öldürücü' },
        { number: 62, arabic: 'الْحَيُّ', transliteration: 'Al-Hayy', meaning: 'Diri, hayat sahibi' },
        { number: 63, arabic: 'الْقَيُّومُ', transliteration: 'Al-Qayyum', meaning: 'Kayyum, ayakta tutan' },
        { number: 64, arabic: 'الْوَاجِدُ', transliteration: 'Al-Wajid', meaning: 'Bulan' },
        { number: 65, arabic: 'الْمَاجِدُ', transliteration: 'Al-Majid', meaning: 'Şerefli' },
        { number: 66, arabic: 'الْواحِدُ', transliteration: 'Al-Wahid', meaning: 'Bir, tek' },
        { number: 67, arabic: 'اَلاَحَدُ', transliteration: 'Al-Ahad', meaning: 'Bir, eşsiz' },
        { number: 68, arabic: 'الصَّمَدُ', transliteration: 'As-Samad', meaning: 'Samed, hiçbir şeye muhtaç olmayan' },
        { number: 69, arabic: 'الْقَادِرُ', transliteration: 'Al-Qadir', meaning: 'Kadir, güç sahibi' },
        { number: 70, arabic: 'الْمُقْتَدِرُ', transliteration: 'Al-Muqtadir', meaning: 'Muktedir' },
        { number: 71, arabic: 'الْمُقَدِّمُ', transliteration: 'Al-Muqaddim', meaning: 'Öne alan' },
        { number: 72, arabic: 'الْمُؤَخِّرُ', transliteration: 'Al-Muakhkhir', meaning: 'Geri bırakan' },
        { number: 73, arabic: 'الأوَّلُ', transliteration: 'Al-Awwal', meaning: 'İlk, evvel' },
        { number: 74, arabic: 'الآخِرُ', transliteration: 'Al-Akhir', meaning: 'Son, ahir' },
        { number: 75, arabic: 'الظَّاهِرُ', transliteration: 'Az-Zahir', meaning: 'Zahir, açık' },
        { number: 76, arabic: 'الْبَاطِنُ', transliteration: 'Al-Batin', meaning: 'Batın, gizli' },
        { number: 77, arabic: 'الْوَالِي', transliteration: 'Al-Wali', meaning: 'Vali, yöneten' },
        { number: 78, arabic: 'الْمُتَعَالِي', transliteration: 'Al-Mutaali', meaning: 'Yüce' },
        { number: 79, arabic: 'الْبَرُّ', transliteration: 'Al-Barr', meaning: 'İyilik eden' },
        { number: 80, arabic: 'التَّوَابُ', transliteration: 'At-Tawwab', meaning: 'Tevbeyi kabul eden' },
        { number: 81, arabic: 'الْمُنْتَقِمُ', transliteration: 'Al-Muntaqim', meaning: 'İntikam alan' },
        { number: 82, arabic: 'العَفُوُّ', transliteration: 'Al-Afuww', meaning: 'Affedici' },
        { number: 83, arabic: 'الرَّؤُوفُ', transliteration: 'Ar-Rauf', meaning: 'Şefkatli' },
        { number: 84, arabic: 'مَالِكُ الْمُلْكِ', transliteration: 'Malik-ul-Mulk', meaning: 'Mülkün sahibi' },
        { number: 85, arabic: 'ذُوالْجَلاَلِ وَالإكْرَامِ', transliteration: 'Zul-Jalali wal-Ikram', meaning: 'Celal ve ikram sahibi' },
        { number: 86, arabic: 'الْمُقْسِطُ', transliteration: 'Al-Muqsit', meaning: 'Adaletli' },
        { number: 87, arabic: 'الْجَامِعُ', transliteration: 'Al-Jami', meaning: 'Toplayan' },
        { number: 88, arabic: 'الْغَنِيُّ', transliteration: 'Al-Ghani', meaning: 'Zengin, muhtaç olmayan' },
        { number: 89, arabic: 'الْمُغْنِي', transliteration: 'Al-Mughni', meaning: 'Zenginleştiren' },
        { number: 90, arabic: 'اَلْمَانِعُ', transliteration: 'Al-Mani', meaning: 'Engelleyen' },
        { number: 91, arabic: 'الضَّارَّ', transliteration: 'Ad-Darr', meaning: 'Zarar veren' },
        { number: 92, arabic: 'النَّافِعُ', transliteration: 'An-Nafi', meaning: 'Fayda veren' },
        { number: 93, arabic: 'النُّورُ', transliteration: 'An-Nur', meaning: 'Nur' },
        { number: 94, arabic: 'الْهَادِي', transliteration: 'Al-Hadi', meaning: 'Hidayet veren' },
        { number: 95, arabic: 'الْبَدِيعُ', transliteration: 'Al-Badi', meaning: 'Eşsiz yaratan' },
        { number: 96, arabic: 'اَلْبَاقِي', transliteration: 'Al-Baqi', meaning: 'Baki, sonsuz' },
        { number: 97, arabic: 'الْوَارِثُ', transliteration: 'Al-Warith', meaning: 'Varis' },
        { number: 98, arabic: 'الرَّشِيدُ', transliteration: 'Ar-Rashid', meaning: 'Doğru yola iletici' },
        { number: 99, arabic: 'الصَّبُورُ', transliteration: 'As-Sabur', meaning: 'Sabırlı' }
    ],

    init() {
        this.render();
    },

    render() {
        const grid = document.getElementById('esmaGrid');
        if (!grid) return;

        grid.innerHTML = '';

        this.names.forEach(name => {
            const item = document.createElement('div');
            item.className = 'esma-item';
            item.innerHTML = `
                <div class="esma-number">${name.number}</div>
                <div class="esma-arabic">${name.arabic}</div>
                <div class="esma-transliteration">${name.transliteration}</div>
                <div class="esma-meaning">${name.meaning}</div>
            `;
            grid.appendChild(item);
        });
    }
};

// ==========================================
// Daily Hadith
// ==========================================
const DailyHadith = {
    hadiths: [
        {
            text: '"Müslüman, Müslümanın kardeşidir. Ona zulmetmez ve onu düşmanına teslim etmez."',
            source: 'Buhari, Mezalim 3'
        },
        {
            text: '"İnsanların hayırlısı, insanlara faydalı olandır."',
            source: 'Camiu\'s-Sağir'
        },
        {
            text: '"Mü\'minin mü\'mine karşı durumu, birbirini tamamlayan bina gibidir."',
            source: 'Buhari, Salat 88'
        },
        {
            text: '"Komşusu açken tok yatan bizden değildir."',
            source: 'Hakim, Müstedrek'
        },
        {
            text: '"Gözler uyur ama kalp uyanıktır."',
            source: 'Buhari, Tefsir'
        },
        {
            text: '"En hayırlı amel, Allah için sevmek ve Allah için buğz etmektir."',
            source: 'Ebu Davud, Sünnet 2'
        },
        {
            text: '"Güzel ahlak, cennetin en ağır tartılan amalidir."',
            source: 'Tirmizi, Birr 62'
        },
        {
            text: '"Allah\'a itaat için mahlûka itaat yoktur."',
            source: 'Ahmed bin Hanbel, Müsned'
        },
        {
            text: '"İman, kalbin tasdiki ve organlarla ameldir."',
            source: 'Buhari'
        },
        {
            text: '"Sabır, musibet başa geldiği anda gösterilir."',
            source: 'Buhari, Cenaiz 32'
        },
        {
            text: '"Ameller niyetlere göredir."',
            source: 'Buhari, Bed\'ü\'l-Vahy 1'
        },
        {
            text: '"Tebessümün kardeşinin yüzüne, senin için sadakadır."',
            source: 'Tirmizi, Birr 36'
        },
        {
            text: '"Allah, güzel işlemeyi her şeye farz kıldı."',
            source: 'Müslim, Sayd 57'
        },
        {
            text: '"İlim, Çin\'de de olsa alınız."',
            source: 'Beyhaki'
        },
        {
            text: '"Babana ve annene iyilik et ki çocukların da sana iyilik etsin."',
            source: 'Taberani'
        },
        {
            text: '"Kişi, dostunun diniyle beraberdir. Öyleyse kiminle dost olacağına iyi baksın."',
            source: 'Ebu Davud, Edeb 16'
        },
        {
            text: '"Zenginlik, malın çokluğu ile değil, kalbin zenginliğiyledir."',
            source: 'Buhari, Rikak 15'
        },
        {
            text: '"İki nimet vardır ki çoğu insan onların değerini bilmez: Sıhhat ve boş vakit."',
            source: 'Buhari, Rikak 1'
        },
        {
            text: '"Kul bir günah işlediği zaman kalbinde bir siyah nokta oluşur."',
            source: 'Tirmizi, Tefsir 83'
        },
        {
            text: '"Allah, sizin şekillerinize ve mallarınıza bakmaz, ancak kalplerinize ve amellerinize bakar."',
            source: 'Müslim, Birr 34'
        },
        {
            text: '"Allah\'tan başkasından korkma, Allah\'tan başkasına güvenme."',
            source: 'Tirmizi, Kıyamet 60'
        },
        {
            text: '"Kendisi için istediğini kardeşi için de istemedikçe, kul iman etmiş olmaz."',
            source: 'Buhari, İman 7'
        },
        {
            text: '"Güçlü olan, güreşte rakibini yenen değil, öfkelendiği zaman nefsine hakim olandır."',
            source: 'Buhari, Edeb 76'
        },
        {
            text: '"En hayırlınız aile halkına karşı en hayırlı olanınızdır."',
            source: 'Tirmizi, Menakıb 63'
        },
        {
            text: '"Temizlik imandandır."',
            source: 'Müslim, Taharet 1'
        }
    ],

    init() {
        this.showHadith();
        this.setupRefreshButton();
    },

    showHadith() {
        const hadith = this.getRandomHadith();
        const textEl = document.getElementById('hadithText');
        const sourceEl = document.getElementById('hadithSource');

        if (textEl) textEl.textContent = hadith.text;
        if (sourceEl) sourceEl.textContent = `— ${hadith.source}`;
    },

    getRandomHadith() {
        const randomIndex = Math.floor(Math.random() * this.hadiths.length);
        return this.hadiths[randomIndex];
    },

    setupRefreshButton() {
        const refreshBtn = document.getElementById('refreshHadith');
        refreshBtn?.addEventListener('click', () => {
            this.showHadith();

            // Rotate animation
            refreshBtn.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                refreshBtn.style.transform = 'rotate(0deg)';
            }, 300);
        });
    }
};

// ==========================================
// Enhanced Notifications
// ==========================================
function setupEnhancedNotifications() {
    const notificationSound = document.getElementById('notificationSound');
    const notificationBefore = document.getElementById('notificationBefore');

    // Load settings
    if (notificationSound) {
        const soundEnabled = localStorage.getItem('notificationSound') === 'true';
        notificationSound.checked = soundEnabled;
        notificationSound.addEventListener('change', (e) => {
            localStorage.setItem('notificationSound', e.target.checked);
        });
    }

    if (notificationBefore) {
        const beforeMinutes = localStorage.getItem('notificationBefore') || '0';
        notificationBefore.value = beforeMinutes;
        notificationBefore.addEventListener('change', (e) => {
            localStorage.setItem('notificationBefore', e.target.value);
        });
    }
}

function playAdhanSound() {
    const soundEnabled = localStorage.getItem('notificationSound') === 'true';
    if (!soundEnabled) return;

    const audio = document.getElementById('adhanAudio');
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(err => console.log('Audio play failed:', err));
    }
}

// Enhanced notification check with sound
function checkEnhancedPrayerNotification() {
    if (!AppState.settings.notificationsEnabled) return;
    if (!('Notification' in window)) return;
    if (Notification.permission !== 'granted') return;

    const now = new Date();
    const beforeMinutes = parseInt(localStorage.getItem('notificationBefore') || '0');
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const prayerOrder = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];

    for (const prayer of prayerOrder) {
        const prayerTime = AppState.prayerTimes[prayer];
        if (prayerTime) {
            const [hours, minutes] = prayerTime.split(':').map(Number);
            const prayerMinutes = hours * 60 + minutes - beforeMinutes;

            if (prayerMinutes === currentMinutes) {
                const message = beforeMinutes > 0
                    ? `${prayerNamesMap[prayer]} vaktine ${beforeMinutes} dakika kaldı`
                    : `${prayerNamesMap[prayer]} vakti geldi`;

                new Notification('Ezan Vakti Pro', {
                    body: message,
                    icon: '/icon.png',
                    tag: 'prayer-time',
                    requireInteraction: true
                });

                if (beforeMinutes === 0) {
                    playAdhanSound();
                }
                break;
            }
        }
    }
}

// Initialize all new features
document.addEventListener('DOMContentLoaded', () => {
    setupTabNavigation();
    setupEnhancedNotifications();

    // Initialize features
    setTimeout(() => {
        QuranReader.init();
        EsmaulHusna.init();
        DailyHadith.init();
    }, 500);
});

// Override the old notification check with enhanced version
setInterval(checkEnhancedPrayerNotification, 60000);

// ==========================================
// More Tab Features
// ==========================================

// Ramazan Module
const RamazanModule = {
    fastingData: {},
    ramazanDays: [],

    init() {
        this.loadData();
        this.generateRemainingDays();
        this.setupFastingButtons();
        this.updateStats();
    },

    loadData() {
        const saved = localStorage.getItem('ramazanFasting');
        this.fastingData = saved ? JSON.parse(saved) : {};
    },

    saveData() {
        localStorage.setItem('ramazanFasting', JSON.stringify(this.fastingData));
    },

    generateRemainingDays() {
        const remainingDays = document.getElementById('remainingDays');
        if (!remainingDays) return;

        remainingDays.innerHTML = '';

        // Ramazan 2025 başlangıç tarihi (örnek: 1 Mart 2025)
        const startDate = new Date('2025-03-01');

        // Generate days 4-30
        for (let day = 4; day <= 30; day++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + (day - 1));

            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day';
            dayDiv.setAttribute('data-day', day);

            // Calculate prayer times (simplified - decreasing sahur, increasing iftar)
            const sahurHour = 5;
            const sahurMinute = Math.max(10, 30 - (day - 1));
            const iftarHour = 18;
            const iftarMinute = Math.min(45, 15 + (day - 1));

            dayDiv.innerHTML = `
                <div class="day-header">
                    <span class="day-number">${day}. Gün</span>
                    <span class="day-date">${currentDate.getDate()} ${this.getMonthName(currentDate.getMonth())} 2025</span>
                </div>
                <div class="day-times">
                    <div class="time-item">
                        <span class="time-label">Sahur:</span>
                        <span class="time-value">${String(sahurHour).padStart(2, '0')}:${String(sahurMinute).padStart(2, '0')}</span>
                    </div>
                    <div class="time-item">
                        <span class="time-label">İftar:</span>
                        <span class="time-value">${String(iftarHour).padStart(2, '0')}:${String(iftarMinute).padStart(2, '0')}</span>
                    </div>
                </div>
                <button class="fast-check-btn" data-day="${day}">✓ Oruç Tuttum</button>
            `;

            remainingDays.appendChild(dayDiv);
        }
    },

    getMonthName(month) {
        const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
                       'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
        return months[month];
    },

    setupFastingButtons() {
        const buttons = document.querySelectorAll('.fast-check-btn');
        buttons.forEach(btn => {
            const day = btn.getAttribute('data-day');

            // Restore saved state
            if (this.fastingData[day]) {
                btn.classList.add('checked');
                btn.closest('.calendar-day').classList.add('completed');
            }

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const dayNum = btn.getAttribute('data-day');
                const dayCard = btn.closest('.calendar-day');

                if (this.fastingData[dayNum]) {
                    delete this.fastingData[dayNum];
                    btn.classList.remove('checked');
                    dayCard.classList.remove('completed');
                } else {
                    this.fastingData[dayNum] = true;
                    btn.classList.add('checked');
                    dayCard.classList.add('completed');
                }

                this.saveData();
                this.updateStats();
            });
        });
    },

    updateStats() {
        const fastingDaysCount = Object.keys(this.fastingData).length;
        const fastingDaysEl = document.getElementById('fastingDays');
        if (fastingDaysEl) {
            fastingDaysEl.textContent = fastingDaysCount;
        }
    }
};

// Prayer Tracker Module
const PrayerTracker = {
    prayerData: {},
    currentViewDate: new Date(),
    prayerNames: ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'],
    prayerNamesTurkish: {
        'fajr': 'Sabah',
        'dhuhr': 'Öğle',
        'asr': 'İkindi',
        'maghrib': 'Akşam',
        'isha': 'Yatsı'
    },
    monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
                 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],

    init() {
        this.loadData();
        this.updateCurrentDate();
        this.loadTodaysPrayerTimes();
        this.setupPrayerCheckboxes();
        this.renderMonthlyCalendar();
        this.setupMonthNavigation();
        this.updateAllStats();
    },

    loadData() {
        const saved = localStorage.getItem('prayerTrackerData');
        this.prayerData = saved ? JSON.parse(saved) : {};
    },

    saveData() {
        localStorage.setItem('prayerTrackerData', JSON.stringify(this.prayerData));
    },

    getDateKey(date) {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    },

    updateCurrentDate() {
        const currentDateEl = document.getElementById('currentDate');
        if (currentDateEl) {
            const today = new Date();
            const dayName = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'][today.getDay()];
            currentDateEl.textContent = `${dayName}, ${today.getDate()} ${this.monthNames[today.getMonth()]} ${today.getFullYear()}`;
        }
    },

    loadTodaysPrayerTimes() {
        // Get prayer times from the main app if available
        const prayerTimes = window.prayerTimes || {};

        const timeMapping = {
            'fajr': 'Fajr',
            'dhuhr': 'Dhuhr',
            'asr': 'Asr',
            'maghrib': 'Maghrib',
            'isha': 'Isha'
        };

        this.prayerNames.forEach(prayer => {
            const timeEl = document.getElementById(`${prayer}Time`);
            if (timeEl) {
                const prayerKey = timeMapping[prayer];
                if (prayerTimes[prayerKey]) {
                    timeEl.textContent = prayerTimes[prayerKey];
                } else {
                    timeEl.textContent = '--:--';
                }
            }
        });
    },

    setupPrayerCheckboxes() {
        const today = new Date();
        const todayKey = this.getDateKey(today);

        // Initialize today's data if not exists
        if (!this.prayerData[todayKey]) {
            this.prayerData[todayKey] = {};
        }

        // Setup each prayer checkbox
        const checkBtns = document.querySelectorAll('.prayer-check-btn');
        checkBtns.forEach(btn => {
            const prayer = btn.getAttribute('data-prayer');
            const card = btn.closest('.prayer-check-card');

            // Restore saved state
            if (this.prayerData[todayKey][prayer]) {
                btn.classList.add('checked');
                card.classList.add('checked');
            }

            // Add click handler
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.togglePrayer(prayer, btn, card);
            });

            // Also allow clicking the card
            card.addEventListener('click', () => {
                this.togglePrayer(prayer, btn, card);
            });
        });
    },

    togglePrayer(prayer, btn, card) {
        const today = new Date();
        const todayKey = this.getDateKey(today);

        if (!this.prayerData[todayKey]) {
            this.prayerData[todayKey] = {};
        }

        if (this.prayerData[todayKey][prayer]) {
            delete this.prayerData[todayKey][prayer];
            btn.classList.remove('checked');
            card.classList.remove('checked');
        } else {
            this.prayerData[todayKey][prayer] = true;
            btn.classList.add('checked');
            card.classList.add('checked');
        }

        this.saveData();
        this.updateAllStats();
        this.renderMonthlyCalendar();
    },

    updateAllStats() {
        this.updateTodayStats();
        this.updateWeekStats();
        this.updateMonthStats();
        this.updateStreak();
    },

    updateTodayStats() {
        const today = new Date();
        const todayKey = this.getDateKey(today);
        const todayData = this.prayerData[todayKey] || {};
        const completedCount = Object.keys(todayData).length;

        const todayPrayersEl = document.getElementById('todayPrayers');
        if (todayPrayersEl) {
            todayPrayersEl.textContent = `${completedCount}/5`;
        }
    },

    updateWeekStats() {
        const today = new Date();
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - today.getDay()); // Start of week (Sunday)

        let totalPrayers = 0;
        let completedPrayers = 0;

        for (let i = 0; i <= today.getDay(); i++) {
            const date = new Date(weekStart);
            date.setDate(weekStart.getDate() + i);
            const dateKey = this.getDateKey(date);
            const dayData = this.prayerData[dateKey] || {};

            totalPrayers += 5;
            completedPrayers += Object.keys(dayData).length;
        }

        const percentage = totalPrayers > 0 ? Math.round((completedPrayers / totalPrayers) * 100) : 0;
        const weekPrayersEl = document.getElementById('weekPrayers');
        if (weekPrayersEl) {
            weekPrayersEl.textContent = `${percentage}%`;
        }
    },

    updateMonthStats() {
        const today = new Date();
        const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);

        let totalPrayers = 0;
        let completedPrayers = 0;

        for (let d = new Date(monthStart); d <= today; d.setDate(d.getDate() + 1)) {
            const dateKey = this.getDateKey(d);
            const dayData = this.prayerData[dateKey] || {};

            totalPrayers += 5;
            completedPrayers += Object.keys(dayData).length;
        }

        const percentage = totalPrayers > 0 ? Math.round((completedPrayers / totalPrayers) * 100) : 0;
        const monthPrayersEl = document.getElementById('monthPrayers');
        if (monthPrayersEl) {
            monthPrayersEl.textContent = `${percentage}%`;
        }
    },

    updateStreak() {
        let streak = 0;
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Check backwards from today
        for (let d = new Date(today); ; d.setDate(d.getDate() - 1)) {
            const dateKey = this.getDateKey(d);
            const dayData = this.prayerData[dateKey] || {};

            // Consider a day complete if all 5 prayers are done
            if (Object.keys(dayData).length === 5) {
                streak++;
            } else {
                break;
            }

            // Don't go back more than a year
            if (streak > 365) break;
        }

        const streakEl = document.getElementById('prayerStreak');
        if (streakEl) {
            streakEl.textContent = streak;
        }
    },

    renderMonthlyCalendar() {
        const calendarGrid = document.getElementById('monthlyCalendar');
        if (!calendarGrid) return;

        const year = this.currentViewDate.getFullYear();
        const month = this.currentViewDate.getMonth();

        // Update month display
        const currentMonthEl = document.getElementById('currentMonth');
        if (currentMonthEl) {
            currentMonthEl.textContent = `${this.monthNames[month]} ${year}`;
        }

        // Clear calendar
        calendarGrid.innerHTML = '';

        // Get first day of month and total days
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startDay = firstDay.getDay(); // 0 = Sunday

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Add empty cells for days before month starts
        for (let i = 0; i < startDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'calendar-day-cell empty';
            calendarGrid.appendChild(emptyCell);
        }

        // Add cells for each day of month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dateKey = this.getDateKey(date);
            const dayData = this.prayerData[dateKey] || {};
            const completedCount = Object.keys(dayData).length;

            const cell = document.createElement('div');
            cell.className = 'calendar-day-cell';

            // Check if it's today
            const cellDate = new Date(date);
            cellDate.setHours(0, 0, 0, 0);
            if (cellDate.getTime() === today.getTime()) {
                cell.classList.add('today');
            }

            // Check if it's in the future
            if (cellDate > today) {
                cell.classList.add('future');
            } else {
                // Add completion class based on count
                if (completedCount === 5) {
                    cell.classList.add('perfect');
                } else if (completedCount >= 3) {
                    cell.classList.add('good');
                } else if (completedCount > 0) {
                    cell.classList.add('partial');
                } else {
                    cell.classList.add('none');
                }
            }

            cell.innerHTML = `
                <span class="day-number">${day}</span>
                <span class="day-count">${cellDate <= today ? completedCount + '/5' : ''}</span>
            `;

            calendarGrid.appendChild(cell);
        }
    },

    setupMonthNavigation() {
        const prevBtn = document.getElementById('prevMonth');
        const nextBtn = document.getElementById('nextMonth');

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                this.currentViewDate.setMonth(this.currentViewDate.getMonth() - 1);
                this.renderMonthlyCalendar();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.currentViewDate.setMonth(this.currentViewDate.getMonth() + 1);
                this.renderMonthlyCalendar();
            });
        }
    }
};

// Zikir Module
const ZikirModule = {
    zikirData: {},
    currentCounter: 0,
    currentType: 'custom',
    currentTarget: 100,

    zikirTypes: {
        'custom': { name: 'Serbest Zikir', target: null },
        'subhanallah': { name: 'Subhanallah', target: 33 },
        'alhamdulillah': { name: 'Alhamdulillah', target: 33 },
        'allahuakbar': { name: 'Allahu Akbar', target: 34 },
        'lailahaillallah': { name: 'La ilahe illallah', target: 100 },
        'salawat': { name: 'Salavatı Şerife', target: 100 },
        'astagfirullah': { name: 'Estağfirullah', target: 100 }
    },

    init() {
        this.loadData();
        this.setupTasbihSelector();
        this.setupTasbihButton();
        this.setupAccordion();
        this.updateAllStats();
        this.updateZikirCardCounts();
    },

    loadData() {
        const saved = localStorage.getItem('zikirData');
        if (saved) {
            this.zikirData = JSON.parse(saved);
        } else {
            // Initialize default structure
            this.zikirData = {
                daily: {},
                totals: {
                    subhanallah: 0,
                    alhamdulillah: 0,
                    allahuakbar: 0,
                    lailahaillallah: 0,
                    salawat: 0,
                    astagfirullah: 0,
                    custom: 0
                }
            };
        }
    },

    saveData() {
        localStorage.setItem('zikirData', JSON.stringify(this.zikirData));
    },

    getDateKey(date) {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    },

    setupTasbihSelector() {
        const buttons = document.querySelectorAll('.tasbih-type-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                buttons.forEach(b => b.classList.remove('active'));
                // Add to clicked
                btn.classList.add('active');

                const type = btn.getAttribute('data-type');
                const target = parseInt(btn.getAttribute('data-target'));

                this.currentType = type;
                this.currentTarget = target;
                this.currentCounter = 0;

                this.updateCounterDisplay();
            });
        });
    },

    setupTasbihButton() {
        const button = document.getElementById('tasbihButton');
        const resetBtn = document.getElementById('resetBtn');

        if (button) {
            button.addEventListener('click', () => {
                this.incrementCounter();
                this.animateButton(button);

                // Vibrate if supported
                if ('vibrate' in navigator) {
                    navigator.vibrate(50);
                }
            });
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.resetCounter();
            });
        }
    },

    incrementCounter() {
        this.currentCounter++;
        this.updateCounterDisplay();

        // Record the zikir
        this.recordZikir(this.currentType);

        // Check if target reached
        if (this.currentTarget && this.currentCounter >= this.currentTarget) {
            this.onTargetReached();
        }
    },

    resetCounter() {
        this.currentCounter = 0;
        this.updateCounterDisplay();
    },

    updateCounterDisplay() {
        const display = document.getElementById('counterDisplay');
        const targetEl = document.getElementById('counterTarget');
        const textEl = document.getElementById('currentZikirText');

        if (display) {
            display.textContent = this.currentCounter;
        }

        if (targetEl) {
            if (this.currentTarget && this.currentType !== 'custom') {
                targetEl.textContent = `/ ${this.currentTarget}`;
            } else {
                targetEl.textContent = '';
            }
        }

        if (textEl) {
            textEl.textContent = this.zikirTypes[this.currentType].name;
        }
    },

    animateButton(button) {
        const ripple = button.querySelector('.tasbih-ripple');
        if (ripple) {
            ripple.style.animation = 'none';
            setTimeout(() => {
                ripple.style.animation = 'ripple 0.6s ease-out';
            }, 10);
        }
    },

    onTargetReached() {
        // Show a subtle notification
        const textEl = document.getElementById('currentZikirText');
        if (textEl) {
            const originalText = textEl.textContent;
            textEl.textContent = '🎉 Tamamlandı!';
            textEl.style.color = '#10b981';

            setTimeout(() => {
                textEl.textContent = originalText;
                textEl.style.color = '#06b6d4';
            }, 2000);
        }

        // Auto reset after target
        setTimeout(() => {
            this.resetCounter();
        }, 2000);
    },

    recordZikir(type) {
        const today = new Date();
        const dateKey = this.getDateKey(today);

        // Initialize today if not exists
        if (!this.zikirData.daily[dateKey]) {
            this.zikirData.daily[dateKey] = {
                subhanallah: 0,
                alhamdulillah: 0,
                allahuakbar: 0,
                lailahaillallah: 0,
                salawat: 0,
                astagfirullah: 0,
                custom: 0
            };
        }

        // Increment counters
        this.zikirData.daily[dateKey][type]++;
        this.zikirData.totals[type]++;

        this.saveData();
        this.updateAllStats();
        this.updateZikirCardCounts();
    },

    updateAllStats() {
        this.updateTodayStats();
        this.updateWeekStats();
        this.updateMonthStats();
        this.updateTotalStats();
    },

    updateTodayStats() {
        const today = new Date();
        const dateKey = this.getDateKey(today);
        const todayData = this.zikirData.daily[dateKey] || {};

        let total = 0;
        for (let key in todayData) {
            total += todayData[key];
        }

        const el = document.getElementById('todayZikir');
        if (el) el.textContent = total;
    },

    updateWeekStats() {
        const today = new Date();
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - today.getDay());

        let total = 0;
        for (let i = 0; i <= today.getDay(); i++) {
            const date = new Date(weekStart);
            date.setDate(weekStart.getDate() + i);
            const dateKey = this.getDateKey(date);
            const dayData = this.zikirData.daily[dateKey] || {};

            for (let key in dayData) {
                total += dayData[key];
            }
        }

        const el = document.getElementById('weekZikir');
        if (el) el.textContent = total;
    },

    updateMonthStats() {
        const today = new Date();
        const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);

        let total = 0;
        for (let d = new Date(monthStart); d <= today; d.setDate(d.getDate() + 1)) {
            const dateKey = this.getDateKey(d);
            const dayData = this.zikirData.daily[dateKey] || {};

            for (let key in dayData) {
                total += dayData[key];
            }
        }

        const el = document.getElementById('monthZikir');
        if (el) el.textContent = total;
    },

    updateTotalStats() {
        let grandTotal = 0;
        for (let key in this.zikirData.totals) {
            grandTotal += this.zikirData.totals[key];
        }

        const el = document.getElementById('totalZikir');
        if (el) el.textContent = grandTotal;
    },

    updateZikirCardCounts() {
        const zikirTypes = ['subhanallah', 'alhamdulillah', 'allahuakbar', 'lailahaillallah', 'salawat', 'astagfirullah'];

        zikirTypes.forEach(type => {
            const el = document.getElementById(`${type}Count`);
            if (el) {
                const count = this.zikirData.totals[type] || 0;
                el.textContent = `${count} defa`;
            }
        });
    },

    setupAccordion() {
        const headers = document.querySelectorAll('.dua-accordion-header');

        headers.forEach(header => {
            header.addEventListener('click', () => {
                const target = header.getAttribute('data-target');
                const content = document.getElementById(target);
                const isActive = header.classList.contains('active');

                // Close all
                document.querySelectorAll('.dua-accordion-header').forEach(h => {
                    h.classList.remove('active');
                });
                document.querySelectorAll('.dua-accordion-content').forEach(c => {
                    c.classList.remove('active');
                });

                // Open clicked if it wasn't active
                if (!isActive) {
                    header.classList.add('active');
                    if (content) {
                        content.classList.add('active');
                    }
                }
            });
        });
    }
};

// Feature Cards Click Handlers
function setupMoreFeatures() {
    // Ramazan Module
    const ramazanCard = document.getElementById('ramazanCard');
    const ramazanModule = document.getElementById('ramazanModule');
    const moreMenu = document.querySelector('.more-menu');
    const ramazanBackBtn = document.getElementById('ramazanBackBtn');

    if (ramazanCard) {
        ramazanCard.addEventListener('click', () => {
            moreMenu.style.display = 'none';
            ramazanModule.style.display = 'block';
            RamazanModule.init();
        });
    }

    if (ramazanBackBtn) {
        ramazanBackBtn.addEventListener('click', () => {
            ramazanModule.style.display = 'none';
            moreMenu.style.display = 'block';
        });
    }

    // Kandil Module
    const kandilCard = document.getElementById('kandilCard');
    const kandilModule = document.getElementById('kandilModule');
    const kandilBackBtn = document.getElementById('kandilBackBtn');

    if (kandilCard) {
        kandilCard.addEventListener('click', () => {
            moreMenu.style.display = 'none';
            kandilModule.style.display = 'block';
        });
    }

    if (kandilBackBtn) {
        kandilBackBtn.addEventListener('click', () => {
            kandilModule.style.display = 'none';
            moreMenu.style.display = 'block';
        });
    }

    // Cuma Reminder
    const cumaCard = document.getElementById('cumaCard');
    const cumaModule = document.getElementById('cumaModule');
    const cumaBackBtn = document.getElementById('cumaBackBtn');

    if (cumaCard) {
        cumaCard.addEventListener('click', () => {
            moreMenu.style.display = 'none';
            cumaModule.style.display = 'block';
        });
    }

    if (cumaBackBtn) {
        cumaBackBtn.addEventListener('click', () => {
            cumaModule.style.display = 'none';
            moreMenu.style.display = 'block';
        });
    }

    // Prayer Tracker
    const prayerTrackerCard = document.getElementById('prayerTrackerCard');
    const prayerTrackerModule = document.getElementById('prayerTrackerModule');
    const prayerTrackerBackBtn = document.getElementById('prayerTrackerBackBtn');

    if (prayerTrackerCard) {
        prayerTrackerCard.addEventListener('click', () => {
            moreMenu.style.display = 'none';
            prayerTrackerModule.style.display = 'block';
            PrayerTracker.init();
        });
    }

    if (prayerTrackerBackBtn) {
        prayerTrackerBackBtn.addEventListener('click', () => {
            prayerTrackerModule.style.display = 'none';
            moreMenu.style.display = 'block';
        });
    }

    // Zikir Stats
    const zikirStatsCard = document.getElementById('zikirStatsCard');
    const zikirModule = document.getElementById('zikirModule');
    const zikirBackBtn = document.getElementById('zikirBackBtn');

    if (zikirStatsCard) {
        zikirStatsCard.addEventListener('click', () => {
            moreMenu.style.display = 'none';
            zikirModule.style.display = 'block';
            ZikirModule.init();
        });
    }

    if (zikirBackBtn) {
        zikirBackBtn.addEventListener('click', () => {
            zikirModule.style.display = 'none';
            moreMenu.style.display = 'block';
        });
    }
}

// Abdest Module
const AbdestModule = {
    init() {
        const abdestCard = document.getElementById('abdestCard');
        const abdestModule = document.getElementById('abdestModule');
        const abdestBackBtn = document.getElementById('abdestBackBtn');
        const moreMenu = document.querySelector('.more-menu');

        if (abdestCard) {
            abdestCard.addEventListener('click', () => {
                if (moreMenu) moreMenu.style.display = 'none';
                if (abdestModule) abdestModule.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        if (abdestBackBtn) {
            abdestBackBtn.addEventListener('click', () => {
                if (abdestModule) abdestModule.style.display = 'none';
                if (moreMenu) moreMenu.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
};

// Namaz Module
const NamazModule = {
    init() {
        const namazCard = document.getElementById('namazCard');
        const namazModule = document.getElementById('namazModule');
        const namazBackBtn = document.getElementById('namazBackBtn');
        const moreMenu = document.querySelector('.more-menu');

        // Navigate to Namaz module
        if (namazCard) {
            namazCard.addEventListener('click', () => {
                if (moreMenu) moreMenu.style.display = 'none';
                if (namazModule) namazModule.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Navigate back to More menu
        if (namazBackBtn) {
            namazBackBtn.addEventListener('click', () => {
                if (namazModule) namazModule.style.display = 'none';
                if (moreMenu) moreMenu.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Rakaat selector functionality
        const rakaatBtns = document.querySelectorAll('.rakaat-btn');
        rakaatBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                rakaatBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
            });
        });
    }
};

// Zekat Module
const ZekatModule = {
    init() {
        const zekatCard = document.getElementById('zekatCard');
        const zekatModule = document.getElementById('zekatModule');
        const zekatBackBtn = document.getElementById('zekatBackBtn');
        const moreMenu = document.querySelector('.more-menu');
        const calculateBtn = document.getElementById('calculateZekat');

        // Navigate to Zekat module
        if (zekatCard) {
            zekatCard.addEventListener('click', () => {
                if (moreMenu) moreMenu.style.display = 'none';
                if (zekatModule) zekatModule.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Navigate back to More menu
        if (zekatBackBtn) {
            zekatBackBtn.addEventListener('click', () => {
                if (zekatModule) zekatModule.style.display = 'none';
                if (moreMenu) moreMenu.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Calculate Zekat
        if (calculateBtn) {
            calculateBtn.addEventListener('click', () => {
                this.calculateZekat();
            });
        }
    },

    calculateZekat() {
        // Get input values
        const goldGram = parseFloat(document.getElementById('goldGram')?.value || 0);
        const goldPrice = parseFloat(document.getElementById('goldPrice')?.value || 0);
        const silverGram = parseFloat(document.getElementById('silverGram')?.value || 0);
        const silverPrice = parseFloat(document.getElementById('silverPrice')?.value || 0);
        const cash = parseFloat(document.getElementById('cash')?.value || 0);
        const bank = parseFloat(document.getElementById('bank')?.value || 0);
        const investments = parseFloat(document.getElementById('investments')?.value || 0);
        const otherAssets = parseFloat(document.getElementById('otherAssets')?.value || 0);
        const tradeGoods = parseFloat(document.getElementById('tradeGoods')?.value || 0);
        const receivables = parseFloat(document.getElementById('receivables')?.value || 0);
        const debts = parseFloat(document.getElementById('debts')?.value || 0);

        // Calculate values
        const goldValue = goldGram * goldPrice;
        const silverValue = silverGram * silverPrice;
        const totalWealth = goldValue + silverValue + cash + bank + investments + otherAssets + tradeGoods + receivables;
        const netWealth = totalWealth - debts;
        const zekatAmount = netWealth * 0.025; // 2.5%

        // Nisab check (approximately 30,000 TL based on silver)
        const nisabThreshold = 30000;
        const isAboveNisab = netWealth >= nisabThreshold;

        // Display results
        const resultsCard = document.getElementById('zekatResults');
        const totalWealthEl = document.getElementById('totalWealth');
        const totalDebtsEl = document.getElementById('totalDebts');
        const netWealthEl = document.getElementById('netWealth');
        const zekatAmountEl = document.getElementById('zekatAmount');
        const nisabCheck = document.getElementById('nisabCheck');

        if (resultsCard) resultsCard.style.display = 'block';
        if (totalWealthEl) totalWealthEl.textContent = this.formatCurrency(totalWealth);
        if (totalDebtsEl) totalDebtsEl.textContent = this.formatCurrency(debts);
        if (netWealthEl) netWealthEl.textContent = this.formatCurrency(netWealth);
        if (zekatAmountEl) zekatAmountEl.textContent = this.formatCurrency(zekatAmount);

        if (nisabCheck) {
            if (isAboveNisab) {
                nisabCheck.className = 'nisab-check sufficient';
                nisabCheck.textContent = '✅ Malınız nisap miktarının üzerinde. Zekat vermekle yükümlüsünüz.';
            } else {
                nisabCheck.className = 'nisab-check insufficient';
                nisabCheck.textContent = '❌ Malınız nisap miktarının altında. Zekat vermek zorunlu değil, ancak sadaka verebilirsiniz.';
            }
        }

        // Scroll to results
        if (resultsCard) {
            resultsCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    },

    formatCurrency(amount) {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    }
};

// Initialize More Features
document.addEventListener('DOMContentLoaded', () => {
    setupMoreFeatures();
    AbdestModule.init();
    NamazModule.init();
    ZekatModule.init();
});
