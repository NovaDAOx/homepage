                import { Injectable } from '@angular/core';
                
                import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
                import { AngularFireStorage } from '@angular/fire/storage';
    
                import { Observable,from, of, observable } from 'rxjs';
                import { environment } from 'src/environments/environment';

                

                @Injectable({
                  providedIn: 'root'
                })
                export class FirebaseService {
                  ID = ""
                  TK = ""
                  public Projects: Observable<any>[];
                  uid: string;
                  
                  //  ProjectsLength:Array<any>[];
                  ProjectsLength = [] ;
                  selLen = [] ;
                  selln = "" ;
                  length = "";
                  checkVote = null;
                  check:boolean=null;
                  checkVoteT: any = null;
                  constructor(private db: AngularFireDatabase, private Storage:AngularFireStorage) {
                  
                    
                  }
                  async selected()
                  {
                    const selected =[]
                  
                    const Proj : AngularFireList<any> = this.db.list('Projects');
                    let itemsRef = this.db.list('Projects')
                    itemsRef.snapshotChanges(['child_added'])
                      .subscribe(actions => {

                          let arra = []
                          var Timenow = Date.now()
                          
                          
                          const sweeterArray = actions.map(Item => {
                      // console.log('{[[[[[[[[[[[[[[[[[',Item.payload.val()['ProfileImage'])
                      
                      const TimeRemaining = Item.payload.val()['Time']
                      // console.log('time now',Timenow)
                      // console.log('remaining time ',TimeRemaining)
                      // console.log('submission time',Item.payload.val()['Time'])
                      var d = new Date(TimeRemaining)
                      var d2 = new Date(Date.now())
                      var date = new Date(TimeRemaining + ( 3600 * 1000 * 24))
                      var countDownDate = new Date(date).getTime();
                    //   var x = setInterval(function() {
                        var now = new Date().getTime();
                        var distance = countDownDate - now;
                    
                    //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                        var hours:any = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + "hrs";
                        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                        // console.log( " " + hours +" "+minutes +" " + seconds )
                        if (distance < 0) {
                        hours = 'Expired';
                        const upV = Item.payload.val()['upVote']
                        const downV = Item.payload.val()['DownVote'] 
                          if(upV > downV)
                          {
                        selected.push({Key:Item.key,Name:Item.payload.val()['ProjectName'],
                        Description:Item.payload.val()['ProjectDescription'],
                        Amount:Item.payload.val()['NovaAmount'],
                        upVote:Item.payload.val()['upVote'],
                        downVote:Item.payload.val()['DownVote'],
                        Img:Item.payload.val()['ProfileImage'],
                        userAddress:Item.payload.val()['UserAddress'],
                        Time:hours  })
                          }
                          console.log('%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%55',selected)
                      }
                    // }, 1000);
                      
                      // console.log('converted time ',date)
                      // console.log('converted time Remain ',d)
                      // console.log('converted time now ',d2)

                      
                      return Item
                    })
                        });
                      // });  
                      // console.log('jjjjjjjjjjhhhhhh',selected)
                    return selected
                    
                  
                  
                  }





                  async Glength()
                  {
                    
                    const  arraY =[]
                    const selec = []
                    
                    // console.log('ssssssssssssssssssssssss',selec)
                const Proj : AngularFireList<any> = this.db.list('Projects');
                let itemsRef = this.db.list('Projects')          
                itemsRef.snapshotChanges(['child_added'])
                  .subscribe(async actions => {
                    arraY.push({Item:actions.length})
                    actions.map(Item => {
                    const upV = Item.payload.val()['upVote']
                    // console.log(Item.key.length,'Yv')
                        const downV = Item.payload.val()['DownVote']
                        // console.log(downV,'Pu') 
                          if(upV > downV)
                          {
                            
                            this.selLen.push({ItemSelected:Item.payload.val()['ProjectName']})
                            // console.log('this is the bigger number ////////////////////////',upV)
                        selec.push({ItemSelected:Item.payload.val()['ProjectName']
                        })
                        // if(this.selLen.length == 0)
                        // {
                        // this.selLen = selec
                        
                        // console.log('final',selec)
                        // }
                      
                        // console.log('[[[[[[[[[[[ prolen',this.selLen)
                          }
                        })
                        // console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm',selec)
                        // console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',this.selLen)
                        this.selln = await selec.length.toString()
                        // console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn',selec.length)
                        // console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj',this.selln)
                        arraY.push({selected:this.selln})
                  })
                
                  // console.log('ffffffffffffffffffffffffffffffffffffffffffffffffff',this.selln)
                  return arraY
                  }

                async getData()
                  {
                    
                    const  arraY =[]
                    const Selected = []
                    const test =[]
                    const desc = []
                    const pName = []
                    const arr = []  
                      
                const Proj : AngularFireList<any> = this.db.list('Projects');
                
                let itemsRef = this.db.list('Projects')
                
                itemsRef.snapshotChanges(['child_added'])
                  .subscribe(async actions => {
                    // actions.forEach(Item => {
                      // console.log(action.type,'mmmmmmmmmmmmmmmmmmmmm');
                      // console.log(action.key ,'mmmmmmmmmmmmmmmmmmmmm');
                      // console.log(action.payload.val());
                      // arraY.push({key:Item.key})
                      // arraY.push({Name:Item.payload.val().)
                      
                      this.length = await actions.length.toString();
                      // console.log('!!!!!!!!!!!!!!!!!!!!!!!!1',this.length)
                      let arra = []
                      var Timenow = Date.now()
                      
                      
                      const sweeterArray = actions.map(Item => {
                  // console.log('{[[[[[[[[[[[[[[[[[',Item.payload.val()['TeamMembers']['teamone'][0]
                  // ,Item.payload.val()['TeamMembers']['teamone'][0].TeamMeber)
                        const dataTeam = Item.payload.val()['TeamMembers']
                        // const arrayTeam = dataTeam.map(Item => {
                        //   console.log('this is arrayTeam',Item)
                        // })
                        for(var i = 0; i<4; i++)
                        {
                        const teamArray = []

                        // console.log('ggggggggg----',Item.payload.val()['TeamMembers'])
                        }
                        // console.log('----------------',Item.payload.val()['TeamMembers'])
                  const TimeRemaining = Item.payload.val()['Time']
                  // console.log('time now',Timenow)
                  // console.log('remaining time ',TimeRemaining)
                  // console.log('submission time',Item.payload.val()['Time'])
                  var d = new Date(TimeRemaining)
                  var d2 = new Date(Date.now())
                  var date = new Date(TimeRemaining + ( 3600 * 1000 * 5000))
                  var countDownDate = new Date(date).getTime();
                //   var x = setInterval(function() {
                    var now = new Date().getTime();
                    var distance = countDownDate - now;

                //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours:any = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + "hrs";
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                // console.log( " " + hours +" "+minutes +" " + seconds )
                    if (distance < 0) {
                    
                    hours = 'Expired';
                    console.log('1171171717171771717171717171171','this is test data')
                    
                  }
                  if(distance > 0 )
                  {
                    console.log('16616116161616161616161616166116','this is test data')
                  }
                // }, 1000);
                  
                  // console.log('converted time ',date)
                  // console.log('converted time Remain ',d)
                  
                  // console.log('converted time nowwwwwwwwww ',Item.payload.val()['ProjectName'].length)
                  arraY.push({Key:Item.key,Name:Item.payload.val()['ProjectName'],
                  Description:Item.payload.val()['ProjectDescription'],
                  Amount:Item.payload.val()['NovaAmount'],
                  upVote:Item.payload.val()['upVote'],
                  downVote:Item.payload.val()['DownVote'],
                  Img:Item.payload.val()['ProfileImage'],
                  DescriptionT:Item.payload.val()['ProjectDescription2'],
                  Team:Item.payload.val()['TeamMembers'],
                  UserAddress:Item.payload.val()['UserAddress'],
                  Time:hours  })

                  // this.ProjectsLengtharraY.length.toString();
                this.ProjectsLength.push(arraY.length)
              console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkk',Item.payload.val())
                
                  return Item
                })
              
                // console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkk',sweeterArray.length)
                const json = {length:sweeterArray.length}
                this.ProjectsLength.push(json)
                    });
                    
                  // });  
                  
                  // console.log('yyyyyy',arraY)
                  console.log('xxxxxxxxxxxxxxxxxxxxxxx',arraY)
                return arraY
                    
              }

            // getVoters():Observable<any>
            // {
            //   let itemsRef = this.db.list('Voters')
            //     const array = []
            //     const userAddress = localStorage.getItem('walletId').toLocaleLowerCase()
            //   itemsRef.snapshotChanges(['child_added'])
            //     .subscribe(actions => {
            //       console.log('jjjjjjjjjjjjjjjj',actions.length)
            //       console.log('GGGGGGGGGGGGGGGG',actions)
            //       actions.map(Item => {
            //         for(var i = 0; i < actions.length; i++)
            //         {
            //         console.log('Item',Item.payload.val())
            //         // console.log('OOOOOOOOOOOOO',Item.payload.val()['address'])
            //         if(Item.payload.val()['userAddres'].toLocaleLowerCase() != userAddress.toLocaleLowerCase())
            //         array.push({voters:Item.payload.val()['userAddres']})
            //         if(userAddress)
            //         {
            //           this.check = true;
            //         // console.log('Item',Item.payload.val()['address'],userAddress)
            //         console.log(array,'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH')
            //       }
            //       }
            //       })
                  
            //     })
            //     console.log(array,'pp')
            //     return <any>array
            // }


                  downVote(_id:any, _vote:any,address:any) {
                    // const  itemsRef = this.db.list('Projects')
                    
                    let itemsRefV = this.db.list('Projects')
                    const itemsRef = this.db.list(`Projects/${_id}/votes`);
                    const array = []
              const userAddress = localStorage.getItem('walletId').toLocaleLowerCase()
            itemsRefV.snapshotChanges(['child_added'])
              .subscribe(actions => {
                console.log('jjjjjjjjjjjjjjjj',actions.length)
                console.log('4444444444444',actions)
                actions.map(Item => {     
                  console.log('((((((((((((((((((((',_id,Item) 
                  if(_id === Item.key)
                  {
                  
                  const userAddres = localStorage.getItem('walletId')
                  const arra = []
                  // arra.push({upVote:_vote,Address:address})
                  // const itemsRef = this.db.list('Projects'/ _id)
                  
                  itemsRef.set(userAddres,{DownVote:_vote})
                  itemsRefV.update(_id, { DownVote:_vote })
                  
                 
                  .then
                    {
                    console.log('updated Up')
                  }
                }
                })
                
              })
              
                    // try
                    // {
                    //   const d = this.db.list('Projects')
                    // itemsRef.update(_id, { DownVote:_vote })
                    // .then
                    // {
                    //   // console.log('updated')
                    // }
                    // }
                    // catch(e)
                    // {
                    //   // console.log(e,'ddddddddddd')
                    // }
                  
                    
                      
                  }
                async upVote(_id:any,_vote:any,address:any)
                  {
                    
                    const userAddres = localStorage.getItem('walletId')
                      let itemsRefV = this.db.list('Projects')
                      const itemsRef = this.db.list(`Projects/${_id}/votes`);
                      const array = []
                const userAddress = localStorage.getItem('walletId').toLocaleLowerCase()
              itemsRefV.snapshotChanges(['child_added'])
                .subscribe(actions => {
                  console.log('jjjjjjjjjjjjjjjj',actions.length)
                  console.log('4444444444444',actions)
                  actions.map(Item => { 
                    if(_id === Item.key)
                    {    
                    // console.log('((((((((((((((((((((',_id,Item.payload.val()['votes'][userAddres]['address'] )
                    const arrayUsr =[]
                               
                    // const itemsRef = this.db.list('Projects'/ _id)
                    itemsRef.set(userAddres,{address:userAddres,upVote:_vote})
                    itemsRefV.update(_id, { upVote:_vote })
                    .then
                      {
                      console.log('updated Down')
                    }
                  }
                
                  })
                
                })
                
                 
                    
                  }

                checkVotes(_id:any):Observable<any> 
                  {
                    const arrayUsr =[]  
                    const accept = []
                    const userAddres = localStorage.getItem('walletId')
                    let itemsRefV = this.db.list('Projects')
                    const itemsRef = this.db.list(`Projects/${_id}/votes`);
                    const array = []
              const userAddress = localStorage.getItem('walletId').toLocaleLowerCase()
            
            return new Observable((observer) => { itemsRefV.snapshotChanges(['child_added'])
              .subscribe( actions => {
                console.log('jjjjjjjjjjjjjjjj',actions.length)
                console.log('4444444444444',actions)
                
                actions.map(Item => { 
                  if(_id === Item.key)
                  {    
                  // console.log('((((((((((((((((((((',_id,Item.payload.val()['votes'][userAddres]['address'] )
                  const ch = Item.payload.val()['votes']
                  
                  console.log(ch,'ppppppppppppppppppppppppppp')
                  if(ch)
                  {
                  let g = Object.entries(ch)
                  observer.next(g)
                  console.log(g[0][0],'{{{{{{{{{{{{{')
                  for (var i=0; i<g.length;i++)
                  {
                    console.log(g[i][0],'{{{{{{{{{{{{{')
                  if(userAddres.toLocaleLowerCase() === g[i][0].toLocaleLowerCase())
                  {
                    console.log('user address previously registered')
                  
                  // observer.next(arrayUsr.length)
                  arrayUsr.push(Item.payload.val()['votes'][userAddres]['address'])
                  console.log(arrayUsr[0],'RRRRRRRRRRRRRRRRRRRRRRR')
                  console.log(arrayUsr.length,'iiiiiiiiiiiiii') 
                    const checker =  this.checkVote
                    console.log('111111111111111111',checker)
                  }
                    if(arrayUsr.length > 0)
                    {
                      
                      
                      this.checkVote = 'notallowed'
                      this.checkVoteT ="YEs"
                      console.log('voted voted voted voted voted voted voted',this.checkVote)
                      // return this.checkVoteT
                    }
                    else
                    {
                      this.checkVoteT = 'Not'
                      console.log('not not not not not not not not not not not')
                      // return this.checkVoteT
                    }
                  }
                }
                else
                {
                  observer.next(0)
                }
                }
                  console.log('TTTTTTTTTTTTTTTTTTTTTTTHhhhhhhhhhhhhhhhhhh!one',this.checkVote)
                })
            
              
                console.log('TTTTTTTTTTTTTTTTTTTTTTTHhhhhhhhhhhhhhhhhhh2Two',this.checkVoteT)
                
              })
            
            })
                    //  data.
                    // console.log('WWWWWWWWWWWWWWWWWWWWWWWWWWw',check)
                    console.log('NNNNNNNNNNNNNNNNNNNNNNNNN',this.checkVoteT)
                    console.log('TTTTTTTTTTTTTTTTTTTTTTTHhhhhhhhhhhhhhhhhhh2Two',this.checkVoteT)
                    console.log('22222222222222222222222222222222222222$$$$$$4',arrayUsr.length)
              return of(arrayUsr)      
                  }
                // savedata(_img)
                // {
                //   const itemRef = this.db.list('Projects')
                // }
                  
              getTeam(_id:any)
                {            
                  const d = this.db.list('Projects')
                  // this.db.object("/User/"+_id).valueChanges().subscribe(details => {
                  //   this.username = details["Username"]
                  const array = []
                  let arrEl = []
                  let TeamO = []
                  let TeamT = []
                  let TeamTH= []
                  let TeamF = []
                console.log('this is test id *************',_id)
                  d.snapshotChanges(['child_added'])
                  .subscribe(actions => {
                  actions.map(Item => {
                    // console.log('last',Item.key)
                    if(_id == Item.key && Item.payload.val()['TeamMeber'] != " " )
                    {
                      console.log('this is right ',_id,Item.key)
                      console.log('team names',Item.payload.val()['TeamMe'])
                      array.push(Item.payload.val())
                      arrEl.push(Item.payload.val()['TeamMembers'])
                      console.log(array,'Best')
                      console.log(arrEl,'element')
                      arrEl.map(Team => {
                        console.log('TETETE',Team)
                        console.log('test teams array ',Team['teamtwo']['0']['TeamMeber'])
                        if(Team['teamone']['0']['TeamMeber'] != "")
                        {
                        TeamO.push(Team['teamone']['0'])
                        }
                        if(Team['teamtwo']['0']['TeamMeber'] != "")
                        {
                          TeamO.push(Team['teamtwo']['0'])
                        }
                        if(Team['teamthree']['0']['TeamMeber'] != "")
                        {
                          TeamO.push(Team['teamthree']['0'])
                        }
                        if(Team['four']['0']['TeamMeber'] != "")
                        {
                          TeamO.push(Team['four']['0'])
                        }

                        // TeamT.push(Team['teamtwo']['0'])
                        // TeamTH.push(Team['teamthree']['0'])
                        // TeamF.push(Team['four']['0'])
                      })
                      console.log('Team one',TeamO)
                      console.log('Team Two',TeamT)
                    }
                  })
                  console.log('up',arrEl)
                  // arrEl.forEach(element => {
                  //   console.log('eleeeeeee',element['teamone'][0].TeamMeber)
                  // }); 
                
                            })
                            console.log('middle',arrEl)
                          
                // const json = {arrEl}
                //     console.log('bbbbbbbbbbbbbbbbb',json['arrEl']['0']['Ele'].length)
                // arrEl.map(element => {
                //     console.log('Element Element Element',element)
                //   });  
                //   // for(var i = 0; i < arrEl['0']['Ele'].length; i++)
                  // {
                  //   console.log('raghav jb raghav jb raghav jb')
                  // }
                  console.log('bottom',arrEl)
                return TeamO
                }


      getByAddress(id)
      {
        let array = []
        const d = this.db.list('Projects')
        d.snapshotChanges(['child_added'])
        .subscribe(actions => {
        actions.map(Item => {
        console.log(Item.payload.val()['UserAddress'],'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq')
        if(Item.payload.val()['UserAddress'] === id)
        {
          array.push({Name:Item.payload.val()['ProjectName'],
          Description:Item.payload.val()['ProjectDescription'],
          Amount:Item.payload.val()['NovaAmount'],
          upVote:Item.payload.val()['upVote'],
          downVote:Item.payload.val()['DownVote'],
          Img:Item.payload.val()['ProfileImage'],
          DescriptionT:Item.payload.val()['ProjectDescription2']
        })
        }
        
      })
      })
      console.log(array)
      return array 
      }





      getTeamAdress(_id:any)
                {
                
                      const d = this.db.list('Projects')
                  // this.db.object("/User/"+_id).valueChanges().subscribe(details => {
                  //   this.username = details["Username"]
                  const array = []
                  let arrEl = []
                  let TeamO = []
                  let TeamT = []
                  let TeamTH= []
                  let TeamF = []
                
                  d.snapshotChanges(['child_added'])
                  .subscribe(actions => {
                  actions.map(Item => {
                    // console.log('last',Item.key)
                    if(_id == Item.payload.val()['UserAddress'] && Item.payload.val()['TeamMeber'] != " " )
                    {
                      // console.log('this is right ',_id,Item.key)
                      // console.log('team names',Item.payload.val()['TeamMe'])
                      if(array.length<= 0)
                      {
                      array.push(Item.payload.val())
                      arrEl.push(Item.payload.val()['TeamMembers'])
                      // console.log(array,'Best')
                      // console.log(arrEl,'element')
                      arrEl.map(Team => {
                        // console.log('TETETEAddress',Team)
                        // console.log('test teams array Address ',Team['teamtwo']['0']['TeamMeber'])
                        if(Team['teamone']['0']['TeamMeber'] != "")
                        {
                        TeamO.push(Team['teamone']['0'])
                        }
                        if(Team['teamtwo']['0']['TeamMeber'] != "")
                        {
                          TeamO.push(Team['teamtwo']['0'])
                        }
                        if(Team['teamthree']['0']['TeamMeber'] != "")
                        {
                          TeamO.push(Team['teamthree']['0'])
                        }
                        if(Team['four']['0']['TeamMeber'] != "")
                        {
                          TeamO.push(Team['four']['0'])
                        }

                                })
                              }
                            }
                  })
                  // console.log('up',arrEl)
                
                            })
                  //            console.log('middle',arrEl)
                          
                
                  // console.log('bottom',arrEl)
                return TeamO
                }







                async recentPro()
                {
                  const recent =[]
                
                  const Proj : AngularFireList<any> = this.db.list('Projects');
                  let itemsRef = this.db.list('Projects')
                  itemsRef.snapshotChanges(['child_added'])
                    .subscribe(actions => {

                        let arra = []
                        var Timenow = Date.now()
                        
                        
                        const sweeterArray = actions.map(Item => {
                    // console.log('{[[[[[[[[[[[[[[[[[',Item.payload.val()['ProfileImage'])
                    
                    const TimeRemaining = Item.payload.val()['Time']
                    // console.log('time now',Timenow)
                    // console.log('remaining time ',TimeRemaining)
                    console.log('submission time',Item.payload.val()['Time'])
                    var d = new Date(TimeRemaining)
                    var d2 = new Date(Date.now())
                    var date = new Date(TimeRemaining + ( 3600 * 1000 * 24))
                    var countDownDate = new Date(date).getTime();
                  //   var x = setInterval(function() {
                      var now = new Date().getTime();
                      var distance = countDownDate - now;
                  
                  //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                      var hours:any = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + "hrs";
                      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                      console.log( " " + hours +" "+minutes +" " + seconds )
                      if (distance < 0) {
                      hours = 'Expired';
                      const upV = Item.payload.val()['upVote']
                      const downV = Item.payload.val()['DownVote'] 
                        if(upV > downV || upV < downV)
                        {
                      recent.push({Key:Item.key,Name:Item.payload.val()['ProjectName'],
                      Description:Item.payload.val()['ProjectDescription'],
                      DescriptionT:Item.payload.val()['ProjectDescription2'],
                      Amount:Item.payload.val()['NovaAmount'],
                      upVote:Item.payload.val()['upVote'],
                      downVote:Item.payload.val()['DownVote'],
                      Img:Item.payload.val()['ProfileImage'],
                      Time:hours  })
                        }
                        console.log('%%%%%%%%%%55',)
                    }
                  // }, 1000);
                    
                    // console.log('converted time ',date)
                    // console.log('converted time Remain ',d)
                    // console.log('converted time now ',d2)

                    
                    return Item
                  })
                      });
                    // });  
                    console.log('jjjjjjjjjjhhhhhh',recent)
                  return recent
                  
                
                
                }


                async latestPro()
                {
                  const latest =[]
                
                  const Proj : AngularFireList<any> = this.db.list('Projects');
                  let itemsRef = this.db.list('Projects')
                  itemsRef.snapshotChanges(['child_added'])
                    .subscribe(actions => {

                        let arra = []
                        var Timenow = Date.now()
                        
                        
                        const sweeterArray = actions.map(Item => {
                    // console.log('{[[[[[[[[[[[[[[[[[',Item.payload.val()['ProfileImage'])
                    
                    const TimeRemaining = Item.payload.val()['Time']
                    // console.log('time now',Timenow)
                    // console.log('remaining time ',TimeRemaining)
                    console.log('submission time',Item.payload.val()['Time'])
                    var d = new Date(TimeRemaining)
                    var d2 = new Date(Date.now())
                    var date = new Date(TimeRemaining + ( 3600 * 1000 * 5000))
                    var countDownDate = new Date(date).getTime();
                  //   var x = setInterval(function() {
                      var now = new Date().getTime();
                      var distance = countDownDate - now;
                  
                  //     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                      var hours:any = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + "hrs";
                      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                      console.log( " " + hours +" "+minutes +" " + seconds )
                      if (distance > 0) {
                      hours = 'Expired';
                      const upV = Item.payload.val()['upVote']
                      const downV = Item.payload.val()['DownVote'] 
                      
                      latest.push({Key:Item.key,Name:Item.payload.val()['ProjectName'],
                      Description:Item.payload.val()['ProjectDescription'],
                      DescriptionT:Item.payload.val()['ProjectDescription2'],
                      Amount:Item.payload.val()['NovaAmount'],
                      upVote:Item.payload.val()['upVote'],
                      downVote:Item.payload.val()['DownVote'],
                      Img:Item.payload.val()['ProfileImage'],
                      Time:hours  })
                        }
                        
                    
                  // }, 1000);
                    
                    // console.log('converted time ',date)
                    // console.log('converted time Remain ',d)
                    // console.log('converted time now ',d2)

                    
                    return Item
                  })
                      });
                    // });  
                    console.log('jjjjjjjjjjhhhhhh',latest)
                  return latest
                  
                
                
                }
                createGrantDB(_id:any,_projectSN:any,_granted:boolean)
                {
                  try
                  {
                  const itemsRef = this.db.list('Projects')
                  itemsRef.update(_id,{ProjectSN:_projectSN,Granted:_granted})
                  .then
                  {
                    console.log('grant created')
                  }
                  }
                  catch(e)
                  {
                    console.log(e,'this is the error')
                  }
                  
                }



                }
