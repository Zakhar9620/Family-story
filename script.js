```javascript
// ===============================
// КНИГА НАШЕЙ СЕМЬИ
// PageFlip
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const bookElement = document.getElementById("book");

    const pageFlip = new St.PageFlip(bookElement, {

        width: 450,
        height: 620,

        size: "stretch",

        minWidth: 320,
        maxWidth: 1200,

        minHeight: 450,
        maxHeight: 900,

        maxShadowOpacity: 0.5,

        showCover: true,

        mobileScrollSupport: true,

        usePortrait: true,

        flippingTime: 900,

        startPage: 0,

        drawShadow: true,

        autoSize: true

    });

    pageFlip.loadFromHTML(
        document.querySelectorAll(".page")
    );

    // -------------------------
    // Клавиатура
    // -------------------------

    document.addEventListener("keydown", (event) => {

        switch (event.key) {

            case "ArrowRight":
                pageFlip.flipNext();
                break;

            case "ArrowLeft":
                pageFlip.flipPrev();
                break;

            case "Home":
                pageFlip.turnToPage(0);
                break;

            case "End":
                pageFlip.turnToPage(
                    pageFlip.getPageCount() - 1
                );
                break;

        }

    });

    // -------------------------
    // Кнопки мыши
    // -------------------------

    document.addEventListener("dblclick", (e) => {

        if (e.clientX > window.innerWidth / 2) {

            pageFlip.flipNext();

        } else {

            pageFlip.flipPrev();

        }

    });

    // -------------------------
    // Колесо мыши
    // -------------------------

    let wheelTimer;

    window.addEventListener("wheel", (e) => {

        clearTimeout(wheelTimer);

        wheelTimer = setTimeout(() => {

            if (e.deltaY > 0) {

                pageFlip.flipNext();

            } else {

                pageFlip.flipPrev();

            }

        }, 40);

    });

    // -------------------------
    // Информация
    // -------------------------

    pageFlip.on("flip", (e) => {

        console.log("Текущая страница:", e.data);

    });

    pageFlip.on("changeOrientation", (e) => {

        console.log("Ориентация:", e.data);

    });

    pageFlip.on("init", () => {

        console.log("Книга загружена");

    });

});
```
