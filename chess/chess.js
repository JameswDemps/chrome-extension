setTimeout(function (){
    var images = document.getElementsByTagName("img")
    
    var replaceList = [[/bn.png/, 'ChessLionBlack.svg'], [/wn.png/, 'ChessLionWhite.svg'], [/bb.png/, 'ChessFireBlack.svg'], [/wb.png/, 'ChessFireWhite.svg']]
    var imageFolder = "https://raw.githubusercontent.com/JameswDemps/chrome-extension/main/image/chess/"
    
    function replaceImage(src) {
        var change = null

        replaceList.some(function (item, index) {
            if(item[0].test(src)){
                change = imageFolder + item[1]
                return true
            }
        })
        if (change != null) {
            return change
        }
        return src
    }
            
    Object.keys(images).forEach(function (item, index) {
        images[item].src = replaceImage(images[item].src)
    })
}, 5000);