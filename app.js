/*let line = document.getElementsByClassName('playin')
function play(){
    for (let i = 0; i< line.length; i++){
        line[i].classList.toggle('stroke')
    }
}*/
const app = Vue.createApp({
    data(){
        return{
            song: "cock",
            stop:true
        }
    },
    methods:{
        play(){
            this.stop = !this.stop
        }
    }
})
app.mount('#app')