let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

<script type="text/javascript">
    const audio = new Audio();
    audio.src = "./tap.mp3"
</script>
    /*
    const button = document.getElementById('soundButton');

    const audio = new Audio('C:\Users\hp\Desktop\LEARN TO CODE\WEB DEV\cwh\CALCULATOR\tap'); 

    button.addEventListener('click', () => {
        audio.play();
    });
</script>*/


let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})