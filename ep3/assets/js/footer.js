
function renderFooter(path){

    const footer = `
    
    <footer>
        <a href="https://github.com/Zeeptech" target="_blank"><img src="${path}assets/img/Github.png" alt="Github.com"></a>
        <a href="https://www.linkedin.com/in/felix-bard%C3%A9n-5b3b3820a/" target="_blank"><img src="${path}assets/img/Linkedin.png" alt="Linkedin.com"></a>
    </footer>
    
    `;
    const footerTarget = document.getElementById("footer");
    footerTarget.innerHTML = footer;
    console.log("FootFetish");
};