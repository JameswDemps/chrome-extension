
// -------------------------------------------------------------

// const init = {
//     method: 'GET',
//     mode: 'no-cors',
//     headers: new Headers({
//         'Content-Type': 'application/x-www-form-urlencoded'
//     })
// };
// const oldRequest = new Request("https://colonist.io/dist/images/settlement_red.svg?v135", init)
// const newRequest = new Request("https://raw.githubusercontent.com/JameswDemps/chrome-extension/main/image/chess/ChessLionBlack.svg", oldRequest)

window.addEventListener('load',  onDocLoaded, false);

function onDocLoaded() {
    var btns = allByTag('button');
    forEachNode(btns, attachBtnHandler);

    function attachBtnHandler(curNode, curIndex, nodelist) {
        curNode.addEventListener('click', onBtnClick, false);
    }
}

function onBtnClick(evt) {
    alert(this.textContent);
}

setTimeout(function (){
    var images = document.getElementsByTagName("img")
    var divs = document.getElementsByTagName("div")

    var replaceList = [[[/bn.png/], 'ChessLionBlack.svg'], [[/wn.png/], 'ChessLionWhite.svg'], [[/i5jbHNO/, /w6I2Zm/, /JGM0I0Mz/], 'ChessLionRed.svg'], [[/i5jbHNO/, /w6I2Zm/, /RFOTE2MT/], 'ChessLionGreen.svg'], [[/i5jbHNO/, /w6I2Zm/, /wOTUyNj/], 'ChessLionYellow.svg'], [[/i5jbHNO/, /w6I2Zm/, /QxODVCRj/], 'ChessLionBlue.svg'], 
    [[/bb.png/], 'ChessFireBlack.svg'], [[/wb.png/], 'ChessFireWhite.svg'], [[/sMTA3L/, /DMDk1MjY/], 'ChessFireYellow.svg'], [[/sMTA3L/, /0MTg1QkY/], 'ChessFireBlue.svg'], [[/sMTA3L/, /NCRjNCND/], 'ChessFireRed.svg'], [[/sMTA3L/, /M0RTkxNjE/], 'ChessFireGreen.svg'], 
    [[/bp.png/], 'ChessMicBlack.svg'], [[/wp.png/], 'ChessMicWhite.svg'], [[/MjdoMTA/, /4YzhhODg/], 'ChessMicGrey.svg'], [[/CRjNCN/, /M7fS5jb/, /1bC0uO/], 'ChessMicRed.svg'], [[/Dk1MjY/, /1bC0uOS/], 'ChessMicYellow.svg'], [[/0MTg1Q/, /MTg1QkY/, /1bC0uO/], 'ChessMicBlue.svg'], [[/RTkxNjE/, /1bC0uO/], 'ChessMicGreen.svg']
    ]
    var imageFolder = "https://raw.githubusercontent.com/JameswDemps/chrome-extension/main/image/chess/"

    // const arr1 = [true, false, true]
    // const arr2 = [true, true, true]

    let checker = (arr, src) => arr.every(v => {
        console.log("v: ", v)
        console.log("v.test(src): ", v.test(src))
        return v.test(src) === true
    });

    // console.log("heelo!")
    // console.log("arr1: ", checker(arr1))
    // console.log("arr2: ", checker(arr2))

    function replaceImage(src) {
        var change = null

        replaceList.some(function (item, index) {
            var replaceImageBool = false

            const regexItem = item[0]

            console.log('item: ', item)
            console.log("regexItem: ", regexItem)
            console.log("regexItem.length: ", regexItem.length)

            if(regexItem.length > 1){
                console.log(":0:")
                // replaceImageBool = regexItem[0].test(src) && regexItem[1].test(src) && regexItem[2].test(src)
                // console.log('regexItem[0].test(src): ', regexItem[0].test(src))
                // console.log('regexItem[1].test(src): ', regexItem[1].test(src))
                replaceImageBool = checker(regexItem, src);
            }
            else if(regexItem.length == 1) {
                console.log(":1:")
                console.log("regexItem", regexItem)
                replaceImageBool = regexItem[0].test(src)
            }
            console.log("replaceImageBool: ", replaceImageBool)

            if(replaceImageBool){
                console.log(":2:")
                change = imageFolder + item[1]
                return true
            }

            console.log(":3:")
        })
        if (change != null) {
            return change
        }
        return src
    }
            
    Object.keys(images).forEach(function (item, index) {
        images[item].src = replaceImage(images[item].src)
    })
    Object.keys(divs).forEach(function (div, index) {
        if(divs[div].style.backgroundColor == 'rgb(248, 248, 147)') {
            divs[div].style.backgroundColor =  'dodgerblue'
        }
    })
}, 3000);