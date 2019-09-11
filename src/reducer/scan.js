const sina = {
    name:'',
    messageList:[
        {
          text:'helllo mothafucker',
          date:'22:33',
          sender:'1',
          receiver:'0'
        },
        {
          text:'helllo mothafucker',
          date:'22:33',
          sender:'1',
          receiver:'0'
        },
        {
          text:'helllo mothafucker',
          date:'22:33',
          sender:'1',
          receiver:'0'
        },
        {
          text:'helllo mothafucker',
          date:'22:33',
          sender:'1',
          receiver:'0'
        },
        {
          text:'helllo mothafucker',
          date:'22:33',
          sender:'1',
          receiver:'0'
        }
      ],
      
      mL:[],
      conversationList:[],
      convId:''
}

const aliAghaBahrol =(state=sina ,action)=>{
    switch (action.type){
        case 'name_saver':
            return{
                ...state,
                name: action.payload
            }
        
        
        case 'massage_saver':
          return{
            ...state,
            mL:[...state.mL,action.payload]
          }
        case 'get_conv_list':
          return{
            ...state,
            conversationList:action.payload
          }
        case 'ID_GETTER':
          return{
            ...state,
            convId:action.payload
          }
        case 'MESSAGE_GET_LIST':
          return{
            ...state,
            mL:action.payload
          }
        default:
            return state 
    }
    

} 
export default aliAghaBahrol