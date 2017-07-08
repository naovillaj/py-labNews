const Tecnologia = () =>{
	const techContainer = $("<section class='tech-container'></section>");
	const techTitle = $("<h3>TECNOLOGÍA</h3>");
	const hr = $("<hr>");

	const techPhotos = $("<div class='tech-photos'></div>");
	const photoFourteen = $("<div class='col-md-5 col-xs-12 pad-right'><img src='assets/img/"+state.new[14].img+"'><div class='tech-photos__div'><span class='letra-amarilla'>"+state.new[14].title.substring(0, 9)+"</span><span class='letra-blanca'>"+state.new[14].title.substring(9, 26)+"</span></div></div>");
	const photoX = $("<div class='col-md-6 col-xs-12 pad-right'></div>");
	const photoFiveteen = $("<div class='col-md-6 col-xs-12 pad-right'><img src='assets/img/"+state.new[15].img+"'><div class='tech-photos__div'><span class='letra-blanca'>"+state.new[15].title+"</span></div></div>");
	const photoSixteen = $("<div class='col-md-6 col-xs-12 pad-right'><img src='assets/img/"+state.new[16].img+"'><div class='tech-photos__div'><span class='letra-amarilla'>"+state.new[16].title.substring(0, 6)+"</span><span class='letra-blanca'>"+state.new[16].title.substring(6, 26)+"</span></div></div>");
	const photoSeventeen = $("<div class='col-md-12 col-xs-12'><img src='assets/img/"+state.new[17].img+"'><div class='tech-photos__div'><span class='letra-blanca'>"+state.new[17].title+"</span></div></div>");
	const photoEighteen = $("<div class='col-md-12 col-xs-12 pad-right'><img src='assets/img/"+state.new[18].img+"'><div class='tech-photos__div'><span class='letra-blanca'>"+state.new[18].title+"</span></div></div>");

	


	techContainer.append(techTitle);
	techContainer.append(hr);
	techPhotos.append(photoFourteen);
	photoX.append(photoFiveteen);
	photoX.append(photoSixteen);
	photoX.append(photoSeventeen);
	photoX.append(photoEighteen);

	
	techContainer.append(techPhotos);
	techContainer.append(photoX);

	return techContainer;
}