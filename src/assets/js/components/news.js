const News = () =>{
	const newsContainer = $("<section class='news-container'></section>");
	const principalNews = $("<div class='news-container__princNews'><div class='col-lg-8'><p>"+state.new[0].title+"</p><p>"+state.new[0].brief+"</p></div></div>");


	newsContainer.append(principalNews);

	return newsContainer;
}