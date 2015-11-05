<?php

	if (isset($_FILES['upload_file'])) {

	    if(move_uploaded_file($_FILES['upload_file']['tmp_name'], "sounds/" . $_FILES['upload_file']['name'])){
	        echo $_FILES['upload_file']['name']. " Uploaded Successfully";
	    } else {
	        echo $_FILES['upload_file']['name']. " Upload Failed!";
	    }

	    exit;

	} else {
	    echo "No files uploaded ...";
	}
?>