import { PostService } from './05-dependency-b';
import { JsonDataBaseService,WebApiPostService } from './05-dependency-c';


(async () => {

    const provider = new WebApiPostService();

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })

})();