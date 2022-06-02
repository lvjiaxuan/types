type PartialKeys<T, K extends keyof T> ={ [P in K]?: T[P] } & { [P in Exclude<keyof T, K>]: T[P] }

type obj = {
  a: string
  b: string
}

type res = PartialKeys<obj, 'a'>

/*
  type res = {
    a?: string | undefined;
  } & {
    b: string;
  }
*/
