
let display = document.getElementById('screen_display');

let buttonCollection = Array.from(document.getElementsByClassName('button_collection'));

buttonCollection.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case '፩':
                display.innerText += 1;
                break;
            case '፪':
                display.innerText += 2;
                break;
            case '፫':
                display.innerText += 3;
                break;
            case '፬':
                display.innerText += 4;
                break;
            case '፭':
                display.innerText += 5;
                break;
            case '፯':
                display.innerText += 6;
                break;
            case '፰':
                display.innerText += 7;
                break;
            case '፱':
                display.innerText += 8;
                break;
            case '፲':
                display.innerText += 9;
                break;
            case '፨':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});