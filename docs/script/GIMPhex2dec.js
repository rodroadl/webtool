$(document).ready(function(){
    $("#enter").on("click", function() {
        var hexTxt = document.getElementById("hex").value;
        // parse hexTxt
        var lines = hexTxt.split('\n');
        var ret = 'JASC-PAL\n0100\n16\n';

        for(let i = 0; i<lines.length;i++){
            for(let j=0;j<3;j++){
                let line = lines[i].replace("#", "")
                let hexStr=line.slice(2*j,2*j+2);
                let hexNum = parseInt(hexStr,16)
                ret += hexNum.toString();
                ret += " ";
            }
            ret = ret.trimEnd();
            ret += '\n';
        }

        for(let i=0;i<16-lines.length;i++){
            ret += "1 1 1\n"
        }

        document.getElementById("dec").value=ret;
    });
    $("#copy").on("click", function() {
        // https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
        // Get the text field
        var copyText = document.getElementById("dec");

        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
    });
});
