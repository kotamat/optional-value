import test from 'ava'
import o from '../src/index'

test(t => {
  const testObject = {
    user: {
      email: 'hoge@example.com',
    },
    arr: [
      {name: 'name1'},
      {name: 'name2'},
    ],
    bool:{
      false: false,
    }
  }
  // nested
  t.deepEqual({email: 'hoge@example.com'}, o(testObject, 'user'))
  t.is('hoge@example.com', o(testObject, 'user.email'))
  t.is(null, o(testObject, 'user.email.hoge@example.com'))
  t.is(null, o(testObject, 'user.fuga'))
  t.is(null, o(testObject, 'staff.email'))

  // array
  t.deepEqual([{name: 'name1'}, {name: 'name2'},], o(testObject, 'arr'))
  t.is('name1', o(testObject, 'arr.0.name'))
  t.is(null, o(testObject, 'arr.2.name'))

  // false
  t.is(false, o(testObject, 'bool.false'))
})
