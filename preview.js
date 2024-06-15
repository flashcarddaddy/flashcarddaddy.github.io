(function() {
    const renderPreview = document.getElementById("render-preview");
    const cards = document.getElementById("cards");
    const previewGrid = document.getElementById("preview-grid");
    
    renderPreview.addEventListener("click", function() {
        previewGrid.innerHTML = "";

        for (const card of Array.from(cards.children)) {
            if (card.id) continue;

            const question = card.getElementsByClassName("card-question")[0].value;
            const answer = card.getElementsByClassName("card-answer")[0].value;

            const previewCard = document.createElement("div");
            previewCard.className = "preview-card";
            previewCard.innerHTML = `<div class="preview-question">${question}</div>
                <div class="preview-answer">${answer}</div>
            `;
            
            previewGrid.append(previewCard);

            previewCard.addEventListener("click", function() {
                previewCard.classList.toggle("flipped");
            });
        }
    });
})();