const sliderTop = document.getElementById('sliderTop1');
const thumbLineTop = document.getElementById('thumbLineTop');

const sliderLeft = document.getElementById('sliderLeft1');
const thumbLineLeft = document.getElementById('thumbLineLeft');

const sliderRight = document.getElementById('sliderRight1');
const thumbLineRight = document.getElementById('thumbLineRight');

const sliderBottom = document.getElementById('sliderBottom1');
const thumbLineBottom = document.getElementById('thumbLineBottom');

// Update line position for each slider
function updateLine(slider, line, orientation) {
    const sliderRect = slider.getBoundingClientRect();
    if (orientation === 'horizontal') {
        const thumbPosition = slider.value / 6;
        // alert(slider.value);
        line.style.top = `-${18}px`;
        line.style.bottom = `0px`;
        line.style.left = `${thumbPosition}%`;
        line.style.right = `${(100 - thumbPosition)}%`;
        line.style.height = '105%';
    } else {
        const thumbPosition = slider.value / 6;
        line.style.top = `${thumbPosition}%`;
        // line.style.right = `${(100 - thumbPosition)}%`;
        line.style.left = '-20px';
        line.style.width = '103%';
    }
}

// Update lines when sliders are moved
sliderTop.addEventListener('input', () => updateLine(sliderTop, thumbLineTop, 'horizontal'));

sliderLeft.addEventListener('input', () => updateLine(sliderLeft, thumbLineLeft, 'vertical'));

sliderRight.addEventListener('input', () => updateLine(sliderRight, thumbLineRight, 'vertical'));

sliderBottom.addEventListener('input', () => updateLine(sliderBottom, thumbLineBottom, 'horizontal'));

// Initialize line positions
updateLine(sliderTop, thumbLineTop, 'horizontal');
updateLine(sliderLeft, thumbLineLeft, 'vertical');
updateLine(sliderRight, thumbLineRight, 'vertical');
updateLine(sliderBottom, thumbLineBottom, 'horizontal');




let boxsect = document.getElementById('boxesSection');
let colorpicker = document.getElementById('bgcolor1');
let codeOutput = document.getElementById('codeOutput');
let count = 0;
let  activeEl = boxsect;


function creatElement(element) {

    count++;
    let newel = document.createElement(element);
    activeEl.appendChild(newel);
    newel.className = `c ${element}${count}`;
    newel.id = `${element}${count}`

    let Width = 70;
    newel.style.width = `${Width}%`;
    newel.style.height = `${40}px`;

    newel.style.border =  `2px solid ${colorpicker.value}`;


    // let cnt = 0;
    // newdiv.addEventListener('click', function () {

    //     // cnt++;

    //     if (activeDiv) {
    //         activeDiv.classList.remove('active');
    //     }

    //     activeDiv = newdiv;
    //     activeDiv.classList.add('active');
    //     // applyProp(activeDiv);
    //     // if (cnt % 2 == 0) {
    //     //     activeDiv.classList.remove('active');
    //     // }
    //     //    thumbLineRight.style.top = `${sliderRight.value / 6 + activeDiv.clientHeight.valueOf() /6}%`;
    //     //    sliderRight.value = `${sliderRight - activeDiv.clientHeight.valueOf()}`;
    //     // sliderRight.value = Number(activeDiv.clientHeight.valueOf()) + Number(sliderRight.value);

    //     // console.log(activeDiv.clientTop);
    //     sliderRight.value = activeDiv.getBoundingClientRect().bottom - 56;

    //     sliderBottom.value = Math.abs(Number(activeDiv.getBoundingClientRect().width) / 14.078) * 6;


    //     updateLine(sliderRight, thumbLineRight, 'vertical');
    //     updateLine(sliderBottom, thumbLineBottom, 'horizontal');


    //     // thumbLineRight.style.top = activeDiv.getBoundingClientRect().bottom - 56;


    //     sliderRight.addEventListener('input', () => {
    //         activeDiv.style.height = `${(Number(sliderRight.value) + 56 - activeDiv.getBoundingClientRect().top) / 6}%`;
    //     })



    //     sliderBottom.addEventListener('input', () => {

    //         let Width = Math.abs(Number(sliderBottom.value) / 6);

    //         activeDiv.style.width = `${Width}%`;

    //     })
    // });

    // adjSlider(newdiv);
    newel.addEventListener('click', (event) => {
        adjSlider(newel);
        event.stopPropagation();

    }

    )





    // activeDiv.style.background = colorpicker.value;


    // display.addEventListener('click', () => {
    //     activeDiv.style.display = 'flex';

    // })


}

// let chCount = 0;

// childDiv.addEventListener('click', () => {

//     chCount++;

//     let child = document.createElement('div');
//     child.classList = `ch ch${chCount}`;
//     child.id = `chId${chCount}`;
//     child.style.height = `${20 + Math.random() * 40}px`
//     child.style.width = `${20 + Math.random() * 40}px`


//     activeDiv.appendChild(child);
//     // adjSlider(child);

//     child.addEventListener('click', (event) => {
//         console.log("child clicked for adjSlider");
//         adjSlider(child);
//         event.stopPropagation();

//     })



//     // let Width = Math.abs(sliderBottom.value - sliderTop.value) / 6;

//     // child.style.width = `${Width}%`;
//     // child.style.height = `${(sliderRight.value) / 6}%`;

//     child.style.background = colorpicker.value;


//     // let cnt = 0;
//     // child.addEventListener('click', function () {

//     // cnt++;

//     // if (activeDiv) {
//     //     activeDiv.classList.remove('active');
//     // }

//     // activeDiv = child;
//     // activeDiv.classList.add('active');
//     // applyProp(activeDiv);
//     // if (cnt % 2 == 0) {
//     //     activeDiv.classList.remove('active');
//     // }
//     //    thumbLineRight.style.top = `${sliderRight.value / 6 + activeDiv.clientHeight.valueOf() /6}%`;
//     //    sliderRight.value = `${sliderRight - activeDiv.clientHeight.valueOf()}`;
//     // sliderRight.value = Number(activeDiv.clientHeight.valueOf()) + Number(sliderRight.value);


//     // child.style.background = 'red';
//     // sliderRight.addEventListener('input', () => {
//     //     child.style.height = `${(sliderRight.value - sliderLeft.value) / 6}%`;
//     // })


//     // sliderBottom.addEventListener('input', () => {

//     //     let Width = Math.abs(sliderBottom.value - sliderTop.value) / 6;

//     //     child.style.width = `${Width}%`;

//     // });



//     // });

// });

function adjSlider(element) {

    if (activeEl) {
        console.log(activeEl.className);
        activeEl.classList.remove('active');
    }

    activeEl = element;
    activeEl.classList.add('active');



    sliderRight.value = activeEl.getBoundingClientRect().bottom - 56;

    sliderBottom.value = Math.abs(Number(activeEl.getBoundingClientRect().width) / 14.078) * 6;


    updateLine(sliderRight, thumbLineRight, 'vertical');
    updateLine(sliderBottom, thumbLineBottom, 'horizontal');


    // thumbLineRight.style.top = activeDiv.getBoundingClientRect().bottom - 56;


   if (element !== boxsect) {
    sliderRight.addEventListener('input', () => {
        activeEl.style.height = `${(Number(sliderRight.value) + 56 -  activeEl.getBoundingClientRect().top) / 6}%`;
    })



    sliderBottom.addEventListener('input', () => {

        let Width = Math.abs(Number(sliderBottom.value) / 6);

        activeEl.style.width = `${Width}%`;

    })
   }
}


boxsect.addEventListener('click' , (event)=>{
    adjSlider(boxsect);
    event.stopPropagation();

})


let generateCodeBtn = document.getElementById('generateCode');


// let j = 0; let str = 'style="'; let flag = false;
// let all = document.querySelectorAll('#boxesSection div');
let allElement = boxsect.children;

function inner() {
    for (let i = 4; i < allElement.length; i++) {

        // let Id = allElement[i].getAttribute('id');
        // let Class = allElement[i].getAttribute('class');
        // let Style = allElement[i].getAttribute('style');

        // cssGenerator(Class, Id, Style);

        // allElement[i].removeAttribute('style');
        htmlGenerator(allElement[i]);

    }
}

let css = `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Layout</title>\n    <style>\n    body{height: 99.8vh;} \n \n`;


function cssGenerator(classs, idd, stylee) {

    // if(css != ''){
    //     css = '';
    // }


    if (idd != null) {
        css += `    #${idd}{\n`;
        css += `        `;
        css += stylee;
        css += `\n           }\n \n`;

    } else if (classs != null) {
        css += `    .${classs}{\n`;
        css += `                    `;
        css += stylee;
        css += `\n           }\n \n`;

    }
}

let html = ``;

function htmlGenerator(element) {

    html += ` <${element.tagName.toLowerCase()} `;

    let Id = element.getAttribute('id');
    let Class = element.getAttribute('class');
    let Style = element.getAttribute('style');

    cssGenerator(Class, Id, Style);

    element.removeAttribute('style');

    for (let i = 0; i < element.attributes.length; i++) {
        html += `${element.attributes[i].nodeName}="`;
        html += `${element.attributes[i].value}" `;

    }
    html += `>`;

    for (let j = 0; j < element.children.length; j++) {
        // if(element.children[i].children.length !=0){
        html += `          \n`;
        htmlGenerator(element.children[j]);
        html += `          \n`;
        // i++;

        // }
    }
    html += `</${element.tagName.toLowerCase()}>\n `;
    // i++;

}

function generateCode() {

    codeOutput.style.display = 'flex';
    // codeOutput.style.border = '2px solid #ddd';
    inner();
    css += `</style> \n </head> \n <body>`
    // let htmlCode = `<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Layout</title>\n    <style>\n`;
    // let cssCode = '';
    // const boxes = document.querySelectorAll('.box');
    // boxes.forEach((box, index) => {


    //     const rect = box.getBoundingClientRect();

    //     const offsetX = rect.left; // X coordinate relative to the parent
    //     const offsetY = rect.top - 98; // Y coordinate relative to the parent
    //     // alert(offsetY);

    //     const backgroundColor = box.style.backgroundColor;
    //     const boxWidth = (box.offsetWidth / (10 + boxesSection.clientWidth)) * 100; // Calculate percentage width
    //     const boxHeight = (box.offsetHeight / (60 + boxesSection.clientHeight)) * 100; // Calculate percentage height
    //     const boxLeft = (box.offsetLeft / (10 + boxesSection.clientWidth)) * 100; // Calculate percentage left
    //     const boxTop = (offsetY / 560) * 100; // Calculate percentage top



    //     cssCode += `    .box${index + 1} {\n        background-color: ${backgroundColor};\n        width: ${boxWidth}%;\n        height: ${boxHeight}%;\n            left: ${boxLeft}%;\n        top: ${boxTop}%;\n    }\n`;
    // });

    // htmlCode += cssCode + `    </style>\n</head>\n<body>\n`;
    // boxes.forEach((box, index) => {
    //     // htmlCode += `    <div class="box box${index + 1}"></div>\n`;
    //     htmlCode += box.innerHTML;
    // });
    // htmlCode += `</body>\n</html>`;

    codeOutput.textContent = css; // Output the generated code
    codeOutput.textContent += html; // Output the generated code
    codeOutput.textContent += `</body> \n </html>`; // Output the generated code
}

const styleInp = document.getElementById('style');
const AttrInp = document.getElementById('attr');
const TagInp = document.getElementById('tag');

function setStyle(property, value) {
    const str = styleInp.value;
    activeEl.style[property] = value;
}

function setAttr(name, val) {
    // let attr = document.createAttribute(name);
    // attr.value = val;
    activeEl.setAttribute(name , val);
}

function setTag(value) {
    let el = document.createElement(value);
    el.style.height = `30px`;
    el.style.width = `500px`;
    el.style.border = `2px solid`;
    el.style.background = colorpicker.value;
    activeEl.appendChild(el);
    adjSlider(el);
    el.addEventListener('click' , (event)=>{
    adjSlider(el);

        event.stopPropagation();

    })

}

AttrInp.addEventListener('keydown' , (event)=>{
if(event.key === 'Enter'){
    var input = AttrInp.value;
    var semiCol = AttrInp.length;


    // for (let i = 0; i < input.length; i++) {
    //     if (input[i] == ':') {
    const i = input.match(':' || '=').index;

    if (input.match(';')) {
        semiCol = AttrInp.value.match(';').index;

    }


    var name = input.slice(0, i).trim();
    var valu = input.slice(i + 1, semiCol).trim()
    //     break;
    // }



    // console.log("pressed", valu, property);


    setAttr( name , valu);
}

})

TagInp.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        var val = TagInp.value;
        setTag(val);
    }
})

styleInp.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        var input = styleInp.value;
        var semiCol = styleInp.length;


        // for (let i = 0; i < input.length; i++) {
        //     if (input[i] == ':') {
        const i = input.match(':').index;

        if (input.match(';')) {
            semiCol = styleInp.value.match(';').index;

        }


        var property = input.slice(0, i).trim();
        var value = input.slice(i + 1, semiCol).trim()
        //     break;
        // }



        console.log("pressed", value, property);

        setStyle(property, value);
    }
})





//..........................................................All button working add eventlisteners..........................................................//

let btn = document.getElementById('allBtn').children;

for (let i = 2; i < btn.length; i++) {
    
    btn[i].addEventListener('click' , (event)=>{
        creatElement(btn[i].value);
        event.stopPropagation();

    })
}



let deletBtn = document.getElementById('delete');

function deleteElement(activeEl){
    if (activeEl != boxsect) {
        // document.removeChild(activeEl);
        let idd = activeEl.id;
        document.getElementById(idd).remove();
    }
}

deletBtn.addEventListener('click' , ()=>{
    deleteElement(activeEl);
    activeEl = boxsect;
    adjSlider(activeEl);

})




































// Add event listeners
generateCodeBtn.addEventListener('click', () => {
    generateCode();
});