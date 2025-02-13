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

  if (sectionTitle == "skills-text") {
    html = 
    ` 
      <div class = "container">
        <div class = "skills-container">
            <div class = "skill-type">
              ${element.type}: 
            </div>
            <div class = "skill-list">
              ${element.list}
            </div>
            
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