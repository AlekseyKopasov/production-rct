import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('С одним параметром', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('С дополнительными параметрами', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });
  test('С модами', () => {
    const expected = 'someClass class1 class2 hovered selected';
    expect(classNames(
      'someClass',
      { hovered: true, selected: true },
      ['class1', 'class2'],
    )).toBe(expected);
  });
  test('С модами, один false', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, selected: false },
      ['class1', 'class2'],
    )).toBe(expected);
  });
  test('С модами, один undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, selected: undefined },
      ['class1', 'class2'],
    )).toBe(expected);
  });
});
