import { TennisGame } from './TennisGame';

export class TennisGame3 implements TennisGame {

  private scoreDisplayName: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];

  private playerOneScorePoints: number = 0;
  private playerTwoScorePoints: number = 0;
  private playerOneName: string;
  private playerTwoName: string;

  constructor(playerOneName: string, playerTwoName: string) {
    this.playerOneName = playerOneName;
    this.playerTwoName = playerTwoName;
  }

  getScore(): string {
    let displayedScore: string;

    if (this.doPlayersHaveLessThan40Points()) {
      displayedScore = this.scoreDisplayName[this.playerOneScorePoints];

      return this.areScoresEqual()
        ? displayedScore + '-All'
        : displayedScore + '-' + this.scoreDisplayName[this.playerTwoScorePoints];

    } else {
      if (this.areScoresEqual()) {
        return 'Deuce';
      }
      displayedScore = this.playerOneScorePoints > this.playerTwoScorePoints ? this.playerOneName : this.playerTwoName;
      
      return (((this.playerOneScorePoints - this.playerTwoScorePoints) * (this.playerOneScorePoints - this.playerTwoScorePoints)) === 1) 
        ? 'Advantage ' + displayedScore
        : 'Win for ' + displayedScore;
    }
  }

  private areScoresEqual() {
    return this.playerOneScorePoints === this.playerTwoScorePoints
  }

  private doPlayersHaveLessThan40Points() {
    // return this.playerOneScorePoints < 3 || this.playerTwoScorePoints < 3
    return this.playerOneScorePoints < 4
      && this.playerTwoScorePoints < 4
      && !(this.playerOneScorePoints + this.playerTwoScorePoints === 6)
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.playerOneScorePoints += 1;
    else
      this.playerTwoScorePoints += 1;

  }
}
