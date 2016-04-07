$(function() {
  var content = $("textarea#content");
  content.val(localStorage.getItem("content") || "Hello, World! Start taking notes here...");
  content.keyup(function() {
    localStorage.setItem("content", $(this).val());
  });
  content.focus(function() {
    if($(this).val() == "Hello, World! Start taking notes here...")
      $(this).val("");
  })
  setInterval(function() {
    if(!content.is(":focus"))
      content.val(localStorage.getItem("content") || "Hello, World! Start taking notes here...");
  }, 1000);
})
