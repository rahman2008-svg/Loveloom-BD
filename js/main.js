// ==================== LoveLoom BD - Main JavaScript ====================

let currentType = 'love-message';
let darkMode = false;

// Tailwind Script (যদি দরকার হয়)
function initTailwind() {
  // Tailwind CDN already loaded in HTML
}

// ডার্ক মোড টগল
function toggleDarkMode() {
  darkMode = !darkMode;
  document.documentElement.classList.toggle('dark', darkMode);
  localStorage.setItem('darkMode', darkMode);
}

// কনফেটি অ্যানিমেশন
function launchConfetti() {
  confetti({
    particleCount: 200,
    spread: 80,
    origin: { y: 0.6 }
  });
  
  // আরও কনফেটি
  setTimeout(() => {
    confetti({
      particleCount: 100,
      angle: 60,
      spread: 55,
      origin: { x: 0 }
    });
  }, 300);
}

// URL থেকে প্যারামিটার নেওয়া
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// হোমপেজ বা এডিটর লোড হলে
window.onload = function() {
  // ডার্ক মোড চেক
  if (localStorage.getItem('darkMode') === 'true') {
    darkMode = true;
    document.documentElement.classList.add('dark');
  }

  // Editor পেজে থাকলে টেমপ্লেট লোড করো
  if (window.location.pathname.includes('editor.html')) {
    currentType = getQueryParam('type') || 'love-message';
    if (typeof loadTemplate === 'function') {
      loadTemplate(currentType);
    }
  }

  // View পেজে থাকলে কনফেটি চালু করো
  if (window.location.pathname.includes('view')) {
    setTimeout(launchConfetti, 800);
  }
};

// লিংক জেনারেট করা
function generateLink() {
  const data = {
    type: currentType,
    name1: document.getElementById('name1')?.value || 'তোমার নাম',
    name2: document.getElementById('name2')?.value || 'প্রিয়জনের নাম',
    message: document.getElementById('message')?.value || 'তোমাকে অনেক ভালোবাসি ❤️',
    bg: document.getElementById('bgColor')?.value || 'from-pink-500 to-rose-500'
  };

  const encoded = btoa(JSON.stringify(data));
  const baseUrl = window.location.origin;
  const link = `\( {baseUrl}/view/?data= \){encoded}`;

  // কপি টু ক্লিপবোর্ড
  navigator.clipboard.writeText(link).then(() => {
    alert(`✅ লিংক তৈরি হয়েছে এবং কপি হয়েছে!\n\n${link}\n\nশেয়ার করুন ❤️`);
  });

  launchConfetti();
}

// WhatsApp শেয়ার
function shareWhatsApp() {
  const text = "❤️ তোমার জন্য স্পেশাল লাভ মেসেজ\n" + window.location.href;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
}

// Facebook শেয়ার
function shareFacebook() {
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
}

// মিউজিক টগল (view পেজের জন্য)
function toggleMusic() {
  const audio = document.getElementById('bgMusic');
  if (audio) {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
}

// এক্সপোর্ট করা (যাতে অন্য ফাইল থেকে কল করা যায়)
window.toggleDarkMode = toggleDarkMode;
window.generateLink = generateLink;
window.shareWhatsApp = shareWhatsApp;
window.shareFacebook = shareFacebook;
window.toggleMusic = toggleMusic;
window.launchConfetti = launchConfetti;
