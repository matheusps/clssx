function clssx(params: cls): string {
  if (typeof params === 'string' || typeof params === 'number') return `${params}` || ''

  const SPACE = ' '
  const isTruthy = (param: string) => params.hasOwnProperty(param) && params[param]

  return Object.keys(params)
    .filter(isTruthy)
    .join(SPACE)
}

type cls = string | number | { [key: string]: boolean }

export default clssx
