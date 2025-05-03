function getResult() {
    var rollNo = document.getElementById('rollInput').value.trim();
    if (!rollNo || !rollNo.match(/^[A-Z]{2}\d{2}-[A-Z]{3}-\d{3}$/)) {
        alert("Invalid Roll Number format. Please enter in the format FA20-BCS-001");
        return;
    }
    var imageUrl = 'https://cms.must.edu.pk:8082/Chartlet/MUST' + rollNo.toUpperCase() + 'AJK/FanG_Chartlet_GPChart.Jpeg?133569514643955145';
    document.getElementById('resultImage').src = imageUrl;
    document.getElementById('resultImage').alt = "Chart for Roll Number " + rollNo;

    // Check if image exists
    var img = new Image();
    img.src = imageUrl;
    img.onload = function() {
        document.getElementById('noRecordMessage').style.display = 'none';
    };
    img.onerror = function() {
        document.getElementById('noRecordMessage').style.display = 'block';
    };
}

// Load default image when the page loads
window.onload = function() {
    document.getElementById('resultImage').src = "image.png";
};
var newURL = window.location.href.replace(/\?i=\d+/g, '');
history.replaceState({}, document.title, newURL);
