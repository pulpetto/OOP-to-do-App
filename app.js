const input = document.querySelector(".app__input--input");
const addNoteButton = document.querySelector(".app__input--button");
const deleteButton = document.querySelector(".app__main__note--button");

const noteContainer = document.querySelector(".app__main");
console.log(noteContainer);

class App {
    constructor() {
        addNoteButton.addEventListener("click", this.#addNote);
    }

    #addNote() {
        noteContainer.insertAdjacentHTML(
            "beforeend",
            `
            <div class="app__main__note">
                <p class="app__main__note--text">${input.value}</p>
                <button class="app__main__note--button">🗑</button>
            </div>
            `
        );
    }
}

const toDo = new App();
