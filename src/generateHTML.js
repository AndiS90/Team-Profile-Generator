//TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderManager(managers) {
  if (managers) {
    managers.forEach(manager => `<div class="col s12 m4 l3">
    <div class="card">
        <div class="card-content top">
            <h2 class="card-title "><strong>${manager.moniker}</strong></h2>
            <h3 class=" valign-wrapper ">Manager &nbsp; <i class="small material-icons"> brightness_5</i>
            </h3>
        </div>
        <div class="card-action bottom">
            <ul class="">
                <li class="">ID: ${manager.id}</li>
                <li class="">EMAIL: <a href="mailto:${manager.email}"> ${manager.email} </a></li>
                <li class="">OFFICE: ${manager.office}</li>
            </ul>
        </div>                  
    </div>
</div>` );
  }
  return '';

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderEngineers(engineers) {
  if ( engineers.length !== 0) {

    engineers.forEach(engineer => `<div class="col s12 m4 l3">
    <div class="card">
        <div class="card-content top">
            <h2 class="card-title"><strong>${engineer.moniker}</strong></h2>
            <h3 class=" valign-wrapper">Engineer &nbsp;<i class="small material-icons"> brightness_3</i></h3>
        </div>
        <div class="card-action bottom">
            <ul class="">
                <li class="">ID: ${engineer.id} </li>
                <li class="">EMAIL:<a href="mailto:${engineer.email}">${engineer.email}</a> </li>
                <li class="">GITHUB:<a href="https://github.com/${engineer.github}"> ${engineer.github}</a></li>
            </ul>
        </div>
    </div>
</div>` );
  }
  return '';
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderInterns(interns) {
  if ( interns.length !== 0) {
    interns.forEach(intern => `<div class="col s12 m4 l3">
    <div class="card ">
        <div class="card-content top">
            <h2 class="card-title"><strong>${intern.moniker}</strong></h2>
            <h3 class="valign-wrapper">Intern &nbsp; <i class="small material-icons"> cloud</i> </h3>
        </div>
        <div class="card-action bottom">
            <ul class="">
                <li class="">ID: ${intern.id}</li>
                <li class="">EMAIL:<a href="mailto:${intern.email} ">${intern.email}</a></li>
                <li class="">SCHOOL: ${intern.school}</li>
            </ul>
        </div>
    </div>
</div>` );
  }
  return '';

};
// TODO: Create a function to generate markdown for README
function generateHTML(title, managers, engineers, interns) {
  return `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>${title}</title>
  
  
      <!-- Compiled and minified CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  
      <link rel="stylesheet" href="./style.css">
  </head>
  
  <style>
      body {
          background-image: url('../assets/images/wallpaper-1.jpg');
      }
  </style>
  
  <body>
      <nav>
          <div class="nav-wrapper">
              <h1 class="brand-logo center">${title}</h1>
          </div>
      </nav>
      <div class=" container ">
          <div class="row">
          
          ${renderManager(managers)}

          ${renderEngineers(engineers)}
          
          ${renderInterns(interns)}
          
          
          
          </div>
      </div>
      
      
              <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.7/js/materialize.min.js"></script>
      
      
      
              <!-- Compiled and minified JavaScript -->
              <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script> -->
      
      </body>
      
      </html> `
};

module.exports = {generateHTML};