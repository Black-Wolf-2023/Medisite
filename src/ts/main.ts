let nav_actions = {
    ele: document.querySelectorAll('nav .collapse ul li a'),
    nav:document.querySelector("#navigation .container nav"),
    nav_conatiner:document.querySelector("#navigation .container"),
    activer: function () {
        //======== Active Link ==========>
        this.ele.forEach(e => {
            e.addEventListener('click', (s: any) => {
                this.ele.forEach(elemn => {
                    elemn.classList.remove("active_link");
                })
                s.target.classList.contains("active_link") ?
                    s.target.classList.remove("active_link") :
                    s.target.classList.add("active_link")
            })
        })
        //======== Active Link ==========>

        //======== Active Nav ==========>
        window.addEventListener('scroll', (event) => {
            this.nav?.classList.toggle("position-fixed", window.scrollY > 20);
            this.nav?.classList.toggle("w-100", window.scrollY > 20);
            this.nav?.classList.toggle("bg-color-dark_primary_color", window.scrollY > 20);
            this.nav?.classList.toggle("p-3", window.scrollY > 20);

            this.nav_conatiner?.classList.toggle("p-0", window.scrollY > 20);
            this.nav_conatiner?.classList.toggle("nav_animater", window.scrollY > 20);
            this.nav_conatiner?.classList.toggle("w-100", window.scrollY > 20);
            this.nav_conatiner?.classList.toggle("m-0", window.scrollY > 20);
            this.nav_conatiner?.classList.toggle("position-fixed", window.scrollY > 20);
        });
        
        //======== Active Nav ==========>
    },

}

nav_actions.activer()

