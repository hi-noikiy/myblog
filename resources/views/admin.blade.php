<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Document</title>
    <link rel="stylesheet" href="{{mix('/back/css/app.css', 'back')}}">
</head>
<body>
<div id="app"></div>
<script src="{{mix('/back/js/manifest.js', 'back')}}"></script>
<script src="{{mix('/back/js/vendor.js', 'back')}}"></script>
<script src="{{mix('/back/js/app.js', 'back')}}"></script>
</body>
</html>