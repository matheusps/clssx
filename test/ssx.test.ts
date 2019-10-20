import ssx from '../src/ssx'

describe('ssx', () => {
  it('works with undefined', () => {
    expect(ssx(undefined)).toEqual({})
    expect(ssx({ color: '#000' }, { alignContent: 'center' }, undefined)).toEqual({
      color: '#000',
      alignContent: 'center'
    })
  });

  it('works with null', () => {
    expect(ssx(null)).toEqual({})
    expect(ssx({ color: '#000' }, { alignContent: 'center' }, null)).toEqual({
      color: '#000',
      alignContent: 'center'
    })
  });

  it('Works with objects', () => {
    expect(ssx({})).toEqual({})
    expect(ssx({ color: '#000' }, { alignContent: 'center' })).toEqual({
      color: '#000',
      alignContent: 'center'
    })
  })

  it('Works with arrays', () => {
    expect(ssx([])).toEqual({})
    expect(ssx([{ color: '#000' }, true], [{ alignContent: 'center' }, true])).toEqual({
      color: '#000',
      alignContent: 'center'
    })
    expect(ssx([{ color: '#000' }, true], [{ alignContent: 'center' }, false])).toEqual({
      color: '#000'
    })
  })

  it('Works with undefined, null, arrays and objects', () => {
    expect(ssx({}, [])).toEqual({})
    expect(
      ssx(null, { display: 'flex' }, [{ color: '#000' }, true], undefined, [{ alignContent: 'center' }, true])
    ).toEqual({
      display: 'flex',
      color: '#000',
      alignContent: 'center'
    })
    expect(
      ssx(
        null,
        undefined,
        { display: 'inline-block' },
        [{ color: '#000' }, true],
        [{ alignContent: 'center' }, false]
      )
    ).toEqual({
      display: 'inline-block',
      color: '#000'
    })
  })
})
