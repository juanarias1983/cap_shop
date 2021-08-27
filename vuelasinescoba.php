<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Vuela sin escoba</title>
  <link rel="stylesheet" href="./css/styles.css" type="text/css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link href="https://fonts.googleapis.com/css?family=Dosis:400,600" rel="stylesheet">
  </head>
  <body class="ruleta_sorteo">
    <form action="index.php" method="post" enctype="multipart/form-data">
      <header class="navbar navbar-expand-lg shadow">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <a href="https://www.iberiaexpress.com" target="_blank">
                <img style="margin-left: 0px" src="https://i2cdnprod.azureedge.net/styles/svg/logo_es.svg?v=2.0.7" alt="Iberia Express" width="172" height="50">
              </a>
            </div>
          </div> 
        </div>
      </header>
      <div class="container mt-4">
        <div class="row">
          <div class="alert alert-danger col-12" role="alert">
            Lo sentimos, tu cupón no ha podido descargarse, comprueba los datos introducidos y vuelve a intentarlo más tarde.
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img class="col" src="imageRuletaB.png" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col text-center">
          <h2>¡CONSIGUE TU PREMIO!</h2>
          <p>Vuelve a la pantalla anterior, introduce los datos de tu vuelo y descarga un PDF con tu cupón. Enséñalo en el avión y disfruta de tu sorpresa.</p>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <button type="submit" id="btn_submit_code" class="col form-control i2 text-uppercase" id="flight-button">VOLVER</button>
          </div>
        </div>
      </div>
      
      
    </form>
  </body>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  <script src="js/script.js"></script>
</html>
