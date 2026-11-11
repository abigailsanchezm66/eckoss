<?php
session_start();

if (isset($_SESSION['dni'])) {
    echo "1";
} else {
    echo "0";
}
?>