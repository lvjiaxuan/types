/**
 * # 指定一个二层属性类型为一层属性类型的类型
 * 
 * [Playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBAsghmACgJwPZgCrggHg1CAD2AgDsATAZylQCMArCAY2ABooBpA4sqqAawghUAMyhxSIAHxQAvFADeAKChQA2oigBLUgKGioGALoAuQxqPcSFags5mdIiMigA1KAF8oAfjdQzpBAAbs5KHkpKTKiklMBQYGhg1PLKqqQArgC2ZqmqUEFwADbpEGYAjAAMKp6s1bSohTnVqgXFpVAiRZQQ1R61qrHITXn5RSVmAOSDOgDmE71hEaCQUMgQybAIKOhYkDjLEAYJ6JTsE60lE1JAA)
 */

type MapPropType<T extends object, K extends keyof any> = {
  [P in keyof T]: T[P] extends { K: infer V } ? V : never
}
