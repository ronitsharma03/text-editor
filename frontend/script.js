function run() {
    let htmlCode = document.getElementById("html-file").value;
    let cssCode = document.getElementById("style-css").value;
    let jsCode = document.getElementById("javascript-file").value;
    let iframe = document.getElementById("code-output");

    iframeDocument = iframe.contentDocument;
    iframeDocument.body.innerHTML = htmlCode + "<style>"+cssCode+"</style";
    iframe.contentWindow.eval(jsCode);
    
}

function changeFontSize(){
    let fontSizes = document.getElementById("font-size").value;
    let textBoxHtml = document.getElementById("html-file");
    let textBoxCss = document.getElementById("style-css");
    let textBoxJs = document.getElementById("javascript-file");
    // console.log(fontSizes)
    textBoxHtml.style.fontSize = fontSizes+"px";
    textBoxCss.style.fontSize = fontSizes+"px";
    textBoxJs.style.fontSize = fontSizes+"px";
}

function downloadContent() {
   // Prompt the user for the filename
   let fileName = window.prompt("Enter the filename:", "code_content.txt");

   // Get the content of each textarea
   let htmlContent = document.getElementById("html-file").value;
   let cssContent = document.getElementById("style-css").value;
   let jsContent = document.getElementById("javascript-file").value;

   // Concatenate the content of all textareas
   let combinedContent = "HTML:\n" + htmlContent + "\n\nCSS:\n" + cssContent + "\n\nJavaScript:\n" + jsContent;

   // Create a Blob object containing the combined content
   let blob = new Blob([combinedContent], { type: "text/plain" });

   // Create a link element to trigger the download
   let a = document.createElement("a");
   a.download = fileName; // Specify the filename
   a.href = window.URL.createObjectURL(blob);

   // Trigger the download
   a.click();
}