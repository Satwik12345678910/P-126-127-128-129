song1="";
song2="";
rightWristY=0
leftWristX=0;
leftWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;


function preload()
{
    song1 = loadSound("music.mp3");
    song2=loadSound("music2.mp3");

}

function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}

function draw()
{
   image(video,0,0,600,500);

   fill("#ff0000");
   stroke("#ff0000");
}

function isPlaying()
{
    if(scoreLeftWrist > 0.2)
    {
      circle(leftWristX,leftWristY,20);
      stop();
      InNumberleftWristY = Number(leftWristY);
      remove_decimals=floor(InNumberleftWristY);
      songName= remove_decimals/500;

    }

}

function stop()
{
    if (song1=false)
    {
        song1=false(stop);
    }
    else(song1=true)
    '=>';
    {
        song1=true("music.mp3");
    }
    

    if (song2=false)
    {
        song2=false(stop);
    }
    else(song2=true)
    '=>';
    {
        song2=true("music2.mp3");
    }

}

function gotPoses(results)
{
    if(results.length > 0)
    {

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);
    }
    }
