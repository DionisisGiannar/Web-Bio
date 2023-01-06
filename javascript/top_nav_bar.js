
const links = document.querySelectorAll('.topnav .class-link');
var top_nav_active = document.getElementsByClassName('class-link active');
if (links.length) {
    links.forEach((link) => {
        //console.log(link);
        link.addEventListener('click', (e) => {
            /**
             * Set active class per click on .topnav
             */
            //console.log(link);
            links.forEach((link) => {
                link.classList.remove('active');
            });
            e.preventDefault();
            link.classList.add('active');
        
            /**
             *  display side bar items per active menu 
            */
            display_sb_items();
            
        });
    });
}

function display_sb_items() { 
   
    //console.log("active top nav bar Length = "+top_nav_active.length);
    if(top_nav_active.length){
      //  console.log(top_nav_active[0].id);   
    
        var side_bar_all_class = document.getElementsByClassName("sb-item");
        //console.log(side_bar_all_class);
        
        for( var i=0; i<side_bar_all_class.length; i++){
            if(side_bar_all_class.item(i).classList.contains(top_nav_active[0].id)){
                //console.log(side_bar_all_class.item(i));
                side_bar_all_class.item(i).style.display = 'block';
                side_bar_all_class.item(i).classList.add('visible');

                
            }else {
                side_bar_all_class.item(i).style.display = 'none';
                side_bar_all_class.item(i).classList.remove('visible');
                side_bar_all_class.item(i).classList.remove('active');

            }
        }
        var side_bar_visible = document.getElementsByClassName('visible');
        if(side_bar_visible.length){
            side_bar_visible.item(0).classList.add('active');
            change_inner_html(side_bar_visible.item(0).id); // if changed check the id and saw the right content
        
        }
        
        
    }
}