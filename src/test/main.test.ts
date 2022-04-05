import axios from 'axios';

test('pokemon', async () => {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
  expect(data).toHaveProperty('name', 'pikachu');
  expect(data).toHaveProperty('id', 25);
  expect(data).toHaveProperty('weight', 60);
  expect(data).toHaveProperty('base_experience', 112);
});
