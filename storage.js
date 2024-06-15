(function() {
    const cards = document.getElementById("cards");

    function save() {
        const data = [];

        for (const card of Array.from(cards.children)) {
            if (card.id) continue;
    
            const question = card.getElementsByClassName("card-question")[0].value;
            const answer = card.getElementsByClassName("card-answer")[0].value;
            data.push({ question, answer });
        }

        window.localStorage.setItem("data", JSON.stringify(data));
    }

    function load() {
        const data = JSON.parse(window.localStorage.getItem("data") || "[]").reverse();

        for (const entry of data) {
            window.addNewEditableCard(entry.question, entry.answer);
        }
    }

    window.addEventListener("load", load);

    setInterval(function() {
        save();
    }, 1000)
})();