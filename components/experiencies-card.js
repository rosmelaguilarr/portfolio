export class experienciesCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});

        this.experiencies = this.getAttribute("experiencies");
        this.arrObj = this.experiencies.split("**");
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
        <section class="card">
            <h2 class="card__title">Experiences</h2>
            <div class="card__experiencies">
                
            </div>
        </section>
          <template class="experiencie">
            <article class="card__item">
                <picture class="card__picture">
                    <img src="img/adidas.svg" class="card__img">
                </picture>
                <div class="card__body">
                    <span class="card__date">Feb 2017 - Current</span>
                    <h3 class="card__subtitle">Front-end developer</h3>
                    <p class="card__sumary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iste similique libero veniam deleniti, qui neque eos ipsa animi unde?</p>
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
            --color-secondary: #828282;
            --font-family: 'Montserrat', sans-serif;
            --font-size-primary: 24px;
            --font-size-secondary: 16px;
            --border-radius: 12px;
            --box-shadow: 0 0 20px rgba(51, 51, 51, 0.3);
        }
        .card {
            background-color: var(--bg-color);
            font-family: var(--font-family);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            padding: 1.5rem;
        }
        .card__experiencies{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 2rem;
            margin-top: 2rem;
        }
        .card__item{
            display: flex;
            /*max-width: 48%;*/
        }
        .card__picture{
            margin: 0;
            max-width: 100px;
        }
        .card__img{
            width: 100%;
            display: block;
        }
        .card__title{
            font-size: 24px;
            color: var(--color-primary);
            font-weight: 500;
            margin-top: 0;
        }
        .card__subtitle{
            font-size: 16px;
            font-weight: 600;
            color: #333;
            margin-top: .5rem;
        }
        .card__date{
            font-size: 14px;	
        }
        .card__body{
            color: var(--color-secondary);
            padding-left: 2rem;
        }
        .card__item:last-child p{
            margin-bottom: 0;
        }
        
        @media screen and (max-width: 768px){
            /*.card__experiencies{
                flex-wrap: wrap;
                gap: 1rem;
                color: red;
            }
            .card__item{
                max-width: 100%;
            }*/
        }
        
        </style>
        `;
    }
    render(){
        const $fragmentExperiencie = document.createDocumentFragment();
        let clone = this.getTemplate().content.cloneNode(true);
        const $templateExperiencie = clone.querySelector(".experiencie").content;

        this.arrObj.forEach(obj => {
            let cloneExperiencie = $templateExperiencie.cloneNode(true);
            
            cloneExperiencie.querySelector(".card__img").setAttribute("src",JSON.parse(obj).logo);
            cloneExperiencie.querySelector(".card__date").textContent = JSON.parse(obj).date;
            cloneExperiencie.querySelector(".card__subtitle").textContent = JSON.parse(obj).title;
            
            $fragmentExperiencie.appendChild(cloneExperiencie);
        });
        clone.querySelector(".card__experiencies").appendChild($fragmentExperiencie);
        this.shadowRoot.appendChild(clone);
    }
    connectedCallback(){
        this.render();
    }
}
customElements.define("experiencies-card", experienciesCard);