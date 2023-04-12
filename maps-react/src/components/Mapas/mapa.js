import React, {Component} from "react";
import  GoogleMap from "simple-react-google-maps";

export default class  Maps extends Component{
    
    render(){
        return(
            
            <div className="container">
                <button className='btn btn-success'>+</button>
                <GoogleMap 
                    apiKey={"AIzaSyDwxlK0mYbnCzGA59T_F2D74Hdi2w4MNas"}
                    style={{height:"500px", with:"100%"}}
                    zoom={18}
                    center={{
                        lat: -17.776086,
                        lng: -63.195036
                    }}
                    markers={[
                        {lat: -17.776086, lng: -63.195036},
                        {lat: -17.77596891235693,  lng: -63.193468172523346},
                        //{lat: -17.77558814511123,  lng: -63.1964643806308}

                    ]}
                >                    
                </GoogleMap>
            </div>
        )
    }
};
