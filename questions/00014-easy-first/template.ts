type First<T extends any[]> = T[0] extends [] ? never : T[0]
