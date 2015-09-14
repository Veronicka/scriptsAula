function construtor() {

  var observer = {};
  var lista = [];
  cont = 0;

  observer.addObserver = function (obs) {
    lista.push(obs);
  };

  function gatilho() {
	cont++;
    for (var i = 0; i < lista.length; i++) {
      var funcao = lista[i];
      funcao();
    }
  }

  observer.gatilho = gatilho;
  return observer;

}

var obs = construtor();
var obs1 = function () {
  console.log("obs1");
  console.log(cont);
};
obs.addObserver(obs1);

var obs2 = function () {
  console.log("obs2");
  console.log(cont);
};
obs.addObserver(obs2);

obs.gatilho();
