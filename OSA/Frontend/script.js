//CONSTANS
const colorPicker = document.getElementById('colorPicker'); // Constant for the Main color picker (by id)
const colorPicker2 = document.getElementById('colorPicker2'); // Constant for the Secondary color picker (by id)
const colorPicker3 = document.getElementById('colorPicker3'); // Constant for the Detail color picker (by id)
const switchInput = document.getElementById('switch'); // Constant for the Dark mode switch (by id)
const switchInput2 = document.getElementById('switch2'); // Constans switch for the text with custom background color to change (by id)
const switchInput3 = document.getElementById('switch3'); // Constans switch for the text with custom background color to change (by id)
const switchInput4 = document.getElementById('switch4'); // Constans switch for the text with custom background color to change (by id)
const modeTds = document.querySelectorAll('.modeTd'); // Constant for the tds (table cells) to change the text color inside (by class)
const hrs = document.querySelectorAll('.hr'); // Constant for the hrs (horisontal lines) in the tds to change with the text (by class)
const scct = document.querySelectorAll(`.scct`) // Constans for the secondary custom colored text (scct) (by class)
const mcct = document.querySelectorAll(`.mcct`) // Constans for the main custom colored text (mcct) (by class)
const dcct = document.querySelectorAll(`.button`) // Constans for the main custom colored text (dcct) (by class)
const body = document.body; // Constant for the HTML/CSS body so they JS knows what the body is.



// FUNCTIONS
// Function to set the background gradient
function setGradient() {
    const selectedColor = colorPicker.value;
    console.log(colorPicker.value);
    const selectedColor2 = colorPicker2.value;
    console.log(colorPicker2.value);
    const selectedColor3 = colorPicker3.value;
    console.log(colorPicker3.value);
    const switchColor = switchInput.checked ? 'rgb(51,51,51)' : 'rgb(204, 204, 204)';
    body.style.background = `linear-gradient(0deg, ${selectedColor} 0%, ${switchColor} 30%)`;

    // converting JS values to CSS var
    body.style.setProperty('--selected-color', selectedColor);
    body.style.setProperty('--selected-color2', selectedColor2);
    body.style.setProperty('--selected-color3', selectedColor3);
    body.style.setProperty('--switch-color', switchColor);
}

// Function to set the text color (light/dark mode)
function setMode() {
    console.log("setMode Called");
    const switchState = switchInput.checked;
    modeTds.forEach((modeTd) => {
        modeTd.style.color = switchState ? 'rgb(255,255,255)' : 'rgb(0,0,0)' ;
    });
}

// Function to set the hr color (light/dark mode)
function setHrMode() {
    console.log("setHrMode Called");
    const switchState = switchInput.checked;
    hrs.forEach((hr) => {
        hr.style.border = switchState ? 'solid 1px rgb(255,255,255)' : 'solid 1px rgb(0,0,0)' ;
    });
}

// Function to set main custom text color on custom colored background 
function setMainTextColor() {
    console.log("setMainTextColor Called");
    const switchState3 = switchInput3.checked;
    mcct.forEach((mcct) => {
        mcct.style.color = switchState3 ? 'rgb(255,255,255)' : 'rgb(0,0,0)' ;
    });
}

// Function to set secondary custom text color on custom colored background 
function setSecondaryTextColor() {
    console.log("setSecondaryTextColor Called");
    const switchState2 = switchInput2.checked;
    scct.forEach((scct) => {
        scct.style.color = switchState2 ? 'rgb(255,255,255)' : 'rgb(0,0,0)' ;
    });
}

// Function to set detail custom text color on custom colored background 
function setDetailTextColor() {
    console.log("setDetailTextColor Called");
    const switchState4 = switchInput4.checked;
    dcct.forEach((dcct) => {
        dcct.style.color = switchState4 ? 'rgb(255,255,255)' : 'rgb(0,0,0)' ;
    });
}

// Function to open / close menubar
function toggleMenu() {
    const togglemenubutton = document.querySelector(`.toggle-menu-button`);
    toggle-menu.classList.toggle(`collapsed`);
}



// EVENT LISTENERS
colorPicker.addEventListener('input', setGradient); // Event listener for Main color picker (colorPicker)
colorPicker2.addEventListener('input', setGradient); // Event listener for Secondary color picker (colorPicker2)
colorPicker3.addEventListener('input', setGradient); // Event listener for Detail Color picker (colorPicker3)
switchInput.addEventListener('change', setGradient); // Event listener for Dark Mode switch (switch)
switchInput.addEventListener('change', setMode); // Event listener for Dark text color (.modeDiv)
switchInput.addEventListener('change', setHrMode); // Event listener for Dark line color (hr)
switchInput2.addEventListener(`change`,setSecondaryTextColor); // Event listener for dark and light text color on custom colored background (scct)
switchInput3.addEventListener(`change`,setMainTextColor); // Event listener for dark and light text color on custom colored background (mcct)
switchInput4.addEventListener(`change`,setDetailTextColor); // Event listener for dark and light text color on custom colored background (dcct)



// FUNCTION CALLS
// Call the gradient function
setGradient();
// Call the text color change function
setMode();
// Call the hrMode function
setHrMode();
// Call the secondarytextColor function
setSecondaryTextColor();
// Call the maintextColor function
setMainTextColor();

setDetailTextColor()

toggleMenu();
