const app = new Vue({
    el: "#app",
    data: {
        api_key: "eecb915ee69c021ca80167a8f3f1f0b5",
        query: "",
        film: null,
        serieTv: null,
    },
    methods: {
        searchFilm() {
            console.log(this.query);
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.api_key + '&query=' + this.query)
                .then(response => {

                    this.film = response.data.results;

                    this.film.forEach(element => {
                        element.vote_average = parseInt(element.vote_average / 2);
                        element.release_date = dayjs(element.release_date).format('YYYY')
                    })

                    this.film = this.film.sort((a, b) => b.release_date - a.release_date)
                });



            axios.get('https://api.themoviedb.org/3/search/tv?api_key=' + this.api_key + '&query=' + this.query)
                .then(response => {
                    this.serieTv = response.data.results;

                    this.serieTv = this.serieTv.sort((a, b) => b.vote_average - a.vote_average)

                    this.serieTv.forEach(element => {
                        element.vote_average = parseInt(element.vote_average / 2);

                    })
                })
        }
    },
    mounted() {


    },
    computed: {
    },
})