const allNotes = [];
let gottenIndex;

const addNote = () => {
  if (note.value === "") {
    // alert('Fill in something, please')
    err.style.display = "block";
  } else {
    allNotes.push(note.value);
    console.log(allNotes);
    note.value = "";
    displayNotes();
  }
};

const deleteNote = (index) => {
  // alert('You go delete')
  // console.log(index);
  const confirmMsg = confirm("Are you sure you want to delete?");
  console.log(confirmMsg);
  if (confirmMsg == true) {
    allNotes.splice(index, 1);
    displayNotes();
  } else {
    displayNotes();
  }
};

const editNote = (book, ind) => {
  console.log(ind);
  // console.log(book);
  gottenIndex = ind;
  newNote.value = book;
};

const saveEdit = () => {
  if (newNote.value === "") {
    // alert('Fill in something, please')
    err2.style.display = "block";
  } else {
    err2.style.display = "none";
    allNotes.splice(gottenIndex, 1, newNote.value);
    // console.log(erekere);

    // erekere.dataBsDismiss = 'modal'
    console.log(allNotes);
    newNote.value = "";
    displayNotes();
  }
};

const displayNotes = () => {
    show.innerHTML = ''
    show.innerHTML = '<h3 class="text-center my-3 text-decoration-underline">All Notes</h3>'
    allNotes.map((note, i) => {
        show.innerHTML += `
            <div class="card my-3 bg-dark text-white" style="width: 36rem;">
            <div class="card-body">
            <h5 class="card-title">Item ${i + 1}</h5>
            <p class="card-text">${note}</p>
            <div class="d-flex gap-4" style="margin-left: 25rem;">
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-info" onclick="editNote('${note}', ${i})">Edit</button>
            <button class="btn btn-danger" onclick="deleteNote(${i})">Delete</button>
            </div>
            </div>
            </div>
        `
    })
}


console.log(erekere.outerHTML.split(""));
