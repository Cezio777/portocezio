// Teks yang akan diketik otomatis
const text = "Computer Vision Specialist";
const typingElement = document.getElementById("typing-text");
let i = 0;

// Fungsi untuk mengetik huruf satu per satu
function typeWriter() {
    if (i < text.length) {
        typingElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Angka 100 adalah kecepatan mengetik (milidetik)
    }
}

// Menjalankan fungsi setelah seluruh elemen HTML selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeWriter, 800); // Jeda 0.8 detik sebelum mulai mengetik
});