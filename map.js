/*CODICE PRESO DALLE DISPENDE DEL PROFESSORE AMBRIOLA*/
var title = 
[
    "Pattern Selector Dial", 
    "Stitch Length Dial", 
    "Handwheel",
    "Reverse Stitch Lever", 
    "Bobbin", 
    "Bobbin Case",
    "Thread Take-Up Lever",
    "Needle",
];
var descr = 
[ 
    "The pattern selector dial is a functional component on a sewing machine designed to choose specific stitch patterns. Positioned on the machine's interface, this dial typically features various stitch symbols. By turning the dial, you instruct the machine on the desired stitch. As the machine operates, the dial's positioning prompts mechanical adjustments that determine the needle's movement and thread tension, resulting in the selected stitch pattern forming on the fabric.",
    "The stitch length dial in a sewing machine regulates the distance between individual stitches during the sewing process. This adjustable dial determines the length of thread fed by the machine's feed dogs for each stitch formation. By modifying the stitch length, you can achieve varying aesthetic and functional outcomes in the sewn fabric. A longer stitch length is generally suitable for lightweight fabrics, creating a more pronounced and open appearance, while a shorter stitch length is ideal for denser fabrics, enhancing seam strength and reducing fraying. It provides you with precise control over the stitching process, allowing you to tailor your sewing projects to specific requirements.",
    "The handwheel in a sewing machine serves as a manual control element that offers precise manipulation over the machine's needle movement and overall operation. By rotating the handwheel, you manually control the up-and-down motion of the needle, allowing for accurate needle positioning. This is particularly useful when starting a seam, making intricate adjustments, or performing delicate tasks such as appliqué work or quilting. Additionally, the handwheel aids in the manual raising and lowering of the machine's presser foot, which is essential for inserting or removing fabric and adjusting fabric tension. While the machine's motor typically powers the needle during regular sewing, the handwheel grants you finer control for intricate tasks and manual adjustments.",
    "The reverse stitch lever on your sewing machine plays a crucial role. It allows you to easily execute reverse stitching by temporarily changing the direction of the fabric feed while keeping the lever pressed. When you engage the reverse stitch lever, the feed dogs and fabric move backward, creating stitches in the opposite direction. This is incredibly useful for securing seams, preventing fraying, and adding durability to your sewing work. You can use the reverse stitch lever to create backstitches and lock stitches, reinforcing the start and end points of your seams. This feature gives you more control over stitch strength and helps you achieve professional-quality sewing results.",
    "The boobin is a small cylindrical spool, meticulously wound with thread. As the machine's needle pierces the fabric's surface, the bobbin releases its thread with a gentle and consistent pull, intertwining with the upper thread.",
    "A small but meticulously engineered compartment, the bobbin case houses the bobbin, which carries the lower thread. As the upper thread from the needle intertwines with the lower thread, the bobbin case regulates the release of the lower thread. Its smooth, controlled rotation ensures that the thread feeds evenly, forming tight and neat stitches on the fabric above.",
    "It's the part of the machine that pulls the thread from the spool to feed it through the machine and lifts the thread back up out of the cloth after a stitch has been made. Simply put, it's the part that goes “up and down” as you sew. Using the handwheel can move the take-up lever to the top and will bring your sewing machine needle to its highest position. Always have the take-up lever to the top when placing or removing fabric from under the presser foot to prevent snagging and bending the needle. Always have the machine threaded with the thread in the take-up lever to prevent knotted wads of the thread. Make sure the thread is going through the take-up lever to have the proper tension on the thread, so your stitching is even. Not having the thread in the take-up lever can create a tangled mess of thread.",
    "The needle is used to form a stitch in the garments. Positioned within the machine's mechanism, the needle undergoes precise up-and-down motions, puncturing the fabric with its sharp tip and pulling the thread through the material. This intricate action allows the needle to intertwine the upper thread with the bobbin thread, generating locked stitches that bind the fabric layers together. Think of the needle in a sewing machine as a tiny, quick-moving helper. It goes through the fabric, taking thread along, and creates tight stitches that hold the fabric together. This teamwork of the needle and the sewing machine makes sewing tasks accurate and smooth."
];

const PicWidth = 603;
var NodeArea, NodeTitle, NodeExpl;
var ImageMap, Coords, PicDimension;

/**/function DisplayText(node, message)
/**/{
/**/    var NodeText = document.createTextNode(message)
/**/    node.replaceChild(NodeText, node.firstChild);
/**/}

/**/function GestoreClickArea()
/**/{
/**/    try
/**/    {
/**/        DisplayText(NodeTitle, title[this.id]);
/**/        DisplayText(NodeExpl, descr[this.id]);
/**/    }
/**/    catch(e)
/**/    {
/**/        alert("GestoreClickArea " + e);
/**/    }
/**/}

/**/function gestoreCursore () 
/**/{
/**/    try
/**/    {
/**/        this.style.cursor = "pointer";
/**/    }
/**/    catch ( e )
/**/    {
/**/        alert("gestoreCursore " + e);
/**/    }
/**/}

/**/function ResizeMap()
/**/{
/**/    try
/**/    {
/**/        var CurrPicDimension = ImageMap.width;
/**/        var Ratio = CurrPicDimension / PicDimension;

/**/        for(var i = 0; i < NodeArea.length; i++)
/**/        {
/**/            for(var j = 0; j < AreaCoords[i].length; j++)
/**/            {
/**/                AreaCoords[i][j] *= Ratio;
/**/            }
/**/            NodeArea[i].coords = AreaCoords[i].join(',');
/**/            NodeArea[i].coords = AreaCoords[i].join(',');
/**/        }
/**/        PicDimension = CurrPicDimension;
/**/    }
/**/    catch(e)
/**/    {
/**/        alert("ResizeMap " + e);
/**/    }
/**/}
/**/function GestoreLoad()
/**/{
/**/    try
/**/    {
/**/        NodeArea = document.getElementsByTagName("area");
/**/        ImageMap = document.getElementById("ImageMap");
/**/        NodeTitle = document.getElementById("Title");
/**/        NodeExpl = document.getElementById("Explanation");
/**/        AreaCoords = [];

/**/        for(var i = 0; i < NodeArea.length; i++)
/**/        {
/**/            var EachArea = NodeArea[i];

/**/            EachArea.onclick = GestoreClickArea;
/**/            EachArea.onmouseover = gestoreCursore;
           
/**/           AreaCoords[i] = EachArea.coords.split(',');
/**/        }

/**/        PicDimension = PicWidth;

/**/        var NodeTextTitle = document.createTextNode("");
/**/        NodeTitle.appendChild(NodeTextTitle);
/**/        var NodeTextExpl = document.createTextNode("");
/**/       NodeExpl.appendChild(NodeTextExpl);
/**/
/**/        window.onresize = ResizeMap;
/**/        ResizeMap();
/**/    }
/**/    catch(e)
/**/    {
/**/        alert("GestoreLoad " + e);
/**/    }
/**/}

/**/window.addEventListener("load", function(){ GestoreLoad();} );