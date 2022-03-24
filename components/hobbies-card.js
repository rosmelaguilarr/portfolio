export class hobbiesCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});

        this.hobbies = this.getAttribute("hobbies");
        this.arrObj = this.hobbies.split("**");
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
        <section class="card">
            <h2 class="card__title">Hobbies</h2>
            <div class="card__hobbies">
                
            </div>
        </section>
        <template class="hobbie">
            <article class="card__item">
                <figure class="card__picture">
                    <img src="img/cooking.jpg" class="card__img">
                </figure>
                <div class="card__body">
                    <h5 class="card__subtitle">Cooking</h5>
                    <p class="card__description">
                        Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                </div>
            </article> 
        </template> 
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
            --color-secondary: #333;
            --font-family: 'Montserrat', sans-serif;
            --font-size-primary: 24px;
            --font-size-secondary: 16px;
            --border-radius: 12px;
            --box-shadow: 0 0 20px rgba(51, 51, 51, 0.3);
        }
        .card {
            font-family: var(--font-family);
            box-shadow: var(--box-shadow);
            border-radius: var(--border-radius);
            background-color: var(--bg-color);
            color: var(--color-primary);
            padding: 1.5rem;
        }
        .card__title{
            margin-top: 0;
            font-size: var(--font-size-primary);
            font-weight: 500;
        }
        .card__hobbies{
            display: flex;
            gap: 1.8rem;
            justify-content: space-evenly;
            flex-wrap: wrap;
        }
        .card__item{
            width: 100%;
            /*max-width: 300px;*/
        }
        .card__subtitle{
            font-weight: 600;
            font-size: var(--font-size-secondary);
            margin-top: 1rem;
            margin-bottom: .5rem;
            color: var(--color-secondary);
        }
        .card__description{
            margin-top: 0;
            margin-bottom: 0;
        }
        .card__picture{
            margin: 0;
        }
        .card__img{
            width: 100%;
            max-height: 150px;
            display: block;
            object-fit: cover;
            border-radius: var(--border-radius);
        }
        </style>
        `;
    }
    render(){
        const $fragmentHobbie = document.createDocumentFragment();
        let clone = this.getTemplate().content.cloneNode(true);
        const $templateHobbie = clone.querySelector(".hobbie").content;

        this.arrObj.forEach(obj => {
            let cloneHobbie = $templateHobbie.cloneNode(true);
            cloneHobbie.querySelector(".card__img").setAttribute("src",JSON.parse(obj).img);
            cloneHobbie.querySelector(".card__subtitle").textContent = JSON.parse(obj).hobbie;
            
            $fragmentHobbie.appendChild(cloneHobbie);
        });
        clone.querySelector(".card__hobbies").appendChild($fragmentHobbie);
        this.shadowRoot.appendChild(clone);
    }
    connectedCallback(){
        this.render();
    }
}
customElements.define("hobbies-card", hobbiesCard);
