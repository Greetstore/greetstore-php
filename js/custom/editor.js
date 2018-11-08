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
	 init_canvas();
	init_empty_canvas_data_array();
	function get_optimal_canvas_dimensions() {
            var available_width = $("#editorContainer").outerWidth();
            var available_height = $("#editorContainer").outerHeight()*2.8/2;
            var canvas_w = 0;
            var canvas_h = 0;
            canvas_w = available_width;
            canvas_h = available_height;
            return [canvas_w, canvas_h];
        }

				if (typeof to_load !== 'undefined')
            setTimeout(function () {
                preload_canvas(to_load);
            }, 500);

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
				function preload_canvas(data)
			        {
								console.log('hi');
			            var first_part_id = $("#gs-parts-bar > li").first().data("id");
			            if (typeof data == "object")
			            {
			                var found_match = false;
			                $.each(data, function (index, value) {
			                    $.each(value, function (index1, value1) {
			                        if (index1 == "json")
			                        {
			                            g_editor.serialized_parts[index] = [];
			                            g_editor.canvasManipulationsPosition[index] = 0;
			                            var json_value = value1;
			                            g_editor.serialized_parts[index].push(json_value);
			                            if (index == first_part_id)
			                            {
			                                found_match = true;
			                                g_editor.selected_part = 0;
			                                g_editor.canvas.loadFromJSON(json_value, function () {
			                                    g_editor.canvas.renderAll.bind(g_editor.canvas);
			                                    //rescale_canvas_if_needed();
			                                });
			                                g_editor.canvas.calcOffset();
			                                load_first_part_img();
			                            }
			                        }
			                    });
			                });
			                if (!found_match)
			                    $("#gs-parts-bar > li").first().click();
			                // else
			                //     load_background_overlay_if_needed(0);//Make sure the first part data are loaded when preloading the canvas
			            }
			            setTimeout(function () {
			                g_editor.canvas.renderAll();
			            }, 500);

			        }

							// PRELOAD CANVAS
							function preload_canvas(data)
						        {
						            var first_part_id = $("#gs-parts-bar > li").first().data("id");
						            if (typeof data == "object")
						            {
						                var found_match = false;
						                $.each(data, function (index, value) {
						                    $.each(value, function (index1, value1) {
						                        if (index1 == "json")
						                        {
						                            g_editor.serialized_parts[index] = [];
						                            g_editor.canvasManipulationsPosition[index] = 0;
						                            var json_value = value1;
						                            g_editor.serialized_parts[index].push(json_value);
						                            if (index == first_part_id)
						                            {
						                                found_match = true;
						                                g_editor.selected_part = 0;
						                                g_editor.canvas.loadFromJSON(json_value, function () {
						                                    g_editor.canvas.renderAll.bind(g_editor.canvas);
						                                    //rescale_canvas_if_needed();
						                                });
						                                g_editor.canvas.calcOffset();
						                                load_first_part_img();
						                            }
						                        }
						                    });
						                });
						                if (!found_match)
						                    $("#gs-parts-bar > li").first().click();
						                // else
						                //     load_background_overlay_if_needed(0);//Make sure the first part data are loaded when preloading the canvas
						            }
						            setTimeout(function () {
						                g_editor.canvas.renderAll();
						            }, 500);

						        }

										// INIT EMPTY CANVAS DATA ARRAY
													function init_empty_canvas_data_array()
													{

															if (typeof to_load == 'undefined')
															{
																	$("#gs-parts-bar > li").each(function (key) {
																			var data_id = $(this).attr("data-id");
																			g_editor.serialized_parts[data_id] = [];
																			g_editor.canvasManipulationsPosition[data_id] = -1;
																			var nb_parts = $("#gs-parts-bar > li").length;
																			if (key == nb_parts - 1)
																			{
																					loop_through_parts('1000', click_on_part,
																									function () {
																											$("#gs-parts-bar > li").first().click();
																											g_editor.canvas.renderAll();
																											rescale_canvas_if_needed();
																											$.unblockUI();
																									});
																			}
																	});
															}
													}

										// RELOAD FIRST PART DATA
										function reload_first_part_data()
													{
															var data_id = $("#gs-parts-bar > li:eq(0)").attr("data-id");
															g_editor.canvas.clear();
															//console.log(g_editor.serialized_parts[data_id][g_editor.canvasManipulationsPosition[data_id]])
															g_editor.canvas.loadFromJSON(g_editor.serialized_parts[data_id][g_editor.canvasManipulationsPosition[data_id]], function () {
																	g_editor.canvas.renderAll.bind(g_editor.canvas);
																	rescale_canvas_if_needed();
															});
													}

										// LOAD FIRST PART IMAGE
													function load_first_part_img()
													{
												var bg_url = $("#gs-parts-bar > li").first().attr("data-url");

												fabric.Image.fromURL(bg_url, function(myImg) {

													var img1 = myImg.set({ left: -50, top: -40 ,selectable:false,eventable:false,hoverCursor: 'default'}).scale(0.5);
													img1.hasControls = false;
													img1.hasBorders = false;
													img1.lockMovementX = true;
													img1.lockMovementY = true;
													g_editor.canvas.add(myImg);

												});
												g_editor.canvas.renderAll();
												}


														// CLICK ON PART
													        function click_on_part(part_index)
													        {
													            $("#gs-parts-bar > li:eq(" + part_index + ")").click();
													        }

														// LOOP THROUGH PARTS
														function loop_through_parts(delay, loop_callback, end_callback)
													        {
													            $.blockUI({message: "Just a moment"});
													            var nb_parts = $("#gs-parts-bar > li").length;
													            var current_part = 0;
													            var loopKey = setInterval(function () {
													                if ($.isFunction(loop_callback))
													                    loop_callback(current_part);
													                if (current_part == nb_parts - 1)
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
													                    current_part++;
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
																								g_editor.canvas.setZoom(scaleFactor);
																								g_editor.canvas.calcOffset();
																								g_editor.canvas.renderAll();
																						}
																						applyImageFilters();
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
