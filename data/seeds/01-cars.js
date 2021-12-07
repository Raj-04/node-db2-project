const cars = [
  {
    vin: '1G1ND52J8X6272941',
    make: 'toyata',
    model: 'prius',
    mileage: 215000,
    title: 'clean',
    transmission: 'manual',
  },
  {
    vin: '4S3BK4358V7310025',
    make: 'toyata',
    model: 'corolla',
    mileage: 115000,
    title: 'salvage',
  },
  {
    vin: 'W06VR52R9WR220134',
    make: 'ford',
    model: 'focus',
    mileage: 15000,
  },
]

exports.seed = async function(knex) {
  await knex('cars').truncate()
  await knex('cars').insert(cars)
}
