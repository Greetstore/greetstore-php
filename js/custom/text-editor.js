var G_EDITOR = (function($, g_editor) {

  $(document).ready(function() {

    /* ==================================== Customized.php ====================================*/

    /*------- Firstlook --------*/

    /* navbar */
    if (Modernizr.mq('(min-width: 340px)')) {
      if (Modernizr.mq('(min-height:750px)')) {
        if (Modernizr.mq('(max-height:840px)')) {
          $('#navbarCss').css('margin-bottom', '20%');
        } else {
          $('#navbarCss').css('margin-bottom', '25%');
        }
      } else {
        if(Modernizr.mq('(max-height:700px)')){
          // $('#navbarCss').css('margin-bottom','10%');
        }else{
          $('#navbarCss').css('margin-bottom','15%');
        }

      }
    }

    /* add text button click */
    $(document).on("click", "#textModalFirstlook", function() {
      $('#firstlook').hide();
    });

    /* buy now button click */
    $(document).on("click", "#buynowdiv", function() {
      $('#firstlook').show();
      $('#buyNowModal').modal("hide");
    });


    /* ==================================== Footer.php ====================================*/

    /*------- Common rule --------*/

    /* on selected object movement */
    g_editor.canvas.on('object:moving', function(o) {
      var activeObj = o.target;
      g_editor.canvas.sendToBack(activeObj);
      activeObj.set({
        'borderColor': 'green',
        'cornerColor': 'green'
      });


    });

    /* font container adjusting */
    $(document).on("click", "#fontContainer", function() {


      if (Modernizr.mq('(max-width: 500px)')) {

        $('#containerSame').toggle();
        $('#fontTextModal').toggle();
        if ($("#containerSame").is(":visible")) {
          $('.allTextModals').css('margin-top', '125%');
        } else {
          $('.allTextModals').css('margin-top', '110%');
        }


      } else {
        $('#containerSame').toggle();
        $('#fontTextModal').toggle();
        if ($("#containerSame").is(":visible")) {
          $('.allTextModals').css('margin-top', '100%');
        } else {
          $('.allTextModals').css('margin-top', '90%');
        }
      }


    });

    /* dropup content */
    $(document).on("click", ".yo", function() {
      if (Modernizr.mq('(max-width: 500px)')) {
        if (Modernizr.mq('(max-height:800px)')) {
          $('.allTextModals').css('margin-top', '125%');
        } else {
          $('.allTextModals').css('margin-top', '170%');
        }

      } else {
        $('.allTextModals').css('margin-top', '100%');
      }
      $('#containerSame').show();
      $('#fontTextModal').hide();
    });

    /* active tabs manually */
    $(".column-tabs").click(function() {
      $(".column-tabs").removeClass("activemanual");
      $(this).addClass("activemanual");
    });

    /* active text manually */
    $(".text-tabs").click(function() {
      $(".text-tabs").removeClass("activemanualtext");
      $(this).addClass("activemanualtext");
    });

    /* clone object */
    $(document).on("click", "#cloneShape", function() {
      var Aobj = g_editor.canvas.getActiveObject();
      Aobj.clone(function(o) {
        var vobj = o;
        if (vobj) {
          vobj.set({
            left: Aobj.get('left') + 10,
            top: Aobj.get('top') + 10
          });
          g_editor.canvas.add(vobj);
          g_editor.canvas.renderAll();
          g_editor.save_canvas();
          vobj.on("selected", function() {

            if (vobj.type == "text" || vobj.type == "group") {
              $('#firstlook').hide();
              $('#textSettingModal').modal("hide");
              $('#imageSettingModal').modal("hide");
              $('#shapesSettingModal').modal("hide");
              $('#textModal').modal('show');
            } else if (vobj.type == "image") {
              $('#firstlook').hide();
              $('#textSettingModal').modal("hide");
              $('#shapesSettingModal').modal("hide");
              $('#imageSettingModal').modal('show');
            } else {
              $('#firstlook').hide();
              $('#imageSettingModal').modal("hide");
              $('#textSettingModal').modal("hide");
              $('#shapesSettingModal').modal('show');
            }
          });
        } else {
          alert("Sorry Object Not Initialized");
        }
      });
    });

    /* delete object */
    $(document).on("click", "#deleteShapesObject", function() {

      if (g_editor.canvas.getActiveObject().type == "text" || g_editor.canvas.getActiveObject().type == "group") {
        $('#textSettingModal').modal('hide');
        $('#firstlook').show();
      } else if (g_editor.canvas.getActiveObject().type == "image") {
        $('#imageSettingModal').modal('hide');
        $('#firstlook').show();
      } else {
        $('#shapesSettingModal').modal('hide');
        $('#firstlook').show();
      }
      g_editor.canvas.remove(g_editor.canvas.getActiveObject());
      g_editor.canvas.renderAll();
      g_editor.save_canvas();
    });

    /* send backward */
    $(document).on("click", "#sendBackward", function() {
      g_editor.canvas.sendToBack(g_editor.canvas.getActiveObject());
    });

    /* send forward */
    $(document).on("click", "#sendForward", function() {
      g_editor.canvas.bringToFront(g_editor.canvas.getActiveObject());
    });


    /* shapes colors dropup tab adjustment */
    if (Modernizr.mq('(max-width: 500px)')) {
      if (Modernizr.mq('(max-height:800px)')) {
        $('#shapesSettingModalColors').click(function() {
          $('#colorShapes').toggle();
          if ($('#colorShapes').is(":visible")) {
            $('.allShapeTextModals').css('margin-top', '135%')
            $('#shapesSettingModal .well').css('margin-bottom', '12px');
          } else {
            $('.allShapeTextModals').css('margin-top', '150%')
            $('.well').css('margin-bottom', '0px');
          }
        });
      } else {
        $('#shapesSettingModalColors').click(function() {
          $('#colorShapes').toggle();
          if ($('#colorShapes').is(":visible")) {
            $('.allShapeTextModals').css('margin-top', '170%')
            $('.well').css('margin-bottom', '12px');
          } else {
            $('.allShapeTextModals').css('margin-top', '180%')
            $('.well').css('margin-bottom', '0px');
          }
        });
      }

    } else {
      $('#shapesSettingModalColors').click(function() {
        $('#colorShapes').toggle();
        if ($('#colorShapes').is(":visible")) {
          $('.allShapeTextModals').css('margin-top', '112%')
          $('.well').css('margin-bottom', '12px');
        } else {
          $('.allShapeTextModals').css('margin-top', '120%')
          $('.well').css('margin-bottom', '0px');
        }
      });
    }

    /* all modals margin-top adjustment*/
    if (Modernizr.mq('(max-width: 500px)')) {
      if (Modernizr.mq('(min-height: 800px)')) {
        $('.allShapeTextModals').css('margin-top', '180%');
        $('.allImageTextModals').css('margin-top', '180%');
        $('.allTextModals').css('margin-top', '170%');
      }
    }


    /* cancel button on buy now modal */
    $(document).on("click", "#canceldivbuy", function() {
      $('#firstlook').show();
      $('#buyNowModal').modal("hide");
    });

    /*------- Text modal --------*/

    /* apply button */
    $(document).on('click', '.add_text', function() {

      var selected_object = g_editor.canvas.getActiveObject();

      var new_text = $('#new_text').val();
      if ((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text")) {
        selected_object.set("text", new_text);
        g_editor.canvas.renderAll();
        g_editor.save_canvas();
      } else if ((selected_object != null) && (selected_object.type == "group")) {
        selected_object.set("originalText", new_text);
        add_curved_text(selected_object.get("originalText"), selected_object.get("top"), selected_object.get("left"));
        g_editor.canvas.renderAll();
        g_editor.save_canvas();
      } else {
        add_text(new_text, false, false);
      }
      $("#textModal").modal("hide");
      $("#firstlook").hide();
      $("#textSettingModal").modal("show");
    });

    /* cancel button */
    $(document).on("click", "#cancelBtnText", function() {
      g_editor.canvas.discardActiveObject();
      g_editor.canvas.renderAll();
      $("#textModal").modal("hide");
      $("#firstlook").show();
    });

    /*------- Text setting modal --------*/

    /* editing options */
    $(document).on("click",".port-item",function(){
      $('.collapse').collapse('hide');
    });

    /* on click of T icon for editing text */
    $(document).on('click', '#addTextSetting', function() {
      $("#textSettingModal").modal("hide");
      $("#textModal").modal("show");
    });

    /* close button click */
    $(document).on('click', '.realdiv', function() {
      g_editor.canvas.discardActiveObject();
      g_editor.canvas.renderAll();
      $("#textSettingModal").modal("hide");
      $("#firstlook").show();

    });

    /* add text function */
    function add_text(txt, left, right) {
      var text = create_text_elmt(txt);


      g_editor.canvas.add(text);
      g_editor.canvas.setActiveObject(text);

      g_editor.canvas.renderAll();
      g_editor.save_canvas();

      text.on("selected", function() {
        $('#firstlook').hide();
        $('#textSettingModal').modal('hide');
        $('#shapesSettingModal').modal('hide');
        $('#imageSettingModal').modal('hide');
        $("#textModal").modal("show");
      });

    }

    /* bend text on input of range slider */
    $(document).on('change', '#angle-control', function() {
      var sliderValue = $('#angle-control').val();
      var is_curved = $("#cb-curved").is(":checked");
      var selected_object = g_editor.canvas.getActiveObject();
      if (is_curved) {
        if (selected_object != null) {
          var left = selected_object.get("left");
          var top = selected_object.get("top");
          if (selected_object.type == "text") {
            var text = selected_object.get("text");
            add_curved_text(text, top, left);
            g_editor.canvas.renderAll();
            g_editor.save_canvas();
            $("#cb-curved").attr('checked', 'checked');
          }
        }
      } else {
        if (selected_object != null) {
          var left = selected_object.get("left");
          var top = selected_object.get("top");
          if (selected_object.type == "group") {
            var text = selected_object.get("originalText");
            add_text(text, top, left);
            g_editor.canvas.renderAll();
            g_editor.save_canvas();
          }
        }
      }
    });

    $("#angle-control").change(function() {
      var selected_object = g_editor.canvas.getActiveObject();
      if ((selected_object != null) && (selected_object.type == "group"))
      recreate_group(selected_object);
    });

    function recreate_group(group) {
      var left = group.get("left");
      var top = group.get("top");
      add_curved_text(group.originalText, top, left);
    }

    /* add curved text function */
    function add_curved_text(str, custom_top, custom_left) {
      var len = str.length;
      var s;
      var selected_object = g_editor.canvas.getActiveObject();

      var color = selected_object.get("fill");
      var fontFamily=selected_object.get("fontFamily");

      if ($('#angle-control').val() > 55) {

        var radius = 50 + ($("#angle-control").val() - 55);
        var spacing = 10 +($("#angle-control").val() - 55);
        g_editor.canvas.remove(selected_object);
        var textH = true;
      } else if ($('#angle-control').val() < 45) {

        var radius = 50 + (45 - $("#angle-control").val());
        var spacing = 10 + (45 - $("#angle-control").val());
        g_editor.canvas.remove(selected_object);
        var textH = true;
      } else {
        if (selected_object.type == "group") {
          var txt = selected_object.get("originalText");
        } else {
          var txt = selected_object.get("text");
        }
        var text = new fabric.Text(txt, {
          top: selected_object.get("top"),
          left: selected_object.get("left"),
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'normal',
          fontStyle: 'bold',
          textDecoration: 'none',
          fill: color,
          fontFamily:fontFamily,
          opacity: 1,


        });

        g_editor.canvas.remove(selected_object);
        g_editor.canvas.add(text);
        g_editor.canvas.setActiveObject(text);
        g_editor.canvas.renderAll();
        g_editor.save_canvas();
        text.on("selected", function() {
          $('#firstlook').hide();
          $('#textSettingModal').modal('hide');
          $('#shapesSettingModal').modal('hide');
          $('#imageSettingModal').modal('hide');
          $('#textModal').modal('show');
        });
        var textH = false;

      }

      if (textH) {

        if (!radius)
        radius = 150;
        if (!spacing)
        spacing = 10;
        var curAngle = 0;
        var angleRadians = 0;
        var align = 0;
        var centerX = g_editor.canvas.getWidth() / 2;
        var centerY = g_editor.canvas.getHeight() - 30;
        align = (spacing / 2) * (len - 1);
        var reverse = false;
        if ($('#angle-control').val() > 55) {
          reverse = true;
        }
        var coef = 1;
        if (reverse)
        coef = -1;
        var items = [];
        for (var n = 0; n < len; n++) {
          s = str[n];
          var text = create_text_elmt(s);
          curAngle = (n * parseInt(spacing, 10)) - align;
          angleRadians = curAngle * (Math.PI / 180);
          if (reverse) {
            curAngle = (-n * parseInt(spacing, 10)) + align;
            angleRadians = curAngle * (Math.PI / 180);
          }


          var top = (centerX + (-Math.cos(angleRadians) * radius)) * coef;
          var left = (centerY + (Math.sin(angleRadians) * radius)) * coef;
          text.set('top', top);
          text.set('left', left);
          text.set('Angle', curAngle);
          text.set('fill', color);
          text.set('fontFamily',selected_object.get("fontFamily"));
          items.push(text);
        }

        var group = new fabric.Group(items, {

          left: 150,
          top: 100,

        });

        if (custom_top != null)
        g_editor.canvas.setActiveObject(group);
        group.on("selected", function() {
          $('#firstlook').hide();
          $('#textSettingModal').modal('hide');
          $('#shapesSettingModal').modal('hide');
          $('#imageSettingModal').modal('hide');
          $("#textModal").modal("show");
        });
        //g_editor.setCustomProperties(group);
        group["originalText"] = str;
        group["radius"] = radius;
        group["spacing"] = spacing;
        group["fill"] = color;
        group["fontFamily"] = selected_object.get("fontFamily"),
        // console.log(group);
        g_editor.canvas.add(group);
        if (custom_top == null)
        group.center();
        else {
          group.set("left", custom_left);
          group.set("top", custom_top);
          group.set("fontFamily", fontFamily);
          group.set("fill", color);
          console.log(group);
        }


        g_editor.canvas.renderAll();
        g_editor.save_canvas();
        group.setCoords();
      }

    }

    /* change color on click */
    $(document).on("change", "input[name=color]", function() {

      var selected_object = g_editor.canvas.getActiveObject();
      if ((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text")) {
        var value = $('input[name=color]:checked').val();
        selected_object.set({
          fill: value
        });
        g_editor.canvas.renderAll();
        g_editor.save_canvas();
      } else if (selected_object.type == "group") {
        var value = $('input[name=color]:checked').val();
        selected_object.set("fill", value);
        add_curved_text(selected_object.get("originalText"), selected_object.get("top"), selected_object.get("left"));
        g_editor.canvas.renderAll();
        g_editor.save_canvas();
      }

    });


    /* change font on click */
    $("#fontModalList li").on('click', function() {

      var selected_object = g_editor.canvas.getActiveObject();
      if ((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text")) {
        var value = $(this).attr("data-id");
        selected_object.set("fontFamily", value);
        g_editor.canvas.renderAll();
        g_editor.save_canvas();
      } else if ((selected_object != null) && (selected_object.type == "group")) {
        var value = $(this).attr("data-id");
        selected_object.forEachObject(function(a) {
          a.set('fontFamily', value);
        });
        selected_object.set("fontFamily",value);
        g_editor.canvas.renderAll();
        g_editor.save_canvas();
      }

    });

    /* align text left */
    $(document).on("click", "#alignTextLeft", function() {
      var selected_object = g_editor.canvas.getActiveObject();
      if ((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text")) {
        selected_object.set("textAlign", "left");
        g_editor.canvas.renderAll();
        g_editor.save_canvas();
      } else if ((selected_object != null) && (selected_object.type == "group")) {

        selected_object.forEachObject(function(a) {
          a.set("textAlign", 'left');
          g_editor.canvas.renderAll();
          g_editor.save_canvas();
        });
      }
    });

    /* align text center */
    $(document).on("click", "#alignTextCenter", function() {
      var selected_object = g_editor.canvas.getActiveObject();
      if ((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text")) {
        selected_object.set("textAlign", "center");
        g_editor.canvas.renderAll();
        g_editor.save_canvas();
      } else if ((selected_object != null) && (selected_object.type == "group")) {

        selected_object.forEachObject(function(a) {
          a.set("textAlign", 'center');
          g_editor.canvas.renderAll();
          g_editor.save_canvas();
        });
      }
    });

    /* align text right */
    $(document).on("click", "#alignTextRight", function() {
      var selected_object = g_editor.canvas.getActiveObject();
      if ((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text")) {

        selected_object.set("textAlign", "right");
        g_editor.canvas.renderAll();
        g_editor.save_canvas();
      } else if ((selected_object != null) && (selected_object.type == "group")) {

        selected_object.forEachObject(function(a) {
          a.set("textAlign", 'right');
          g_editor.canvas.renderAll();
          g_editor.save_canvas();
        });
      }
    });



    /* create text function */
    function create_text_elmt(txt) {
      var text = new fabric.Text(txt, {
        top: 170,
        left: 150,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'normal',
        fontStyle: 'bold',
        textDecoration: 'none',
        fill: 'black',
        opacity: 1,

      });

      return text;
    }



  });
  return g_editor;
}(jQuery, (G_EDITOR || {})));
