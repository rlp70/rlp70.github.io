// RLP Main JavaScript

// NavBar Stuff
function getHeaderImgSrc(fileName) {
    var src = ""

    switch (fileName) {
      default:
      case 'index':
	src = '/img/bitmoji-1.png';
	break;

      case 'aboutme':
	src = '/img/bitmoji-2.png';
	break;

      case 'top':
	src = '/img/bitmoji-3.png';
	break;

      case 'resume':
	src = '/img/bitmoji-5.png';
	break;

      case 'links':
	src = '/img/bitmoji-6.png';
	break;
    }

    return (src);
}

$(function() { // Common NavBar Load
    var thisURL = window.location.href;
    var index   = thisURL.lastIndexOf("/") + 1;
    var fileNameWithExtension = thisURL.substr(index);
    var fileName = fileNameWithExtension.split(".")[0];
    var headerImgSrc = getHeaderImgSrc(fileName);

    $('#basicHeader').load('/common/basicHeader.html', function() {
	$('#headerImg').attr('src', headerImgSrc);
	// TODO: headerImg').attr("alt",);
    });
});
