function testNoteListViewTakesNoteListReturnsStringOfHtml() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  var note1 = "hello 1!"
  var note2 = "Today Rocks!"

  noteList.add(note1)
  noteList.add(note2)

  // let output = "<ul><li><div>"+note1+"</div></li>"
  assert.isTrue(noteListView.view()) === ("<ul><div><li>" + note1 + "</li>"+"<li>" + note2 + "</li></div>");
};
testNoteListViewTakesNoteListReturnsStringOfHtml();
