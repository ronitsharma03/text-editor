function run() {
    let htmlCode = document.getElementById("html-file").value;
    let cssCode = document.getElementById("style-css").value;
    let jsCode = document.getElementById("javascript-file").value;
    let iframe = document.getElementById("code-output");

    iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.body.innerHTML = htmlCode + "<style>"+cssCode+"</style";
    iframe.contentWindow.eval(jsCode);
}