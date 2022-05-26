
值
[link](https://www.typescriptlang.org/play?#code/PTAEmT4xTRUADlCo5QHU0CN+oB2BXAtgZ0DD-h36MAN5QFfjA9tTkElvQf1TAQt0GW-QHPMkAoEUBpQWjlBP7UBS9QIl9AqPqANbUAVCoAF3QNBycQC9mgck1AwoqACXxyAgzXqBCm0CQ5nOpKcgRh0hoALQBGQEAMTJgGMA9iiwAXVAFMAHo4DiAJxcBDRxdvAFEAGxcMFxRnAF5QAAp0bAAuVEwAIyCAbQBdAEpUpMzvXNAYgD5QAG8mUFA7B2c-B0KM7Jyy0FyrOoanUAx7WwBlRz9rAGtWjGLSuO7a0AAzW28E8OcAS06krAA6cJQAc0cACxNQUwBuUG3yuIAGG83jYzzqxbqAd1PN8ITBigRmNJgcoidzgAySEDIajcYTLKA4EIsHHM4XUwdAA8cV2WU2+Q+dRJsKB8NBAAdbJT4nlPqAAL49EnNLAEjpxZEUiZoiGgAD8ZJRkyRcJBvMO-OMlw6qTMDO5Er2lLQWFOiUw7MJ9LqzMWvkcaG8KFAbKY+r6tnCB1sR3iixQ7i8vgCQTCESijniWQATAAaS6BgOgAAsgYAzPkmHkgA)
```ts
// 输入一个数组 nums，请你返回一个等长的结果数组
// 结果数组中对应索引存储着下一个更大元素，如果没有更大的元素，就存 -1。

const nextGreaterElement = (nums: number[]): number[] => {
  const ans: number[] = []

  const monoStack: number[] = []

  for (let i = nums.length - 1; i >= 0; i--) {
    while (monoStack.length && monoStack[monoStack.length - 1] <= nums[i]) {
      monoStack.pop()
    }

    ans[i] = monoStack.length ? monoStack[monoStack.length - 1] : -1
    monoStack.push(nums[i])
  }

  return ans
}

console.log(
  nextGreaterElement([2, 1, 2, 4, 3])
)
```

下标
[link](https://www.typescriptlang.org/play?#code/PTAEmT4xTRUADlCo5QHU0CN+oB2BXAtgZ0DD-h36MAN5QFfjA9tTkElvQf1TAQt0GW-QHPMkAoEUBpQWjlBP7UBS9QIl9AqPqANbUAVCoAF3QNBycQC9mgck1AwoqACX2qhAMAwTA4BaBYBhZhAQZr1AhTaBIcznUlOQIw6Q1ICAGJkwDGAexRYALqgCmAD3cBxACcvAEN3L0CAUQAbLwwvFE8AXlAACnRsAC5UTAAjCIBtAF0ASmyM-MDi0CSAPlAAbyZQUBc3TxC3crzCoprQYocWto9QDFdnAGV3EMcAa26MSuqUwebQADNnQLTYzwBLfoysADpYlABzdwALUABaUABGAG5QQ9qUgAZX-bu7ksa6xaAHdrvtYmlxigpjN5mcEldbgAyJE5bAFKEw2ZzDETabY+GXG73J5FPoAHhSxwK+1KgJaDLGeNhcxOAAdnGzUiUgaAAL5DBmdLA0vopTH4uHnRGgAD8TOhkpxEpZhJlD0efUWp2lN15KoJbLQWGuqX2PJaAvWwXcaECKFAwqYVpGzliZ2cF1S6xQvgCwTCERicQS7lSBQATAAaJ4x6OgAAsMYAzKUmCUgA)
```ts
// 输入一个数组 nums，请你返回一个等长的结果数组
// 结果数组中对应索引存储着下一个更大元素的 「下标」
// 如果没有更大的元素，就存 n。

const nextGreaterElement = (nums: number[]): number[] => {
  const ans: number[] = []

  const monoStack: number[] = []

  for (let i = nums.length - 1; i >= 0; i--) {
    while (monoStack.length && nums[monoStack[monoStack.length - 1]] <= nums[i]) {
      monoStack.pop()
    }

    ans[i] = monoStack.length ? monoStack[monoStack.length - 1] : nums.length
    monoStack.push(i)
  }

  return ans
}
```


[参考来源](https://labuladong.github.io/algo/2/21/60/)