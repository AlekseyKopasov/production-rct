import { classNames } from './classNames';

describe('classNames', () => {
  test('С одним параметром', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('С дополнительными параметрами', () => {
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
  });
  test('С модами', () => {
    expect(classNames('someClass', { hovered: true, selected: true }, ['class1', 'class2'])).toBe('someClass class1 class2 hovered selected');
  });
  test('С модами, один false', () => {
    expect(classNames('someClass', { hovered: true, selected: false }, ['class1', 'class2'])).toBe('someClass class1 class2 hovered');
  });
  test('С модами, один undefined', () => {
    expect(classNames('someClass', { hovered: true, selected: undefined }, ['class1', 'class2'])).toBe('someClass class1 class2 hovered');
  });
});
