

function renderMcCard(imageName, header, year, engine) {


const card = `


            <div class="card">
                <div class="image-wrapper">
                    <img src="assets/img/${imageName}" alt="">
                </div>
                <div class="text-wrapper">
                    <h2 class="header"> ${header}</h2>
                    <h3 class="sub-header"> ${year}</h3>
                    <h3 class="sub-header"> ${engine}</h3>
                </div>
            </div>

`;
const cardTarget = document.getElementById("card");
cardTarget.innerHTML += card;

};