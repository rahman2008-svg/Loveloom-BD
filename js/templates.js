// ==================== LoveLoom BD - Templates ====================

function loadTemplate(type) {
  const container = document.getElementById('formContainer');
  const title = document.getElementById('pageTitle');
  container.innerHTML = '';

  if (type === 'love-message') {
    title.textContent = '💌 Love Message';
    container.innerHTML = `
      <div class="space-y-5">
        <input id="name1" type="text" placeholder="তোমার নাম" class="w-full p-4 rounded-2xl border focus:outline-none focus:border-pink-500">
        <input id="name2" type="text" placeholder="প্রিয়জনের নাম" class="w-full p-4 rounded-2xl border focus:outline-none focus:border-pink-500">
        <textarea id="message" rows="6" placeholder="তোমার ভালোবাসার কথা লিখো..." class="w-full p-4 rounded-2xl border focus:outline-none focus:border-pink-500"></textarea>
        
        <select id="bgColor" class="w-full p-4 rounded-2xl border">
          <option value="from-pink-500 to-rose-500">🌸 পিঙ্ক রোজ</option>
          <option value="from-purple-500 to-violet-600">💜 পার্পল</option>
          <option value="from-blue-500 to-cyan-400">💙 ব্লু সায়ান</option>
          <option value="from-red-500 to-orange-500">❤️ রেড অরেঞ্জ</option>
        </select>
      </div>
    `;
  } 
  else if (type === 'birthday') {
    title.textContent = '🎂 Birthday Card';
    container.innerHTML = `
      <div class="space-y-5">
        <input id="name1" type="text" placeholder="জন্মদিনের ব্যক্তির নাম" class="w-full p-4 rounded-2xl border">
        <input id="age" type="text" placeholder="বয়স (যেমন: ২২)" class="w-full p-4 rounded-2xl border">
        <textarea id="message" rows="5" placeholder="জন্মদিনের শুভেচ্ছা লিখো..." class="w-full p-4 rounded-2xl border"></textarea>
        
        <select id="bgColor" class="w-full p-4 rounded-2xl border">
          <option value="from-yellow-400 to-pink-500">🎉 হ্যাপি বার্থডে</option>
          <option value="from-purple-500 to-pink-500">✨ স্পেশাল</option>
          <option value="from-blue-400 to-indigo-500">🌊 কুল</option>
        </select>
      </div>
    `;
  } 
  else if (type === 'qr-code') {
    title.textContent = '📱 Love QR Code';
    container.innerHTML = `
      <div class="space-y-5">
        <input id="name1" type="text" placeholder="তোমার নাম" class="w-full p-4 rounded-2xl border">
        <input id="name2" type="text" placeholder="প্রিয়জনের নাম" class="w-full p-4 rounded-2xl border">
        <textarea id="message" rows="4" placeholder="QR এর ভিতরে মেসেজ" class="w-full p-4 rounded-2xl border"></textarea>
      </div>
      <p class="text-sm text-gray-500 mt-3">⚠️ QR Code ফিচার শীঘ্রই আসছে</p>
    `;
  }

  // লাইভ প্রিভিউ আপডেট
  const inputs = container.querySelectorAll('input, textarea, select');
  inputs.forEach(input => {
    input.addEventListener('input', () => updateLivePreview(type));
  });
}

// লাইভ প্রিভিউ (সাধারণ)
function updateLivePreview(type) {
  // পরে আরও উন্নত করা যাবে
}

window.loadTemplate = loadTemplate;
