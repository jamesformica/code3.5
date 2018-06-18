const projects = [
  {
    name: 'Indoor Plant Care',
    img: '/projects/plantcare.jpg',
    url: 'https://code35club.github.io/plants/',
    repo: 'https://github.com/code35club/plants',
    description: 'A little test project where my fiancè and I created a little site on how to care for your indoor plants. There are three basic sections: Watering, re-potting, and sunlight. Follow these instructions and your plants will be super duper happy!'
  },
]

export default projects.map((p, index) => ({ ...p, id: `${index}` }))
