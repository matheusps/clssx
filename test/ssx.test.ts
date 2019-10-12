import ssx from '../src/ssx'

describe('ssx', () => {
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

  it('Works with arrays and objects', () => {
    expect(ssx({}, [])).toEqual({})
    expect(
      ssx({ display: 'flex' }, [{ color: '#000' }, true], [{ alignContent: 'center' }, true])
    ).toEqual({
      display: 'flex',
      color: '#000',
      alignContent: 'center'
    })
    expect(
      ssx(
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
