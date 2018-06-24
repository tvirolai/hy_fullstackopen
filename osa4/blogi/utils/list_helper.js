const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => blogs.map(x => x.likes).reduce((val, acc) => acc + val)

module.exports = {
  totalLikes,
  dummy
}
