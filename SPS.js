let score=JSON.parse(localStorage.getItem('score')) ||
                                                                        {
                                                                    wins:0,
                                                                    losses:0,
                                                                    Ties:0
                                                                };

//      if(!score){
// score= wins:0,
//      losses:0,
//       Ties:0
//      }


UpdateScoreElemet();

        function playGame(playerMove){

            const cmtmove=pickComputermove();
                                      
                                      let res='';
                                      if(playerMove==='scissors'){
                                        if(cmtmove === 'rock')
                                      {
                                          res='You Loose';
                                      }
                                      else if( cmtmove === 'paper'){
                                      res='You Win'
                                      }
                                      else if(cmtmove ==='scissors'){
                                          res='tie';
                                      }
                                      }
                                      
                                      else if (playerMove === 'paper'){
                                                                                if(cmtmove === 'rock')
                                                            {
                                                                res='You Win';
                                                            }
                                                            else if( cmtmove === 'paper'){
                                                            res='tie'
                                                            }
                                                            else if(cmtmove ==='scissors'){
                                                                res='You Loose';
                                                            }
                                      }
                                      else if (playerMove ==='rock')
                                      {
                                                            
                                                        if(cmtmove === 'rock')
                                                        {
                                                            res='tie';
                                                        }
                                                        else if( cmtmove === 'paper'){
                                                        res='You Loose'
                                                        }
                                                        else if(cmtmove ==='scissors'){
                                                            res='You Win';
                                                        }
                                      }
                                      if(res==='You Win')
                                      {
                                        score.wins+=1;
                                      }
                                      else if(res==='You Loose')
                                      {
                                        score.losses+=1;
                                      }
                                      else if(res ==='tie')
                                      {
                                        score.Ties+=1;
                                      }
                                      localStorage.setItem('score',JSON.stringify(score));  

                                    UpdateScoreElemet();
document.querySelector('.js-result')
.innerHTML=res;
document.querySelector('.js-moves').innerHTML=`You  <img src="Images/${playerMove}-emoji.png" alt="rock-emoji" class="move-icon">
     <img src="Images/${cmtmove}-emoji.png" alt="scissors-emoji" class="move-icon"> Computer`
                            
        }
            
     function UpdateScoreElemet(){
        document.querySelector('.js-score')
        .innerHTML=`wins:${score.wins},Losess:${score.losses},Tie:${score.Ties}`;
     }   

          function pickComputermove(){
          
                                const randomNumber=Math.random();
                                let cmtmove='';
                                if (randomNumber>=0 && randomNumber < 1 / 3){
                                cmtmove='rock';
                                }
                                else if (randomNumber >= 1 / 3 &&  randomNumber < 2 / 3)
                                {
                                cmtmove='paper';
                                }
                                else if( randomNumber>= 2 / 3 && randomNumber < 1){
                                cmtmove='scissors';
                                }
                               return cmtmove;
                                
          }