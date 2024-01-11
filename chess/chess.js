
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

// Step 1: Create a MutationObserver
const observer = new MutationObserver((mutations) => {
    // Step 2: Define the callback
    mutations.forEach((mutation) => {
        switch (mutation.type) {
            // case 'childList':
            //     // Handle added or removed nodes
            //     mutation.addedNodes.forEach((node) => {
            //         // if (node.nodeType === Node.ELEMENT_NODE) {
            //             // Step 3: Alter the CSS of the new div
            //             // node.style.backgroundColor = 'lightblue'; // Example CSS change
    
            //             if(node.style.backgroundColor == 'rgb(248, 248, 147)' || node.style.backgroundColor == '#f8f893') {
            //                 node.style.backgroundColor =  'dodgerblue'
            //             }
    
            //             if(node.style.backgroundColor == 'rgb(235, 97, 80)') {
            //                 node.style.backgroundColor =  'rgb(58 206 102)'
            //             }
            //         // }
            //     });
            //     break;
            case 'attributes':
                // Handle attribute changes
                const changedNode = mutation.target;
                const changedAttribute = mutation.attributeName;
                const newValue = changedNode.getAttribute(changedAttribute);
                // Do something with the attribute change
                if(changedNode.style.backgroundColor == 'rgb(248, 248, 147)' || changedNode.style.backgroundColor == '#f8f893') {
                    changedNode.style.backgroundColor =  'dodgerblue'
                }
                if(changedNode.style.backgroundColor == 'rgb(235, 97, 80)') {
                    changedNode.style.backgroundColor =  'rgb(145 98 224)'
                }
                // if(changedNode.style.backgroundColor == 'rgba(155,199,0,.41)') {
                //     changedNode.style.backgroundColor =  'rgb(145 98 224)'
                // }
                break;
            // case 'characterData':
            //     // Handle text content changes
            //     const textChangedNode = mutation.target;
            //     // Do something with the text change
            //     break;
        }
        if (mutation.type === 'childList' || mutation.type === 'attributes') {
            
        }
    });
});

// Step 4: Configure and attach the observer
const config = { childList: true, attributes: true, subtree: true }; // Observe direct children and descendants
observer.observe(document.body, config); // Attach observer to the body element



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
        // if(divs[div].style.backgroundColor == 'rgb(248, 248, 147)') {
        //     divs[div].style.backgroundColor =  'dodgerblue'
        // }
        if(divs[div].style.backgroundColor == 'rgb(235, 97, 80)') {
            divs[div].style.backgroundColor =  'rgb(58 206 102)'
        }
    })
}, 3000);

