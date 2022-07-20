
const header         = document.querySelector('.header');

const aboutItems     = document.querySelector('#about-items');

const  leftAbout = document.querySelector('.left-about');

const timelineItems  = document.querySelector('#timeline-items');

/*-------------- Function ----------------*/

//About

let LeftAbout = () => {

    return leftAbout.innerHTML = `

        <h4>Thông tin về tôi</h4>
        <!-- about descript -->
        <p>
            Amet adipisicing aliquid placeat voluptatum consequatur 
            Fuga quas natus tenetur delectus quisquam 
            Quos reiciendis debitis fugiat nisi fuga! Vero ab
            Ipsum expedita sunt maxime iusto nemo! 
            Ea dignissimos corrupti ut accusamus illo. 
            Earum impedit dolores corrupti debitis eaque 
            Vero nisi id nisi expedita cupiditate
            Perspiciatis aliquid aut dolorum est minus
        </p>
        <!-- button -->
        <a class="left-about-btn-container" href="#">
            <div class="btn-hover-left-slide-outline">
                <span class="btn-label mr-3px"> Download cv </span>
                <span class="btn-icon material-icons-outlined">download</span>
            </div>
        </a>
        
    `;
}

LeftAbout();


let aboutItemsData = [
    {
        complete: '120+',
        projectTypeLabel: 'Dự án thiết kế nội thất',
    },
    {
        complete: '50+',
        projectTypeLabel: 'Thiết kế nhân vật 3D',
    },
    {
        complete: '10+',
        projectTypeLabel: 'Dự án web',
    },
    {
        complete: '25+',
        projectTypeLabel: 'Sản phẩm về đồ họa',
    },
];

let GenerateAboutItems = () => {

    return ( aboutItems.innerHTML = aboutItemsData

        .map( (x) => {

            let { complete, projectTypeLabel } = x;

            return `

                <div class="right-about-item">
                    <div class="right-about-text">
                        <p class="large-text">${complete}</p>
                        <!-- about descript -->
                        <p class="small-text"> ${projectTypeLabel} </p>
                    </div>
                </div>

            `;

        }

    ).join("") );
}

GenerateAboutItems();

//generate timeline items

let timelineItemsData = [
    {
        duration: '2009 - 2012',
        work: 'Thiết kế đồ họa',
        company: 'Thế giới cong',
        description: 'Elit error pariatur neque repellat numquam ducimus? Amet quia voluptatum commodi modi earum.',
    },
    {
        duration: '2012 - Đến nay',
        work: 'Web developer',
        company: 'Thế giới web',
        description: 'Elit error pariatur neque repellat numquam ducimus? Amet quia voluptatum commodi modi earum.',
    },
];

let GenerateTimelineItems = () => {
    return ( timelineItems.innerHTML =  timelineItemsData
        .map( (x) => {
            let { duration, work, company, description } = x;

            return `

                <div class="timeline-item">
                    <div class="tl-icon">
                        <span class="material-icons-outlined"> workspace_premium </span>
                    </div>
                    <p class="tl-duration">${duration}</p>
                    <h5>${work}<span> - ${company}</span></h5>
                    <p class="description">${description}</p>
                </div>

            `;
        }).join("") );
};

GenerateTimelineItems();


//export 
export { LeftAbout, GenerateAboutItems, GenerateTimelineItems };

