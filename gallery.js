/*CODICE PRESO DALLE DISPENDE DEL PROF AMBRIOLA PERO MODIFICATO CON AGGIUNTA VIDEO + LOADING SCREEN*/
/**/const Time = 3000;
/**/var gallery = 
/**/[
/**/    "https://www.digitalfabrics.com.au/wp-content/uploads/2021/05/DSC_0234_600-x-600-72dpi-TOTE-BAG.jpg",
/**/    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROp-WQng8luXiQjY1QCWViu7mxFUtSaCXFhEG865LT5zJWe8KGqSAmdlr5BG3tWjz8xO8&usqp=CAU",
/**/    "https://i.pinimg.c/**/om/564x/a2/48/20/a24820d168e0336f7177727c292b8b4a.jpg",
/**/    "https://www.roomdeco.gr/images/photo928.png"
/**/];
/**/var videos = 
/**/[
/**/    "https://www.youtube.com/embed/RCUZCp-jlew?si=7adT2hLMozutVPfl",
/**/    "https://www.youtube.com/embed/i1AsfZRYlRM?si=IALe2DDuvc8qf_Il",
/**/    "https://www.youtube.com/embed/L556Rif65-4?si=i_J_XNnO1FKRlslb",
/**/    "https://www.youtube.com/embed/yMoJWSmZI-U?si=z05pBg4-rhYzzFom"
/**/];

/**/var IndexPhoto, IndexVideo, NumPhoto, NumVideo, Automatic, NodeNext, NodePrev, NodeStartStop, NodePhoto, NodeVideo;
/**/function GestoreNext()
/**/{
/**/    try
/**/    {
/**/        if(!Automatic)
/**/        {
/**/            ChangePhoto_Video(+1);
/**/        }
/**/    }
/**/    catch(e)
/**/    {
/**/        alert("GestoreNext " + e);
/**/    }
/**/}
/**/function GestorePrev()
/**/{
/**/    try
/**/    {
/**/        if(!Automatic)
/**/        {
/**/            ChangePhoto_Video(-1);
/**/        }
/**/    }
/**/    catch(e)
/**/    {
/**/        alert("gestorePrev " + e);
/**/    }
/**/}

/**/function ChangePhoto_Video(x)
/**/{
/**/    IndexPhoto = IndexPhoto + x;
/**/    IndexVideo = IndexVideo + x;
/**/    if(IndexPhoto == NumPhoto && IndexVideo == NumVideo)
/**/    {
/**/        IndexPhoto = 0;
/**/        IndexVideo = 0;
/**/    }
/**/    if(IndexPhoto < 0 && IndexVideo < 0)
/**/    {
/**/        IndexPhoto = NumPhoto - 1;
/**/        IndexVideo = NumVideo - 1;
/**/    }
/**/    NodePhoto.setAttribute("src", gallery[IndexPhoto]); 
/**/    NodeVideo.setAttribute("src", videos[IndexVideo]);
    
/**/    NodePhoto.classList.remove("GalleryPic");
/**/    NodeVideo.classList.remove("GalleryVideo");
/**/}

/**/function GestoreStartStop()
/**/{
/**/    try
/**/    {
/**/        if(Automatic)
/**/        {
/**/            NodeStartStop.value = "Start";
/**/            Automatic = false;
/**/        }
/**/        else
/**/        {
/**/            NodeStartStop.value = "Stop";
/**/            Automatic = true;
/**/            ChangeContentAutomatically();
/**/        }
/**/    }
/**/    catch(e)
/**/    {
/**/        alert("GestoreStartStop " + e);
/**/    }
/**/}

/**/function ChangeContentAutomatically()
/**/{
/**/    try
/**/    {
/**/        if(Automatic)
/**/        {
/**/            ChangePhoto_Video(+1);
/**/            setTimeout(ChangeContentAutomatically, Time);
/**/        }
/**/    }
/**/    catch(e)
/**/    {
/**/        alert("ChangeContentAutomatically " + e);
/**/    }
/**/}

/**/function GestoreLoad()
/**/{
/**/    try
/**/    {
            //Bottoni + associazione valori dal documento html
/**/        NodeNext = document.getElementById("ButtonNext");
/**/        NodePrev = document.getElementById("ButtonPrevious");
/**/        NodeStartStop = document.getElementById("ButtonStartStop");
/**/        NodePhoto = document.getElementById("foto1"); 
/**/        NodeVideo = document.getElementById('video1');


            //Azioni
/**/        NodeNext.onclick = GestoreNext;
/**/        NodePrev.onclick = GestorePrev;
/**/        NodeStartStop.onclick = GestoreStartStop;
        
        
            //Altro
/**/        NodeStartStop.value = "Start";
/**/        NumPhoto = gallery.length;
/**/        NumVideo = videos.length;
/**/        Automatic = false;
/**/        IndexPhoto = 0;
/**/        IndexVideo = 0;
/**/        ChangePhoto_Video(0);
/**/    }

/**/    catch(e)
/**/    {
/**/        alert("GestoreLoad " + e);
/**/    }
/**/}

/**/window.addEventListener("load", function(){ GestoreLoad();}); 

//Questa funzione gestisce il loading della galleria nella sezione Basics 
//nascondendo inizialmente il contenuto del paragrafo, in combinazione al file CSS, 
//per poi mostrarlo solo quando tale contenuto viene caricato completamente
window.addEventListener("load", function() 
{
    var loader = document.querySelector(".loader");
    var content = document.querySelector(".content");

    loader.style.display = "none";
    content.style.display = "block";
});