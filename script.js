(function () {
    const ballons = document.querySelectorAll(".ballon");
    let popCount = 0;
    const generateHexValue = () => {
        let hexValue = "";
        let hexData = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
        for (let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() * 15);
            hexValue += hexData[randomIndex];
        }
        return hexValue;
    };

    colorBubbles();

    function colorBubbles() {
        ballons.forEach(ballon => {
            let hexValue = "#" + generateHexValue();
            ballon.style.backgroundColor = hexValue;
        });
    }

    function popOnHover() {
        bubbles.forEach(bubble => {
            bubble.addEventListener("mouseover", popBubbles, false);
        });
    }

    function popBubbles() {
        let backgroundColor = this.style.backgroundColor;

        this.style.borderRadius = "0";
        this.style.backgroundColor = "initial";
        this.textContent = "POP!";
        this.style.color = backgroundColor;

        popCount++;
        this.removeEventListener("mouseover", popBubbles, false);
        if (popCount == 25) {
            setTimeout(() => {
                alert("Great Job");
                setTimeout(() => confirm("restart?") ? location.reload() : window.close(), 1000);
            }, 1000);
        }
    }

    popOnHover();
}());