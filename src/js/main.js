"use strict";
let nav_actions = {
    ele: document.querySelectorAll('nav .collapse ul li a'),
    nav: document.querySelector("#navigation .container nav"),
    nav_conatiner: document.querySelector("#navigation .container"),
    activer: function () {
        //======== Active Link ==========>
        this.ele.forEach(e => {
            e.addEventListener('click', (s) => {
                this.ele.forEach(elemn => {
                    elemn.classList.remove("active_link");
                });
                s.target.classList.contains("active_link") ?
                    s.target.classList.remove("active_link") :
                    s.target.classList.add("active_link");
            });
        });
        //======== Active Link ==========>
        //======== Active Nav ==========>
        window.addEventListener('scroll', (event) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j;
            (_a = this.nav) === null || _a === void 0 ? void 0 : _a.classList.toggle("position-fixed", window.scrollY > 20);
            (_b = this.nav) === null || _b === void 0 ? void 0 : _b.classList.toggle("w-100", window.scrollY > 20);
            (_c = this.nav) === null || _c === void 0 ? void 0 : _c.classList.toggle("bg-color-dark_primary_color", window.scrollY > 20);
            (_d = this.nav) === null || _d === void 0 ? void 0 : _d.classList.toggle("p-3", window.scrollY > 20);
            (_e = this.nav_conatiner) === null || _e === void 0 ? void 0 : _e.classList.toggle("p-0", window.scrollY > 20);
            (_f = this.nav_conatiner) === null || _f === void 0 ? void 0 : _f.classList.toggle("nav_animater", window.scrollY > 20);
            (_g = this.nav_conatiner) === null || _g === void 0 ? void 0 : _g.classList.toggle("w-100", window.scrollY > 20);
            (_h = this.nav_conatiner) === null || _h === void 0 ? void 0 : _h.classList.toggle("m-0", window.scrollY > 20);
            (_j = this.nav_conatiner) === null || _j === void 0 ? void 0 : _j.classList.toggle("position-fixed", window.scrollY > 20);
        });
        //======== Active Nav ==========>
    },
};
nav_actions.activer();
