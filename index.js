//     WXOOOxoooooooooooooodx0NW   WXkl;'''''''''''''';lk0XW  
//      NkooxkkxdooooooodxOKNW       WXOdc;''''''',;ldxkk0N   
//       Nk:,:ldxkxdodk0XNW              NKkl:,,:ldxkxddON    
//        WO:''';cok0XW                     WXOkkxdoood0N     
//         W0c'''''lK                         W0dooood0W      
//          WKl,'''cK                         WOooooxKW       
//            Xo,''cK                         WOoooxXW        
//             Xd,'lK                         WOookX          
//              Nx;lK                         WOdON           
//               NkdK                         W00N            
//                WNW                          WW             
//                    W                     WW                
//                   WXKXW               NKkON                
//                    NOxxOKNW       WN0xl:l0W                
//                     N0dooxO0XW WXOdc,',lKW                 
//                      W0xoooodOKx:,''',oX                   
//                       WKxooooxOl'''';dX                    
//                        WXxoooxOl''';xN                     
//                         WXkooxOl'':kW                      
//                           NOdxOl'c0W                       
//                            NOkOol0W                        
//                             N0Ox0W   
//                              NxOW    
//                               NM                  

const server = require('./src/app.js');
const { preChargeDatabase } = require('./src/database/preChargeDatabase.js');
const { conn } = require('./src/db.js');

conn.sync({ force: true }).then(() => {

  preChargeDatabase()

  server.listen(3001, () => {
    console.log('%s Listening at 3001');
  });
});
