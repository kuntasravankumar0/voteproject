import './allcss.css';
import image1 from '../Vote/image1.png';

function Home() {
    return (
        <div className="home-container">
            <center><h1 className="main-heading">Welcome to the Chief Electoral Officer Telangana</h1></center>

            <div className="content-container">
                <div className="image-container">
                    <img className="image1" src={image1} alt="Chief Electoral Officer" />
                </div>

                <div className="text-container">
                    <h2 className="subheading">About Us</h2>
                    <p>
                        The Chief Electoral Office functions under the overall supervision and control of the Election Commission of India.
                    </p>
                    <p>
                        It monitors the work relating to the conduct of General Elections and Bye-Elections to the House of People from Telangana,
                    </p>
                    <p>
                        T.S. Legislative Assembly, and T.S. Legislative Council.
                    </p>
                    <p>
                        This includes preparation and updation of Electoral Rolls, Issue of Photo Identity Cards to Electors,
                    </p>
                    <p>
                        Rationalization/re-organization of Polling Stations, voters' education, implementation of Model Code of Conduct, the Election Laws,
                    </p>
                    <p>
                        and the instructions issued by the Election Commission of India from time to time.
                    </p>
                </div>



                
            </div>











            <div className="voting-info">
      <h2>Voting in Elections (e.g., Local, State, or National Elections)</h2>
      
      <p><strong>Register to Vote:</strong><br />
      In many places, you must be registered to vote. Check the registration deadlines in your area (usually several weeks before the election). You can register online, at the DMV, or in person at designated government offices, depending on your location.</p>
      
      <p><strong>Know the Voting Requirements:</strong><br />
      Ensure you meet the eligibility criteria (e.g., age, citizenship, residence).</p>
      
      <p><strong>Get Information on Candidates and Issues:</strong><br />
      Research the candidates, parties, and issues on the ballot so you can make an informed decision.</p>
      
      <p><strong>Find Your Polling Place:</strong><br />
      Look up where you need to go to vote. This information is often available online or can be found via a voter information guide.</p>
      
      <p><strong>Go to Your Polling Station:</strong><br />
      On election day, visit your assigned polling place. Bring a valid ID if required.</p>
      
      <p><strong>Cast Your Vote:</strong><br />
      Once at the polling place, you'll be given a ballot to fill out. This can either be a paper ballot or digital voting machine, depending on your location. Mark your choices carefully and submit the ballot as instructed.</p>
      
      <p><strong>Absentee or Early Voting:</strong><br />
      If you're unable to vote in person on election day, you can request an absentee ballot or vote early if those options are available.</p>
      
      <h3>Voting in Online Polls or Surveys:</h3>
      
      <p><strong>Find the Poll/Survey:</strong><br />
      Locate the poll or survey you want to participate in, usually on a website, social media, or email invitation.</p>
      
      <p><strong>Select Your Response:</strong><br />
      Choose the option that reflects your opinion or choice.</p>
      
      <p><strong>Submit Your Vote:</strong><br />
      Once you've selected your answer, click the submit button or follow the instructions to send in your vote.</p>
      
      <h3>Voting in a Meeting or Group Decision (e.g., Work or Club Vote):</h3>
      
      <p><strong>Participate in the Discussion:</strong><br />
      Before the vote, listen to the proposals or arguments being discussed.</p>
      
      <p><strong>Cast Your Vote:</strong><br />
      You may vote in person, through a show of hands, or by writing your vote on a piece of paper.</p>
      
      <p><strong>Follow the Voting Procedure:</strong><br />
      The method of voting will depend on the group or meeting's rules.</p>
      
      <h3>Voting in a Polling App (e.g., Poll Everywhere, Twitter, etc.):</h3>
      
      <p><strong>Follow Instructions:</strong><br />
      Each app or platform may have specific steps (like sending a text or clicking on a link).</p>
      
      <p><strong>Select Your Option:</strong><br />
      Choose your preferred response from the available options.</p>
      
      <p><strong>Submit the Vote:</strong><br />
      Confirm your selection by pressing the appropriate button.</p>
      
      <h3>Common Voting Methods:</h3>
      <ul>
        <li><strong>In-Person Voting:</strong> Going to a designated polling station.</li>
        <li><strong>Mail-in Voting:</strong> Voting by completing and sending in a ballot by mail.</li>
        <li><strong>Online Voting:</strong> Using a website or app to cast your vote electronically.</li>
        <li><strong>Absentee Voting:</strong> Voting remotely if you are unable to attend in person on election day.</li>
      </ul>
    </div>



    
        </div>
    );
}

export default Home;
