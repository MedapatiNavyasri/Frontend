let notes = JSON.parse(localStorage.getItem("notes")) || [];
let updateId = null;
displayNotes();
function saveNote(){
    let text = document.getElementById("noteText").value.trim();
    if(text==""){
        alert("Please Enter the Data");
        return;
    }
    if(updateId!=null){
        let note=notes.find(function(n){
            return n.id==updateId;
        });
        note.text=text;
        note.date=new Date().toLocaleString();
        updateId=null;
    } 
    else{
        let note={
            id:Date.now(),
            text:text,
            date:new Date().toLocaleString()
        };  
      notes.push(note);
    }
    localStorage.setItem("notes",JSON.stringify(notes));
    document.getElementById("noteText").value="";
    displayNotes();
}
function displayNotes(){
    let box=document.getElementById("allNotes");
    box.value="";
    notes.map(function(note){
        box.value += note.text + "\n";
    });

}
function editNote(id){
    let note=notes.find(function(n){
        return n.id==id;
    });
    document.getElementById("noteText").value=note.text;
    updateId=id;
}
function deleteNote(id){

    notes=notes.filter(function(note){

        return note.id!=id;

    });

    localStorage.setItem("notes",JSON.stringify(notes));

    displayNotes();

}
function clearNotes(){
    notes=[];
    localStorage.removeItem("notes");
    displayNotes();
}