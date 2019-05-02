window.onload = function () {
    fetch('http://localhost:3000/images')
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(JSON.stringify(json));
        var imageObject;
        imageObject = JSON.stringify(json);
        imageObject = JSON.parse(imageObject);
        var content = '';
        var image = document.createElement('div');
        // console.log(imageObject[0]);
        for (var i = 0; i < imageObject.length; i++) {
            console.log(imageObject[i])
            content += '<li><img src="' + imageObject[i].src + '">';
            content += '<p>' + imageObject[i].caption + '</p></li>'
        }
        image.innerHTML = content;
        var target = document.querySelector('.images');
        target.appendChild(image, target);
  });
}