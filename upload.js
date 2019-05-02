function conn() {
    var image = document.getElementById("image")
    var caption = document.getElementById("caption")

    'files' in image;
    var img = image.files[0];

    let s3Client = new AWS.S3({
        endpoint: "http://127.0.0.1:9000/",
        s3ForcePathStyle: true,
        signatureVersion: "v4",
        accessKeyId: "5XX2C4U35RU0I2AM5246",
        secretAccessKey: "JAnYjwoLZA4RDqYFG5vd7BM34jihrlg29+0LgVg1"
    });

    s3Client.putObject({
        Bucket:"images",
        Key: img.name,
        Body: img,
        ContentLength: img.size,
        ContentType: img.ContentType
    }, function(err, data) {
        console.log(err, data)
    })
    $.ajax({
        url: 'http://localhost:3000/images',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify( { "src": "http://localhost:9000/images/"+img.name, "caption": caption.value} ),
    })
    console.log("working");

}

