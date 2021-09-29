import firebase from 'firebase/app';
import { SuspenseSubject } from './SuspenseSubject';
export declare type ReactFireGlobals = {
    _reactFireDatabaseCachedQueries: Array<firebase.database.Query>;
    _reactFireFirestoreQueryCache: Array<firebase.firestore.Query>;
    _reactFirePreloadedObservables: Map<string, SuspenseSubject<any>>;
};
export declare class ReactFireError extends Error {
    readonly code: string;
    customData?: Record<string, unknown> | undefined;
    readonly name = "ReactFireError";
    constructor(code: string, message: string, customData?: Record<string, unknown> | undefined);
}
export interface ReactFireOptions<T = unknown> {
    idField?: string;
    initialData?: T | any;
    /**
     * @deprecated use initialData instead
     */
    startWithValue?: T | any;
    suspense?: boolean;
}
export declare function checkOptions(options: ReactFireOptions, field: string): any;
export declare function checkinitialData(options: ReactFireOptions): any;
export declare function checkIdField(options: ReactFireOptions): any;
export * from './auth';
export * from './database';
export * from './firebaseApp';
export * from './firestore';
export * from './performance';
export * from './remote-config';
export * from './storage';
export * from './useObservable';
