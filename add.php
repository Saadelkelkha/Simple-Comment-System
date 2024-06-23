<?php
$file = 'data.json';

if (isset($_GET['name']) && isset($_GET['comment'])) {

    if (file_exists($file)) {
        $comments = json_decode(file_get_contents($file), true);
    } else {
        $comments = [];
    }

    $comments[] = [
        'name' => $_GET['name'],
        'comment' => $_GET['comment']
    ];

    file_put_contents($file, json_encode($comments));
}

header('Content-Type: application/json');
echo json_encode($comments);
?>
