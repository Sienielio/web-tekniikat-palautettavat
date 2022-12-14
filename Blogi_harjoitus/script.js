// kun käyttäjä lisää muistion, se menee localStorageen.
let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', function() {
    let addText = document.getElementById('note');
    let notes = localStorage.getItem('notes');

    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);

    notesObj.push(addText.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addText.value = '';
})

// funktio mikä näyttää asiat localStoragesta
function showNotes() {
    let notes = localStorage.getItem('notes');

    if (notes == null) notesObj =[];
    else notesObj = JSON.parse(notes);

    let html = '';

    notesObj.forEach(function(element, index) {
        html += `<div class='noteCard my-2 mx-2 card'
            style='width: 18rem;'>
                    <div class='card-body'>
                        <h5 class='card-title'>
                            Note ${index + 1}
                        </h5>
                     <p class='card-text'> 
                         ${element}
                     </p>
   
                    <button id='${index}' onclick=
                        'deleteNote(this.id)'
                        class='btn btn-primary'>
                     Delete Note
                    </button>
                </div>
         </div>`;
    });

    let notesElement = document.getElementById('notes');

    if (notesObj.lenght !=0) notesElement.innerHTML = html;
    else notesElement.innerHTML = `Nothing to show! Use 'Add a Note' section above to add notes.`;

  // funktio muistion poistamiseen
  function deleteNote(index) {
    let notes = localStorage.getItem('notes');

    if(notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);

    notesObj.splice(index, 1);

    localStorage.setItem('notes', JSON.stringify(notesObj));

    showNotes();
  }  
    

}