const noteInput = document.getElementById('note-input');
const addBtn = document.getElementById('add-btn');
const notesContainer = document.getElementById('notes-container');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

function renderNotes() {
    notesContainer.innerHTML = '';
    notes.forEach((note, index) => {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        
        const textElement = document.createElement('p');
        textElement.textContent = note;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = () => deleteNote(index);
        
        noteElement.appendChild(textElement);
        noteElement.appendChild(deleteBtn);
        notesContainer.appendChild(noteElement);
    });
}

function addNote() {
    const text = noteInput.value.trim();
    if (text !== '') {
        notes.push(text);
        localStorage.setItem('notes', JSON.stringify(notes));
        noteInput.value = '';
        renderNotes();
    }
}

function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes();
}

addBtn.addEventListener('click', addNote);
renderNotes();