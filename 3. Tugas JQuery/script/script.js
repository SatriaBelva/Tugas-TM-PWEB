function validateForm() {
    let isValid = true;
    function validateRequiredElement(selector) {
        const $element = $(selector);
        if ($element.val() === '' || $element.val() === 'Pilih' || $element.val() === null) {
            $element.css({
                "border": "1px solid red",
                "border-radius": "4px"
            });
            return false;
        } else {
            $element.css({
                "border": "",
                "border-radius": ""
            });
            return true;
        }
    }

    $('select[required], input[required]').each(function () {
        const isValidElement = validateRequiredElement(this);
        if (!isValidElement) isValid = false;
    });

    if (!validateRequiredElement("#program_studi")) {
        isValid = false;
    }

    if ($("#provinsi").val() === "tes" || $("#kota").val() === "tes") {
        const $invalidField = $("#provinsi").val() === "tes" ? "#provinsi" : "#kota";
        $( $invalidField ).css({
            "border": "1px solid red",
            "border-radius": "4px"
        });
        isValid = false;
    } else {
        $("#provinsi, #kota").css({
            "border": "",
            "border-radius": ""
        });
    }

    if (!validateRequiredElement("#fakultas")) {
        isValid = false;
    }

    if (!$("input[name='gender']:checked").length) {
        $(".radio-group").css({
            "border": "1px solid red",
            "border-radius": "4px",
            "padding-top": "4px",
            "padding-bottom": "4px"
        });
        isValid = false;
    } else {
        $(".radio-group").css("border", "");
    }

    if (!isValid) {
        alert('Harap lengkapi semua form yang wajib diisi!');
        return false;
    }

    return true;
}


$(document).ready(function () {
    const dataWilayah = {
        "Aceh": ["Banda Aceh", "Lhokseumawe", "Langsa", "Sabang", "Subulussalam", "Aceh Barat", "Aceh Barat Daya", "Aceh Besar", "Aceh Jaya", "Aceh Selatan", "Aceh Singkil", "Aceh Tamiang", "Aceh Tengah", "Aceh Tenggara", "Aceh Timur", "Aceh Utara", "Bener Meriah", "Bireuen", "Gayo Lues", "Nagan Raya", "Pidie", "Pidie Jaya", "Simeulue"],
        "Sumatera Utara": ["Medan", "Binjai", "Tebing Tinggi", "Pematang Siantar", "Padang Sidempuan", "Gunungsitoli", "Asahan", "Batu Bara", "Dairi", "Deli Serdang", "Humbang Hasundutan", "Karo", "Labuhanbatu", "Labuhanbatu Selatan", "Labuhanbatu Utara", "Langkat", "Mandailing Natal", "Nias", "Nias Barat", "Nias Selatan", "Nias Utara", "Pakpak Bharat", "Samosir", "Serdang Bedagai", "Simalungun", "Tapanuli Selatan", "Tapanuli Tengah", "Tapanuli Utara", "Toba"],
        "Sumatera Barat": ["Padang", "Bukittinggi", "Payakumbuh", "Pariaman", "Sawahlunto", "Padang Panjang", "Solok", "Agam", "Dharmasraya", "Kepulauan Mentawai", "Lima Puluh Kota", "Pasaman", "Pasaman Barat", "Pesisir Selatan", "Sijunjung", "Solok Selatan", "Tanah Datar"],
        "Riau": ["Pekanbaru", "Dumai", "Bengkalis", "Indragiri Hilir", "Indragiri Hulu", "Kampar", "Kuantan Singingi", "Pelalawan", "Rokan Hilir", "Rokan Hulu", "Siak", "Kepulauan Meranti"],
        "Kepulauan Riau": ["Tanjung Pinang", "Batam", "Bintan", "Karimun", "Lingga", "Natuna", "Kepulauan Anambas"],
        "Jambi": ["Jambi", "Sungaipenuh", "Batang Hari", "Bungo", "Kerinci", "Merangin", "Muaro Jambi", "Sarolangun", "Tanjung Jabung Barat", "Tanjung Jabung Timur", "Tebo"],
        "Sumatera Selatan": ["Palembang", "Lubuklinggau", "Prabumulih", "Pagar Alam", "Banyuasin", "Empat Lawang", "Lahat", "Muara Enim", "Musi Banyuasin", "Musi Rawas", "Musi Rawas Utara", "Ogan Ilir", "Ogan Komering Ilir", "Ogan Komering Ulu", "Ogan Komering Ulu Selatan", "Ogan Komering Ulu Timur", "Penukal Abab Lematang Ilir"],
        "Bengkulu": ["Bengkulu", "Bengkulu Selatan", "Bengkulu Tengah", "Bengkulu Utara", "Kaur", "Kepahiang", "Lebong", "Mukomuko", "Rejang Lebong", "Seluma"],
        "Lampung": ["Bandar Lampung", "Metro", "Lampung Selatan", "Lampung Tengah", "Lampung Utara", "Lampung Barat", "Tulang Bawang", "Tulang Bawang Barat", "Way Kanan", "Mesuji", "Pesawaran", "Pringsewu", "Pesisir Barat", "Tanggamus"],
        "Bangka Belitung": ["Pangkalpinang", "Bangka", "Bangka Barat", "Bangka Tengah", "Bangka Selatan", "Belitung", "Belitung Timur"],
        "Banten": ["Serang", "Cilegon", "Tangerang", "Tangerang Selatan", "Lebak", "Pandeglang"],
        "DKI Jakarta": ["Jakarta Pusat", "Jakarta Utara", "Jakarta Barat", "Jakarta Timur", "Jakarta Selatan"],
        "Jawa Barat": ["Bandung", "Bekasi", "Bogor", "Depok", "Cimahi", "Sukabumi", "Tasikmalaya", "Banjar", "Garut", "Cianjur", "Purwakarta", "Subang", "Indramayu", "Cirebon", "Majalengka", "Kuningan", "Pangandaran", "Sumedang", "Karawang"],
        "Jawa Tengah": ["Semarang", "Surakarta", "Magelang", "Pekalongan", "Tegal", "Salatiga", "Cilacap", "Purwokerto", "Kudus", "Pati", "Jepara", "Rembang", "Blora","Demak", "Kendal", "Batang", "Pemalang", "Brebes", "Temanggung", "Wonosobo", "Banjarnegara", "Purbalingga", "Boyolali", "Klaten","Sukoharjo", "Wonogiri", "Karanganyar", "Grobogan"],
        "DI Yogyakarta": ["Yogyakarta", "Sleman", "Bantul", "Gunungkidul", "Kulon Progo"],
        "Jawa Timur": ["Surabaya", "Malang", "Kediri", "Blitar", "Madiun", "Batu", "Pasuruan", "Probolinggo", "Mojokerto","Bangkalan", "Banyuwangi", "Blitar", "Bojonegoro", "Bondowoso", "Gresik", "Jember", "Jombang", "Kediri", "Lamongan", "Lumajang", "Madiun", "Magetan", "Malang", "Mojokerto", "Nganjuk", "Ngawi", "Pacitan", "Pamekasan", "Pasuruan", "Ponorogo", "Probolinggo", "Sampang", "Sidoarjo", "Situbondo", "Sumenep", "Trenggalek", "Tuban", "Tulungagung"],        
        "Bali": ["Denpasar", "Badung", "Bangli", "Buleleng", "Gianyar", "Jembrana", "Karangasem", "Klungkung", "Tabanan"],
        "Nusa Tenggara Barat": ["Mataram", "Bima", "Lombok Barat", "Lombok Tengah", "Lombok Timur", "Lombok Utara", "Sumbawa", "Sumbawa Barat", "Dompu"],
        "Nusa Tenggara Timur": ["Kupang", "Alor", "Belu", "Ende", "Flores Timur", "Kupang (Kabupaten)", "Lembata", "Manggarai", "Manggarai Barat", "Manggarai Timur", "Nagekeo", "Ngada", "Rote Ndao", "Sabu Raijua", "Sikka", "Sumba Barat", "Sumba Barat Daya", "Sumba Tengah", "Sumba Timur", "Timor Tengah Selatan", "Timor Tengah Utara"],
        "Kalimantan Barat": ["Pontianak", "Singkawang", "Mempawah", "Ketapang", "Sambas", "Bengkayang", "Landak", "Sanggau", "Sekadau", "Melawi", "Kapuas Hulu", "Kayong Utara", "Kubu Raya"],
        "Kalimantan Tengah": ["Palangka Raya", "Kotawaringin Barat", "Kotawaringin Timur", "Kapuas", "Barito Selatan", "Barito Utara", "Sukamara", "Lamandau", "Seruyan", "Katingan", "Gunung Mas", "Pulang Pisau", "Murung Raya", "Barito Timur"],
        "Kalimantan Selatan": ["Banjarmasin", "Banjarbaru", "Banjar", "Tapin", "Hulu Sungai Selatan", "Hulu Sungai Tengah", "Hulu Sungai Utara", "Balangan", "Tabalong", "Tanah Laut", "Tanah Bumbu", "Kotabaru"],
        "Kalimantan Timur": ["Samarinda", "Balikpapan", "Bontang", "Kutai Kartanegara", "Kutai Timur", "Kutai Barat", "Berau", "Paser", "Mahakam Ulu", "Penajam Paser Utara"],
        "Kalimantan Utara": ["Tanjung Selor", "Tarakan", "Malinau", "Nunukan", "Bulungan", "Tana Tidung"],
        "Sulawesi Utara": ["Manado", "Bitung", "Tomohon", "Kotamobagu", "Bolaang Mongondow", "Bolaang Mongondow Selatan", "Bolaang Mongondow Timur", "Bolaang Mongondow Utara", "Kepulauan Sangihe", "Kepulauan Sitaro", "Kepulauan Talaud", "Minahasa", "Minahasa Selatan", "Minahasa Tenggara", "Minahasa Utara"],
        "Sulawesi Tengah": ["Palu", "Banggai", "Banggai Kepulauan", "Banggai Laut", "Buol", "Donggala", "Morowali", "Morowali Utara", "Parigi Moutong", "Poso", "Sigi", "Tojo Una-Una", "Tolitoli"],
        "Sulawesi Selatan": ["Makassar", "Parepare", "Palopo", "Bantaeng", "Barru", "Bone", "Bulukumba", "Enrekang", "Gowa", "Jeneponto", "Luwu", "Luwu Timur", "Luwu Utara", "Maros", "Pangkajene dan Kepulauan", "Pinrang", "Selayar", "Sidenreng Rappang", "Sinjai", "Soppeng", "Takalar", "Tana Toraja", "Toraja Utara", "Wajo"],
        "Sulawesi Tenggara": ["Kendari", "Baubau", "Bombana", "Buton", "Buton Selatan", "Buton Tengah", "Buton Utara", "Kolaka", "Kolaka Timur", "Kolaka Utara", "Konawe", "Konawe Kepulauan", "Konawe Selatan", "Konawe Utara", "Muna", "Muna Barat", "Wakatobi"],
        "Gorontalo": ["Gorontalo", "Boalemo", "Bone Bolango", "Gorontalo (Kabupaten)", "Gorontalo Utara", "Pohuwato"],
        "Sulawesi Barat": ["Ambon", "Tual", "Buru", "Buru Selatan", "Kepulauan Aru", "Maluku Barat Daya", "Maluku Tengah", "Maluku Tenggara", "Maluku Tenggara Barat", "Seram Bagian Barat", "Seram Bagian Timur"],
        "Maluku": ["Ambon", "Tual", "Buru", "Buru Selatan", "Kepulauan Aru", "Maluku Barat Daya", "Maluku Tengah", "Maluku Tenggara", "Maluku Tenggara Barat", "Seram Bagian Barat", "Seram Bagian Timur"],
        "Maluku Utara": ["Ternate", "Tidore Kepulauan", "Halmahera Barat", "Halmahera Tengah", "Halmahera Timur", "Halmahera Selatan", "Halmahera Utara", "Pulau Morotai", "Pulau Taliabu"],
        "Papua": ["Jayapura", "Jayapura (Kabupaten)", "Keerom", "Mamberamo Raya", "Sarmi", "Supiori", "Biak Numfor", "Waropen"],
        "Papua Barat": ["Manokwari", "Fakfak", "Kaimana", "Pegunungan Arfak", "Manokwari Selatan", "Teluk Bintuni", "Teluk Wondama"],
        "Papua Selatan": ["Merauke", "Mappi", "Asmat", "Boven Digoel"],
        "Papua Pegunungan": ["Wamena", "Jayawijaya", "Yalimo", "Lanny Jaya", "Nduga", "Mamberamo Tengah", "Tolikara", "Pegunungan Bintang"],
        "Papua Tengah": ["Nabire", "Intan Jaya", "Mimika", "Deiyai", "Paniai", "Dogiyai", "Puncak", "Puncak Jaya"],
        "Papua Barat Daya": ["Sorong", "Tambrauw", "Sorong Selatan", "Raja Ampat", "Maybrat", "Kota Sorong"]
    };

    const dataFakultas = {
        "Fakultas Ilmu Komputer": ["Sistem Informasi", "Informatika", "Teknologi Informasi"],
        "Fakultas Pertanian": ["Agroteknologi", "Agribisnis", "Penyuluhan Pertanian", "Peternakan", "Ilmu Pertanian/Perkebunan", "Ilmu Tanah"],
        "Fakultas Farmasi": ["Farmasi"],
        "Fakultas Kedokteran Gigi": ["Pendidikan Dokter Gigi"],
        "Fakultas Teknik": ["Teknik Mesin", "Teknik Elektro", "Teknik Sipil", "Teknik Pertambangan", "Teknik Kimia", "Teknik Lingkungan"],
        "Fakultas Kesehatan Masyarakat": ["Kesehatan Masyarakat", "Gizi"],
        "Fakultas Kedokteran": ["Pendidikan Dokter"],
        "Fakultas Teknologi Pertanian": ["Teknik Pertanian", "Ilmu Teknik"],
        "Fakultas Matematika dan Ilmu Pengetahuan Alam": ["Kimia", "Matematika", "Biologi", "Fisika"],
        "Fakultas Keperawatan": ["Ilmu Keperawatan"],
        "Fakultas Ilmu Sosial dan Ilmu Politik": ["Kesejahteraan Sosial", "Hubungan Internasional", "Sosiologi", "Administrasi Negara (Publik)", "Administrasi Bisnis (Niaga)", "Perpajakan"],
        "Fakultas Ilmu Budaya": ["Sejarah", "Sastra Inggris", "Sastra Indonesia", "Film dan Televisi"],
        "Fakultas Keguruan dan Ilmu Pendidikan": ["Sejarah", "Pendidikan Bahasa Indonesia", "Pendidikan Bahasa Inggris", "Pendidikan Guru Sekolah Dasar", "Pendidikan Anak Usia Dini", "Pendidikan Geografi"],
        "Fakultas Ekonomi dan Bisnis": ["Akuntansi", "Manajemen", "Ekonomi Syariah", "Ekonomi Pembangunan", "Ilmu Administrasi"],
        "Fakultas Hukum": ["Ilmu Hukum"],
    };

    const $provinsi = $("#provinsi");
    const $kota = $("#kota");
    const $fakultas = $("#fakultas");
    const $prodi = $("#prodi");

    function isiDropdown(data, $element, defaultText) {
        $element.empty().append(`<option>${defaultText}</option>`);
        $.each(data, function (key) {
            $element.append(`<option value="${key}">${key}</option>`);
        });
    }

    isiDropdown(dataWilayah, $provinsi, "Pilih Provinsi");
    isiDropdown(dataFakultas, $fakultas, "Pilih Fakultas");

    $provinsi.on("change", function () {
        let selectedProvinsi = $(this).val();
        $kota.empty().append("<option>Pilih Kabupaten/Kota</option>");

        if (selectedProvinsi in dataWilayah) {
            $.each(dataWilayah[selectedProvinsi], function (_, kota) {
                $kota.append(`<option value="${kota}">${kota}</option>`);
            });
        }
    });

    $fakultas.on("change", function () {
        let selectedFakultas = $(this).val();
        $prodi.empty().append("<option>Pilih Program Studi</option>");

        if (selectedFakultas in dataFakultas) {
            $.each(dataFakultas[selectedFakultas], function (_, prodi) {
                $prodi.append(`<option value="${prodi}">${prodi}</option>`);
            });
        }
    });

    $('#myForm').on('submit', function (ev) {
        ev.preventDefault();
        if (validateForm()) {
            console.log("Form submitted successfully");
            this.submit();
        }
    });

    $('input[required], select[required]').on('change', function () {
        $(this).css('border', '');
    });
});
