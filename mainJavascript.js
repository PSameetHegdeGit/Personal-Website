function openProject(event, project){
    console.log("Hello!")

    let i, tablinks, tabcontent

    tabcontent = document.getElementsByClassName("project");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    
    tablinks = document.getElementsByClassName("tablink")
    
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }

    document.getElementById(project).style.display = "flex";
    event.currentTarget.className += " active";


}