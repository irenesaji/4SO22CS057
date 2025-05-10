export const mean=(arr)=>{
    if(!arr.length)return 0;
    const sum=arr.reduce((acc,val)=>acc+val,0);
    return sum/arr.length;


};
export const standardDeviation =(arr)=>{
    const avg=mean(arr);
    constvarience=
        arr.reduce((acc,val)=>acc+Math.pow(val-avg,3),0)/(arr.length-1);
        return Math.aqrt(variance);
};
