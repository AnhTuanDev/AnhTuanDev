//portfolio item
export class PortfolioItem extends HTMLElement {

    data = {

        img: '',

    }

    constructor() {

        super();

        this.attachShadow({mode: "open"});

    }

    static get observedAttributes() {

        return [ 'img' ];

    }

    attributeChangedCallback(name, oldValue, newValue) {

        let img = this.getAttribute('img');

        this.data.img = img;

        this.render();
    }

    render() {

        this.shadowRoot.innerHTML = this.template;

    }

    get template() {

        return `
            ${this.style}
            <div class="portfolio-item">
                <div class="image"><img src="${this.data.img}" alt=""></div>
                <div class="hover-item">
                    <h3>Project sourse</h3>
                    <div class="icons">
                        <slot>
                        </slot>
                    </div>
                </div>
            </div>
        `;
    }

    get style() {
        return `
            <style>

                .portfolio-text {
                    padding: 2rem 0;
                    text-align: center;
                }
                .portfolio-item:hover .hover-item {
                    transition: all 0.4s ease-in-out;
                    background-color: rgba(31, 107, 92, 0.85) !important;
                    transform: scale(1) !important;
                }
                .portfolio-item {
                    grid-column: span 1;
                    position: relative;
                    border-radius: 15px;
                    box-shadow: var(--box-shadow-2);
                }
                .portfolio-item .image {
                    width: 100%;
                    height: 300px;
                    border-radius: 6px;
                    overflow: hidden;
                }
                .portfolio-item .image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                    border-radius: 6px;
                }
                .portfolio-item .hover-item {
                    top: 0;
                    left:  0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    border-radius: 6px;
                    background-color: rgba(31, 107, 92, 0);
                    transition: all 0.4s ease-in-out;
                    //opacity: 0;
                    transform: scale(0);
                }
                .portfolio-item .hover-item h3 {
                    color: var(--color-gray-300);
                    font-size: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .portfolio-item .hover-item .icons {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                }

            </style>
        `;
    }


}


customElements.define('portfolio-item', PortfolioItem);

