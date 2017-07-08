const News = () =>{
	const newsContainer = $("<section class='news-container'></section>");

	const principalNews = $("<div class='news-container__princNews'><div><p>"+state.new[0].title+"</p><p>"+state.new[0].brief+"</p></div></div>");
	const questions = $("<div class='container-questions'></div>");
	const questionsOne = $("<div class='col-lg-5 col-xs-12 mg-right'><img src='assets/img/"+state.new[1].img+"'><div class='container-questions__div'><span class='letra-blanca'>"+state.new[1].title.substring(0, 16)+"</span><span class='letra-amarilla'>"+state.new[1].title.substring(16, 40)+"</span><span class='letra-blanca'>"+state.new[1].title.substring(40, 71)+"</span></div></div>");
	const questionsTwo = $("<div class='col-lg-3 col-xs-12 mg-right'><img src='assets/img/"+state.new[2].img+"'><div class='container-questions__div'><span class='letra-blanca'>"+state.new[2].title.substring(0, 21)+"</span><span class='letra-amarilla'>"+state.new[2].title.substring(21, 36)+"</span><span class='letra-blanca'>"+state.new[2].title.substring(35, 45)+"</span></div></div>");
	const questionsThree = $("<div class='col-lg-3 col-xs-12'><img src='assets/img/"+state.new[3].img+"'><div class='container-questions__div'><span class='letra-blanca'>"+state.new[3].title.substring(0, 18)+"</span><span class='letra-amarilla'>"+state.new[3].title.substring(18, 29)+"</span><span class='letra-blanca'>"+state.new[3].title.substring(29, 53)+"</span></div></div>");

	newsContainer.append(principalNews);
	questions.append(questionsOne);
	questions.append(questionsTwo);
	questions.append(questionsThree);
	newsContainer.append(questions);	

	return newsContainer;
}