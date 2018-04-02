<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel</title>
    <link rel="stylesheet" href="{{mix('css/app.css', 'frontend')}}">
</head>
<body>
<div id="app"></div>
<script src="{{mix('/js/manifest.js', 'frontend')}}"></script>
<script src="{{mix('/js/vendor.js', 'frontend')}}"></script>
<script src="{{mix('/js/app.js', 'frontend')}}"></script>
</body>
</html>
