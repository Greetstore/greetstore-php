
var G_EDITOR = (function ($, g_editor) {

		$(document).ready( function() {



				$(".column-tabs").click(function () {
				    $(".column-tabs").removeClass("activemanual");
				    $(this).addClass("activemanual");
				});

				$(".text-tabs").click(function () {
						$(".text-tabs").removeClass("activemanualtext");
						$(this).addClass("activemanualtext");
				});

				$(document).on('click','.realdiv',function() {
					$("#textSettingModal").modal("hide");
					$("#firstlook").show();
				// g_editor.canvas.discardActiveObject().renderAll();
				});

			$(document).on('click','.add_text',function() {
				//alert("Hi");
				var selected_object=g_editor.canvas.getActiveObject();

				var new_text = $('#new_text').val();
				if((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text")){
					selected_object.set("text",new_text);
					console.log("hello");
						g_editor.canvas.calcOffset().renderAll();
				}
				else{
				add_text(new_text,false,false);
			  }
				$("#textModal").modal("hide");
        $("#firstlook").hide();
				$("#textSettingModal").modal("show");
			});
			function add_text(txt, left, right) {
				var text = create_text_elmt(txt);


				g_editor.canvas.add(text);
				g_editor.canvas.sendToBack(text);
				g_editor.canvas.setActiveObject(text);
				g_editor.canvas.calcOffset().renderAll();

       text.on("selected",function(){
				 $("#textModal").modal("show");
			 });

			}



		$(document).on('change','#angle-control',function(){

      var sliderValue=$('#angle-control').val();
			var flipped=false;
			var selected_object = g_editor.canvas.getActiveObject();
 		 if ((selected_object != null) && (selected_object.type == "text"))
 		 {
			 if(sliderValue>55)
				 flipped=true;
				 var CurvedText = new fabric.CurvedText(selected_object.get("text"),{
			 //        width: 100,
			 //        height: 50,
						 left: selected_object.get("left"),
						 top: selected_object.get("top"),
						 textAlign: 'center',
						 fill: selected_object.get("fill"),
						 radius: 50+10*(sliderValue-55),
						 fontSize: 20,
						 spacing: 20+5*(sliderValue-55),
						 flipped:flipped,
			       fontFamily:selected_object.get("fontFamily"),
						 originX:selected_object.get("originX"),
						 kerning:0.5*(sliderValue-55),
				 });

				 g_editor.canvas.remove(selected_object);
				 g_editor.canvas.setActiveObject(CurvedText);

				 g_editor.canvas.add(CurvedText).renderAll();
				 CurvedText.on('selected', function() {

					 $("#textModal").modal("show");

				 });
			}
		 else{

			if((selected_object != null) && (selected_object.type == "curved-text")){
				if(sliderValue>=55){
					// selected_object.set("fontSize",selected_object.get("fontSize")+0.1*(sliderValue-55));
					selected_object.set("radius",50+10*(sliderValue-55));
					selected_object.set("kerning",0.5*(sliderValue-55));
					// selected_object.set("angle",-Math.PI*(sliderValue-55));
					selected_object.set("spacing",20+10*(sliderValue-55));
					selected_object.set("flipped",true);
					selected_object.set("originX",selected_object.get("originX"));
					console.log(sliderValue);
				}else if(sliderValue<=45){
					// selected_object.set("fontSize",selected_object.get("fontSize")+(45-sliderValue));
					selected_object.set("radius",50+10*(45-sliderValue));
					selected_object.set("kerning",0.5*(45-sliderValue));
					selected_object.set("flipped",false);
					selected_object.set("originX",selected_object.get("originX"));

				}
				else{
					var text = new fabric.Text(selected_object.get("text"),{

							left: selected_object.get("left"),
							top: selected_object.get("top"),
							textAlign: 'center',
							fill: selected_object.get("fill"),
							radius: 50,
							fontSize: 20,
							spacing: 20,
				      fontFamily:selected_object.get("fontFamily"),
							originX:selected_object.get("originX")
					});

					text.on("selected",function(){
						$("#textModal").modal("show");
					});


					g_editor.canvas.remove(selected_object);
					g_editor.canvas.setActiveObject(text);
					g_editor.canvas.add(text);
						console.log(sliderValue);
				}
				g_editor.canvas.renderAll();
			}
		}

		});



    $(document).on("change","input[name=color]",function(){

				 var selected_object = g_editor.canvas.getActiveObject();
				 if ((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text"))
				 {
			 var value = $('input[name=color]:checked').val();
			 selected_object.set({fill:value});
				g_editor.canvas.renderAll();
			 }

		});

		$("#fontModalList li").on('click', function() {

			var selected_object = g_editor.canvas.getActiveObject();
			if ((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text"))
				{
			var value = $(this).attr("data-id");
			 selected_object.set("fontFamily",value);
			 g_editor.canvas.renderAll();
			}

		});

		$(document).on("click","#alignTextLeft",function(){
			var selected_object = g_editor.canvas.getActiveObject();
			if ((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text"))
			{
				selected_object.set("textAlign","left");
		 g_editor.canvas.renderAll();
		}
		});

		$(document).on("click","#alignTextCenter",function(){
			var selected_object = g_editor.canvas.getActiveObject();
		if ((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text"))
			{
				selected_object.set("textAlign","center");
		 g_editor.canvas.renderAll();
		}
		});

		$(document).on("click","#alignTextRight",function(){
			var selected_object = g_editor.canvas.getActiveObject();
			if ((selected_object != null) && (selected_object.type == "text" || selected_object.type == "curved-text"))
			{

     selected_object.set("textAlign","right");
		 g_editor.canvas.renderAll();
		}
		});

			function create_text_elmt(txt) {
				var text = new fabric.Text(txt, {
					      top:170,
								left:185,
                fontSize: 20,
								textAlign:'center',
                fontWeight: 'normal',
                fontStyle: 'bold',
                textDecoration: 'none',
                fill: 'black',
                opacity: 1,
								originX:'center'

				//backgroundColor: bgColor

            });
            // text.set("originX", "center");
            // text.set("originY", "center");
			return text;
			}



		});
		return g_editor;
}(jQuery,(G_EDITOR || {})));
