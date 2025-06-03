import axios  from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        api_key: '34654e9cf57e602d1f094457e5c705ec',
        language: 'pt-BR',
        page: 1
    }
})

export default api

/* curl --request GET \
     --url 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' \
     --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNDY1NGU5Y2Y1N2U2MDJkMWYwOTQ0NTdlNWM3MDVlYyIsIm5iZiI6MTc0ODg3OTA4NC4zNzIsInN1YiI6IjY4M2RjNmVjNjJjNjBkNDI1MjI4OGZjZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m3pM4atxnS69gm5281ZpeEDJOnC_qfxv1-7DW5LhAnU' \
     --header 'accept: application/json' */