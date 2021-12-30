const image_drop_area = document.querySelector("#image_drop_area");
var uploaded_image;
image_drop_area.addEventListener('dragover', (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
});
image_drop_area.addEventListener('drop', (event) => {
    event.stopPropagation();
    event.preventDefault();
    const fileList = event.dataTransfer.files;
    document.querySelector("#file_name").textContent =    fileList[0].name;
    readImage(fileList[0]);
});
readImage = (file) => {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        uploaded_image = event.target.result;
        document.querySelector("#image_drop_area").style.backgroundImage     = `url(${uploaded_image})`;
    });
    reader.readAsDataURL(file);
}