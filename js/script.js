$(function(){
    
    var pc = localStorage.getItem('pageColor');
    var tc = localStorage.getItem('textColor');
    var text = localStorage.getItem('text');
    var autosave = 0;
    
    
    if (pc != null){
        $('body').css('background-color',pc);
    }else{
        pc = "#fff";
    }
    
    if (tc != null){
        $('textarea').css('color',tc);
    }else{
        tc = "#000";
    }
    
        if (text != null && text != ""){
        $('#textarea').text(text);
    }else{
        $('#textarea').text("Enter your notes here!");
    }
    
    
    $("#pageColor").spectrum({
        color: pc,
        change: function(color) {
            var color = color.toHexString();
            localStorage.setItem('pageColor', color);
            $('body').css('background-color', color);
            return;
           
        }
    });
    
    $("#textColor").spectrum({
        color: tc,
        change: function(color) {
            var color = color.toHexString();
            localStorage.setItem('textColor', color);
            $('textarea').css('color', color);
            return;
           
        }
    });
    
    $("#textarea").keyup(
        function (event) {
            if (autosave % 10 == 0){
                localStorage.setItem('text', $(this).val());
                $('#status').text("... Text Saved!!!");
            }else{
                $('#status').text("");
            }
            autosave++;
        });

    $("#clear").click(function(){
        $('body').css('background-color', 'white');
        $('textarea').css('color', 'black');
        $('#textarea').text("Enter your notes here!");
        localStorage.removeItem('pageColor');
        localStorage.removeItem('textColor');
        localStorage.removeItem('text');
    });


});