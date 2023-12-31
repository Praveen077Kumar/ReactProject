
import female from "./images/female.jpg";
import male from "./images/male.jpg";

const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {
  
  return (

    <main className="container">
      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-6">
          <select
            className="form-select form-select-lg"
            value={selectedTeam}
            onChange={handleTeamSelectionChange}
          >
            <option value="TeamA">Team-A</option>
            <option value="TeamB">Team-B</option>
            <option value="TeamC">Team-C</option>
            <option value="TeamD">Team-D</option>
          </select>
        </div>
      </div>
      <div class="row justify-content-center mt-3 mb-3">
        <div class="col-8">
          <div class="card-collection">
            {employees.map((employee) => {
              return (
                <div
                  id={employee.id}
                  className={
                    employee.teamName === selectedTeam
                      ? "card m-2 standout"
                      : "card m-2"
                  }
                  style={{ cursor: "pointer" }}
                  onClick={handleEmployeeCardClick}
                >
                  {employee.gender === "male" ? (
                    <img src={male} alt="" className="card-img-top mt-2" />
                  ) : (
                    <img src={female} alt="" className="card-img-top mt-2" />
                  )}

                  <div className="card-body">
                    <h5 className="card-title">
                      Full Name: {employee.fullName}{"  "}
                    </h5>
                    <p className="card-text">
                      <b>Designation:</b>
                      {employee.designation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
