/**
 * Created by Veronica on 20/08/2015.
 */

var gatilho = function gatilho(){
    console.log('A');
};

function gatilho2(funcao){
    console.log('B');

    function gatilho3(){
        console.log('C');
        funcao();

    }
    return gatilho3;
}

g=gatilho;
g();
gatilho2(g);

gatilho2(function(){
    console.log('Anonimo');
});

var jExterna = gatilho2(g);
jExterna();