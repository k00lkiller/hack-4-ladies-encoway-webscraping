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
            var myPromise = new Promise(function(resolve, reject) {
                // "Producing Code" (May take some time)
                  links[i].click()  
                  resolve("Clicked!"); // when successful
                  reject("Oh no!");  // when error
                });
            myPromise.then(
              function(value) { 
                /* code if successful */ 
                setTimeout( downloadAndGoBack(), 300)
                downloadAndGoBack()
                console.log(value)
            },
              function(error) { 
                /* code if some error */
                console.log(error)
             })
        }
    }
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
