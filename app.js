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

    // Initialize Advanced Qibla Compass
    AdvancedQiblaCompass.init();
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
// Advanced Qibla Compass
// ==========================================
const AdvancedQiblaCompass = {
    kaabaLat: 21.4225,
    kaabaLon: 39.8262,
    qiblaDegree: 0,
    deviceOrientationEnabled: false,
    orientationHandler: null,

    init() {
        this.setupEventListeners();
        this.calculateQiblaDirection();
    },

    setupEventListeners() {
        const enableCompassBtn = document.getElementById('enableCompassBtn');
        const calibrateBtn = document.getElementById('calibrateBtn');

        if (enableCompassBtn) {
            enableCompassBtn.addEventListener('click', () => this.toggleDeviceOrientation());
        }

        if (calibrateBtn) {
            calibrateBtn.addEventListener('click', () => this.showCalibrationGuide());
        }
    },

    calculateQiblaDirection() {
        if (!AppState.currentLocation) return;

        const { lat, lon } = AppState.currentLocation;

        // Calculate qibla direction
        const phiK = this.kaabaLat * Math.PI / 180.0;
        const lambdaK = this.kaabaLon * Math.PI / 180.0;
        const phi = lat * Math.PI / 180.0;
        const lambda = lon * Math.PI / 180.0;

        const qibla = 180.0 / Math.PI * Math.atan2(
            Math.sin(lambdaK - lambda),
            Math.cos(phi) * Math.tan(phiK) - Math.sin(phi) * Math.cos(lambdaK - lambda)
        );

        this.qiblaDegree = ((qibla + 360) % 360);

        // Update UI
        this.updateQiblaUI();
        this.calculateDistance(lat, lon);
        this.updateLocationInfo(lat, lon);
    },

    updateQiblaUI() {
        const qiblaAngleValue = document.getElementById('qiblaAngleValue');
        const qiblaArrowContainer = document.getElementById('qiblaArrowContainer');
        const qiblaDirection = document.getElementById('qiblaDirection');

        if (qiblaAngleValue) {
            qiblaAngleValue.textContent = `${this.qiblaDegree.toFixed(1)}°`;
        }

        if (qiblaArrowContainer) {
            qiblaArrowContainer.style.transform = `rotate(${this.qiblaDegree}deg)`;
        }

        if (qiblaDirection) {
            qiblaDirection.textContent = this.getDirectionName(this.qiblaDegree);
        }
    },

    calculateDistance(lat, lon) {
        const R = 6371; // Earth's radius in km
        const dLat = (this.kaabaLat - lat) * Math.PI / 180;
        const dLon = (this.kaabaLon - lon) * Math.PI / 180;

        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(lat * Math.PI / 180) * Math.cos(this.kaabaLat * Math.PI / 180) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;

        const qiblaDistance = document.getElementById('qiblaDistance');
        if (qiblaDistance) {
            qiblaDistance.textContent = `${distance.toFixed(0)} km`;
        }
    },

    updateLocationInfo(lat, lon) {
        const qiblaLocationName = document.getElementById('qiblaLocationName');
        const qiblaCoords = document.getElementById('qiblaCoords');

        if (qiblaCoords) {
            qiblaCoords.textContent = `${lat.toFixed(4)}°, ${lon.toFixed(4)}°`;
        }

        // Try to get city name from AppState if available
        if (qiblaLocationName) {
            if (AppState.currentLocation && AppState.currentLocation.city) {
                qiblaLocationName.textContent = AppState.currentLocation.city;
            } else {
                qiblaLocationName.textContent = 'Konumunuz';
            }
        }
    },

    getDirectionName(degree) {
        const directions = [
            { name: 'Kuzey', min: 337.5, max: 360 },
            { name: 'Kuzey', min: 0, max: 22.5 },
            { name: 'Kuzeydoğu', min: 22.5, max: 67.5 },
            { name: 'Doğu', min: 67.5, max: 112.5 },
            { name: 'Güneydoğu', min: 112.5, max: 157.5 },
            { name: 'Güney', min: 157.5, max: 202.5 },
            { name: 'Güneybatı', min: 202.5, max: 247.5 },
            { name: 'Batı', min: 247.5, max: 292.5 },
            { name: 'Kuzeybatı', min: 292.5, max: 337.5 }
        ];

        for (const dir of directions) {
            if (degree >= dir.min && degree < dir.max) {
                return dir.name;
            }
        }

        return 'Kuzey';
    },

    async toggleDeviceOrientation() {
        if (this.deviceOrientationEnabled) {
            this.disableDeviceOrientation();
        } else {
            await this.enableDeviceOrientation();
        }
    },

    async enableDeviceOrientation() {
        const enableCompassBtn = document.getElementById('enableCompassBtn');
        const deviceArrow = document.getElementById('deviceArrow');
        const deviceAngleDisplay = document.getElementById('deviceAngleDisplay');
        const accuracyIndicator = document.getElementById('accuracyIndicator');

        // Check if DeviceOrientationEvent is supported
        if (!window.DeviceOrientationEvent) {
            alert('⚠️ Cihazınız pusula sensörünü desteklemiyor.');
            return;
        }

        // Request permission for iOS 13+
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            try {
                const permission = await DeviceOrientationEvent.requestPermission();
                if (permission !== 'granted') {
                    alert('❌ Pusula sensörüne erişim izni verilmedi.');
                    return;
                }
            } catch (error) {
                alert('❌ Pusula sensörüne erişim izni alınamadı.');
                return;
            }
        }

        // Enable orientation tracking
        this.orientationHandler = (event) => this.handleOrientation(event);
        window.addEventListener('deviceorientationabsolute', this.orientationHandler);
        window.addEventListener('deviceorientation', this.orientationHandler);

        this.deviceOrientationEnabled = true;

        // Update UI
        if (enableCompassBtn) {
            enableCompassBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                </svg>
                <span>Pusulanı Kapat</span>
            `;
            enableCompassBtn.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
        }

        if (deviceArrow) {
            deviceArrow.style.display = 'block';
        }

        if (deviceAngleDisplay) {
            deviceAngleDisplay.style.display = 'block';
        }

        if (accuracyIndicator) {
            accuracyIndicator.style.display = 'flex';
        }
    },

    disableDeviceOrientation() {
        const enableCompassBtn = document.getElementById('enableCompassBtn');
        const deviceArrow = document.getElementById('deviceArrow');
        const deviceAngleDisplay = document.getElementById('deviceAngleDisplay');
        const accuracyIndicator = document.getElementById('accuracyIndicator');

        // Remove event listeners
        if (this.orientationHandler) {
            window.removeEventListener('deviceorientationabsolute', this.orientationHandler);
            window.removeEventListener('deviceorientation', this.orientationHandler);
        }

        this.deviceOrientationEnabled = false;

        // Update UI
        if (enableCompassBtn) {
            enableCompassBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                </svg>
                <span>Gerçek Zamanlı Pusula</span>
            `;
            enableCompassBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        }

        if (deviceArrow) {
            deviceArrow.style.display = 'none';
        }

        if (deviceAngleDisplay) {
            deviceAngleDisplay.style.display = 'none';
        }

        if (accuracyIndicator) {
            accuracyIndicator.style.display = 'none';
        }
    },

    handleOrientation(event) {
        let heading = event.alpha; // 0-360 degrees

        if (event.webkitCompassHeading) {
            // iOS
            heading = event.webkitCompassHeading;
        } else if (event.alpha !== null) {
            // Android
            heading = 360 - event.alpha;
        } else {
            return;
        }

        // Update device arrow
        const deviceArrow = document.getElementById('deviceArrow');
        const compassCircle = document.getElementById('compassCircle');
        const deviceAngleValue = document.getElementById('deviceAngleValue');

        if (compassCircle) {
            // Rotate the entire compass to match device orientation
            compassCircle.style.transform = `rotate(${-heading}deg)`;
        }

        if (deviceAngleValue) {
            deviceAngleValue.textContent = `${heading.toFixed(1)}°`;
        }

        // Update accuracy indicator
        this.updateAccuracyIndicator(event.accuracy);
    },

    updateAccuracyIndicator(accuracy) {
        const accuracyIndicator = document.getElementById('accuracyIndicator');
        const accuracyText = document.getElementById('accuracyText');

        if (!accuracyIndicator || !accuracyText) return;

        // Remove existing accuracy classes
        accuracyIndicator.classList.remove('high', 'medium', 'low');

        // Determine accuracy level
        if (accuracy === null || accuracy === undefined) {
            accuracyIndicator.classList.add('medium');
            accuracyText.textContent = 'Orta';
        } else if (accuracy < 15) {
            accuracyIndicator.classList.add('high');
            accuracyText.textContent = 'Yüksek';
        } else if (accuracy < 30) {
            accuracyIndicator.classList.add('medium');
            accuracyText.textContent = 'Orta';
        } else {
            accuracyIndicator.classList.add('low');
            accuracyText.textContent = 'Düşük';
        }
    },

    showCalibrationGuide() {
        const message = `📱 Pusula Kalibrasyon Rehberi

Daha hassas sonuçlar için:

1️⃣ Cihazınızı düz bir yüzeyde tutun
2️⃣ Metalik nesnelerden uzak durun
3️⃣ Cihazınızı havada "8" şeklinde hareket ettirin
4️⃣ Bu hareketi 3-4 kez tekrarlayın
5️⃣ Manyetik alanlardan (hoparlör, mıknatıs vb.) uzak durun

✨ İpucu: Pusula sensörü, açık havada ve kapalı alanlara göre daha iyi çalışır.`;

        alert(message);
    }
};

// Legacy function for backward compatibility
function calculateQiblaDirection() {
    AdvancedQiblaCompass.calculateQiblaDirection();
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
// ==========================================
// Advanced Notifications Manager
// ==========================================
const AdvancedNotificationsManager = {
    history: [],
    settings: {
        notificationsEnabled: false,
        prayerNotifications: {
            Fajr: true,
            Dhuhr: true,
            Asr: true,
            Maghrib: true,
            Isha: true
        },
        notificationBefore: 0,
        reminderEnabled: false,
        reminderBefore: 3,
        soundEnabled: false,
        adhanStyle: 'default',
        volume: 70,
        vibrationEnabled: false,
        vibrationPattern: 'medium',
        dndEnabled: false,
        dndStart: '23:00',
        dndEnd: '07:00',
        persistentNotification: false,
        showLocationInNotification: true,
        notificationActions: true,
        dailyReminder: false
    },

    init() {
        this.loadSettings();
        this.setupEventListeners();
        this.updateNotificationStatus();
        this.loadHistory();
        this.renderHistory();
    },

    loadSettings() {
        const saved = localStorage.getItem('advancedNotificationSettings');
        if (saved) {
            this.settings = { ...this.settings, ...JSON.parse(saved) };
        }
        this.applySettingsToUI();
    },

    saveSettings() {
        localStorage.setItem('advancedNotificationSettings', JSON.stringify(this.settings));
    },

    applySettingsToUI() {
        // Main toggle
        const notificationsEnabled = document.getElementById('notificationsEnabled');
        if (notificationsEnabled) {
            notificationsEnabled.checked = this.settings.notificationsEnabled;
        }

        // Prayer notifications
        Object.keys(this.settings.prayerNotifications).forEach(prayer => {
            const checkbox = document.getElementById(`notify${prayer}`);
            if (checkbox) {
                checkbox.checked = this.settings.prayerNotifications[prayer];
            }
        });

        // Other settings
        this.setValueIfExists('notificationBefore', this.settings.notificationBefore);
        this.setValueIfExists('reminderEnabled', this.settings.reminderEnabled);
        this.setValueIfExists('reminderBefore', this.settings.reminderBefore);
        this.setValueIfExists('notificationSound', this.settings.soundEnabled);
        this.setValueIfExists('adhanStyle', this.settings.adhanStyle);
        this.setValueIfExists('notificationVolume', this.settings.volume);
        this.setValueIfExists('volumeValue', `${this.settings.volume}%`);
        this.setValueIfExists('vibrationEnabled', this.settings.vibrationEnabled);
        this.setValueIfExists('vibrationPattern', this.settings.vibrationPattern);
        this.setValueIfExists('dndEnabled', this.settings.dndEnabled);
        this.setValueIfExists('dndStart', this.settings.dndStart);
        this.setValueIfExists('dndEnd', this.settings.dndEnd);
        this.setValueIfExists('persistentNotification', this.settings.persistentNotification);
        this.setValueIfExists('showLocationInNotification', this.settings.showLocationInNotification);
        this.setValueIfExists('notificationActions', this.settings.notificationActions);
        this.setValueIfExists('dailyReminder', this.settings.dailyReminder);

        // Update reminder dropdown state
        const reminderBefore = document.getElementById('reminderBefore');
        if (reminderBefore) {
            reminderBefore.disabled = !this.settings.reminderEnabled;
        }
    },

    setValueIfExists(id, value) {
        const element = document.getElementById(id);
        if (element) {
            if (element.type === 'checkbox') {
                element.checked = value;
            } else if (element.tagName === 'SPAN') {
                element.textContent = value;
            } else {
                element.value = value;
            }
        }
    },

    setupEventListeners() {
        // Test notification button
        const testBtn = document.getElementById('testNotificationBtn');
        if (testBtn) {
            testBtn.addEventListener('click', () => this.testNotification());
        }

        // Main toggle
        const notificationsEnabled = document.getElementById('notificationsEnabled');
        if (notificationsEnabled) {
            notificationsEnabled.addEventListener('change', async (e) => {
                if (e.target.checked) {
                    await this.requestPermission();
                } else {
                    this.settings.notificationsEnabled = false;
                    this.saveSettings();
                    this.updateNotificationStatus();
                }
            });
        }

        // Prayer notifications
        Object.keys(this.settings.prayerNotifications).forEach(prayer => {
            const checkbox = document.getElementById(`notify${prayer}`);
            if (checkbox) {
                checkbox.addEventListener('change', (e) => {
                    this.settings.prayerNotifications[prayer] = e.target.checked;
                    this.saveSettings();
                });
            }
        });

        // Timing settings
        const notificationBefore = document.getElementById('notificationBefore');
        if (notificationBefore) {
            notificationBefore.addEventListener('change', (e) => {
                this.settings.notificationBefore = parseInt(e.target.value);
                this.saveSettings();
            });
        }

        const reminderEnabled = document.getElementById('reminderEnabled');
        const reminderBefore = document.getElementById('reminderBefore');
        if (reminderEnabled) {
            reminderEnabled.addEventListener('change', (e) => {
                this.settings.reminderEnabled = e.target.checked;
                if (reminderBefore) {
                    reminderBefore.disabled = !e.target.checked;
                }
                this.saveSettings();
            });
        }

        if (reminderBefore) {
            reminderBefore.addEventListener('change', (e) => {
                this.settings.reminderBefore = parseInt(e.target.value);
                this.saveSettings();
            });
        }

        // Sound settings
        const notificationSound = document.getElementById('notificationSound');
        if (notificationSound) {
            notificationSound.addEventListener('change', (e) => {
                this.settings.soundEnabled = e.target.checked;
                this.saveSettings();
            });
        }

        const adhanStyle = document.getElementById('adhanStyle');
        if (adhanStyle) {
            adhanStyle.addEventListener('change', (e) => {
                this.settings.adhanStyle = e.target.value;
                this.saveSettings();
            });
        }

        const volumeSlider = document.getElementById('notificationVolume');
        const volumeValue = document.getElementById('volumeValue');
        if (volumeSlider) {
            volumeSlider.addEventListener('input', (e) => {
                this.settings.volume = parseInt(e.target.value);
                if (volumeValue) {
                    volumeValue.textContent = `${this.settings.volume}%`;
                }
                this.saveSettings();
            });
        }

        // Vibration settings
        const vibrationEnabled = document.getElementById('vibrationEnabled');
        if (vibrationEnabled) {
            vibrationEnabled.addEventListener('change', (e) => {
                this.settings.vibrationEnabled = e.target.checked;
                this.saveSettings();
            });
        }

        const vibrationPattern = document.getElementById('vibrationPattern');
        if (vibrationPattern) {
            vibrationPattern.addEventListener('change', (e) => {
                this.settings.vibrationPattern = e.target.value;
                this.saveSettings();
            });
        }

        // DND settings
        const dndEnabled = document.getElementById('dndEnabled');
        if (dndEnabled) {
            dndEnabled.addEventListener('change', (e) => {
                this.settings.dndEnabled = e.target.checked;
                this.saveSettings();
            });
        }

        const dndStart = document.getElementById('dndStart');
        if (dndStart) {
            dndStart.addEventListener('change', (e) => {
                this.settings.dndStart = e.target.value;
                this.saveSettings();
            });
        }

        const dndEnd = document.getElementById('dndEnd');
        if (dndEnd) {
            dndEnd.addEventListener('change', (e) => {
                this.settings.dndEnd = e.target.value;
                this.saveSettings();
            });
        }

        // Advanced options
        const advancedOptions = [
            'persistentNotification',
            'showLocationInNotification',
            'notificationActions',
            'dailyReminder'
        ];

        advancedOptions.forEach(option => {
            const element = document.getElementById(option);
            if (element) {
                element.addEventListener('change', (e) => {
                    this.settings[option] = e.target.checked;
                    this.saveSettings();
                });
            }
        });
    },

    async requestPermission() {
        if (!('Notification' in window)) {
            alert('❌ Tarayıcınız bildirimleri desteklemiyor.');
            return false;
        }

        try {
            const permission = await Notification.requestPermission();
            if (permission === 'granted') {
                this.settings.notificationsEnabled = true;
                this.saveSettings();
                this.updateNotificationStatus();
                return true;
            } else {
                this.settings.notificationsEnabled = false;
                this.saveSettings();
                this.updateNotificationStatus();
                alert('⚠️ Bildirim izni verilmedi. Tarayıcı ayarlarından izin verebilirsiniz.');
                return false;
            }
        } catch (error) {
            console.error('Notification permission error:', error);
            return false;
        }
    },

    updateNotificationStatus() {
        const statusElement = document.getElementById('notificationStatus');
        if (!statusElement) return;

        if (!('Notification' in window)) {
            statusElement.className = 'notification-status denied';
            statusElement.querySelector('.status-text').textContent = 'Desteklenmiyor';
            return;
        }

        const permission = Notification.permission;
        if (permission === 'granted' && this.settings.notificationsEnabled) {
            statusElement.className = 'notification-status granted';
            statusElement.querySelector('.status-text').textContent = 'Etkin';
        } else if (permission === 'denied') {
            statusElement.className = 'notification-status denied';
            statusElement.querySelector('.status-text').textContent = 'Reddedildi';
        } else {
            statusElement.className = 'notification-status';
            statusElement.querySelector('.status-text').textContent = 'İzin Bekleniyor';
        }
    },

    async testNotification() {
        if (!this.settings.notificationsEnabled) {
            const granted = await this.requestPermission();
            if (!granted) return;
        }

        if (Notification.permission !== 'granted') {
            await this.requestPermission();
            return;
        }

        const options = {
            body: 'Bu bir test bildirimidir. Ayarlarınız düzgün çalışıyor! ✅',
            icon: '/icon.png',
            badge: '/badge.png',
            tag: 'test-notification',
            requireInteraction: this.settings.persistentNotification,
            silent: !this.settings.soundEnabled
        };

        if (this.settings.notificationActions) {
            options.actions = [
                { action: 'close', title: 'Kapat' }
            ];
        }

        const notification = new Notification('🔔 Test Bildirimi - Ezan Vakti Pro', options);

        // Add to history
        this.addToHistory('Test Bildirimi', options.body, '🔔');

        // Vibrate if enabled
        if (this.settings.vibrationEnabled && 'vibrate' in navigator) {
            this.vibrate();
        }

        notification.onclick = () => {
            window.focus();
            notification.close();
        };
    },

    checkPrayerNotifications() {
        if (!this.settings.notificationsEnabled) return;
        if (Notification.permission !== 'granted') return;
        if (this.isInDNDPeriod()) return;

        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();

        const prayerOrder = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
        const prayerIcons = {
            Fajr: '🌅',
            Dhuhr: '☀️',
            Asr: '🌤️',
            Maghrib: '🌆',
            Isha: '🌙'
        };

        for (const prayer of prayerOrder) {
            if (!this.settings.prayerNotifications[prayer]) continue;

            const prayerTime = AppState.prayerTimes[prayer];
            if (!prayerTime) continue;

            const [hours, minutes] = prayerTime.split(':').map(Number);

            // Main notification
            const mainNotifMinutes = hours * 60 + minutes - this.settings.notificationBefore;
            if (mainNotifMinutes === currentMinutes) {
                this.sendPrayerNotification(prayer, this.settings.notificationBefore, prayerIcons[prayer]);
            }

            // Reminder notification
            if (this.settings.reminderEnabled) {
                const reminderMinutes = hours * 60 + minutes - this.settings.reminderBefore;
                if (reminderMinutes === currentMinutes) {
                    this.sendPrayerNotification(prayer, this.settings.reminderBefore, prayerIcons[prayer], true);
                }
            }
        }
    },

    sendPrayerNotification(prayer, beforeMinutes, icon, isReminder = false) {
        const prayerName = prayerNamesMap[prayer];
        const title = isReminder ? `⏰ Hatırlatma: ${prayerName}` : `🕌 ${prayerName} Vakti`;

        let body = beforeMinutes > 0
            ? `${prayerName} vaktine ${beforeMinutes} dakika kaldı`
            : `${prayerName} vakti geldi`;

        if (this.settings.showLocationInNotification && AppState.currentLocation?.city) {
            body += ` - ${AppState.currentLocation.city}`;
        }

        const options = {
            body,
            icon: '/icon.png',
            badge: '/badge.png',
            tag: `prayer-${prayer}-${beforeMinutes}`,
            requireInteraction: this.settings.persistentNotification,
            silent: !this.settings.soundEnabled || beforeMinutes > 0
        };

        if (this.settings.notificationActions) {
            options.actions = [
                { action: 'snooze', title: '⏰ Ertele (5 dk)' },
                { action: 'close', title: '✕ Kapat' }
            ];
        }

        const notification = new Notification(title, options);

        // Add to history
        this.addToHistory(title, body, icon);

        // Play sound if enabled and it's the exact prayer time
        if (beforeMinutes === 0 && this.settings.soundEnabled) {
            this.playAdhanSound();
        }

        // Vibrate if enabled
        if (this.settings.vibrationEnabled && 'vibrate' in navigator) {
            this.vibrate();
        }

        notification.onclick = () => {
            window.focus();
            notification.close();
        };
    },

    playAdhanSound() {
        const audio = document.getElementById('adhanAudio');
        if (audio) {
            audio.volume = this.settings.volume / 100;
            audio.currentTime = 0;
            audio.play().catch(err => console.log('Audio play failed:', err));
        }
    },

    vibrate() {
        const patterns = {
            short: [200],
            medium: [200, 100, 200],
            long: [200, 100, 200, 100, 200],
            custom: [100, 50, 100, 50, 100, 50, 200]
        };

        const pattern = patterns[this.settings.vibrationPattern] || patterns.medium;
        navigator.vibrate(pattern);
    },

    isInDNDPeriod() {
        if (!this.settings.dndEnabled) return false;

        const now = new Date();
        const currentMinutes = now.getHours() * 60 + now.getMinutes();

        const [startHours, startMinutes] = this.settings.dndStart.split(':').map(Number);
        const [endHours, endMinutes] = this.settings.dndEnd.split(':').map(Number);

        const dndStartMinutes = startHours * 60 + startMinutes;
        const dndEndMinutes = endHours * 60 + endMinutes;

        if (dndStartMinutes < dndEndMinutes) {
            return currentMinutes >= dndStartMinutes && currentMinutes < dndEndMinutes;
        } else {
            return currentMinutes >= dndStartMinutes || currentMinutes < dndEndMinutes;
        }
    },

    addToHistory(title, body, icon) {
        const historyItem = {
            title,
            body,
            icon,
            timestamp: new Date().toISOString()
        };

        this.history.unshift(historyItem);
        if (this.history.length > 20) {
            this.history = this.history.slice(0, 20);
        }

        this.saveHistory();
        this.renderHistory();
    },

    loadHistory() {
        const saved = localStorage.getItem('notificationHistory');
        if (saved) {
            this.history = JSON.parse(saved);
        }
    },

    saveHistory() {
        localStorage.setItem('notificationHistory', JSON.stringify(this.history));
    },

    renderHistory() {
        const historyList = document.getElementById('notificationHistoryList');
        if (!historyList) return;

        if (this.history.length === 0) {
            historyList.innerHTML = `
                <div class="notification-history-empty">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                    <p>Henüz bildirim yok</p>
                </div>
            `;
            return;
        }

        historyList.innerHTML = this.history.map(item => {
            const time = new Date(item.timestamp);
            const timeStr = time.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
            const dateStr = time.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });

            return `
                <div class="notification-history-item">
                    <div class="notification-history-icon">${item.icon}</div>
                    <div class="notification-history-content">
                        <div class="notification-history-title">${item.title}</div>
                        <div class="notification-history-body">${item.body}</div>
                        <div class="notification-history-time">${dateStr} ${timeStr}</div>
                    </div>
                </div>
            `;
        }).join('');
    }
};

// Initialize all new features
document.addEventListener('DOMContentLoaded', () => {
    setupTabNavigation();
    AdvancedNotificationsManager.init();

    // Initialize features
    setTimeout(() => {
        QuranReader.init();
        EsmaulHusna.init();
        DailyHadith.init();
    }, 500);
});

// Check notifications every minute
setInterval(() => {
    AdvancedNotificationsManager.checkPrayerNotifications();
}, 60000);

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
        this.loadSettings();
        this.setupTasbihSelector();
        this.setupTasbihButton();
        this.setupSettingsPanel();
        this.setupAccordion();
        this.updateAllStats();
        this.updateZikirCardCounts();
    },

    settings: {
        vibration: true,
        sound: true,
        targetAlert: true,
        autoSave: true
    },

    loadSettings() {
        const saved = localStorage.getItem('tasbihSettings');
        if (saved) {
            this.settings = { ...this.settings, ...JSON.parse(saved) };
        }
        this.applySettingsToUI();
    },

    saveSettings() {
        localStorage.setItem('tasbihSettings', JSON.stringify(this.settings));
    },

    applySettingsToUI() {
        const vibrationCheckbox = document.getElementById('tasbihVibration');
        const soundCheckbox = document.getElementById('tasbihSound');
        const targetAlertCheckbox = document.getElementById('tasbihTargetAlert');
        const autoSaveCheckbox = document.getElementById('tasbihAutoSave');

        if (vibrationCheckbox) vibrationCheckbox.checked = this.settings.vibration;
        if (soundCheckbox) soundCheckbox.checked = this.settings.sound;
        if (targetAlertCheckbox) targetAlertCheckbox.checked = this.settings.targetAlert;
        if (autoSaveCheckbox) autoSaveCheckbox.checked = this.settings.autoSave;
    },

    setupSettingsPanel() {
        const settingsBtn = document.getElementById('tasbihSettingsBtn');
        const settingsPanel = document.getElementById('tasbihSettingsPanel');

        if (settingsBtn && settingsPanel) {
            settingsBtn.addEventListener('click', () => {
                if (settingsPanel.style.display === 'none') {
                    settingsPanel.style.display = 'block';
                    settingsBtn.textContent = '';
                    settingsBtn.innerHTML = `
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m13.2-5.2l-4.2 4.2m0 6l-4.2 4.2"></path>
                        </svg>
                        Gizle
                    `;
                } else {
                    settingsPanel.style.display = 'none';
                    settingsBtn.textContent = '';
                    settingsBtn.innerHTML = `
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M12 1v6m0 6v6m5.2-13.2l-4.2 4.2m0 6l4.2 4.2M23 12h-6m-6 0H1m13.2-5.2l-4.2 4.2m0 6l-4.2 4.2"></path>
                        </svg>
                        Ayarlar
                    `;
                }
            });
        }

        // Settings checkboxes
        const vibrationCheckbox = document.getElementById('tasbihVibration');
        const soundCheckbox = document.getElementById('tasbihSound');
        const targetAlertCheckbox = document.getElementById('tasbihTargetAlert');
        const autoSaveCheckbox = document.getElementById('tasbihAutoSave');

        if (vibrationCheckbox) {
            vibrationCheckbox.addEventListener('change', (e) => {
                this.settings.vibration = e.target.checked;
                this.saveSettings();
            });
        }

        if (soundCheckbox) {
            soundCheckbox.addEventListener('change', (e) => {
                this.settings.sound = e.target.checked;
                this.saveSettings();
            });
        }

        if (targetAlertCheckbox) {
            targetAlertCheckbox.addEventListener('change', (e) => {
                this.settings.targetAlert = e.target.checked;
                this.saveSettings();
            });
        }

        if (autoSaveCheckbox) {
            autoSaveCheckbox.addEventListener('change', (e) => {
                this.settings.autoSave = e.target.checked;
                this.saveSettings();
            });
        }
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

                // Vibrate if enabled and supported
                if (this.settings.vibration && 'vibrate' in navigator) {
                    navigator.vibrate(50);
                }

                // Play sound if enabled
                if (this.settings.sound) {
                    this.playClickSound();
                }
            });
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.resetCounter();
            });
        }
    },

    playClickSound() {
        // Create a simple beep sound
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            oscillator.frequency.value = 800;
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } catch (error) {
            console.log('Audio not supported');
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
        // Show notification if enabled
        if (this.settings.targetAlert) {
            const textEl = document.getElementById('currentZikirText');
            if (textEl) {
                const originalText = textEl.textContent;
                textEl.textContent = '🎉 Hedefe Ulaşıldı!';
                textEl.style.color = '#10b981';

                setTimeout(() => {
                    textEl.textContent = originalText;
                    textEl.style.color = '#06b6d4';
                }, 2000);
            }

            // Vibrate pattern for success
            if (this.settings.vibration && 'vibrate' in navigator) {
                navigator.vibrate([100, 50, 100, 50, 200]);
            }

            // Play success sound
            if (this.settings.sound) {
                this.playSuccessSound();
            }

            // Show browser notification
            if ('Notification' in window && Notification.permission === 'granted') {
                new Notification('Tesbih Tamamlandı! 🎉', {
                    body: `${this.zikirTypes[this.currentType].name} - ${this.currentTarget} zikir tamamlandı!`,
                    icon: '/icon.png',
                    tag: 'tasbih-complete',
                    silent: !this.settings.sound
                });
            }
        }

        // Auto reset after target
        setTimeout(() => {
            this.resetCounter();
        }, 2000);
    },

    playSuccessSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();

            // Play a nice ascending tone
            [600, 750, 900].forEach((freq, i) => {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();

                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);

                oscillator.frequency.value = freq;
                oscillator.type = 'sine';

                const startTime = audioContext.currentTime + (i * 0.1);
                gainNode.gain.setValueAtTime(0.15, startTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.2);

                oscillator.start(startTime);
                oscillator.stop(startTime + 0.2);
            });
        } catch (error) {
            console.log('Audio not supported');
        }
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

// Camiler Module
const CamilerModule = {
    userLocation: null,
    allMosques: [],
    filteredMosques: [],
    currentFilter: 'all',

    init() {
        const camilerCard = document.getElementById('camilerCard');
        const camilerModule = document.getElementById('camilerModule');
        const camilerBackBtn = document.getElementById('camilerBackBtn');
        const moreMenu = document.querySelector('.more-menu');
        const requestLocationBtn = document.getElementById('requestLocationBtn');
        const retryLocationBtn = document.getElementById('retryLocationBtn');
        const searchInput = document.getElementById('camilerSearch');
        const filterBtns = document.querySelectorAll('.filter-btn');

        // Navigate to Camiler module
        if (camilerCard) {
            camilerCard.addEventListener('click', () => {
                if (moreMenu) moreMenu.style.display = 'none';
                if (camilerModule) camilerModule.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Navigate back to More menu
        if (camilerBackBtn) {
            camilerBackBtn.addEventListener('click', () => {
                if (camilerModule) camilerModule.style.display = 'none';
                if (moreMenu) moreMenu.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Request location permission
        if (requestLocationBtn) {
            requestLocationBtn.addEventListener('click', () => {
                this.requestLocation();
            });
        }

        // Retry location request
        if (retryLocationBtn) {
            retryLocationBtn.addEventListener('click', () => {
                this.requestLocation();
            });
        }

        // Search functionality
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.searchMosques(e.target.value);
            });
        }

        // Filter functionality
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.dataset.filter;
                this.filterMosques();
            });
        });
    },

    requestLocation() {
        // Hide permission card, show loading
        const permissionCard = document.getElementById('locationPermissionCard');
        const loadingCard = document.getElementById('camilerLoading');
        const errorCard = document.getElementById('camilerError');

        if (permissionCard) permissionCard.style.display = 'none';
        if (errorCard) errorCard.style.display = 'none';
        if (loadingCard) loadingCard.style.display = 'block';

        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.userLocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    this.loadMosques();
                },
                (error) => {
                    this.showError(error.message);
                },
                { enableHighAccuracy: true, timeout: 10000 }
            );
        } else {
            this.showError('Tarayıcınız konum özelliğini desteklemiyor.');
        }
    },

    showError(message) {
        const loadingCard = document.getElementById('camilerLoading');
        const errorCard = document.getElementById('camilerError');
        const errorMessage = document.getElementById('errorMessage');

        if (loadingCard) loadingCard.style.display = 'none';
        if (errorCard) errorCard.style.display = 'block';
        if (errorMessage) errorMessage.textContent = message || 'Konum bilgisi alınamadı.';
    },

    loadMosques() {
        // Generate mock mosque data based on user location
        this.allMosques = this.generateMockMosques();
        this.filteredMosques = [...this.allMosques];

        // Hide loading, show content
        const loadingCard = document.getElementById('camilerLoading');
        const searchFilterSection = document.getElementById('searchFilterSection');
        const camilerList = document.getElementById('camilerList');

        if (loadingCard) loadingCard.style.display = 'none';
        if (searchFilterSection) searchFilterSection.style.display = 'block';
        if (camilerList) camilerList.style.display = 'block';

        this.updateCounts();
        this.renderMosques();
    },

    generateMockMosques() {
        const mosqueNames = [
            'Merkez Camii', 'Fatih Camii', 'Selimiye Camii', 'Yeşil Camii',
            'Muradiye Camii', 'Şehitlik Camii', 'Hünkar Camii', 'Kılıçarslan Camii',
            'Yeni Camii', 'Eski Camii', 'Üç Şerefeli Camii', 'Kurşunlu Camii',
            'Hacı Bayram Camii', 'Kocatepe Camii', 'Maltepe Camii', 'Beştepe Camii'
        ];

        const mosques = [];
        const baseTime = new Date();

        for (let i = 0; i < 12; i++) {
            const distance = (Math.random() * 5 + 0.5).toFixed(1); // 0.5 - 5.5 km
            const walkTime = Math.ceil(distance * 12); // ~12 min per km

            mosques.push({
                id: i + 1,
                name: mosqueNames[i],
                address: `${['Merkez', 'Fatih', 'Yıldırım', 'Osmangazi', 'Çankaya'][Math.floor(Math.random() * 5)]} Mah. ${Math.floor(Math.random() * 200 + 1)}. Sok. No: ${Math.floor(Math.random() * 50 + 1)}`,
                distance: parseFloat(distance),
                walkTime: walkTime,
                capacity: Math.floor(Math.random() * 1000 + 200),
                hasParking: Math.random() > 0.5,
                hasWudu: true,
                isOpen: Math.random() > 0.2,
                lat: this.userLocation.lat + (Math.random() - 0.5) * 0.05,
                lng: this.userLocation.lng + (Math.random() - 0.5) * 0.05
            });
        }

        // Sort by distance
        return mosques.sort((a, b) => a.distance - b.distance);
    },

    filterMosques() {
        const searchTerm = document.getElementById('camilerSearch')?.value.toLowerCase() || '';

        this.filteredMosques = this.allMosques.filter(mosque => {
            // Apply search filter
            const matchesSearch = mosque.name.toLowerCase().includes(searchTerm) ||
                                 mosque.address.toLowerCase().includes(searchTerm);

            // Apply category filter
            let matchesFilter = true;
            if (this.currentFilter === 'nearby') {
                matchesFilter = mosque.distance <= 2; // Within 2 km
            } else if (this.currentFilter === 'open') {
                matchesFilter = mosque.isOpen;
            }

            return matchesSearch && matchesFilter;
        });

        this.updateCounts();
        this.renderMosques();
    },

    searchMosques(searchTerm) {
        this.filterMosques();
    },

    updateCounts() {
        const countAll = document.getElementById('countAll');
        const countNearby = document.getElementById('countNearby');
        const countOpen = document.getElementById('countOpen');

        if (countAll) countAll.textContent = this.allMosques.length;
        if (countNearby) countNearby.textContent = this.allMosques.filter(m => m.distance <= 2).length;
        if (countOpen) countOpen.textContent = this.allMosques.filter(m => m.isOpen).length;
    },

    renderMosques() {
        const camilerList = document.getElementById('camilerList');
        const emptyState = document.getElementById('emptyState');

        if (!camilerList) return;

        if (this.filteredMosques.length === 0) {
            camilerList.style.display = 'none';
            if (emptyState) emptyState.style.display = 'block';
            return;
        }

        if (emptyState) emptyState.style.display = 'none';
        camilerList.style.display = 'block';

        camilerList.innerHTML = this.filteredMosques.map(mosque => `
            <div class="mosque-card">
                <div class="mosque-header">
                    <div class="mosque-info">
                        <h4>${mosque.name}</h4>
                        <p class="mosque-address">${mosque.address}</p>
                    </div>
                    <div class="mosque-distance">
                        <span class="distance-badge">${mosque.distance} km</span>
                        <div class="distance-time">~${mosque.walkTime} dk yürüyüş</div>
                    </div>
                </div>
                <div class="mosque-details">
                    <div class="detail-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span>${mosque.capacity} kişi</span>
                    </div>
                    ${mosque.hasParking ? `
                    <div class="detail-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                        <span>Otopark</span>
                    </div>
                    ` : ''}
                    ${mosque.hasWudu ? `
                    <div class="detail-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                        </svg>
                        <span>Abdesthane</span>
                    </div>
                    ` : ''}
                    <div class="detail-item" style="color: ${mosque.isOpen ? '#10b981' : '#dc2626'};">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>${mosque.isOpen ? 'Açık' : 'Kapalı'}</span>
                    </div>
                </div>
                <div class="mosque-actions">
                    <button class="action-btn primary" onclick="CamilerModule.getDirections(${mosque.lat}, ${mosque.lng})">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 11l19-9-9 19-2-8-8-2z"></path>
                        </svg>
                        Yol Tarifi
                    </button>
                    <button class="action-btn" onclick="CamilerModule.callMosque()">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        Ara
                    </button>
                </div>
            </div>
        `).join('');
    },

    getDirections(lat, lng) {
        // Open Google Maps with directions
        const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
        window.open(url, '_blank');
    },

    callMosque() {
        alert('Cami iletişim bilgileri için lütfen yerel telefon rehberini kullanın.');
    }
};

// Medya Module
const MedyaModule = {
    init() {
        const medyaCard = document.getElementById('medyaCard');
        const medyaModule = document.getElementById('medyaModule');
        const medyaBackBtn = document.getElementById('medyaBackBtn');
        const moreMenu = document.querySelector('.more-menu');
        const watchBtns = document.querySelectorAll('.watch-btn');
        const closeVideoBtn = document.getElementById('closeVideoBtn');
        const categoryBtns = document.querySelectorAll('.category-btn');
        const playPodcastBtns = document.querySelectorAll('.play-podcast-btn');

        // Navigate to Medya module
        if (medyaCard) {
            medyaCard.addEventListener('click', () => {
                if (moreMenu) moreMenu.style.display = 'none';
                if (medyaModule) medyaModule.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Navigate back to More menu
        if (medyaBackBtn) {
            medyaBackBtn.addEventListener('click', () => {
                if (medyaModule) medyaModule.style.display = 'none';
                if (moreMenu) moreMenu.style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Watch stream buttons
        watchBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const streamType = btn.dataset.stream;
                this.playStream(streamType);
            });
        });

        // Close video button
        if (closeVideoBtn) {
            closeVideoBtn.addEventListener('click', () => {
                this.closeVideo();
            });
        }

        // Category filter buttons
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.filterPodcasts(btn.dataset.category);
            });
        });

        // Play podcast buttons
        playPodcastBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const podcastCard = btn.closest('.podcast-card');
                const title = podcastCard.querySelector('h4').textContent;
                this.playPodcast(title);
            });
        });
    },

    playStream(streamType) {
        const videoPlayerContainer = document.getElementById('videoPlayerContainer');
        const videoTitle = document.getElementById('videoTitle');
        const videoDescription = document.getElementById('videoDescription');
        const videoPlayer = document.getElementById('videoPlayer');

        // Stream data
        const streams = {
            kabe: {
                title: 'Kabe Canlı Yayını',
                description: 'Mescid-i Haram içinden Kabe\'nin canlı görüntüleri. 7/24 kesintisiz yayın.',
                url: 'https://www.youtube.com/embed/8vAyxIp_sUQ?autoplay=1'
            },
            haram: {
                title: 'Mescid-i Haram Canlı',
                description: 'Harem-i Şerif\'in genel görünümü ve cemaat manzarası.',
                url: 'https://www.youtube.com/embed/EU8BfX_Vo08?autoplay=1'
            },
            nebevi: {
                title: 'Mescid-i Nebevi Canlı',
                description: 'Peygamber Efendimizin Mescidi\'nden canlı yayın.',
                url: 'https://www.youtube.com/embed/kQRaEbh38v4?autoplay=1'
            }
        };

        const stream = streams[streamType];
        if (!stream) return;

        // Update video info
        if (videoTitle) videoTitle.textContent = stream.title;
        if (videoDescription) videoDescription.textContent = stream.description;

        // Create iframe for YouTube embed
        if (videoPlayer) {
            videoPlayer.innerHTML = `
                <iframe
                    width="100%"
                    height="100%"
                    src="${stream.url}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                ></iframe>
            `;
        }

        // Show video player and scroll to it
        if (videoPlayerContainer) {
            videoPlayerContainer.style.display = 'block';
            setTimeout(() => {
                videoPlayerContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 100);
        }
    },

    closeVideo() {
        const videoPlayerContainer = document.getElementById('videoPlayerContainer');
        const videoPlayer = document.getElementById('videoPlayer');

        if (videoPlayerContainer) videoPlayerContainer.style.display = 'none';
        if (videoPlayer) {
            videoPlayer.innerHTML = `
                <div class="video-placeholder-content">
                    <div class="play-icon-large">▶</div>
                    <p>Yayın yükleniyor...</p>
                </div>
            `;
        }
    },

    filterPodcasts(category) {
        const podcastCards = document.querySelectorAll('.podcast-card');

        podcastCards.forEach(card => {
            const cardCategory = card.dataset.category;
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'grid';
            } else {
                card.style.display = 'none';
            }
        });
    },

    playPodcast(title) {
        alert(`Podcast oynatıcı: "${title}"\n\nBu özellik yakında eklenecek. Podcast dinleme için lütfen bizi takip etmeye devam edin!`);
    }
};

// Hac ve Umre Rehberi Module
const HacUmreModule = {
    init() {
        const hacUmreCard = document.getElementById('hacUmreCard');
        const hacUmreBackBtn = document.getElementById('hacUmreBackBtn');

        // Navigation - Open Hac & Umre Module
        if (hacUmreCard) {
            hacUmreCard.addEventListener('click', () => {
                document.querySelector('.more-features').style.display = 'none';
                document.getElementById('hacUmreModule').style.display = 'block';
                document.getElementById('hacUmreModule').classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Navigation - Back Button
        if (hacUmreBackBtn) {
            hacUmreBackBtn.addEventListener('click', () => {
                document.getElementById('hacUmreModule').style.display = 'none';
                document.getElementById('hacUmreModule').classList.remove('active');
                document.querySelector('.more-features').style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
    }
};

// 40 Hadis Module
const HadisModule = {
    allHadithCards: [],
    currentCategory: 'all',

    init() {
        const hadisCard = document.getElementById('hadisCard');
        const hadisBackBtn = document.getElementById('hadisBackBtn');
        const hadisSearch = document.getElementById('hadisSearch');
        const categoryBtns = document.querySelectorAll('.hadis-category-btn');
        const expandBtns = document.querySelectorAll('.hadis-expand-btn');

        // Store all hadith cards
        this.allHadithCards = document.querySelectorAll('.hadis-card');

        // Navigation
        if (hadisCard) {
            hadisCard.addEventListener('click', () => {
                document.querySelector('.more-features').style.display = 'none';
                document.querySelector('.hadis-module').style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        if (hadisBackBtn) {
            hadisBackBtn.addEventListener('click', () => {
                document.querySelector('.hadis-module').style.display = 'none';
                document.querySelector('.more-features').style.display = 'block';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Search functionality
        if (hadisSearch) {
            hadisSearch.addEventListener('input', (e) => {
                this.searchHadith(e.target.value);
            });
        }

        // Category filtering
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Filter by category
                const category = btn.dataset.category;
                this.currentCategory = category;
                this.filterByCategory(category);
            });
        });

        // Expand/collapse hadith details
        expandBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const hadisCard = e.target.closest('.hadis-card');
                const details = hadisCard.querySelector('.hadis-details');
                const button = e.target.closest('.hadis-expand-btn');
                const buttonText = button.querySelector('span');

                if (details.style.display === 'none' || !details.style.display) {
                    // Expand
                    details.style.display = 'block';
                    button.classList.add('expanded');
                    buttonText.textContent = 'Gizle';
                } else {
                    // Collapse
                    details.style.display = 'none';
                    button.classList.remove('expanded');
                    buttonText.textContent = 'Detayları Gör';
                }
            });
        });
    },

    searchHadith(query) {
        const searchTerm = query.toLowerCase().trim();

        this.allHadithCards.forEach(card => {
            const title = card.querySelector('.hadis-title h3').textContent.toLowerCase();
            const arabic = card.querySelector('.hadis-arabic p').textContent.toLowerCase();
            const meal = card.querySelector('.hadis-meal p').textContent.toLowerCase();
            const details = card.querySelector('.hadis-details p')?.textContent.toLowerCase() || '';

            const matches = title.includes(searchTerm) ||
                          arabic.includes(searchTerm) ||
                          meal.includes(searchTerm) ||
                          details.includes(searchTerm);

            // Also check category filter
            const categoryMatches = this.currentCategory === 'all' ||
                                  card.dataset.category === this.currentCategory;

            if (matches && categoryMatches) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Show "no results" message if needed
        this.updateNoResultsMessage(searchTerm);
    },

    filterByCategory(category) {
        const searchTerm = document.getElementById('hadisSearch')?.value.toLowerCase().trim() || '';

        this.allHadithCards.forEach(card => {
            const cardCategory = card.dataset.category;
            const categoryMatches = category === 'all' || cardCategory === category;

            // Also check search term
            let searchMatches = true;
            if (searchTerm) {
                const title = card.querySelector('.hadis-title h3').textContent.toLowerCase();
                const arabic = card.querySelector('.hadis-arabic p').textContent.toLowerCase();
                const meal = card.querySelector('.hadis-meal p').textContent.toLowerCase();
                const details = card.querySelector('.hadis-details p')?.textContent.toLowerCase() || '';

                searchMatches = title.includes(searchTerm) ||
                              arabic.includes(searchTerm) ||
                              meal.includes(searchTerm) ||
                              details.includes(searchTerm);
            }

            if (categoryMatches && searchMatches) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Update no results message
        this.updateNoResultsMessage(searchTerm);
    },

    updateNoResultsMessage(searchTerm) {
        const hadisGrid = document.querySelector('.hadis-grid');
        const visibleCards = Array.from(this.allHadithCards).filter(card => card.style.display !== 'none');

        // Remove existing no results message
        const existingMessage = hadisGrid?.querySelector('.no-results-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Show message if no cards visible
        if (hadisGrid && visibleCards.length === 0) {
            const message = document.createElement('div');
            message.className = 'no-results-message';
            message.style.cssText = 'grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);';
            message.innerHTML = searchTerm
                ? `<p style="font-size: 1.1rem; margin-bottom: 0.5rem;">🔍 Arama sonucu bulunamadı</p><p style="font-size: 0.9rem;">Lütfen farklı kelimelerle arayın</p>`
                : `<p style="font-size: 1.1rem; margin-bottom: 0.5rem;">Bu kategoride hadis bulunamadı</p>`;
            hadisGrid.appendChild(message);
        }
    }
};

// Smart Notifications Module
const SmartNotifications = {
    stats: {
        sent: 0,
        clicked: 0,
        streak: 0
    },

    init() {
        this.loadStats();
        this.updateStatsDisplay();
        this.setupSuggestions();
        this.setupPreview();
        this.setupTemplates();
        this.setupSpecialDays();
    },

    loadStats() {
        const saved = localStorage.getItem('notificationStats');
        if (saved) {
            this.stats = { ...this.stats, ...JSON.parse(saved) };
        }
    },

    saveStats() {
        localStorage.setItem('notificationStats', JSON.stringify(this.stats));
    },

    updateStatsDisplay() {
        document.getElementById('totalNotificationsSent').textContent = this.stats.sent;
        document.getElementById('notificationsClicked').textContent = this.stats.clicked;

        const successRate = this.stats.sent > 0 ?
            Math.round((this.stats.clicked / this.stats.sent) * 100) : 0;
        document.getElementById('notificationSuccessRate').textContent = `${successRate}%`;

        document.getElementById('notificationStreak').textContent = this.stats.streak;
    },

    incrementSent() {
        this.stats.sent++;
        this.saveStats();
        this.updateStatsDisplay();
    },

    incrementClicked() {
        this.stats.clicked++;
        this.saveStats();
        this.updateStatsDisplay();
    },

    setupSuggestions() {
        const applyButtons = document.querySelectorAll('.suggestion-apply-btn');
        applyButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const suggestion = e.target.getAttribute('data-suggestion');
                this.applySuggestion(suggestion);

                // Visual feedback
                e.target.textContent = '✓ Uygulandı';
                e.target.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

                setTimeout(() => {
                    e.target.closest('.suggestion-card').style.opacity = '0.6';
                    e.target.disabled = true;
                }, 500);
            });
        });
    },

    applySuggestion(suggestion) {
        switch(suggestion) {
            case 'fajr-10':
                const notificationBefore = document.getElementById('notificationBefore');
                if (notificationBefore) {
                    notificationBefore.value = '10';
                }
                break;
            case 'daily-summary':
                const dailyReminder = document.getElementById('dailyReminder');
                if (dailyReminder) {
                    dailyReminder.checked = true;
                }
                break;
        }
    },

    setupPreview() {
        const updateBtn = document.getElementById('updatePreview');
        const prayerSelect = document.getElementById('previewPrayer');

        if (updateBtn && prayerSelect) {
            updateBtn.addEventListener('click', () => {
                this.updatePreview(prayerSelect.value);
            });

            prayerSelect.addEventListener('change', () => {
                this.updatePreview(prayerSelect.value);
            });
        }
    },

    updatePreview(prayer) {
        const prayerData = {
            fajr: { name: 'İmsak', icon: '🌅', time: '05:30' },
            dhuhr: { name: 'Öğle', icon: '🕌', time: '12:30' },
            asr: { name: 'İkindi', icon: '🌤️', time: '15:45' },
            maghrib: { name: 'Akşam', icon: '🌆', time: '18:15' },
            isha: { name: 'Yatsı', icon: '🌙', time: '20:00' }
        };

        const data = prayerData[prayer];
        if (data) {
            document.getElementById('previewTitle').textContent = `${data.icon} ${data.name} Vakti Girdi`;
            document.getElementById('previewMessage').innerHTML = `
                Ankara - ${data.name} namazı vakti girmiştir.
                <br>Vakit: ${data.time}
            `;
        }
    },

    setupTemplates() {
        const templateRadios = document.querySelectorAll('input[name="notificationTemplate"]');
        templateRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                const template = e.target.value;
                localStorage.setItem('notificationTemplate', template);

                // Visual feedback
                const card = e.target.closest('.template-card');
                card.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 200);
            });
        });

        // Load saved template
        const savedTemplate = localStorage.getItem('notificationTemplate');
        if (savedTemplate) {
            const radio = document.querySelector(`input[name="notificationTemplate"][value="${savedTemplate}"]`);
            if (radio) radio.checked = true;
        }
    },

    setupSpecialDays() {
        const checkboxes = [
            'notifyFriday',
            'notifyRamadan',
            'notifyKandil',
            'notifyBayram'
        ];

        checkboxes.forEach(id => {
            const checkbox = document.getElementById(id);
            if (checkbox) {
                // Load saved state
                const saved = localStorage.getItem(id);
                if (saved !== null) {
                    checkbox.checked = saved === 'true';
                }

                // Save on change
                checkbox.addEventListener('change', (e) => {
                    localStorage.setItem(id, e.target.checked);

                    // Visual feedback
                    const item = e.target.closest('.special-day-item');
                    if (e.target.checked) {
                        item.style.background = 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)';
                        item.style.borderColor = '#06b6d4';
                    } else {
                        item.style.background = 'var(--surface)';
                        item.style.borderColor = 'var(--border)';
                    }
                });
            }
        });
    }
};

// Initialize More Features
document.addEventListener('DOMContentLoaded', () => {
    setupMoreFeatures();
    SmartNotifications.init();
    AbdestModule.init();
    NamazModule.init();
    ZekatModule.init();
    CamilerModule.init();
    MedyaModule.init();
    HacUmreModule.init();
    HadisModule.init();
});
