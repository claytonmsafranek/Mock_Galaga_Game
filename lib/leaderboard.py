from flask import Flask, request, jsonify, json, make_response, Response
from flask_sqlalchemy import SQLAlchemy
from dataclasses import dataclass
import json
from flask_cors import CORS, cross_origin

app = Flask(__name__)
#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///leaderboard.db'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://mysqlremoteuser:remotepassword@ec2-44-202-119-23.compute-1.amazonaws.com/gameDB'
app.config['SQLALCHEMY_ECHO'] = False

db = SQLAlchemy(app)

#define what a leaderboard entry looks like
@dataclass
class Entry(db.Model):

    player: str
    score: str

    __tablename__ = 'leaderboard'
    id = db.Column(db.Integer(), primary_key=True)
    player = db.Column(db.String(100), nullable=False)
    score = db.Column(db.Integer(), nullable=False)

    def __init__(self, player, score):
        self.player = player
        self.score = score

    def getScore(self):
        return self.score

    def getPlayer(self):
        return self.player

#This function will return the top 5 on the leaderboard. The top 5
#will then be passed back to the game to display in order on the screen.
@app.route('/getLeaderboard', methods=['GET'])
def getLeaderboard():
    if request.method == 'GET':
        #get N number of elements from the leaderboard
        #data = Entry.query.limit(1).all()
        data = Entry.query.order_by(Entry.score.desc()).limit(5).all()

        #turn the data into a JSON object to pass back
        response = jsonify(data)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

#this function will return whether or not a user's score is good enough to be inserted into
#the leaderboard. If a users score is good enough to be inserted into the leaderboard, then
#this function will return true, and the user will be prompted for their name input which will
#be used in another function to associate the input name and score to be inserted into the database
#If the player's score is not good enough this will return false and the player will not be
#prompted for a username, and will just be displayed the leaderboard
@app.route('/checkLeaderboard', methods=['POST'])
@cross_origin()
def checkLeaderboard():
    if request.method == 'POST':
        content_type = request.headers.get('Content-Type')
        if (content_type == 'application/json'):
            infoIn = request.json
            incomingScore = infoIn.get('score')
            print("--------------------Incoming Data: " + str(infoIn))
            print("--------------------Incoming Score: " + str(incomingScore))

            top5 = Entry.query.order_by(Entry.score.desc()).limit(5).all()
            print("--------------------TOP 5: " + str(top5) + " has a length of: " + str(len(top5)))

            #get the last entry in the top 5 and check if it is lower than the input score
            lastEntry = top5[len(top5) - 1]
            print("--------------------Last Entry's Score: " + str(lastEntry.getScore()))

            #send back a respone json saying if player's score is good enough or not
            responseTrue = jsonify({'scoreIsGoodEnough': 'true'})
            responseFalse = jsonify({'scoreIsGoodEnough': 'false'})

            if int(incomingScore) >= int(lastEntry.getScore()) or len(top5) < 5:
                #player's score is good enough to be on leaderboard
                print("--------------------Player's score IS good enough")
                return responseTrue
            else:
                #player's score is NOT good enough to be on leaderboard
                print("--------------------Player's score IS NOT good enough")
                return responseFalse
        else:
            return 'Content-Type not supported'

@app.route('/postPlayerScore', methods=['POST'])
@cross_origin()
def postPlayerScore():
    if request.method == 'POST':
        content_type = request.headers.get('Content-Type')
        #validate the correct content type is coming in
        if (content_type == 'application/json'):
            infoIn = request.json
            incomingScore = infoIn.get('score')
            incomingPlayer = infoIn.get('name')
            print("--------------------Incoming Data: " + str(infoIn))
            print("--------------------Incoming Score: " + str(incomingScore))
            print("--------------------Incoming Player: " + str(incomingPlayer))

            #create entry in database for incoming data
            entryToAdd = Entry(incomingPlayer, incomingScore)
            db.session.add(entryToAdd)
            db.session.commit()
            print("--------------------Entry " + str(entryToAdd) + " added into leaderboard table!")

            #return success
            return jsonify({'addedEntry' : 'true'}) #might want to send back the name that was just inserted too so can highlight text when displayed
        else:
            #return failure
            print("--------------------Content-Type not supported!!!")
            return jsonify({'addedEntry' : 'false'})

if (__name__ == "__main__"):
    app.run(debug=True)

