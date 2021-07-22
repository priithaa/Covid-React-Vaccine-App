 export const Doses = ['Dose 1','Dose 2','All'];
 export const Age = ['18','45','All'];
 export const Vaccine = ['Covaxin','Covishield','Sputnik','All'];
 export const currentDate = ()=>
  {
     var today = new Date();
     const date =  today.getDate()+'-'+today.getMonth()+'-'+today.getFullYear();
     return date;
  }
 

// Group by dates.
export const makePairDates=(data,loadingM,age,dose)=>
{
   if(loadingM===false)
   {
      let obj = {};
      data['centers'].forEach(element => 
      {  const y = element.sessions;
            for(const sesh in y)
               {
                  let {date, available_capacity,min_age_limit,available_capacity_dose1,available_capacity_dose2} = y[sesh];
                  // console.log(typeof(age), typeof(min_age_limit))
                  if(age=='All')
                  {
                     if(isNaN(obj[date])===true)
                     {
                        if(dose=='Dose 1')
                           obj[date]=available_capacity;
                        else if(dose==1)
                           obj[date]=available_capacity_dose1;
                        else
                           obj[date]=available_capacity_dose2;

                     }
                     else
                        if(dose=='Dose 2')
                           obj[date]=available_capacity;
                        else if(dose==1)
                           obj[date]=available_capacity_dose1;
                        else
                           obj[date]=available_capacity_dose2;

                  }
                  else 
                  {if(min_age_limit==age)
                  { 
                     if(isNaN(obj[date])===true)
                           obj[date]=available_capacity;
                     else
                        obj[date]=obj[date]+available_capacity;
                  }}

               }
      }
      );

      let pairedObj = Array(7);
      let i=0;
      for(const key in obj)
      {
         pairedObj[i]={key:key,value:obj[key]};
         i++;
      }
      return pairedObj;
   }
   return null;
}

// Date Creater
export const makeDate =(str1)=>{
   // return typeof(str1);
   const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
   var dt1   = parseInt(str1.substring(0,2));
   var mon1  = parseInt(str1.substring(3,5));
   var yr1   = parseInt(str1.substring(6,10));
   var date1 = new Date(yr1, mon1, dt1);
   // date1 = String(date1);
   return date1.getDate()+' '+monthNames[date1.getMonth()]+' '+date1.getFullYear();

}
 
 export const StateObject =
        {"states":[{"state_id":1,"state_name":"Andaman and Nicobar Islands"},
        {"state_id":2,"state_name":"Andhra Pradesh"},
        {"state_id":3,"state_name":"Arunachal Pradesh"},
        {"state_id":4,"state_name":"Assam"},
        {"state_id":5,"state_name":"Bihar"},
        {"state_id":6,"state_name":"Chandigarh"},
        {"state_id":7,"state_name":"Chhattisgarh"},
        {"state_id":8,"state_name":"Dadra and Nagar Haveli"},
        {"state_id":37,"state_name":"Daman and Diu"},
        {"state_id":9,"state_name":"Delhi"},
        {"state_id":10,"state_name":"Goa"},
        {"state_id":11,"state_name":"Gujarat"},
        {"state_id":12,"state_name":"Haryana"},
        {"state_id":13,"state_name":"Himachal Pradesh"},
        {"state_id":14,"state_name":"Jammu and Kashmir"},
        {"state_id":15,"state_name":"Jharkhand"},
        {"state_id":16,"state_name":"Karnataka"},
        {"state_id":17,"state_name":"Kerala"},
        {"state_id":18,"state_name":"Ladakh"},
        {"state_id":19,"state_name":"Lakshadweep"},
        {"state_id":20,"state_name":"Madhya Pradesh"},
        {"state_id":21,"state_name":"Maharashtra"},
        {"state_id":22,"state_name":"Manipur"},
        {"state_id":23,"state_name":"Meghalaya"},
        {"state_id":24,"state_name":"Mizoram"},
        {"state_id":25,"state_name":"Nagaland"},
        {"state_id":26,"state_name":"Odisha"},
        {"state_id":27,"state_name":"Puducherry"},
        {"state_id":28,"state_name":"Punjab"},
        {"state_id":29,"state_name":"Rajasthan"},
        {"state_id":30,"state_name":"Sikkim"},
        {"state_id":31,"state_name":"Tamil Nadu"},
        {"state_id":32,"state_name":"Telangana"},
        {"state_id":33,"state_name":"Tripura"},
        {"state_id":34,"state_name":"Uttar Pradesh"},
        {"state_id":35,"state_name":"Uttarakhand"},
        {"state_id":36,"state_name":"West Bengal"}]}
