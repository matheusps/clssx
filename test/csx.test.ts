import csx from '../src/csx'

describe('Clssx', () => {
  it('works with undefined', () => {
    expect(csx(undefined)).toBe('')
    expect(csx('flex', 'bold', undefined)).toBe('flex bold')
    expect(csx('flex', undefined, 'bold')).toBe('flex bold')
  });

  it('works with null', () => {
    expect(csx(null)).toBe('')
    expect(csx('flex', 'bold', null)).toBe('flex bold')
    expect(csx('flex', null, 'bold')).toBe('flex bold')
  });

  it('Works with strings', () => {
    expect(csx('')).toBe('')
    expect(csx('flex', 'bold', 't-small')).toBe('flex bold t-small')
    expect(csx('flex w-100 pa5')).toBe('flex w-100 pa5')
    expect(csx('flex w-100 pa5 m20 text-center')).toBe('flex w-100 pa5 m20 text-center')
  })

  it('Works with numbers', () => {
    expect(csx(0)).toBe('0')
    expect(csx(1, 10, 20, 40)).toBe('1 10 20 40')
    expect(csx(200)).toBe('200')
  })

  it('Works with maps', () => {
    expect(csx({ flex: true, 'w-100 text-center': true })).toBe('flex w-100 text-center')
    expect(csx({ flex: false, 'w-100 text-center': true })).toBe('w-100 text-center')
    expect(csx({ flex: false, 'w-100 text-center': false })).toBe('')
    expect(csx({ flex: false, 'w-100 text-center': false }, { 't-small': true, pa4: false })).toBe(
      't-small'
    )
    expect(csx({ flex: true, 'w-100 text-center': false }, { 't-small': true, pa4: false })).toBe(
      'flex t-small'
    )
    expect(csx({ flex: true, 'w-100 text-center': true }, { 't-small': true, pa4: false })).toBe(
      'flex w-100 text-center t-small'
    )
    expect(csx({ flex: true, 'w-100 text-center': true }, { 't-small': true, pa4: true })).toBe(
      'flex w-100 text-center t-small pa4'
    )
  })

  it('Works with mixed types', () => {
    expect(csx('flex', 23, { 'w-100 text-center': true }, undefined, null)).toBe('flex 23 w-100 text-center')
    expect(
      csx('flex', undefined, 23, { 'w-100 text-center': true }, { 't-small': true, pa4: true }, { xs: false }, null),
    ).toBe('flex 23 w-100 text-center t-small pa4')
  })
})
