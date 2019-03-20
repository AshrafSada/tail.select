/*
 |  tail.select - Another solution to make select fields beautiful again!
 |  @file       ./langs/tail.select-pt_BR.js
 |  @author     SamBrishes <sam@pytes.net>
 |  @version    0.5.7 - Beta
 |
 |  @website    https://github.com/pytesNET/tail.select
 |  @license    X11 / MIT License
 |  @copyright  Copyright © 2014 - 2019 SamBrishes, pytesNET <info@pytes.net>
 */
;(function(factory){
   if(typeof(define) == "function" && define.amd){
       define(function(){
           return function(select){ factory(select); };
       });
   } else {
       if(typeof(window.tail) != "undefined" && window.tail.select){
           factory(window.tail.select);
       }
   }
}(function(select){
    select.strings.register("pt_BR", {
        all: "Todas",
        none: "Nenhuma",
        actionAll: "Selecionar todas",
        actionNone: "Desmarcar todas",
        empty: "Nenhuma opção disponível",
        emptySearch: "Nenhuma opção encontrada",
        limit: "Não é possível selecionar outra opção",
        placeholder: "Escolha uma opção ...",
        placeholderMulti: "Escolha até: :limit opção(ões) ...",
        search: "Buscar ...",
        disabled: "Campo desativado"
    });
    return select;
}));
