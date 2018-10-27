var G_EDITOR = (function ($, g_editor) {
		var g_editor = {};
		g_editor.canvas = {};


        g_editor.canvas = new fabric.Canvas('editor');
	
		fabric.Image.fromURL('images/product/mobile-cover/Apple-Iphone-8/Apple-Iphone-8.png', function(myImg) {
		 var img1 = myImg.set({ left: -50, top: -40 ,width:480,height:480});
		 g_editor.canvas.add(myImg);
		});


		return g_editor;
}(jQuery,G_EDITOR));
