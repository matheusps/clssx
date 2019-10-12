import clssx from '../src/clssx'

describe("Clssx", () => {
  it("Works with strings", () => {
    expect(clssx('')).toBe('')
    expect(clssx('flex')).toBe('flex')
    expect(clssx('flex w-100 pa5')).toBe('flex w-100 pa5')
    expect(clssx('flex w-100 pa5 m20 text-center')).toBe('flex w-100 pa5 m20 text-center')
  })

  it("Works with numbers", () => {
    expect(clssx(0)).toBe('0')
    expect(clssx(1)).toBe('1')
    expect(clssx(200)).toBe('200')
  })

  it("Works with maps", () => {
    expect(clssx({ 'flex': true, 'w-100 text-center': true})).toBe('flex w-100 text-center')
    expect(clssx({ 'flex': false, 'w-100 text-center': true})).toBe('w-100 text-center')
    expect(clssx({ 'flex': false, 'w-100 text-center': false})).toBe('')
  })
})
