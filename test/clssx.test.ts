import clssx from '../src/clssx'

describe('Clssx', () => {
  it('Works with strings', () => {
    expect(clssx('')).toBe('')
    expect(clssx('flex', 'bold', 't-small')).toBe('flex bold t-small')
    expect(clssx('flex w-100 pa5')).toBe('flex w-100 pa5')
    expect(clssx('flex w-100 pa5 m20 text-center')).toBe('flex w-100 pa5 m20 text-center')
  })

  it('Works with numbers', () => {
    expect(clssx(0)).toBe('0')
    expect(clssx(1, 10, 20, 40)).toBe('1 10 20 40')
    expect(clssx(200)).toBe('200')
  })

  it('Works with maps', () => {
    expect(clssx({ flex: true, 'w-100 text-center': true })).toBe('flex w-100 text-center')
    expect(clssx({ flex: false, 'w-100 text-center': true })).toBe('w-100 text-center')
    expect(clssx({ flex: false, 'w-100 text-center': false })).toBe('')
    expect(
      clssx({ flex: false, 'w-100 text-center': false }, { 't-small': true, pa4: false })
    ).toBe('t-small')
    expect(clssx({ flex: true, 'w-100 text-center': false }, { 't-small': true, pa4: false })).toBe(
      'flex t-small'
    )
    expect(clssx({ flex: true, 'w-100 text-center': true }, { 't-small': true, pa4: false })).toBe(
      'flex w-100 text-center t-small'
    )
    expect(clssx({ flex: true, 'w-100 text-center': true }, { 't-small': true, pa4: true })).toBe(
      'flex w-100 text-center t-small pa4'
    )
  })

  it('Works with mixed types', () => {
    expect(clssx('flex', 23, { 'w-100 text-center': true })).toBe('flex 23 w-100 text-center')
    expect(
      clssx(
        'flex',
        23,
        { 'w-100 text-center': true },
        { 't-small': true, pa4: true },
        { xs: false }
      )
    ).toBe('flex 23 w-100 text-center t-small pa4')
  })
})
