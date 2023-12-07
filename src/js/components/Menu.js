export default function Menu(){

    return {
        menuOpen: false,

        init() {
            this.menuOpen = window.matchMedia('(min-width: 768px)').matches
            window.addEventListener('resize', this.refreshMenuByResize);
        },

        toggleMenu(){
            console.log('ok')
            this.menuOpen =!this.menuOpen;
        },


        refreshMenuByResize() {
            console.log(window.matchMedia('(min-width: 768px)').matches)
            this.menuOpen = window.matchMedia('(min-width: 768px)').matches
        },
    }
}
