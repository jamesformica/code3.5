export const fetchMarkdown = url => (
  fetch(url).then(response => (
    response.text()
  ))
)
