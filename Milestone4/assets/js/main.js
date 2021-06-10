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
                    // console.log(response.data.results.release_date);
                    // this.film = this.film.sort((a, b) => b.release_date - a.release_date);

                    this.film.forEach(element => {
                        element.vote_average = parseInt(element.vote_average / 2);
                        console.log(element.release_date);
                        element.release_date = dayjs(element.release_date).format('YYYY')
                        console.log(element.release_date);

                    })

                    this.film = this.film.sort((a, b) => b.release_date - a.release_date)

                });


            axios.get('https://api.themoviedb.org/3/search/tv?api_key=' + this.api_key + '&query=' + this.query)
                .then(response => {
                    this.serieTv = response.data.results;

                    this.serieTv.forEach(element => {
                        // console.log(element.vote_average);
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