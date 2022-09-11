 var links = document.querySelectorAll('[id*="ergebnissForm:selectedSuchErgebnisFormTable:"] [id$=":6:fade"]')
 let localStorage
//console.log(links)
var arraySet = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            localStorage['arrayCounter'] = links.length - 1
            console.log('Set Storage'+  localStorage['arrayCounter'] )
        }
    };
})();
 window.addEventListener('load', (event) => {

    console.log('page is fully loaded')
    arraySet()
    downloadXML()
  });

//  window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
//     downloadXML()
// });

 function downloadXML() {
    if (document.title.includes('Notice on costs')){
       
            console.log(document.title)
            var downloadBtn = document.getElementById( 'form:kostenpflichtigabrufen' )
            downloadBtn.click()
            setTimeout(function(){
                localStorage.setItem('arrayCounter') -= 1
                console.log('Update Storage' + localStorage['arrayCounter'] )  
            }, 2000)
            window.history.back()    

    } else if (document.title.includes('Search Result')) {
        // links.forEach((element) => {
        //      console.log(document.title)
        //       element.click()
        //     })
            for (var i = localStorage.getItem('arrayCounter'); i >=0; i--) {
               console.log(document.title)
               links[i].click()
            }
        }

    }




