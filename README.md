# optional-value

optional-value finds out a value from nested object or array.

## Usage

```js
import o from 'optional-value'

const someObject = {
  foo: {
    bar: 'hoge'
  }
}
const value = o(someObject, 'foo.bar')
// => hoge
const noneValue = o(someObject, 'foo.boo')
// => null
const obj = o(someObject, 'foo')
// => {bar: 'hoge'}
```

