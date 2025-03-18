function Pessoa(){
    var nome;
    this.setNome = function(Vnome){
        this.nome = Vnome;
    }
    this.getNome = function(){
        return this.nome;
    }
}