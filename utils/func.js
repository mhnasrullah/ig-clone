export const screenSize = () => {
    if (typeof window !== 'undefined') {
        if (window.innerWidth < 768){
            return 'sm';
        }else if(window.innerWidth < 992){
            return 'md';
        }else{
            return 'lg';
        }
    }
}

export const stringOverflow = (str="") => {
    return `${str.slice(0,6)}...`
}