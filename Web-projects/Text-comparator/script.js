"use strict";

const textAreaList = document.querySelectorAll("textarea");
const buttonsList = document.querySelectorAll(".btn");
const lengthItems = document.querySelectorAll(".heading");

const updateLengthAndMatchStatus = (index) => {
    const textFromWindow1 = textAreaList[index].value;
    const textFromWindow2 = textAreaList[index + 1].value;

    // Update the length display
    lengthItems[index].textContent = `Length: ${textFromWindow1.length}`;
    lengthItems[index + 1].textContent = `Length: ${textFromWindow2.length}`;

    // Determine match status
    const isMatched = textFromWindow1 === textFromWindow2;
    updateMatchClasses(textAreaList[index], isMatched);
    updateMatchClasses(textAreaList[index + 1], isMatched);
};

const updateMatchClasses = (textArea, isMatched) => {
    textArea.classList.toggle("matched", isMatched);
    textArea.classList.toggle("un-matched", !isMatched);
};

buttonsList.forEach((btn, index) => {
    btn.addEventListener("click", () => updateLengthAndMatchStatus(index * 2));
});
