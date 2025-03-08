const sendPdfButton = document.querySelector("#sendPdfButton");
const imgPdf = document.querySelector("#sendPdf");
const pdfInput = document.querySelector("#pdfInput");
const fileNameDisplay = document.querySelector("#fileNameDisplay");
const sendContent = document.querySelector("#sendButton")

let selectedFile = null;
// FUNÇÕES

function changeImg() {
    if (imgPdf.getAttribute("src") === "static/icons/pdfSendButton.svg") {
        imgPdf.src = "static/icons/pdfSendButtonWhite.svg";
    } else {
        imgPdf.src = "static/icons/pdfSendButton.svg";
    }
}

function selectPdf() {
    pdfInput.click();
}

function displayPdf(event) {
    selectedFile = event.target.files[0];
    if (selectedFile) {
        fileNameDisplay.textContent = `Selecionado: ${selectedFile.name}`;
    }
}

function sendPdf(){
    console.log(selectedFile.name);

    const formData = new FormData();
    formData.append("pdf",selectedFile);

    fetch("http://127.0.0.1:5500/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.json)
    .then(data => console.log("Upload bem-sucedido:", data))
    .catch(error => console.error("Erro no upload:", error));
}

// CHAMADAS 

// Mudar imagem
sendPdfButton.addEventListener("mouseover", changeImg);
sendPdfButton.addEventListener("mouseout", changeImg);

// Selecionar PDF
sendPdfButton.addEventListener("click", selectPdf);

// Mostrar PDF
pdfInput.addEventListener("change", displayPdf);

// Enviar PDF
sendContent.addEventListener("click", sendPdf)


