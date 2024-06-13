import axios from "axios";
import { GET_SLIDER_DATA,GET_CAREERFRONT_DATA,GET_CAREERCULTURE_DATA,GET_CAREERKEYFACTOR_DATA,GET_CAREERRESUME_DATA,GET_UNLOCK_DATA,GET_APP_DATA,GET_LANDMARK_DATA,GET_EXPLORE_DATA,GET_FOUNDER_DATA,GET_MISSION_DATA,GET_VISION_DATA,GET_CLIENT_DATA,GET_CORE_DATA, SET_ERROR, SET_LOADING } from "./actionType.js";

export const getSliderData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response=await axios.get('http://ec2-18-207-168-121.compute-1.amazonaws.com:2000/admin/sliderapi');
        dispatch({type:GET_SLIDER_DATA,payload:response.data})
      }
      catch(error){
          dispatch({type:SET_ERROR})  
      }
}



export const getCareerfrontData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response=await axios.get('http://ec2-18-207-168-121.compute-1.amazonaws.com:2000/admin/Career_Front_sectionapi');
        dispatch({type:GET_CAREERFRONT_DATA,payload:response.data})
      }
      catch(error){
          dispatch({type:SET_ERROR})  
      }
}

export const getCareercultureData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response=await axios.get('http://ec2-18-207-168-121.compute-1.amazonaws.com:2000/admin/Career_Culture_sectionapi');
        dispatch({type:GET_CAREERCULTURE_DATA,payload:response.data})
      }
      catch(error){
          dispatch({type:SET_ERROR})  
      }
}

export const getCareerkeyfactorData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response=await axios.get('http://ec2-18-207-168-121.compute-1.amazonaws.com:2000/admin/Career_Culture_key_factorsapi');
        dispatch({type:GET_CAREERKEYFACTOR_DATA,payload:response.data})
      }
      catch(error){
          dispatch({type:SET_ERROR})  
      }
}

export const getCareerresumeData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response=await axios.get('http://ec2-18-207-168-121.compute-1.amazonaws.com:2000/admin/Career_resume_sectionapi');
        dispatch({type:GET_CAREERRESUME_DATA,payload:response.data})
      }
      catch(error){
          dispatch({type:SET_ERROR})  
      }
}

export const getUnlockData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response=await axios.get('http://ec2-18-207-168-121.compute-1.amazonaws.com:2000/admin/unlock_sectionapi');
        dispatch({type:GET_UNLOCK_DATA,payload:response.data})
      }
      catch(error){
          dispatch({type:SET_ERROR})  
      }
}

export const getAppData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response=await axios.get('http://ec2-18-207-168-121.compute-1.amazonaws.com:2000/admin/app_sectionapi');
        dispatch({type:GET_APP_DATA,payload:response.data})
      }
      catch(error){
          dispatch({type:SET_ERROR})  
      }
}

export const getLandmarkData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response=await axios.get('http://ec2-18-207-168-121.compute-1.amazonaws.com:2000/admin/landmark_sectionapi');
        dispatch({type:GET_LANDMARK_DATA,payload:response.data})
      }
      catch(error){
          dispatch({type:SET_ERROR})  
      }
}

export const getExploreData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response=await axios.get('http://ec2-18-207-168-121.compute-1.amazonaws.com:2000/admin/explore_sectionapi');
        dispatch({type:GET_EXPLORE_DATA,payload:response.data})
      }
      catch(error){
          dispatch({type:SET_ERROR})  
      }
}

export const getFounderData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response=await axios.get('http://ec2-18-207-168-121.compute-1.amazonaws.com:2000/admin/founde_ceo_secapi');
        dispatch({type:GET_FOUNDER_DATA,payload:response.data})
      }
      catch(error){
          dispatch({type:SET_ERROR})  
      }
}


export const getMissionData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response=await axios.get('http://ec2-18-207-168-121.compute-1.amazonaws.com:2000/admin/Our_Mission_sectionapi');
        dispatch({type:GET_MISSION_DATA,payload:response.data})
      }
      catch(error){
          dispatch({type:SET_ERROR})
      }
}

export const getVisionData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response=await axios.get('http://ec2-18-207-168-121.compute-1.amazonaws.com:2000/admin/Our_Vision_sectionapi');
        dispatch({type:GET_VISION_DATA,payload:response.data})
      }
      catch(error){
          dispatch({type:SET_ERROR})  
      }
}



export const getClientData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response=await axios.get('http://ec2-18-207-168-121.compute-1.amazonaws.com:2000/admin/About_client_logoapi');
        dispatch({type:GET_CLIENT_DATA,payload:response.data})
      }
      catch(error){
          dispatch({type:SET_ERROR})  
      }
}

export const getCoreData=()=>async(dispatch)=>{
    dispatch({type:SET_LOADING})
    try{
        const response=await axios.get('http://ec2-18-207-168-121.compute-1.amazonaws.com:2000/admin/About_Our_Core_sectionapi');
        dispatch({type:GET_CORE_DATA,payload:response.data})
      }
      catch(error){
          dispatch({type:SET_ERROR})  
      }
}