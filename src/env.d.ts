declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production'
            HOST: string
            DBUSER: string
            PASSWORD: string
            DATABASE: string
            DATABASE_URL: string
        }
    }
}

export {}