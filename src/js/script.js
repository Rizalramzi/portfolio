document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen a#konten
    const scrollToContentLink = document.querySelector('a[href="#skills"]');

    // Fungsi untuk melakukan smooth scroll
    function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    }

    // Event listener untuk klik pada elemen a#konten
    scrollToContentLink.addEventListener('click', function(event) {
        event.preventDefault(); // Mencegah tindakan default link
        const targetId = this.getAttribute('href');
        smoothScroll(targetId);
    });
});

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    // Simpan preferensi pengguna di localStorage
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }

  // Cek preferensi pengguna sebelumnya
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  }

  function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;  // Mengubah format waktu menjadi 12 jam
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const currentTime = hours + ':' + minutes  + ':' + seconds + ' ' + ampm;
    document.getElementById('time').textContent = currentTime;
  }

  // Update waktu setiap detik
  setInterval(updateTime, 1000);
  updateTime(); 