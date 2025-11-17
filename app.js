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
// Zikirmatik
// ==========================================
const Zikirmatik = {
    count: 0,
    target: null,

    init() {
        this.loadCount();
        this.updateDisplay();
        this.setupButtons();
    },

    loadCount() {
        const saved = localStorage.getItem('zikirCount');
        if (saved) {
            this.count = parseInt(saved);
        }
    },

    saveCount() {
        localStorage.setItem('zikirCount', this.count.toString());
    },

    updateDisplay() {
        const display = document.getElementById('zikirCount');
        if (display) {
            display.textContent = this.count;

            // Vibrate on milestones
            if (this.target && this.count === this.target) {
                if ('vibrate' in navigator) {
                    navigator.vibrate([200, 100, 200]);
                }
                this.clearTarget();
            }
        }
    },

    increment() {
        this.count++;
        this.saveCount();
        this.updateDisplay();

        // Haptic feedback
        if ('vibrate' in navigator) {
            navigator.vibrate(50);
        }
    },

    reset() {
        if (confirm('Zikir sayacını sıfırlamak istediğinize emin misiniz?')) {
            this.count = 0;
            this.clearTarget();
            this.saveCount();
            this.updateDisplay();
        }
    },

    setTarget(target) {
        this.target = target;
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.classList.remove('active');
            if (parseInt(btn.dataset.target) === target) {
                btn.classList.add('active');
            }
        });
    },

    clearTarget() {
        this.target = null;
        document.querySelectorAll('.preset-btn').forEach(btn => {
            btn.classList.remove('active');
        });
    },

    setupButtons() {
        const incrementBtn = document.getElementById('zikirIncrement');
        const resetBtn = document.getElementById('zikirReset');
        const presetBtns = document.querySelectorAll('.preset-btn');

        incrementBtn?.addEventListener('click', () => this.increment());
        resetBtn?.addEventListener('click', () => this.reset());

        presetBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = parseInt(btn.dataset.target);
                this.setTarget(target);
            });
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
    setupAudioPlayer();
    setupEnhancedNotifications();

    // Initialize on Quran tab
    setTimeout(() => {
        HatimTracker.init();
        QuranReader.init();
        Zikirmatik.init();
    }, 500);
});

// Override the old notification check with enhanced version
setInterval(checkEnhancedPrayerNotification, 60000);
