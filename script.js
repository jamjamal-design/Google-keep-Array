const allNotes = [];
let gottenIndex;

const addNote = () => {
    if (note.value === '') {
        // alert('Fill in something, please')
        err.style.display = 'block'
    } else {
        allNotes.push(note.value)
        console.log(allNotes);
        note.value = ''
        displayNotes()
    }
}

const deleteNote = (index) => {
    // alert('You go delete')
    // console.log(index);
    const confirmMsg = confirm('Are you sure you want to delete?')
    console.log(confirmMsg);
    if (confirmMsg == true) {
        allNotes.splice(index, 1)
        displayNotes()
    } else {
        displayNotes()
    }
}


const editNote = (book, ind) => {
    console.log(ind);
    // console.log(book);
    gottenIndex = ind
    newNote.value = book
}

const saveEdit = () => {
    if (newNote.value === '') {
        // alert('Fill in something, please')
        err2.style.display = 'block'
    } else {
        err2.style.display = 'none'
        allNotes.splice(gottenIndex, 1, newNote.value)
        // console.log(erekere);
        
        // erekere.dataBsDismiss = 'modal'
        console.log(allNotes);
        newNote.value = ''
        displayNotes()
    }
}

const displayNotes = () => {
    show.innerHTML = ''
    show.innerHTML = '<h3 class="text-center my-3 text-decoration-underline">All Notes</h3>'
    allNotes.map((note, i) => {
        show.innerHTML += `
            <div class="row my-3">
                <p class="col-lg-7 col-sm">${i + 1}. ${note}</p>
                <div class="row col-lg-5">
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="col mx-2 btn btn btn-info" onclick="editNote('${note}', ${i})">Edit</button>
                    <button class="col mx-2 btn btn-sm btn-danger" onclick="deleteNote(${i})">Delete</button>
                </div>
            </div>
        `
    })
}

console.log((erekere.outerHTML).split(''));
