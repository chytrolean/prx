
const app = Vue.createApp({
    data(){
        return{
            current: {},
            favorite: [],
            fav: false,
            index: 0,
            stop:true,
            list:true,
            isPlaying: false,
            search: "",
            songs: [
                {
                    name: "Blessed",
                    author:"Viktor Sheen",
                    src: 'Blessed.mp3',
                    img: 'music.jpg'
                },
                {
                    name: "Piko v nose",
                    author:"Steve Sniff",
                    src: 'piko-v-nose.mp3',
                    img:'music.jpg'
                },
                {
                    name: "Hannah Montana VIP",
                    author:"Calin",
                    src: 'Hannah-Montana-VIP.mp3',
                    img:'music.jpg'
                },
                {
                    name: "Blessed",
                    author:"Viktor Sheen",
                    src: 'Blessed.mp3',
                    img: 'music.jpg'
                },
                {
                    name: "Piko v nose",
                    author:"Steve Sniff",
                    src: 'piko-v-nose.mp3',
                    img:'music.jpg'
                },
                {
                    name: "Hannah Montana VIP",
                    author:"Calin",
                    src: 'Hannah-Montana-VIP.mp3',
                    img:'music.jpg'
                },
                {
                    name: "Blessed",
                    author:"Viktor Sheen",
                    src: 'Blessed.mp3',
                    img: 'music.jpg'
                },
                {
                    name: "Piko v nose",
                    author:"Steve Sniff",
                    src: 'piko-v-nose.mp3',
                    img:'music.jpg'
                },
                {
                    name: "Hannah Montana VIP",
                    author:"Calin",
                    src: 'Hannah-Montana-VIP.mp3',
                    img:'music.jpg'
                },
                {
                    name: "Blessed",
                    author:"Viktor Sheen",
                    src: 'Blessed.mp3',
                    img: 'music.jpg'
                },
                {
                    name: "Piko v nose",
                    author:"Steve Sniff",
                    src: 'piko-v-nose.mp3',
                    img:'music.jpg'
                },
                {
                    name: "Hannah Montana VIP",
                    author:"Calin",
                    src: 'Hannah-Montana-VIP.mp3',
                    img:'music.jpg'
                },
                {
                    name: "Blessed",
                    author:"Viktor Sheen",
                    src: 'Blessed.mp3',
                    img: 'music.jpg'
                },
                {
                    name: "Piko v nose",
                    author:"Steve Sniff",
                    src: 'piko-v-nose.mp3',
                    img:'music.jpg'
                },
                {
                    name: "Hannah Montana VIP",
                    author:"Calin",
                    src: 'Hannah-Montana-VIP.mp3',
                    img:'music.jpg'
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
            console.log(this.songs)
            console.log(this.favorite)

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
        },
        favAdd(){
            this.favorite.push(this.current)
            alert(this.current.name + ' was Added!')
        },
        favPlay(song) {
            if(typeof song.src != 'undefined'){
                this.current = song
                this.musicPlayer.src = this.favorite.src
            }
           
            this.musicPlayer.play()
            this.isPlaying = true
        },
        favoSwap(){
            this.fav = !this.fav
            if(this.fav) console.log('kokot')
            else console.log('kripl')
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
        },
        favoFilter(){
            return this.favorite.filter(a => {
                return a.name.toLowerCase().indexOf(this.search.toLowerCase()) != - 1;
            })
        }
    }
})
app.mount('#app')