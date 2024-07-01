/// <reference types="vite/client" />

export interface Data {
    // Add type declarations for the data module here
    language: Language
}

export interface Language {
    label: string,
    value: string,
    script: string
}