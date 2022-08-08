export default {
    ease : (t : number, d: number) => {
        if ((t/=d/2) < 1) return 1/2*t*t*t;
        return 1/2*((t-=2)*t*t + 2);
    },
    linear : (t : number, d : number) => {
        return t / d;
    }
}