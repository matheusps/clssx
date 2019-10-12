const SPACE = ' '

const concat = (a: string, b: string): string => (!!a && !!b ? a + SPACE + b : a || b)

const reducer = (state: string, param: cls): string => {
  switch (typeof param) {
    case 'string':
      return concat(state, param)
    case 'number':
      return concat(state, `${param}`)
    default: {
      const isTruthy = (property: string) => param.hasOwnProperty(property) && param[property]
      return concat(
        state,
        Object.keys(param)
          .filter(isTruthy)
          .join(SPACE)
      )
    }
  }
}

const clssx = (...params: Array<cls>): string => params.reduce(reducer, '')

type cls = string | number | { [key: string]: boolean }

export default clssx
