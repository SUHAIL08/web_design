document.getElementById('importForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const fileInput = document.getElementById('fileUpload');
    const fileMessage = document.getElementById('fileMessage');

    if (fileInput.files.length === 0) {
        fileMessage.textContent = 'Please select a file to upload.';
        fileMessage.style.color = 'red';
    } else {
        const fileName = fileInput.files[0].name;
        fileMessage.textContent = `Successfully uploaded: ${fileName}`;
        fileMessage.style.color = 'green';

        // Simulate clearing the form
        fileInput.value = '';
    }
});
