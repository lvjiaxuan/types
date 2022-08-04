/**
 * # 指定 a 属性类型为键，b 属性为类型
 * 
 * [Playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBA0hIBVwQGICcD2BbACpsAzgDwBQUUCUEAHsBAHYAmBUAShAMYZqNEDW8DADMoAQ3ogANGIkA+SWVg4qtBsygCQwmVMUJlNOkxabt43bKgBeKAG9FAbRhQAlvQoPTI8wF0nOHx8ALigAUVo0UQ5gIgRPQW8JH2lbKAcAfRhlNyUfKBDnAF9ZB30fEkKSElBIKEYICDAAeQAjACtrO0dnHK8dYKgACkVyAB8u8kmoLiwwDHoGYBCAcgBBAEl6MABXYGWRyYA3UQAbbYgQgmA0NwBzA8qp8fsp8hm5hfolqDWAZQgTpw9gdyMczhcoFcbvR7lNHpNniDptgPosVqtWOJbhAcC4OAI0PtXlAwecQg56NssC0IGhpJTqbTynDFABKKAAMgmkxOohpJwA-JdrndFJVKtVkFA0BAWDY4IhkOhsHgMIQiPVGq02tJlu95otlrrSRBlrIgA)
 */

type KeyTypeFromProps<
  T extends Record<keyof any, any>,
  KP extends keyof any,
  TP extends keyof any,
> = {
  [K in T[keyof any][KP]]: Extract<T[keyof any], { [_KP in KP] : K }>[TP]
}