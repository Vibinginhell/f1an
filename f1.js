

var body_tag = document.querySelector("body");
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function spawn_heart_across_x()
{
    var screen_width =  screen.width;
    var screen_bottom = screen.height-1;
    var i = 0;
    for(let x = 0;x < screen_width;x ++)
    {
        i++;
        if(i = 200)
        {
           draw_heart(x,screen_bottom);
           i= 0;
        }
    }
}
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
function spawn_star_randomly(amount)
{
     var screen_width =  screen.width;
    var screen_bottom = screen.height-1;
    var i = 0;
    for(let x = 0;x < screen_width;x ++)
    {
        i++;
        if(i = 200)
        {
           draw_star(x,screen_bottom);
           i= 0;
        }
    }
    
}

function draw_heart(offsetX,offsetY)
{
    var x_pos = offsetX;
    var y_pos = offsetY;
    var span_tag = document.createElement("SPAN");
    span_tag.classList.add("heart");
    span_tag.style.left = x_pos+"px";
    span_tag.style.top = y_pos+"px";

    var size = Math.floor(Math.random()*100);
    span_tag.style.width = size+"px";
    span_tag.style.height = size+"px";
    body_tag.appendChild(span_tag);
    

    setTimeout(function(){
        span_tag.remove()
    },5000)
}
function draw_star(offsetX,offsetY)
{
    var x_pos = offsetX;
    var y_pos = offsetY;
    var span_tag = document.createElement("SPAN");
    span_tag.classList.add("star");
    span_tag.style.left = x_pos+"px";
    span_tag.style.top = y_pos+"px";

    var size = Math.floor(Math.random()*100);
    span_tag.style.width = size+"px";
    span_tag.style.height = size+"px";
    body_tag.appendChild(span_tag);
    

    setTimeout(function(){
        span_tag.remove()
    },5000)
}



 

setTimeout(()=> body_tag.onmousemove = function(event)
{
    var x_pos = event.offsetX;
    var y_pos = event.offsetY;
    var span_tag = document.createElement("SPAN");
    
    span_tag.style.left = x_pos+"px";
    span_tag.style.top = y_pos+"px";

    var size = Math.floor(Math.random()*100);
    span_tag.style.width = size+"px";
    span_tag.style.height = size+"px";
    body_tag.appendChild(span_tag);
    

    setTimeout(function(){
        span_tag.remove()
    },3000)



},2000)

async function appearText(text, x, y, element_name) {
  // Create a text element
  const el = document.createElement(element_name);
  el.className = 'animated-text';
  
  // Position it
  el.style.position = 'absolute';
  el.style.left = x + 'px';
  el.style.top = y + 'px';
  
  // Add it to the page
  document.body.appendChild(el);

  // Typing effect
  for (let i = 0; i < text.length; i++) {
    el.textContent += text[i];
    await new Promise(resolve => setTimeout(resolve, 100)); // 100ms per character
  }

  // Trigger animation (optional CSS fade-in, etc.)
  void el.offsetWidth;
  el.classList.add('show');
  
  // Optional: remove it after 3 seconds
  // setTimeout(() => el.remove(), 3000);
}

async function runSequentially() {
  console.log("Step 1");
  await new Promise(resolve => setTimeout(resolve, 2000)); // wait 2s
  console.log("Step 2 after 2 seconds");
  console.log("Step 3");
}




//spawn_star_randomly(100);

spawn_heart_across_x();

// Example uses:

setTimeout(() => 
appearText("Chúc mừng bạn nhân ngày 20/10!", window.innerWidth / 2 - 100, window.innerHeight / 2 - 20,"txt1"));
setTimeout(() => 
appearText("Mong rằng mọi điều không vui sẽ được bạn nhẹ nhàng gác lại", window.innerWidth / 2 - 100, window.innerHeight / 2 - 100,"txt2"));
setTimeout(() => 
appearText("Hãy cứ tích cực và tỏa sáng theo cách của riêng mình, vì bạn xứng đáng được nhận những điều tốt đẹp và niềm vui trọn vẹn nhất", window.width / 2 - 200, window.Height /2 - 100,"txt3"));
runSequentially();

