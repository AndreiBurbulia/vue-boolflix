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
                        console.log(element.vote_average);
                        element.vote_average = parseInt(element.vote_average / 2);

                    })
                    this.film.forEach(element => {
                        if (element.original_language === "en") {
                            element.original_language = "gb"
                        } else if (element.original_language === "ja") {
                            element.original_language = "jp"
                        }
                    });

                });


            axios.get('https://api.themoviedb.org/3/search/tv?api_key=' + this.api_key + '&query=' + this.query)
                .then(response => {
                    this.serieTv = response.data.results;

                    this.serieTv.forEach(element => {
                        if (element.original_language === "en") {
                            element.original_language = "gb"
                        } else if (element.original_language === "ja") {
                            element.original_language = "jp"
                        }
                    });
                })
        }
    },
    mounted() {


    },
    computed: {
    },
})