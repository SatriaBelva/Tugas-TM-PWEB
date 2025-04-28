function openPopover(event, menuType) {
    const popover = document.getElementById("popover");
    const rect = event.currentTarget.getBoundingClientRect();

    let content = "";
    if (menuType === "popover") {
        content += `
            <a href="view/mbkm-outbound.html">
                <div class="img-container"style="width: 18px;height: 16px;display: flex;justify-content: center;align-items: center;">
                    <img src="assets/modal/mbkm-outbound.png" alt="" style="width: auto;height: 100%;object-fit: contain;">
                </div>
                <div>MBKM-Outbound</div>
            </a>
            <a href="view/wirausaha.html">
                <div class="img-container"style="width: 18px;height: 16px;display: flex;justify-content: center;align-items: center;">
                    <img src="assets/modal/wirausaha.png" alt="" style="width: auto;height: 100%;object-fit: contain;">
                </div>
                <div>Wirausaha</div>        
            </a>
            <a href="view/status-kuliah.html">
                <div class="img-container"style="width: 18px;height: 16px;display: flex;justify-content: center;align-items: center;">
                    <img src="assets/modal/status-kuliah.png" alt="" style="width: auto;height: 100%;object-fit: contain;">
                </div>
                <div>Status Kuliah</div> 
            </a>
        `;             
    }
    if((menuType === "innerpopover")){
        content += `
            <a href="mbkm-outbound.html">
                <div class="img-container"style="width: 18px;height: 16px;display: flex;justify-content: center;align-items: center;">
                    <img src="../assets/modal/mbkm-outbound.png" alt="" style="width: auto;height: 100%;object-fit: contain;">
                </div>
                <div>MBKM-Outbound</div>
            </a>
            <a href="wirausaha.html">
                <div class="img-container"style="width: 18px;height: 16px;display: flex;justify-content: center;align-items: center;">
                    <img src="../assets/modal/wirausaha.png" alt="" style="width: auto;height: 100%;object-fit: contain;">
                </div>
                <div>Wirausaha</div>     
            </a>
            <a href="status-kuliah.html">
                <div class="img-container"style="width: 18px;height: 16px;display: flex;justify-content: center;align-items: center;">
                    <img src="../assets/modal/status-kuliah.png" alt="" style="width: auto;height: 100%;object-fit: contain;">
                </div>
                <div>Status Kuliah</div> 
            </a>
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
