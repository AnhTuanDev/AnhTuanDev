
export class PageTitle extends HTMLElement {

    data =  {
        title: '',
        subTitle: '',
        bgText: '',
    };

    constructor() {

        super();

        this.attachShadow({mode: 'open'});

    }

    static get observedAttributes() {
        return [ 'title', 'subtitle', 'bgtext', 'classes' ];
    }

    attributeChangedCallback(name, oldValue, newValue) {

        let title = this.getAttribute('title');
        let subTitle = this.getAttribute('subtitle');
        let bgText = this.getAttribute('bgtext');

        this.data.title = title;
        this.data.subTitle = subTitle;
        this.data.bgText = bgText;

        this.render();
    }


    render() {

        this.shadowRoot.innerHTML = this.template;

    }

    get template() {
        return `
            ${this.style}
            <div class="page-title-container">
                <h2 class="page-title">${this.data.title}
                    <span class="span-text sub-page-title">${this.data.subTitle}</span>
                    <span class="page-bg-text">${this.data.bgText}</span>
                </h2>
                <slot name="test"></slot>
            </div>
        `
    }

    get style() {
        return `
            <style>
                
                .page-title-container {
                    text-align: center;
                    padding: 0.5rem 0;
                    margin-bottom: 3rem;
                }
                
                .page-title-container .page-title {
                    position: relative;
                    text-transform: uppercase;
                    font-size: 3rem; font-weight: 700;
                    span { color: var(--color-primary); }
                }

                .page-title-container .page-title .page-bg-text {
                    z-index: -1;
                    position: absolute;
                    top: 50%; left: 50%;
                    color: var(--color-base-100) !important;
                    transition: all 0.3s ease-in-out;
                    transform: translate(-50%, -50%);
                    font-weight: 800; font-size: 6.3rem;
                }

            </style>
        `;
    }

}

customElements.define('page-title', PageTitle);

