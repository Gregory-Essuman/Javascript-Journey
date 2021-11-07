// Error Handling

try {
    let lastName = 'Gregory'
    let fullName = firstName + ' ' + lastName
  } catch (err) {
    console.log(err)
  }

try {
    let lastName = 'Gregory'
    let fullName = firstName + ' ' + lastName
  } catch (err) {
    console.error(err) // we can use console.log() or console.error()
  } finally {
    console.log('In any case I will be executed')
  }

// ThrowErr Function
const throwErr = () => {
    let message
    let x = prompt('Enter a number: ')
    try {
      if (x == '') throw 'empty'
      if (isNaN(x)) throw 'not a number'
      x = Number(x)
      if (x < 5) throw 'too low'
      if (x > 10) throw 'too high'
    } catch (err) {
      console.log(err)
    }
  }
  console.log(throwErr())