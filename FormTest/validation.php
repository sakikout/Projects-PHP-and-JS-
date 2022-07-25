<p id="down">
    <?php
    if (!filter_input(INPUT_POST, "users")) {
        echo "User name not found :(";
    } else {
        if (isset($_POST['users'])) {
            $name = CleanPost($_POST['users']);
            echo "<p>Thank you, " .  $name . "</p>";
        }
    }
    ?>
</p>