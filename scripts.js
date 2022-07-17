function verTraducao(){
    var traducao=document.getElementById("traducao");
    var por=document.getElementById("por");
    var btnTraducao=document.getElementById("btnTraducao");

    if(traducao.style.display === "none" & por.style.display === "none"){
        traducao.style.display="inline"
        por.style.display="block"
    }else{
        traducao.style.display="none"
        por.style.display="none"
    }
}

function verResposta(){
    var resposta=document.getElementById("resposta");
    var res=document.getElementById("res");
    var btnResposta=document.getElementById("btnResposta");

    if(resposta.style.display === "none"){
        resposta.style.display="inline"
        res.style.display="block"
    }else{
        resposta.style.display="none"
        res.style.display="none"
    }
}

function verExplicacao(){
    var explicacao=document.getElementById("explicacao");
    var exp=document.getElementById("exp");
    var btnExplicacao=document.getElementById("btnExplicacao");

    if(explicacao.style.display === "none"){
        explicacao.style.display="inline"
        exp.style.display="block"
    }else{
        explicacao.style.display="none"
        exp.style.display="none"
    }
}