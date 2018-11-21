var G_EDITOR = (function($, g_editor) {

  $(document).ready(function() {

    /* ==================================== Customized.php ====================================*/

    /*------- Firstlook --------*/

    /* on click of images button */
    $(document).on("click", "#imagesModalFirstlook", function() {
      $('#firstlook').hide();
    });

    /* ==================================== Footer.php ====================================*/

    /*------- Images modal --------*/

    /* on browse button click*/
    $("#inputFile").change(function() {

      var file = $('#inputFile').prop('files')[0];
      imagesAdd(file);

    });

    /* on camera button click */
    $('#inputCamera').change(function() {
      var file = $('#inputCamera').prop('files')[0];
      imagesAdd(file);
    });

    /* image upload function */
    function imagesAdd(file) {

      var data = new FormData();
      var type = 'png';
      var code = '1';

      data.append('file', file);
      data.append('upload', type);
      data.append('product_code', code);
      if (file.size < 5076800) {
        $.ajax({
          type: "POST",
          url: 'handlers/handleFileUpload.php',
          data: data,
          dataType: "json",

          cache: false,
          contentType: false,
          processData: false,
          xhr: function() {
            var xhr = $.ajaxSettings.xhr();
            if (xhr.upload) {
              // Upload progress
              xhr.upload.addEventListener("progress", function(evt) {
                if (evt.lengthComputable) {
                  var current = evt.loaded || evt.position;
                  var total = evt.total;
                  var percentComplete = Math.ceil((current / total) * 100);
                  // _progress.style.width = Math.ceil((current/total)*100) + '%';
                  // console.log(percentComplete);
                }
                // update progressbars classes so it fits your code
                $(".progress").show();
                $(".progress-bar").show();
                $(".progress-bar").css("width", +percentComplete + "%");
                $(".progress-bar").text(percentComplete + "%");
              }, true);
            }
            return xhr;
          },
          error: function(xhr, ajaxOptions, thrownError) {
            console.log(xhr);
            console.log(ajaxOptions);
            console.log(thrownError);
          },
          beforeSend: function() {

            $("input[name='inputFile']").prop('disabled', true);
            // console.log("in beforeSend");
          },
          success: function(response) {
            // console.log('in success');
            $("input[name='inputFile']").prop('disabled', false);
            $(".progress").hide();
            $(".progress-bar").hide();
            if (response.error) {
              // SHOW ERROR
              $('#errorImage').append("<div class='text-danger'>" + response.error + "</div>");
            } else {
              $('#image_preview').append("<div class='col-sm-4 col-xs-4' style='margin-bottom:2%;'><img height='100' width='100' src='" + response.img_url + "'></div>");
              setTimeout(function() {
                $('#imagesModal').modal("hide");
                $('#firstlook').show();
                var imgObj = new Image();
                imgObj.src = response.img_url;
                imgObj.onload = function() {
                  var image = new fabric.Image(imgObj);
                  image.set({
                    left: 134,
                    top: 120,
                    angle: 0,
                    padding: 10,
                    cornersize: 10
                  });
                  // image.filters.push(new fabric.Image.filters.Invert());
                  // image.applyFilters();

                  image.scaleToWidth(50);
                  image.scaleToHeight(50);

                  g_editor.canvas.add(image);
                  g_editor.canvas.setActiveObject(image);
                  $('#firstlook').hide();
                  $('#imageSettingModal').modal("show");
                  g_editor.canvas.renderAll();
                  g_editor.save_canvas();
                  // g_editor.canvas.sendToBack(image);
                  // $("#imagesModal").modal("hide");

                  // end fabricJS stuff

                  image.on("selected", function() {
                    $('#firstlook').hide();
                    $('#shapesSettingModal').modal('hide');
                    $('#textSettingModal').modal('hide');
                    $('#imageSettingModal').modal("show");
                  });
                }
              }, 1000);
              // SHOW SUCCESS
              // upload_image_callback(response, false, false, false);
            }
          }
        });
      }
    }


    /* close images modal button */
    $(document).on("click", "#imagesrealdiv", function() {
      g_editor.canvas.discardActiveObject();
      g_editor.canvas.renderAll();
      $('#firstlook').show();
      $('#imagesModal').modal("hide");
    });


    /*------- Image setting modal --------*/

    /* close imageSettingModal button */
    $('.realImageShapes').click(function() {
      g_editor.canvas.discardActiveObject();
      g_editor.canvas.renderAll();
      $('#imageSettingModal').modal('hide');
      $('#firstlook').show();
    });

  });
  return g_editor;
}(jQuery, (G_EDITOR || {})));
