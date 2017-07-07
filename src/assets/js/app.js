"use strict";
const render = (root)=>{
    root.empty();
    const section = $('<section class="components"></section>');
    section.append(Header());
    // section.append(News());
    root.append(section);
};
const state = {
    new : null,
    newSelected : null
};

$( _ => {
  
    $.get('http://localhost:3000/api/news',(json) => {
        if(!json){
          return alert("error");
        }
        state.new = json;
        console.log(state.new);
        const root = $('#root');
        render(root);
    });

})

