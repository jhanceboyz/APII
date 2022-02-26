    // Declarations
    let showdata = ""
    let str = ""
    // End declarations

    // Mainpage 
    fetch('https://api.hatchways.io/assessment/students')
      .then(response => response.json())
      .then(data => {
        recieved_data = data
        arr = data.students
        arr.forEach(element => {
          showData(element)
        });
      });
    // End mainpage

    // Search 
    document.getElementById('search_by_name').addEventListener('keyup', (event) => {
      userinput = document.getElementById('search_by_name')
      if (event.key == "Shift") { }
      else if (event.key == "Backspace") {
        str = userinput.value
        if (userinput.value == "") {
          console.log("Reload page")
          location.reload()
        }
      }
      else {
        str += event.key
        str = str.charAt(0).toUpperCase() + str.slice(1);
        console.log("String is " + str)
        let filter = recieved_data.students.filter(d =>
          d.firstName == str
        )
        filter.forEach(element => {
          showdata = ""
          showData(element)
        });
      }
    })
    //End search

    function showData(element) {
      showdata += `    <div class="accordion animate__animated animate__fadeIn" id="accordionExample">
                                  <div class="accordion-item">
                                    <h2 class="accordion-header" id="headingOne">
                                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="${"#collapseOne" + element.id}"
                                        aria-expanded="true" aria-controls="${"collapseOne" + element.id}">
                                        <div class="col-3 mx-4"><img src="${element.pic}" id="profileimage" class="img-thumbnail h-100 w-100"
                                            alt="..."></div>
                                        <div class="col">
                                          <div class="row">
                                            <h1 id="name">${element.firstName + ' ' + element.lastName}</h1>
                                          </div>
                                          <div class="row">
                                            <p id="email">${element.email}</p>
                                          </div>
                                          <div class="row">
                                            <p id="company">${element.company}</p>
                                          </div>
                                          <div class="row">
                                            <p id="skill">${element.skill}</p>
                                          </div>
                                          <div class="row">
                                            <p id="average">${element.city}</p>
                                          </div>
                                            <div class="row">
                                            <p>Tag</p>
                                            </div>
                                        </div>
                                      </button>
                                    </h2>
                                    <div id="${"collapseOne" + element.id}" class="accordion-collapse collapse hide" aria-labelledby="headingOne"
                                      data-bs-parent="#accordionExample">
                                      <div class="accordion-body" id="list">
                                        ${`Test1: &nbsp ` + element.grades[0] + `<br>` +
                                          `Test2: &nbsp` + element.grades[1] + `<br>` +
                                          `Test3: &nbsp` + element.grades[2] + `<br>` +
                                          `Test4: &nbsp` + element.grades[3] + `<br>` +
                                          `Test5: &nbsp` + element.grades[4] + `<br>` +
                                          `Test6: &nbsp` + element.grades[5] + `<br>` +
                                          `Test7: &nbsp` + element.grades[6] + `<br>` +
                                          `Test8: &nbsp` + element.grades[7] + `<br>`}
                                      </div>
                                    </div>
                                  </div>
                                </div>`;
      document.getElementById('root').innerHTML = showdata
    }

