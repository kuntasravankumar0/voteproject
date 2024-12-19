import React from 'react';
import './allcss.css';

function Help() {
    return (
        <div className="help-container">
            <center>
                <h1 className="help-title">Help</h1>
            </center>
            <div className="help-content">
                <p>
                    The office is headed by the Chief Electoral Officer appointed by the Election Commission of India.
                </p>
                <p>
                    Subject to the superintendence, direction, and control of the Election Commission,
                </p>
                <p>
                    he/she supervises the preparation, revision, and correction of all Electoral Rolls and the conduct of all elections under Sec 13 A (2) of R.P. Act 1950 and Sec 20 of R.P. Act, 1951.
                </p>
                <p>
                    The Chief Electoral Officer is assisted by the Additional Chief Electoral Officer,
                </p>
                <p>
                    Joint Chief Electoral Officer, and other officers drawn from the IAS/State Secretariat Service.
                </p>
                <br></br>
                <h1>Understanding Election Processes</h1>
      <h2>Types of Elections:</h2>
      <ul>
        <li><strong>Local Elections:</strong> Elections for local offices like mayors, council members, etc.</li>
        <li><strong>National Elections:</strong> Elections for national offices like president, congresspersons, senators.</li>
        <li><strong>Primaries:</strong> Elections within political parties to choose candidates for the general election.</li>
        <li><strong>General Elections:</strong> Elections where the public votes for political candidates in various offices.</li>
      </ul>
      <h2>How Voting Works:</h2>
      <p>Voting can take place in-person on election day, via absentee or mail-in ballots, or through early voting. Each state or locality may have different rules for voting.</p>
    
            </div>
        </div>
    );
}

export default Help;
