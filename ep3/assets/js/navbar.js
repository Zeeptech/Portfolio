
function renderHeader(path ,homePath, ep1Path, ep2Path, fortuneDrawingPath) {
const navbar = `

    <header>
                <div id="navbar_wrapper">
                    <div id="navbar">
                        <ul>
                            <li>
                                <div class="dropdown">
                                    <img src="${path}assets/img/menu-burger.png" class="dropdown-bttn" title="Projects" >
                                    <div class="dropdown-content">
                                        <a href="${fortuneDrawingPath}/index.html">Project 1 - Draw a Fortune</a>
                                        <a href="#">Project 2</a>
                                        <a href="#">Project 3</a>
                                        <a href="#">Project 4</a>
                                        <a href="#">Project 5</a>
                                    </div>
                                </div>
                            </li>
                            <li><a href="${homePath}index.html">Home</a></li>
                            <li><a href="${path}about.html">Om Mig</a></li>
                            <li><a href="${path}song.html">Sång</a></li>
                            <li><a href="${path}mc.html">Motorcykel</a></li>
                            <li><a href="${path}code.html">Kod</a></li>
                            <li><a href="${ep1Path}index.html">Episode HTML</a></li>
                            <li><a href="${ep2Path}index.html">Episode CSS</a></li>
                        </ul>
                    </div>
                </div>
        </header>
    `;
    const header = document.getElementById("header");
    header.innerHTML = navbar;

};