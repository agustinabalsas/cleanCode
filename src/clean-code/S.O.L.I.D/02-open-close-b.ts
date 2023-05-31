//import axios from 'axios';
import { HttpClient } from "./02-open-close-c"; //clase propia

//problema -> 
//tiene una fuerte dependencia a axios, es código que no controlamos, por lo que no es lo mejor

//solución ->
// desacoplar la importación y generar una clase propia que la gestione

export class TodoService { 

    constructor(private httpClient : HttpClient){}

    async getTodoItems() {
        const { data } = await this.httpClient.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}

export class PostService {

    constructor(private httpClient : HttpClient){}

    async getPosts() {
        const { data } = await this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}

export class PhotosService {

    constructor(private httpClient : HttpClient){}

    async getPhotos() {
        const { data } = await this.httpClient.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}