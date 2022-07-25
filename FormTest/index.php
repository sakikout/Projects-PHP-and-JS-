<?php
$mensagem = "";
$name = "";
$errorName = "";
$errorMessage = "";
$valid = "";
?>

<?php if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // para o nome
  if (empty($_POST['users'])) {
    $errorName = "Please, insert a name.";
  } else {
    $name = CleanPost($_POST['users']);
    if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
      $errorName = "Only letters and spaces are accepted.";
    }
  }

  // para a mensagem
  if (empty($_POST['bodys'])) {
    $errorMessage = "Please, write something!";
  } else {
    $mensagem = CleanPost($_POST['bodys']);
    if (strlen($mensagem) < 5) {
      $errorMessage = "It is too short.";
    }
  }

  if ((empty($errorName)) && (empty($errorMessage))) {
    $valid = include('validation.php');
  }
}

function CleanPost($value)
{
  $value = trim($value);
  $value = stripslashes($value);
  $value = htmlspecialchars($value);
  return $value;
}
?>



<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport  " content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <link href="main.css" type="text/css" rel="stylesheet">
  <title>Hello Form</title>
</head>

<script src="jquery-3.6.0.min.js"></script>
<script src="refreshing.js"></script>

<body>
  <div id="allbacks">
    <div id="mainpage" class="shade">
      <header class="animation a1">
        <span class ="sayhello"><h1>Say Hello Stranger!</h1></span>
        <hr>
      </header>
      <div id="formulario">
        <form id="form1" method="post">

          <!-- <label id=" luser" for="user" class="labels">Name:</label> -->
          <span class ="glitter"><input id="user" type="text" <?php if (isset($_POST['users'])) {
                                          echo "value='" . $_POST['users'] . "'";
                                        } ?> name="users" class="inputs animation a2" placeholder="Your name"></span>
          <br><span class="error animation a2"><?php echo $errorName; ?></span>
          <br>
          <div id="mensagem">
            <!-- <label id="message" for="body" class="labels">Message:</label> -->
            <span class ="glitter"><textarea id="body" name="bodys" <?php if (isset($_POST['bodys'])) {
                                                echo "value='" . $_POST['bodys'] . "'";
                                              } ?> class="inputs animation a3" rows="5" cols="22" placeholder="Say something cool"></textarea></span>
            <br><span class="error animation a3"><?php echo $errorMessage; ?></span><br>
          </div>
          <input id="sub" type="submit" value="Submit" class="animation a4"><br>
          <?php

          ?>
        </form>
      </div>
      <div id="foot">
        <hr>
        <footer>
          <p id="credits"></p>
        </footer>
      </div>
    </div>


  </div>

</body>

<script>
  if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
  }
</script>


</html>
