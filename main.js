noseX = 0
noseY = 0

function preload() {
clownnose = loadImage("https://i.postimg.cc/SRkJ6ygx/clownnose-prishaproject-removebg-preview.png");
lipstick = loadImage("https://i.postimg.cc/D0N0tq28/lips-project-removebg-preview.png");
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO)
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses)
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
    console.log("nose x ="+noseX)
    console.log("nose y ="+noseY)
  }

}

function modelLoaded()
{
  console.log('PoseNet Is Initialized')
}

function draw() {
image(video, 0, 0, 300, 300);
fill(230, 59, 53);
stroke(120, 16, 12);
circle(noseX,noseY,15)
image(clownnose,noseX-17,noseY-17,40,40)
image(lipstick,noseX-17,noseY+5,40,40)
}

function take_snapshot(){    
  save('myFilterImage.png');
}