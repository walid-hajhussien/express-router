//
$(document).ready(() => {
  // add click event
  $("button").on("click", () => {
    const note = $("input").val();

    save(note);
  });

  function save(note) {
    // http://localhost:3000/addNote
    const url = "/addNote";
    $.post(url, { note })
      .done((res) => {
        console.log("saved", res);
      })
      .fail((error) => {
        console.log("error", error);
      });
  }
});
