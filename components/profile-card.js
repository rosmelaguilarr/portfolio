export class profileCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.img = this.getAttribute("img");
        this.name = this.getAttribute("name");
        this.career = this.getAttribute("career");
        this.email = this.getAttribute("email");
        this.phone = this.getAttribute("phone");
        this.sumary = this.getAttribute("sumary");
    }
    getTemplate() {
        const $template = document.createElement("template");
        $template.innerHTML = `
        <article class="card">
            <figure class="card__picture">
                <img src=${this.img} alt="Profile" class="card__img">
            </figure>
            <div class="card__body">
                <div class="card__name">
                    <h2>${this.name}</h2>
                    <span>${this.career}</span>
                </div>
                <div class="card__contact">
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/></svg>
                        <span>${this.email}</span>
                    </p>
                    <p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                        <span>${this.phone}</span>
                    </p>
                </div>
                <div class="card__sumary">
                    <p>${this.sumary}</p>
                </div>
            </div>
        </article>   
        ${this.getStyles()}
        `;
        return $template;
    }
    getStyles() {
        return `
        <style>
        :host{
            --bg-color: #fff;
            --color-primary: #4F4F4F;
            --color-secondary: #828282;
            --font-family: 'Montserrat', sans-serif;
            --font-size-primary: 24px;
            --font-size-secondary: 16px;
            --border-radius: 12px;
            --box-shadow: 0 0 30px rgba(51, 51, 51, 0.2);
        }
        svg{
            fill: var(--color-primary);
        }
        .card{
            display: flex;
            justify-content: space-between;
            box-shadow: var(--box-shadow);
            padding: 1.3rem;
            border-radius: var(--border-radius);
            font-family: var(--font-family);
            gap: 1.5rem;
            background-color: var(--bg-color);
        }
        .card__picture{
            max-width: 200px;
            min-width: 200px;
            margin: 0;
        }
        .card__img{
            width: 100%;
            display: block;
            object-fit: cover;
            border-radius: var(--border-radius);
        }
        .card__body{
            display: flex;
            flex-wrap: wrap;
            color: var(--color-secondary);
            gap: 1.5rem;
        }
        .card__name{
            flex-grow: 1;
        }
        .card__name h2 {
            margin-top: 0;
            margin-bottom: 0.5rem;
            color: var(--color-primary);
            font-size: var(--font-size-primary);
            font-weight: 600;
        }
        .card__name span {
            font-size: var(--font-size-secondary);
        }
        .card__contact p{
            margin: 0;
            color: var(--color-primary);
            display: flex;
            align-items: center;
            gap: .5rem;
            font-size: var(--font-size-secondary);
        }
        .card__contact p:first-of-type{
            margin-bottom: .2rem;
        }
        .card__sumary{
            font-size: var(--font-size-secondary);
        }
        @media screen and (max-width: 576px){
            .card{
                flex-direction: column;
            }
            .card__picture{
                align-self: center;
            }
        
        }
        </style>
        `;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("profile-card", profileCard);

