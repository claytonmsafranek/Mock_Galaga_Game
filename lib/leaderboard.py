import json
from flask import Flask, request, jsonify

#name of applicaiton
app = Flask(__name__)

#define what a player entry looks like
class PlayerEntry():
    def __init__(self, initials, score):
        self.initials = initials
        self.score = score
    
    #return player entry object's initials
    def getInitials(self):
        return self.initials

    #return player entry object's score
    def getScore(self):
        return self.score
        

#TODO: calling this route will return the entire leaderboard
@app.route('/getLeaderboard', methods=['GET'])
def getLeaderboard():
    return 'Got leaderboard'

#TODO: calling this route should return the lowest score on the leaderboard
#this function would be used to determine whether or not the user is going 
#to be presented with a text box to enter thier initials to be displayed on the leaderboard


#TODO: post the players highscore and insert it into the database
#this function should also reorder the leaderboard on its own as well
@app.route('/postPlayerScore', methods=['POST'])
def postPlayerScore():
    if request.method=='POST':
        return "Posted player's high score"
    


