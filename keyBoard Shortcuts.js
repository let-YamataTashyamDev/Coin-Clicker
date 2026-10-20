document.addEventListener("keydown", function (e) {
    switch (e.key.toLowerCase()) {
        case "a":
            openShop();
            break;
        case "w":
            openAsShop();
            break;
        case "e":
            addPoints();
            break;
        case "s":
            closeShop();
            break;
        case "d":
            closeAsShop();
            break;
    }
});