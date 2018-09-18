$(document).ready(function() {
  const uploadInput = $('#upload-input');
  $('.upload-btn').on('click', function() {
    uploadInput.click();
  });

  uploadInput.on('change', function() {
    if (uploadInput.val() !== '') {
      const formData = new FormData();

      formData.append('upload', uploadInput[0].files[0]);

      $.ajax({
        url: '/uploadFile',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function() {
          uploadInput.val('');
        },
      });
    }
  });
});
