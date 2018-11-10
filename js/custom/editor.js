var G_EDITOR = (function ($, g_editor) {
		// var g_editor = {};
		// g_editor.canvas = {};

	 var g_editor = {};
	 g_editor.canvas = {};
	 g_editor.serialized_parts = {};
	 g_editor.final_canvas_parts = {};
	 g_editor.selected_part = -1;
	 g_editor.canvasManipulationsPosition = [];
	 g_editor.box_center_x = false;
	 g_editor.box_center_y = false;
	 g_editor.scale_factor = false;
	 g_editor.set_part_image = {};
	 var i=0;
	 init_canvas();
	init_empty_canvas_data_array();

	$(document).ready(function(){
		$('#plusSlide').click(function(){

			if(i<testArray.length-1){
			i++;
			click_on_part();
			// g_editor.canvas.clear();
			// init_canvas();
			// init_empty_canvas_data_array();
		}else{
			i=0;
			click_on_part();
			// g_editor.canvas.clear();
			// init_canvas();
			// init_empty_canvas_data_array();
		}
		});
	});

	$(document).ready(function(){
		$('#minusSlide').click(function(){
			if(i>0){
			i--;
			click_on_part();
			// init_canvas();
			// init_empty_canvas_data_array();
		}else{
			i=testArray.length-1;
			click_on_part();
			// init_canvas();
			// init_empty_canvas_data_array();
		}
		});
	});

	function get_optimal_canvas_dimensions() {
            var available_width = $("#editorContainer").outerWidth();
            var available_height = $("#editorContainer").outerHeight()*2.8/2;
            var canvas_w = 0;
            var canvas_h = 0;
            canvas_w = available_width;
            canvas_h = available_height;
            return [canvas_w, canvas_h];
        }

				// if (typeof to_load !== 'undefined'){
				// 	  console.log('hi');
        //     setTimeout(function () {
        //         preload_canvas(to_load);
        //     }, 500);
				// 	}

        // g_editor.canvas = new fabric.Canvas('editor',{preserveObjectStacking: true});
				//------------------------------- INIT CANVAS ---------------------------//
function init_canvas() {
					//Converts g elements strings into float to avoid formatting issues
					//reformat_g_parameters_arr();
					//We determine the best dimensions to use
					var optimal_dimensions = get_optimal_canvas_dimensions();
					g_editor.canvas = new fabric.Canvas('editor', {width: optimal_dimensions[0], height: optimal_dimensions[1]});
					g_editor.canvas.backgroundImageStretch = false;
					//set_clipping_area();
					g_editor.canvas.preserveObjectStacking = true;
					g_editor.canvas.controlsAboveOverlay=true;
					g_editor.canvas.renderAll();
					// load_canvas_listeners();
			}
			// PRELOAD CANVAS
				// function preload_canvas(data)
			  //       {
				// 				console.log("inside preload canvas");
			  //           var first_part_id = $("#gs-parts-bar > li").first().data("id");
			  //           if (typeof data == "object")
			  //           {
			  //               var found_match = false;
			  //               $.each(data, function (index, value) {
			  //                   $.each(value, function (index1, value1) {
			  //                       if (index1 == "json")
			  //                       {
			  //                           g_editor.serialized_parts[index] = [];
			  //                           g_editor.canvasManipulationsPosition[index] = 0;
			  //                           var json_value = value1;
			  //                           g_editor.serialized_parts[index].push(json_value);
			  //                           if (index == first_part_id)
			  //                           {
			  //                               found_match = true;
			  //                               g_editor.selected_part = 0;
			  //                               g_editor.canvas.loadFromJSON(json_value, function () {
			  //                                   g_editor.canvas.renderAll.bind(g_editor.canvas);
			  //                                   //rescale_canvas_if_needed();
			  //                               });
			  //                               g_editor.canvas.calcOffset();
			  //                               load_first_part_img();
			  //                           }
			  //                       }
			  //                   });
			  //               });
			  //               if (!found_match)
			  //                   $("#gs-parts-bar > li").first().click();
			  //               // else
			  //               //     load_background_overlay_if_needed(0);//Make sure the first part data are loaded when preloading the canvas
			  //           }
			  //           setTimeout(function () {
			  //               g_editor.canvas.renderAll();
			  //           }, 500);
				//
			  //       }

							// SAVE CANVAS
							g_editor.save_canvas = function ()
										{

											// console.log('inside save canvas');
												// var data_id = $("#gs-parts-bar > li:eq(" + g_editor.selected_part + ")").attr("data-id");
												var data_id=testArray[g_editor.selected_part].name;
												// console.log(data_id);
												if (typeof g_editor.serialized_parts[data_id] == "undefined")
														g_editor.serialized_parts[data_id] = ["{}"];
												var i;
												for (i = g_editor.canvasManipulationsPosition[data_id]; i <= g_editor.serialized_parts[data_id].length - 2; i++)
												{
														g_editor.serialized_parts[data_id].pop();
												}
												g_editor.canvasManipulationsPosition[data_id]++;
												var json = JSON.stringify(g_editor.canvas.toJSON(['text','lockMovementX','lockMovementY', 'lockRotation', 'lockScalingX', 'lockScalingY', 'lockDeletion', 'originalText', 'radius', 'spacing','hoverCursor','evented','hasControls','hasBorders','selectable','width','height','transparentCorners']));
												g_editor.serialized_parts[data_id].push(json);
												// console.log(g_editor.serialized_parts[data_id]);

												// g_editor.refresh_undo_redo_status();
										}

// Click on part
							//
							// $(document).on("click", "#gs-parts-bar > li", function (e) {
              //            console.log('hi');
						  //           if (g_editor.selected_part == $(this).index())
						  //           {
						  //               return;
						  //           }
						  //           else
						  //           {
							//
							// 							var part_index=$(this).index();
						  //               load_background_overlay_if_needed(part_index);
						  //               $("#gs-parts-bar > li").removeClass("active");
						  //               $(this).addClass("active");
						  //               if (g_editor.selected_part >= 0)
						  //               {
						  //                   g_editor.save_canvas();
						  //                   g_editor.canvas.clear();
						  //               }
						  //               g_editor.selected_part = $(this).index();
						  //           }
							//
						  //           var data_id = $(this).attr("data-id");
						  //           if (typeof g_editor.serialized_parts[data_id] == "undefined")//Fixe les parts non chargés lorsque le to_load est défini
						  //           {
						  //               g_editor.serialized_parts[data_id] = [];
						  //               g_editor.canvasManipulationsPosition[data_id] = -1;
						  //           }
						  //           if (g_editor.serialized_parts[data_id][g_editor.canvasManipulationsPosition[data_id]])
						  //           {
						  //               //            resetZoom();
						  //               $.blockUI({message: "Loading Image"});
						  //               g_editor.canvas.loadFromJSON(g_editor.serialized_parts[data_id][g_editor.canvasManipulationsPosition[data_id]], function () {
						  //                   load_background_overlay_if_needed(part_index);
						  //                   rescale_canvas_if_needed();
						  //                   $.unblockUI();
						  //               });
						  //           }
						  //           // g_editor.refresh_undo_redo_status();
						  //       });


								// UNDO REFRESH STATUS
								// 		g_editor.refresh_undo_redo_status = function ()
								// 		{
								// 			var data_id = $("#gs-parts-bar > li:eq(" + g_editor.selected_part + ")").attr("data-id");
								// 			//console.log((g_editor.serialized_parts[data_id].length==1), (g_editor.canvasManipulationsPosition[data_id]==0));
								// 			if ((g_editor.serialized_parts[data_id].length == 1) || (g_editor.canvasManipulationsPosition[data_id] == 0))
								// 			$("#undo-btn").addClass("disabled");
								// 			else
								// 			$("#undo-btn").removeClass("disabled");
								// 			if ((g_editor.serialized_parts[data_id].length > 0) && (g_editor.canvasManipulationsPosition[data_id] < g_editor.serialized_parts[data_id].length - 1))
								// 			$("#redo-btn").removeClass("disabled");
								// 			else
								// 			$("#redo-btn").addClass("disabled");
								// 		}


										// PRELOAD CANVAS
										// function preload_canvas(data)
										// {
										// 	var first_part_id = $("#gs-parts-bar > li").first().data("id");
										// 	if (typeof data == "object")
										// 	{
										// 		var found_match = false;
										// 		$.each(data, function (index, value) {
										// 			$.each(value, function (index1, value1) {
										// 				if (index1 == "json")
										// 				{
										// 					g_editor.serialized_parts[index] = [];
										// 					g_editor.canvasManipulationsPosition[index] = 0;
										// 					var json_value = value1;
										// 					g_editor.serialized_parts[index].push(json_value);
										// 					if (index == first_part_id)
										// 					{
										// 						found_match = true;
										// 						g_editor.selected_part = 0;
										// 						g_editor.canvas.loadFromJSON(json_value, function () {
										// 							g_editor.canvas.renderAll.bind(g_editor.canvas);
										// 							//rescale_canvas_if_needed();
										// 						});
										// 						g_editor.canvas.calcOffset();
										// 						load_first_part_img();
										// 					}
										// 				}
										// 			});
										// 		});
										// 		if (!found_match)
										// 		$("#gs-parts-bar > li").first().click();
										// 		// else
										// 		//     load_background_overlay_if_needed(0);//Make sure the first part data are loaded when preloading the canvas
										// 	}
										// 	setTimeout(function () {
										// 		g_editor.canvas.renderAll();
										// 	}, 500);
										//
										// }

										// INIT EMPTY CANVAS DATA ARRAY
										function init_empty_canvas_data_array()
										{

											 // console.log(testArray);
											if (typeof to_load == 'undefined')
											{
												$.each(testArray,function (key,value) {
													var data_id = testArray[i].name;


													g_editor.serialized_parts[data_id] = [];
													g_editor.canvasManipulationsPosition[data_id] = -1;
													var nb_parts = testArray.length;

													if (key == nb_parts - 1)
													{

														loop_through_parts('1000', click_on_part,
														function () {

															// $("#gs-parts-bar > li").first().click();

															g_editor.canvas.renderAll();
															// rescale_canvas_if_needed();

															$.unblockUI();
														});

													}
												});
											}
										}

										// RELOAD FIRST PART DATA
										// function reload_first_part_data()
										// {
										// 	var data_id = $("#gs-parts-bar > li:eq(0)").attr("data-id");
										// 	g_editor.canvas.clear();
										// 	//console.log(g_editor.serialized_parts[data_id][g_editor.canvasManipulationsPosition[data_id]])
										// 	g_editor.canvas.loadFromJSON(g_editor.serialized_parts[data_id][g_editor.canvasManipulationsPosition[data_id]], function () {
										// 		g_editor.canvas.renderAll.bind(g_editor.canvas);
										// 		rescale_canvas_if_needed();
										// 	});
										// }
										//
										// // LOAD FIRST PART IMAGE
										// function load_first_part_img()
										// {
										// 	var bg_url = $("#gs-parts-bar > li").first().attr("data-url");
										//
										// 	fabric.Image.fromURL(bg_url, function(myImg) {
										//
										// 		var img1 = myImg.set({ left: -50, top: -40 ,selectable:false,eventable:false,hoverCursor: 'default'}).scale(0.5);
										// 		img1.hasControls = false;
										// 		img1.hasBorders = false;
										// 		img1.lockMovementX = true;
										// 		img1.lockMovementY = true;
										// 		g_editor.canvas.add(myImg);
										//
										// 	});
										// 	g_editor.canvas.renderAll();
										// }


										// CLICK ON PART
										function click_on_part()
										{

											// $("#gs-parts-bar > li:eq(" + part_index + ")").click();
											$.each(testArray,function(key,value){
												// for(var i=0;i<testArray.length;i++){
                       // var g_editor.selected_part=i;
											 if (g_editor.selected_part == i)
											 {
													 return;
											 }
											 else
											 {

													 var part_index=i;
													 load_background_overlay_if_needed(part_index);
													 // $("#gs-parts-bar > li").removeClass("active");
													 // $(this).addClass("active");

													 if (g_editor.selected_part >= 0)
													 {
															 g_editor.save_canvas();
															 g_editor.canvas.clear();
													 }
													 g_editor.selected_part = i;

											 }

											 var data_id = testArray[i].name;


											 if (typeof g_editor.serialized_parts[data_id] == "undefined")//Fixe les parts non chargés lorsque le to_load est défini
											 {
													 g_editor.serialized_parts[data_id] = [];
													 g_editor.canvasManipulationsPosition[data_id] = -1;
											 }
											 if (g_editor.serialized_parts[data_id][g_editor.canvasManipulationsPosition[data_id]])
											 {
													 //            resetZoom();
													 $.blockUI({message: "Loading Image"});
													 g_editor.canvas.loadFromJSON(g_editor.serialized_parts[data_id][g_editor.canvasManipulationsPosition[data_id]], function () {
															 load_background_overlay_if_needed(part_index);
															 // rescale_canvas_if_needed();
															 $.unblockUI();
													 },function(o,object){
														 if((object.type=="text")||(object.type=="curved-text")){
															 object.on("selected",function(){
																 $('#firstlook').hide();
																 $('#textSettingModal').modal("show");
															 });
														 }
														 else if((object.type=="rect")||(object.type=="ellipse")||(object.type=="circle")||(object.type=="triangle")||(object.type=="path")||(object.type=="polygon")){
															 object.on("selected",function(){
																 $('#firstlook').hide();
																 $('#shapesSettingModal').modal("show");
															 });
														 }
													 });
											 }
											 // g_editor.refresh_undo_redo_status();

										 });
										}


										// LOOP THROUGH PARTS
										function loop_through_parts(delay, loop_callback, end_callback)
										{
											$.blockUI({message: "Just a moment"});
											// var nb_parts = $("#gs-parts-bar > li").length;
											var nb_parts=testArray.length;

											var i = 0;

											var loopKey = setInterval(function () {
												if ($.isFunction(loop_callback))
												loop_callback(i);

												if (i == nb_parts - 1)
												{

													window.clearInterval(loopKey);
													if ($.isFunction(end_callback))
													{
														setTimeout(function () {
															end_callback();
														}, delay);
													}
													else
													$.unblockUI();
												}
												else
												i++;
											}, delay);

										}

										// RESCALE CANVAS IF NEEDED
										function rescale_canvas_if_needed()
										{

											var current_canvas_w=g_editor.canvas.getWidth();
											var optimal_dimensions = get_optimal_canvas_dimensions();
											var scaleFactor = optimal_dimensions[0] / current_canvas_w;

											if (scaleFactor != 1) {
												g_editor.scale_factor = scaleFactor;
												g_editor.canvas.setWidth(optimal_dimensions[0]);
												g_editor.canvas.setHeight(optimal_dimensions[1]);
												// g_editor.canvas.setZoom(scaleFactor);
												g_editor.canvas.calcOffset();
												g_editor.canvas.renderAll();
											}
											// applyImageFilters();
										}

										// APPLY IMAGE FILTERS
										function applyImageFilters() {

											g_editor.canvas.forEachObject(function (obj) {

												if (obj.type === 'image' && obj.filters.length) {

													obj.applyFilters(function () {
														obj.canvas.renderAll();
													});
												}
											});
										}

										// LOAD BACKGROUND OVERLAY IF NEEDED
										function load_background_overlay_if_needed(index, callback, generating_output)
										{
											var output_format = "jpg";
											// var canvas_width = $("#gseditorContainer").outerWidth();
											// var canvas_height = $("#editorContainer").outerHeight();
											// var selector = $("#gs-parts-bar > li:eq(" + index + ")");
											var selector=testArray[i];
											// console.log(selector["bg-not-inc"]);
											var overlay_not_included = selector["ov-inc"];
											if (typeof generating_output == 'undefined')
											generating_output = false;
											var canvas_bg = selector["ov-img"];
											if (canvas_bg == "")
											canvas_bg = null;
											var canvas_ov = selector["ov-inc"];
											if (canvas_ov == "")
											canvas_ov = null;

											// var bg_img = new Image();
											// //Both background and overlay images consider the scale when being defined so we don't need to resize them
											// bg_img.onload = function () {
											// 	var dimensions = g_editor.get_img_best_fit_dimensions(bg_img, canvas_width, canvas_height);
											// 	g_editor.canvas.setBackgroundImage(bg_img.src, g_editor.canvas.renderAll.bind(g_editor.canvas), {
											// 		left: canvas_width / 2,
											// 		top: canvas_height/ 2,
											// 		originX: 'center',
											// 		originY: 'center',
											// 		width: dimensions[0],
											// 		height: dimensions[1]
											// 	});
											// };
											// if (canvas_bg != null)
											// bg_img.src = canvas_bg;
											// else
											// g_editor.canvas.backgroundImage = null;

											// if (overlay_not_included == "-1" && generating_output)
											// {
											// 	//White bg if CMYK mode
											// 	if (output_format == "jpg")
											// 	{
											// 		g_editor.canvas.setBackgroundColor("rgba(255, 255, 255, 1)", g_editor.canvas.renderAll.bind(g_editor.canvas));
											// 	}
											// 	g_editor.canvas.overlayImage = null;
											// 	g_editor.canvas.renderAll.bind(g_editor.canvas);
											// }
											// else
											// {
											// 	//White bg if CMYK mode
											// 	if (output_format == "jpg")
											// 	{
											// 		g_editor.canvas.setBackgroundColor("rgba(255, 255, 255, 1)", g_editor.canvas.renderAll.bind(g_editor.canvas));
											// 	}
											// 	var ov_img = new Image();
											// 	ov_img.onload = function () {
											// 		var dimensions = g_editor.get_img_best_fit_dimensions(ov_img, canvas_width, canvas_height);
											// 		g_editor.canvas.setOverlayImage(ov_img.src, g_editor.canvas.renderAll.bind(g_editor.canvas), {
											// 			left: 180,
											// 			top: 10,
											// 			originX: 'center',
											// 			originY: 'center',
											// 			width: dimensions[0],
											// 			height: dimensions[1]
											// 		});
											// 	};
											// 	if (canvas_ov != null)
											// 	ov_img.src = canvas_ov;
											// 	else
											// 	g_editor.canvas.overlayImage = null;
											//
											// }

											//Background not included
											var bg_not_included_url = selector["bg-not-inc"];
											var bg_id=selector['name'];
											if (typeof g_editor.set_part_image[bg_id] == "undefined")//Fixe les parts non chargés lorsque le to_load est défini
							            {
							                g_editor.set_part_image[bg_id] = 0;
							            }
											if (bg_not_included_url)
											{
												if(g_editor.set_part_image[bg_id] == 0) {
												//     var bg_code = "url('" + bg_not_included_url + "') no-repeat center center";
												//     $("#editorContainer .canvas-container").css("background", bg_code);
												// $("#editorContainer .canvas-container").css("background", "none");
												var width = $("#editorContainer").outerWidth();
												var height = $("#editorContainer").outerHeight()*1.5;
												// var backgroundImage1 = new fabric.Image.fromURL(bg_not_included_url, function(myImg) {
												var backgroundImage1 = new fabric.Image.fromURL(bg_not_included_url, function(myImg) {
													var img1 = myImg.set({ left: -45, top: -40, selectable: false, hoverCursor: 'default',evented : false,id : "mobile"}).scale(0.5);
													g_editor.canvas.add(img1);
													img1.hasControls = false;
													img1.hasBorders = false;
													img1.lockMovementX = true;
													img1.lockMovementY = true;
													// img1.scaleToWidth(width);
													//   		img1.scaleToHeight(height);
													g_editor.canvas.renderAll();
												});
												g_editor.set_part_image[bg_id]=1;
											}
											}
											else
											$("#editorContainer .editor").css("background", "none");
											if ($.isFunction(callback))
											setTimeout(function () {
												callback(index);
											}, 200);
										}


		// fabric.Image.fromURL('images/product/mobile-cover/Apple-Iphone-8/Apple-Iphone-8.png', function(myImg) {
		//
		//   var img1 = myImg.set({ left: -50, top: -40 ,selectable:false,eventable:false,hoverCursor: 'default'}).scale(0.5);
		// 	img1.hasControls = false;
		// 	img1.hasBorders = false;
		// 	img1.lockMovementX = true;
		// 	img1.lockMovementY = true;
		// 	g_editor.canvas.add(myImg);
		// 	g_editor.canvas.renderAll();
		// });



		return g_editor;

}(jQuery,G_EDITOR));
