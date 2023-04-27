export interface IUser{
    id: number,
    username: string,
    password: string,
    total_rating: number,
    role: string
}

export interface AuthToken{
    token: string,
    id: number,
    role: string,
}

export interface IPost{
    id: number,
    author: number,
    author_username: string,
    created_date: Date,
    title: string,
    body:string,
    category: number,
    post_likes: number,
    post_comments: number,
    comments: IComment[]
}

export interface IComment{
    id: number,
    author: number,
    author_username: string,
    created_date: Date,
    text: string,
    comment_likes: number
}

export interface ICategory{
  name: string,
  id: number,
}
