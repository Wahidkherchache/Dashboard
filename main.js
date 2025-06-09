
let links = document.querySelectorAll(".sidebar ul li a");

links.forEach((link) => {
    link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    links.forEach((l) => l.classList.remove("active"));
    e.currentTarget.classList.add("active");
    });
});


const avatarImg = document.getElementById("img-us");
const infoBox = document.getElementById("info");

// عند الضغط على الصورة
avatarImg.addEventListener("click", function (e) {
    e.stopPropagation();
    if (infoBox.style.display === "none") {
    infoBox.style.display = "flex"; // أو "block" حسب تصميمك
    } else {
    infoBox.style.display = "none";
    }
});

// عند الضغط خارج القائمة، نخفيها
document.addEventListener("click", function () {
    infoBox.style.display = "none";
});

// إذا ضغط داخل القائمة، ما تخفيش
infoBox.addEventListener("click", function (e) {
    e.stopPropagation();
});
let notification = document.getElementById("noti");
let notif = document.getElementById("notiff");

notif.addEventListener("click", function (e) {
    e.stopPropagation();
    if (notification.style.display === "none") {
    notification.style.display = "flex"; // أو "block" حسب تصميمك
    } else {
    notification.style.display = "none";
    }
});

// عند الضغط خارج القائمة، نخفيها
document.addEventListener("click", function () {
    notification.style.display = "none";
});

// إذا ضغط داخل القائمة، ما تخفيش
notification.addEventListener("click", function (e) {
    e.stopPropagation();
});

