import { useState } from "react";
import { useEffect } from "react";

function FootBallMatch() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [matches, setMatches] = useState([]);

  const years = [2011, 2012, 2013, 2014, 2015, 2016, 2017];

  useEffect(() => {
    fetch(
      `https://jsonmock.hackerrank.com/api/football_competitions?year=${selectedYear}`
    )
      .then((res) => res.json())
      .then((data) => setMatches(data.data));
  }, [selectedYear]);

  return (
    <div style={{display:"flex", justifyContent:"space-evenly"}}>
      <div>
        <div>Select Year</div>
        <ul style={{cursor:"pointer"}}>
          {years.map((year) => (
            <li  onClick={(e)=> setSelectedYear(e.target.value) } key={year} value={year}> {year} </li>
          ))}
        </ul>
      </div>
      <div>
        {matches.length > 0 ? (
          <div>
            <h3>Total Match: {matches.length} , Year: {selectedYear}</h3>
            <ul>
              {matches.map((match) => (
                <li key={match.name}>
                  {match.name} won by {match.winner}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>No Matches</div>
        )}
      </div>
    </div>
  );
}

export default FootBallMatch;
