document.querySelector('.projectPageRight').addEventListener('mouseover', function () {
    document.querySelector('.projectPageLeft').style.opacity = '0';
});

document.querySelector('.projectPageRight').addEventListener('mouseout', function () {
    document.querySelector('.projectPageLeft').style.opacity = '1';
});

//Zet projectPageLeft opacity op 0 als je 
//over projectPageRight
//hovered en projectPageRight opacity op 1 als je
//er niet meer over heen hovered
