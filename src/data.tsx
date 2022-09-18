import { v4 as uuid } from "uuid";

export const defaultUser = {
    id: uuid(),
    username: "username",
    profile_image: "https://instagram.com/static/images/anonymousUser.jpg/23e7b3b2a737.jpg"
};

export function getDefaultUser(){
    return defaultUser;
}

export const defaultPost = {
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

export const defaultCurrentUser = {
    id: uuid(),
    username: "arandomusername",
    name: "myself",
    profile_image:
      "https://scontent-ort2-2.cdninstagram.com/v/t51.2885-19/s150x150/82559664_3161307737426774_8687807477812559872_n.jpg?_nc_ht=scontent-ort2-2.cdninstagram.com&_nc_ohc=llb3VCRb-mkAX_XTEi3&oh=64f0323db646c01299e513e3337b83ff&oe=5E8620BF",
    website: "https://www.google.com/",
    email: "me@gmail.com",
    bio: "Hello there!!",
    phone_number: "555-555-5555",
    posts: Array.from({ length: 10 }, () => getDefaultPost()),
    followers: [defaultUser],
    following: [defaultUser]
};

export const defaultNotifications = [
    {
        id: uuid(),
        type: "follow",
        user: defaultUser,
        created_at: "2020-02-29T03:08:14.522421+00:00"
    },
    {
        id: uuid(),
        type: "like",
        user: defaultUser,
        post: defaultPost,
        created_at: "2020-02-29T03:08:14.522421+00:00"
    }
];