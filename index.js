

var audioMap = new Map([
  ["w", "tom-1"],
  ["a", "tom-2"],
  ["s", "tom-3"],
  ["d", "tom-4"],
  ["j", "snare"],
  ["k", "crash"],
  ["l", "kick-bass"]
]);

var totalKeys = document.querySelectorAll(".drum").length;
for(var i = 0; i<totalKeys; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    if(!audioMap.has(this.innerHTML))
    {
      alert("Invalid Key Pressed.");
      return;
    }
    console.log(this.innerHTML);
    buttonAnimation(this.innerHTML);
    var audio = new Audio(`sounds/${audioMap.get(this.innerHTML)}.mp3`);
    audio.play();



  });
}


document.addEventListener("keypress", function(evt){

  if(!audioMap.has(evt.key))
  {
    alert("Invalid Key Pressed.");
    return;
  }
  buttonAnimation(evt.key);
  var audio = new Audio(`sounds/${audioMap.get(evt.key)}.mp3`);
  audio.play();
})


function buttonAnimation(currentKey)
{

    var activeButton = document.querySelector("." + currentKey);
  setTimeout(function () {
    activeButton.classList.toggle("pressed");
  }, 100);

  activeButton.classList.toggle("pressed");

}
