function openPopover(event, menuType) {
    const popover = document.getElementById("popover");
    const rect = event.currentTarget.getBoundingClientRect();

    // Isi popover tergantung menu
    let content = "";
    if (menuType === "perkuliahan") {
        content += `
            <a href="mbkm-outbound.html">mbkm-outbound.html</a>
            <a href="mbkm-outbound.html">Presensi</a>
            <a href="mbkm-outbound.html">Nilai Akademik</a>
        `;
    } else if (menuType === "profil") {
        content += `
            <a href="biodata.html">Biodata</a>
            <a href="akun.html">Akun</a>
        `;
    }

    // Tampilkan & posisikan popover

    popover.innerHTML = content;
    popover.style.display = "flex";
    popover.style.top = (rect.top + window.scrollY) + "px";
    popover.style.left = (rect.right + window.scrollX + 10) + "px";


    event.stopPropagation(); // cegah klik bubble
}

// Tutup popover saat klik di luar
document.addEventListener("click", function () {
    const popover = document.getElementById("popover");
    if (popover) {
        popover.style.display = "none";
    }
});
