
InputValue = document.getElementById('InputBox').length;
InputBox = document.getElementById("InputBox");
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == '=')
        {
           string = eval(string);
           document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C')
        {
           string = "";
           document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'π')
        {
           string = "3.14";
           document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'x²')
        {
           string = string * string;
           document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '√x')
        {
           string = Math.sqrt(string);
           document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'sin')
        {
           string = Math.sin(string);
           document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'cos')
        {
           string = Math.cos(string);
           document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'tan')
        {
           string = Math.tan(string);
           document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'log')
        {
         string = Math.log(string);
           document.querySelector('input').value = string;
        }
       // else if(InputBox.value == a || b || c || d || f || g || h || i || j || k || l || m || n || o || p || q || r || s || t || u || v || w || x || y || z)
        //{
         //if(event.keycode === 13)
         //{
         //   alert("please enter numeric values😥");
         //}
         //else if(e.target.innerHTML = '=')
         //{
         //   alert("please enter numeric values😥");
         //}
        //}
        else
        {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});

const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       options = optionMenu.querySelectorAll(".option"),
       sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;

        optionMenu.classList.remove("active");
    });
});

function Scientific()
{
   window.location.href = "Scientific.html";
}
function Standard()
{
   window.location.href = "Index.html";
}

function Currency()
{
   window.location.href = "Currency.html";
}



const borderBox = document.querySelector('.text-center');
const colors = ['#FBC02E', '#19D8FF', '#FBC02E']; // Colors to cycle through
let colorIndex = 0;

function changeColor() {
  borderBox.style.borderColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
}

// Call the changeColor function at regular intervals
setInterval(changeColor, 5000); // Change color every 5 seconds


