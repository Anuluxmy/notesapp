(function(exports) {

  function Note(text) {
    this.text = text;

  };
  Note.prototype.returntext = function() {
    return this.text
  }
  exports.Note = Note;
})(this);
