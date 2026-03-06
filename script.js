// Countdown Timer untuk Jadwal Imsakiyah
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    
    // Set target waktu Maghrib (contoh: 18:12)
    const now = new Date();
    const maghrib = new Date();
    maghrib.setHours(18, 12, 0, 0);
    
    // Jika sudah lewat maghrib hari ini, set ke maghrib besok
    if (now > maghrib) {
        maghrib.setDate(maghrib.getDate() + 1);
    }
    
    const diff = maghrib - now;
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    countdownElement.textContent = formattedTime;
}

// Update countdown setiap detik
setInterval(updateCountdown, 1000);
updateCountdown();

// Menu click handlers (bisa dikembangkan lebih lanjut)
document.querySelectorAll('.grid > div').forEach(menu => {
    menu.addEventListener('click', function() {
        const menuName = this.querySelector('p').textContent;
        console.log(`Menu ${menuName} diklik`);
        // Tambahkan navigasi atau aksi lainnya di sini
    });
});
