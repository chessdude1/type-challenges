type Includes<T extends readonly any[], U> = { [K in T[number]]: true }[U] extends true ? true : false

