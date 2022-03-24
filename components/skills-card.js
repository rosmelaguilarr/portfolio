export class skillsCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        this.skills = this.getAttribute("skills");
        this.arrObj = this.skills.split("/");
    }
    getTemplate() {
        
        const $template = document.createElement("template");
        $template.innerHTML = `
        <section class="card">
            <h2 class="card__title">Front End</h2>
            <div class="card__skills">
                
            </div>
        </section>
        <template class="skill">
            <div class="card__item">
                <span>React native</span>
                <input type="range" value="20">
            </div>
        </template>
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
            --font-family: 'Montserrat', sans-serif;
            --font-size-primary: 18px;
            --font-size-secondary: 16px;
            --border-radius: 12px;
            --box-shadow: 0 0 20px rgba(51, 51, 51, 0.3);
        }
        .card{
            box-shadow: var(--box-shadow);
            border-radius: var(--border-radius);
            padding: 1.5rem;
            background-color: var(--bg-color);
        }
        .card__title{
            color: var(--color-primary);
            text-transform: uppercase;
            font-size: var(--font-size-primary);
            margin-top: 0;
            font-weight: 700;
        }
        .card__skills{
            color: var(--color-primary);
            font-size: var(--font-size-secondary);
            display: flex;
            flex-direction: column;
            gap: .5rem;
        }
        .card__item{
            display: flex;
            gap: 1rem;
            justify-content: space-between;
        }
        .card__item span {
            min-width: 120px;
        }
        .card__item input{
            flex-grow: 1;
            cursor: pointer;
        }
        </style>
        `;
    }
    render() {
        const $fragmentSkill = document.createDocumentFragment();
        let clone =this.getTemplate().content.cloneNode(true);
        const $templateSkill = clone.querySelector(".skill").content;
        
        this.arrObj.forEach(obj => {
            let cloneSkill = $templateSkill.cloneNode(true);
            cloneSkill.querySelector("span").textContent = JSON.parse(obj).skill;
            cloneSkill.querySelector("input").value = JSON.parse(obj).value;
            
            $fragmentSkill.appendChild(cloneSkill);
        });
        clone.querySelector(".card__skills").appendChild($fragmentSkill);
        this.shadowRoot.appendChild(clone);
    }
    connectedCallback() {
        this.render();
    }
}
customElements.define("skills-card", skillsCard);
