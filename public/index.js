function changeLinkedInLogo (){
    linkedInLogo.className = 'newClassName1';
    
     }

     function unchangeLinkedInLogo (){
        linkedInLogo.className = "linkedInImg";
        
     }

     function changeResumeLogo (){
    
    resumeLogo.className = 'newClassName2'
     }

     function unchangeResumeLogo (){
        resumeLogo.className = "normal";
     }

     function changeGitHubLogo (){
    gitHubLogo.className = 'newClassName3';
     }

     function unchangeGitHubLogo (){
        gitHubLogo.className = "gitImg";
        
     }


     var linkedInLogo = document.getElementById("linkedIn");
     var resumeLogo = document.getElementById('resumeLogo');
     var gitHubLogo = document.getElementById("gitHubLogo");

     linkedInLogo.onmouseover = changeLinkedInLogo;
     linkedInLogo.onmouseout = unchangeLinkedInLogo;

     resumeLogo.onmouseover = changeResumeLogo;
     resumeLogo.onmouseout = unchangeResumeLogo;

     gitHubLogo.onmouseover = changeGitHubLogo;
     gitHubLogo.onmouseout = unchangeGitHubLogo;