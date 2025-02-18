export function cleanString (str) {
  str = str.replace(/[^a-zA-Z\s]/g, " ");

  return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

export function formatPoints (object) {

  let expHTML = '';

  object.explanation.forEach((element) => {

    expHTML += 
    `
      <div class = "explanationPoints">
        &bull; ${element}
      </div> 
    `
  });

  return expHTML;
}


export function renderList (object, sectionTitle) {
  let jobHTML = '';

  object.forEach((element) => 
  { 
    jobHTML += checkSection(element, sectionTitle)
      
  });

  document.querySelector(`.js-${sectionTitle}`).innerHTML = jobHTML;
}


function checkSection (element,sectionTitle) {

  let html = "";

  if (sectionTitle == "skills-text" || sectionTitle =="projects-text") {
    html = 
    ` 
        <div class = "container">
            <div class = "type">
              ${element.type} 
            </div>
            <div class = "list">
              &bull; ${element.list}
            </div>
        </div>
    `
  }

  else if (sectionTitle == "summary-text") {
    html = element
  }
  
  else {
    const expHTML = formatPoints(element);

    html = 
    `
        <div class="container">
          <div class = "position">
            <div class="position-info">

              <div class="position-name">
                  ${element.position_name}
              </div>

              <div class="company-name">
                  ${element.company_name}
              </div> 
           
            </div>

            <div class="position-details">
              <div class="location">
                ${element.location}
              </div>
              <div class="location">
                ${element.position_length.start} - ${element.position_length.end}
              </div> 
            </div>
           </div>
          <div class="explanation">
            ${expHTML}
          </div>

        </div>
      `;
  }

  return html
}