
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
  ] 

function superbowlWin(array) {
    let winner = array.find(obj => obj.result === "W" )
    if (winner) {
        return winner.year
    }
}