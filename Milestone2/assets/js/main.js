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

                    console.log(response.data.results);
                    this.film = response.data.results;
                    // this.film = this.film.map()
                    // console.log(this.film.map(this.film.original_languages));
                });


            axios.get('https://api.themoviedb.org/3/search/tv?api_key=' + this.api_key + '&query=' + this.query)
                .then(response => {
                    console.log(response.data.results);
                    this.serieTv = response.data.results;
                })
        }
    },
    mounted() {


    },
    computed: {
    },
})