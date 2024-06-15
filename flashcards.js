(function() {
    const cards = document.getElementById("cards");
    const newCard = document.getElementById("add-new");

    newCard.addEventListener("click", function() {
        addNewEditableCard();
    });

    function addNewEditableCard(question = "", answer = "") {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `<div class="delete">&times;</div>
        
        <div class="input-row">
            <span>Q:</span>
            <input placeholder="Question" class="card-question" type="text" value="${question}">
        </div>

        <div class="input-row">
            <span>A:</span>
            <input placeholder="Answer" class="card-answer" type="text" value="${answer}">
        </div>`;


        cards.prepend(card);

        const deleteButton = card.getElementsByClassName("delete")[0];
        deleteButton.addEventListener("click", function() {
            card.remove();
        });
    }

    window.addNewEditableCard = addNewEditableCard.bind(null);
})();
