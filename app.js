const input = document.querySelector(".app__input--input");
const addNoteButton = document.querySelector(".app__input--button");
const deleteButton = document.querySelector(".app__main__note--button");

const noteContainer = document.querySelector(".app__main");

const mainTxt = document.querySelector(".app__title");

class App {
    constructor() {
        addNoteButton.addEventListener("click", this.#addNote);
        noteContainer.addEventListener("click", this.#deleteNote);
    }

    #addNote() {
        if (input.value === "") {
            mainTxt.innerText = "Add some text";
            mainTxt.style.color = "red";
            return;
        }

        noteContainer.insertAdjacentHTML(
            "beforeend",
            `
            <div class="app__main__note">
                <p class="app__main__note--text">${input.value}</p>
                <button class="app__main__note--button">🗑</button>
            </div>
            `
        );

        input.value = "";
        mainTxt.innerText = "Add your tasks!";
        mainTxt.style.color = "white";
    }

    #deleteNote(e) {
        const clicked = e.target.closest(".app__main__note--button");
        if (!clicked) return;
        const note = clicked.closest(".app__main__note");

        note.remove();

        console.log(note);
        console.log(clicked);
    }
}

const toDo = new App();
