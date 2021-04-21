function changeImage(element, number) {
    let dataName = element.getAttribute('data-name');
    if (dataName == 'cat') {
        element.src = 'anh/panda'+ number + '.jpg';
        element.setAttribute('data-name', 'panda');
    } else if (dataName == 'monkey') {
        element.src = 'anh/cat'+ number +'.jpg';
        element.setAttribute('data-name', 'cat');
    } else {
        element.src = 'anh/monkey'+ number +'.jpg';
        element.setAttribute('data-name', 'monkey');
    }
    checkWin();
}

function checkWin() {
    let dataName1 = document.getElementById('img1').getAttribute('data-name');
    let dataName2 = document.getElementById('img2').getAttribute('data-name');
    let dataName3 = document.getElementById('img3').getAttribute('data-name');
    if (dataName1 == dataName2 && dataName2 == dataName3) {
        for (let i = 1; i < 4; i++) {
            document.getElementById('img' + i).style.border = '1px solid red';
        }
    } else {
        document.getElementById('img1').style.border = '';
        document.getElementById('img2').style.border = '';
        document.getElementById('img3').style.border = '';
    }
}