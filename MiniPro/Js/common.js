window.onscroll = function(){
  if(document.documentElement.scrollTop > 100){
    // console.log(document.getElementsByClassName("navLink"));
    document.getElementById("mynav").classList.add("scrollNav") 
    let navArray = document.getElementsByClassName("navLink")
    for(let i of navArray){
      // console.log(i)
      i.classList.add('bl')
    }
  }
  else{
    document.getElementById("mynav").classList.remove("scrollNav")
    let navArray = document.getElementsByClassName("navLink")
    for(let i of navArray){
      console.log(i)
      i.classList.remove('bl')
    }
  }
}

$().ready(()=>{
 
  $('.card').hover(function(){
    $(this).css({transform:'scale(1.1)',"transition-duration":"0.7s"})
  },
  function(){
    $(this).css({transform:'scale(1)',"transition-duration":"0.7s"})
  })
})
