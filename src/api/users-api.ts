import axios from 'axios';

const reqres = axios.create({
    baseURL: 'https://reqres.in/api'
});

export const usersAPI = {
    getUsers(per_page: number = 12, total: number = 12) {
        return reqres.get<UsersResponseType>('/users', {params: {
                per_page,
                total,
                'b&a': 'b&a'
            }})
    }
}

export type UserType = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export type UsersResponseType = {
    data: UserType[]
    page: number;
    per_page: number;
    support: {
        text: string;
        url: string;
    };
    total: number;
    total_pages: number;
}