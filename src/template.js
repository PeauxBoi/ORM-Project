const generateManager = managerData => {
    if(!managerData) {
        return '';
    };

    return `
    <div class="col-lg-3 col-md-6 mb-4">
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h2>${managerData.name}</h2>
                <h2>
                    <i class="fas fa-mug-hot"> </i> 
                    ${managerData.role}
                </h2>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${managerData.id}</li>
                <li class="list-group-item">email: ${managerData.email}</li>
                <li class="list-group-item">Office number: ${managerData.officeNumber}</li>
            </div>
        </div>
    </div>
        `;
};
const generateEngineer = engineerData => {
    if(!engineerData) {
        return '';
    };
    var codeBlock = '';
        engineerData.forEach(engineer => {
            codeBlock +=  `
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h2>${engineer.name}</h2>
                        <h2><i class="fas fa-glasses"></i> ${engineer.role}</h2>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineer.id}</li>
                        <li class="list-group-item">email: ${engineer.email}</li>
                        <li class="list-group-item">Github: ${engineer.github}</li>
                    </div>
                </div>
             </div>
            `;
        });
    console.log(codeBlock);
    return(codeBlock);

};
const generateIntern = internData => {
    if(!internData) {
        return '';
    }
    var codeBlock = '';
    internData.forEach(intern => {
    codeBlock += `
    <div class="col-lg-3 col-md-6 mb-4">
        <div class="card">
            <div class="card-header bg-primary text-white">
                <h2>${intern.name}</h2>
                <h2><i class="fas fa-user-graduate"></i> ${intern.role}</h2>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">email: ${intern.email}</li>
                <li class="list-group-item">School: ${intern.school}</li>
            </div>
        </div>
    </div>
    `;

    });  
    console.log(codeBlock);
    return(codeBlock);
};

module.exports = templateData => {

    const [manager] = templateData;
    
    const engineers = templateData.filter(employee => employee.role === 'Engineer');
    
    const interns = templateData.filter(employee => employee.role === 'Intern');
    


    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="style.css"/>
            
            <title>My Team</title>
        </head>

        <body>
            <header class="jumbotron jumbotron-fluid bg-danger text-white">
            <h1>My Team</h1>
            </header>
            <div class="row">
                ${generateManager(manager)}
                ${generateEngineer(engineers)}
                ${generateIntern(interns)}
            </div>
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
            <script src="./assets/js/script.js"></script>
        </body>
        </html>
    `;
    };