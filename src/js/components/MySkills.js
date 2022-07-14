//skills
const mySkills = document.querySelector('#my-skills');

//generate skills 
let mySkillsData = [

    {
        name: 'html',
        label: 'Html',
        value: '90%',
    },
    {
        name: 'css',
        label: 'Css + Scss',
        value: '90%',
    },
    {
        name: 'javascript',
        label: 'Javascript',
        value: '75%',
    },
    {
        name: 'php',
        label: 'Php + Laravel',
        value: '80%',
    },
    {
        name: 'gimp',
        label: 'Gimp',
        value: '90%',
    },
    {
        name: 'inkscape',
        label: 'Inkscape',
        value: '90%',
    },
    {
        name: 'blender',
        label: 'Blender 3D',
        value: '90%',
    },
    {
        name: 'godot',
        label: 'Godot Engine',
        value: '65%',
    },
];

//generate my skills
let GenerateMySkills = () => {

    return ( mySkills.innerHTML = mySkillsData

        .map( (x) => { 

            let {name, label, value} = x;

            return `
                
                <div class="progress-bar">
                    <p class="progress-title">${label}</p>
                    <div class="progress-container">
                        <p class="prog text">${value}</p>
                        <div class="progress">
                            <span class="${name}"></span>
                        </div>
                    </div>
                </div>

        `;}

    ).join(""));
}

GenerateMySkills();

export { GenerateMySkills };

