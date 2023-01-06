function getJSONData (id, top_nav_id){
    fetch("works.json", {method: "GET"})
        .then((res) => res.json())
        //.then((json) => console.log(json))
        .then((json) => showJSONData(json, id, top_nav_id))
        .catch((err) => console.error("json ERROR: ", err));
}

function showJSONData(obj, id, top_nav_id) {

    let anHTML = "<h2>"+id+"</h2><table>";
    
    //const obj = JSON.parse(works);
    console.log(obj[top_nav_id]);
    //console.log(person);
    
    //console.log(obj[0].data.length);
    for (let obj_element of obj[top_nav_id]) {
        if(obj_element.category == id){
            if(top_nav_id == "links"){
                anHTML += "<tr><td>"+
                    "<a href=\" "+obj_element.id+"\" target=\"_blank\" rel=\"noopener noreferrer\">"+
                    obj_element.title+"</a>"+
                obj_element.info+ "</td></tr>";
            } else {
                anHTML += "<tr><td>"+obj_element.title+ "</td></tr>";
            }
            
        }
        
    }
    anHTML += "</table>";
    //Show table with albums
    document.getElementById('main-article').innerHTML = anHTML;
    
}
