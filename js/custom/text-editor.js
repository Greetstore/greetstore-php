var G_EDITOR = (function ($, g_editor) {

		$(document).ready( function() {

			$(document).on('click','.add_text',function() {
				//alert("Hi");
				var new_text = $('#new_text').val();
				add_text(new_text, false, false);

			});
			function add_text(txt, left, right) {
				var text = create_text_elmt(txt);

				g_editor.canvas.add(text);
				g_editor.canvas.renderAll();
			}

			function create_text_elmt(txt) {
				var text = new fabric.Text(txt, {
                fontSize: 10,
                fontWeight: 'normal',
                fontStyle: 'bold',
                textDecoration: 'none',
                fill: 'green',
                opacity: 1,
				//backgroundColor: bgColor

            });
            //text.set("originX", "center");
            //text.set("originY", "center");

			return text;
			}

		});
		return g_editor;
}(jQuery,(G_EDITOR || {})));
