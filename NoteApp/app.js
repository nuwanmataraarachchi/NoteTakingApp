function saveNote() {
    var noteText = document.getElementById("note-text").value;
    var savedNotes = document.getElementById("saved-notes");
  
    var newNote = document.createElement("div");
    newNote.innerHTML = noteText;
  
    savedNotes.appendChild(newNote);
    document.getElementById("note-text").value = "";
  }
  