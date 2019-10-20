const merge = (a: Object, b: Object): Object => (!!a && !!b ? { ...a, ...b } : a || b)

const reducer = (styles: Object, style: sls): Object => {
  if(!style) {
    return styles
  }
  if (Array.isArray(style)) {
    const [object, condition] = style
    return condition ? merge(styles, object) : styles
  }
  return merge(styles, style)
}

const ssx = (...styles: Array<sls>): Object => styles.reduce(reducer, {})

type sls = [object, boolean] | Object | undefined | null

export default ssx
