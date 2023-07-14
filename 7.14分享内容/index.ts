//例题 
//我们设计一个api，用于从对象中拿取指定的一些 key 作为一个新的对象返回给外面使用


//如果我们压根不关注类型只是想让他不报错，那直接用any就行，但是这样回给使用者很多困扰
declare function pick1(target: any, ...keys: any): any

//使用者写下了这样的代码
pick1(undefined, 'a', 1).b

//如果我们稍微改进一下传入的类型，让使用者别乱传参数
declare function pick2(target: Record<string, unknown>, ...keys: string[]): any

//使用者可能会写下下面的代码,在复杂的key值如果没有提示很容易写错
pick2({ dshauihuwdasi: 1, b: 2 },'dshauidsahui')

//那我们在优化一下，用个泛型不久完事了
declare function pick3<T extends Record<string, unknown>>(target: T, ...keys: Array<keyof T>): any

//使用者可能会又又又写下这样的代码,我们回发现这个函数的返回值确实不大合理
pick3({ abcdefghijkl: '123' }, 'abcdefghijkl').abcdefghikjl
// pick3({a:1,b:2},'')

//于是我们优化了一下返回值类型，写下了这样的类型
declare function pick4<T extends Record<string, unknown>,Keys extends keyof T>(target: T, ...keys: Keys[]): {
  [K in Keys]: T[K]
}

//使用者会捣乱的写下这样的代码，输入了重复的 key
pick4({ a: '' }, 'a', 'a')

//看起来只能使用大招了
export type L2T<L, LAlias = L> = [L] extends [never]
  ? []
  : L extends infer LItem
    ? [LItem?, ...L2T<Exclude<LAlias, LItem>>]
    : never

declare function pick<
  T extends Record<string, unknown>,
  Keys extends L2T<keyof T>
>(target: T, ...keys: Keys): Pick<T, Keys[number] & keyof T>

const x0 = pick({ a: '1', b: '2' }, 'a')
// const x1 = pick({ a: '1', b: '2' , c :'3'},'a','a')
// x1.a