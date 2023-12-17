window.addEventListener("load", (e) => {
    document.getElementById("menuIcon").addEventListener("click", (e) => {
        document.getElementById("menuContent").style.transform = "translateX(0%)";
    });

    document.getElementById("menuContent_close").addEventListener("click", (e) => {
        document.getElementById("menuContent").style.transform = "translateX(100%)";
    });
});