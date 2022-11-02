import { fetchPost } from "@/utils/utils";
import { observable, action } from "mobx";

class PostStore {
  @observable post = "";
  @observable postId = "";

  constructor(initialData: any = {}) {
    this.post = initialData.post;
    this.postId = initialData.postId;
  }

  //   async fetch(id: string) {
  //     const response = await fetchPost(id);
  //     this.setPost(response);
  //     this.setPostId(id);
  //   }

  @action setPost(post: string) {
    this.post = post;
  }

  @action setPostId(id: string) {
    this.postId = id;
  }

  __data() {
    return {
      post: this.post,
      postId: this.postId,
    };
  }
}

export default PostStore;
