const x = 202

// Memeriksa apakah bilangan genap atau tidak
if (x < 0) {
        console.log("Tidak bisa input bilangan negatif");
    } else if (x % 2 !== 0) {
        console.log("Tidak bisa input bilangan ganjil");
    } else {
  // Menghitung akar pangkat 2 dari x
        const akarPangkat2 = Math.sqrt(x);
        console.log(`Akar pangkat 2 dari ${x} adalah ${akarPangkat2}`);
    }