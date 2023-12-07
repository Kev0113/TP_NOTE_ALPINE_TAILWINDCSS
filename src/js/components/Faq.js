export default function Faq(){
    return{
        openFaq: false,
        openQuestion: 0,

        init(){
            this.openFaq = false
        },

        toggleFaq(){
            console.log(this.$el.openFaq)
            this.openFaq =!this.openFaq;
            // this.$el.openFaq = true
        },

        toggleQuestion(id){
            this.openQuestion === id ? this.openQuestion = null : this.openQuestion = id;
        }
    }

}
