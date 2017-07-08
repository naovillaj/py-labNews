const World = () =>{
	const worldContainer = $("<section class='world-container'></section>");
	const worldTitle = $("<h3>MUNDO</h3>");
	const hr = $("<hr>");

	const worldPhotos1 = $("<div class='world-photos'></div>");
	const photoOne = $("<div class='col-md-3 col-xs-12 pad-right'><img src='assets/img/"+state.new[4].img+"'><div class='world-photos__div'><span class='letra-amarilla'>"+state.new[4].title.substring(0, 6)+"</span><span class='letra-blanca'>"+state.new[4].title.substring(6, 26)+"</span></div></div>");
	const photoTwo = $("<div class='col-md-3 col-xs-12 pad-right'><img src='assets/img/"+state.new[5].img+"'><div class='world-photos__div'><span class='letra-amarilla'>"+state.new[5].title.substring(0, 6)+"</span><span class='letra-blanca'>"+state.new[5].title.substring(6, 26)+"</span></div></div>");
	const photoThree = $("<div class='col-md-3 col-xs-12 pad-right'><img src='assets/img/"+state.new[6].img+"'><div class='world-photos__div'><span class='letra-amarilla'>"+state.new[6].title.substring(0, 6)+"</span><span class='letra-blanca'>"+state.new[6].title.substring(6, 26)+"</span></div></div>");
	const photoFour = $("<div class='col-md-3 col-xs-12'><img src='assets/img/"+state.new[7].img+"'><div class='world-photos__div'><span class='letra-blanca'>"+state.new[7].title+"</span></div></div>");

	const worldPhotos2 = $("<div class='world-photos'></div>");
	const photoTen = $("<div class='col-md-3 col-xs-12 pad-right'><img src='assets/img/"+state.new[10].img+"'><div class='world-photos__div'><span class='letra-blanca'>"+state.new[10].title+"</span></div></div>");
	const photoEleven = $("<div class='col-md-3 col-xs-12 pad-right'><img src='assets/img/"+state.new[11].img+"'><div class='world-photos__div'><span class='letra-blanca'>"+state.new[11].title+"</span></div></div>");
	const photoTwelve = $("<div class='col-md-3 col-xs-12 pad-right'><img src='assets/img/"+state.new[12].img+"'><div class='world-photos__div'><span class='letra-blanca'>"+state.new[12].title+"</span></div></div>");
	const photothirdteen = $("<div class='col-md-3 col-xs-12'><img src='assets/img/"+state.new[13].img+"'><div class='world-photos__div'><span class='letra-blanca'>"+state.new[13].title+"</span></div></div>");



	worldContainer.append(worldTitle);
	worldContainer.append(hr);
	worldPhotos1.append(photoOne);
	worldPhotos1.append(photoTwo);
	worldPhotos1.append(photoThree);
	worldPhotos1.append(photoFour);
	worldContainer.append(worldPhotos1);

	worldPhotos2.append(photoTen);
	worldPhotos2.append(photoEleven);
	worldPhotos2.append(photoTwelve);
	worldPhotos2.append(photothirdteen);
	worldContainer.append(worldPhotos2);

	return worldContainer;
}
