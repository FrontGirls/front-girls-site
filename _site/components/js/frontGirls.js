//Circular navigation

(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    // this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav');
	    classie.add(button, 'close');
	  }
	  else{
	    // this.innerHTML = "Menu";
		classie.remove(wrapper, 'opened-nav');
		classie.remove(button, 'close');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}

})();

//Open close pages
//Please, be lenient with next lines, we are not very skilled in JS, thanks XD

(function(){

	var 
	close_button = document.getElementById('close-button'),
	close_button_res = document.getElementById('close-button-res'),
	open_about = document.getElementById('open-about'),
	open_resources = document.getElementById('open-resources'),
    about = document.getElementById('about'), 
    resources = document.getElementById('resources'),
    menu = document.getElementById('menu');
    main = document.getElementById('main');

    //Show about page when button is clicked
	var open = false;
	open_about.addEventListener('click', openAbout, false);

	function openAbout(){ 
	  if(!open){
	    classie.add(about, 'open');
	    classie.add(menu, 'down');
	    classie.add(main, 'show');
	  }
	  else{
	  }
	  open = !open;
	}
	    //Show about page when button is clicked
	var openRes = false;
	open_resources.addEventListener('click', openResources, false);

	function openResources(){ 
	  if(!openRes){
	    classie.add(resources, 'open');
	    classie.add(menu, 'down');
	    classie.add(main, 'show');
	  }
	  else{
	  }
	  openRes = !openRes;
	}

	//close pages
	var close = false;

	close_button.addEventListener('click', closePage, false);
	function closePage(){
	  if(!close){
	    classie.remove(about, 'open');
	    classie.remove(menu, 'down');
	    classie.remove(main, 'show');
	  }
	  else{
	  
	  }
	  close = !close;
	}
	//close pages
	var close = false;

	close_button_res.addEventListener('click', closeRes, false);
	function closeRes(){
	  if(!close){
	    classie.remove(resources, 'open');
	    classie.remove(menu, 'down');
	    classie.remove(main, 'show');
	  }
	  else{
	  
	  }
	  close = !close;
	}


})();