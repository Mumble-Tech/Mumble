export interface USER {
    username: string,
    email: Promise<string>,
    password: Promise<string>,
}