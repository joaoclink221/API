export  function validarNovoCanal(canal){
    if(!canal.nome){
    throw new Error("nome do filme é obrigatório");
}
    if(!canal.numero){
        throw new Error("é obrigatório informar o número do canal");
}
    if(isNaN(canal.numero)){
        throw new Error("número do canal inválido");
}
    if(canal.aberto == undefined){
        throw new Error("é obrigatório informar se o canal ainda está aberto");
}
    
}