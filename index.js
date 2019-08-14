const hash = require('object-hash')
class ArrayList {
    constructor(){
     this.size = 0
     this.arr=[]
    }
    add(el){
        this.arr.push(el)
        if(el)
            this.size ++ 
    }

    insert(index,el){
            this.arr.splice(index,0,el)
            this.size++
    }

    remove(index){
        this.arr.splice(index,1)
        this.size--
    }
    deleteOne(element){
        for(let i=0; i <  this.arr.length;i++){
            if (this.arr[i] === element){
                this.arr.splice(i,1)
                this.size--
            }
        }
    }

    delete(element,n){
        if(!n && n==0)
            return
        for(let i=0; i <  this.arr.length;i++){
            this.size--
            if (this.arr[i] === element){
                this.arr.splice(i,1)
                if(n>0){
                    n--
                    this.delete(element,n)
                }
                break
            }
        }
    }

    contains(el){
        let itContains = false
        this.arr.map(local_el=>{
            if(hash(el)===hash(local_el)){
                itContains = true
            }
        })

        return itContains
    }
    get(index){
        return this.arr[index]
    }
    indexOf(el){
        for(var i in this.arr){
            if(el===this.arr[i])
                return parseInt(i)
        }

    }
}

 module.exports = ArrayList
