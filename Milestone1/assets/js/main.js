const app = new Vue({
    el: "#app",
    data: {
        api_key: "",
        query: "",
        film: null,
    },
    methods: {
        searchFilm() {
            console.log(this.query);
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.api_key + '&query=' + this.query)
                .then(response => {

                    console.log(response.data.results);
                    this.film = response.data.results;
                    // this.dischi = response.data.response;
                    // this.dischi = this.dischi.sort((a, b) => b.year - a.year);
                })
        }
    },
    mounted() {


    },
    computed: {
    },
})