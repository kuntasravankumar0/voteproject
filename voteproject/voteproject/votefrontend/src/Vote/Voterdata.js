import { useState, useEffect } from "react";
import service from "../service"; // Ensure the service is correctly imported
import { useLocation } from 'react-router-dom';

function Voterdata() {
  const [voterData, setVoterData] = useState(null);
  const location = useLocation();
  const { mobile } = location.state || {};
  const [isElection, setIsElection] = useState(true);

  const [Nameupdate, setNameupdate] = useState("");
  const [Emailupdate, setEmailupdate] = useState("");
  const [AgeUpdate, setAgeUpdate] = useState("");
  const [Aadharupdate, setAadharupdate] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false); // New state to control whether inputs are visible

  const toggleMode = () => {
    setIsElection(!isElection);
  };

  useEffect(() => {
    if (mobile) {
      service.getbymobilenumber(mobile)
        .then((res) => {
          setVoterData(res.data);
        })
        .catch((error) => {
          console.error('Error fetching voter data:', error);
        });
    }
  }, [mobile]);

  if (!voterData) {
    return (
      <div>
        <p>Loading voter data...</p>
        <center>
          <div className="loader"></div>
        </center>
      </div>
    );
  }

  const deletedata = () => {
    
    
    if (mobile) {
      service.deletedataofvoter(mobile)
        .then((res) => {
        })
        .catch((error) => {
          console.error('Error deleting voter data:', error);
        });
    }

  };

  const updatedata = () => {
    const updatedData = {
      id: voterData.id,
      name: Nameupdate || voterData.name,
      email: Emailupdate || voterData.email,
      age: AgeUpdate || voterData.age,
      aadhar: Aadharupdate || voterData.aadhar,
      mobile: voterData.mobile, 
    };
const mobileNumber = updatedData.mobile;
    service.updatedataofvoter(updatedData,mobileNumber)
      .then((res) => {
        setVoterData(res.data); 
        setIsEditMode(false); 
      })
      .catch((error) => {
        console.error('Error updating voter data:', error);
      });
  };

  return (
    <div>
      <center><h1>Voter Data</h1></center>
      
      <div className="inlinedataofvote">
        <p><strong>ID:</strong> {voterData.id}</p>

        <p><strong>Name:</strong>
          {isEditMode ? (
            <input
              type="text"
              value={Nameupdate || voterData.name}
              onChange={(e) => setNameupdate(e.target.value)}
            />
          ) : (
            <span>{voterData.name}</span>
          )}
        </p>

        <p><strong>Email:</strong>
          {isEditMode ? (
            <input
              type="email"
              value={Emailupdate || voterData.email}
              onChange={(e) => setEmailupdate(e.target.value)}
            />
          ) : (
            <span>{voterData.email}</span>
          )}
        </p>

        <p><strong>Mobile:</strong>{voterData.mobile}</p>

        <p><strong>Age:</strong>
          {isEditMode ? (
            <input
              type="number"
              value={AgeUpdate || voterData.age}
              onChange={(e) => setAgeUpdate(e.target.value)}
            />
          ) : (
            <span>{voterData.age}</span>
          )}
        </p>

        <p><strong>Aadhar:</strong>
          {isEditMode ? (
            <input
              type="text"
              value={Aadharupdate || voterData.aadhar}
              onChange={(e) => setAadharupdate(e.target.value)}
            />
          ) : (
            <span>{voterData.aadhar}</span>
          )}
        </p>

        <div>
          {isEditMode ? (
            <>
              <button className="update-button" onClick={updatedata}>update</button>
              <button className="cancel-button" onClick={() => setIsEditMode(false)}>Cancel</button>
            </>
          ) : (
            <button className="edit-button" onClick={() => setIsEditMode(true)}>Edit</button>
          )}
        </div>

        <button className="delete-button" onClick={deletedata}>Delete</button>
        <p>After deleting, please refresh the page.</p>
      </div>

      <div className="inlinedataofvote">
        <h2>{isElection ? 'Election Voting Instructions' : 'Poll/Survey Voting Instructions'}</h2>
        <button onClick={toggleMode}>
          Switch to {isElection ? 'Poll/Survey' : 'Election'} Instructions
        </button>

        <div>
          {isElection ? (
            <>
              <h3>Registration</h3>
              <p>Ensure you are registered to vote if required in your area.</p>
              <p>This may involve filling out forms online or in person at a local office.</p>
              <p>Confirm your registration status well in advance of the election date.</p>

              <h3>Find Your Polling Station</h3>
              <p>Know where you need to vote. You can usually find your assigned polling </p>
              <p>station by checking your voter registration card or by looking up the details online.</p>
              <p>Polling stations may be in community centers, schools, or other public buildings.</p>

              <h3>Bring Required Identification</h3>
              <p>Some areas require ID to vote (e.g., a government-issued photo ID). </p>
              <p>Check your local rules to ensure you have the correct ID when you arrive.</p>

              <h3>Voting Process</h3>
              <p>Once at the polling station, you may be directed to a booth where you can cast your vote in privacy.</p>
              <p>In some areas, you may vote using paper ballots, while others use electronic voting machines.</p>
              <p>Mark your choices carefully, and ensure you follow instructions to avoid invalidating your vote.</p>

              <h3>Casting Your Vote</h3>
              <p>After filling out your ballot, submit it as directed, whether into a ballot box or via an electronic submission.</p>

              <h3>Verify Your Vote (Optional)</h3>
              <p>In some regions, you can verify that your vote has been recorded correctly.</p>

              <h3>Election Day</h3>
              <p>Arrive early if possible, especially if there are long lines or if you need to vote in specific hours.</p>
            </>
          ) : (
            <>
              <h3>Registration or Sign-Up</h3>
              <p>You may need to sign up for the poll or survey, especially for online voting.</p>
              <p>Provide necessary information or credentials.</p>

              <h3>Read Instructions</h3>
              <p>Carefully read the instructions for the survey or poll to understand the process and what you are voting on.</p>

              <h3>Cast Your Vote</h3>
              <p>Follow the platform’s steps to cast your vote, whether it's selecting an option, typing in an answer, or making a choice from a list.</p>

              <h3>Submit Your Vote</h3>
              <p>Ensure you hit the "submit" or "finish" button after making your choice.</p>

              <h3>Check for Confirmation</h3>
              <p>After submitting, you may receive a confirmation or thank you message to let you know your vote was recorded.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Voterdata;
