/**
 * # 指定部分属性为可填，则其它属性为必填的类型
 * 
 * [Playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBACghgJ2ASzgGwNIRAZwDwAqANFBlBAB7AQB2AJjlANbYD2AZlAQHxQC8AbygBtGFGQ1SAXQD8ALi6ipUAL5QAZFCGjxkgKIUAxmgCudCHhYgOXEhm5SFBJaoBQr0JCisARgCt+LVcoEKg4BRxgBAkAc2DQnwio2NcVd09oBAhGPlhEFHQsXDxfPxIAcjhy7iA)
 */

type PartialKeys<T, K extends keyof T> ={ [P in K]?: T[P] } & { [P in Exclude<keyof T, K>]: T[P] }
