
export class PostItem extends HTMLElement {

    data = {

        postImg: '',

        postTitle: '',

        postContent: '',
    }

    constructor() {

        super();

        this.attachShadow({mode: "open"});

    }

    static get observedAttributes() {


        return [ 'img', 'posttitle', 'content' ];

    }

    attributeChangedCallback(name, oldValue, newValue) {
        let img = this.getAttribute('postimg');

        let title = this.getAttribute('posttitle');

        let content = this.getAttribute('content');

        this.data.postImg = img;

        this.data.postTitle = title;

        this.data.postContent = content;

        this.render();

    }

    render() {

        this.shadowRoot.innerHTML = this.template;

    }

    get template() {

        return `

            ${this.style}

            <div class="blog">

                <img class="post-image" src="${ this.data.postImg }" alt="">

                <div class="blog-text">

                    <h4 class="post-title">${ this.data.postTitle }</h4>

                    <p class="post-content">
                        Amet vero eligendi autem tenetur maiores debitis? Blanditiis magni unde
                        <br />
                        Amet dolor beatae sit commodi aliquam similique? Beatae amet eligendi.
                        <br />
                        Amet minima dolores perferendis saepe eos. Quia voluptatem laboriosam.
                        <br />
                        Adipisicing libero iure adipisicing quasi.
                        <br />
                    </p>

                </div>
            </div>
        `;
    }

    get style() {
        return `
            <style>

                .blogs .blog {
                    grid-column: span 1;
                    position: relative;
                    border-radius: 15px;
                    box-shadow: var(--box-shadow-2);
                }
                .blogs .blog .post-img {
                }
                .blogs .blog .post-text {
                }
                .blogs .blog .post-text .post-title {
                }
                .blogs .blog .post-text .post-content {
                }

            </style>
        `;
    }

}

customElements.define('post-item', PostItem);


