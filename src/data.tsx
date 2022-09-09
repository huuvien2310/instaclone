import { v4 as uuid } from "uuid";

const defaultUser = {
    id: uuid(),
    username: "username",
    profile_image: "https://instagram.com/static/images/anonymousUser.jpg/23e7b3b2a737.jpg"
};

export function getDefaultUser(){
    return defaultUser;
}

const defaultPost = {
    id: uuid(),
    likes: 10,
    caption: `<span class="">Do you know the 10 JavaScript concepts you need to learn React? 🤔⚛️👇<br>•<br>•<br>👉 Get the FREE cheatsheet to learn them now: bit.ly/10-js-tips 🔥</span>`,
    user: defaultUser,
    media:
    "https://assets.weforum.org/article/image/large_LrVQTyj8uByRPF1m_77TomiqDKBGOTWEZZWr3NUTqTE.jpg",
    comments: [],
    created_at: "2020-02-28T03:08:14.522421+00:00"
};

export function getDefaultPost() {
    return defaultPost;
}