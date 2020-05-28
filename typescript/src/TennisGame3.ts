import {TennisGame} from './TennisGame';

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

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.playerOneScorePoints += 1;
    else
      this.playerTwoScorePoints += 1;

  }

  getScore(): string {

    if (this.isGameDeuceOrAdvantage()) {

      if (this.areScoresEqual()) {
        return 'Deuce';
      }

      let playerNameWithAdvantage = this.getPlayerNameWithAdvantage();

      return (this.foo() === 1)
        ? 'Advantage ' + playerNameWithAdvantage
        : 'Win for ' + playerNameWithAdvantage;

    } else {
      let displayedScore: string;
      displayedScore = this.scoreDisplayName[this.playerOneScorePoints];

      return this.areScoresEqual()
        ? displayedScore + '-All'
        : displayedScore + '-' + this.scoreDisplayName[this.playerTwoScorePoints];

    }
  }

  private foo() {
    return (Math.abs(this.playerOneScorePoints - this.playerTwoScorePoints));
  }

  private isGameDeuceOrAdvantage() {
    return this.playerOneScorePoints >= 4
      || this.playerTwoScorePoints >= 4
      || (this.playerOneScorePoints + this.playerTwoScorePoints) === 6;
  }

  private areScoresEqual() {
    return this.playerOneScorePoints === this.playerTwoScorePoints
  }

  private getPlayerNameWithAdvantage() {
    return this.playerOneScorePoints > this.playerTwoScorePoints ? this.playerOneName : this.playerTwoName;
  }
}
