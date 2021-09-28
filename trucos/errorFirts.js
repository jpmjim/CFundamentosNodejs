function asincrona(callback) {
  setTimeout(() => {
      try {
          let a = 3 + w
          callback(null, a)
      } catch (error) {
          callback(error)
      }
  }, 1000)
}

asincrona((err, dato) => {
  if (err) {
      console.error('Tenemos un error')
      console.error(err)
      return false

      // throw err
  }
  console.log(`Todo ha ido bien, mi dato es ${dato}`)
})