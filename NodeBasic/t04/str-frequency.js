class StrFrequency{
    constructor(str){
        this.str = str;
        this.value = srt.valueOf();
    }

    letterFrequencies(){
        if(this.value){
            let res = {};
            let arr = this.value.split("");

            for(let i = 0; i <= arr.length; i++){
                let count = 0;
                if(arr[i].match(/[a-zA-Z]+$/)){
                    for(let j = 0; j <= arr.length; j++){
                        if(arr[i].toUpperCase() == arr[j].toUpperCase()){
                            count++;
                        }
                    }
                    res[arr[]]
                }

                
            }
        }
    }
}
