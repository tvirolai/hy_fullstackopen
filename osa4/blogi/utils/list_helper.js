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

const favoriteBlog = (blogs) => {
  let copyOfBlogs = [...blogs]
  return copyOfBlogs.sort(compare).pop()
}

const mostBlogs = (blogs) => {
  const names = blogs.map(x => x.author)
  let freqs = {}
  for (let i in names) {
    let name = names[i]
    if (Object.keys(freqs).indexOf(name) > -1) {
      freqs[name] += 1
    } else {
      freqs[name] = 1
    }
  }
  let result = {
    author: '',
    blogs: 0
  }
  for (let k in freqs) {
    if (freqs[k] > result.blogs) {
      result.blogs = freqs[k]
      result.author = k
    }
  }
  return result
}

const mostLikes = (blogs) => {
  const { author, _ } = mostBlogs(blogs)
  return {
    author: author,
    likes: totalLikes(blogs.filter(b => b.author === author))
  }
}

module.exports = {
  favoriteBlog,
  totalLikes,
  dummy,
  mostBlogs,
  mostLikes
}
