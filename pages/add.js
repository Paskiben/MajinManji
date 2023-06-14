import React, { useState, useEffect } from 'react';

function AddLocation() {
  const [location, setLocation] = useState(null);

  function handleLocationClick() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation not supported");
    }
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  }

  function error() {
    console.log("Unable to retrieve your location");
  }

  const [categoryResponse, setCategories] = useState([]);
  useEffect(() => {
    async function getCategories()
    {
      const response = await fetch('https://majinvaldi.000webhostapp.com/category');
      const res = await response.json();
      console.log(res);
      setCategories(res);
    }
    getCategories();
  }, []);
  return (<>
    <div>
      {!location ? <button onClick={handleLocationClick}>Get Location</button> : <div>
            <form method='post' action='https://majinvaldi.000webhostapp.com/admin/place/add'>
                <input name='lat' type='hidden' value={location.latitude}></input>
                <input name='long' type='hidden' value={location.longitude}></input>
                <label htmlFor='name'>Name&nbsp;&nbsp;</label>
                <input name='name'></input><br />
                <label htmlFor='description'>Description&nbsp;&nbsp;</label>
                <input name='description'></input><br />
                <label htmlFor='category'>Category&nbsp;&nbsp;</label>
                <select name='category'>
                    {categoryResponse.map((cat) => {
                        return (<option value={cat.id}>{cat.name}</option>);
                    })}
                </select><br />
                <button>submit</button>
            </form>
        </div>}
    </div></>
  );
}

export default AddLocation;