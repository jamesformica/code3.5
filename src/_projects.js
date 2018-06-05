const projects = [
  {
    name: 'Banana Mania',
    img: '/projects/banana.jpg'
  },
]

export default projects.map((p, index) => ({ ...p, id: `${index}` }))
