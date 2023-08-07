let drop = document.getElementById("dropdown");
let img = document.getElementById('lesiure');
let desc = document.getElementById('desc');

drop.onchange = function(event){
    event.preventDefault();
    let option = drop.value;

    if(option == 'pokemon'){
        lesiure.src = "../images/vgc.png"
        desc.innerHTML = 'I follow the pokemon VGC doubles scene fairly regularly, as I love seeing different team compositions others come up with, especially the top players. I sometimes dabble in teambuilding myself, be it for the offical, 4 vs 4 doubles format, or fan operated 6 vs 6 singles'
    }

    if(option == 'sports'){
        lesiure.src = ""
        desc.innerHTML = 'I try to stay at least somewhat physically active day to day, which i do in the form of playing sports with my friends. I play most sports casually, but recently I have been dipping my toes in competitive swimming'
    }
}
