function openPopover(event, menuType) {
    const popover = document.getElementById("popover");
    const rect = event.currentTarget.getBoundingClientRect();

    let content = "";
    if (menuType === "popover") {
        content += `
            <a href="view/mbkm-outbound.html">MBKM Outbound</a>
            <a href="view/wirausaha.html">Wirausaha</a>
            <a href="view/status-kuliah.html">Status Kuliah</a>
        `;
    }
    else{
        content += `
            <a href="mbkm-outbound.html">MBKM Outbound</a>
            <a href="wirausaha.html">Wirausaha</a>
            <a href="status-kuliah.html">Status Kuliah</a>
        `;
    }

    popover.style.animation = "none";
    void popover.offsetWidth;
    popover.style.animation = "popoverShow 0.3s ease-out";

    popover.innerHTML = content;
    popover.style.display = "flex";
    popover.style.top = (rect.top + window.scrollY) + "px";
    popover.style.left = (rect.right + window.scrollX + 10) + "px";

    event.stopPropagation();
}

document.addEventListener("click", function () {
    const popover = document.getElementById("popover");
    if (popover) {
        popover.style.display = "none";
    }
});
