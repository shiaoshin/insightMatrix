////Initialize////
var matrix = new Array(0,["aaa",1,0,1],["bbb",0,1,1],["ccc",0,1,1]);
//var matrix = new Array(0,["aaa",1,0,1,0],["bbb",0,1,1,1],["ccc",0,1,1,1],["ddd",0,0,0,1]);
//var matrix = new Array(0,["aaa",1,0,1,1,0],["bbb",0,1,0,1,1],["ccc",0,1,1,1,1],["ddd",0,0,0,1,1],["eee",1,0,0,1,1]);
//var matrix = new Array(0,["aaa",1,0,1,1,0,0,0,1],["bbb",0,1,0,1,1,0,0,1],["ccc",0,1,1,1,1,0,0,1],["ddd",0,0,0,1,1,0,0,1],["eee",1,0,0,1,1,0,0,1],["fff",1,0,0,1,1,0,0,1],["ggg",1,0,0,1,1,0,0,1],["hhh",1,0,0,1,1,0,0,1]);

var cellSize = 1.5;

var diagonalColor = "#666";

////Generate/respawn Cell////
function genCell(){
    
    //create addCell
    var mSize = matrix.length;
    $("<div id='addCell'><a href='#'><div>Click to add <span class='glyphicon glyphicon-plus-sign'></span></div></a></div>").appendTo("#cell");
    $("#addCell").css({
        "width":cellSize*mSize*1.2+"em",
        "height":cellSize*mSize*1.2+"em",
        "line-height":cellSize*mSize*(mSize*0.014+2.124)+"em"
    });
    
    //create cells
    for(i in matrix){
        //jump over empty row
        if(i == 0){continue};
        for(j in matrix[i]){
            //jump over label
            if(j == 0){continue};
            if(j == i){
                //create diagnol cells
                $("<div class='cell row"+i+" col"+j+"'>"+matrix[i][j]+"</div>").appendTo("#cell");
                //position cells
                $(".row"+i+".col"+j).css({
                    "top":((i-1)*cellSize)+"em",
                    "left":((j-1)*cellSize)+"em",
                    "width":cellSize+"em",
                    "height":cellSize+"em",
                    "line-height":cellSize+"em",
                    "font-size":0.8*cellSize+"em"
                })
                //color diagnol cells
                $(".row"+i+".col"+j).css({"background-color":diagonalColor,"color":"#AAA"});
            }else{
                //create cells
                $("<a href='#'><div class='cell row"+i+" col"+j+"'>"+matrix[i][j]+"</div></a>").appendTo("#cell");
                //position cells
                $(".row"+i+".col"+j).css({
                    "top":((i-1)*cellSize)+"em",
                    "left":((j-1)*cellSize)+"em",
                    "width":cellSize+"em",
                    "height":cellSize+"em",
                    "line-height":cellSize+"em",
                    "font-size":0.8*cellSize+"em"
                })            
            }
        }
    }
}

function genLabel(){
    for(i in matrix){
        //jump through empty row
        if(i == 0){continue};
        var cellLabel = matrix[i][0];
        $("<a href='#'><div class='row"+i+"'>"+matrix[i][0]+"</div></a>")
            .appendTo("#left")
            .css({
                "height":cellSize+"em",
                "line-height":cellSize+"em",
                "font-size":0.8*cellSize+"em"
            });
        $("<div class='col"+i+"'>"+matrix[i][0]+"</div>")
            .appendTo("#top")
            .css({
                "width":cellSize+"em",
                "line-height":cellSize+"em",
                "font-size":0.8*cellSize+"em"
            });
    }
}

genLabel();
genCell();

////Toggle Brief////
function briefDrop(){
    $("#brief").slideToggle(250);
};
