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
}

export interface IPost{
    id: number,
    author: IUser,
    author_username: string,
    created_date: Date,
    title: string,
    body:string,
    post_likes: number,
    post_comments: number,
    comments: IComment[]
}

export interface IComment{
    id: number,
    author: IUser,
    created_date: Date,
    text: string,
    comment_likes: number
}

export interface ICategory{
  name: string,
  id: number,
}
