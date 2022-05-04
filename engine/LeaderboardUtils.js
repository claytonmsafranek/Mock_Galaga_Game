async function checkLeaderboard(inputData) {
    //call game API function /checkLeaderboard
    console.log("Calling API checkLeaderboard...")
    const response = await fetch('http://ec2-44-202-119-23.compute-1.amazonaws.com/api/checkLeaderboard',
        {
            method: "POST",
            // 'Accept' : 'application/json',
            // 'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                //'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(inputData)
        })

    //turn the response into native json object
    const toReturn = await response.json()

    //return true or false, indicating whether or not player's score is good enough
    return toReturn
}

async function getLeaderboard() {
    //call game API function /getLeaderboard
    console.log("Calling API getLeaderboard...")
    const response = await fetch('http://ec2-44-202-119-23.compute-1.amazonaws.com/api/getLeaderboard',
        {
            method: 'GET'
        })

    //turn response into json object
    const toReturn = await response.json()

    return toReturn
}

async function postPlayerScore(inputData) {
    //call game API function /postPlayerScore
    console.log("Calling API postPlayerScore...")
    const response = await fetch('http://ec2-44-202-119-23.compute-1.amazonaws.com/api/postPlayerScore',
        {
            method: "POST",
            // 'Accept' : 'application/json',
            // 'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                //'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(inputData)
        })

    //turn the response into native json object
    const toReturn = await response.json()

    //return true or false, indicating if the players score was added to DB or not
    //also returns the players name that was added to the DB for future features
    return toReturn
    
}




export { checkLeaderboard, getLeaderboard, postPlayerScore }
