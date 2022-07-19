//How do can I be dry with this code? How can we make it singular and not repeated?
//This is for the buttons that expand when you mouseover them.

document.getElementById("parietalLobe").addEventListener("mouseover", mySixthFunction);
function mySixthFunction() {
    document.getElementById("parietalLobe").innerHTML
        = "<h3>The parietal lobes are responsible for processing somatosensory information from the body; this includes touch, pain, temperature, and the sense of limb position. Like the temporal lobes, the parietal lobes are also involved in integrating information from different modalities.... <h3>"
}
document.getElementById("temporalLobe").addEventListener("mouseover", myFifthFunction);
function myFifthFunction() {
    document.getElementById("temporalLobe").innerHTML
        = "<h3>The temporal lobes sit behind the ears and are the second largest lobe. They are most commonly associated with processing auditory information and with the encoding of memory.... <h3>"
}

document.getElementById("occipitalLobe").addEventListener("mouseover", myFourthFunction);
function myFourthFunction() {
    document.getElementById("occipitalLobe").innerHTML
        = "<h3>The occipital lobes sit at the back of the head and are responsible for visual perception, including colour, form and motion. Damage to the occipital lobe can include: Difficulty with locating objects in environment.... <h3>"
}

document.getElementById("spinalCord").addEventListener("mouseover", myThirdFunction);
function myThirdFunction() {
    document.getElementById("spinalCord").innerHTML
        = "<h3 id='afterMouseOver'>The spinal cord is a long, tube-like band of tissue. It connects your brain to your lower back. Your spinal cord carries nerve signals from your brain to your body and vice versa. These nerve signals help you feel sensations and move your body. .... <h3>"
}
document.getElementById("cerebellum").addEventListener("mouseover", mySecondFunction);
function mySecondFunction() {
    document.getElementById("cerebellum").innerHTML
        = "<h3>Maintenance of balance and posture. The cerebellum is important for making postural adjustments in order to maintain balance. Through its input from vestibular receptors and proprioceptors, it modulates commands to motor neurons to compensate for shifts in body position or changes in load upon muscles.... <h3>"
}
document.getElementById("frontalLobe").addEventListener("mouseover", myFirstFunction);
function myFirstFunction() {
    document.getElementById("frontalLobe").innerHTML
        = "<h3>Maintenance of balance and posture. The cerebellum is important for making postural adjustments in order to maintain balance. Through its input from vestibular receptors and proprioceptors, it modulates commands to motor neurons to compensate for shifts in body position or changes in load upon muscles.... <h3>"
}

//This is the canvas code.
var myName = "The Brain ";

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];
var letterColors = [red, orange, green, blue, purple];

drawName(myName, letterColors);

if (10 < 3) {
    bubbleShape = 'square';
}
else {
    bubbleShape = 'circle';
}
bounceBubbles();

//This code is the stuff that changes the background color.
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function changeColor() {
    let newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
}

//the "replace child" code 
function myFunction() {
    // Select first child element:
    const element = document.getElementById("myList").children[0];

    // Create a new text node:
    const newNode = document.createTextNode("The brain is 80 cubic inches - and is the wellspring of our life.");

    // Replace the text node:
    element.replaceChild(newNode, element.childNodes[0]);
}

