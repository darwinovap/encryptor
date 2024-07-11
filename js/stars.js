function stars(){
    const count = 900;
    const section = document.querySelector('section')
    let i =  0;

    while (i < count){
        const star = document.createElement('i');
        const x = Math.floor(Math.random() * 5000);
        const y = Math.floor(Math.random() * 1000);

        const size = Math.random() * 2;

        star.style.left = x + "px";
        star.style.top = y + "px";
        star.style.width =  0.5 + size+ "px";
        star.style.height =  0.5 + size+ "px";

        const duration = Math.random() * 2;
        star.style.animationDuration = 2 + duration + "s";

        section.appendChild(star)

        i++ 
    }
}

stars();