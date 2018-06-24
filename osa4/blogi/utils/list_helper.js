const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => blogs.map(x => x.likes).reduce((val, acc) => acc + val)

const compare = (b1, b2) => {
  let comp = 0
  if (b1.likes > b2.likes) {
    comp = 1
  } else if (b1.likes < b2.likes) {
    comp = -1
  }
  return comp
}

const favoriteBlog = (blogs) => blogs.sort(compare).pop()

module.exports = {
  favoriteBlog,
  totalLikes,
  dummy
}
