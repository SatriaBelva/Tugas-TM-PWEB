const dataWilayah = {
    "Aceh": ["Banda Aceh", "Lhokseumawe", "Langsa", "Sabang", "Subulussalam"],
    "Sumatera Utara": ["Medan", "Binjai", "Tebing Tinggi", "Pematang Siantar", "Padang Sidempuan"],
    "Sumatera Barat": ["Padang", "Bukittinggi", "Payakumbuh", "Pariaman", "Sawahlunto"],
    "Riau": ["Pekanbaru", "Dumai"],
    "Kepulauan Riau": ["Tanjung Pinang", "Batam"],
    "Jambi": ["Jambi", "Sungaipenuh"],
    "Sumatera Selatan": ["Palembang", "Lubuklinggau", "Prabumulih", "Pagar Alam"],
    "Bengkulu": ["Bengkulu"],
    "Lampung": ["Bandar Lampung", "Metro"],
    "Bangka Belitung": ["Pangkalpinang"],
    "Banten": ["Serang", "Cilegon", "Tangerang", "Tangerang Selatan"],
    "DKI Jakarta": ["Jakarta Pusat", "Jakarta Utara", "Jakarta Barat", "Jakarta Timur", "Jakarta Selatan"],
    "Jawa Barat": ["Bandung", "Bekasi", "Bogor", "Depok", "Cimahi", "Sukabumi", "Tasikmalaya", "Banjar"],
    "Jawa Tengah": ["Semarang", "Solo", "Magelang", "Pekalongan", "Tegal", "Salatiga", "Cilacap", "Purwokerto"],
    "DI Yogyakarta": ["Yogyakarta"],
    "Jawa Timur": ["Surabaya", "Malang", "Kediri", "Blitar", "Madiun", "Banyuwangi", "Jember", "Pasuruan", "Probolinggo"],
    "Bali": ["Denpasar"],
    "Nusa Tenggara Barat": ["Mataram", "Bima"],
    "Nusa Tenggara Timur": ["Kupang"],
    "Kalimantan Barat": ["Pontianak", "Singkawang"],
    "Kalimantan Tengah": ["Palangka Raya"],
    "Kalimantan Selatan": ["Banjarmasin", "Banjarbaru"],
    "Kalimantan Timur": ["Samarinda", "Balikpapan", "Bontang"],
    "Kalimantan Utara": ["Tanjung Selor"],
    "Sulawesi Utara": ["Manado", "Bitung", "Tomohon", "Kotamobagu"],
    "Sulawesi Tengah": ["Palu"],
    "Sulawesi Selatan": ["Makassar", "Parepare", "Palopo"],
    "Sulawesi Tenggara": ["Kendari", "Baubau"],
    "Gorontalo": ["Gorontalo"],
    "Sulawesi Barat": ["Mamuju"],
    "Maluku": ["Ambon", "Tual"],
    "Maluku Utara": ["Ternate", "Tidore Kepulauan"],
    "Papua": ["Jayapura"],
    "Papua Barat": ["Manokwari"],
    "Papua Selatan": ["Merauke"],
    "Papua Pegunungan": ["Wamena"],
    "Papua Tengah": ["Nabire"],
    "Papua Barat Daya": ["Sorong"]
};

const dataFakultas = {
    "Fakultas Ilmu Komputer": ["Sistem Informasi", "Informatika", "Teknologi Informasi"],
    "Fakultas Pertanian": ["Agroteknologi", "Agribisnis ", "Penyuluhan Pertanian", "Peternakan", "Ilmu Pertanian/Perkebunan", "Ilmu Tanah"],
    "Fakultas Farmasi": ["Farmasi"],
    "Fakultas Kedokteran Gigi": ["Pendidikan Dokter Gigi"],
    "Fakultas Teknik": ["Teknik Mesin", "Teknik Elektro", "Teknik  Sipil", "Teknik Pertambangan", "Teknik Kimia", "Teknik Lingkungan"],
    "Fakultas Kesehatan Masyarakat": ["Kesehatan Masyarakat", "Gizi"],
    "Fakultas Kedokteran": ["Pendidikan Dokter"],
    "Fakultas Teknologi Pertanian": ["Teknik Pertanian", "Ilmu Teknik"],
    "Fakultas Matematika dan Ilmu Pengetahuan Alam": ["Kimia", "Matematika", "Biologi", "Fisika"],
    "Fakultas Keperawatan": ["Ilmu Keperawatan"],
    "Fakultas Ilmu Sosial dan Ilmu Politik": ["Kesejahteraan Sosial", "Hubungan Internasional ", "Sosiologi", "Administrasi Negara (Publik)", "Administrasi Bisnis (Niaga)", "Perpajakan"],
    "Fakultas Ilmu Budaya": ["Sejarah", "Sastra Inggris", "Sastra Indonesia", "Film dan Televisi"],
    "Fakultas Kegurusan dan Ilmu Pendidikan": ["Sejarah", "Pendidikan Bahasa Indonesia ", "Pendidikan Bahasa Inggris", "Pendidikan Guru Sekolah Dasar", "Pendidikan Anak Usia Dini", "Pendidikan Geografi"],
    "Fakultas Ekonomi dan Bisnis": ["Akuntansi", "Manajemen ", "Ekonomi Syariah", "Ekonomi Pembangunan", "Ilmu Administrasi"],
    "Fakultas Hukum": ["Ilmu Hukum"],
};

const provinsiSelect = document.getElementById("provinsi");
const kotaSelect = document.getElementById("kota");
const fakultasSelect = document.getElementById("fakultas");
const prodiSelect = document.getElementById("prodi");

provinsiSelect.addEventListener("change", function () {
    const selectedProvinsi = provinsiSelect.value;
    kotaSelect.innerHTML = "<option>Pilih Kabupaten/Kota</option>"; 
    
    if (selectedProvinsi in dataWilayah) {
        dataWilayah[selectedProvinsi].forEach(kota => {
            let option = document.createElement("option");
            option.value = kota;
            option.textContent = kota;
            kotaSelect.appendChild(option);
        });
    }
});

fakultasSelect.addEventListener("change", function () {
    const selectedFakultas = fakultasSelect.value;
    prodiSelect.innerHTML = "<option>Pilih Program Studi</option>"; 
    
    if (selectedFakultas in dataFakultas) {
        dataFakultas[selectedFakultas].forEach(prodi => {
            let option = document.createElement("option");
            option.value = prodi;
            option.textContent = prodi;
            prodiSelect.appendChild(option);
        });
    }
});

window.onload = function () {
    // Mengisi dropdown provinsi
    provinsiSelect.innerHTML = "<option>Pilih Provinsi</option>";
    Object.keys(dataWilayah).forEach(provinsi => {
        let option = document.createElement("option");
        option.value = provinsi;
        option.textContent = provinsi;
        provinsiSelect.appendChild(option);
    });

    // Mengisi dropdown fakultas
    fakultasSelect.innerHTML = "<option>Pilih Fakultas</option>";
    Object.keys(dataFakultas).forEach(fakultas => {
        let option = document.createElement("option");
        option.value = fakultas;
        option.textContent = fakultas;
        fakultasSelect.appendChild(option);
    });
};

