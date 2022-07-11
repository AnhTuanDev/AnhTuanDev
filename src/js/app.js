const sections = document.querySelectorAll('.section');
//const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

let PageTransitions = () => {

    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            //tim btn dang chua class activ-btn va xoa
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '');
            //add class active-btn vao btn vua click
            this.className += ' active-btn';
        });
    }

    //sections active class
    allSections.addEventListener('click', (e) => {

        const id = e.target.dataset.id;

        if(id) {

            /*
            sectBtns.forEach((btn) => {
                btn.classList.remove('active');
            });

            e.target.classList.add('active-btn');

            //hidden other sections === remove active class
            sections.forEach((section) => {
                section.classList.remove('active');
            });
            */

            sections.forEach((sect) => {
                sect.classList.remove('active');
            });
            //show btn active click === add active class
            const pa = document.getElementById(id);

            pa.classList.add('active');
        }

    });


}

PageTransitions();





