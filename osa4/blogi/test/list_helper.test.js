const listHelper = require('../utils/list_helper')

test('dummy is called', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  const listWithThreeBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a42a2a71b54a676234d17f8',
      title: 'Mitä miehen pitää tietää seksistä?',
      author: 'Maisa Törppö',
      url: 'http://google.com',
      likes: 102,
      __v: 0
    },
    {
      _id: 'a5422aa17b54a676234d17f8',
      title: 'Sillä kerralla vetivät suoraan vetoketjusta',
      author: 'Tiina Dilleri',
      url: 'http://google.com/tinde',
      likes: 122,
      __v: 2
    }
  ]

  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  test('when list has three blogs, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithThreeBlogs)
    expect(result).toBe(229)
  })
})

describe('most liked blog', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]
  const listWithThreeBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a42a2a71b54a676234d17f8',
      title: 'Mitä miehen pitää tietää seksistä?',
      author: 'Maisa Törppö',
      url: 'http://google.com',
      likes: 102,
      __v: 0
    },
    {
      _id: 'a5422aa17b54a676234d17f8',
      title: 'Sillä kerralla vetivät suoraan vetoketjusta',
      author: 'Tiina Dilleri',
      url: 'http://google.com/tinde',
      likes: 122,
      __v: 2
    }
  ]

  test('when list has only one blog return that', () => {
    const testList = [...listWithOneBlog]
    const result = listHelper.favoriteBlog(testList)
    expect(result).toEqual(listWithOneBlog.pop())
  })

  test('when list has only multiple blogs return that one with most likes', () => {
    const testList = [...listWithThreeBlogs]
    const result = listHelper.favoriteBlog(testList)
    expect(result).toEqual(listWithThreeBlogs.pop())
  })
})

describe('most blog posts', () => {
  const listWithFourBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a42a2a71b54a676234d17f8',
      title: 'Mitä miehen pitää tietää seksistä?',
      author: 'Maisa Törppö',
      url: 'http://google.com',
      likes: 102,
      __v: 0
    },
    {
      _id: 'a5422aA17b54a676234d17f8',
      title: 'Ööh mömömmööö',
      author: 'Tiina Dilleri',
      url: 'http://google.com/tinde',
      likes: 21,
      __v: 2
    }
    {
      _id: 'a5422aa17b54a676234d17f8',
      title: 'Sillä kerralla vetivät suoraan vetoketjusta',
      author: 'Tiina Dilleri',
      url: 'http://google.com/tinde',
      likes: 122,
      __v: 2
    }
  ]

  test('when there\'s a clear winner, return it', () => {
    const result = listHelper.mostBlogs(testList)
    expect(result).toEqual(listWithOneBlog.pop())
  })

  test('when list has only multiple blogs return that one with most likes', () => {
    const testList = [...listWithThreeBlogs]
    const result = listHelper.favoriteBlog(listWithFourBlogs)
    expect(result).toEqual({author: 'Tiina Dilleri', blogs: 2})
  })
})
