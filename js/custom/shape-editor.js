
var G_EDITOR = (function ($, g_editor) {
	$(document).ready(function(){

		/* ==================================== Customized.php ====================================*/

		/*------- Firstlook --------*/

		/* on shapes button click */
		$(document).on("click", "#shapesModalFirstlook", function() {
			$('#firstlook').hide();
		});

		/* ==================================== Footer.php ====================================*/

		/*------- Shapes Modal --------*/

		/* on rectangle shape click */
		$(document).on("click", "#rectangle", function() {


			var rect = new fabric.Rect({
				top: 150,
				left: 180,
				width: 75,
				height: 50,
				fill: 'blue',


				originX: 'center'
			});


			rect.on("selected", function() {
				$('#textSettingModal').modal('hide');
				$('#imageSettingModal').modal('hide');
				$("#firstlook").hide();
				$("#shapesSettingModal").modal("show");
			});


			g_editor.canvas.add(rect);
			g_editor.canvas.setActiveObject(rect);

			g_editor.canvas.renderAll();
			g_editor.save_canvas();


			$("#shapesModal").modal("hide");
			$('#firstlook').hide();
			$("#shapesSettingModal").modal("show");



		});

		/* on square shape click */
		$(document).on("click", "#square", function() {


			var square = new fabric.Rect({
				top: 150,
				left: 180,
				width: 50,
				height: 50,
				fill: 'blue',


				originX: 'center'
			});

			square.on("selected", function() {

				$('#textSettingModal').modal('hide');
				$('#imageSettingModal').modal('hide');
				$("#firstlook").hide();
				$("#shapesSettingModal").modal("show");
			});


			g_editor.canvas.add(square);
			g_editor.canvas.setActiveObject(square);

			g_editor.canvas.renderAll();
			g_editor.save_canvas();


			$("#shapesModal").modal("hide");
			$('#firstlook').hide();
			$("#shapesSettingModal").modal("show");

		});

		/* on rounded square shape click */
		$(document).on("click", "#rounded_square", function() {


			var rsquare = new fabric.Rect({
				top: 150,
				left: 180,
				width: 50,
				height: 50,
				cornersize: 100,
				fill: 'blue',
				rx: 10,
				ry: 10,
				originX: 'center'
			});

			rsquare.on("selected", function() {

				$('#textSettingModal').modal('hide');
				$('#imageSettingModal').modal('hide');
				$("#firstlook").hide();
				$("#shapesSettingModal").modal("show");
			});


			g_editor.canvas.add(rsquare);
			g_editor.canvas.setActiveObject(rsquare);

			g_editor.canvas.renderAll();
			g_editor.save_canvas();


			$("#shapesModal").modal("hide");
			$('#firstlook').hide();
			$("#shapesSettingModal").modal("show");

		});

		/* on ellipse shape click */
		$(document).on("click", "#ellipse", function() {

			var eli = new fabric.Ellipse({
				top: 150,
				left: 110,
				rx: 50,
				ry: 25,
				fill: 'blue',

				strokeWidth: 4,
			});

			eli.on("selected", function() {

				$('#textSettingModal').modal('hide');
				$('#imageSettingModal').modal('hide');
				$("#firstlook").hide();
				$("#shapesSettingModal").modal("show");
			});


			g_editor.canvas.add(eli);
			g_editor.canvas.setActiveObject(eli);

			g_editor.canvas.renderAll();
			g_editor.save_canvas();

			$("#shapesModal").modal("hide");
			$('#firstlook').hide();
			$("#shapesSettingModal").modal("show");

		});

		/* on circle shape click */
		$(document).on("click", "#circle", function() {

			var cir = new fabric.Circle({
				top: 100,
				left: 180,
				radius: 25,
				fill: 'blue',


				originX: 'center'
			});
			cir.on("selected", function() {

				$('#textSettingModal').modal('hide');
				$('#imageSettingModal').modal('hide');
				$("#firstlook").hide();
				$("#shapesSettingModal").modal("show");
			});


			g_editor.canvas.add(cir);
			g_editor.canvas.setActiveObject(cir);

			g_editor.canvas.renderAll();
			g_editor.save_canvas();


			$("#shapesModal").modal("hide");
			$('#firstlook').hide();
			$("#shapesSettingModal").modal("show");
		});

		/* on triangle shape click */
		$(document).on("click", "#triangle", function() {

			var tri = new fabric.Triangle({
				top: 100,
				left: 180,
				width: 50,
				height: 50,
				fill: 'blue',


				originX: 'center'
			});
			tri.on("selected", function() {

				$('#textSettingModal').modal('hide');
				$('#imageSettingModal').modal('hide');
				$("#firstlook").hide();
				$("#shapesSettingModal").modal("show");
			});


			g_editor.canvas.add(tri);
			g_editor.canvas.setActiveObject(tri);

			g_editor.canvas.renderAll();
			g_editor.save_canvas();


			$("#shapesModal").modal("hide");
			$('#firstlook').hide();
			$("#shapesSettingModal").modal("show");

		});

		/* on heart shape click */
		$(document).on("click", "#heart", function(e) {

			var heart = new fabric.Path('M 272.70141,238.71731 \
			C 206.46141,238.71731 152.70146,292.4773 152.70146,358.71731  \
			C 152.70146,493.47282 288.63461,528.80461 381.26391,662.02535 \
			C 468.83815,529.62199 609.82641,489.17075 609.82641,358.71731 \
			C 609.82641,292.47731 556.06651,238.7173 489.82641,238.71731  \
			C 441.77851,238.71731 400.42481,267.08774 381.26391,307.90481 \
			C 362.10311,267.08773 320.74941,238.7173 272.70141,238.71731  \
			z ');
			var scale = 100 / heart.width;
			heart.set({
				left: 140,
				top: 140,
				scaleX: scale,
				scaleY: scale,
				fill: 'blue',
				opacity: 1,
				selectable: true
			});


			heart.on("selected", function() {

				$('#textSettingModal').modal('hide');
				$('#imageSettingModal').modal('hide');
				$("#firstlook").hide();
				$("#shapesSettingModal").modal("show");
			});


			g_editor.canvas.add(heart);
			g_editor.canvas.setActiveObject(heart);

			g_editor.canvas.renderAll();
			g_editor.save_canvas();


			$("#shapesModal").modal("hide");
			$('#firstlook').hide();
			$("#shapesSettingModal").modal("show");
		});


		var trapezoid = [{
			x: -100,
			y: -50
		}, {
			x: 100,
			y: -50
		}, {
			x: 150,
			y: 50
		}, {
			x: -150,
			y: 50
		}];
		var emerald = [{
			x: 35,
			y: 90
		},
		{
			x: 63,
			y: 90
		},
		{
			x: 86,
			y: 74
		},
		{
			x: 95,
			y: 47
		},
		{
			x: 86,
			y: 19
		},
		{
			x: 63,
			y: 0
		},
		{
			x: 35,
			y: 0
		},
		{
			x: 11,
			y: 19
		},
		{
			x: 0,
			y: 45
		},
		{
			x: 11,
			y: 72
		},
	];
	var star4 = [{
		x: 26,
		y: 90
	},
	{
		x: 65,
		y: 90
	},
	{
		x: 88,
		y: 57
	},
	{
		x: 81,
		y: 18
	},
	{
		x: 45,
		y: 0
	},
	{
		x: 12,
		y: 18
	},
	{
		x: 0,
		y: 58
	}
];
var star5 = [{
	x: 46,
	y: 90
},
{
	x: 58,
	y: 56
},
{
	x: 93,
	y: 55
},
{
	x: 65,
	y: 35
},
{
	x: 77,
	y: 0
},
{
	x: 48,
	y: 22
},
{
	x: 19,
	y: 0
},
{
	x: 30,
	y: 35
},
{
	x: 0,
	y: 56
},
{
	x: 37,
	y: 56
}
];
var polygon3 = [{
	x: 0,
	y: 50
},
{
	x: 45,
	y: 80
},
{
	x: 85,
	y: 50
},
{
	x: 70,
	y: 0
},
{
	x: 17,
	y: 0
}
];
var polygon4 = [{
	x: 45,
	y: 90
},
{
	x: 90,
	y: 70
},
{
	x: 90,
	y: 20
},
{
	x: 45,
	y: 0
},
{
	x: 0,
	y: 20
},
{
	x: 0,
	y: 70
}
];
var star8 = [{
	x: 46,
	y: 90
},
{
	x: 52,
	y: 63
},
{
	x: 77,
	y: 78
},
{
	x: 61,
	y: 53
},
{
	x: 89,
	y: 46
},
{
	x: 61,
	y: 40
},
{
	x: 77,
	y: 14
},
{
	x: 52,
	y: 30
},
{
	x: 46,
	y: 0
},
{
	x: 37,
	y: 30
},
{
	x: 14,
	y: 14
},
{
	x: 27,
	y: 39
},
{
	x: 0,
	y: 46
},
{
	x: 27,
	y: 53
},
{
	x: 13,
	y: 77
},
{
	x: 37,
	y: 62
}
];
var star10 = [{
	x: 35,
	y: 90
},
{
	x: 50,
	y: 81
},
{
	x: 63,
	y: 90
},
{
	x: 69,
	y: 73
},
{
	x: 88,
	y: 73
},
{
	x: 82,
	y: 56
},
{
	x: 96,
	y: 46
},
{
	x: 82,
	y: 36
},
{
	x: 87,
	y: 18
},
{
	x: 70,
	y: 18
},
{
	x: 63,
	y: 0
},
{
	x: 49,
	y: 12
},
{
	x: 35,
	y: 0
},
{
	x: 28,
	y: 18
},
{
	x: 11,
	y: 18
},
{
	x: 17,
	y: 35
},
{
	x: 0,
	y: 46
},
{
	x: 17,
	y: 56
},
{
	x: 11,
	y: 73
},
{
	x: 28,
	y: 73
}
];
var shape = new Array(trapezoid, emerald, star4, star5, polygon3, polygon4, star8, star10);

/* on polygon shape click */
$(document).on("click", "#polygon", function() {
	var polyg = new fabric.Polygon(shape[1], {
		top: 100,
		left: 100,
		fill: 'blue',

		strokeWidth: 2
	});
	polyg.on("selected", function() {

		$('#textSettingModal').modal('hide');
		$('#imageSettingModal').modal('hide');
		$("#firstlook").hide();
		$("#shapesSettingModal").modal("show");
	});


	g_editor.canvas.add(polyg);
	g_editor.canvas.setActiveObject(polyg);

	g_editor.canvas.renderAll();
	g_editor.save_canvas();

	$("#shapesModal").modal("hide");
	$('#firstlook').hide();
	$("#shapesSettingModal").modal("show");
});

/* on polygon3 shape click */
$(document).on("click", "#polygon3", function() {
	var polyg3 = new fabric.Polygon(shape[4], {
		top: 200,
		left: 225,
		fill: 'blue',

		angle: 180,
		strokeWidth: 2
	});
	polyg3.on("selected", function() {

		$('#textSettingModal').modal('hide');
		$('#imageSettingModal').modal('hide');
		$("#firstlook").hide();
		$("#shapesSettingModal").modal("show");
	});


	g_editor.canvas.add(polyg3);
	g_editor.canvas.setActiveObject(polyg3);

	g_editor.canvas.renderAll();
	g_editor.save_canvas();

	$("#shapesModal").modal("hide");
	$('#firstlook').hide();
	$("#shapesSettingModal").modal("show");
});

/* on polygon1 shape click */
$(document).on("click", "#polygon1", function() {
	var polyg1 = new fabric.Polygon(shape[2], {
		top: 220,
		left: 240,
		angle: 180,
		fill: 'blue',

		strokeWidth: 2
	});
	polyg1.on("selected", function() {

		$('#textSettingModal').modal('hide');
		$('#imageSettingModal').modal('hide');
		$("#firstlook").hide();
		$("#shapesSettingModal").modal("show");
	});



	g_editor.canvas.add(polyg1);
	g_editor.canvas.setActiveObject(polyg1);

	g_editor.canvas.renderAll();
	g_editor.save_canvas();


	$("#shapesModal").modal("hide");
	$('#firstlook').hide();
	$("#shapesSettingModal").modal("show");

});

/* on polygon4 shape click */
$(document).on("click", "#polygon4", function() {
	var polyg4 = new fabric.Polygon(shape[5], {
		top: 220,
		left: 240,
		angle: 180,
		fill: 'blue',

		strokeWidth: 2
	});
	polyg4.on("selected", function() {

		$('#textSettingModal').modal('hide');
		$('#imageSettingModal').modal('hide');
		$("#firstlook").hide();
		$("#shapesSettingModal").modal("show");
	});



	g_editor.canvas.add(polyg4);
	g_editor.canvas.setActiveObject(polyg4);

	g_editor.canvas.renderAll();
	g_editor.save_canvas();


	$("#shapesModal").modal("hide");
	$('#firstlook').hide();
	$("#shapesSettingModal").modal("show");

});

/* on star shape click */
$(document).on("click", "#star", function() {
	var star = new fabric.Polygon(shape[3], {
		top: 220,
		left: 240,
		angle: 180,
		fill: 'blue',

		strokeWidth: 2
	});
	star.on("selected", function() {

		$('#textSettingModal').modal('hide');
		$('#imageSettingModal').modal('hide');
		$("#firstlook").hide();
		$("#shapesSettingModal").modal("show");
	});



	g_editor.canvas.add(star);
	g_editor.canvas.setActiveObject(star);

	g_editor.canvas.renderAll();
	g_editor.save_canvas();


	$("#shapesModal").modal("hide");
	$('#firstlook').hide();
	$("#shapesSettingModal").modal("show");

});

/* on star1 shape click */
$(document).on("click", "#star1", function() {
	var star1 = new fabric.Polygon(shape[6], {
		top: 220,
		left: 240,
		angle: 180,
		fill: 'blue',

		strokeWidth: 2
	});
	star1.on("selected", function() {

		$('#textSettingModal').modal('hide');
		$('#imageSettingModal').modal('hide');
		$("#firstlook").hide();
		$("#shapesSettingModal").modal("show");
	});



	g_editor.canvas.add(star1);
	g_editor.canvas.setActiveObject(star1);

	g_editor.canvas.renderAll();
	g_editor.save_canvas();


	$("#shapesModal").modal("hide");
	$('#firstlook').hide();
	$("#shapesSettingModal").modal("show");

});

/* on star2 shape click */
$(document).on("click", "#star2", function() {
	var star2 = new fabric.Polygon(shape[7], {
		top: 220,
		left: 240,
		angle: 180,
		fill: 'blue',

		strokeWidth: 2
	});
	star2.on("selected", function() {

		$('#textSettingModal').modal('hide');
		$('#imageSettingModal').modal('hide');
		$("#firstlook").hide();
		$("#shapesSettingModal").modal("show");
	});



	g_editor.canvas.add(star2);
	g_editor.canvas.setActiveObject(star2);

	g_editor.canvas.renderAll();
	g_editor.save_canvas();


	$("#shapesModal").modal("hide");
	$('#firstlook').hide();
	$("#shapesSettingModal").modal("show");

});

/* close shapes modal */
$(document).on('click', '.realdivShapes', function() {
	g_editor.canvas.discardActiveObject();
	g_editor.canvas.renderAll();
	$("#shapesSettingModal").modal("hide");
	$("#firstlook").show();

});

/*------- Shapes setting modal --------*/

/* shapes color change on click  */
$(document).on("change", "input[name=shapesColor]", function() {
	var selected_object = g_editor.canvas.getActiveObject();
	if ((selected_object != null)) {
		var value = $('input[name=shapesColor]:checked').val();
		selected_object.set({
			fill: value
		});
		g_editor.canvas.renderAll();
		g_editor.save_canvas();
	}

});

/* close shapesSettingModal button */
$(document).on("click", "#shapesCloseModal", function() {
	$('#firstlook').show();
	$('#shapesModal').modal("hide");
});



});
return g_editor;
}(jQuery,(G_EDITOR || {})));
