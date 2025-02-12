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
  
    const expHTML = formatPoints(element);
 

    jobHTML += 
      `
        <div class="job-container">


          <div class = "position">
            <div class="position-info">

              <div class="company-name">
                  ${element.company_name}
              </div> 

              <div class="position-name">
                  ${element.position_name}
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
  });

  document.querySelector(`.js-${sectionTitle}`).innerHTML = jobHTML;
}