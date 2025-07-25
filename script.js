let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";  // This will hold the input string
let arr = Array.from(buttons);  // Convert NodeList to Array for easier manipulation
arr.forEach(button=>{  // Iterate through each button
    // Add a click event listener to each button
    button.addEventListener('click', (e) =>{  
        if(e.target.innerHTML == '='){  // If the button clicked is '=', evaluate the expression
            string = eval(string);  // Evaluate the expression
            input.value = string;  // Display the result in the input box
        }else if(e.target.innerHTML == 'AC'){  // If the button clicked is 'AC', clear the input
            string = "";  // Reset the string
            input.value = string;  // Clear the input box
        }else if(e.target.innerHTML == 'DEL'){  // If the button clicked is 'DEL', remove the last character
            string = string.substring(0, string.length - 1);  // Remove the last character from the string
            input.value = string;  // Update the input box with the modified string
        }
        else{  // For all other buttons, append the button's innerHTML to the string
            // Append the button's innerHTML to the string
            string += e.target.innerHTML;  
            input.value = string;  // Update the input box with the new string
        }
    })
})