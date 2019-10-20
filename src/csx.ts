const SPACE = ' '

const concat = (a: string, b: string): string => (!!a && !!b ? a + SPACE + b : a || b)

const reducer = (classNames: string, className: cls): string => {
  switch (typeof className) {
    case 'undefined':
      return classNames
    case 'string':
      return concat(classNames, className)
    case 'number':
      return concat(classNames, `${className}`)
    default: {
      if (className === null) {
        return classNames
      }
      const isTruthy = (property: string) =>
        className.hasOwnProperty(property) && className[property]
      return concat(
        classNames,
        Object.keys(className)
          .filter(isTruthy)
          .join(SPACE)
      )
    }
  }
}

const csx = (...classNames: Array<cls>): string => classNames.reduce(reducer, '')

type cls = string | number | { [key: string]: boolean } | undefined | null

export default csx
