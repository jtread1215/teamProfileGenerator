const Director = require("../lib/director");
const Teammate = require("../lib/teammate");

const renderTeammates = team => {
    const renderHeadCoach = headCoach => {
        return `
        <div class= "card teammate-card">
        <div class= "card-header">
            <h2 class= "card-title"> ${headCoach.getName()}</h2>
            <h3 class= "card-title"> ${headCoach.getPosition()}</h3>
        </div>
        <div class= "card-body">
            <ul class= "list-group">
                <li class= "list-group-item"> ID: ${headCoach.getId()}</li>
                <li class= "list-group-item"> Email: <a href="mailto:${headCoach.getEmail()}">${headCoach.getEmail()}</a></li>
                <li class= "list-group-item"> Office: ${headCoach.getOffice()}</li>
            </ul>
        </div>
    </div>
        `;
    };
    const renderDirector = director => {
        return `
        <div class="card director-card">
        <div class="card-header">
            <h2 class="card-title"> ${director.getName()}</h2>
            <h3 class="card-title"> ${director.getPosition()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"> ID: ${director.getId()}</li>
                <li class="list-group-item"> Email: <a href="mailto:${director.getEmail()}">${director.getEmail()}</a></li>
                <li class="list-group-item"> GitHub: <a href="https://github.com/${director.getGithub()}" target="_blank" rel="noopener noreferrer">${director.getGithub()}</a></li>
            </ul>
        </div>
    </div>
        `;
    };
    const renderProspect = prospect => {
        return `
        <div class="card prospect-card">
            <div class="card-header">
            <h2 class="card-title">${prospect.getName()}</h2>
            <h3 class="card-title">${prospect.getPosition()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item"> ID: ${prospect.getId()}</li>
                <li class="list-group-item"> Email: <a href="mailto:${prospect.getEmail()}">${prospect.getEmail()}</a></li>
                <li class="list-group-item"> Education: ${prospect.getEducation()}</li>
            </ul>
        </div>
    </div>
        `;
    };
    const html = [];
    html.push(team
        .filter(Teammate => Teammate.getPosition()=== "Head Coach")
        .map(HeadCoach => renderHeadCoach(HeadCoach))
    );
    html.push(team
        .filter(Teammate => Teammate.getPosition()=== "Director")
        .map(Director => renderDirector(Director))
        .join("")
    );
    html.push(team
        .filter(Teammate => Teammate.getPosition()=== "Prospect")
        .map(Prospect => renderProspect(Prospect))
        .join("")
    );
    return html.join("");
}

module.exports = team;