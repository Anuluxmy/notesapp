(function(exports) {

  function NoteListView(noteList) {
   this.noteList = noteList;
  }

  NoteListView.prototype.view = function() {
     let htmlString = "<ul>";

    this.noteList.notes.forEach(function(note) {
      document.write("<div><li>"+ note.returntext() + "</li></div>")
      // console.log(note.returntext());
    })
    return htmlString
};

   exports.NoteListView = NoteListView;

    // <ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>
})(this);
