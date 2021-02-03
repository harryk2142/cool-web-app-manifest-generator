export function helloWorld() {
    alert("TEST");
}

export function toShortAppName() {
    const fullName = document.getElementById("name").value;
    document.getElementById("short_name").value = fullName;
    var appManifestJson = JSON.parse(document.getElementById("generatedJson").value);

    appManifestJson["short_name"] = fullName;

    document.getElementById("generatedJson").value = JSON.stringify(appManifestJson, null, 5);
}

export function toogleIcons() {
    const iconsElement = document.getElementById("icons");
    if (iconsElement.classList.contains("is-hidden")) {
        iconsElement.classList.remove("is-hidden");
        document.getElementById("toggleIcon").classList.remove("fa-angle-down");
        document.getElementById("toggleIcon").classList.add("fa-angle-up");
    } else {
        iconsElement.classList.add("is-hidden");
        document.getElementById("toggleIcon").classList.remove("fa-angle-up");
        document.getElementById("toggleIcon").classList.add("fa-angle-down");
    }
}

export function onChangeManifest(event) {
    var appManifestJson = JSON.parse(document.getElementById("generatedJson").value);
    const value = event.target.value;
    const id = event.target.id;
    appManifestJson[id] = value;
    document.getElementById("generatedJson").value = JSON.stringify(appManifestJson, null, 5);
}

export function uploadImage(btnId) {
    var files = document.getElementById(btnId).files;
    var file = files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('preview').src = e.target.result;
        };
        reader.readAsDataURL(file);
        var btnUpload = document.getElementById("btnUpload");
        btnUpload.classList.remove("is-info");
        btnUpload.classList.add("is-success");

        var btnResize = document.getElementById("btnResize");
        btnResize.disabled = false;
        btnResize.classList.remove("is-warning");
        btnResize.classList.add("is-info");
    }
}

export function zipFile() {
    var appManifestJson = JSON.parse(document.getElementById("generatedJson").value);

    const path = document.getElementById("image_folder").value;
    var zip = new JSZip();
    zip.file("manifest.json", JSON.stringify(appManifestJson, null, 5));
    var img = zip.folder(path);
    img.file("android-chrome-512x512.png", imgToBase64("img512"), { base64: true });
    img.file("android-chrome-192x192.png", imgToBase64("img192"), { base64: true });
    img.file("apple-touch.png", imgToBase64("img180"), { base64: true });
    img.file("mstile-150x150.png", imgToBase64("img150"), { base64: true });
    img.file("favicon-32x32.png", imgToBase64("img32"), { base64: true });
    img.file("favicon-16x16.png", imgToBase64("img16"), { base64: true });
    zip.generateAsync({ type: "blob" }).then(function (content) {
        saveAs(content, "webmanifest.zip");
    });
}

function imgToBase64(imgId) {
    const img = document.getElementById(imgId);
    const imgUrl = img.src.split('base64,')[1];
    return imgUrl;
}

export function resizeImages() {
    resizeImage(512);
    resizeImage(256);
    resizeImage(192);
    resizeImage(180);
    resizeImage(150);
    resizeImage(32);
    resizeImage(16);
    var btnImg = document.getElementById("btnResize");
    btnImg.classList.remove("is-info");
    btnImg.classList.add("is-success");


    const path = document.getElementById("image_folder").value;
    let header = '<link rel="apple-touch-icon" href="' + path + '/apple-touch.png">';
    header += '<link rel="manifest" href="/manifest.json">';
    header += '<link rel="icon" href="' + path + '/favicon-16x16.png" type="image/png" />';
    document.getElementById("head").value = header;

    var btnZip = document.getElementById("btnZip");
    btnZip.disabled = false;
    btnZip.classList.remove("is-warning");
    btnZip.classList.add("is-info");

    var imageFolder = document.getElementById("image_folder").value;
    if (!imageFolder) {
        imageFolder = "icons";
    }

    var icons = [{
        "src": imageFolder + "/favicon-16x16.png",
        "sizes": "16x16",
        "type": "image/png"
    }, {
        "src": imageFolder + "/favicon-32x32.png",
        "sizes": "32x32",
        "type": "image/png"
    }, {
        "src": imageFolder + "/mstile-150x150.png",
        "sizes": "150x150",
        "type": "image/png"
    }, {
        "src": imageFolder + "/apple-touch.png",
        "sizes": "180x180",
        "type": "image/png"
    }, {
        "src": imageFolder + "/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
    },
    {
        "src": imageFolder + "/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
    }
    ];
    var appManifestJson = JSON.parse(document.getElementById("generatedJson").value);

    appManifestJson["icons"] = icons;

    document.getElementById("generatedJson").value = JSON.stringify(appManifestJson, null, 5);
}

function resizeImage(size) {
    const id = "img" + size;
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        var filesToUploads = document.getElementById('imageFile').files;
        var file = filesToUploads[0];
        if (file) {

            var reader = new FileReader();
            // Set the image once loaded into file reader
            reader.onload = function (e) {

                var img = document.createElement("img");
                img.src = e.target.result;

                var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, 10, 10);

                canvas.width = size;
                canvas.height = size;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, size, size);

                var dataurl = canvas.toDataURL(file.type);
                document.getElementById(id).src = dataurl;
            }
            reader.readAsDataURL(file);
        }

    } else {
        alert('The File APIs are not fully supported in this browser.');
    }
}