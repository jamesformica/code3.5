const projects = [
  {
    name: 'Banana Mania',
    img: '/projects/banana.jpg',
    url: 'https://jamesformica.github.io/llamarama',
    repo: 'https://jamesformica.github.com/llamarama',
    description: 'The class came together and built this amazing website promiting how fully sick bananas are!'
  },
]

export default projects.map((p, index) => ({ ...p, id: `${index}` }))
