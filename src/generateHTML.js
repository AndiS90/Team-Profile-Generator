//TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderManager(managers) {
for(i=0; i<managers.length; i++) 
{return`<div class="col s12 m4 l3">
    <div class="card">
        <div class="card-content top">
            <h2 class="card-title "><strong>${managers[i].moniker}</strong></h2>
            <h3 class=" valign-wrapper ">Manager &nbsp; <i class="small material-icons"> brightness_5</i>
            </h3>
        </div>
        <div class="card-action bottom">
            <ul class="">
                <li class="">ID: ${managers[i].id}</li>
                <li class="">EMAIL: <a href="mailto:${managers[i].email}"> ${managers[i].email} </a></li>
                <li class="">OFFICE: ${managers[i].office}</li>
            </ul>
        </div>                  
    </div>
</div>` };
  };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderEngineers(engineers) {
  for (i=0; i<engineers.length; i++) 
  { return `<div class="col s12 m4 l3">
    <div class="card">
        <div class="card-content top">
            <h2 class="card-title"><strong>${engineers[i].moniker}</strong></h2>
            <h3 class=" valign-wrapper">Engineer &nbsp;<i class="small material-icons"> brightness_3</i></h3>
        </div>
        <div class="card-action bottom">
            <ul class="">
                <li class="">ID: ${engineers[i].id} </li>
                <li class="">EMAIL: <a href="mailto:${engineers[i].email}"> ${engineers[i].email}</a> </li>
                <li class="">GITHUB: <a href="https://github.com/${engineers[i].github}"> ${engineers[i].github}</a></li>
            </ul>
        </div>
    </div>
</div>` };
  };
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderInterns(interns) {
 for (i=0; i<interns.length; i++)
 { return `<div class="col s12 m4 l3">
    <div class="card ">
        <div class="card-content top">
            <h2 class="card-title"><strong>${interns[i].moniker}</strong></h2>
            <h3 class="valign-wrapper">Intern &nbsp; <i class="small material-icons"> cloud</i> </h3>
        </div>
        <div class="card-action bottom">
            <ul class="">
                <li class="">ID: ${interns[i].id}</li>
                <li class="">EMAIL: <a href="mailto:${interns[i].email} "> ${interns[i].email}</a></li>
                <li class="">SCHOOL: ${interns[i].school}</li>
            </ul>
        </div>
    </div>
</div>` };
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