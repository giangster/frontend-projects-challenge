import chatkit from "../chatkit";

// Helper function for displaying error messages
function handleError(commit, error) {
  const message = error.message || error.info.error_description;
  commit("setError", message);
}

export default {
  async login({ commit, state }, userId) {
    try {
      commit("setError", "");
      commit("setLoading", true);
      // Connect user to ChatKit service
      const currentUser = await chatkit.connectUser(userId);
      commit("setUser", {
        username: currentUser.id,
        name: currentUser.name
      });

      const rooms = currentUser.rooms.map(room => ({
        id: room.id,
        name: room.name
      }));

      commit("setRooms", rooms);

      //Subscribe user to a room
      const activeRoom = rooms[0]; //=>pick last used room or first one
      commit("setActiveRoom", {
        id: activeRoom.id,
        name: activeRoom.name
      });

      await chatkit.subscribeToRoom(activeRoom.id);

      return true;

      // commit("setReconnect", false);
    } catch (error) {
      handleError(commit, error);
    } finally {
      commit("setLoading", false);
    }
  },
  async changeRoom({ commit }, roomId) {
    try {
      const { id, name } = await chatkit.subscribeToRoom(roomId);
      commit("setActiveRoom", { id, name });
    } catch (err) {
      handleError(commit, error);
    }
  }
};
