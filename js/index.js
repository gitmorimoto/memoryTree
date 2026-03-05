window.addEventListener('DOMContentLoaded',function(){
    const inp0Obj=document.getElementById('inp0');
    const btn0Obj=document.getElementById('btn0');
    btn0Obj.addEventListener('click',function(){
        const val0=inp0Obj.value;
        
        function detectType(str) {

            if (/^[\u3040-\u309F]+$/.test(str)) {
                return "Hiragana";
            }

            if (/^[A-Za-z]+$/.test(str)) {
                return "Roman alphabet";
            }

            return "Other";
        }
        console.log(detectType(val0));
        //detectType(val0);
        //console.log(detectType("こんにちは")); // Hiragana
        //console.log(detectType("hello"));    // Roman alphabet
    })
});