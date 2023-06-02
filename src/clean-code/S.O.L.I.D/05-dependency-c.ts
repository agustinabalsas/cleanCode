import localPosts from '../DATA/local-database.json'
import { Post } from './05-dependency-b';


export abstract class PostProvider {
    abstract getPosts(): Promise<Post[]>
}

export class JsonDataBaseService {

    async getPosts() {
        return localPosts;
    }

}

export class WebApiPostService implements PostProvider {

    async getPosts(): Promise<Post[]> {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await resp.json();

        return posts;
    }

}