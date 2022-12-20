/**
 * # 指定 a 属性类型为键，b 属性为类型
 * 
 * [Playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBA0hIBVwQGICcD2BbACpsAzgDwBQUUCUEAHsBAHYAmBUAShAMYZqNEHBoAlvQDmAGigYARgCtOwAHxiysHFVoNmUANbwMAMwoBtfkNEBdZeQRqadJi10gDx08JGWSCqAF5XA93MjGBxzdXstN1EVAH4oAG8VcmCoYX8zD2DQ8wAuKABRWjQAQw5gIgQTAIsJeKgjAH0Q1PpVMLyYKABfBSMbcxUulTz6CAA3CDQSadBIKEYICDAAeVlfBJUjajyojzyACiSoAB8N8nOoLiwwDFH6YDyAcgBBAEl6MABXYEej8jHigAbT4QHbVERHIYXU6JC7kK43O4PKAvADKEEB8l+cKgAOBoKgu0hRxhf0u2ERDGRL1YxVEEBwgg4ujQ2LheJBeSM9E+WCkkwkPL5kwGFyhUAAlFAAGRnc6A4r8wExMEZQYkIYkWbQNAQFh+OCIZDobB4DCEIgLJarGQSR4I25Ux52jkQR4KaYAek9UAAAsACABaGiQMrBtCYKbaqgARnWhqQkBNuHwxDq2ygca6dudKPdJG9foDweooeA4cjWuQVAATPH4InUJgU+biFaVrI7fpirpc49u72PYX-UGQ-IK9wq3MIABmetGpPNs0WoyWPM5hRAA)
 */

type KeyTypeFromProps<
  T extends Record<string, object>,
  KP extends keyof T[string],
  TP extends keyof T[string],
> = T[string][KP] extends string
  ? {
    [K in T[string][KP]]: Extract<T[string], { [_KP in KP] : K }>[TP]
  }
  : never