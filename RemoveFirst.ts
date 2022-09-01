type RemoteFirst<T extends unknown[]> = T extends [f: infer F, ...rest: infer R] ? R : never
