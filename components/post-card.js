export class postCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});

        this.img = this.getAttribute("img");
        this.title = this.getAttribute("title");
        this.sumary = this.getAttribute("sumary");
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
        <article class="post">
            <figure class="post__picture">
                <img src=${this.img} class="post__img">
            </figure>
            <h2 class="post__title">${this.title}</h2>
            <p class="post__sumary">
            ${this.sumary}
            </p>
            <a href="#" class="post__link">dev.to</a>
            <a  href="#" class="post__tag">Blog</a>
        </article>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
        :host{
            --bg-color: #fff;
            --color-primary: #4F4F4F;
            --color-secondary: #828282;
            --color-link: #2F80ED;
            --font-family: 'Montserrat', sans-serif;
            --font-size-primary: 24px;
            --font-size-secondary: 16px;
            --border-radius: 12px;
            --box-shadow: 0 0 20px rgba(51, 51, 51, 0.3);
        }
        .post {
            box-shadow: var(--box-shadow);
            padding: 1.5rem;
            border-radius: var(--border-radius);
            position: relative;
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            background-color: var(--bg-color);
            font-family: var(--font-family);
        }
        .post__picture{
            margin: 0;
            width: 50%;
            flex-grow: 1;
            order: 1;
        }
        .post__img{
            width: 100%;
            height: 250px;
            display: block;
            object-fit: cover;
            border-radius: var(--border-radius);
        }
        .post__title{
            font-size: var(--font-size-primary);
            color: var(--color-primary);
            font-weight: 500;
            margin: 0;
            width: 40%;
            padding-top: 2.5rem
        }
        .post__sumary{
            color: var(--color-secondary);
            line-height: 22px;
            display: flex;
            flex-direction: column;
            margin-top: .5rem;
            margin-bottom: 0;
            font-size: var(--font-size-secondary);
            order: 3;
        }
        .post__link{
            color: var(--color-link);
            display: inline-block;
           margin-top: auto;
            text-decoration: none;
            order: 4;
        }
        .post__tag{
            position: absolute;
            top: 1.5rem;
            left: 1.5rem;
            color: var(--color-secondary);
            display: inline-block;
            background-color: var(--bg-color);
            padding: .2rem .3rem;
            padding-left: 0;
            font-size: 14px;
            border-radius: calc(var(--border-radius) - 8px);
            text-decoration: none;
        }
        .post__tag:hover{
            color: var(--color-link);
            text-decoration: underline;
        }
              
        </style>
        `;

    }
    render(){
        let clone = this.getTemplate().content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
    }
    connectedCallback(){
        this.render();
    }
}
customElements.define("post-card", postCard);