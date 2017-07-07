const Header = () => {
	
	const headerContainer = $("<header class='header-container'></header>");
	const search = $("<div class='header-container__search'><div><span><img src='assets/img/menu.png'>SECTIONS</span><span><img src='assets/img/search.png'>SEARCH</span></div><div><img src='assets/img/fb.png'><img src='assets/img/tw.png'><img src='assets/img/in.png'></div></div>");
	const logo = $("<div class='header-container__logo'><img src='assets/img/logoicon.png'><div>");
	const fecha = $("<div class='header-container__fecha'><span>Lunes, Junio 12 de 2017</span> <span> | </span><span><img src='assets/img/cloud.png'> 22°</span></div>");
	const navBar = $("<div class='header-container__nav'><nav><ul><li><a>Lo último</a></li><li><a>Opinión</a></li><li><a>Cultura</a></li><li><a>Perú</a></li><li><a>Tecnología</a></li><li><a>Mundo</a></li><li><a>Economía</a></li><li><a>Lifestyle</a></li><li><a>Deporte</a></li></ul></nav><div>");

	headerContainer.append(search);
	headerContainer.append(logo);
	headerContainer.append(fecha);
	headerContainer.append(navBar);

	return headerContainer;

}