const here = document.getElementById('here');

//  ked sa presunie kurzor na text prefarbi sa na cervenu
here.addEventListener('mouseover', function handleMouseOver() {
    here.style.color = 'red';
});

//  ked kurzor presunieme prec z textu da sa s5 cierna farba
here.addEventListener('mouseout', function handleMouseOut() {
    here.style.color = 'black';
});
