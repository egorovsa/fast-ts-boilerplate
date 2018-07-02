import '';

declare module '*.css';
declare module '*.less';
declare module '*.styl';
declare module '*.scss' {
    const value: any;
    export default value;
}

declare module '*.json' {
    const value: any;
    export default value;
}

declare global {
    export interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any;
        devToolsExtension: any;
    }
}
