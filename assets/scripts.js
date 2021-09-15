<?php

    // < PHP VERSION 5 > 

    // CONNECTION ALL SCRIPT FILES [JS, PHP]
    // To connect files just put in 'plugins' folder
    // or choose another name of folder.

    // name of folder for scripts 
    $scriptsFolder = 'plugins';

    // getting information about the device the site is located
    $device = $_SERVER['HTTP_HOST'] == 'localhost' ? 'local': 'server';

    // getting all files in plugin file
    $files = scandir(__DIR__ . '/' . $scriptsFolder);

    $js_array = array(); $php_array = array(); 
    foreach (array_keys($files) as $element_number) {

        $file = $files[$element_number];
        
        #clear the array from not files
        if ($file == '.' || $file == '..') {
            unset($files[$element_number]);
            
        #else getting files extentions
        } else {

            $link = pathinfo($file);

            #checking if the file has extention
            if (isset($link['extension'])) {

                $link = $link['extension'];

                # js files
                if ($link == 'js') {
                    array_push($js_array, $file);
                } 
                
                # php files
                elseif ($link == 'php') {
                    array_push($php_array, $file);
                }

                # else files push away
                else {
                    unset($files[$element_number]);
                }
            }
        }
    }

    # connecting all js files
    foreach ($js_array as $js_file){

        if ($device == 'local') echo "<script src=" . "assets/" . $scriptsFolder . '/' . $js_file . "></script>";
        elseif ($device == 'server') echo "<script src=" . __DIR__ . $scriptsFolder . '/' . $js_file . "></script>";

    }

    # connecting all php files
    foreach ($php_array as $php_file) {
        include __DIR__ . "/" . $scriptsFolder . "/" . $php_file;
    }

?>