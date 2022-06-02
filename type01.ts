const props = {
  num: {
    value: 10
  },
  bol: {
    value: false
  },
  str: {
    value: 'string'
  }
}

type PropsValueType<T extends object> = {
  [P in keyof T]: T[P] extends { value: infer V } ? V : never
}

type res =  PropsValueType<typeof props>

/**
  type res = {
    num: number;
    bol: boolean;
    str: string;
  }
 */
