"use strict";var render=function(s){s.empty();var a=$('<section class="components"></section>');a.append(Header()),a.append(News()),a.append(World()),a.append(Tecnologia()),s.append(a)},state={new:null,newSelected:null};$(function(s){$.get("/api/news",function(s){if(!s)return alert("error");state.new=s,console.log(state.new);var a=$("#root");render(a)})});var Header=function(){var s=$("<header class='header-container'></header>"),a=$("<div class='header-container__search'><div><span><img src='assets/img/menu.png'>SECTIONS</span><span><img src='assets/img/search.png'>SEARCH</span></div><div><img src='assets/img/fb.png'><img src='assets/img/tw.png'><img src='assets/img/in.png'></div></div>"),t=$("<div class='header-container__logo'><img src='assets/img/logoicon.png'><div>"),e=$("<div class='header-container__fecha'><span>Lunes, Junio 12 de 2017</span> <span> | </span><span><img src='assets/img/cloud.png'> 22°</span></div>"),i=$("<div class='header-container__nav'><nav><ul><li><a>Lo último</a></li><li><a>Opinión</a></li><li><a>Cultura</a></li><li><a>Perú</a></li><li><a>Tecnología</a></li><li><a>Mundo</a></li><li><a>Economía</a></li><li><a>Lifestyle</a></li><li><a>Deporte</a></li></ul></nav><div>");return s.append(a),s.append(t),s.append(e),s.append(i),s},News=function(){var s=$("<section class='news-container'></section>"),a=$("<div class='news-container__princNews'><div><p>"+state.new[0].title+"</p><p>"+state.new[0].brief+"</p></div></div>"),t=$("<div class='container-questions'></div>"),e=$("<div class='col-lg-5 col-xs-12 mg-right'><img src='assets/img/"+state.new[1].img+"'><div class='container-questions__div'><span class='letra-blanca'>"+state.new[1].title.substring(0,16)+"</span><span class='letra-amarilla'>"+state.new[1].title.substring(16,40)+"</span><span class='letra-blanca'>"+state.new[1].title.substring(40,71)+"</span></div></div>"),i=$("<div class='col-lg-3 col-xs-12 mg-right'><img src='assets/img/"+state.new[2].img+"'><div class='container-questions__div'><span class='letra-blanca'>"+state.new[2].title.substring(0,21)+"</span><span class='letra-amarilla'>"+state.new[2].title.substring(21,36)+"</span><span class='letra-blanca'>"+state.new[2].title.substring(35,45)+"</span></div></div>"),n=$("<div class='col-lg-3 col-xs-12'><img src='assets/img/"+state.new[3].img+"'><div class='container-questions__div'><span class='letra-blanca'>"+state.new[3].title.substring(0,18)+"</span><span class='letra-amarilla'>"+state.new[3].title.substring(18,29)+"</span><span class='letra-blanca'>"+state.new[3].title.substring(29,53)+"</span></div></div>");return s.append(a),t.append(e),t.append(i),t.append(n),s.append(t),s},Tecnologia=function(){var s=$("<section class='tech-container'></section>"),a=$("<h3>TECNOLOGÍA</h3>"),t=$("<hr>"),e=$("<div class='tech-photos'></div>"),i=$("<div class='col-md-5 col-xs-12 pad-right'><img src='assets/img/"+state.new[14].img+"'><div class='tech-photos__div'><span class='letra-amarilla'>"+state.new[14].title.substring(0,9)+"</span><span class='letra-blanca'>"+state.new[14].title.substring(9,26)+"</span></div></div>"),n=$("<div class='col-md-6 col-xs-12 pad-right'></div>"),l=$("<div class='col-md-6 col-xs-12 pad-right'><img src='assets/img/"+state.new[15].img+"'><div class='tech-photos__div'><span class='letra-blanca'>"+state.new[15].title+"</span></div></div>"),c=$("<div class='col-md-6 col-xs-12 pad-right'><img src='assets/img/"+state.new[16].img+"'><div class='tech-photos__div'><span class='letra-amarilla'>"+state.new[16].title.substring(0,6)+"</span><span class='letra-blanca'>"+state.new[16].title.substring(6,26)+"</span></div></div>"),d=$("<div class='col-md-12 col-xs-12'><img src='assets/img/"+state.new[17].img+"'><div class='tech-photos__div'><span class='letra-blanca'>"+state.new[17].title+"</span></div></div>"),p=$("<div class='col-md-12 col-xs-12 pad-right'><img src='assets/img/"+state.new[18].img+"'><div class='tech-photos__div'><span class='letra-blanca'>"+state.new[18].title+"</span></div></div>");return s.append(a),s.append(t),e.append(i),n.append(l),n.append(c),n.append(d),n.append(p),s.append(e),s.append(n),s},World=function(){var s=$("<section class='world-container'></section>"),a=$("<h3>MUNDO</h3>"),t=$("<hr>"),e=$("<div class='world-photos'></div>"),i=$("<div class='col-md-3 col-xs-12 pad-right'><img src='assets/img/"+state.new[4].img+"'><div class='world-photos__div'><span class='letra-amarilla'>"+state.new[4].title.substring(0,6)+"</span><span class='letra-blanca'>"+state.new[4].title.substring(6,26)+"</span></div></div>"),n=$("<div class='col-md-3 col-xs-12 pad-right'><img src='assets/img/"+state.new[5].img+"'><div class='world-photos__div'><span class='letra-amarilla'>"+state.new[5].title.substring(0,6)+"</span><span class='letra-blanca'>"+state.new[5].title.substring(6,26)+"</span></div></div>"),l=$("<div class='col-md-3 col-xs-12 pad-right'><img src='assets/img/"+state.new[6].img+"'><div class='world-photos__div'><span class='letra-amarilla'>"+state.new[6].title.substring(0,6)+"</span><span class='letra-blanca'>"+state.new[6].title.substring(6,26)+"</span></div></div>"),c=$("<div class='col-md-3 col-xs-12'><img src='assets/img/"+state.new[7].img+"'><div class='world-photos__div'><span class='letra-blanca'>"+state.new[7].title+"</span></div></div>"),d=$("<div class='world-photos'></div>"),p=$("<div class='col-md-3 col-xs-12 pad-right'><img src='assets/img/"+state.new[10].img+"'><div class='world-photos__div'><span class='letra-blanca'>"+state.new[10].title+"</span></div></div>"),r=$("<div class='col-md-3 col-xs-12 pad-right'><img src='assets/img/"+state.new[11].img+"'><div class='world-photos__div'><span class='letra-blanca'>"+state.new[11].title+"</span></div></div>"),o=$("<div class='col-md-3 col-xs-12 pad-right'><img src='assets/img/"+state.new[12].img+"'><div class='world-photos__div'><span class='letra-blanca'>"+state.new[12].title+"</span></div></div>"),v=$("<div class='col-md-3 col-xs-12'><img src='assets/img/"+state.new[13].img+"'><div class='world-photos__div'><span class='letra-blanca'>"+state.new[13].title+"</span></div></div>");return s.append(a),s.append(t),e.append(i),e.append(n),e.append(l),e.append(c),s.append(e),d.append(p),d.append(r),d.append(o),d.append(v),s.append(d),s};