




<!-- Scripts Js -->


<script src="js/jquery-3.2.1.min.js" charset="utf-8"></script>
<script src="js/bootstrap-3.3.7.min.js" charset="utf-8"></script>
<!-- <script src="js/fabric.min.js" charset="utf-8"></script> -->
<script src="js/fabric.js" charset="utf-8"></script>
<script src="js/fabric-extension.js" charset="utf-8"></script>
<script src="js/jquery.lazyload.min.js" charset="utf-8"></script>
<script src="js/modernizr.min.js" charset="utf-8"></script>
<script src="js/custom/editor.js" charset="utf-8"></script>
<script src="js/custom/text-editor.js" charset="utf-8"></script>








<!-- Modals -->

<!-- Start textModal -->
<div class="modal fade" id="textModal" role="dialog" data-backdrop="static" data-keyboard="false">
   <div class="modal-dialog modal-sm">
     <div class="modal-content">

       <div class="self-modal">
         <form>
         <div class="text-center">
           <textarea class="text-center" name="name" id="new_text" placeholder="Your text here"></textarea>
         </div>
        <div class="row">
         <div class="col-sm-6 col-xs-6 col-md-6 col-lg-6 canceldiv">
         <button type="button" class="btn btn-default col-sm-12 col-xs-12 textModalbtn" data-dismiss="modal">Cancel</button>
         </div>
         <div class="col-sm-6 col-xs-6 col-md-6 col-lg-6 applydiv">
         <button type="button" class="btn btn-primary add_text col-sm-12 col-xs-12 textModalbtn" id="hell" name="add_text" style="border-radius:0px;">Apply</button>
         </div>
       </div>
      </form>
       </div>

     </div>
   </div>
 </div>
<!-- End textModal -->


<!-- shapesModal -->
 <div class="modal fade" id="shapesModal" role="dialog" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>

        </div>
        <div class="modal-body">

          <div class="row">
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
           image 1
           </div>
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            image 2
           </div>

          </div>

          <div class="row">
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
           image 1
           </div>
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            image 2
           </div>

          </div>

          <div class="row">
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
           image 1
           </div>
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            image 2
           </div>

          </div>

          <div class="row">
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
           image 1
           </div>
           <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            image 2
           </div>

          </div>

        </div>

      </div>
    </div>
  </div>
  <!-- End shapesModal -->

<!-- Start textSettingModal -->
<div class="modal fade allTextModals" id="textSettingModal" role="dialog" data-backdrop="static" data-keyboard="false">
   <div class="modal-dialog modal-sm">
     <div class="modal-content">

   <div class="modal-header">
   <span id="textsetting">Text Setting</span>
  <button type="button" class="realdiv" name="button">Close X</button></span>
   </div>

   <div class="modal-body">
     <div class="tab-content">
        <div id="colorModal" class="tab-pane fade in active">
         <?php include "includes/colors.php" ?>
        </div>
        <div id="fontModal" class="tab-pane fade">
        <ul class="list-unstyled fontstext text-center striped-list" id="fontModalList">
          <li data-id="Alegreya" style="font-family: 'Alegreya', serif;">Algreya</li>
          <li data-id="Alfa Slab One" style="font-family: 'Alfa Slab One', cursive;" >Alfa</li>
          <li data-id="Indie Flower" style="font-family: 'Indie Flower', cursive" >Indie flower</li>
          <li data-id="Poor Story" style="font-family:'Amatic SC', cursive;" >Amatic sc</li>
          <li data-id="Spicy Rice" style="font-family: 'Spicy Rice', cursive;" >Spicy rice</li>
          <li data-id="Open Sans Condensed" style="font-family: 'Open Sans Condensed', sans-serif;" >Open sans condensed</li>
          <li data-id="Roboto Mono" style="font-family: 'Roboto Mono', monospace;" >Roboto mono</li>
          <li data-id="Patrick Hand" style="font-family: 'Patrick Hand', cursive;" >Patrick hand</li>
          <li data-id="Rajdhani" style="font-family: 'Rajdhani', sans-serif;" >Rajdhani</li>
          <li data-id="Pacifico" style="font-family: 'Pacifico', cursive;" >Pacifico</li>

        </ul>
        </div>
        <div id="bendModal" class="tab-pane fade">
          <div class="container benddiv">
          <div class="slidecontainer">

             <input type="range"  min="1" max="100" value="50" class="slider" id="angle-control">
          </div>
        </div>
        </div>
        <div id="alignModal" class="tab-pane fade">
          <div class="row text-center">
            <div class="col-sm-4 col-xs-4 aligntext text-tabs" id="alignTextLeft">
              <i class="fa fa-align-left fa-2x thin" aria-hidden="true"></i>
              <p>Left Justified</p>
            </div>
            <div class="col-sm-4 col-xs-4 aligntext text-tabs" id="alignTextCenter">
              <i class="fa fa-align-center fa-2x" aria-hidden="true"></i>
              <p>Centered</p>
            </div>
            <div class="col-sm-4 col-xs-4 aligntext text-tabs"  id="alignTextRight">
              <i class="fa fa-align-right fa-2x" aria-hidden="true"></i>
              <p>Right Justified</p>
            </div>
          </div>
        </div>
      </div>



     <!-- <div class="container text-center" id="textEdit"> -->
     <ul class="nav nav-pills text-center">
       <li class="col-lg-3 col-md-3 col-sm-3 col-xs-3 active">
         <a data-toggle="pill" href="#colorModal">
         <span><i class="fa fa-tint fa-2x" aria-hidden="true"></i></span>
         <p>Colors</p>
         </a>
       </li>
       <li class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
         <a data-toggle="pill" href="#fontModal">
         <span><i class="fa fa-font fa-2x" aria-hidden="true"></i></span>
         <p>Font-family</p>
       </a>
       </li>
       <li class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
         <a data-toggle="pill" href="#bendModal">
        <span><i class="fa fa-undo fa-2x fa-rotate-90" aria-hidden="true"></i></span>
        <p>Text Bend</p>
       </a>
       </li>
       <li class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
         <a data-toggle="pill" href="#alignModal">
         <span><i class="fa fa-align-left fa-2x" aria-hidden="true"></i></span>
         <p>Align Text</p>
       </a>
       </li>
     </ul>
     <!-- </div> -->
   </div>

     </div>
   </div>
 </div>
<!-- End textSettingModal -->

</html>
