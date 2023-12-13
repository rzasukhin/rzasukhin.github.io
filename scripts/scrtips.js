document.addEventListener("DOMContentLoaded", () => {
    const downloadResumeBtn = document.getElementById("downloadResumeBtn");

    downloadResumeBtn.addEventListener("click", () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = "resume.pdf";
        downloadLink.download = "resume.pdf"; 
        downloadLink.target = "_blank";
        downloadLink.click(); 
    });
});
