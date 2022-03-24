export class proyectsCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.proyects = this.getAttribute("proyects");
        this.arr = JSON.parse(this.proyects);
        this.countProyects = this.arr.length;

    }
    getTemplate() {
        const template = document.createElement("template");
        template.innerHTML = `
        <section class="card">
        <h2 class="card__title">Projects <span>(${this.countProyects})</span> </h2>
        <div class="card__tags">
            
        </div>
        </section>  
        ${this.getStyles()}      
        `;
        return template;
    }
    getStyles() {
        return `
        <style>
        :host{
            --bg-color: #fff;
            --color-primary: #4F4F4F;
            --color-active: #2F80ED;
            --font-family: 'Montserrat', sans-serif;
            --font-size-primary: 24px;
            --border-radius: 12px;
            --box-shadow: 0 0 20px rgba(51, 51, 51, 0.3);
        }
        .card{
            box-shadow: 0 0 20px rgba(51, 51, 51, 0.3);
            padding: 1.5rem;
            font-family: var(--font-family);
            border-radius: var(--border-radius);
            background-color: var(--bg-color);
        
        }
        .card__title{
            margin-top: 0;
            color: var(--color-primary);
            font-size: var(--font-size-primary);
            font-weight: 500;
        }
        .card__tag{
            border: 1px solid var(--color-primary) ;
            background-color: var(--bg-color);
            border-radius: var(--border-radius);
            color: var(--color-primary);
            padding: .4rem 1rem;
            margin-right: .5rem;
            font-size: 14px;
            cursor: pointer;
            transition: all .3s ease-in-out;
        }
        .card__tag:hover, .card__tag--active{
            background-color: var(--color-active);
            color: #fff;
            border: 1px solid var(--color-active);
        }
        </style>
        `;
    }
    render() {
        const clone = this.getTemplate().content.cloneNode(true);
        const $fragmentProyect = document.createDocumentFragment();
        const $button = document.createElement("button");
        $button.classList.add("card__tag");

        this.arr.forEach( proyect => {
            const cloneButton = $button.cloneNode(true);
            cloneButton.textContent = proyect;
            $fragmentProyect.appendChild(cloneButton);
        });

        clone.querySelector(".card__tags").appendChild($fragmentProyect);
        this.shadowRoot.appendChild(clone);

        const tags = this.shadowRoot.querySelectorAll(".card__tag");
        tags[tags.length - 1].classList.add("card__tag--active");

        this.shadowRoot.addEventListener("click", e => {
            tags.forEach(tag => {
                tag.classList.remove("card__tag--active");
            })

            if (e.target.matches(".card__tag")) {
                e.target.classList.add("card__tag--active");
            }
        });
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("proyects-card", proyectsCard);