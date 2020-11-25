export default function StringNormalizer (text:string){ 
    return text.trim().toLowerCase().replaceAll(/[`~!@#$%^&*()_|+\=?;:'",.<>\{\}\[\]\\\/]/gi, '').replaceAll(" ", '+');
}