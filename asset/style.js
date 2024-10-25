const navber = document.querySelector(".navbar");
    const menu = document.querySelector(".menu_list");
    const menubtn = document.querySelector(".menu_btn");
    const cancelbtn= document.querySelector(".cancel_btn");
    menubtn.onclick = ()=>{
      menu.classList.add("active");

    }
    cancelbtn.onclick = ()=>{
      menu.classList.remove("active");
    }
  window.onscroll = ()=>{
    this.scrollY > 20 ? navber.classList.add("sticky") : navber.classList.remove("sticky");
  }