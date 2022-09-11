const links = document.querySelectorAll('[id*="ergebnissForm:selectedSuchErgebnisFormTable:"] [id$=":6:fade"]')
console.log(links)

 window.addEventListener('load', (event) => {
 
    downloadXML()
    sessionStorage.clear();
  })

  var arraySet = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            var iteration = links.length - 1
            sessionStorage.setItem('arrayCounter', iteration)
            // console.log(sessionStorage['arrayCounter'] )
        }
    };
})();

 function downloadXML() {

    if (document.title.includes('Search Result')) {
        arraySet()
        for (var i = sessionStorage.getItem('arrayCounter'); i >=0; i--) {
           console.log('clicked download')
           //links[i].click().then(downloadAndGoBack())

           var goToDownload = new Promise((resolve, reject) => {
            setTimeout(() => {
              links[i].click()  
              resolve("success")
            }, 300)
          })
          
          goToDownload.then(downloadAndGoBack()).catch((error) => console.error(error))

        }

    }
    
    // else if (document.title.includes('Notice on costs')){    
    //     downloadAndGoBack()
    // }

 }


function downloadAndGoBack ()
{
    var downloadBtn = document.getElementById( 'form:kostenpflichtigabrufen' )
    downloadBtn.click()
    setTimeout( function ()
    {
        var oldStorage = sessionStorage.getItem( 'arrayCounter' )
        var newStorage = oldStorage - 1
        sessionStorage.setItem( 'arrayCounter', newStorage )
        console.log( 'Update Storage' + newStorage )
    }, 50000 )
    setTimeout( window.history.back(), 50000 )
}

// function successCallback(result) {
//     console.log(`Audio file ready at URL: ${result}`);
//   }
  
//   function failureCallback(error) {
//     console.error(`Error generating audio file: ${error}`);
//   }
  
//   clickAsync(links, successCallback, failureCallback);
  
