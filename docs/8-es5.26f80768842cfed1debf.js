function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{iydT:function(n,t,e){"use strict";e.r(t),e.d(t,"HomeModule",(function(){return N}));var o=e("ofXK"),c=e("tyNb"),a=[{key:"responsive",icon:"responsive-light.svg",title:"Responsive",description:"Los dise\xf1os que realizo son completamente responsive, adaptados a los \xfaltimos est\xe1ndares de medida de los diferentes dispositivos existentes hoy d\xeda."},{key:"modular",icon:"module-light.svg",title:"Modular",description:"Cada aplicaci\xf3n dise\xf1ada ser\xe1 modular, con lo cual, cada parte ser\xe1 reutilizable, tanto los m\xf3dulos como sus respectivos componentes."},{key:"planning",icon:"strategy-light.svg",title:"Planificaci\xf3n",description:"Soy consciente de que una planificaci\xf3n exhaustiva es el propulsor de cualquier proyecto exitoso, por lo tanto siempre planifico hasta el m\xe1s m\xednimo detalle en los proyectos en los que participo."}],i=e("quSY"),l=e("fXoL"),r=e("5RWN"),s=e("R0Ic"),f=Object(s.m)("fadeInOut",[Object(s.l)(":enter",[Object(s.k)({opacity:.1}),Object(s.e)("0.5s ease-in")]),Object(s.l)(":leave",[Object(s.e)("0.5s ease-out",Object(s.k)({opacity:0}))])]);Object(s.m)("EnterLeave",[Object(s.l)(":enter",[Object(s.k)({transform:"translateX(100%)"}),Object(s.e)("0.5s ease-in")]),Object(s.l)(":leave",[Object(s.e)("0.5s ease-out",Object(s.k)({transform:"translateX(100%)"}))])]),Object(s.m)("slideInOut",[Object(s.j)("in",Object(s.k)({overflow:"hidden",height:"0px"})),Object(s.j)("out",Object(s.k)({overflow:"hidden",height:"*"})),Object(s.l)("in => out",Object(s.e)("400ms ease-in-out")),Object(s.l)("out => in",Object(s.e)("400ms ease-in-out"))]);var g=e("XNiG"),u=e("xgIS"),d=e("Kj3r"),b=e("/uUt"),_=e("NFeN"),m=e("kmnG"),p=e("sYmb");function h(n,t){if(1&n){var e=l.Vb();l.Ub(0,"div",7),l.Ub(1,"div",8),l.Ac(2),l.hc(3,"translate"),l.Tb(),l.Ub(4,"div",9),l.Ac(5),l.hc(6,"translate"),l.Tb(),l.Ub(7,"div",10),l.Ac(8),l.hc(9,"translate"),l.Tb(),l.Ub(10,"div",11),l.Ac(11),l.hc(12,"translate"),l.Tb(),l.Ub(13,"div",12),l.cc("click",(function(){return l.tc(e),l.gc().toggleLanguages()})),l.Ac(14),l.hc(15,"uppercase"),l.Pb(16,"img",13),l.Ub(17,"mat-icon",6),l.Ac(18,"keyboard_arrow_down"),l.Tb(),l.Tb(),l.Tb()}if(2&n){var o=l.gc();l.lc("@fadeInOut",o.isToggled),l.Cb(2),l.Bc(l.ic(3,7,"public.navbar.blog")),l.Cb(3),l.Bc(l.ic(6,9,"public.navbar.courses")),l.Cb(3),l.Bc(l.ic(9,11,"public.navbar.about_me")),l.Cb(3),l.Bc(l.ic(12,13,"public.navbar.contact")),l.Cb(3),l.Cc(" ",l.ic(15,15,o.currentLangObj.lang)," "),l.Cb(2),l.nc("src","assets/images/",o.currentLangObj.flag,"",l.uc)}}function w(n,t){if(1&n){var e=l.Vb();l.Sb(0),l.Ub(1,"div",16),l.cc("click",(function(){l.tc(e);var n=t.$implicit;return l.gc(2).changeLanguage(n.lang)})),l.Ac(2),l.hc(3,"uppercase"),l.Pb(4,"img",13),l.Tb(),l.Rb()}if(2&n){var o=t.$implicit;l.Cb(2),l.Cc(" ",l.ic(3,2,o.lang)," "),l.Cb(2),l.nc("src","assets/images/",o.flag,"",l.uc)}}function O(n,t){if(1&n&&(l.Ub(0,"div",14),l.zc(1,w,5,4,"ng-container",15),l.Tb()),2&n){var e=l.gc();l.lc("@fadeInOut",e.showLanguages),l.Cb(1),l.lc("ngForOf",e.unSelectedLangs)}}var y,C=((y=function(){function n(t,e){var o=this;_classCallCheck(this,n),this.zone=t,this.langService=e,this.showLanguages=!1,this.changeSubject$=new g.a,this.onResizeScreen(window.innerWidth),this.changeSubject$.subscribe((function(n){o.onResizeScreen(n.currentTarget.innerWidth)})),this.zone.runOutsideAngular((function(){Object(u.a)(window,"resize").pipe(Object(d.a)(100),Object(b.a)()).subscribe((function(n){o.zone.run((function(){o.changeSubject$.next(n)}))}))}))}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.setToggleLang(),this.langService.getCurrentLangObservable().subscribe((function(t){n.setToggleLang()}))}},{key:"toggleLanguages",value:function(){this.showLanguages=!this.showLanguages}},{key:"setToggleLang",value:function(){this.languagesList||(this.languagesList=this.langService.getLangList());var n=this.langService.getCurrentLangString();this.currentLangObj=this.languagesList.find((function(t){return t.lang===n})),this.unSelectedLangs=this.languagesList.filter((function(t){return t.lang!==n}))}},{key:"changeLanguage",value:function(n){this.langService.setLanguage(n),this.showLanguages=!1}},{key:"onToggleClick",value:function(){this.isToggled=!this.isToggled}},{key:"onResizeScreen",value:function(n){n>=768?this.isToggled=!0:(this.isToggled=!1,this.showLanguages=!1)}}]),n}()).\u0275fac=function(n){return new(n||y)(l.Ob(l.A),l.Ob(r.a))},y.\u0275cmp=l.Ib({type:y,selectors:[["pf-main-toolbar"]],decls:8,vars:2,consts:[[1,"toolbar_container"],[1,"toolbar__logo-container"],["src","assets/images/logo-texto.svg","alt","Logotipo",1,"main-logo"],["class","toolbar__links-container",4,"ngIf"],["class","toolbar__languages-dropdown",4,"ngIf"],[1,"toolbar__toggle",3,"click"],["matSuffix",""],[1,"toolbar__links-container"],["routerLink","/","routerLinkActive","active-link",1,"toolbar__link"],["routerLink","/courses","routerLinkActive","active-link",1,"toolbar__link"],["routerLink","/about","routerLinkActive","active-link",1,"toolbar__link"],["routerLink","/contact","routerLinkActive","active-link",1,"toolbar__link"],[1,"toolbar__link","no_border",3,"click"],["width","15px","alt","lang",3,"src"],[1,"toolbar__languages-dropdown"],[4,"ngFor","ngForOf"],[1,"language-item",3,"click"]],template:function(n,t){1&n&&(l.Ub(0,"div",0),l.Ub(1,"div",1),l.Pb(2,"img",2),l.Tb(),l.zc(3,h,19,17,"div",3),l.zc(4,O,2,2,"div",4),l.Ub(5,"div",5),l.cc("click",(function(){return t.onToggleClick()})),l.Ub(6,"mat-icon",6),l.Ac(7,"reorder"),l.Tb(),l.Tb(),l.Tb()),2&n&&(l.Cb(3),l.lc("ngIf",t.isToggled),l.Cb(1),l.lc("ngIf",t.showLanguages))},directives:[o.k,_.a,m.e,o.j],pipes:[p.c,o.r],styles:['.primary-filled[_ngcontent-%COMP%]{background-color:#162839;color:#73c8c6}.secondary-filled[_ngcontent-%COMP%]{background-color:#73c8c6;color:#f3f0f0}.primary-outlined[_ngcontent-%COMP%]{border:1px solid #162839;color:#162839;background:transparent}.secondary-outlined[_ngcontent-%COMP%]{border:1px solid #73c8c6;color:#73c8c6;background:transparent}.bg-primary[_ngcontent-%COMP%]{background-color:#162839}.bg-secondary[_ngcontent-%COMP%]{background-color:#73c8c6}.primary[_ngcontent-%COMP%]{color:#162839}.secondary[_ngcontent-%COMP%]{color:#73c8c6}.primary-shadow[_ngcontent-%COMP%]{box-shadow:10px 10px 5px 0 #162839}.secondary-shadow[_ngcontent-%COMP%]{box-shadow:10px 10px 5px 0 #73c8c6}@font-face{font-family:DejaVu;src:url(DejaVuSansMono.4bb3391b827ef92a8bcd.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-Bold;src:url(DejaVuSansMono-Bold.8608c7eb92d996a15bb3.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-BoldOblique;src:url(DejaVuSansMono-BoldOblique.bf56c9314c4ef709102f.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-Oblique;src:url(DejaVuSansMono-Oblique.5a7e0ca971abf1808983.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:Helvetica Bold Italic;src:url("Helvetica 76 Bold Italic.ea71f203564f7c9440f0.woff") format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Ultra Light;src:url(Helvetica25UltraLight_22433.c101efb1146f1a01d590.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Thin;src:url(Helvetica35Thin_22435.c7b977444c9f5213d2f7.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Black Italic;src:url(HelveticaNeueBlackItalic\\ 1.63401c5d6d0fbf0eddf8.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Bold;src:url(HelveticaNeueBold.9746238261ff2fd4644a.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Medium Italic;src:url(HelveticaNeueMediumItalic.35485a03a478543cda30.woff) format("woff");font-weight:300;font-style:normal}.toolbar_container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:18px}.toolbar_container[_ngcontent-%COMP%]   .toolbar__logo-container[_ngcontent-%COMP%]{color:#73c8c6;z-index:1}.toolbar_container[_ngcontent-%COMP%]   .toolbar__logo-container[_ngcontent-%COMP%]   .main-logo[_ngcontent-%COMP%]{width:150px}.toolbar_container[_ngcontent-%COMP%]   .toolbar__links-container[_ngcontent-%COMP%]{display:flex;color:#73c8c6;font-family:Helvetica Neue Bold;z-index:1}.toolbar_container[_ngcontent-%COMP%]   .toolbar__links-container[_ngcontent-%COMP%]   .no_border[_ngcontent-%COMP%]:hover{border:none}.toolbar_container[_ngcontent-%COMP%]   .toolbar__languages-dropdown[_ngcontent-%COMP%]{font-family:Helvetica Neue Bold;position:absolute;color:#73c8c6;z-index:1}@media (max-width:767px){.toolbar_container[_ngcontent-%COMP%]{flex-direction:column}.toolbar__links-container[_ngcontent-%COMP%]{flex-direction:column;margin-left:1em;margin-bottom:4em}.toolbar__links-container[_ngcontent-%COMP%]   .toolbar__link[_ngcontent-%COMP%]{margin-top:1em}.toolbar__languages-dropdown[_ngcontent-%COMP%]{top:17.5em}.toolbar__languages-dropdown[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]{padding-left:.9em}.toolbar__toggle[_ngcontent-%COMP%]{color:#73c8c6;z-index:2;position:absolute;top:1.5em;right:2em}.toolbar__toggle[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:36px}}@media (min-width:768px){.toolbar_container[_ngcontent-%COMP%]{flex-direction:row;align-items:center}.toolbar__links-container[_ngcontent-%COMP%]{flex-direction:row}.toolbar__links-container[_ngcontent-%COMP%]   .toolbar__link[_ngcontent-%COMP%]{cursor:pointer;display:flex;padding:.5em 1em}.toolbar__links-container[_ngcontent-%COMP%]   .toolbar__link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:.5em}.toolbar__links-container[_ngcontent-%COMP%]   .toolbar__link[_ngcontent-%COMP%]:hover{background-color:#1d354b}.toolbar__languages-dropdown[_ngcontent-%COMP%]{cursor:pointer;top:3.5em;right:1.4em}.toolbar__languages-dropdown[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]{padding:.5em 1em}.toolbar__languages-dropdown[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]:hover{background-color:#1d354b}.toolbar__toggle[_ngcontent-%COMP%]{display:none}}'],data:{animation:[f]}}),y);function v(n,t){if(1&n&&(l.Ub(0,"div",2),l.Ub(1,"div",3),l.Pb(2,"img",4),l.Tb(),l.Ub(3,"div",5),l.Ac(4),l.Tb(),l.Ub(5,"div",6),l.Ac(6),l.Tb(),l.Tb()),2&n){var e=t.$implicit;l.Cb(2),l.nc("src","assets/icons/",e.icon,"",l.uc),l.mc("alt",e.title),l.Cb(2),l.Cc(" ",e.title," "),l.Cb(2),l.Cc(" ",e.description," ")}}var k,M=((k=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||k)},k.\u0275cmp=l.Ib({type:k,selectors:[["skills-component"]],inputs:{skills:"skills"},decls:2,vars:1,consts:[[1,"skills__container"],["class","skill__card",4,"ngFor","ngForOf"],[1,"skill__card"],[1,"skill__icon","secondary"],[3,"src","alt"],[1,"skill__title"],[1,"skill__description"]],template:function(n,t){1&n&&(l.Ub(0,"div",0),l.zc(1,v,7,4,"div",1),l.Tb()),2&n&&(l.Cb(1),l.lc("ngForOf",t.skills))},directives:[o.j],styles:['@font-face{font-family:DejaVu;src:url(DejaVuSansMono.4bb3391b827ef92a8bcd.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-Bold;src:url(DejaVuSansMono-Bold.8608c7eb92d996a15bb3.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-BoldOblique;src:url(DejaVuSansMono-BoldOblique.bf56c9314c4ef709102f.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-Oblique;src:url(DejaVuSansMono-Oblique.5a7e0ca971abf1808983.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:Helvetica Bold Italic;src:url("Helvetica 76 Bold Italic.ea71f203564f7c9440f0.woff") format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Ultra Light;src:url(Helvetica25UltraLight_22433.c101efb1146f1a01d590.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Thin;src:url(Helvetica35Thin_22435.c7b977444c9f5213d2f7.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Black Italic;src:url(HelveticaNeueBlackItalic\\ 1.63401c5d6d0fbf0eddf8.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Bold;src:url(HelveticaNeueBold.9746238261ff2fd4644a.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Medium Italic;src:url(HelveticaNeueMediumItalic.35485a03a478543cda30.woff) format("woff");font-weight:300;font-style:normal}.primary-filled[_ngcontent-%COMP%]{background-color:#162839;color:#73c8c6}.secondary-filled[_ngcontent-%COMP%]{background-color:#73c8c6;color:#f3f0f0}.primary-outlined[_ngcontent-%COMP%]{border:1px solid #162839;color:#162839;background:transparent}.secondary-outlined[_ngcontent-%COMP%]{border:1px solid #73c8c6;color:#73c8c6;background:transparent}.bg-primary[_ngcontent-%COMP%]{background-color:#162839}.bg-secondary[_ngcontent-%COMP%]{background-color:#73c8c6}.primary[_ngcontent-%COMP%]{color:#162839}.secondary[_ngcontent-%COMP%]{color:#73c8c6}.primary-shadow[_ngcontent-%COMP%]{box-shadow:10px 10px 5px 0 #162839}.secondary-shadow[_ngcontent-%COMP%]{box-shadow:10px 10px 5px 0 #73c8c6}.skills__container[_ngcontent-%COMP%]{display:grid;box-sizing:border-box}.skills__container[_ngcontent-%COMP%]   .skill__card[_ngcontent-%COMP%]{margin:1em;height:300px}.skills__container[_ngcontent-%COMP%]   .skill__card[_ngcontent-%COMP%]   .skill__icon[_ngcontent-%COMP%]{text-align:center;margin-top:.5em;margin-bottom:.5em}.skills__container[_ngcontent-%COMP%]   .skill__card[_ngcontent-%COMP%]   .skill__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:6em;color:#162839}.skills__container[_ngcontent-%COMP%]   .skill__card[_ngcontent-%COMP%]   .skill__title[_ngcontent-%COMP%]{text-align:center;font-family:Helvetica Neue Bold;font-size:18px;color:#162839}.skills__container[_ngcontent-%COMP%]   .skill__card[_ngcontent-%COMP%]   .skill__description[_ngcontent-%COMP%]{margin:2em;text-align:justify}@media (max-width:767px){.skills__container[_ngcontent-%COMP%]{grid-template-columns:100%}}@media (min-width:768px) and (max-width:1199px){.skills__container[_ngcontent-%COMP%]{grid-template-columns:33% 33% 33%}}@media (min-width:1200px){.skills__container[_ngcontent-%COMP%]{grid-template-columns:33% 33% 33%}}']}),k),P=["scrollDiv"];function x(n,t){if(1&n){var e=l.Vb();l.Ub(0,"div",12),l.cc("click",(function(){return l.tc(e),l.gc().scrollTop()})),l.Ub(1,"mat-icon"),l.Ac(2,"keyboard_arrow_up"),l.Tb(),l.Tb()}}var j,T,L,S=[{path:"",component:(j=function(){function n(t){var e=this;_classCallCheck(this,n),this.languageService=t,this.showFab=!0,this.currentLangSubscription=new i.a,this.skills=a,this.checkScroll();var o=this.languageService.getCurrentLangString();this.setSkillsTranslation(this.languageService.getCurrentTranslation(o)[o]),this.currentLangSubscription=this.languageService.getCurrentLangObservable().subscribe((function(n){e.setSkillsTranslation(n.translations)}))}return _createClass(n,[{key:"onScroll",value:function(){this.checkScroll()}},{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){this.currentLangSubscription.unsubscribe()}},{key:"scrollTop",value:function(){this.content.nativeElement.scrollIntoView({behavior:"smooth",block:"start"})}},{key:"checkScroll",value:function(){this.showFab=document.documentElement.scrollTop>=200}},{key:"setSkillsTranslation",value:function(n){this.skills=a.map((function(t){return t.description=n.public.skill[t.key],t}))}}]),n}(),j.\u0275fac=function(n){return new(n||j)(l.Ob(r.a))},j.\u0275cmp=l.Ib({type:j,selectors:[["app-welcome"]],viewQuery:function(n,t){var e;1&n&&l.xc(P,!0),2&n&&l.pc(e=l.dc())&&(t.content=e.first)},hostBindings:function(n,t){1&n&&l.cc("scroll",(function(n){return t.onScroll(n)}),!1,l.sc)},decls:15,vars:5,consts:[[1,"main__welcome"],["scrollDiv",""],[1,"navbar__welcome"],[1,"header__welcome"],[1,"polygon__welcome"],[1,"container__welcome"],[1,"image__welcome"],["src","https://pbs.twimg.com/profile_images/1269363692476477445/5GNMXm7-_400x400.jpg","alt","Alfonso Salces"],[1,"title__welcome"],[1,"pf-container"],[3,"skills"],["class","pf-fab",3,"click",4,"ngIf"],[1,"pf-fab",3,"click"]],template:function(n,t){1&n&&(l.Ub(0,"div",0,1),l.Ub(2,"div",2),l.Pb(3,"pf-main-toolbar"),l.Tb(),l.Ub(4,"div",3),l.Pb(5,"div",4),l.Ub(6,"div",5),l.Ub(7,"div",6),l.Pb(8,"img",7),l.Tb(),l.Ub(9,"div",8),l.Ac(10),l.hc(11,"translate"),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ub(12,"div",9),l.Pb(13,"skills-component",10),l.Tb(),l.zc(14,x,3,0,"div",11)),2&n&&(l.Cb(10),l.Cc(" ",l.ic(11,3,"public.header.presentation")," "),l.Cb(3),l.lc("skills",t.skills),l.Cb(1),l.lc("ngIf",t.showFab))},directives:[C,M,o.k,_.a],pipes:[p.c],styles:['.primary-filled[_ngcontent-%COMP%]{background-color:#162839;color:#73c8c6}.secondary-filled[_ngcontent-%COMP%]{background-color:#73c8c6;color:#f3f0f0}.primary-outlined[_ngcontent-%COMP%]{border:1px solid #162839;color:#162839;background:transparent}.secondary-outlined[_ngcontent-%COMP%]{border:1px solid #73c8c6;color:#73c8c6;background:transparent}.bg-primary[_ngcontent-%COMP%]{background-color:#162839}.bg-secondary[_ngcontent-%COMP%]{background-color:#73c8c6}.primary[_ngcontent-%COMP%]{color:#162839}.secondary[_ngcontent-%COMP%]{color:#73c8c6}.primary-shadow[_ngcontent-%COMP%]{box-shadow:10px 10px 5px 0 #162839}.secondary-shadow[_ngcontent-%COMP%]{box-shadow:10px 10px 5px 0 #73c8c6}@font-face{font-family:DejaVu;src:url(DejaVuSansMono.4bb3391b827ef92a8bcd.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-Bold;src:url(DejaVuSansMono-Bold.8608c7eb92d996a15bb3.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-BoldOblique;src:url(DejaVuSansMono-BoldOblique.bf56c9314c4ef709102f.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-Oblique;src:url(DejaVuSansMono-Oblique.5a7e0ca971abf1808983.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:Helvetica Bold Italic;src:url("Helvetica 76 Bold Italic.ea71f203564f7c9440f0.woff") format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Ultra Light;src:url(Helvetica25UltraLight_22433.c101efb1146f1a01d590.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Thin;src:url(Helvetica35Thin_22435.c7b977444c9f5213d2f7.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Black Italic;src:url(HelveticaNeueBlackItalic\\ 1.63401c5d6d0fbf0eddf8.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Bold;src:url(HelveticaNeueBold.9746238261ff2fd4644a.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Medium Italic;src:url(HelveticaNeueMediumItalic.35485a03a478543cda30.woff) format("woff");font-weight:300;font-style:normal}.main__welcome[_ngcontent-%COMP%]   .navbar__welcome[_ngcontent-%COMP%]{background-color:#162839;text-transform:uppercase}.pf-fab[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:5%;min-width:50px;height:50px;color:#f3f0f0;background-color:#162839;position:fixed;bottom:1em;right:1em;border-radius:8px}@media (max-width:767px){.container__welcome[_ngcontent-%COMP%]{background:#162839;color:#73c8c6;font-size:14px;display:flex;flex-direction:column;align-items:center;padding:2em 0}.container__welcome[_ngcontent-%COMP%]   .image__welcome[_ngcontent-%COMP%]{width:50%}.container__welcome[_ngcontent-%COMP%]   .image__welcome[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:50%;border-color:#73c8c6 #73c8c6 #162839 #162839;border-style:solid;border-width:4px}.container__welcome[_ngcontent-%COMP%]   .title__welcome[_ngcontent-%COMP%]{text-align:justify;margin-top:1em;width:90%}}@media (min-width:768px){.header__welcome[_ngcontent-%COMP%]   .polygon__welcome[_ngcontent-%COMP%]{background-color:#162839;transform:skewY(8deg);width:100%;height:80vh;max-height:400px;overflow:hidden;transform-origin:100%;box-sizing:border-box}.header__welcome[_ngcontent-%COMP%]   .container__welcome[_ngcontent-%COMP%]{position:absolute;top:10%;left:20%;height:300px;width:60%;color:#73c8c6;font-family:DejaVu-Oblique;display:flex;flex-direction:row;align-items:center}.header__welcome[_ngcontent-%COMP%]   .container__welcome[_ngcontent-%COMP%]   .image__welcome[_ngcontent-%COMP%]{width:30%;margin-left:2em}.header__welcome[_ngcontent-%COMP%]   .container__welcome[_ngcontent-%COMP%]   .image__welcome[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70%;border-radius:50%;border-color:#73c8c6 #73c8c6 #162839 #162839;border-style:solid;border-width:4px}.header__welcome[_ngcontent-%COMP%]   .container__welcome[_ngcontent-%COMP%]   .title__welcome[_ngcontent-%COMP%]{text-align:justify;width:70%;margin-right:3em}}']}),j)}],H=((T=function n(){_classCallCheck(this,n)}).\u0275mod=l.Mb({type:T}),T.\u0275inj=l.Lb({factory:function(n){return new(n||T)},imports:[[c.b.forChild(S)],c.b]}),T),B=e("FpXt"),I=e("XI1q"),U=e("CeNN"),N=((L=function n(){_classCallCheck(this,n)}).\u0275mod=l.Mb({type:L}),L.\u0275inj=l.Lb({factory:function(n){return new(n||L)},imports:[[o.c,H,B.a,I.a,U.a]]}),L)}}]);