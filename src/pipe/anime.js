const animation_letter = (bool,text) => {

    const presentationElement = document.querySelector('.presentation');
    presentationElement.textContent = ''; // Clear the content before starting the typing effect
    if (!presentation.value) return;
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < text.length) {
            presentationElement.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
            // Animate the text with GSAP after typing is complete
            
        }
    }, 70); // Ajustez la vitesse de frappe ici

}

export default animation_letter