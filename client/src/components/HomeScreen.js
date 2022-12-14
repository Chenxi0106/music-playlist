import React, { useContext, useEffect } from 'react'
import { GlobalStoreContext } from '../store'
import ListCard from './ListCard.js'
import MUIDeleteModal from './MUIDeleteModal'
import Session from './Session'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab'
import List from '@mui/material/List';
import MUIEditSongModal from './MUIEditSongModal'
import MUIRemoveSongModal from './MUIRemoveSongModal'
import WorkspaceScreen from './WorkSpace'
import AuthContext from '../auth'



/*
    This React component lists all the top5 lists in the UI.
    
    @author McKilla Gorilla
*/
const HomeScreen = () => {
    const { store } = useContext(GlobalStoreContext);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        store.loadIdNamePairs();
    }, []);

    function handleCreateNewList() {
        store.createNewList();
    }
    let listCard = "";
    if (store) {
        listCard =
            <List sx={{ width: '50%', left: '5%', bgcolor: 'background.paper' }}>
                {
                    store.idNamePairs.map((pair) => (
                        <ListCard
                            key={pair._id}
                            idNamePair={pair}
                            selected={false}
                        />
                    ))
                }
            </List>;
    }
    
    let modalJSX = "";
    if (store.isEditSongModalOpen()) {
        modalJSX = <MUIEditSongModal />;
    }
    else if (store.isRemoveSongModalOpen()) {
        modalJSX = <MUIRemoveSongModal />;
    }


    let res = store.currentList == null?
            <div id="playlist-selector">
                <div id="list-selector-heading">
                </div>
                <Fab
                    disabled={auth.loginAsGuest||store.onSearchButton!=null}
                    color="inherit"
                    aria-label="add"
                    id="add-list-button"
                    onClick={handleCreateNewList}
                >
                    <AddIcon />
                </Fab>
                <div id="list-selector-list">
                    {
                        listCard
                    }
                    <MUIDeleteModal />
                </div>
                {/* <Session /> */}
            </div>
            :<WorkspaceScreen/>;
    
    return (
        <div>
              { res }
              <Session />
        </div>
    );
}

export default HomeScreen;