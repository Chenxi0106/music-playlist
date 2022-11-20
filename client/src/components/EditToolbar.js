import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import Button from '@mui/material/Button';
import Home from '@mui/icons-material/Home';
import People from '@mui/icons-material/People';
import Person from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import CloseIcon from '@mui/icons-material/HighlightOff';
import Publish from '@mui/icons-material/Publish';
import ContentCopy from '@mui/icons-material/ContentCopy';
/*
    This toolbar is a functional React component that
    manages the undo/redo/close buttons.
    
    @author McKilla Gorilla
*/
function EditToolbar() {
    const { store } = useContext(GlobalStoreContext);

    function searchByCurrentList() {
        store.searchByCurrentList();
    }
    function searchByLoginList() {
        store.searchByLoginList();
    }
    function searchByUserName() {
        store.searchByUserName();
    }

    function handleAddNewSong() {
        store.addNewSong();
    }
    function handleUndo() {
        store.undo();
    }
    function handleRedo() {
        store.redo();
    }
    function handleClose() {
        store.closeCurrentList();
    }

    //own code
    function handlePublishList() {
        store.currentList.publish = true;
        store.updateCurrentList();
    }
    function handleCopyContent(){

    }

    let value = null;
    if (store.currentList) {
        value = <div id="edit-toolbar">
            <Button
                color="inherit"
                id='copy-list-button'
                onClick={handleCopyContent}
                variant="contained">
                <ContentCopy />
            </Button>
            <Button
                color="inherit"
                disabled={!store.canPublish()}
                id='publish-list-button'
                onClick={handlePublishList}
                variant="contained">
                <Publish />
            </Button>
            <Button
                color="inherit"
                disabled={!store.canAddNewSong()}
                id='add-song-button'
                onClick={handleAddNewSong}
                variant="contained">
                <AddIcon />
            </Button>
            <Button
                color="inherit"
                disabled={!store.canUndo()}
                id='undo-button'
                onClick={handleUndo}
                variant="contained">
                <UndoIcon />
            </Button>
            <Button
                color="inherit"
                disabled={!store.canRedo()}
                id='redo-button'
                onClick={handleRedo}
                variant="contained">
                <RedoIcon />
            </Button>
            <Button
                color="inherit"
                disabled={!store.canClose()}
                id='close-button'
                onClick={handleClose}
                variant="contained">
                <CloseIcon />
            </Button>
        </div>
    }
    else {
        value = <Stack spacing={2} direction="row" justifyContent="center" >
            <Button
                color="inherit"
                onClick={searchByCurrentList}
                variant="contained">
                <Home />
            </Button>
            <Button
                color="inherit"
                onClick={searchByLoginList}
                variant="contained">
                <People />
            </Button>
            <Button
                color="inherit"
                onClick={searchByUserName}
                variant="contained">
                <Person />
            </Button>
            <TextField id="outlined-basic" label="Enter Your Search" variant="standard" style={{ backgroundColor: 'white' }} />
        </Stack>
        // TODO:SortedListIcon

    }


    return (
        value
    );
}

export default EditToolbar;