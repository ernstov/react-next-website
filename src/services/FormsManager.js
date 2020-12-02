import { ApiService } from "./ApiService";
import { settings } from "../defines";

const FormsManager = (action, data, { dispatchNotifi }) => {

  return new Promise((resolve, reject)=>{
    switch (action) {

      case "form":
        ApiService.post(`items/form`, data).then(result => {
          resolve(result)
        }, error => {
          reject(error);
          dispatchNotifi({ type: "ERROR", data: { error: error } })
        })
        break;
  
    }
  });

}

export default FormsManager;