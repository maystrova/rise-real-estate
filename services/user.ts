export type User = {
    avatar: string
    name: string
    email: string
    id: string | number
}

export let DEFAULT_USER: User = {
    avatar: '',
    name: 'User',
    id: 1,
    email: 'user@mail.com',
}
