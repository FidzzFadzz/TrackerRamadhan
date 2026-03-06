// Fungsi untuk set active navigation
function setActiveNav(page) {
    // Ambil semua tombol navigation
    const navButtons = document.querySelectorAll('.nav-button');
    
    // Remove active class dari semua tombol
    navButtons.forEach(btn => {
        btn.classList.remove('nav-active');
    });
    
    // Tambah active class ke tombol yang sesuai
    const activeButton = document.querySelector(`[data-page="${page}"]`);
    if (activeButton) {
        activeButton.classList.add('nav-active');
    }
}

// Deteksi halaman saat ini dan set active nav
function initializeNav() {
    const currentPage = window.location.pathname;
    
    if (currentPage.includes('kalender.html')) {
        setActiveNav('kalender');
    } else if (currentPage.includes('index.html') || currentPage === '/' || currentPage.endsWith('/')) {
        setActiveNav('home');
    } else if (currentPage.includes('profil.html')) {
        setActiveNav('profil');
    } else {
        // Jika di halaman lain (Pages/...), set home sebagai default
        setActiveNav('home');
    }
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', initializeNav);
