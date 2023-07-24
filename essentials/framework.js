import DOM from './DOM.js';
let {element, setAttribute} = DOM;
 class Element{
    constructor(elementName, innerHtml, attributeList, parentElement){
        this.elementName = elementName;
        this.innerHtml = innerHtml;
        this.attributeList = attributeList;
        this.parentElement = parentElement;
    }
    use(){
        let alement = document.createElement(this.elementName);
        let innerText = document.createTextNode(this.innerHtml);
        let attributes = this.attributeList;
        attributes.forEach((attr) => {
            setAttribute(
                alement,
                Object.keys(attr)[0],
                Object.values(attr)[0])
        });
        alement.appendChild(innerText);
        let par = element(this.parentElement);
        par.appendChild(alement);
        return alement;
    };
};
export default Element;