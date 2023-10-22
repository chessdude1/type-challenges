type MyExclude<T, U> = T extends U ? never : T

type dd = MyExclude<'a' | 'b' | 'c', 'a'>
