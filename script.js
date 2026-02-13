// ===== PASSWORD PROTECTION =====
function checkPassword() {
    var passwordInput = document.getElementById('password');
    var errorMsg = document.getElementById('errorMsg');
    var unlockBtn = document.getElementById('unlockBtn');
    
    if (!passwordInput) {
        alert('Error: Password field not found!');
        return;
    }
    
    var pass = passwordInput.value.trim();
    
    if (pass === '') {
        if (errorMsg) {
            errorMsg.innerHTML = '❌ Please enter a password baby';
            errorMsg.style.color = '#ffcccc';
        }
        passwordInput.focus();
        return;
    }
    
    var lowerPass = pass.toLowerCase();
    
    // ACCEPTED PASSWORDS - Change these as needed
    if (lowerPass === "14feb2023" || 
        lowerPass === "ourmemory" || 
        lowerPass === "preeya" || 
        pass === "14022023" || 
        lowerPass === "feb142023" ||
        lowerPass === "love") {
        
        if (errorMsg) {
            errorMsg.innerHTML = '✅ Correct! Redirecting...';
            errorMsg.style.color = '#ccffcc';
        }
        
        if (unlockBtn) unlockBtn.disabled = true;
        
        setTimeout(function() {
            window.location.href = 'day1.html';
        }, 1000);
        
    } else {
        if (errorMsg) {
            errorMsg.innerHTML = '❌ Wrong password baby, try again!';
            errorMsg.style.color = '#ffcccc';
        }
        
        passwordInput.value = '';
        passwordInput.focus();
    }
}

// ===== SHOW HINT =====
function showHint() {
    alert('💝 Try one of these:\n\n• 14feb2023\n• ourmemory\n• preeya\n• 14022023\n• feb142023\n• love');
}

// ===== NAVIGATION FUNCTIONS =====
function goToHome() {
    window.location.href = 'index.html';
}

function goToDay1() {
    window.location.href = 'day1.html';
}

function goToDay2() {
    window.location.href = 'day2.html';
}

function goToDay3() {
    window.location.href = 'day3.html';
}

function goToDay4() {
    window.location.href = 'day4.html';
}

function goToDay5() {
    window.location.href = 'day5.html';
}

function goToDay6() {
    window.location.href = 'day6.html';
}

function goToDay7() {
    window.location.href = 'day7.html';
}

function goToDay8() {
    window.location.href = 'day8.html';
}

// ===== LOVE COUNTER (Day 8) =====
function calculateLoveDays() {
    const startDate = new Date("2023-02-14"); // Change to your anniversary
    const today = new Date();
    const diffTime = today - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

function updateLoveCounter() {
    const counterElement = document.getElementById('loveCounter');
    if (counterElement) {
        const days = calculateLoveDays();
        let current = 0;
        const increment = Math.ceil(days / 50);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= days) {
                current = days;
                clearInterval(timer);
            }
            counterElement.textContent = current;
        }, 20);
    }
}

// ===== TEDDY DAY FUNCTIONS (Day 4) =====
let teddyHugCount = 0;

function sendTeddyHug() {
    teddyHugCount++;
    const hugElement = document.getElementById('teddyHugCount');
    if (hugElement) {
        hugElement.textContent = teddyHugCount;
    }
    
    // Create floating teddy bears
    for(let i = 0; i < 5; i++) {
        setTimeout(() => {
            createFloatingEmoji('🧸');
        }, i * 100);
    }
    
    // Show messages at milestones
    if (teddyHugCount === 1) {
        alert("🧸 First bear hug! I can feel the cuddles!");
    } else if (teddyHugCount === 5) {
        alert("🥰 5 bear hugs! You're so cuddly!");
    } else if (teddyHugCount === 10) {
        alert("💕 10 bear hugs! That's a teddy bear's worth!");
    } else if (teddyHugCount === 21) {
        alert("🧸 21 bear hugs! One for every day I've missed you!");
    }
}

// ===== HUG DAY FUNCTIONS (Day 6) =====
let hugCount = 0;

function sendHug() {
    hugCount++;
    const hugElement = document.getElementById('hugCount');
    if (hugElement) {
        hugElement.textContent = hugCount;
    }
    
    // Create floating hug emojis
    for(let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFloatingEmoji('🤗');
        }, i * 100);
    }
    
    // Show messages at milestones
    if (hugCount === 1) {
        alert("🤗 First hug received! Sending one right back to you! 🫂");
    } else if (hugCount === 5) {
        alert("🥰 5 hugs! You're wrapped in love!");
    } else if (hugCount === 10) {
        alert("💕 10 hugs! That's enough to last until we meet!");
    } else if (hugCount === 21) {
        alert("💝 21 hugs! One for every day I've been thinking of you!");
    }
}

// ===== KISS DAY FUNCTIONS (Day 7) =====
let kissCount = 0;

function sendKiss() {
    kissCount++;
    const kissElement = document.getElementById('kissCount');
    if (kissElement) {
        kissElement.textContent = kissCount;
    }
    
    // Create floating kisses
    for(let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFloatingEmoji('💋');
        }, i * 100);
    }
    
    // Show messages at milestones
    if (kissCount === 1) {
        alert("💋 First kiss! My heart is racing! 💓");
    } else if (kissCount === 5) {
        alert("💕 5 kisses! You're making me blush!");
    } else if (kissCount === 10) {
        alert("💘 10 kisses! I'm yours forever!");
    } else if (kissCount === 21) {
        alert("💋 21 kisses! One for every day I've loved you!");
    }
}

// ===== MOVING NO BUTTON (Day 8) =====
function moveButton(btn) {
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;
    
    btn.style.position = "fixed";
    btn.style.top = Math.random() * maxY + "px";
    btn.style.left = Math.random() * maxX + "px";
    btn.style.zIndex = "1000";
    
    btn.style.transform = "scale(1.1)";
    setTimeout(() => {
        btn.style.transform = "scale(1)";
    }, 200);
}

// ===== ACCEPT LOVE (Day 8) =====
function acceptLove() {
    alert("Yesss! ❤️ Forever together! Now go eat some chocolate 🍫");
    
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            createFloatingHeart();
        }, i * 100);
    }
}

// ===== FLOATING EMOJIS =====
function createFloatingHeart() {
    createFloatingEmoji('❤️');
}

function createFloatingEmoji(emoji) {
    const div = document.createElement('div');
    div.innerHTML = emoji;
    div.style.position = 'fixed';
    div.style.left = Math.random() * 100 + '%';
    div.style.bottom = '0';
    div.style.fontSize = (Math.random() * 30 + 20) + 'px';
    div.style.opacity = '0.8';
    div.style.pointerEvents = 'none';
    div.style.zIndex = '1000';
    div.style.animation = `floatHeart ${Math.random() * 3 + 3}s linear forwards`;
    
    document.body.appendChild(div);
    
    setTimeout(() => {
        div.remove();
    }, 6000);
}

// ===== MUSIC CONTROL =====
let musicEnabled = false;

function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.querySelector('.music-btn');
    
    if (music) {
        if (music.paused) {
            music.play().catch(e => console.log('Music play prevented'));
            if (btn) btn.textContent = '🔊';
        } else {
            music.pause();
            if (btn) btn.textContent = '🔈';
        }
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Focus on password field if on index page
    var passwordInput = document.getElementById('password');
    if (passwordInput) {
        passwordInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                checkPassword();
            }
        });
        setTimeout(function() {
            passwordInput.focus();
        }, 500);
    }
    
    // Update love counter on day8
    if (window.location.href.includes('day8.html')) {
        updateLoveCounter();
    }
    
    // Initialize teddy hug counter on day4
    if (window.location.href.includes('day4.html')) {
        teddyHugCount = 0;
        const teddyElement = document.getElementById('teddyHugCount');
        if (teddyElement) teddyElement.textContent = '0';
    }
    
    // Initialize hug counter on day6
    if (window.location.href.includes('day6.html')) {
        hugCount = 0;
        const hugElement = document.getElementById('hugCount');
        if (hugElement) hugElement.textContent = '0';
    }
    
    // Initialize kiss counter on day7
    if (window.location.href.includes('day7.html')) {
        kissCount = 0;
        const kissElement = document.getElementById('kissCount');
        if (kissElement) kissElement.textContent = '0';
    }
    
    // Set music button state
    const music = document.getElementById('bgMusic');
    const btn = document.querySelector('.music-btn');
    if (music && btn) {
        btn.textContent = music.paused ? '🔈' : '🔊';
    }
});

// ===== MUSIC INIT ON FIRST CLICK =====
document.addEventListener('click', function initMusic() {
    const music = document.getElementById('bgMusic');
    if (music && music.paused && !musicEnabled) {
        music.play().catch(() => {});
        musicEnabled = true;
        const btn = document.querySelector('.music-btn');
        if (btn) btn.textContent = '🔊';
    }
}, { once: true });

// ===== PREVENT RIGHT CLICK (optional) =====
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// ===== MAKE FUNCTIONS GLOBALLY AVAILABLE =====
window.checkPassword = checkPassword;
window.showHint = showHint;
window.goToHome = goToHome;
window.goToDay1 = goToDay1;
window.goToDay2 = goToDay2;
window.goToDay3 = goToDay3;
window.goToDay4 = goToDay4;
window.goToDay5 = goToDay5;
window.goToDay6 = goToDay6;
window.goToDay7 = goToDay7;
window.goToDay8 = goToDay8;
window.toggleMusic = toggleMusic;
window.moveButton = moveButton;
window.acceptLove = acceptLove;
window.sendTeddyHug = sendTeddyHug;
window.sendHug = sendHug;
window.sendKiss = sendKiss;