(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{iydT:function(t,e,n){"use strict";n.r(e),n.d(e,"HomeModule",(function(){return L}));var o=n("ofXK"),c=n("tyNb");const a=[{key:"responsive",icon:"responsive-light.svg",title:"Responsive",description:"Los dise\xf1os que realizo son completamente responsive, adaptados a los \xfaltimos est\xe1ndares de medida de los diferentes dispositivos existentes hoy d\xeda."},{key:"modular",icon:"module-light.svg",title:"Modular",description:"Cada aplicaci\xf3n dise\xf1ada ser\xe1 modular, con lo cual, cada parte ser\xe1 reutilizable, tanto los m\xf3dulos como sus respectivos componentes."},{key:"planning",icon:"strategy-light.svg",title:"Planificaci\xf3n",description:"Soy consciente de que una planificaci\xf3n exhaustiva es el propulsor de cualquier proyecto exitoso, por lo tanto siempre planifico hasta el m\xe1s m\xednimo detalle en los proyectos en los que participo."}];var i=n("fXoL"),l=n("5RWN"),r=n("R0Ic");const s=Object(r.m)("fadeInOut",[Object(r.l)(":enter",[Object(r.k)({opacity:.1}),Object(r.e)("0.5s ease-in")]),Object(r.l)(":leave",[Object(r.e)("0.5s ease-out",Object(r.k)({opacity:0}))])]);Object(r.m)("EnterLeave",[Object(r.l)(":enter",[Object(r.k)({transform:"translateX(100%)"}),Object(r.e)("0.5s ease-in")]),Object(r.l)(":leave",[Object(r.e)("0.5s ease-out",Object(r.k)({transform:"translateX(100%)"}))])]),Object(r.m)("slideInOut",[Object(r.j)("in",Object(r.k)({overflow:"hidden",height:"0px"})),Object(r.j)("out",Object(r.k)({overflow:"hidden",height:"*"})),Object(r.l)("in => out",Object(r.e)("400ms ease-in-out")),Object(r.l)("out => in",Object(r.e)("400ms ease-in-out"))]);var f=n("XNiG"),g=n("xgIS"),d=n("Kj3r"),b=n("/uUt"),u=n("NFeN"),_=n("kmnG"),m=n("sYmb");function p(t,e){if(1&t){const t=i.Vb();i.Ub(0,"div",7),i.Ub(1,"div",8),i.Ac(2),i.hc(3,"translate"),i.Tb(),i.Ub(4,"div",9),i.Ac(5),i.hc(6,"translate"),i.Tb(),i.Ub(7,"div",10),i.Ac(8),i.hc(9,"translate"),i.Tb(),i.Ub(10,"div",11),i.Ac(11),i.hc(12,"translate"),i.Tb(),i.Ub(13,"div",12),i.cc("click",(function(){return i.tc(t),i.gc().toggleLanguages()})),i.Ac(14),i.hc(15,"uppercase"),i.Pb(16,"img",13),i.Ub(17,"mat-icon",6),i.Ac(18,"keyboard_arrow_down"),i.Tb(),i.Tb(),i.Tb()}if(2&t){const t=i.gc();i.lc("@fadeInOut",t.isToggled),i.Cb(2),i.Bc(i.ic(3,7,"public.navbar.blog")),i.Cb(3),i.Bc(i.ic(6,9,"public.navbar.courses")),i.Cb(3),i.Bc(i.ic(9,11,"public.navbar.about_me")),i.Cb(3),i.Bc(i.ic(12,13,"public.navbar.contact")),i.Cb(3),i.Cc(" ",i.ic(15,15,t.currentLangObj.lang)," "),i.Cb(2),i.nc("src","assets/images/",t.currentLangObj.flag,"",i.uc)}}function h(t,e){if(1&t){const t=i.Vb();i.Sb(0),i.Ub(1,"div",16),i.cc("click",(function(){i.tc(t);const n=e.$implicit;return i.gc(2).changeLanguage(n.lang)})),i.Ac(2),i.hc(3,"uppercase"),i.Pb(4,"img",13),i.Tb(),i.Rb()}if(2&t){const t=e.$implicit;i.Cb(2),i.Cc(" ",i.ic(3,2,t.lang)," "),i.Cb(2),i.nc("src","assets/images/",t.flag,"",i.uc)}}function w(t,e){if(1&t&&(i.Ub(0,"div",14),i.zc(1,h,5,4,"ng-container",15),i.Tb()),2&t){const t=i.gc();i.lc("@fadeInOut",t.showLanguages),i.Cb(1),i.lc("ngForOf",t.unSelectedLangs)}}let O=(()=>{class t{constructor(t,e){this.zone=t,this.langService=e,this.showLanguages=!1,this.changeSubject$=new f.a,this.onResizeScreen(window.innerWidth),this.changeSubject$.subscribe(t=>{this.onResizeScreen(t.currentTarget.innerWidth)}),this.zone.runOutsideAngular(()=>{Object(g.a)(window,"resize").pipe(Object(d.a)(100),Object(b.a)()).subscribe(t=>{this.zone.run(()=>{this.changeSubject$.next(t)})})})}ngOnInit(){this.setToggleLang(),this.langService.getCurrentLangObservable().subscribe(t=>{this.setToggleLang()})}toggleLanguages(){this.showLanguages=!this.showLanguages}setToggleLang(){this.languagesList||(this.languagesList=this.langService.getLangList());const t=this.langService.getCurrentLangString();this.currentLangObj=this.languagesList.find(e=>e.lang===t),this.unSelectedLangs=this.languagesList.filter(e=>e.lang!==t)}changeLanguage(t){this.langService.setLanguage(t),this.showLanguages=!1}onToggleClick(){this.isToggled=!this.isToggled}onResizeScreen(t){t>=768?this.isToggled=!0:(this.isToggled=!1,this.showLanguages=!1)}}return t.\u0275fac=function(e){return new(e||t)(i.Ob(i.A),i.Ob(l.a))},t.\u0275cmp=i.Ib({type:t,selectors:[["pf-main-toolbar"]],decls:8,vars:2,consts:[[1,"toolbar_container"],[1,"toolbar__logo-container"],["src","assets/images/logo-texto.svg","alt","Logotipo",1,"main-logo"],["class","toolbar__links-container",4,"ngIf"],["class","toolbar__languages-dropdown",4,"ngIf"],[1,"toolbar__toggle",3,"click"],["matSuffix",""],[1,"toolbar__links-container"],["routerLink","/","routerLinkActive","active-link",1,"toolbar__link"],["routerLink","/courses","routerLinkActive","active-link",1,"toolbar__link"],["routerLink","/about","routerLinkActive","active-link",1,"toolbar__link"],["routerLink","/contact","routerLinkActive","active-link",1,"toolbar__link"],[1,"toolbar__link","no_border",3,"click"],["width","15px","alt","lang",3,"src"],[1,"toolbar__languages-dropdown"],[4,"ngFor","ngForOf"],[1,"language-item",3,"click"]],template:function(t,e){1&t&&(i.Ub(0,"div",0),i.Ub(1,"div",1),i.Pb(2,"img",2),i.Tb(),i.zc(3,p,19,17,"div",3),i.zc(4,w,2,2,"div",4),i.Ub(5,"div",5),i.cc("click",(function(){return e.onToggleClick()})),i.Ub(6,"mat-icon",6),i.Ac(7,"reorder"),i.Tb(),i.Tb(),i.Tb()),2&t&&(i.Cb(3),i.lc("ngIf",e.isToggled),i.Cb(1),i.lc("ngIf",e.showLanguages))},directives:[o.k,u.a,_.e,o.j],pipes:[m.c,o.r],styles:['.primary-filled[_ngcontent-%COMP%]{background-color:#162839;color:#73c8c6}.secondary-filled[_ngcontent-%COMP%]{background-color:#73c8c6;color:#f3f0f0}.primary-outlined[_ngcontent-%COMP%]{border:1px solid #162839;color:#162839;background:transparent}.secondary-outlined[_ngcontent-%COMP%]{border:1px solid #73c8c6;color:#73c8c6;background:transparent}.bg-primary[_ngcontent-%COMP%]{background-color:#162839}.bg-secondary[_ngcontent-%COMP%]{background-color:#73c8c6}.primary[_ngcontent-%COMP%]{color:#162839}.secondary[_ngcontent-%COMP%]{color:#73c8c6}.primary-shadow[_ngcontent-%COMP%]{box-shadow:10px 10px 5px 0 #162839}.secondary-shadow[_ngcontent-%COMP%]{box-shadow:10px 10px 5px 0 #73c8c6}@font-face{font-family:DejaVu;src:url(DejaVuSansMono.4bb3391b827ef92a8bcd.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-Bold;src:url(DejaVuSansMono-Bold.8608c7eb92d996a15bb3.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-BoldOblique;src:url(DejaVuSansMono-BoldOblique.bf56c9314c4ef709102f.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-Oblique;src:url(DejaVuSansMono-Oblique.5a7e0ca971abf1808983.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:Helvetica Bold Italic;src:url("Helvetica 76 Bold Italic.ea71f203564f7c9440f0.woff") format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Ultra Light;src:url(Helvetica25UltraLight_22433.c101efb1146f1a01d590.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Thin;src:url(Helvetica35Thin_22435.c7b977444c9f5213d2f7.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Black Italic;src:url(HelveticaNeueBlackItalic\\ 1.63401c5d6d0fbf0eddf8.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Bold;src:url(HelveticaNeueBold.9746238261ff2fd4644a.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Medium Italic;src:url(HelveticaNeueMediumItalic.35485a03a478543cda30.woff) format("woff");font-weight:300;font-style:normal}.toolbar_container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:18px}.toolbar_container[_ngcontent-%COMP%]   .toolbar__logo-container[_ngcontent-%COMP%]{color:#73c8c6;z-index:1}.toolbar_container[_ngcontent-%COMP%]   .toolbar__logo-container[_ngcontent-%COMP%]   .main-logo[_ngcontent-%COMP%]{width:150px}.toolbar_container[_ngcontent-%COMP%]   .toolbar__links-container[_ngcontent-%COMP%]{display:flex;color:#73c8c6;font-family:Helvetica Neue Bold;z-index:1}.toolbar_container[_ngcontent-%COMP%]   .toolbar__links-container[_ngcontent-%COMP%]   .no_border[_ngcontent-%COMP%]:hover{border:none}.toolbar_container[_ngcontent-%COMP%]   .toolbar__languages-dropdown[_ngcontent-%COMP%]{font-family:Helvetica Neue Bold;position:absolute;color:#73c8c6;z-index:1}@media (max-width:767px){.toolbar_container[_ngcontent-%COMP%]{flex-direction:column}.toolbar__links-container[_ngcontent-%COMP%]{flex-direction:column;margin-left:1em;margin-bottom:4em}.toolbar__links-container[_ngcontent-%COMP%]   .toolbar__link[_ngcontent-%COMP%]{margin-top:1em}.toolbar__languages-dropdown[_ngcontent-%COMP%]{top:17.5em}.toolbar__languages-dropdown[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]{padding-left:.9em}.toolbar__toggle[_ngcontent-%COMP%]{color:#73c8c6;z-index:2;position:absolute;top:1.5em;right:2em}.toolbar__toggle[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:36px}}@media (min-width:768px){.toolbar_container[_ngcontent-%COMP%]{flex-direction:row;align-items:center}.toolbar__links-container[_ngcontent-%COMP%]{flex-direction:row}.toolbar__links-container[_ngcontent-%COMP%]   .toolbar__link[_ngcontent-%COMP%]{cursor:pointer;display:flex;padding:.5em 1em}.toolbar__links-container[_ngcontent-%COMP%]   .toolbar__link[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin-left:.5em}.toolbar__links-container[_ngcontent-%COMP%]   .toolbar__link[_ngcontent-%COMP%]:hover{background-color:#1d354b}.toolbar__languages-dropdown[_ngcontent-%COMP%]{cursor:pointer;top:3.5em;right:1.4em}.toolbar__languages-dropdown[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]{padding:.5em 1em}.toolbar__languages-dropdown[_ngcontent-%COMP%]   .language-item[_ngcontent-%COMP%]:hover{background-color:#1d354b}.toolbar__toggle[_ngcontent-%COMP%]{display:none}}'],data:{animation:[s]}}),t})();function y(t,e){if(1&t&&(i.Ub(0,"div",2),i.Ub(1,"div",3),i.Pb(2,"img",4),i.Tb(),i.Ub(3,"div",5),i.Ac(4),i.Tb(),i.Ub(5,"div",6),i.Ac(6),i.Tb(),i.Tb()),2&t){const t=e.$implicit;i.Cb(2),i.nc("src","assets/icons/",t.icon,"",i.uc),i.mc("alt",t.title),i.Cb(2),i.Cc(" ",t.title," "),i.Cb(2),i.Cc(" ",t.description," ")}}let C=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Ib({type:t,selectors:[["skills-component"]],inputs:{skills:"skills"},decls:2,vars:1,consts:[[1,"skills__container"],["class","skill__card",4,"ngFor","ngForOf"],[1,"skill__card"],[1,"skill__icon","secondary"],[3,"src","alt"],[1,"skill__title"],[1,"skill__description"]],template:function(t,e){1&t&&(i.Ub(0,"div",0),i.zc(1,y,7,4,"div",1),i.Tb()),2&t&&(i.Cb(1),i.lc("ngForOf",e.skills))},directives:[o.j],styles:['@font-face{font-family:DejaVu;src:url(DejaVuSansMono.4bb3391b827ef92a8bcd.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-Bold;src:url(DejaVuSansMono-Bold.8608c7eb92d996a15bb3.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-BoldOblique;src:url(DejaVuSansMono-BoldOblique.bf56c9314c4ef709102f.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-Oblique;src:url(DejaVuSansMono-Oblique.5a7e0ca971abf1808983.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:Helvetica Bold Italic;src:url("Helvetica 76 Bold Italic.ea71f203564f7c9440f0.woff") format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Ultra Light;src:url(Helvetica25UltraLight_22433.c101efb1146f1a01d590.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Thin;src:url(Helvetica35Thin_22435.c7b977444c9f5213d2f7.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Black Italic;src:url(HelveticaNeueBlackItalic\\ 1.63401c5d6d0fbf0eddf8.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Bold;src:url(HelveticaNeueBold.9746238261ff2fd4644a.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Medium Italic;src:url(HelveticaNeueMediumItalic.35485a03a478543cda30.woff) format("woff");font-weight:300;font-style:normal}.primary-filled[_ngcontent-%COMP%]{background-color:#162839;color:#73c8c6}.secondary-filled[_ngcontent-%COMP%]{background-color:#73c8c6;color:#f3f0f0}.primary-outlined[_ngcontent-%COMP%]{border:1px solid #162839;color:#162839;background:transparent}.secondary-outlined[_ngcontent-%COMP%]{border:1px solid #73c8c6;color:#73c8c6;background:transparent}.bg-primary[_ngcontent-%COMP%]{background-color:#162839}.bg-secondary[_ngcontent-%COMP%]{background-color:#73c8c6}.primary[_ngcontent-%COMP%]{color:#162839}.secondary[_ngcontent-%COMP%]{color:#73c8c6}.primary-shadow[_ngcontent-%COMP%]{box-shadow:10px 10px 5px 0 #162839}.secondary-shadow[_ngcontent-%COMP%]{box-shadow:10px 10px 5px 0 #73c8c6}.skills__container[_ngcontent-%COMP%]{display:grid;box-sizing:border-box}.skills__container[_ngcontent-%COMP%]   .skill__card[_ngcontent-%COMP%]{margin:1em;height:300px}.skills__container[_ngcontent-%COMP%]   .skill__card[_ngcontent-%COMP%]   .skill__icon[_ngcontent-%COMP%]{text-align:center;margin-top:.5em;margin-bottom:.5em}.skills__container[_ngcontent-%COMP%]   .skill__card[_ngcontent-%COMP%]   .skill__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:6em;color:#162839}.skills__container[_ngcontent-%COMP%]   .skill__card[_ngcontent-%COMP%]   .skill__title[_ngcontent-%COMP%]{text-align:center;font-family:Helvetica Neue Bold;font-size:18px;color:#162839}.skills__container[_ngcontent-%COMP%]   .skill__card[_ngcontent-%COMP%]   .skill__description[_ngcontent-%COMP%]{margin:2em;text-align:justify}@media (max-width:767px){.skills__container[_ngcontent-%COMP%]{grid-template-columns:100%}}@media (min-width:768px) and (max-width:1199px){.skills__container[_ngcontent-%COMP%]{grid-template-columns:33% 33% 33%}}@media (min-width:1200px){.skills__container[_ngcontent-%COMP%]{grid-template-columns:33% 33% 33%}}']}),t})();const M=["scrollDiv"];function k(t,e){if(1&t){const t=i.Vb();i.Ub(0,"div",12),i.cc("click",(function(){return i.tc(t),i.gc().scrollTop()})),i.Ub(1,"mat-icon"),i.Ac(2,"keyboard_arrow_up"),i.Tb(),i.Tb()}}const v=[{path:"",component:(()=>{class t{constructor(t){this.languageService=t,this.showFab=!0,this.skills=a,this.checkScroll(),this.languageService.getCurrentLangObservable().subscribe(t=>{this.languageService.getTranslation(t.lang).subscribe(t=>{this.skills=a.map(e=>(e.description=t.public.skill[e.key],e))})})}onScroll(){this.checkScroll()}ngOnInit(){}scrollTop(){this.content.nativeElement.scrollIntoView({behavior:"smooth",block:"start"})}checkScroll(){this.showFab=document.documentElement.scrollTop>=200}}return t.\u0275fac=function(e){return new(e||t)(i.Ob(l.a))},t.\u0275cmp=i.Ib({type:t,selectors:[["app-welcome"]],viewQuery:function(t,e){var n;1&t&&i.xc(M,!0),2&t&&i.pc(n=i.dc())&&(e.content=n.first)},hostBindings:function(t,e){1&t&&i.cc("scroll",(function(t){return e.onScroll(t)}),!1,i.sc)},decls:15,vars:5,consts:[[1,"main__welcome"],["scrollDiv",""],[1,"navbar__welcome"],[1,"header__welcome"],[1,"polygon__welcome"],[1,"container__welcome"],[1,"image__welcome"],["src","https://pbs.twimg.com/profile_images/1269363692476477445/5GNMXm7-_400x400.jpg","alt","Alfonso Salces"],[1,"title__welcome"],[1,"pf-container"],[3,"skills"],["class","pf-fab",3,"click",4,"ngIf"],[1,"pf-fab",3,"click"]],template:function(t,e){1&t&&(i.Ub(0,"div",0,1),i.Ub(2,"div",2),i.Pb(3,"pf-main-toolbar"),i.Tb(),i.Ub(4,"div",3),i.Pb(5,"div",4),i.Ub(6,"div",5),i.Ub(7,"div",6),i.Pb(8,"img",7),i.Tb(),i.Ub(9,"div",8),i.Ac(10),i.hc(11,"translate"),i.Tb(),i.Tb(),i.Tb(),i.Tb(),i.Ub(12,"div",9),i.Pb(13,"skills-component",10),i.Tb(),i.zc(14,k,3,0,"div",11)),2&t&&(i.Cb(10),i.Cc(" ",i.ic(11,3,"public.header.presentation")," "),i.Cb(3),i.lc("skills",e.skills),i.Cb(1),i.lc("ngIf",e.showFab))},directives:[O,C,o.k,u.a],pipes:[m.c],styles:['.primary-filled[_ngcontent-%COMP%]{background-color:#162839;color:#73c8c6}.secondary-filled[_ngcontent-%COMP%]{background-color:#73c8c6;color:#f3f0f0}.primary-outlined[_ngcontent-%COMP%]{border:1px solid #162839;color:#162839;background:transparent}.secondary-outlined[_ngcontent-%COMP%]{border:1px solid #73c8c6;color:#73c8c6;background:transparent}.bg-primary[_ngcontent-%COMP%]{background-color:#162839}.bg-secondary[_ngcontent-%COMP%]{background-color:#73c8c6}.primary[_ngcontent-%COMP%]{color:#162839}.secondary[_ngcontent-%COMP%]{color:#73c8c6}.primary-shadow[_ngcontent-%COMP%]{box-shadow:10px 10px 5px 0 #162839}.secondary-shadow[_ngcontent-%COMP%]{box-shadow:10px 10px 5px 0 #73c8c6}@font-face{font-family:DejaVu;src:url(DejaVuSansMono.4bb3391b827ef92a8bcd.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-Bold;src:url(DejaVuSansMono-Bold.8608c7eb92d996a15bb3.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-BoldOblique;src:url(DejaVuSansMono-BoldOblique.bf56c9314c4ef709102f.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:DejaVu-Oblique;src:url(DejaVuSansMono-Oblique.5a7e0ca971abf1808983.ttf) format("truetype");font-weight:400;font-style:normal}@font-face{font-family:Helvetica Bold Italic;src:url("Helvetica 76 Bold Italic.ea71f203564f7c9440f0.woff") format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Ultra Light;src:url(Helvetica25UltraLight_22433.c101efb1146f1a01d590.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Thin;src:url(Helvetica35Thin_22435.c7b977444c9f5213d2f7.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Black Italic;src:url(HelveticaNeueBlackItalic\\ 1.63401c5d6d0fbf0eddf8.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Bold;src:url(HelveticaNeueBold.9746238261ff2fd4644a.woff) format("woff");font-weight:300;font-style:normal}@font-face{font-family:Helvetica Neue Medium Italic;src:url(HelveticaNeueMediumItalic.35485a03a478543cda30.woff) format("woff");font-weight:300;font-style:normal}.main__welcome[_ngcontent-%COMP%]   .navbar__welcome[_ngcontent-%COMP%]{background-color:#162839;text-transform:uppercase}.pf-fab[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:5%;min-width:50px;height:50px;color:#f3f0f0;background-color:#162839;position:fixed;bottom:1em;right:1em;border-radius:8px}@media (max-width:767px){.container__welcome[_ngcontent-%COMP%]{background:#162839;color:#73c8c6;font-size:14px;display:flex;flex-direction:column;align-items:center;padding:2em 0}.container__welcome[_ngcontent-%COMP%]   .image__welcome[_ngcontent-%COMP%]{width:50%}.container__welcome[_ngcontent-%COMP%]   .image__welcome[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;border-radius:50%;border-color:#73c8c6 #73c8c6 #162839 #162839;border-style:solid;border-width:4px}.container__welcome[_ngcontent-%COMP%]   .title__welcome[_ngcontent-%COMP%]{text-align:justify;margin-top:1em;width:90%}}@media (min-width:768px){.header__welcome[_ngcontent-%COMP%]   .polygon__welcome[_ngcontent-%COMP%]{background-color:#162839;transform:skewY(8deg);width:100%;height:80vh;max-height:400px;overflow:hidden;transform-origin:100%;box-sizing:border-box}.header__welcome[_ngcontent-%COMP%]   .container__welcome[_ngcontent-%COMP%]{position:absolute;top:10%;left:20%;height:300px;width:60%;color:#73c8c6;font-family:DejaVu-Oblique;display:flex;flex-direction:row;align-items:center}.header__welcome[_ngcontent-%COMP%]   .container__welcome[_ngcontent-%COMP%]   .image__welcome[_ngcontent-%COMP%]{width:30%;margin-left:2em}.header__welcome[_ngcontent-%COMP%]   .container__welcome[_ngcontent-%COMP%]   .image__welcome[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:70%;border-radius:50%;border-color:#73c8c6 #73c8c6 #162839 #162839;border-style:solid;border-width:4px}.header__welcome[_ngcontent-%COMP%]   .container__welcome[_ngcontent-%COMP%]   .title__welcome[_ngcontent-%COMP%]{text-align:justify;width:70%;margin-right:3em}}']}),t})()}];let P=(()=>{class t{}return t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({factory:function(e){return new(e||t)},imports:[[c.b.forChild(v)],c.b]}),t})();var x=n("FpXt"),j=n("XI1q"),T=n("CeNN");let L=(()=>{class t{}return t.\u0275mod=i.Mb({type:t}),t.\u0275inj=i.Lb({factory:function(e){return new(e||t)},imports:[[o.c,P,x.a,j.a,T.a]]}),t})()}}]);