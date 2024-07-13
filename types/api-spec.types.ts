// REQUESTS

export type RAW_CREATE_USER_POST_REQUEST_BODY = {
  text: string;
}

export type RAW_EDIT_USER_POST_REQUEST_BODY = {
  id: string;
  text: string;
}

export type RAW_DELETE_USER_POST_REQUEST_BODY = {
  id: string;
}

export type RAW_GET_POST_BY_ID = {
  id: string;
}

// RESPONSES

export type RAW_USER_POST_RESPONSE_DATA = {
  id: string;
  created_at: Date;
  updated_at?: Date;
  text: string;
  user_id: string;
  author: {
    username: string;
    avatar: string;
  };
  fav_count: number;
}

export type RAW_GET_POSTS_RESPONSE_DATA = {
  cache_timestamp: Date;
  request_timestamp: Date;
  posts: RAW_USER_POST_RESPONSE_DATA[];
}