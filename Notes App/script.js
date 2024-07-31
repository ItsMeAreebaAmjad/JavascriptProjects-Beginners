document.addEventListener('DOMContentLoaded', () => {
    const addNoteBtn = document.getElementById('addNoteBtn');
    const noteInput = document.getElementById('noteInput');
    const notesContainer = document.getElementById('notesContainer');

    addNoteBtn.addEventListener('click', () => {
        const noteText = noteInput.value.trim();
        if (noteText === '') {
            alert('Please enter a note.');
            return;
        }

        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.innerHTML = `
            <p>${noteText}</p>
            <button class="delete-btn">&times;</button>
        `;

        const deleteBtn = noteElement.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            notesContainer.removeChild(noteElement);
        });

        notesContainer.appendChild(noteElement);
        noteInput.value = ''; 
    });
});
