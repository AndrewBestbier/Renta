$(document).ready(function() {
  $('.selectpicker').selectpicker();

  $("#input-file").fileinput({
    uploadUrl: "/listings/upload",
    uploadAsync: true,
    maxFileCount: 5
  });
});
