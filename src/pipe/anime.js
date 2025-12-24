const animation_letter = (text) => {

    const presentationElement = document.querySelector('.presentation');
    presentationElement.textContent = ''; // Clear the content before starting the typing effect

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