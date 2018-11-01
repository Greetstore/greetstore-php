var G_EDITOR = (function ($, g_editor) {
		var g_editor = {};
		g_editor.canvas = {};


        g_editor.canvas = new fabric.Canvas('editor',{preserveObjectStacking: true});

		fabric.Image.fromURL('images/product/mobile-cover/Apple-Iphone-8/Apple-Iphone-8.png', function(myImg) {

		  var img1 = myImg.set({ left: -50, top: -40 ,width:1000,height:1000,selectable:false,eventable:false,hoverCursor: 'default'}).scale(0.5);
			img1.hasControls = false;
		img1.hasBorders = false;
		img1.lockMovementX = true;
		img1.lockMovementY = true;
		 g_editor.canvas.add(myImg);
		 g_editor.canvas.renderAll();
		});



		return g_editor;
}(jQuery,G_EDITOR));
