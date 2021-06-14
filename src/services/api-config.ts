export interface ApiConfig {
    /**
     * The URL of the api.
     */
    url: string
    token: string

    /**
     * Milliseconds before we timeout the request.
     */
    timeout: number
}

export const DEFAULT_API_CONFIG: ApiConfig = {
    url: "https://jsonplaceholder.typicode.com",

    token: "/todos/1",

    timeout: 60000,
}
