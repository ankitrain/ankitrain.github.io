

function Set(num){
    if(document.getElementById("a"+num).style.color=="var(--t_font_red)")
    {
        document.getElementById("a"+num).style.color="var(--t_font_notshown)";
    }
    else
    {
        document.getElementById("a"+num).style.color="var(--t_font_red)";
    }
}

function AllHide(){
    for(let i=0;i<900;i++){
        let num=i+1;
        try{
            document.getElementById("a"+num).style.color="var(--t_font_notshown)";
        }
        catch(e){
            console.error(e.name,e.message);
        }
        
    }
    
}
function AllShow(){
    for(let i=0;i<900;i++){
        let num=i+1;
        try{

            document.getElementById("a"+num).style.color="var(--t_font_red)";
        }
        catch(e){
            console.error(e.name,e.message);
        }
        
    }   
}
function AllStart(){
    for(let i=0;i<900;i++){
        let num=i+1;
        try{
            document.getElementById("a"+num).classList.add("blank");
            document.getElementById("a"+num).style.color="var(--t_font_notshown)";
        }
        catch(e){
            console.error(e.name,e.message);
        }
        
    }   
}
// Spanがタップできる世界
function AllStart_S(){
    for(let i=0;i<900;i++){
        let num=i+1;
        try{
            document.getElementById("a"+num).classList.add("blank");
            if(document.getElementById("a"+num).getAttribute('onclick')==null){
                document.getElementById("a"+num).setAttribute('onclick', 'Set('+num+')');
            }
            document.getElementById("a"+num).style.color="var(--t_font_notshown)";
        }
        catch(e){
            console.error(e.name,e.message);
        }
        
    }   
}
function DandL(){
    const darkModeOn = document.getElementById("cdl").checked;
    if (darkModeOn) { // Dark
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    } else { // Light
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }
    console.log(darkModeOn);
}
function CheckDL(){
    if(window.matchMedia('(prefers-color-scheme: dark)').matches == true){
	
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        document.getElementById("cdl").checked=true;
        
    }else{
        document.getElementById("cdl").checked=false;
    }
}




document.addEventListener('DOMContentLoaded', function(){
    CheckDL();
    AllStart();

});