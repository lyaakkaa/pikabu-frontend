export interface IUser{
    id: number,
    username: string,
    password: string

}

export interface AuthToken{
    token: string,
}

export interface IPost{
    id: number,
    author: IUser,
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
