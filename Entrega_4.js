function Animal(){
}

var animalPrototipo={
    fazerBarulho : function(){
        throw 'Deve ser implementado';
    }
}

Animal.prototype = animalPrototipo;

function Cao(){

}

var caoPrototipo={
    fazerBarulho : function(){
        return 'Au au';
    }
}

caoPrototipo.prototype = Animal.prototype;
Cao.prototype = caoPrototipo;

function Gato(){

}

var gatoPrototipo={
    fazerBarulho : function(){
        return 'miau';
    }
}

gatoPrototipo.prototype = Animal.prototype;
Gato.prototype = gatoPrototipo;

function Manada(){
    this.listaAnimais = [];
}
var manadaPrototipo = {
    adicionarAnimal: function(Animal){
        this.listaAnimais.push(Animal);
    }
}

function manadaVirgula(){

}
var manadaVirgulaPrototipo = {
    imprimirSons : function(animais){
        for(i=0; i<animais.length; i++){
            return animais[i] + ", ";
        }
    }
}
var manadaRestaguePrototipo = {
    imprimirSons :  function(animais){
        for(i=0; i<animais.length; i++){
            return animais[i] + "#";
        }
    }
}


Manada.prototype = manadaPrototipo;
var dog = new Cao();
var cat = new Gato();

var mana = new Manada();
mana.adicionarAnimal(dog);
mana.adicionarAnimal(cat);

console.log(m.listaAnimais[0].fazerBarulho());
