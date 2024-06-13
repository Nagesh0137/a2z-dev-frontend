import { GET_SLIDER_DATA,GET_CAREERFRONT_DATA,GET_CAREERCULTURE_DATA,GET_CAREERKEYFACTOR_DATA,GET_CAREERRESUME_DATA,GET_UNLOCK_DATA,GET_APP_DATA,GET_LANDMARK_DATA,GET_EXPLORE_DATA,GET_FOUNDER_DATA,GET_CLIENT_DATA,GET_CORE_DATA,GET_MISSION_DATA,GET_VISION_DATA } from "./actionType.js";
const initialState={
    loading:false,
    error:false,
    slider:[],
    careerfront:[],
    careerculture:[],
    careerkeyfactor:[],
    careerresume:[],
    unlock:[],
    app:[],
    landmark:[],
    explore:[],
    founder:[],
    client:[],
    core:[],
    vision:[],
    mission:[]

    
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case GET_SLIDER_DATA:
            return{
                ...state,loading:false,slider:payload
            }
        case GET_CAREERFRONT_DATA:
            return{
                ...state,loading:false,careerfront:payload
            } 
        case GET_CAREERCULTURE_DATA:
            return{
                ...state,loading:false,careerculture:payload
            }   
        case GET_CAREERKEYFACTOR_DATA:
            return{
                ...state,loading:false,careerkeyfactor:payload
            } 
        case GET_CAREERRESUME_DATA:
            return{
                ...state,loading:false,careerresume:payload
            }           
        case GET_UNLOCK_DATA:
            return{
                ...state,loading:false,unlock:payload    
            }           
        

            case GET_APP_DATA:
                return{
                    ...state,loading:false,app:payload
                }   
            case GET_LANDMARK_DATA:
                return{
                    ...state,loading:false,landmark:payload
                } 
            case GET_EXPLORE_DATA:
                return{
                    ...state,loading:false,explore:payload
                }           
            case GET_FOUNDER_DATA:
                return{
                    ...state,loading:false,founder:payload    
                }  
                
                

                case GET_CLIENT_DATA:
                    return{
                        ...state,loading:false,client:payload
                    }   
                case GET_CORE_DATA:
                    return{
                        ...state,loading:false,core:payload
                    } 
                case GET_MISSION_DATA:
                    return{
                        ...state,loading:false,mission:payload
                    }           
                case GET_VISION_DATA:
                    return{
                        ...state,loading:false,vision:payload    
                    }  
            
            
        default:
            return{
                    ...state
            }
            
    }
}
