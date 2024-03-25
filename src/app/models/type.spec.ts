import { Type } from './type';

describe('Type', () => {
  it('should create an instance', () => {
    expect(new Type()).toBeTruthy();
  });
  it('Should give an empty string for lastname attribute', () => {
    const type = new Type() //Instancie dans type la classe Type
    expect(type.lastname).toEqual('')
  })
  it('Should give an instance of Date', () => {
    const type = new Type()
    expect(type.birthDate).toBeInstanceOf(Date)
  })
});
