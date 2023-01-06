
const sidebar_links = document.querySelectorAll('.aside .sidebar .sb-item');
change_inner_html('who_was');

if (sidebar_links.length) {
    sidebar_links.forEach((sb_link) =>{
        //console.log(sb_link);
        sb_link.addEventListener('click', (e) => {
            //console.log(sidebar_links);
        
            //console.log(sb_link);
            sidebar_links.forEach((sb_link) => {
                sb_link.classList.remove('active');
                
            });
            e.preventDefault();
            sb_link.classList.add('active');
            //console.log(sb_link.id);
    
            change_inner_html(sb_link.id); 

        });
        
    });
}


function change_inner_html(element_id){
    if(top_nav_active[0].id == "books" || top_nav_active[0].id == "links"){
        getJSONData(element_id, top_nav_active[0].id);
    } else{
        var element = document.getElementById('main-article');
        var txtFile = new XMLHttpRequest();
        console.log(top_nav_active[0].id);
        txtFile.open("GET", "html/"+top_nav_active[0].id+"/"+element_id+".html", true);
        txtFile.onreadystatechange = function() {
            if (txtFile.readyState === 4) { // Makes sure the document is ready to parse.
                if (txtFile.status === 200) { // Makes sure the file exists.
                    allText = txtFile.responseText;
                    //lines = txtFile.responseText.split("\n"); // Will separate each line into an array
                    element.innerHTML = txtFile.responseText;
                }
            }
        }
        txtFile.send(null);
    }
}

