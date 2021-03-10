<?php 

$string = file_get_contents("./seo.json");
$seo = '';
$siteURL='http'.(empty($_SERVER['HTTPS'])?'':'s').'://'.$_SERVER['HTTP_HOST'].'/';
$blogAPI = "https://dev-dispatch-276213.ue.r.appspot.com/blogs";
$pageAPI = "https://dev-dispatch-276213.ue.r.appspot.com/pages";
$p = substr($_SERVER['REQUEST_URI'], 1);
$blogPaths = explode("wire/", $p);
$post = new stdClass();
$projectName = "Gawq";
$pageAlias = explode("/", $_SERVER['REQUEST_URI'])[1];

if($blogPaths[1]) {
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $blogAPI);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
  curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 10);
  curl_setopt($ch, CURLOPT_TIMEOUT, 10);
  
  $httpCode = curl_getinfo($ch , CURLINFO_HTTP_CODE);
  $response = curl_exec($ch);

  if ($response === false) {
    $response = curl_error($ch);
  }else {
    $blogs = json_decode($response);

    foreach ($blogs as $pst) {
      if($pst->alias === $blogPaths[1]) {
        $post = $pst;
      }
    }

    $seo .= '<title>'.$projectName.' - '.$post->title.'</title>';
    $seo .= '<meta name="description" content="'.$post->subTitle.'" />';
    $seo .= '<meta property="og:description" content="'.$post->subTitle.'" />';
    $seo .= '<meta property="og:title" content="'.$post->title.'" />';
    $seo .= '<meta property="og:image" content="'.$post->thumbnail->url.'" />';

  }
  curl_close($ch);
}else {
  if ($string != false) {
    $json_a = json_decode($string, true);
    if ($json_a !== null) {
      $path = "/";
  
      if($json_a[$_SERVER['REQUEST_URI']]) {
        $path = $_SERVER['REQUEST_URI'];
      }
  
      foreach ($json_a[$path] as $key => $value) {
        if($key === "title") {$seo .= '<title>'.$value.'</title>';}
        
        if($key === "meta") {
          foreach ($value as $pk => $pkv) 
          {
            $seo .= '<meta ';
            foreach ($pkv as $property => $property_value) 
            {
              if(strpos($property_value, '.svg') || strpos($property_value, '.png') || strpos($property_value, '.jpg')) {
                $seo .= $property.'="'.$siteURL.'assets/img/'.$property_value.'" id="og"';
              }else {
                $seo .= $property.'="'.$property_value.'" ';
              }
            }
            $seo .='>';
          }
        }
    }
  }
  }

  if($pageAlias) {
    $ph = curl_init();
    curl_setopt($ph, CURLOPT_URL, $pageAPI."?alias=".$pageAlias);
    curl_setopt($ph, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ph, CURLOPT_SSL_VERIFYPEER, 0);
    curl_setopt($ph, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ph, CURLOPT_CONNECTTIMEOUT, 10);
    curl_setopt($ph, CURLOPT_TIMEOUT, 10);
  
    $httpCodePh = curl_getinfo($ph , CURLINFO_HTTP_CODE);
    $responsePh = curl_exec($ph);
  
    if ($responsePh === false) {
      $responsePh = curl_error($ph);
    }else {
      $pages = json_decode($responsePh);
  
      if($pages) {
        $seo = '';
        $seo .= '<title>'.$projectName.' - '.strip_tags($pages[0]->title).'</title>';
        $seo .= '<meta name="description" content="'.$pages[0]->subTitle.'" />';
        $seo .= '<meta property="og:description" content="'.$pages[0]->subTitle.'" />';
        $seo .= '<meta property="og:title" content="'.$projectName.' - '.strip_tags($pages[0]->title).'" />';
        $seo .= '<meta property="og:image" content="'.$pages[0]->hero[0]->url.'" />';
      }
    }
    curl_close($ph);
  }
}

$seo .= '<meta property="og:url" content="'.$siteURL.$p.'">';

?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="shortcut icon" sizes="16x16" type="image/x-icon" href=" href="https://storage.googleapis.com/dev-dispatch-276213.appspot.com/Fav_Icon16x16_c417f9b7e1/Fav_Icon16x16_c417f9b7e1.png" />
  <link rel="shortcut icon" sizes="32x32" type="image/x-icon" href=" href="https://storage.googleapis.com/dev-dispatch-276213.appspot.com/Fav_Icon32x32_c34452691d/Fav_Icon32x32_c34452691d.png" />
  <link rel="shortcut icon" sizes="76x76" type="image/x-icon" href=" href="https://storage.googleapis.com/dev-dispatch-276213.appspot.com/Fav_Icon76x76_6b35f1529b/Fav_Icon76x76_6b35f1529b.png" />
  <link rel="apple-touch-icon-precomposed" href="https://storage.googleapis.com/dev-dispatch-276213.appspot.com/apple_touch_icon_0d0c8d42fe/apple_touch_icon_0d0c8d42fe.png" />
  <link rel="icon" type="image/png" href="../assets/img/favicon.png" data-react-helmet="true">
  <?php echo $seo; ?>
  <script>
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  </script>
  <style>
    body {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    body::-webkit-scrollbar {
      display: none;
    }

    .loader-inner.hide {
      opacity: 0;
      pointer-events: none;
    }

    .loader-inner {
    width:100vw;
    height:100vh;
    height: calc(var(--vh, 1vh) * 100);
    position:fixed;
    z-index: 2000;
    top:0;
    left:0;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 600ms;
  }
  .loader-inner img{height: 60px;width: auto;}
  </style>
</head>

<body>
<div id="loader-bg" style="position: fixed;width:100vw;height:100vh;top:0;left:0;background-color:#272727;z-index:999;"></div>
  <div class="loader-inner"><img src="../assets/img/loader.svg" alt=""></div>
  <div id="app"></div>
  <noscript>
    You need to enable JavaScript to run this app.
  </noscript>
  <script src="/assets/bundle.js"></script>
</body>

</html>

<?php ?>