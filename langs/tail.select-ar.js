/*
 |  tail.select - The vanilla solution to make your HTML select fields AWESOME!
 |  @file       ./langs/tail.select-ar.js
 |  @author     SamBrishes <sam@pytes.net>
 |  @version    0.5.16 - Beta
 |
 |  @website    https://github.com/pytesNET/tail.select
 |  @license    X11 / MIT License
 |  @copyright  Copyright © 2014 - 2019 SamBrishes, pytesNET <info@pytes.net>
 */
/*
 |  Translator:     Ashraf Sada https://github.com/AshrafSada
 |  GitHub:         https://github.com/pytesNET/tail.select/pull/35
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
     select.strings.register("ar", {
         all: "كل الاختيارات",
         none: "لا يوجد اختيار",
         empty: "القائمة فارغة",
         emptySearch: "البحث فارغ",
         limit: "حد النتائج",
         placeholder: "الرجاء الاختيار ...",
         placeholderMulti: "...الرجاء الاختيار: اخيارات متعددة",
         search: "ابحث عن ...",
         disabled: "غير مفعل"
     });
     return select;
 }));
 