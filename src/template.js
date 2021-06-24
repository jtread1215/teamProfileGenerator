// create the team
const createTeam = team => {

    // create the manager html
    const createManager = manager => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${manager.addTeammate()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.addPosition()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.addId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.addEmail()}">${manager.addEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.addOffNum()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // create the html for engineers
    const createEngineer = engineer => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${engineer.addTeammate()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.addPosition()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.addId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.addEmail()}">${engineer.addEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.addGithub()}" target="_blank" rel="noopener noreferrer">${engineer.addGithub()}</a></li>
        </ul>
    </div>
</div>
        `;
    };

    // create the html for interns
    const createIntern = intern => {
        return `
        <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.addTeammate()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.addPosition()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.addId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.addEmail()}">${intern.addEmail()}</a></li>
            <li class="list-group-item">School: ${intern.addSchool()}</li>
        </ul>
    </div>
</div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.addPosition() === "Manager")
        .map(manager => createManager(manager))
    );
    html.push(team
        .filter(employee => employee.addPosition() === "Engineer")
        .map(engineer => createEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.addPosition() === "Intern")
        .map(intern => createIntern(intern))
        .join("")
    );

    return html.join("");

}

// export function to generate entire page
module.exports = team => {

    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${createTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};