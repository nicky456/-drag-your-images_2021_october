var dropRegion = document.getElementById("drop-region");
	
var	imagePreviewRegion = document.getElementById("image-preview");

var uploadButton = document.getElementById("button");


var fakeInput = document.createElement("input");
fakeInput.type = "file";
fakeInput.accept = "image/*";
fakeInput.multiple = true;
uploadButton.addEventListener('click', function() {
	fakeInput.click();
});

fakeInput.addEventListener("change", function() {
	var files = fakeInput.files;
	handleFiles(files);
});


function preventDefault(e) {
	e.preventDefault();
  	e.stopPropagation();
}

dropRegion.addEventListener('dragenter', preventDefault, false)
dropRegion.addEventListener('dragleave', preventDefault, false)
dropRegion.addEventListener('dragover', preventDefault, false)
dropRegion.addEventListener('drop', preventDefault, false)


function handleDrop(e) {
	var dt = e.dataTransfer,
		files = dt.files;

	if (files.length) {

		handleFiles(files);
		
	} else {

		var html = dt.getData('text/html'),
	        match = html && /\bsrc="?([^"\s]+)"?\s*/.exec(html),
	        url = match && match[1];



	    if (url) {
	        uploadImageFromURL(url);
	        return;
	    }

	}
}

dropRegion.addEventListener('drop', handleDrop, false);



function handleFiles(files) {
	for (var i = 0, len = files.length; i < len; i++) {
		if (validateImage(files[i]))
			previewAnduploadImage(files[i]);
	}
}

function validateImage(image) {

	var validTypes = ['image/jpeg', 'image/png', 'image/gif'];
	if (validTypes.indexOf( image.type ) === -1) {
		alert("Invalid File Type");
		return false;
	}

	var maxSizeInBytes = 10e6; // 10MB
	if (image.size > maxSizeInBytes) {
		alert("File too large");
		return false;
	}

	return true;

}

function previewAnduploadImage(image) {

	var imgView = document.createElement("div");
	imgView.className = "image-view";
	imagePreviewRegion.appendChild(imgView);

	var img = document.createElement("img");
	imgView.appendChild(img);

	var reader = new FileReader();
	reader.onload = function(e) {
		img.src = e.target.result;
	}
	reader.readAsDataURL(image);

	var formData = new FormData();
	formData.append('image', image);

}

