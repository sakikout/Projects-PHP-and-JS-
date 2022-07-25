<!DOCTYPE html>
<html lang="en">

<head>
  <link href="main.css" type="text/css" rel="stylesheet">
  <link href="index.php" type="text/php" rel="prefetch">
</head>

<body>
  <div id="mainpage">
    <h1 class="m_validation">
      <?php

      if (!filter_input(INPUT_POST, "users")) {
        echo "User name not found :(";
      } else {
        if (isset($_POST['users'])) {
          $name = CleanPost($_POST['users']);
          echo "<p>Thank you, " .  $name . "</p>";
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
    </h1>
  </div>

</body>

</html>