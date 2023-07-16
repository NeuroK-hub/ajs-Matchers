import sortByHealth from '../app';

test('сортировка массива, в котором у всех персонажей разный уровнь здоровья', () => {
  const received = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortByHealth(received)).toEqual(expected);
});

test('сортировка массива, в котором у нескольких персонажей одинаковый уровнь здоровья', () => {
  const received = [
    { name: 'мечник', health: 50 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 50 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 50 },
    { name: 'мечник', health: 50 },
  ];

  expect(sortByHealth(received)).toEqual(expected);
});

test('сортировка массива, в котором у всех персонажей одинаковый уровнь здоровья', () => {
  const received = [
    { name: 'мечник', health: 70 },
    { name: 'маг', health: 70 },
    { name: 'лучник', health: 70 },
  ];

  const expected = [
    { name: 'лучник', health: 70 },
    { name: 'маг', health: 70 },
    { name: 'мечник', health: 70 },
  ];

  expect(sortByHealth(received)).toEqual(expected);
});
