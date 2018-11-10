var data = new FormData();
          data.append('file',file);
          data.append('upload',type);
          data.append('product_code',code);
          if(file.size < 5076800 && isValidFileType(file_check)==true) {
          $.ajax({
                type : "POST",
                url : web_root_path+'utility/customize/handleFileUpload.php',
                dataType : "json",
                data : data,
                cache : false,
                contentType : false,
                processData : false,
                xhr: function() {
                var xhr = $.ajaxSettings.xhr();
                if (xhr.upload) {
                  // Upload progress
                  xhr.upload.addEventListener("progress", function(evt){
                      if (evt.lengthComputable) {
                        var current = evt.loaded || evt.position;
                        var total = evt.total;
                          var percentComplete = Math.ceil((current/total)* 100) ;
                          _progress.style.width = Math.ceil((current/total)*100) + '%';
                          console.log(percentComplete);
                      }
                      // update progressbars classes so it fits your code
                    $(".progress").show();
                    $(".progress-bar").show();
                    $(".progress-bar").css("width", + percentComplete + "%");
                    $(".progress-bar").text(percentComplete + "%");
                  }, true);
                }
                return xhr;
                },
                error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr);
                console.log(ajaxOptions);
                console.log(thrownError);
                },
                beforeSend: function(){
                  $("input[name='uploadUserImage']").prop('disabled', true);
                },
                success:function(response){
                  $("input[name='uploadUserImage']").prop('disabled', false);
                  $(".progress").hide();
                  $(".progress-bar").hide();
                  if(response.error) {
                    // SHOW ERROR
                    alert(response.error);
                  } else {
                    // SHOW SUCCESS
                    upload_image_callback(response, false, false, false);
                  }
                }
          });
