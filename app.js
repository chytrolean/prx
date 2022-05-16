/*let line = document.getElementsByClassName('playin')
function play(){
    for (let i = 0; i< line.length; i++){
        line[i].classList.toggle('stroke')
    }
}*/
const app = Vue.createApp({
    data(){
        return{
            current: {},
            index: 0,
            stop:true,
            list:true,
            isPlaying: false,
            search: "",
            songs: [
                {
                    name: "Blessed",
                    author:"Viktor Sheen",
                    src: 'Blessed.mp3'
                },
                {
                    name: "Piko v nose",
                    author:"Steve Sniff",
                    src: 'piko-v-nose.mp3'
                },
                {
                    name: "Hannah Montana VIP",
                    author:"Calin",
                    src: 'Hannah-Montana-VIP.mp3'
                },
            ],
            musicPlayer: new Audio()
        }
    },
    methods:{
        play(song){
            if(typeof song.src != 'undefined'){
                this.current = song
                this.musicPlayer.src = this.current.src
            }
            console.log(typeof(this.current.src))

            this.stop = false
            this.musicPlayer.play()
            this.isPlaying = true
        },
        stoped(){
            this.musicPlayer.pause()
            this.stop = true
        },
        listed(){
            this.list = !this.list
        },
        seek(){
            this.list = !this.list
            this.$nextTick(() => this.$refs.inp.focus())  
      }
    },
    created(){
        this.current = this.songs[this.index]
        this.musicPlayer.src = this.current.src
    },
    computed: {
        filtered(){
            return this.songs.filter(p => {
                return p.name.toLowerCase().indexOf(this.search.toLowerCase()) != - 1;
            })
        }
    }
})
app.mount('#app')