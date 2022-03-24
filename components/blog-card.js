export class blogCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});

        this.img = this.getAttribute("img");
        this.title = this.getAttribute("title");
        this.sumary = this.getAttribute("sumary");
        this.demo = this.getAttribute("demo");
        this.code = this.getAttribute("code");
    }
    getTemplate(){
        const template = document.createElement("template");
        template.innerHTML = `
        <article class="card">
           <figure class="card__picture">
               <img src=${this.img} alt="" class="card__img">
           </figure>
           <div class="card__text">
               <div class="card__tags">
                   <span>#HTML</span>
                   <span>#CSS</span>
                   <span>#responsive</span>
               </div>
               <h2 class="card__title">${this.title}</h2>
               <p class="card__sumary">
                ${this.sumary}
               </p>
           </div>
           <div class="card__buttons">
               <a href=${this.demo} target="_blank">Demo</a>
               <a href=${this.code} target="_blank">Code</a>
           </div>
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
            --color-active: #2F80ED;
            --font-family: 'Montserrat', sans-serif;
            --font-size-primary: 24px;
            --border-radius: 12px;
            --box-shadow: 0 0 20px rgba(51, 51, 51, 0.3);
        }
        .card{
            font-family: var(--font-family);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            padding: 1.5rem;
            max-width: 300px;
            background: var(--bg-color);
        }
        
        .card__picture{
            margin: 0;
            margin-bottom: 1.3rem;
            
        }
        .card__img{
            width: 100%;
            height: 200px;
            display: block;
            object-fit: cover;
            box-shadow: 0 0 1px #333;
            border-radius: var(--border-radius);
        }
        .card__tags{
            color: var(--color-primary);
        }
        .card__tags span {
            margin-right: 0.5rem;
        }
        .card__title{
            font-size: 24px;
            font-weight: 500;
            color: #333;
        }
        .card__sumary{
            color: var(--color-secondary);
            line-height: 21px
        }
        .card__buttons{
            margin-top: 2.5rem;
        }
        .card__buttons a{
            border: 1px solid var(--color-active);
            background-color: #fff;
            border-radius: var(--border-radius);
            color: var(--color-active);
            width: 100px;
            text-align: center;
            padding: .6rem 0;
            font-size: 1rem;
            margin-right: .5rem;
            margin-top: .5rem;
            text-decoration: none;
            cursor: pointer;
            display: inline-block;
            transition: all .3s ease-in-out;
        }
        .card__buttons a:hover, a.button-active {
            background-color: var(--color-active);
            color: #fff;
        }
        @media screen and (max-width: 768px){
            .card{
                max-width: initial;
            }

        }




        </style>

        `;
    }
    render(){
        const clone = this.getTemplate().content.cloneNode(true);
        clone.querySelectorAll(".card__buttons a")[0].classList.add("button-active");

        this.shadowRoot.appendChild(clone);
    }
    connectedCallback(){
        this.render();
    }
}
customElements.define("blog-card", blogCard);