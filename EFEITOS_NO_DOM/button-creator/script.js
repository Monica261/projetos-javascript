const controles = document.getElementById('controles');
const cssText = document.querySelector('.css');
const btn = document.querySelector('.btn');

const handleStyle = {
    element: btn,
    backgroundColor(value){
        this.element.style.backgroundColor = value;
    },
    color(value){
        this.element.style.color = value;
    },
    height(value){
        this.element.style.height = value + 'px';
    },
    width(value){
        this.element.style.width = value + 'px';
    },
    border(value){
        this.element.style.border = value;
    },
    borderRadius(value){
        this.element.style.borderRadius = value + 'px';
    },
    texto(value){
        this.element.style.innerText = value;
    },
    fontFamily(value){
        this.element.style.fontFamily = value;
    },
    fontSize(value){
        this.element.style.fontSize = value + 'rem';
    },
    textTransform(value){
        this.element.style.textTransform = value;
    },
    fontWeight(value){
        this.element.style.fontWeight = value;
    }
}

function handleChange(event){
    const name = event.target.name;//pega o nome do campo
    const value = event.target.value;//pega o valor do campo

    handleStyle[name](value);//ativando a minha função
    showCSS();//ativando a minha function
}

function showCSS(){
    cssText.innerHTML = '<span>' + btn.style.cssText.split('; ').join(';</span><span>');
}

//Salvar o estilo do btn no localStorage:
function saveValue(name, value){
    localStorage(name)= value;
}

controles.addEventListener('change', handleChange);