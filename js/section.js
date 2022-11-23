function section(texteH1, texteP){
    const mySection = document.createElement('section');
    mySection.appendChild(h1(texteH1));
    mySection.appendChild(p(texteP));
    return mySection;
}