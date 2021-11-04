import './App.css';
import {NavigationBar} from "./Components/NavigationBar";
import DisplayItems from "./Components/DisplayItems";
import DetailedItem from "./Components/DetailedItem"
import NewAccount from "./Components/NewAccount";
import {
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import AddItem from "./Components/AddItem";
import AccountSettings from "./Components/AccountSettings";
import LinkToAccount from "./Components/LinkToAccount";
import firebase from "firebase/compat";
import {useEffect, useState} from "react";

const App = () => {

    const db = firebase.firestore()

    const [userID, setUserID] = useState(localStorage.getItem('userID') ? localStorage.getItem('userID') : '')


    const handleUpdate = (event) => {
        db.collection('items')
            .doc(event.target.id)
            .update({
                done: event.target.checked
            })
            .catch(err => console.log(err))
    }

    const addItem = async (item) => {
        await db.collection("items")
            .add(item)
            .catch(err => console.log(err))
    };

    const deleteItem = async (itemID) => {
        const db = firebase.firestore()
        await db.collection('items')
            .doc(itemID)
            .delete()
            .catch(err => console.log(err))
    }

    const resetApp = async (keep) => {
        if(!keep) {
            const documents = db.collection('items').where('user', '==', userID)
            await documents.get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    doc.ref.delete()
                })
            })
        }
        setUserID('')
    }

    useEffect(() => {
        localStorage.setItem('userID', userID)
    }, [userID])

    return (
        <div className="App" style={{height: '100vh'}}>
            <NavigationBar userID={userID} sx={{position: 'sticky'}}/>
            <Switch>
                <Route exact path={'/addItem'}>
                    <AddItem addItem={addItem}/>
                </Route>
                <Route path={'/item/:itemID'}>
                    <DetailedItem deleteItem={deleteItem}/>
                </Route>
                <Route exact path={'/account'}>
                    <AccountSettings resetApp={resetApp}/>
                </Route>
                <Route path={'/linkAccount'}>
                    <LinkToAccount setUserID={setUserID}/>
                </Route>
                <Route exact path={'/newAccount'}>
                    <NewAccount setUserID={setUserID}/>
                </Route>
                <Route exact path={'/'}>
                    {userID !== '' ?
                        <DisplayItems handleUpdate={handleUpdate} sx={{height: '100vh'}}/>
                        : <Redirect to={'/newAccount'}/>}
                </Route>
            </Switch>
        </div>
    );
}

export default App;
