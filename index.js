const questions = document.getElementById("questions");
const btn = document.getElementById("add-new");

btn.addEventListener("click", function() {
    const el = document.createElement("div");
    el.className = "question-box";

    el.innerHTML = `
        <div class="question-title">
            <span contenteditable="true">Question ${questions.children.length + 1}</span>
        </div>
        
        <div class="question-contents">
            <div class="question-q">
                <span>Question</span><input type="text">
            </div>
            <div class="question-a">
                <span>Answer</span><input type="text">
            </div>
        </div>
    `;

    questions.appendChild(el);
});
