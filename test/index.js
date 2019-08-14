const expect = require('expect')
const ArrayList = require('../index')

describe('Testing ArrayList',()=>{

let list = new ArrayList()

it('should initialize the list object',()=>{
    expect(list.size).toBe(0)
    expect(Array.isArray(list.arr)).toBe(true)
})


it('should add an element',()=>{
    list.add('el-1')
    list.add('el-2')
    list.add('el-3')

    expect(list.get(0)).toBe('el-1')
    expect(list.get(2)).toBe('el-3')
    expect(list.size).toBe(3)

})

it('should insert an element at a specific index',()=>{
    list.insert(2,'el-x')
    expect(list.get(2)).toBe('el-x')
    expect(list.size).toBe(4)


})

it('should delete an element',()=>{
    list.deleteOne('el-x')
    expect(list.contains('el-x')).toBe(false)
    expect(list.size).toBe(3)


})

it('should delete an element at first occurence',()=>{
    list.add('el-y')
    list.add('el-y')
    expect(list.size).toBe(5)
    list.deleteOne('el-y')
    expect(list.indexOf('el-y')).toBe(list.size-1)

})

it('should delete multiple elements when duplicated',()=>{
    list.add('el-x')
    list.add('el-x')
    list.add('el-x')
    list.add('el-x')
    list.delete('el-x',3)
    expect(list.contains('el-x')).toBe(true)
    list.delete('el-x',1)
    expect(list.contains('el-x')).toBe(false)

})
it('should delete an element from a specific index',()=>{
    list.remove(1)
    expect(list.contains('el-2')).toBe(false)

})

it('should return an element from a specific index',()=>{
    const el = list.get(0)
    expect(el).toBe('el-1')

})
it('should return a really index of an element it it exists',()=>{
    const index = list.indexOf('el-1')
    expect(index).toBe(0)

})

it('should know if an object in contained', ()=>{
    const data = {
        description: "Endeavour to deliver this output not later than this date",
        endTime: "2019-08-02T21:59:59Z",
        location: "N/A",
        startTime: "2019-08-02T21:59:59Z",
        title: "Output 6.3: Advocating for your Advancement",
    }
    list.add(data)
    expect(list.contains(data)).toBe(true)
})

})