import './App.css';
import Modal from './Component/Modal/ModalWrapper/Modal';
import Router from './Component/RouteComponent/Router/Router';
import { useAppSelector } from './store/hooks/storeHooks';
import { ModalState } from './store/modal';
// import { v4 as uuidv4 } from 'uuid';
function App() {

    const modalValue = useAppSelector(state => state.modal)

    // console.log(uuidv4())*            
    return (
        <>
            <Router />
            {
                modalValue.type !== ModalState.NONE && <Modal />
            }

        </>
    );
}

export default App;
