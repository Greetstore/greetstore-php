<?php include "header.php" ?>
<div class="customized-container">

<!-- Start Navbar -->

  <nav class="navbar navbar-inverse">
      <div class="">
      <div class="col-lg-10 col-md-10 col-sm-8 col-xs-8">
        <a class="navbar-brand logo" href="#">
          <img src="images/name_logo.png" class="img-responsive" alt="Greetstore.com" title="Greetstore" />
        </a>
      </div>
      <div class="col-lg-2 col-md-2 col-sm-offset-2 col-xs-offset-2  col-sm-2 col-xs-2">
      <button type="button" class="close-customization" title="back to product">&times;</button>
      </div>
      </div>
    </nav>

    <!-- End Navbar -->

<!-- Start Carousel -->

    <div id="myCarousel" class="carousel slide" data-ride="carousel">



      <div class="carousel-inner">
        <div class="item active">
              <div id="editorContainer">
                  <canvas id="editor" height="480" width="480"></canvas>
              </div>
        </div>
      </div>

      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <i class="fa fa-angle-left fa-lg"></i>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <i class="fa fa-angle-right fa-lg"></i>
        <span class="sr-only">Next</span>
      </a>
    </div>


 <!-- End Carousel -->


<!-- Start Column Tabs -->
<div class="container text-center">
<div class="row tabs" style="border:1px solid aqua;">
  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 column-tabs" data-toggle="modal" data-target="#textModal">
    <i class="fa fa-text-width fa-2x" aria-hidden="true"></i>
    <label for="">Add Text</label>
  </div>
  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 column-tabs" data-toggle="modal" data-target="#shapesModal">
    <i class="fa fa-object-ungroup fa-2x" aria-hidden="true"></i>
    <label for="">Shapes</label>
  </div>
  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 column-tabs">
   <i class="fa fa-picture-o fa-2x" aria-hidden="true"></i>
    <label for="">&nbsp;Images</label>
  </div>
  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 column-tabs" style="background-color:#0483c2;">
    <i class="fa fa-shopping-cart fa-2x" style="color:white;" aria-hidden="true"></i>
    <label for="" style="color:white;">Buy Now</label>
  </div>
</div>
</div>
<!-- End Column Tabs -->


</div>

<?php include "footer.php" ?>
