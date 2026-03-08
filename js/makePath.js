export function makePath(str) {


    let str1 = btoa(String.fromCharCode(...new TextEncoder().encode(str)));
     str1 = str1
        .replace(/\+/g,'-')
        .replace(/\//g,'_')
        .replace(/=+$/,'');
    let str2= str1.match(/.{1,5}/g).join('/');//divide into 5 characters and add slash
    let str3 = '/' + str2;//add slash at the beginning


    return str3;
}