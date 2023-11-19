import instance from "./instance";

const getprofile = async (dispatch) => {
    try {
        const response = await instance.protectedInstance.get('/users/profile');
        console.log("ajay response", response);

        if (response.status === 200) {
            console.log('Fetching user profile successful');
            await dispatch({
                type: "USER_PROFILE",
                payload: response.data
            });
            return response.data;
        } else if (response.status === 401) {
            console.log("Token expired");
            return null;
        } else {
            console.log("Unhandled response status:", response.status);
            return null;
        }
    } catch (error) {
        console.error('Error fetching user profile', error);
        return null;
    }
};

const editProfile = async (updatedProfile,dispatch) => {
    try {
      const response = await instance.protectedInstance.put('/users/profile', updatedProfile);
      if (response.status === 200) {
        await dispatch({
          type: "EDIT_USER_PROFILE",
          payload: response.data
      });
     
        console.log('Profile updated successfully');
        console.log(response.data)
        return response.data;
      } else {
        console.log('Profile update failed');
        return null;
      }
    } catch (error) {
      console.error('Error updating profile', error);
      return null;
    }
  };
  const deleteProfile = async (dispatch) => {
    try {
      const response = await instance.protectedInstance.delete('/users/profile');
      console.log("Delete response", response);
  
      if (response.status === 200) {
        await dispatch({
          type: "USER_LOGOUT",
      });
        console.log('Profile deleted successfully');
        return true;
      } else if (response.status === 401) {
        console.log("Token expired");
        return false;
      } else {
        console.log("Unhandled response status:", response.status);
        return false;
      }
    } catch (error) {
      console.error('Error deleting profile', error);
      return false;
    }
  };

export default {
    getprofile ,
    editProfile,deleteProfile

};
