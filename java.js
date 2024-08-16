let btn=document.querySelector("button");
let abc=document.querySelector("body");
let currMode ="light";
btn.addEventListener("click",() =>
{
    if(currMode==="light")
    {
        currMode="dark";
        abc.classList.add("dark");
        abc.classList.remove("light");
    }
    else if (currMode==="dark"){
        currMode="red";
        abc.classList.add("red");
        abc.classList.remove("dark");
    }
    else if (currMode==="red"){
        currMode="blue";
        abc.classList.add("blue");
        abc.classList.remove("red");
    }
    else if (currMode==="blue") {
        currMode="green";
        abc.classList.add("green");
        abc.classList.remove("blue");
    }
    else if (currMode==="green") {
        currMode="orange";
        abc.classList.add("orange");
        abc.classList.remove("green");
    }
    else if (currMode==="orange") {
        currMode="violet";
        abc.classList.add("violet");
        abc.classList.remove("orange");
    }
    else if (currMode==="violet") {
        currMode="yellow";
        abc.classList.add("yellow");
        abc.classList.remove("violet");
    }
    else if (currMode==="yellow") {
        currMode="indigo";
        abc.classList.add("indigo");
        abc.classList.remove("yellow");
    }
    else if (currMode==="indigo") {
        currMode="pink";
        abc.classList.add("pink");
        abc.classList.remove("indigo");
    }
    else if (currMode === "pink") {
        currMode = "cyan";
        abc.classList.add("cyan");
        abc.classList.remove("pink");
    } else if (currMode === "cyan") {
        currMode = "magenta";
        abc.classList.add("magenta");
        abc.classList.remove("cyan");
    } else if (currMode === "magenta") {
        currMode = "lime";
        abc.classList.add("lime");
        abc.classList.remove("magenta");
    } else if (currMode === "lime") {
        currMode = "maroon";
        abc.classList.add("maroon");
        abc.classList.remove("lime");
    } else if (currMode === "maroon") {
        currMode = "navy";
        abc.classList.add("navy");
        abc.classList.remove("maroon");
    } else if (currMode === "navy") {
        currMode = "olive";
        abc.classList.add("olive");
        abc.classList.remove("navy");
    } else if (currMode === "olive") {
        currMode = "teal";
        abc.classList.add("teal");
        abc.classList.remove("olive");
    } else if (currMode === "teal") {
        currMode = "silver";
        abc.classList.add("silver");
        abc.classList.remove("teal");
    } else if (currMode === "silver") {
        currMode = "gold";
        abc.classList.add("gold");
        abc.classList.remove("silver");
    } else if (currMode === "gold") {
        currMode = "brown";
        abc.classList.add("brown");
        abc.classList.remove("gold");
    } else if (currMode === "brown") {
        currMode = "aqua";
        abc.classList.add("aqua");
        abc.classList.remove("brown");
    } else if (currMode === "aqua") {
        currMode = "turquoise";
        abc.classList.add("turquoise");
        abc.classList.remove("aqua");
    } else if (currMode === "turquoise") {
        currMode = "sienna";
        abc.classList.add("sienna");
        abc.classList.remove("turquoise");
    } else if (currMode === "sienna") {
        currMode = "khaki";
        abc.classList.add("khaki");
        abc.classList.remove("sienna");
    } else if (currMode === "khaki") {
        currMode = "plum";
        abc.classList.add("plum");
        abc.classList.remove("khaki");
    } else if (currMode === "plum") {
        currMode = "crimson";
        abc.classList.add("crimson");
        abc.classList.remove("plum");
    } else if (currMode === "crimson") {
        currMode = "coral";
        abc.classList.add("coral");
        abc.classList.remove("crimson");
    } else if (currMode === "coral") {
        currMode = "salmon";
        abc.classList.add("salmon");
        abc.classList.remove("coral");
    } else if (currMode === "salmon") {
        currMode = "chocolate";
        abc.classList.add("chocolate");
        abc.classList.remove("salmon");
    } else if (currMode === "chocolate") {
        currMode = "peru";
        abc.classList.add("peru");
        abc.classList.remove("chocolate");
    } else if (currMode === "peru") {
        currMode = "light";
        abc.classList.add("light");
        abc.classList.remove("peru");
    }
})