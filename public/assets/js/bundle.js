"use strict";var render=function(a){a.empty();var e=$('<section class="components"></section>');e.append(Header()),a.append(e)},state={new:null,newSelected:null};$(function(a){$.get("http://localhost:3000/api/news",function(a){if(!a)return alert("error");state.new=a,console.log(state.new);var e=$("#root");render(e)})});var Header=function(){var a=$("<header class='header-container'></header>"),e=$("<div class='header-container__search'><div><span><img src='assets/img/menu.png'>SECTIONS</span><span><img src='assets/img/search.png'>SEARCH</span></div><div><img src='assets/img/fb.png'><img src='assets/img/tw.png'><img src='assets/img/in.png'></div></div>"),n=$("<div class='header-container__logo'><img src='assets/img/logoicon.png'><div>"),i=$("<div class='header-container__fecha'><span>Lunes, Junio 12 de 2017</span> <span> | </span><span><img src='assets/img/cloud.png'> 22°</span></div>"),s=$("<div class='header-container__nav'><nav><ul><li><a>Lo último</a></li><li><a>Opinión</a></li><li><a>Cultura</a></li><li><a>Perú</a></li><li><a>Tecnología</a></li><li><a>Mundo</a></li><li><a>Economía</a></li><li><a>Lifestyle</a></li><li><a>Deporte</a></li></ul></nav><div>");return a.append(e),a.append(n),a.append(i),a.append(s),a};