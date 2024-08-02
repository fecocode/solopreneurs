import type { RAW_EDIT_USER_POST_REQUEST_BODY, RAW_DELETE_USER_POST_REQUEST_BODY, RAW_USER_POST_RESPONSE_DATA } from "~/types/api-spec.types";
import type { IPost } from "~/types/post.interface";

export class Post implements IPost {
  id: string;
  user_id: string;
  text: string;
  created_at?: Date;
  updated_at?: Date;
  deleted?: boolean | undefined;
  deleted_at?: Date | undefined;
  fav_count: number;
  replies_count: number;
  author: { username: string; avatar: string; };
  replies?: IPost[] | undefined;

  constructor(rawPost: RAW_USER_POST_RESPONSE_DATA) {
    this.id = rawPost.id
    this.user_id = rawPost.user_id
    this.text = rawPost.text
    this.created_at = rawPost.created_at
    this.updated_at = rawPost.updated_at
    this.fav_count = rawPost.fav_count
    this.replies_count = rawPost.replies_count
    this.author = {
      username: rawPost.author.username,
      avatar: rawPost.author.avatar
    }
    this.deleted = rawPost.deleted
    this.deleted_at = rawPost.deleted_at

    if (rawPost.replies) {
      this.replies = rawPost.replies.map((rawReply) => new Post(rawReply))
    }
  }

  toUpdate(): RAW_EDIT_USER_POST_REQUEST_BODY {
    return {
      text: this.text,
      id: this.id
    }
  }
  toDelete(): RAW_DELETE_USER_POST_REQUEST_BODY {
    return {
      id: this.id
    }
  }
}
